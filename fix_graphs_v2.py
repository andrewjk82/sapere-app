import json
import re

q1_map = {
    "y10-11d-q1a": {"ineq": "y > x + 2", "pts": [[0,2], [2,4]], "inv": "true", "dash": True},
    "y10-11d-q1b": {"ineq": "y < 3x + 2", "pts": [[0,2], [1,5]], "inv": "false", "dash": True},
    "y10-11d-q1c": {"ineq": "y \\le 2x - 3", "pts": [[0,-3], [2,1]], "inv": "false", "dash": False},
    "y10-11d-q1d": {"ineq": "y > 2 - x", "pts": [[0,2], [2,0]], "inv": "true", "dash": True},
    "y10-11d-q1e": {"ineq": "3x + y \\le 6", "pts": [[0,6], [2,0]], "inv": "false", "dash": False},
    "y10-11d-q1f": {"ineq": "2x - 3y > 6", "pts": [[0,-2], [3,0]], "inv": "false", "dash": True},
    "y10-11d-q1g": {"ineq": "2x + y > 2", "pts": [[0,2], [1,0]], "inv": "true", "dash": True},
    "y10-11d-q1h": {"ineq": "x - 3y < 3", "pts": [[0,-1], [3,0]], "inv": "true", "dash": True},
    "y10-11d-q1i": {"ineq": "y \\le 3x", "pts": [[0,0], [1,3]], "inv": "false", "dash": False},
    "y10-11d-q1j": {"ineq": "y \\ge 2x", "pts": [[0,0], [1,2]], "inv": "true", "dash": False},
    "y10-11d-q1k": {"ineq": "x \\ge 2", "pts": [[2,0], [2,2]], "inv": "false", "dash": False},
    "y10-11d-q1l": {"ineq": "x < 3", "pts": [[3,0], [3,2]], "inv": "true", "dash": True},
    "y10-11d-q1m": {"ineq": "y < 3", "pts": [[0,3], [2,3]], "inv": "false", "dash": True},
    "y10-11d-q1n": {"ineq": "y \\le -1", "pts": [[0,-1], [2,-1]], "inv": "false", "dash": False},
    "y10-11d-q1o": {"ineq": "3x + 2y \\le 6", "pts": [[0,3], [2,0]], "inv": "false", "dash": False},
    "y10-11d-q1p": {"ineq": "3x - y \\le 6", "pts": [[0,-6], [2,0]], "inv": "true", "dash": False},
    "y10-11d-q1q": {"ineq": "3x - y \\ge 3", "pts": [[0,-3], [1,0]], "inv": "false", "dash": False},
    "y10-11d-q1r": {"ineq": "y < 2 - 3x", "pts": [[0,2], [1,-1]], "inv": "false", "dash": True},
}

file_path = "/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch11DQuestions.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Extract JSON string
json_str = content.replace("export const Y10_CH11D_QUESTIONS = ", "").strip()
if json_str.endswith(";"):
    json_str = json_str[:-1]

questions = json.loads(json_str)

for q in questions:
    if q["id"] in q1_map:
        info = q1_map[q["id"]]
        p1, p2 = info["pts"]
        dash_str = ", dash: 2" if info["dash"] else ""
        
        script = f"board.suspendUpdate();\n"
        script += f"board.create('axis', [[0,0],[1,0]], {{firstArrow: true, lastArrow: true}});\n"
        script += f"board.create('axis', [[0,0],[0,1]], {{firstArrow: true, lastArrow: true}});\n"
        script += f"var p1 = board.create('point', {p1}, {{visible: false}});\n"
        script += f"var p2 = board.create('point', {p2}, {{visible: false}});\n"
        script += f"var l1 = board.create('line', [p1, p2], {{strokeColor: '#4f46e5'{dash_str}}});\n"
        script += f"board.create('inequality', [l1], {{inverse: {info['inv']}, fillColor: '#4f46e5', fillOpacity: 0.2}});\n"
        # Optional text label
        script += f"board.create('text', [{p2[0]+0.5}, {p2[1]+0.5}, '{info['ineq']}']);\n"
        script += f"board.unsuspendUpdate();"
        
        q["solutionSteps"][-1]["graphData"] = {
            "jsxGraph": {
                "width": 350,
                "height": 250,
                "boundingbox": [-5, 7, 7, -5],
                "boardOptions": { "keepaspectratio": False },
                "script": script
            }
        }

js_content = "export const Y10_CH11D_QUESTIONS = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\n"

with open(file_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print("Q1 graphs fixed successfully.")
