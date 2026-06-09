import json

def generate_jsx_graph(script, bbox):
    return {
        "jsxGraph": {
            "width": 350,
            "height": 250,
            "boundingbox": bbox,
            "boardOptions": { "keepaspectratio": False },
            "script": "board.suspendUpdate();\n" + script + "\nboard.unsuspendUpdate();"
        }
    }

questions = []

# Q1 (18 items)
q1_data = [
    ("a", "y > x + 2", "y = x + 2", "above", "dashed"),
    ("b", "y < 3x + 2", "y = 3x + 2", "below", "dashed"),
    ("c", "y \le 2x - 3", "y = 2x - 3", "below", "solid"),
    ("d", "y > 2 - x", "y = 2 - x", "above", "dashed"),
    ("e", "3x + y \le 6", "3x + y = 6", "below", "solid"),
    ("f", "2x - 3y > 6", "2x - 3y = 6", "below", "dashed"),
    ("g", "2x + y > 2", "2x + y = 2", "above", "dashed"),
    ("h", "x - 3y < 3", "x - 3y = 3", "above", "dashed"),
    ("i", "y \le 3x", "y = 3x", "below", "solid"),
    ("j", "y \ge 2x", "y = 2x", "above", "solid"),
    ("k", "x \ge 2", "x = 2", "right", "solid"),
    ("l", "x < 3", "x = 3", "left", "dashed"),
    ("m", "y < 3", "y = 3", "below", "dashed"),
    ("n", "y \le -1", "y = -1", "below", "solid"),
    ("o", "3x + 2y \le 6", "3x + 2y = 6", "below", "solid"),
    ("p", "3x - y \le 6", "3x - y = 6", "above", "solid"),
    ("q", "3x - y \ge 3", "3x - y = 3", "below", "solid"),
    ("r", "y < 2 - 3x", "y = 2 - 3x", "below", "dashed"),
]

for sub, ineq, eq, region, line_type in q1_data:
    questions.append({
        "id": f"y10-11d-q1{sub}",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Sketch the region:\n\\({ineq}\\)",
        "a": "Teacher review required",
        "t": "Regions of the plane",
        "hint": f"Graph the boundary {eq} as a {line_type} line and shade the region {region} it.",
        "solutionSteps": [
            {
                "explanation": f"First, draw the boundary line \\({eq}\\).",
                "workingOut": ""
            },
            {
                "explanation": f"Since the inequality is {ineq}, use a {line_type} line.",
                "workingOut": ""
            },
            {
                "explanation": f"Test a point not on the line (like the origin if possible) to determine which side to shade. Shade the region {region} the line.",
                "workingOut": "\\text{See the final sketch.}"
            }
        ],
        "graphData": None
    })

# Q2 (4 items) - these require graph in question
q2_data = [
    ("a", "y \ge 2x + 2", "y = 2x + 2", [-3, 6, 3, -2], "board.create('axis', [[0,0],[1,0]]); board.create('axis', [[0,0],[0,1]]); var line = board.create('line', [[0,2], [-1,0]], {strokeColor: '#4f46e5', strokeWidth: 2}); board.create('inequality', [line], {inverse: false, fillColor: '#4f46e5', fillOpacity: 0.2});"),
    ("b", "y < -x + 3", "y = -x + 3", [-2, 5, 5, -2], "board.create('axis', [[0,0],[1,0]]); board.create('axis', [[0,0],[0,1]]); var line = board.create('line', [[0,3], [3,0]], {dash: 2, strokeColor: '#4f46e5', strokeWidth: 2}); board.create('inequality', [line], {inverse: true, fillColor: '#4f46e5', fillOpacity: 0.2});"),
    ("c", "y < -2x + 2", "y = -2x + 2", [-2, 4, 4, -2], "board.create('axis', [[0,0],[1,0]]); board.create('axis', [[0,0],[0,1]]); var line = board.create('line', [[0,2], [1,0]], {dash: 2, strokeColor: '#4f46e5', strokeWidth: 2}); board.create('inequality', [line], {inverse: true, fillColor: '#4f46e5', fillOpacity: 0.2});"),
    ("d", "y \ge 3x - 3", "y = 3x - 3", [-2, 4, 4, -4], "board.create('axis', [[0,0],[1,0]]); board.create('axis', [[0,0],[0,1]]); var line = board.create('line', [[0,-3], [1,0]], {strokeColor: '#4f46e5', strokeWidth: 2}); board.create('inequality', [line], {inverse: false, fillColor: '#4f46e5', fillOpacity: 0.2});"),
]

for sub, ans, eq, bbox, script in q2_data:
    questions.append({
        "id": f"y10-11d-q2{sub}",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Write down the inequality that describes the given shaded region.",
        "a": ans,
        "t": "Regions of the plane",
        "hint": "Find the equation of the boundary line first, then determine the inequality sign based on the line type and shaded region.",
        "solutionSteps": [
            {
                "explanation": "Determine the equation of the boundary line by finding its intercepts or slope.",
                "workingOut": f"\\text{{The line is }} {eq}"
            },
            {
                "explanation": "Determine the inequality sign based on whether the line is solid or dashed, and which side is shaded.",
                "workingOut": f"\\therefore {ans}"
            }
        ],
        "graphData": generate_jsx_graph(script, bbox)
    })

# Q3 (12 items)
q3_data = [
    ("a", "y > x \\text{ and } x + y \le 4", "(2, 2)"),
    ("b", "y \le 3x \\text{ and } 3x + y > 6", "(1, 3)"),
    ("c", "x + y \le 5 \\text{ and } 2x + y \le 8", "(3, 2)"),
    ("d", "x + 2y \le 10 \\text{ and } 2x + y \le 8", "(2, 4)"),
    ("e", "y \ge x + 2 \\text{ and } y > 2x - 1", "(3, 5)"),
    ("f", "y \le 2 - x \\text{ and } y \ge x", "(1, 1)"),
    ("g", "x \le 3 \\text{ and } y \le 2", "(3, 2)"),
    ("h", "x \le -1 \\text{ and } y \ge 3", "(-1, 3)"),
    ("i", "x \ge 2, x \le 4, y \ge 1 \\text{ and } y \le 5", "(2, 1), (4, 1), (4, 5), (2, 5)"),
    ("j", "x \ge 0, y \ge 0 \\text{ and } x + y \le 5", "(0, 0), (5, 0), (0, 5)"),
    ("k", "x \ge 0, y \ge 0, x + y \le 4 \\text{ and } x + 2y \le 6", "(0, 0), (4, 0), (2, 2), (0, 3)"),
    ("l", "y \ge x, y \ge 0 \\text{ and } y \le -x + 4", "(0, 0), (2, 2), (0, 4)"),
]

for sub, ineq, corners in q3_data:
    questions.append({
        "id": f"y10-11d-q3{sub}",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": f"Sketch the region satisfying the given inequalities. Find the coordinates of the corner point(s).\n\\({ineq}\\)",
        "a": corners,
        "t": "Regions of the plane",
        "hint": "Graph each inequality and find their intersection. The corner points are where the boundary lines intersect.",
        "solutionSteps": [
            {
                "explanation": "Identify the boundary lines for each inequality.",
                "workingOut": "\\text{Set each inequality to an equation to find the boundaries.}"
            },
            {
                "explanation": "Solve the system of equations to find the points of intersection (corner points).",
                "workingOut": f"\\text{{Corner point(s): }} {corners}"
            },
            {
                "explanation": "Sketch the final region by shading the intersection of all inequalities.",
                "workingOut": "\\text{See sketch.}"
            }
        ],
        "graphData": None
    })

# Q4 (6 items) - graph in question
q4_data = [
    ("a", "y \le x + 3 \\text{ and } y \le -x + 3 \\text{ and } y \ge 0", [-4, 5, 4, -1], "board.create('axis', [[0,0],[1,0]]); board.create('axis', [[0,0],[0,1]]); board.create('polygon', [[-3,0],[3,0],[0,3]], {fillColor: '#4f46e5', fillOpacity: 0.2});"),
    ("b", "y \ge 2x + 2 \\text{ and } y \ge x - 2", [-4, 6, 4, -4], "board.create('axis', [[0,0],[1,0]]); board.create('axis', [[0,0],[0,1]]); var l1=board.create('line', [[0,2],[-1,0]],{strokeColor:'#4f46e5'}); var l2=board.create('line', [[0,-2],[2,0]],{strokeColor:'#4f46e5'}); board.create('inequality', [l1], {inverse: false, fillColor: '#4f46e5', fillOpacity: 0.2});"),
    ("c", "x < 3 \\text{ and } y \ge 1", [-1, 4, 5, -1], "board.create('axis', [[0,0],[1,0]]); board.create('axis', [[0,0],[0,1]]); var l1=board.create('line', [[3,0],[3,1]],{dash:2, strokeColor:'#4f46e5'}); var l2=board.create('line', [[0,1],[1,1]],{strokeColor:'#4f46e5'}); board.create('polygon', [[-5,1],[3,1],[3,5],[-5,5]], {fillColor: '#4f46e5', fillOpacity: 0.2});"),
    ("d", "y \le 2x \\text{ and } y < 4", [-1, 6, 5, -1], "board.create('axis', [[0,0],[1,0]]); board.create('axis', [[0,0],[0,1]]); var l1=board.create('line', [[0,0],[2,4]],{strokeColor:'#4f46e5'}); var l2=board.create('line', [[0,4],[1,4]],{dash:2,strokeColor:'#4f46e5'}); board.create('polygon', [[0,0],[2,4],[5,4],[5,-5],[0,-5]], {fillColor: '#4f46e5', fillOpacity: 0.2});"),
    ("e", "x \le 3 \\text{ and } y \ge x", [-1, 5, 5, -1], "board.create('axis', [[0,0],[1,0]]); board.create('axis', [[0,0],[0,1]]); var l1=board.create('line', [[0,0],[1,1]],{strokeColor:'#4f46e5'}); var l2=board.create('line', [[3,0],[3,1]],{strokeColor:'#4f46e5'}); board.create('polygon', [[-5,-5],[3,3],[3,5],[-5,5]], {fillColor: '#4f46e5', fillOpacity: 0.2});"),
    ("f", "x \ge 0, y \ge 0 \\text{ and } x + y \le 4", [-1, 5, 5, -1], "board.create('axis', [[0,0],[1,0]]); board.create('axis', [[0,0],[0,1]]); board.create('polygon', [[0,0],[4,0],[0,4]], {fillColor: '#4f46e5', fillOpacity: 0.2});"),
]

for sub, ans, bbox, script in q4_data:
    questions.append({
        "id": f"y10-11d-q4{sub}",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Write down the inequalities whose intersections form the shaded region.",
        "a": ans,
        "t": "Regions of the plane",
        "hint": "Identify the equation of each boundary line and determine the correct inequality signs.",
        "solutionSteps": [
            {
                "explanation": "Find the equations of all boundary lines.",
                "workingOut": "\\text{Use intercepts or slope to find the line equations.}"
            },
            {
                "explanation": "Apply the correct inequality sign based on the shading.",
                "workingOut": f"\\therefore {ans}"
            }
        ],
        "graphData": generate_jsx_graph(script, bbox)
    })

# Q5 (4 items)
q5_data = [
    ("a", "x^2 + y^2 < 9"),
    ("b", "(x - 1)^2 + y^2 \ge 4"),
    ("c", "(x + 2)^2 + (y - 2)^2 > 9"),
    ("d", "(x + 3)^2 + (y + 1)^2 \le 4"),
]

for sub, ineq in q5_data:
    questions.append({
        "id": f"y10-11d-q5{sub}",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": f"Sketch each region.\n\\({ineq}\\)",
        "a": "Teacher review required",
        "t": "Regions of the plane",
        "hint": "Identify the center and radius of the circle, then shade inside or outside.",
        "solutionSteps": [
            {
                "explanation": "Determine the center and radius of the boundary circle.",
                "workingOut": "\\text{Find the center and radius.}"
            },
            {
                "explanation": "Sketch the circle (solid or dashed) and shade the correct region.",
                "workingOut": "\\text{See sketch.}"
            }
        ],
        "graphData": None
    })

# Q6 (1 item)
questions.append({
    "id": "y10-11d-q6",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch the region:\n\\(y > \\frac{2}{x}\\)",
    "a": "Teacher review required",
    "t": "Regions of the plane",
    "hint": "Sketch the hyperbola first.",
    "solutionSteps": [
        {
            "explanation": "Graph the boundary hyperbola \\(y = \\frac{2}{x}\\) as a dashed curve.",
            "workingOut": ""
        },
        {
            "explanation": "Shade the region above the curve in both quadrants.",
            "workingOut": "\\text{See sketch.}"
        }
    ],
    "graphData": None
})

js_content = "export const Y10_CH11D_QUESTIONS = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\n"

with open("/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11DQuestions.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("File written successfully.")
