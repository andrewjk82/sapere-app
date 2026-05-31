import json

questions = []

def add_q(id_str, q_text, ans, diff="medium", time=120, qtype="short_answer", t="Chapter review exercise", graphData=None):
    q = {
        "id": id_str,
        "type": qtype,
        "difficulty": diff,
        "timeLimit": time,
        "question": q_text,
        "a": ans,
        "solution": "",
        "t": t,
        "hint": "",
        "solutionSteps": [],
    }
    if graphData:
        q["graphData"] = graphData
    questions.append(q)

def add_subq(id_str, q_text, diff="medium", time=120, subqs=[], t="Chapter review exercise", graphData=None):
    q = {
        "id": id_str,
        "type": "subquestions",
        "difficulty": diff,
        "timeLimit": time,
        "question": q_text,
        "t": t,
        "hint": "",
        "subQuestions": subqs
    }
    if graphData:
        q["graphData"] = graphData
    questions.append(q)

# Q1: Differentiate (Medium)
# original: a) y=5sin x, b) y=sin 5x, c) y=5cos 5x, d) y=tan(5x-4), e) y=x sin 5x, f) y=(cos 5x)/x, g) y=sin^5 x, h) y=tan(x^5), i) y=e^(cos 5x), j) y=log_e(sin 5x)
# New: a) y=4sin x, b) y=sin 4x, c) y=4cos 4x, d) y=tan(4x-3), e) y=x sin 4x, f) y=(cos 4x)/x, g) y=sin^4 x, h) y=tan(x^4), i) y=e^(cos 4x), j) y=log_e(sin 4x)
q1_funcs = [
    ("a", "y = 4 \\sin x", "y' = 4 \\cos x"),
    ("b", "y = \\sin 4x", "y' = 4 \\cos 4x"),
    ("c", "y = 4 \\cos 4x", "y' = -16 \\sin 4x"),
    ("d", "y = \\tan(4x - 3)", "y' = 4 \\sec^2 (4x - 3)"),
    ("e", "y = x \\sin 4x", "y' = \\sin 4x + 4x \\cos 4x"),
    ("f", "y = \\frac{\\cos 4x}{x}", "y' = \\frac{-4x \\sin 4x - \\cos 4x}{x^2}"),
    ("g", "y = \\sin^4 x", "y' = 4 \\sin^3 x \\cos x"),
    ("h", "y = \\tan(x^4)", "y' = 4x^3 \\sec^2(x^4)"),
    ("i", "y = e^{\\cos 4x}", "y' = -4 \\sin 4x \\cdot e^{\\cos 4x}"),
    ("j", "y = \\log_e(\\sin 4x)", "y' = 4 \\cot 4x")
]
for p, func, ans in q1_funcs:
    add_q(f"y12a-6f-q1{p}", f"Differentiate with respect to \\( x \\):<br>\\( {func} \\)", ans, "medium", 120)

# Q2: Find gradient of tangent to y=cos 2x at x=pi/3 (Medium)
# New: y=cos 3x at x=pi/4
# dy/dx = -3 sin 3x. At pi/4, -3 sin(3pi/4) = -3 * 1/sqrt(2) = -3/sqrt(2)
add_q("y12a-6f-q2", "Find the exact gradient of the tangent to \\( y = \\cos 3x \\) at the point on the curve where \\( x = \\frac{\\pi}{4} \\).", "-\\frac{3}{\\sqrt{2}}", "medium", 120)

# Q3: Find equation of tangent (Medium) -> subQuestions
# original: a) y=tan x at x=pi/3, b) y=x cos x at x=pi/2
# New: a) y=tan x at x=pi/4, b) y=x sin x at x=pi/2
# a) y(pi/4) = 1. y' = sec^2 x -> sec^2(pi/4) = (sqrt2)^2 = 2. Eq: y - 1 = 2(x - pi/4) => y = 2x - pi/2 + 1
# b) y(pi/2) = pi/2 * 1 = pi/2. y' = sin x + x cos x -> sin(pi/2) + 0 = 1. Eq: y - pi/2 = 1(x - pi/2) => y = x
subqs3 = [
    {
        "id": "y12a-6f-q3a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "a) Find the equation of the tangent to \\( y = \\tan x \\) at the point where \\( x = \\frac{\\pi}{4} \\).",
        "a": "y = 2x - \\frac{\\pi}{2} + 1"
    },
    {
        "id": "y12a-6f-q3b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 120,
        "question": "b) Find the equation of the tangent to \\( y = x \\sin x \\) at the point where \\( x = \\frac{\\pi}{2} \\).",
        "a": "y = x"
    }
]
add_subq("y12a-6f-q3", "", "medium", 120, subqs3)

# Q4: Find x-coords of stationary points for 0 <= x <= 2pi (Medium) -> separate
# original: a) y=x+cos x, b) y=sin x - cos x
# New: a) y=x-2sin x, b) y=sqrt(3)sin x + cos x
# a) y' = 1 - 2cos x = 0 -> cos x = 1/2 -> x = pi/3, 5pi/3
# b) y' = sqrt(3)cos x - sin x = 0 -> tan x = sqrt(3) -> x = pi/3, 4pi/3
add_q("y12a-6f-q4a", "Find the \\( x \\)-coordinates of the stationary points on the curve \\( y = x - 2\\sin x \\), for \\( 0 \\le x \\le 2\\pi \\).<br>(Enter answers separated by commas)", "\\frac{\\pi}{3}, \\frac{5\\pi}{3}", "medium", 120)
add_q("y12a-6f-q4b", "Find the \\( x \\)-coordinates of the stationary points on the curve \\( y = \\sqrt{3}\\sin x + \\cos x \\), for \\( 0 \\le x \\le 2\\pi \\).<br>(Enter answers separated by commas)", "\\frac{\\pi}{3}, \\frac{4\\pi}{3}", "medium", 120)

# Q5: Find integral (Medium) -> separate
# original: a) int 4cos x, b) int sin 4x, c) int sec^2 (x/4)
# New: a) int 5sin x dx, b) int cos 5x dx, c) int sec^2 (x/5) dx
add_q("y12a-6f-q5a", "Find:<br>\\( \\int 5\\sin x \\, dx \\)<br>(Omit the constant of integration \\( C \\) in your answer)", "-5\\cos x", "medium", 120)
add_q("y12a-6f-q5b", "Find:<br>\\( \\int \\cos 5x \\, dx \\)<br>(Omit the constant of integration \\( C \\) in your answer)", "\\frac{1}{5}\\sin 5x", "medium", 120)
add_q("y12a-6f-q5c", "Find:<br>\\( \\int \\sec^2 \\frac{x}{5} \\, dx \\)<br>(Omit the constant of integration \\( C \\) in your answer)", "5\\tan \\frac{x}{5}", "medium", 120)

# Q6: Find value of integral (Medium) -> separate
# original: a) int_{pi/4}^{pi/3} sec^2 x, b) int_0^{pi/4} cos 2x, c) int_0^{1/3} pi sin(pi x)
# New: a) int_{0}^{pi/4} sec^2 x, b) int_0^{pi/6} cos 3x, c) int_0^{1/2} pi cos(pi x)
# a) [tan x] = 1 - 0 = 1
# b) [1/3 sin 3x] = 1/3 sin(pi/2) - 0 = 1/3
# c) [sin(pi x)] = sin(pi/2) - sin 0 = 1
add_q("y12a-6f-q6a", "Find the exact value of:<br>\\( \\int_{0}^{\\frac{\\pi}{4}} \\sec^2 x \\, dx \\)", "1", "medium", 120)
add_q("y12a-6f-q6b", "Find the exact value of:<br>\\( \\int_{0}^{\\frac{\\pi}{6}} \\cos 3x \\, dx \\)", "\\frac{1}{3}", "medium", 120)
add_q("y12a-6f-q6c", "Find the exact value of:<br>\\( \\int_{0}^{\\frac{1}{2}} \\pi \\cos(\\pi x) \\, dx \\)", "1", "medium", 120)

# Q7: Find value of integral to 3 decimal places (Hard)
# original: int_0^{pi/4} sin 3x dx
# New: int_0^{pi/3} cos 2x dx
# [1/2 sin 2x]_0^{pi/3} = 1/2 sin(2pi/3) = 1/2 * sqrt(3)/2 = sqrt(3)/4 = 1.73205 / 4 = 0.43301 -> 0.433
add_q("y12a-6f-q7", "Find the value of \\( \\int_{0}^{\\frac{\\pi}{3}} \\cos 2x \\, dx \\), correct to three decimal places.", "0.433", "hard", 180)

# Q8: A curve has gradient function (Hard)
# original: y' = cos(1/2 x), passes through (pi, 1).
# New: y' = sin(1/2 x), passes through (pi, 2).
# y = -2 cos(1/2 x) + C. At (pi, 2): 2 = -2 cos(pi/2) + C => 2 = 0 + C => C = 2.
# y = -2 cos(1/2 x) + 2
add_q("y12a-6f-q8", "A curve has gradient function \\( y' = \\sin \\frac{1}{2}x \\) and passes through the point \\( (\\pi, 2) \\). Find its equation.", "y = -2\\cos \\frac{x}{2} + 2", "hard", 180)

# Q9: Sketch and area (Hard) -> subQuestions
# original: y = 2sin 2x in [0, pi], shade between pi/4 and 3pi/4. Calculate area.
# New: y = 3cos 2x in [0, pi], shade between pi/4 and 3pi/4.
# Note: between pi/4 and 3pi/4, cos 2x is negative.
# int_{pi/4}^{3pi/4} -3cos 2x = [-3/2 sin 2x]_{pi/4}^{3pi/4} = -3/2 (sin 3pi/2 - sin pi/2) = -3/2 (-1 - 1) = 3
subqs9 = [
    {
        "id": "y12a-6f-q9a",
        "type": "teacher_review",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) Sketch the curve \\( y = 3\\cos 2x \\) in the interval \\( [0, \\pi] \\), and then shade the area between the curve and the \\( x \\)-axis from \\( x = \\frac{\\pi}{4} \\) to \\( x = \\frac{3\\pi}{4} \\).",
        "a": "Sketch"
    },
    {
        "id": "y12a-6f-q9b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) Calculate the exact value of the shaded area in part (a).",
        "a": "3"
    }
]
add_subq("y12a-6f-q9", "", "hard", 180, subqs9)

# Q10: Find area of shaded region (Hard) -> separate
# original a: y=cos x, y=cos 2x from 0 to pi/2 (wait, graph a is y=cos x and y=cos 2x. Intersect at 0 and somewhere? No, they don't intersect except at 0? Wait, the graph shows y=cos x is above y=cos 2x. The shaded region is bounded by y=cos x on top, y=cos 2x on bottom, from x=0 to x=pi/4, then y=cos x and x-axis from pi/4 to pi/2. Wait, no. The shaded area is between y=cos x and y=cos 2x from x=0 to the x-intercept of cos 2x which is pi/4. But the shading goes all the way to pi/2!
# Let me look closely at Q10a graph. Top curve is y=cos x. Bottom curve is y=cos 2x.
# Wait! y=cos 2x dips below x-axis after pi/4. The shaded region is bounded by y=cos x and y=cos 2x. It seems it goes from x=0 to x=pi/2? Wait, at x=pi/2, cos x = 0, cos 2x = -1. But the shading stops at y=0!
# Oh, the shading is bounded by y=cos x, y=cos 2x, and the x-axis!
# So it's from x=0 to x=pi/4 between the curves, plus x=pi/4 to x=pi/2 between y=cos x and x-axis?
# No, look at the arrow. It points to the region.
# It is bounded above by y=cos x. Bounded below by y=cos 2x AND the x-axis.
# Wait, for a new question, let's just make it simple: area between y = sin x and y = sin 2x for 0 to pi/3.
# sin x = sin 2x => sin x = 2sin x cos x => cos x = 1/2 => x = pi/3.
# Area = int_0^{pi/3} (sin 2x - sin x) dx = [-1/2 cos 2x + cos x]_0^{pi/3} = (-1/2(-1/2) + 1/2) - (-1/2 + 1) = (1/4 + 1/2) - 1/2 = 1/4.

graph_10a = {
    "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [-0.2, 1.2, 1.2, -0.2],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.2]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [1.2, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('text', [1.15, -0.05], 'x', {anchorX: 'right', anchorY: 'top'});\nboard.create('text', [-0.05, 1.15], 'y', {anchorX: 'right', anchorY: 'top'});\nvar c1 = board.create('functiongraph', [function(x){return Math.sin(2*x);}, 0, Math.PI/3], {strokeColor: 'black'});\nvar c2 = board.create('functiongraph', [function(x){return Math.sin(x);}, 0, Math.PI/3], {strokeColor: 'black'});\nboard.create('inequality', [c1], {inverse: true, fillColor: 'lightblue', fillOpacity: 0.5});\nboard.create('text', [Math.PI/3, -0.05], '\\\\(\\\\frac{\\\\pi}{3}\\\\)', {anchorX: 'middle', anchorY: 'top'});\nboard.unsuspendUpdate();"
    }
}
add_q("y12a-6f-q10a", "Find the exact area of the shaded region bounded by \\( y = \\sin 2x \\) and \\( y = \\sin x \\) from \\( x = 0 \\) to \\( x = \\frac{\\pi}{3} \\).", "\\frac{1}{4}", "hard", 180, "short_answer", "Chapter review exercise", graph_10a)

# original b: y = cos 2x and y = cos x between pi/4 and 3pi/4.
# New b: y = sin 2x and y = -sin x between pi/2 and pi? No, let's do y = cos x and y = -cos 2x?
# How about area between y = sin 2x and y = cos x from x = pi/6 to x = pi/2.
# sin 2x = cos x => 2sin x cos x = cos x => sin x = 1/2 => x = pi/6. At pi/2, both are 0.
# Area = int_{pi/6}^{pi/2} (cos x - sin 2x) dx = [sin x + 1/2 cos 2x]_{pi/6}^{pi/2} = (1 - 1/2) - (1/2 + 1/2(-1/2)) = 1/2 - 1/4 = 1/4.
graph_10b = {
    "jsxGraph": {
        "width": 350,
        "height": 250,
        "boundingbox": [0, 1.2, 1.8, -0.5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 1.2]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [1.8, 0]], {strokeColor: 'black', strokeWidth: 1});\nvar c1 = board.create('functiongraph', [function(x){return Math.cos(x);}, Math.PI/6, Math.PI/2], {strokeColor: 'black'});\nvar c2 = board.create('functiongraph', [function(x){return Math.sin(2*x);}, Math.PI/6, Math.PI/2], {strokeColor: 'black'});\nboard.create('text', [Math.PI/6, -0.05], '\\\\(\\\\frac{\\\\pi}{6}\\\\)', {anchorX: 'middle', anchorY: 'top'});\nboard.create('text', [Math.PI/2, -0.05], '\\\\(\\\\frac{\\\\pi}{2}\\\\)', {anchorX: 'middle', anchorY: 'top'});\nboard.unsuspendUpdate();"
    }
}
add_q("y12a-6f-q10b", "Find the exact area of the shaded region bounded by \\( y = \\cos x \\) and \\( y = \\sin 2x \\) from \\( x = \\frac{\\pi}{6} \\) to \\( x = \\frac{\\pi}{2} \\).", "\\frac{1}{4}", "hard", 180, "short_answer", "Chapter review exercise", graph_10b)


# Q11: a) Write cot x in terms of sin x and cos x, b) Hence find exact area... (Hard) -> subQuestions
# original: a) tan x = sin x / cos x. b) int tan x = -ln(cos x).
# New: a) Write cot x in terms of sin x and cos x. b) area of cot x from pi/6 to pi/2.
# int_{pi/6}^{pi/2} cot x dx = [ln(sin x)]_{pi/6}^{pi/2} = ln(1) - ln(1/2) = ln 2.
graph_11 = {
    "jsxGraph": {
        "width": 300,
        "height": 250,
        "boundingbox": [-0.5, 3, 2, -0.5],
        "script": "board.suspendUpdate();\nboard.create('arrow', [[0,0], [0, 3]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('arrow', [[0,0], [2, 0]], {strokeColor: 'black', strokeWidth: 1});\nboard.create('functiongraph', [function(x){return Math.cos(x)/Math.sin(x);}, Math.PI/6, Math.PI/2], {strokeColor: 'black'});\nboard.create('text', [Math.PI/6, -0.1], '\\\\(\\\\frac{\\\\pi}{6}\\\\)', {anchorX: 'middle', anchorY: 'top'});\nboard.create('text', [Math.PI/2, -0.1], '\\\\(\\\\frac{\\\\pi}{2}\\\\)', {anchorX: 'middle', anchorY: 'top'});\nboard.unsuspendUpdate();"
    }
}

subqs11 = [
    {
        "id": "y12a-6f-q11a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "a) Write \\( \\cot x \\) in terms of \\( \\sin x \\) and \\( \\cos x \\).",
        "a": "\\frac{\\cos x}{\\sin x}"
    },
    {
        "id": "y12a-6f-q11b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 180,
        "question": "b) Hence find the exact area of the shaded region bounded by \\( y = \\cot x \\), the \\( x \\)-axis, and the vertical lines \\( x = \\frac{\\pi}{6} \\) and \\( x = \\frac{\\pi}{2} \\).",
        "a": "\\ln 2"
    }
]
add_subq("y12a-6f-q11", "", "hard", 180, subqs11, "Chapter review exercise", graph_11)

out_js = f"export const Y12A_CH6F_QUESTIONS = {json.dumps(questions, indent=2, ensure_ascii=False)};"

with open("src/constants/seedYear12aCh6FQuestions.js", "w") as f:
    f.write(out_js)

