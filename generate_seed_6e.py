import json

questions = []

def add_q(id_str, q_text, ans, diff="easy", time=90, qtype="short_answer", t="Area", graphData=None):
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

def add_multi(id_str, q_text, subQs, diff="medium", time=120, t="Area", graphData=None):
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
add_q("y12a-6e-q1a", "Find the exact area between the curve \\( y = \\cos x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{2} \\).", "1", "easy", 90)
add_q("y12a-6e-q1b", "Find the exact area between the curve \\( y = \\cos x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{6} \\).", "\\frac{1}{2}", "easy", 90)

# Q2
add_q("y12a-6e-q2a", "Find the exact area between the curve \\( y = \\sec^2 x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{4} \\).", "1", "easy", 90)
add_q("y12a-6e-q2b", "Find the exact area between the curve \\( y = \\sec^2 x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{3} \\).", "\\sqrt{3}", "easy", 90)

# Q3
add_q("y12a-6e-q3a", "Find the exact area between the curve \\( y = \\sin x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{4} \\).", "1 - \\frac{\\sqrt{2}}{2}", "easy", 90)
add_q("y12a-6e-q3b", "Find the exact area between the curve \\( y = \\sin x \\) and the x-axis from \\( x = 0 \\) to \\( x = \\frac{\\pi}{6} \\).", "1 - \\frac{\\sqrt{3}}{2}", "easy", 90)

# Q4
q4a_graph = {
    "jsxGraph": {
        "width": 300,
        "height": 200,
        "boundingbox": [-1, 2, 4, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return Math.sin(x); };\nvar curve = board.create('functiongraph', [f, -0.5, 3.5], {strokeColor: 'black'});\nvar integral = board.create('integral', [[0, Math.PI/2], curve], {color: 'lightblue', fillOpacity: 0.5});\nboard.create('text', [Math.PI/2, -0.3], '\\\\(\\\\frac{\\\\pi}{2}\\\\)', {anchorX: 'middle'});\nboard.create('text', [Math.PI, -0.3], '\\\\(\\\\pi\\\\)', {anchorX: 'middle'});\nboard.create('text', [-0.3, 1], '1', {anchorX: 'right'});\nboard.unsuspendUpdate();"
    }
}
q4b_graph = {
    "jsxGraph": {
        "width": 300,
        "height": 200,
        "boundingbox": [-1, 2, 4, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f = function(x) { return Math.cos(x); };\nvar curve = board.create('functiongraph', [f, -0.5, 3.5], {strokeColor: 'black'});\nvar integral = board.create('integral', [[Math.PI/2, Math.PI], curve], {color: 'lightblue', fillOpacity: 0.5});\nboard.create('text', [Math.PI/2, 0.3], '\\\\(\\\\frac{\\\\pi}{2}\\\\)', {anchorX: 'middle'});\nboard.create('text', [Math.PI, 0.3], '\\\\(\\\\pi\\\\)', {anchorX: 'middle'});\nboard.create('text', [-0.3, 1], '1', {anchorX: 'right'});\nboard.unsuspendUpdate();"
    }
}
add_q("y12a-6e-q4a", "Find the area of the shaded region.", "1", "easy", 90, graphData=q4a_graph)
add_q("y12a-6e-q4b", "Find the area of the shaded region.", "1", "easy", 90, graphData=q4b_graph)

# Q5
q5_data = [
    ("a", "y = \\sin x", "\\frac{\\pi}{3}", "\\frac{\\pi}{2}", "\\frac{1}{2}"),
    ("b", "y = \\sin 2x", "\\frac{\\pi}{4}", "\\frac{\\pi}{2}", "\\frac{1}{2}"),
    ("c", "y = \\cos x", "\\frac{\\pi}{3}", "\\frac{\\pi}{2}", "1 - \\frac{\\sqrt{3}}{2}"),
    ("d", "y = \\cos 3x", "\\frac{\\pi}{12}", "\\frac{\\pi}{6}", "\\frac{1}{3} - \\frac{\\sqrt{2}}{6}"),
    ("e", "y = \\sec^2 x", "\\frac{\\pi}{6}", "\\frac{\\pi}{3}", "\\frac{2\\sqrt{3}}{3}"),
    ("f", "y = \\sec^2 \\frac{1}{2}x", "-\\frac{\\pi}{2}", "\\frac{\\pi}{2}", "4")
]
for sub, curve, lb, ub, ans in q5_data:
    add_q("y12a-6e-q5" + sub, "Find the exact area enclosed between the curve \\( " + curve + " \\) and the x-axis from \\( x = " + lb + " \\) to \\( x = " + ub + " \\).", ans, "medium", 120)

# Q6
q6a_graph = {
    "jsxGraph": {
        "width": 300,
        "height": 200,
        "boundingbox": [-1, 2, 4, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f1 = function(x) { return Math.sin(x); };\nvar f2 = function(x) { return Math.cos(x); };\nboard.create('functiongraph', [f1, -0.5, 3.5], {strokeColor: 'black'});\nboard.create('functiongraph', [f2, -0.5, 3.5], {strokeColor: 'black', dash: 1});\nboard.create('inequality', [board.create('functiongraph', [f1, Math.PI/4, Math.PI/2]), board.create('functiongraph', [f2, Math.PI/4, Math.PI/2])], {fillColor: 'lightblue', fillOpacity: 0.5});\nboard.unsuspendUpdate();"
    }
}
q6b_graph = {
    "jsxGraph": {
        "width": 300,
        "height": 200,
        "boundingbox": [-1, 2, 4, -2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f1 = function(x) { return Math.sin(x); };\nvar f2 = function(x) { return Math.sin(2*x); };\nboard.create('functiongraph', [f1, -0.5, 3.5], {strokeColor: 'black'});\nboard.create('functiongraph', [f2, -0.5, 3.5], {strokeColor: 'black', dash: 1});\nboard.unsuspendUpdate();"
    }
}
q6c_graph = {
    "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [-1, 2.5, 4, -1],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 2]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [3.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f1 = function(x) { return x; };\nvar f2 = function(x) { return Math.sin(x); };\nboard.create('functiongraph', [f1, 0, 2], {strokeColor: 'black'});\nboard.create('functiongraph', [f2, 0, 3.5], {strokeColor: 'black', dash: 1});\nboard.unsuspendUpdate();"
    }
}
q6d_graph = {
    "jsxGraph": {
        "width": 300,
        "height": 200,
        "boundingbox": [-2, 2, 2, -1],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.5]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[-1.5,0], [1.5, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar f1 = function(x) { return 1; };\nvar f2 = function(x) { return Math.cos(x); };\nboard.create('functiongraph', [f1, -1.5, 1.5], {strokeColor: 'black'});\nboard.create('functiongraph', [f2, -1.5, 1.5], {strokeColor: 'black', dash: 1});\nboard.unsuspendUpdate();"
    }
}
add_q("y12a-6e-q6a", "Calculate the area of the shaded region bounded by \\( y = \\sin x \\) and \\( y = \\cos x \\) from \\( x = \\frac{\\pi}{4} \\) to \\( x = \\frac{\\pi}{2} \\).", "\\sqrt{2} - 1", "medium", 120, graphData=q6a_graph)
add_q("y12a-6e-q6b", "Calculate the area of the shaded region bounded by \\( y = \\sin x \\) and \\( y = \\sin 2x \\) from \\( x = \\frac{\\pi}{3} \\) to \\( x = \\frac{\\pi}{2} \\).", "\\frac{1}{4}", "medium", 120, graphData=q6b_graph)
add_q("y12a-6e-q6c", "Calculate the area of the shaded region bounded by \\( y = x \\) and \\( y = \\sin x \\) from \\( x = 0 \\) to \\( x = \\frac{\\pi}{2} \\).", "\\frac{\\pi^2}{8} - 1", "medium", 120, graphData=q6c_graph)
add_q("y12a-6e-q6d", "Calculate the area of the shaded region bounded by \\( y = 1 \\) and \\( y = \\cos x \\) from \\( x = -\\frac{\\pi}{2} \\) to \\( x = \\frac{\\pi}{2} \\).", "\\pi - 2", "medium", 120, graphData=q6d_graph)

# Q7
add_q("y12a-6e-q7a", "Calculate the area of the shaded region bounded by \\( y = \\sin x \\), \\( y = \\cos x \\), and the x-axis from \\( x = \\frac{\\pi}{4} \\) to \\( x = \\pi \\).", "\\sqrt{2}", "medium", 120)
add_q("y12a-6e-q7b", "Calculate the area of the shaded region bounded by \\( y = x + 1 \\), \\( y = \\cos x \\), and the x-axis, shown in the diagram.", "\\frac{3}{2}", "medium", 120)

# Q8
add_q("y12a-6e-q8a", "Find the area bounded by one arch of the curve \\( y = \\sin x \\) and the x-axis.", "2", "medium", 120)
add_q("y12a-6e-q8b", "Find the area bounded by one arch of the curve \\( y = \\cos 2x \\) and the x-axis.", "1", "medium", 120)

# Q9
q9_data = [
    ("a", "y = \\cos x", "x = 0 \\text{ to } x = \\pi", "2"),
    ("b", "y = \\sin x", "x = \\frac{\\pi}{4} \\text{ to } x = \\frac{3\\pi}{4}", "\\sqrt{2}"),
    ("c", "y = \\cos 2x", "x = 0 \\text{ to } x = \\pi", "2"),
    ("d", "y = \\sin 2x", "x = \\frac{\\pi}{3} \\text{ to } x = \\frac{2\\pi}{3}", "\\frac{1}{2}"),
    ("e", "y = \\sin x", "x = -\\frac{5\\pi}{6} \\text{ to } x = \\frac{7\\pi}{6}", "4"),
    ("f", "y = \\cos 3x", "x = \\frac{\\pi}{6} \\text{ to } x = \\frac{2\\pi}{3}", "1")
]
for sub, curve, domain, ans in q9_data:
    add_q("y12a-6e-q9" + sub, "Find the exact value of the area enclosed between the curve \\( " + curve + " \\) and the x-axis over " + domain + ".", ans, "medium", 120)

# Q10
add_multi("y12a-6e-q10", "", [
    {
        "id": "y12a-6e-q10a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Sketch the curve \\( y = 2 \\cos \\pi x \\) in the interval \\( [-1, 1] \\), clearly marking the two x-intercepts.",
        "a": "Sketch",
        "solutionSteps": [{"explanation": "Intercepts at x = -0.5, 0.5.", "workingOut": ""}]
    },
    {
        "id": "y12a-6e-q10b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find the exact area bounded by the curve \\( y = 2 \\cos \\pi x \\) and the x-axis, between the two x-intercepts.",
        "a": "\\frac{4}{\\pi}",
        "solutionSteps": [{"explanation": "Integrate from -0.5 to 0.5.", "workingOut": ""}]
    }
], "medium", 120)

# Q11
add_multi("y12a-6e-q11", "", [
    {
        "id": "y12a-6e-q11a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "An arch window 3 metres high and 2 metres wide is made in the shape of the curve \\( y = 3 \\cos(\\frac{\\pi}{2} x) \\). Find the area of the window in square metres, correct to one decimal place.",
        "a": "3.8",
        "solutionSteps": [{"explanation": "Integrate from -1 to 1.", "workingOut": ""}]
    }
], "medium", 120)

# Q12
add_multi("y12a-6e-q12", "", [
    {
        "id": "y12a-6e-q12a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "The graphs of \\( y = x - \\sin x \\) and \\( y = x \\) enclose an area. Find the total area enclosed between these graphs, from \\( x = 0 \\) to \\( x = 2\\pi \\).",
        "a": "4",
        "solutionSteps": [{"explanation": "Integrate the difference from 0 to pi, and pi to 2pi.", "workingOut": ""}]
    }
], "medium", 120)

# Q13
add_multi("y12a-6e-q13", "", [
    {
        "id": "y12a-6e-q13a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "The region R is bounded by the curve \\( y = \\tan x \\), the x-axis and the vertical line \\( x = \\frac{\\pi}{3} \\). Show that R has area \\( \\ln 2 \\) square units.",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Integrate tan x.", "workingOut": ""}]
    }
], "medium", 120)

# Q14
add_multi("y12a-6e-q14", "", [
    {
        "id": "y12a-6e-q14a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Sketch the region bounded by the graphs of \\( y = \\sin x \\) and \\( y = \\cos x \\), and by the vertical lines \\( x = -\\frac{\\pi}{2} \\) and \\( x = \\frac{\\pi}{6} \\).",
        "a": "Sketch",
        "solutionSteps": [{"explanation": "Draw graphs.", "workingOut": ""}]
    },
    {
        "id": "y12a-6e-q14b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find the exact area of the region in part (a).",
        "a": "\\frac{3 + \\sqrt{3}}{2}",
        "solutionSteps": [{"explanation": "Integrate cos x - sin x.", "workingOut": ""}]
    }
], "medium", 120)

# Q15
add_multi("y12a-6e-q15", "", [
    {
        "id": "y12a-6e-q15a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) Show by substitution that \\( y = \\sin x \\) and \\( y = \\cos 2x \\) meet at \\( x = -\\frac{\\pi}{2} \\) and \\( x = \\frac{\\pi}{6} \\).",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Substitute values.", "workingOut": ""}]
    },
    {
        "id": "y12a-6e-q15b",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) On the same number plane, sketch \\( y = \\sin x \\) and \\( y = \\cos 2x \\) in the interval \\( [-\\frac{\\pi}{2}, \\frac{\\pi}{6}] \\).",
        "a": "Sketch",
        "solutionSteps": [{"explanation": "Draw graphs.", "workingOut": ""}]
    },
    {
        "id": "y12a-6e-q15c",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "c) Hence find the area of the region bounded by the two curves.",
        "a": "\\frac{3\\sqrt{3}}{4}",
        "solutionSteps": [{"explanation": "Integrate cos 2x - sin x.", "workingOut": ""}]
    }
], "hard", 180)

# Q16
add_q("y12a-6e-q16a_i", "Show that for all positive integers n: \\( \\int_0^{2\\pi} \\sin nx \\,dx = 0 \\).", "Proof", "hard", 180, "teacher_review")
add_q("y12a-6e-q16a_ii", "Show that for all positive integers n: \\( \\int_0^{2\\pi} \\cos nx \\,dx = 0 \\).", "Proof", "hard", 180, "teacher_review")
add_q("y12a-6e-q16b_i", "Find the area between the curve \\( y = \\sin x \\) and the x-axis, from \\( x = 0 \\) to \\( x = 2\\pi \\).", "4", "hard", 180)
add_q("y12a-6e-q16b_ii", "Find the area between the curve \\( y = \\sin 2x \\) and the x-axis, from \\( x = 0 \\) to \\( x = 2\\pi \\).", "4", "hard", 180)
add_q("y12a-6e-q16b_iii", "Find the area between the curve \\( y = \\sin 3x \\) and the x-axis, from \\( x = 0 \\) to \\( x = 2\\pi \\).", "4", "hard", 180)
add_q("y12a-6e-q16b_iv", "Find the area between the curve \\( y = \\sin nx \\) and the x-axis, from \\( x = 0 \\) to \\( x = 2\\pi \\) (where n is a positive integer).", "4", "hard", 180)
add_q("y12a-6e-q16b_v", "Find the area between the curve \\( y = \\cos nx \\) and the x-axis, from \\( x = 0 \\) to \\( x = 2\\pi \\) (where n is a positive integer).", "4", "hard", 180)

# Q17
add_multi("y12a-6e-q17", "", [
    {
        "id": "y12a-6e-q17a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) Show that \\( \\int_0^n (1 + \\sin 2\\pi x) \\,dx = n \\), for all positive integers n.",
        "a": "Proof",
        "solutionSteps": [{"explanation": "Integrate.", "workingOut": ""}]
    },
    {
        "id": "y12a-6e-q17b",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) Sketch \\( y = 1 + \\sin 2\\pi x \\), and interpret the result geometrically.",
        "a": "Sketch",
        "solutionSteps": [{"explanation": "Interpret as a rectangle.", "workingOut": ""}]
    }
], "hard", 180)

with open('src/constants/seedYear12aCh6EQuestions.js', 'w') as f:
    f.write("export const Y12A_CH6E_QUESTIONS = " + json.dumps(questions, indent=2) + ";\n")
