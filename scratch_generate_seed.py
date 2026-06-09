# -*- coding: utf-8: -*-
import json
import math

questions = []

# Q1: Arrange irrational numbers.
# Original: \sqrt{3}, \sqrt{6}, \sqrt[3]{30}, \sqrt[5]{60}
# New: \sqrt{2}, \sqrt{5}, \sqrt[3]{25}, \sqrt[5]{40}
# Values:
# \sqrt{2} \approx 1.41
# \sqrt[5]{40} \approx 2.09
# \sqrt{5} \approx 2.24
# \sqrt[3]{25} \approx 2.92
# Order: \sqrt{2}, \sqrt[5]{40}, \sqrt{5}, \sqrt[3]{25}
questions.append({
    "id": "y10-2e-q1",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Arrange the irrational numbers \\(\\sqrt{2}\\), \\(\\sqrt{5}\\), \\(\\sqrt[3]{25}\\) and \\(\\sqrt[5]{40}\\) in order of size from smallest to largest.",
    "a": "\\(\\sqrt{2}\\), \\(\\sqrt[5]{40}\\), \\(\\sqrt{5}\\), \\(\\sqrt[3]{25}\\)",
    "opts": [
        "\\(\\sqrt{2}\\), \\(\\sqrt[5]{40}\\), \\(\\sqrt{5}\\), \\(\\sqrt[3]{25}\\)",
        "\\(\\sqrt{2}\\), \\(\\sqrt{5}\\), \\(\\sqrt[5]{40}\\), \\(\\sqrt[3]{25}\\)",
        "\\(\\sqrt[5]{40}\\), \\(\\sqrt{2}\\), \\(\\sqrt{5}\\), \\(\\sqrt[3]{25}\\)",
        "\\(\\sqrt{2}\\), \\(\\sqrt[5]{40}\\), \\(\\sqrt[3]{25}\\), \\(\\sqrt{5}\\)"
    ],
    "solutionSteps": [
        {
            "explanation": "Find the approximate decimal value of each number.",
            "workingOut": "\\(\\sqrt{2} \\approx 1.41,\\; \\sqrt{5} \\approx 2.24,\\; \\sqrt[3]{25} \\approx 2.92,\\; \\sqrt[5]{40} \\approx 2.09\\)"
        },
        {
            "explanation": "Compare the decimal approximations: \\(1.41 < 2.09 < 2.24 < 2.92\\).",
            "workingOut": "\\(\\sqrt{2} < \\sqrt[5]{40} < \\sqrt{5} < \\sqrt[3]{25}\\)"
        }
    ],
    "t": "Irrational numbers and surds"
})

# Q2: Simplify surds (easy)
# Let's customize each with a slightly different number to keep it original
q2_data = [
    {"sub": "a", "num": 18, "ans": "3\\sqrt{2}"},
    {"sub": "b", "num": 20, "ans": "2\\sqrt{5}"},
    {"sub": "c", "num": 48, "ans": "4\\sqrt{3}"},
    {"sub": "d", "num": 72, "ans": "6\\sqrt{2}"},
    {"sub": "e", "num": 80, "ans": "4\\sqrt{5}"},
    {"sub": "f", "num": 120, "ans": "2\\sqrt{30}"},
    {"sub": "g", "num": 150, "ans": "5\\sqrt{6}"},
    {"sub": "h", "num": 162, "ans": "9\\sqrt{2}"},
    {"sub": "i", "num": 242, "ans": "11\\sqrt{2}"},
    {"sub": "j", "num": 300, "ans": "10\\sqrt{3}"}
]
for item in q2_data:
    sub = item["sub"]
    num = item["num"]
    ans = item["ans"]
    questions.append({
        "id": "y10-2e-q2" + sub,
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Simplify \\(\\sqrt{" + str(num) + "}\\).",
        "a": ans,
        "solutionSteps": [
            {
                "explanation": "Find the largest perfect square factor of " + str(num) + ".",
                "workingOut": ""
            },
            {
                "explanation": "Express as product of surds and simplify.",
                "workingOut": "\\(\\sqrt{" + str(num) + "} = " + ans + "\\)"
            }
        ],
        "t": "Irrational numbers and surds"
    })

# Q3: Simplify coefficient surds (easy)
q3_data = [
    {"sub": "a", "coeff": 3, "num": 28, "ans": "6\\sqrt{7}"},
    {"sub": "b", "coeff": 5, "num": 45, "ans": "15\\sqrt{5}"},
    {"sub": "c", "coeff": 2, "num": 98, "ans": "14\\sqrt{2}"},
    {"sub": "d", "coeff": 4, "num": 54, "ans": "12\\sqrt{6}"},
    {"sub": "e", "coeff": 3, "num": 80, "ans": "12\\sqrt{5}"}
]
for item in q3_data:
    sub = item["sub"]
    coeff = item["coeff"]
    num = item["num"]
    ans = item["ans"]
    questions.append({
        "id": "y10-2e-q3" + sub,
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Simplify \\(" + str(coeff) + "\\sqrt{" + str(num) + "}\\).",
        "a": ans,
        "solutionSteps": [
            {
                "explanation": "Simplify \\(\\sqrt{" + str(num) + "}\\) first.",
                "workingOut": ""
            },
            {
                "explanation": "Multiply the resulting whole number coefficient by the external coefficient.",
                "workingOut": "\\(" + str(coeff) + "\\sqrt{" + str(num) + "} = " + ans + "\\)"
            }
        ],
        "t": "Irrational numbers and surds"
    })

# Q4: Express as square root of a whole number (easy)
q4_data = [
    {"sub": "a", "expr": "3\\sqrt{2}", "ans": "\\sqrt{18}"},
    {"sub": "b", "expr": "2\\sqrt{7}", "ans": "\\sqrt{28}"},
    {"sub": "c", "expr": "5\\sqrt{3}", "ans": "\\sqrt{75}"},
    {"sub": "d", "expr": "4\\sqrt{6}", "ans": "\\sqrt{96}"},
    {"sub": "e", "expr": "8\\sqrt{2}", "ans": "\\sqrt{128}"}
]
for item in q4_data:
    sub = item["sub"]
    expr = item["expr"]
    ans = item["ans"]
    questions.append({
        "id": "y10-2e-q4" + sub,
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Express \\(" + expr + "\\) as the square root of a single whole number.",
        "a": ans,
        "solutionSteps": [
            {
                "explanation": "Square the coefficient and place it under the square root.",
                "workingOut": ""
            },
            {
                "explanation": "Multiply the values inside the square root.",
                "workingOut": "\\(" + expr + " = " + ans + "\\)"
            }
        ],
        "t": "Irrational numbers and surds"
    })

# Q5: Multiply surds (easy)
q5_data = [
    {"sub": "a", "n1": 3, "n2": 5, "ans": "\\sqrt{15}"},
    {"sub": "b", "n1": 2, "n2": 13, "ans": "\\sqrt{26}"},
    {"sub": "c", "n1": 6, "n2": 10, "ans": "2\\sqrt{15}"},
    {"sub": "d", "n1": 5, "n2": 8, "ans": "2\\sqrt{10}"}
]
for item in q5_data:
    sub = item["sub"]
    n1 = item["n1"]
    n2 = item["n2"]
    ans = item["ans"]
    questions.append({
        "id": "y10-2e-q5" + sub,
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Simplify \\(\\sqrt{" + str(n1) + "} \\times \\sqrt{" + str(n2) + "}\\).",
        "a": ans,
        "solutionSteps": [
            {
                "explanation": "Multiply the numbers under the square root.",
                "workingOut": "\\(\\sqrt{" + str(n1 * n2) + "}\\)"
            },
            {
                "explanation": "Simplify the resulting surd if possible.",
                "workingOut": "\\(\\text{Answer} = " + ans + "\\)"
            }
        ],
        "t": "Irrational numbers and surds"
    })

# Q6: Divide surds (easy)
q6_data = [
    {"sub": "a", "n1": 15, "n2": 3, "ans": "\\sqrt{5}"},
    {"sub": "b", "n1": 14, "n2": 2, "ans": "\\sqrt{7}"},
    {"sub": "c", "n1": 32, "n2": 8, "ans": "2"},
    {"sub": "d", "n1": 45, "n2": 5, "ans": "3"}
]
for item in q6_data:
    sub = item["sub"]
    n1 = item["n1"]
    n2 = item["n2"]
    ans = item["ans"]
    questions.append({
        "id": "y10-2e-q6" + sub,
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Simplify \\(\\frac{\\sqrt{" + str(n1) + "}}{\\sqrt{" + str(n2) + "}}\\).",
        "a": ans,
        "solutionSteps": [
            {
                "explanation": "Combine under a single square root and divide.",
                "workingOut": "\\(\\sqrt{\\frac{" + str(n1) + "}{" + str(n2) + "}}\\)"
            },
            {
                "explanation": "Simplify the final result.",
                "workingOut": "\\(\\text{Answer} = " + ans + "\\)"
            }
        ],
        "t": "Irrational numbers and surds"
    })

# Q7: Mixed operations (easy)
q7_data = [
    {"sub": "a", "expr": "\\sqrt{3} \\times \\sqrt{5}", "ans": "\\sqrt{15}"},
    {"sub": "b", "expr": "\\sqrt{3} \\times \\sqrt{12}", "ans": "6"},
    {"sub": "c", "expr": "\\sqrt{2} \\times \\sqrt{10}", "ans": "2\\sqrt{5}"},
    {"sub": "d", "expr": "(\\sqrt{3})^3 \\times (\\sqrt{2})^2", "ans": "6\\sqrt{3}"},
    {"sub": "e", "expr": "\\sqrt{20} \\div \\sqrt{2}", "ans": "\\sqrt{10}"},
    {"sub": "f", "expr": "(\\sqrt{7})^2 - \\sqrt{7^2}", "ans": "0"}
]
for item in q7_data:
    sub = item["sub"]
    expr = item["expr"]
    ans = item["ans"]
    questions.append({
        "id": "y10-2e-q7" + sub,
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Simplify \\(" + expr + "\\).",
        "a": ans,
        "solutionSteps": [
            {
                "explanation": "Evaluate the expression step by step using index laws and surd arithmetic.",
                "workingOut": "\\(\\text{Answer} = " + ans + "\\)"
            }
        ],
        "t": "Irrational numbers and surds"
    })

# Q8: Complete equations
q8_data = [
    {"sub": "a", "q": "\\sqrt{7} \\times \\dots = \\sqrt{35}", "ans": "\\sqrt{5}"},
    {"sub": "b", "q": "\\sqrt{18} \\times \\dots = \\sqrt{54}", "ans": "\\sqrt{3}"},
    {"sub": "c", "q": "\\frac{\\sqrt{80}}{\\dots} = \\sqrt{10}", "ans": "\\sqrt{8}"},
    {"sub": "d", "q": "\\frac{\\dots}{\\sqrt{7}} = \\sqrt{5}", "ans": "\\sqrt{35}"}
]
for item in q8_data:
    sub = item["sub"]
    q_term = item["q"]
    ans = item["ans"]
    questions.append({
        "id": "y10-2e-q8" + sub,
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the missing value to complete the equation: " + q_term,
        "a": ans,
        "solutionSteps": [
            {
                "explanation": "Rearrange the equation to solve for the missing term.",
                "workingOut": "\\(\\text{Answer} = " + ans + "\\)"
            }
        ],
        "t": "Irrational numbers and surds"
    })

# Q9: Geometry and word problems
q9_data = [
    {"sub": "a", "q": "Find the area of a rectangle with height \\(\\sqrt{5}\\) cm and width \\(\\sqrt{3}\\) cm.", "ans": "\\sqrt{15}"},
    {"sub": "b", "q": "Find the area of a triangle with base \\(\\sqrt{8}\\) cm and height \\(\\sqrt{3}\\) cm.", "ans": "\\sqrt{6}"},
    {"sub": "c", "q": "Find the area of a square with side length \\(\\sqrt{13}\\) cm.", "ans": "13"},
    {"sub": "d", "q": "A square has area \\(15\\) \\(\\text{cm}^2\\). What is the length of each side in cm?", "ans": "\\sqrt{15}"}
]
for item in q9_data:
    sub = item["sub"]
    q_val = item["q"]
    ans = item["ans"]
    questions.append({
        "id": "y10-2e-q9" + sub,
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": q_val,
        "a": ans,
        "solutionSteps": [
            {
                "explanation": "Apply the appropriate geometric area formula and simplify the surds.",
                "workingOut": "\\(\\text{Answer} = " + ans + "\\)"
            }
        ],
        "t": "Irrational numbers and surds"
    })

# Q10: Pythagoras (medium)
elements_a = [
    {"type": "point", "id": "A", "coords": [0, 0], "name": "", "label": {"offset": [0, 0]}},
    {"type": "point", "id": "B", "coords": [4, 0], "name": "", "label": {"offset": [0, 0]}},
    {"type": "point", "id": "C", "coords": [0, 4], "name": "", "label": {"offset": [0, 0]}},
    {"type": "segment", "from": "A", "to": "B"},
    {"type": "segment", "from": "B", "to": "C"},
    {"type": "segment", "from": "A", "to": "C"},
    {"type": "rightangle", "points": ["B", "A", "C"], "size": 0.4},
    {"type": "text", "coords": [2, -0.5], "content": "2"},
    {"type": "text", "coords": [-0.5, 2], "content": "2"},
    {"type": "text", "coords": [2.2, 2.2], "content": "x"}
]

elements_b = [
    {"type": "point", "id": "A", "coords": [0, 0], "name": "", "label": {"offset": [0, 0]}},
    {"type": "point", "id": "B", "coords": [3, 0], "name": "", "label": {"offset": [0, 0]}},
    {"type": "point", "id": "C", "coords": [0, 4], "name": "", "label": {"offset": [0, 0]}},
    {"type": "segment", "from": "A", "to": "B"},
    {"type": "segment", "from": "B", "to": "C"},
    {"type": "segment", "from": "A", "to": "C"},
    {"type": "rightangle", "points": ["B", "A", "C"], "size": 0.4},
    {"type": "text", "coords": [1.5, -0.5], "content": "3"},
    {"type": "text", "coords": [-0.5, 2], "content": "x"},
    {"type": "text", "coords": [1.8, 2.2], "content": "5"}
]

elements_c = [
    {"type": "point", "id": "A", "coords": [0, 0], "name": "", "label": {"offset": [0, 0]}},
    {"type": "point", "id": "B", "coords": [5, 0], "name": "", "label": {"offset": [0, 0]}},
    {"type": "point", "id": "C", "coords": [0, 3], "name": "", "label": {"offset": [0, 0]}},
    {"type": "segment", "from": "A", "to": "B"},
    {"type": "segment", "from": "B", "to": "C"},
    {"type": "segment", "from": "A", "to": "C"},
    {"type": "rightangle", "points": ["B", "A", "C"], "size": 0.4},
    {"type": "text", "coords": [2.5, -0.5], "content": "\\sqrt{5}"},
    {"type": "text", "coords": [-0.8, 1.5], "content": "\\sqrt{2}"},
    {"type": "text", "coords": [2.8, 1.8], "content": "x"}
]

questions.append({
    "id": "y10-2e-q10a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Use Pythagoras' theorem to find the value of \\(x\\) in exact form.",
    "a": "2\\sqrt{2}",
    "graphData": {
        "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [-1, 5, 5, -1],
            "boardOptions": {"keepaspectratio": True},
            "elements": elements_a
        }
    },
    "solutionSteps": [
        {
            "explanation": "Set up Pythagoras' theorem: \\(x^2 = 2^2 + 2^2\\).",
            "workingOut": "\\(x^2 = 4 + 4 = 8\\)"
        },
        {
            "explanation": "Take the square root and simplify.",
            "workingOut": "\\(x = \\sqrt{8} = 2\\sqrt{2}\\)"
        }
    ],
    "t": "Irrational numbers and surds"
})

questions.append({
    "id": "y10-2e-q10b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Use Pythagoras' theorem to find the value of \\(x\\) in exact form.",
    "a": "4",
    "graphData": {
        "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [-1, 5, 4, -1],
            "boardOptions": {"keepaspectratio": True},
            "elements": elements_b
        }
    },
    "solutionSteps": [
        {
            "explanation": "Set up Pythagoras' theorem: \\(x^2 + 3^2 = 5^2\\).",
            "workingOut": "\\(x^2 = 25 - 9 = 16\\)"
        },
        {
            "explanation": "Take the square root.",
            "workingOut": "\\(x = \\sqrt{16} = 4\\)"
        }
    ],
    "t": "Irrational numbers and surds"
})

questions.append({
    "id": "y10-2e-q10c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Use Pythagoras' theorem to find the value of \\(x\\) in exact form.",
    "a": "\\sqrt{7}",
    "graphData": {
        "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [-1, 4, 6, -1],
            "boardOptions": {"keepaspectratio": True},
            "elements": elements_c
        }
    },
    "solutionSteps": [
        {
            "explanation": "Set up Pythagoras' theorem: \\(x^2 = (\\sqrt{5})^2 + (\\sqrt{2})^2\\).",
            "workingOut": "\\(x^2 = 5 + 2 = 7\\)"
        },
        {
            "explanation": "Take the square root.",
            "workingOut": "\\(x = \\sqrt{7}\\)"
        }
    ],
    "t": "Irrational numbers and surds"
})

# Q11: square side length 5\sqrt{3}
questions.append({
    "id": "y10-2e-q11a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A square has side length \\(5\\sqrt{3}\\) cm. Find the area of the square.",
    "a": "75",
    "solutionSteps": [
        {
            "explanation": "The area of a square is the side length squared.",
            "workingOut": "\\(A = (5\\sqrt{3})^2 = 25 \\times 3 = 75\\)"
        }
    ],
    "t": "Irrational numbers and surds"
})

questions.append({
    "id": "y10-2e-q11b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A square has side length \\(5\\sqrt{3}\\) cm. Find the length of a diagonal in cm.",
    "a": "5\\sqrt{6}",
    "solutionSteps": [
        {
            "explanation": "The diagonal of a square with side length \\(s\\) is \\(s\\sqrt{2}\\).",
            "workingOut": "\\(d = 5\\sqrt{3} \\times \\sqrt{2} = 5\\sqrt{6}\\)"
        }
    ],
    "t": "Irrational numbers and surds"
})

# Q12: rectangle length 6, width \sqrt{5}
questions.append({
    "id": "y10-2e-q12a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A rectangle has length \\(6\\) cm and width \\(\\sqrt{5}\\) cm. Find the area of the rectangle.",
    "a": "6\\sqrt{5}",
    "solutionSteps": [
        {
            "explanation": "Multiply length by width.",
            "workingOut": "\\(6 \\times \\sqrt{5} = 6\\sqrt{5}\\)"
        }
    ],
    "t": "Irrational numbers and surds"
})

questions.append({
    "id": "y10-2e-q12b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A rectangle has length \\(6\\) cm and width \\(\\sqrt{5}\\) cm. Find the length of a diagonal in cm.",
    "a": "\\sqrt{41}",
    "solutionSteps": [
        {
            "explanation": "Use Pythagoras' theorem on the diagonal.",
            "workingOut": "\\(d = \\sqrt{6^2 + (\\sqrt{5})^2} = \\sqrt{36 + 5} = \\sqrt{41}\\)"
        }
    ],
    "t": "Irrational numbers and surds"
})

# Write file
output = "export const Y10_CH2E_QUESTIONS = " + json.dumps(questions, indent=2, ensure_ascii=False) + ";\n"
with open("/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch2Questions.js", "w", encoding="utf-8") as f:
    f.write(output)

print("Done! Generated", len(questions), "questions.")
