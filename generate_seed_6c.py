import json
import math

questions = []

def add_q(id_str, q_text, ans, diff="easy", time=90, qtype="short_answer", t="Applications of differentiation", graphData=None):
    q = {
        "id": id_str,
        "type": qtype,
        "difficulty": diff,
        "timeLimit": time,
        "question": q_text,
        "a": ans,
        "t": t,
        "solutionSteps": [{"explanation": "Working out", "workingOut": ans}] if qtype == "short_answer" else [{"explanation": "Proof or sketch", "workingOut": ""}]
    }
    if graphData:
        q["graphData"] = graphData
    questions.append(q)

def add_multi(id_str, q_text, subQs, diff="medium", time=120, t="Applications of differentiation", graphData=None):
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
    ("a", "y = \\sin x", "0", "1"),
    ("b", "y = \\cos x", "\\frac{\\pi}{2}", "-1"),
    ("c", "y = \\sin x", "\\frac{\\pi}{3}", "\\frac{{1}}{{2}}"),
    ("d", "y = \\cos x", "\\frac{\\pi}{6}", "-\\frac{{1}}{{2}}"),
    ("e", "y = \\sin x", "\\frac{\\pi}{4}", "\\frac{1}{\\sqrt{2}}"),
    ("f", "y = \\tan x", "0", "1"),
    ("g", "y = \\tan x", "\\frac{\\pi}{4}", "2"),
    ("h", "y = \\cos 2x", "\\frac{\\pi}{4}", "-2"),
    ("i", "y = -\\cos \\frac{{1}}{{2}}x", "\\frac{2\\pi}{3}", "\\frac{\\sqrt{3}}{4}"),
    ("j", "y = \\sin \\frac{x}{2}", "\\frac{2\\pi}{3}", "\\frac{1}{4}"),
    ("k", "y = \\tan 2x", "\\frac{\\pi}{6}", "8"),
    ("l", "y = \\sin 2x", "\\frac{\\pi}{12}", "\\sqrt{3}")
]
for sub, expr, val, ans in q1_data:
    add_q(f"y12a-6c-q1{sub}", f"Find the gradient of the tangent to the curve \\( {expr} \\) at \\( x = {val} \\).", ans, "easy", 90)

# Q2
q2_data = [
    ("a", "y = x", "y = \\sin x", "(0, 0)"),
    ("b", "y = x", "y = \\tan x", "(0, 0)"),
    ("c", "y = \\frac{\\pi}{2} - x", "y = \\cos x", "(\\frac{\\pi}{2}, 0)")
]
for sub, line, curve, pt in q2_data:
    add_q(f"y12a-6c-q2{sub}", f"Show that the line \\( {line} \\) is the tangent to the curve \\( {curve} \\) at \\( {pt} \\).", "Proof", "easy", 90, "teacher_review")

# Q3
q3_data = [
    ("a", "y = \\sin x", "(\\pi, 0)", "y = -x + \\pi"),
    ("b", "y = \\tan x", "(\\frac{\\pi}{4}, 1)", "y = 2x - \\frac{\\pi}{2} + 1"),
    ("c", "y = \\cos x", "(\\frac{\\pi}{6}, \\frac{\\sqrt{3}}{2})", "y = -\\frac{{1}}{{2}}x + \\frac{\\pi}{12} + \\frac{\\sqrt{3}}{2}"),
    ("d", "y = \\cos 2x", "(\\frac{\\pi}{4}, 0)", "y = -2x + \\frac{\\pi}{2}"),
    ("e", "y = \\sin 2x", "(\\frac{\\pi}{3}, \\frac{\\sqrt{3}}{2})", "y = -x + \\frac{\\pi}{3} + \\frac{\\sqrt{3}}{2}"),
    ("f", "y = x \\sin x", "(\\pi, 0)", "y = -\\pi x + \\pi^2")
]
for sub, curve, pt, ans in q3_data:
    add_q(f"y12a-6c-q3{sub}", f"Find the equation of the tangent to the curve \\( {curve} \\) at the point \\( {pt} \\).", ans, "medium", 120)

# Q4
q4_data = [
    ("a", "y = 2 \\sin x", "x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}"),
    ("b", "y = 2 \\sin x - x", "x = \\frac{\\pi}{3}, \\frac{5\\pi}{3}"),
    ("c", "y = 2 \\cos x + x", "x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}"),
    ("d", "y = 2 \\sin x + \\sqrt{3}x", "x = \\frac{5\\pi}{6}, \\frac{7\\pi}{6}")
]
for sub, curve, ans in q4_data:
    add_q(f"y12a-6c-q4{sub}", f"Find, in the domain \\( 0 \\le x \\le 2\\pi \\), the x-coordinates of the points on the curve \\( {curve} \\) where the gradient of the tangent is zero.", ans, "medium", 120)

# Q5
q5_data = [
    ("a", "tangent", "2\\sqrt{3}x - y = \\frac{1}{3}\\pi\\sqrt{3} - \\frac{{1}}{{2}}"),
    ("b", "normal", "x + 2\\sqrt{3}y = \\frac{\\pi}{6} + \\sqrt{3}")
]
for sub, line_type, eq in q5_data:
    add_q(f"y12a-6c-q5{sub}", "The point \\( P(\\frac{\\pi}{6}, \\frac{1}{2}) \\) lies on the curve \\( y = 2 \\sin x - \\cos 2x \\). Show that the " + line_type + " at \\( P \\) has equation \\( " + eq + " \\).", "Proof", "medium", 120, "teacher_review")

# Q6
add_multi("y12a-6c-q6", "", [
    {
        "id": "y12a-6c-q6a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Show that \\( y = \\sin^2 x \\) has derivative \\( y' = 2 \\sin x \\cos x \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Use chain rule.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q6b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find the gradients of the tangent and normal to \\( y = \\sin^2 x \\) at the point where \\( x = \\frac{\\pi}{4} \\).",
        "a": "Tangent gradient: 1, Normal gradient: -1",
        "solutionSteps": [{"explanation": "Evaluate derivative.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q6c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) Find the equations of the tangent and normal to \\( y = \\sin^2 x \\) at the point where \\( x = \\frac{\\pi}{4} \\).",
        "a": "Tangent: y = x - \\frac{\\pi}{4} + \\frac{{1}}{{2}}, Normal: y = -x + \\frac{\\pi}{4} + \\frac{{1}}{{2}}",
        "solutionSteps": [{"explanation": "Use point-gradient formula.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q6d",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "d) Suppose that the tangent meets the x-axis at P, the normal meets the y-axis at Q and O is the origin. Show that \\( \\triangle OPQ \\) has area \\( \\frac{1}{32}(\\pi^2 - 4) \\) units\\(^2\\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Find intercepts and use area formula.", "workingOut": ""}]
    }
], "medium", 120)

# Q7
add_multi("y12a-6c-q7", "", [
    {
        "id": "y12a-6c-q7a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Differentiate \\( y = e^{\\sin x} \\).",
        "a": "e^{\\sin x} \\cos x",
        "solutionSteps": [{"explanation": "Chain rule.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q7b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Hence find, in the domain \\( [0, 2\\pi] \\), the x-coordinates of the points on the curve \\( y = e^{\\sin x} \\) where the tangent is horizontal.",
        "a": "x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}",
        "solutionSteps": [{"explanation": "Set derivative to zero.", "workingOut": ""}]
    }
], "medium", 120)

# Q8
add_multi("y12a-6c-q8", "", [
    {
        "id": "y12a-6c-q8a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Differentiate \\( y = e^{\\cos x} \\).",
        "a": "-e^{\\cos x} \\sin x",
        "solutionSteps": [{"explanation": "Chain rule.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q8b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Hence find, in the domain \\( [0, 2\\pi] \\), the x-coordinates of the points on the curve \\( y = e^{\\cos x} \\) where the tangent is horizontal.",
        "a": "x = 0, \\pi, 2\\pi",
        "solutionSteps": [{"explanation": "Set derivative to zero.", "workingOut": ""}]
    }
], "medium", 120)

# Q9
add_multi("y12a-6c-q9", "For the curve \\( y = \\cos x + \\sqrt{3} \\sin x \\):", [
    {
        "id": "y12a-6c-q9a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Find the first and second derivatives of \\( y \\).",
        "a": "y' = -\\sin x + \\sqrt{3} \\cos x, y'' = -\\cos x - \\sqrt{3} \\sin x",
        "solutionSteps": [{"explanation": "Differentiate.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q9b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find the stationary points in the domain \\( 0 \\le x \\le 2\\pi \\), and determine their nature.",
        "a": "Maximum at (\\frac{\\pi}{3}, 2), Minimum at (\\frac{4\\pi}{3}, -2)",
        "solutionSteps": [{"explanation": "Set y'=0.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q9c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) Find the points of inflection.",
        "a": "(\\frac{5\\pi}{6}, 0) and (\\frac{11\\pi}{6}, 0)",
        "solutionSteps": [{"explanation": "Set y''=0.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q9d",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "d) Hence sketch the curve, for \\( 0 \\le x \\le 2\\pi \\).",
        "a": "Sketch",
        "solutionSteps": [{"explanation": "Plot key points.", "workingOut": ""}]
    }
], "medium", 120)

# Q10
add_multi("y12a-6c-q10", "For the curve \\( y = \\cos x - \\sin x \\):", [
    {
        "id": "y12a-6c-q10a_1",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) i) Find the first and second derivatives of \\( y \\).",
        "a": "y' = -\\sin x - \\cos x, y'' = -\\cos x + \\sin x",
        "solutionSteps": [{"explanation": "Differentiate.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q10a_2",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) ii) Find the stationary points in the domain \\( 0 \\le x \\le 2\\pi \\), and determine their nature.",
        "a": "Minimum at (\\frac{3\\pi}{4}, -\\sqrt{2}), Maximum at (\\frac{7\\pi}{4}, \\sqrt{2})",
        "solutionSteps": [{"explanation": "Set y'=0.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q10a_3",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) iii) Find the points of inflection.",
        "a": "(\\frac{\\pi}{4}, 0) and (\\frac{5\\pi}{4}, 0)",
        "solutionSteps": [{"explanation": "Set y''=0.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q10b",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Verify your results by sketching \\( y = \\cos x \\) and \\( y = -\\sin x \\) on the same diagram, and then sketching \\( y = \\cos x - \\sin x \\) by addition of heights.",
        "a": "Sketch",
        "solutionSteps": [{"explanation": "Superposition.", "workingOut": ""}]
    }
], "medium", 120)

# Q11
add_multi("y12a-6c-q11", "For the curve \\( y = x + \\sin x \\):", [
    {
        "id": "y12a-6c-q11a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Find the derivative of \\( y \\), and show that \\( y'' = -\\sin x \\).",
        "a": "y' = 1 + \\cos x, y'' = -\\sin x",
        "solutionSteps": [{"explanation": "Differentiate.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q11b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find the stationary points in the domain \\( -2\\pi < x < 2\\pi \\), and determine their nature.",
        "a": "Horizontal points of inflection at (-\\pi, -\\pi) and (\\pi, \\pi)",
        "solutionSteps": [{"explanation": "Check concavity changes.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q11c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) Find the points of inflection in the domain \\( -2\\pi < x < 2\\pi \\).",
        "a": "(-\\pi, -\\pi), (0, 0), (\\pi, \\pi)",
        "solutionSteps": [{"explanation": "y''=0.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q11d",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "d) Hence sketch the curve, for \\( -2\\pi \\le x \\le 2\\pi \\).",
        "a": "Sketch",
        "solutionSteps": [{"explanation": "Draw curve.", "workingOut": ""}]
    }
], "medium", 120)

# Q12
add_multi("y12a-6c-q12", "For the curve \\( y = x - \\cos x \\):", [
    {
        "id": "y12a-6c-q12a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Find the first and second derivatives.",
        "a": "y' = 1 + \\sin x, y'' = \\cos x",
        "solutionSteps": [{"explanation": "Differentiate.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q12b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find the stationary points in the domain \\( -2\\pi < x < 2\\pi \\), and determine their nature.",
        "a": "Horizontal points of inflection at (-\\frac{\\pi}{2}, -\\frac{\\pi}{2}) and (\\frac{3\\pi}{2}, \\frac{3\\pi}{2})",
        "solutionSteps": [{"explanation": "Set y'=0.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q12c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) Find the points of inflection in the domain \\( -2\\pi < x < 2\\pi \\).",
        "a": "(-\\frac{3\\pi}{2}, -\\frac{3\\pi}{2}), (-\\frac{\\pi}{2}, -\\frac{\\pi}{2}), (\\frac{\\pi}{2}, \\frac{\\pi}{2}), (\\frac{3\\pi}{2}, \\frac{3\\pi}{2})",
        "solutionSteps": [{"explanation": "Set y''=0.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q12d",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "d) Hence sketch the curve, for \\( -2\\pi \\le x \\le 2\\pi \\).",
        "a": "Sketch",
        "solutionSteps": [{"explanation": "Draw curve.", "workingOut": ""}]
    }
], "medium", 120)

# Q13
add_multi("y12a-6c-q13", "A conical tent with top \\( T \\) is being designed to have a slant height of 3 metres. Let \\( \\theta = \\angle TPO \\), where \\( O \\) is the centre of the base and \\( P \\) is any point at the ground on the edge of the tent.", [
    {
        "id": "y12a-6c-q13a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Draw a diagram, and show that the vertical height of the tent is \\( h = 3 \\sin \\theta \\), and that the base radius is \\( r = 3 \\cos \\theta \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Use trigonometry.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q13b",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Use the formula \\( V = \\frac{1}{3}\\pi r^2 h \\) for the volume \\( V \\) of a cone to show that \\( V = 3\\pi(\\sin \\theta - \\sin^3 \\theta) \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Substitute r and h.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q13c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "c) Find \\( \\frac{dV}{d\\theta} \\), and hence find in degrees, correct to two decimal places, the angle \\( \\theta \\) so that the cone has maximum volume.",
        "a": "35.26^\\circ",
        "solutionSteps": [{"explanation": "Set derivative to 0.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q13d",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "d) What is the exact value of the maximum volume of the tent?",
        "a": "\\frac{2\\pi\\sqrt{3}}{3} \\text{ m}^3",
        "solutionSteps": [{"explanation": "Substitute optimal angle into V.", "workingOut": ""}]
    }
], "medium", 120)

# Q14
add_multi("y12a-6c-q14", "For the curve \\( y = 2 \\sin x + x \\) in the interval \\( 0 \\le x \\le 2\\pi \\):", [
    {
        "id": "y12a-6c-q14a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) Find any stationary points.",
        "a": "(\\frac{2\\pi}{3}, \\sqrt{3} + \\frac{2\\pi}{3}) max, (\\frac{4\\pi}{3}, -\\sqrt{3} + \\frac{4\\pi}{3}) min",
        "solutionSteps": [{"explanation": "y' = 2 cos x + 1 = 0.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q14b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) Find any points of inflection.",
        "a": "(0, 0), (\\pi, \\pi), (2\\pi, 2\\pi)",
        "solutionSteps": [{"explanation": "y'' = -2 sin x = 0.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q14c",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "c) Hence sketch the curve.",
        "a": "Sketch",
        "solutionSteps": [{"explanation": "Draw curve.", "workingOut": ""}]
    }
], "hard", 180)

q15_graph = {
    "geometry": {
        "width": 300,
        "points": {
            "O": [0, 0],
            "P": [0, 1],
            "Q": [-0.866, -0.5],
            "R": [0.866, -0.5],
            "M": [0, -0.5]
        },
        "circles": [
            { "center": "O", "through": "P" }
        ],
        "segments": [
            { "from": "P", "to": "Q" },
            { "from": "Q", "to": "R" },
            { "from": "R", "to": "P" },
            { "from": "O", "to": "Q", "dashed": True },
            { "from": "O", "to": "R", "dashed": True },
            { "from": "P", "to": "M", "dashed": True }
        ],
        "sideLabels": [
            { "between": ["O", "P"], "text": "1" }
        ],
        "angles": [
            { "at": "O", "between": ["P", "Q"], "text": "\\theta" },
            { "at": "O", "between": ["R", "P"], "text": "\\theta" }
        ]
    }
}

# Q15
add_multi("y12a-6c-q15", "An isosceles triangle \\( PQR \\) is inscribed in a circle with centre \\( O \\) of radius 1 unit. Let \\( \\angle QOR = 2\\theta \\), where \\( \\theta \\) is acute.", [
    {
        "id": "y12a-6c-q15a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) Join \\( PO \\) and extend it to meet \\( QR \\) at \\( M \\). Then prove that \\( QM = \\sin \\theta \\) and \\( OM = \\cos \\theta \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Use right triangles.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q15b",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) Show that the area \\( A \\) of \\( \\triangle PQR \\) is \\( A = \\sin \\theta (\\cos \\theta + 1) \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "A = 1/2 * base * height.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q15c",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "c) Hence show that, as \\( \\theta \\) varies, \\( \\triangle PQR \\) has its maximum possible area when it is equilateral.",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Maximize A w.r.t theta.", "workingOut": ""}]
    }
], "hard", 180, graphData=q15_graph)

# Q16
add_multi("y12a-6c-q16", "", [
    {
        "id": "y12a-6c-q16a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) Show that \\( \\frac{d}{d\\theta} \\left( \\frac{2 - \\sin \\theta}{\\cos \\theta} \\right) = \\frac{2 \\sin \\theta - 1}{\\cos^2 \\theta} \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Quotient rule.", "workingOut": ""}]
    },
    {
        "id": "y12a-6c-q16b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) Hence find the maximum and minimum values of the expression \\( \\frac{2 - \\sin \\theta}{\\cos \\theta} \\) in the interval \\( 0 \\le \\theta \\le \\frac{\\pi}{4} \\), and state the values of \\( \\theta \\) for which they occur.",
        "a": "Maximum is 2 at \\( \\theta = 0 \\), minimum is \\sqrt{3} at \\( \\theta = \\frac{\\pi}{6} \\).",
        "solutionSteps": [{"explanation": "Test endpoints and stationary point.", "workingOut": ""}]
    }
], "hard", 180)

with open('src/constants/seedYear12aCh6CQuestions.js', 'w') as f:
    f.write("export const Y12A_CH6C_QUESTIONS = " + json.dumps(questions, indent=2) + ";\n")
