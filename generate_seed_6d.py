import json

questions = []

def add_q(id_str, q_text, ans, diff="easy", time=90, qtype="short_answer", t="Integrating the trigonometric functions", graphData=None):
    q = {
        "id": id_str,
        "type": qtype,
        "difficulty": diff,
        "timeLimit": time,
        "question": q_text,
        "a": ans,
        "t": t,
        "solutionSteps": [{"explanation": "Working out", "workingOut": ans}] if qtype == "short_answer" else [{"explanation": "Proof or evaluate", "workingOut": ans}]
    }
    if graphData:
        q["graphData"] = graphData
    questions.append(q)

def add_multi(id_str, q_text, subQs, diff="medium", time=120, t="Integrating the trigonometric functions", graphData=None):
    q = {
        "id": id_str,
        "type": "subquestions",
        "difficulty": diff,
        "timeLimit": time,
        "question": q_text,
        "t": t,
        "subQuestions": subQs
    }
    if graphData:
        q["graphData"] = graphData
    questions.append(q)

# Q1
q1_data = [
    ("a", "\\sec^2 x", "\\tan x + C"),
    ("b", "\\cos x", "\\sin x + C"),
    ("c", "\\sin x", "-\\cos x + C"),
    ("d", "-\\sin x", "\\cos x + C"),
    ("e", "2 \\cos x", "2 \\sin x + C"),
    ("f", "\\cos 2x", "\\frac{1}{2}\\sin 2x + C"),
    ("g", "\\frac{1}{2} \\cos x", "\\frac{1}{2}\\sin x + C"),
    ("h", "\\cos \\frac{1}{2}x", "2 \\sin \\frac{1}{2}x + C"),
    ("i", "\\sin 2x", "-\\frac{1}{2}\\cos 2x + C"),
    ("j", "\\sec^2 5x", "\\frac{1}{5}\\tan 5x + C"),
    ("k", "\\cos 3x", "\\frac{1}{3}\\sin 3x + C"),
    ("l", "\\sec^2 \\frac{1}{3}x", "3 \\tan \\frac{1}{3}x + C"),
    ("m", "\\sin \\frac{x}{2}", "-2 \\cos \\frac{x}{2} + C"),
    ("n", "-\\cos \\frac{1}{5}x", "-5 \\sin \\frac{1}{5}x + C"),
    ("o", "-4 \\sin 2x", "2 \\cos 2x + C"),
    ("p", "\\frac{1}{4} \\sin \\frac{1}{4}x", "-\\cos \\frac{1}{4}x + C"),
    ("q", "12 \\sec^2 \\frac{1}{3}x", "36 \\tan \\frac{1}{3}x + C"),
    ("r", "2 \\cos \\frac{x}{3}", "6 \\sin \\frac{x}{3} + C")
]
for sub, integrand, ans in q1_data:
    add_q("y12a-6d-q1" + sub, "Find the indefinite integral: \\( \\int " + integrand + " \\,dx \\).", ans, "easy", 90)

# Q2
q2_data = [
    ("a", "\\int_0^{\\frac{\\pi}{2}} \\cos x \\,dx", "1"),
    ("b", "\\int_0^{\\frac{\\pi}{6}} \\cos x \\,dx", "\\frac{1}{2}"),
    ("c", "\\int_0^{\\frac{\\pi}{4}} \\sin x \\,dx", "1 - \\frac{1}{\\sqrt{2}}"),
    ("d", "\\int_0^{\\frac{\\pi}{3}} \\sec^2 x \\,dx", "\\sqrt{3}"),
    ("e", "\\int_0^{\\frac{\\pi}{4}} 2 \\cos 2x \\,dx", "1"),
    ("f", "\\int_0^{\\frac{\\pi}{3}} \\sin 2x \\,dx", "\\frac{3}{4}"),
    ("g", "\\int_0^{\\frac{\\pi}{2}} \\sec^2 (\\frac{1}{2}x) \\,dx", "2"),
    ("h", "\\int_0^{\\frac{\\pi}{3}} \\cos (\\frac{1}{2}x) \\,dx", "1"),
    ("i", "\\int_0^{\\pi} (2 \\sin x - \\sin 2x) \\,dx", "4")
]
for sub, integral, ans in q2_data:
    add_q("y12a-6d-q2" + sub, "Find the value of: \\( " + integral + " \\).", ans, "easy", 90)

# Q3
add_multi("y12a-6d-q3", "", [
    {
        "id": "y12a-6d-q3a_i",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) i) The gradient function of a certain curve is given by \\( \\frac{dy}{dx} = \\sin x \\). If the curve passes through the origin, find its equation.",
        "a": "y = 1 - \\cos x",
        "solutionSteps": [{"explanation": "Integrate and find C.", "workingOut": ""}]
    },
    {
        "id": "y12a-6d-q3a_ii",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) ii) If the curve passes through \\( (\\frac{\\pi}{2}, 3) \\) find its equation.",
        "a": "y = 3 - \\cos x",
        "solutionSteps": [{"explanation": "Integrate and find C.", "workingOut": ""}]
    },
    {
        "id": "y12a-6d-q3a_iii",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) iii) What translation moves the curve in part i to the curve in part ii?",
        "a": "Translation 2 units upwards.",
        "solutionSteps": [{"explanation": "Compare the two equations.", "workingOut": ""}]
    },
    {
        "id": "y12a-6d-q3b",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) Another curve passing through the origin has gradient function \\( y' = \\cos x - 2 \\sin 2x \\). Find its equation.",
        "a": "y = \\sin x + \\cos 2x - 1",
        "solutionSteps": [{"explanation": "Integrate.", "workingOut": ""}]
    },
    {
        "id": "y12a-6d-q3c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) If \\( \\frac{dy}{dx} = \\sin x + \\cos x \\), and \\( y = -2 \\) when \\( x = \\pi \\), find \\( y \\) as a function of \\( x \\).",
        "a": "y = -\\cos x + \\sin x - 3",
        "solutionSteps": [{"explanation": "Integrate.", "workingOut": ""}]
    }
], "easy", 90)

# Q6
q6_data = [
    ("a", "\\cos(x + 2)", "\\sin(x + 2) + C"),
    ("b", "\\cos(2x + 1)", "\\frac{1}{2}\\sin(2x + 1) + C"),
    ("c", "\\sin(x + 2)", "-\\cos(x + 2) + C"),
    ("d", "\\sin(2x + 1)", "-\\frac{1}{2}\\cos(2x + 1) + C"),
    ("e", "\\cos(3x - 2)", "\\frac{1}{3}\\sin(3x - 2) + C"),
    ("f", "\\sin(7 - 5x)", "\\frac{1}{5}\\cos(7 - 5x) + C"),
    ("g", "\\sec^2(4 - x)", "-\\tan(4 - x) + C"),
    ("h", "\\sec^2(1 - \\frac{x}{3})", "-3 \\tan(1 - \\frac{x}{3}) + C"),
    ("i", "\\sin(1 - \\frac{x}{3})", "3 \\cos(1 - \\frac{x}{3}) + C")
]
for sub, integrand, ans in q6_data:
    add_q("y12a-6d-q6" + sub, "Find the indefinite integral: \\( \\int " + integrand + " \\,dx \\).", ans, "medium", 120)

# Q7
add_q("y12a-6d-q7a", "Find \\( \\int (6 \\cos 3x - 4 \\sin \\frac{1}{2}x) \\,dx \\).", "2 \\sin 3x + 8 \\cos \\frac{1}{2}x + C", "medium", 120)
add_q("y12a-6d-q7b", "Find \\( \\int (8 \\sec^2 2x - 10 \\cos \\frac{1}{4}x + 12 \\sin \\frac{1}{3}x) \\,dx \\).", "4 \\tan 2x - 40 \\sin \\frac{1}{4}x - 36 \\cos \\frac{1}{3}x + C", "medium", 120)

# Q8
add_q("y12a-6d-q8a_1", "If \\( f'(x) = \\pi \\cos \\pi x \\) and \\( f(0) = 0 \\), find \\( f(x) \\).", "\\sin \\pi x", "medium", 120)
add_q("y12a-6d-q8a_2", "If \\( f'(x) = \\pi \\cos \\pi x \\) and \\( f(0) = 0 \\), find \\( f(\\frac{1}{3}) \\).", "\\frac{\\sqrt{3}}{2}", "medium", 120)
add_q("y12a-6d-q8b_1", "If \\( f'(x) = \\cos \\pi x \\) and \\( f(0) = \\frac{1}{2\\pi} \\), find \\( f(x) \\).", "\\frac{1}{\\pi} \\sin \\pi x + \\frac{1}{2\\pi}", "medium", 120)
add_q("y12a-6d-q8b_2", "If \\( f'(x) = \\cos \\pi x \\) and \\( f(0) = \\frac{1}{2\\pi} \\), find \\( f(\\frac{1}{6}) \\).", "\\frac{1}{\\pi}", "medium", 120)
add_q("y12a-6d-q8c", "If \\( f''(x) = 18 \\cos 3x \\) and \\( f'(0) = 1 \\), \\( f(\\frac{\\pi}{2}) = 1 \\), find \\( f(x) \\).", "-2 \\cos 3x + x + 1 - \\frac{\\pi}{2}", "medium", 120)

# Q9
add_q("y12a-6d-q9a", "Find the indefinite integral, where \\( a, b \\) are constants: \\( \\int a \\sin(ax + b) \\,dx \\).", "-\\cos(ax + b) + C", "medium", 120)
add_q("y12a-6d-q9b", "Find the indefinite integral: \\( \\int \\pi^2 \\cos \\pi x \\,dx \\).", "\\pi \\sin \\pi x + C", "medium", 120)
add_q("y12a-6d-q9c", "Find the indefinite integral, where \\( u, v \\) are constants: \\( \\int \\frac{1}{u} \\sec^2(v + ux) \\,dx \\).", "\\frac{1}{u^2} \\tan(v + ux) + C", "medium", 120)
add_q("y12a-6d-q9d", "Find the indefinite integral, where \\( a \\) is a constant: \\( \\int \\frac{a}{\\cos^2 ax} \\,dx \\).", "\\tan ax + C", "medium", 120)

# Q10
add_multi("y12a-6d-q10", "", [
    {
        "id": "y12a-6d-q10a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Copy and complete \\( 1 + \\tan^2 x = \\dots \\), and hence find \\( \\int \\tan^2 x \\,dx \\).",
        "a": "\\tan x - x + C",
        "solutionSteps": [{"explanation": "Use sec^2 x.", "workingOut": ""}]
    },
    {
        "id": "y12a-6d-q10b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Simplify \\( 1 - \\sin^2 x \\), and hence find the value of \\( \\int_0^{\\frac{\\pi}{3}} \\frac{2}{1 - \\sin^2 x} \\,dx \\).",
        "a": "2\\sqrt{3}",
        "solutionSteps": [{"explanation": "Use cos^2 x.", "workingOut": ""}]
    }
], "medium", 120)

# Q11
add_multi("y12a-6d-q11", "", [
    {
        "id": "y12a-6d-q11a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Copy and complete \\( \\int \\frac{f'(x)}{f(x)} \\,dx = \\dots \\)",
        "a": "\\ln|f(x)| + C",
        "solutionSteps": [{"explanation": "Log rule.", "workingOut": ""}]
    },
    {
        "id": "y12a-6d-q11b",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Hence show that \\( \\int_0^{\\frac{\\pi}{6}} \\frac{\\cos x}{1 + \\sin x} \\,dx \\approx 0.4 \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Evaluate ln(1.5).", "workingOut": ""}]
    }
], "medium", 120)

# Q12
add_multi("y12a-6d-q12", "", [
    {
        "id": "y12a-6d-q12a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Use the fact that \\( \\tan x = \\frac{\\sin x}{\\cos x} \\) to show that \\( \\int_0^{\\frac{\\pi}{4}} \\tan x \\,dx = \\frac{1}{2}\\ln 2 \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Integrate sin/cos.", "workingOut": ""}]
    },
    {
        "id": "y12a-6d-q12b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Use the fact that \\( \\cot x = \\frac{\\cos x}{\\sin x} \\) to find \\( \\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{2}} \\cot x \\,dx \\).",
        "a": "\\ln 2",
        "solutionSteps": [{"explanation": "Integrate cos/sin.", "workingOut": ""}]
    }
], "medium", 120)

# Q13
add_q("y12a-6d-q13a_i", "Find \\( \\frac{d}{dx}(\\sin x^2) \\).", "2x \\cos x^2", "medium", 120)
add_q("y12a-6d-q13a_ii", "Hence find \\( \\int 2x \\cos x^2 \\,dx \\).", "\\sin x^2 + C", "medium", 120)
add_q("y12a-6d-q13b_i", "Find \\( \\frac{d}{dx}(\\cos x^3) \\).", "-3x^2 \\sin x^3", "medium", 120)
add_q("y12a-6d-q13b_ii", "Hence find \\( \\int x^2 \\sin x^3 \\,dx \\).", "-\\frac{1}{3} \\cos x^3 + C", "medium", 120)
add_q("y12a-6d-q13c_i", "Find \\( \\frac{d}{dx}(\\tan \\sqrt{x}) \\).", "\\frac{1}{2\\sqrt{x}} \\sec^2 \\sqrt{x}", "medium", 120)
add_q("y12a-6d-q13c_ii", "Hence find \\( \\int \\frac{1}{\\sqrt{x}} \\sec^2 \\sqrt{x} \\,dx \\).", "2 \\tan \\sqrt{x} + C", "medium", 120)

# Q14
add_q("y12a-6d-q14a_i", "Find \\( \\frac{d}{dx}(\\sin^5 x) \\).", "5 \\sin^4 x \\cos x", "hard", 180)
add_q("y12a-6d-q14a_ii", "Hence find \\( \\int \\sin^4 x \\cos x \\,dx \\).", "\\frac{1}{5}\\sin^5 x + C", "hard", 180)
add_q("y12a-6d-q14b_i", "Find \\( \\frac{d}{dx}(\\tan^3 x) \\).", "3 \\tan^2 x \\sec^2 x", "hard", 180)
add_q("y12a-6d-q14b_ii", "Hence find \\( \\int \\tan^2 x \\sec^2 x \\,dx \\).", "\\frac{1}{3}\\tan^3 x + C", "hard", 180)

# Q15
add_q("y12a-6d-q15a_i", "Differentiate \\( e^{\\sin x} \\).", "e^{\\sin x} \\cos x", "hard", 180)
add_q("y12a-6d-q15a_ii", "Hence find the value of \\( \\int_0^{\\frac{\\pi}{2}} \\cos x e^{\\sin x} \\,dx \\).", "e - 1", "hard", 180)
add_q("y12a-6d-q15b_i", "Differentiate \\( e^{\\tan x} \\).", "e^{\\tan x} \\sec^2 x", "hard", 180)
add_q("y12a-6d-q15b_ii", "Hence find the value of \\( \\int_0^{\\frac{\\pi}{4}} \\sec^2 x e^{\\tan x} \\,dx \\).", "e - 1", "hard", 180)

# Q16
add_q("y12a-6d-q16a", "Show that \\( \\frac{d}{dx}(\\sin x - x \\cos x) = x \\sin x \\), and hence find \\( \\int_0^{\\frac{\\pi}{2}} x \\sin x \\,dx \\).", "1", "hard", 180)
add_q("y12a-6d-q16b", "Show that \\( \\frac{d}{dx}(\\frac{1}{3}\\cos^3 x - \\cos x) = \\sin^3 x \\), and hence find \\( \\int_0^{\\frac{\\pi}{3}} \\sin^3 x \\,dx \\).", "\\frac{5}{24}", "hard", 180)

# Q17
add_multi("y12a-6d-q17", "", [
    {
        "id": "y12a-6d-q17a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "Find \\( \\frac{d}{dx}(\\frac{1}{2}x \\sin 2x + \\frac{1}{4}\\cos 2x) \\), and hence find \\( \\int_0^{\\frac{\\pi}{4}} x \\cos 2x \\,dx \\).",
        "a": "\\frac{\\pi}{8} - \\frac{1}{4}",
        "solutionSteps": [{"explanation": "Product rule and integration.", "workingOut": ""}]
    }
], "hard", 180)

# Q18
add_q("y12a-6d-q18a", "Find the definite integral if it exists, giving reasons: \\( \\int_0^{\\pi} \\sec^2 x \\,dx \\).", "Does not exist", "hard", 180, "teacher_review")
add_q("y12a-6d-q18b", "Find the definite integral if it exists, giving reasons: \\( \\int_0^{\\pi} \\tan x \\,dx \\).", "Does not exist", "hard", 180, "teacher_review")
add_q("y12a-6d-q18c", "Find the definite integral if it exists, giving reasons: \\( \\int_{-\\frac{\\pi}{2}}^{\\frac{\\pi}{2}} \\cot x \\,dx \\).", "Does not exist", "hard", 180, "teacher_review")

with open('src/constants/seedYear12aCh6DQuestions.js', 'w') as f:
    f.write("export const Y12A_CH6D_QUESTIONS = " + json.dumps(questions, indent=2) + ";\n")
