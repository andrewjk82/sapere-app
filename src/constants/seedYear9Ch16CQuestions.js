export const Y9_CH16C_QUESTIONS = [
  {
    "id": "y9-16c-q1a",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Calculate the total surface area of the cylinder with the following dimensions:\\n- Radius = \\(5\\\\text{ cm}\\)\\n- Height = \\(12\\\\text{ cm}\\)\\n\\n(Round the final answer to two decimal places.)",
    "opts": [
      "\\(534.07\\\\text{ cm}^2\\)",
      "\\(576.24\\\\text{ cm}^2\\)",
      "\\(492.51\\\\text{ cm}^2\\)",
      "\\(408.41\\\\text{ cm}^2\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Use the total surface area formula for a cylinder: SA = 2\\pi r^2 + 2\\pi r h.",
    "solution": "Use the total surface area formula for a cylinder:\\n\\[\\\\text{SA} = 2\\\\pi r^2 + 2\\\\pi r h\\]\\nSubstitute the given values:\\n\\[\\\\text{SA} = 2\\\\pi(5)^2 + 2\\\\pi(5)(12) = 50\\\\pi + 120\\\\pi = 170\\\\pi\\\\text{ cm}^2\\]\\nCalculate the numerical value:\\n\\[170\\\\pi \\\\approx 534.07075\\\\text{ cm}^2 \\\\implies 534.07\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( \\\\text{SA} = 2\\\\pi r^2 + 2\\\\pi r h \\\\)",
        "graphData": {
          "jsxGraph": {
            "id": "y9-16c-q1a-board",
            "boundingbox": [
              -6,
              16,
              8,
              -4
            ],
            "keepaspectratio": true,
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  -4,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  1,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  -4,
                  12
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "D",
                "coords": [
                  1,
                  12
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O1",
                "coords": [
                  -1.5,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O2",
                "coords": [
                  -1.5,
                  12
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "C",
                "to": "A",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "D",
                "to": "B",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "C",
                "to": "D",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "D",
                "to": "C",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "A",
                "to": "B",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "B",
                "to": "A",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "segment",
                "from": "O1",
                "to": "B",
                "color": "red",
                "dash": 2
              },
              {
                "type": "text",
                "coords": [
                  -1.3,
                  -1.2
                ],
                "content": "5 cm"
              },
              {
                "type": "text",
                "coords": [
                  1.5,
                  6
                ],
                "content": "12 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( \\\\text{SA} = 2\\\\pi(5)^2 + 2\\\\pi(5)(12) = 50\\\\pi + 120\\\\pi = 170\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( 170\\\\pi \\\\approx 534.07\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 534.07\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(534.07\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "id": "y9-16c-q1a-board",
        "boundingbox": [
          -6,
          16,
          8,
          -4
        ],
        "keepaspectratio": true,
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              -4,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              1,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              -4,
              12
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              1,
              12
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O1",
            "coords": [
              -1.5,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O2",
            "coords": [
              -1.5,
              12
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "D",
            "to": "B",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "C",
            "to": "D",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "D",
            "to": "C",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "A",
            "to": "B",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "B",
            "to": "A",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "segment",
            "from": "O1",
            "to": "B",
            "color": "red",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              -1.3,
              -1.2
            ],
            "content": "5 cm"
          },
          {
            "type": "text",
            "coords": [
              1.5,
              6
            ],
            "content": "12 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q1b",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Calculate the total surface area of the cylinder with the following dimensions:\\n- Radius = \\(8\\\\text{ cm}\\)\\n- Height = \\(15\\\\text{ cm}\\)\\n\\n(Round the final answer to two decimal places.)",
    "opts": [
      "\\(1248.96\\\\text{ cm}^2\\)",
      "\\(1156.11\\\\text{ cm}^2\\)",
      "\\(1084.52\\\\text{ cm}^2\\)",
      "\\(985.43\\\\text{ cm}^2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the total surface area formula for a cylinder: SA = 2\\pi r^2 + 2\\pi r h.",
    "solution": "Use the total surface area formula for a cylinder:\\n\\[\\\\text{SA} = 2\\\\pi r^2 + 2\\\\pi r h\\]\\nSubstitute the given values:\\n\\[\\\\text{SA} = 2\\\\pi(8)^2 + 2\\\\pi(8)(15) = 128\\\\pi + 240\\\\pi = 368\\\\pi\\\\text{ cm}^2\\]\\nCalculate the numerical value:\\n\\[368\\\\pi \\\\approx 1156.1061\\\\text{ cm}^2 \\\\implies 1156.11\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( \\\\text{SA} = 2\\\\pi r^2 + 2\\\\pi r h \\\\)",
        "graphData": {
          "jsxGraph": {
            "id": "y9-16c-q1b-board",
            "boundingbox": [
              -7,
              19,
              9,
              -5
            ],
            "keepaspectratio": true,
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  -5,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  1,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  -5,
                  15
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "D",
                "coords": [
                  1,
                  15
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O1",
                "coords": [
                  -2,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O2",
                "coords": [
                  -2,
                  15
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "C",
                "to": "A",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "D",
                "to": "B",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "C",
                "to": "D",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "D",
                "to": "C",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "A",
                "to": "B",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "B",
                "to": "A",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "segment",
                "from": "O1",
                "to": "B",
                "color": "red",
                "dash": 2
              },
              {
                "type": "text",
                "coords": [
                  -1.7,
                  -1.2
                ],
                "content": "8 cm"
              },
              {
                "type": "text",
                "coords": [
                  1.5,
                  7.5
                ],
                "content": "15 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( \\\\text{SA} = 2\\\\pi(8)^2 + 2\\\\pi(8)(15) = 128\\\\pi + 240\\\\pi = 368\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( 368\\\\pi \\\\approx 1156.11\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1156.11\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1156.11\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "id": "y9-16c-q1b-board",
        "boundingbox": [
          -7,
          19,
          9,
          -5
        ],
        "keepaspectratio": true,
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              -5,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              1,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              -5,
              15
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              1,
              15
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O1",
            "coords": [
              -2,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O2",
            "coords": [
              -2,
              15
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "D",
            "to": "B",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "C",
            "to": "D",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "D",
            "to": "C",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "A",
            "to": "B",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "B",
            "to": "A",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "segment",
            "from": "O1",
            "to": "B",
            "color": "red",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              -1.7,
              -1.2
            ],
            "content": "8 cm"
          },
          {
            "type": "text",
            "coords": [
              1.5,
              7.5
            ],
            "content": "15 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q1c",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Calculate the total surface area of the cylinder with the following dimensions:\\n- Diameter = \\(12\\\\text{ cm}\\)\\n- Height = \\(12\\\\text{ cm}\\)\\n\\n(Round the final answer to two decimal places.)",
    "opts": [
      "\\(586.20\\\\text{ cm}^2\\)",
      "\\(612.45\\\\text{ cm}^2\\)",
      "\\(678.58\\\\text{ cm}^2\\)",
      "\\(724.38\\\\text{ cm}^2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Divide the diameter by 2 to find the radius first.",
    "solution": "Find the radius:\\n\\[r = \\\\frac{12}{2} = 6\\\\text{ cm}\\]\\nUse the total surface area formula:\\n\\[\\\\text{SA} = 2\\\\pi r^2 + 2\\\\pi r h\\]\\nSubstitute \\(r = 6\\\\) and \\(h = 12\\\\):\\n\\[\\\\text{SA} = 2\\\\pi(6)^2 + 2\\\\pi(6)(12) = 72\\\\pi + 144\\\\pi = 216\\\\pi\\\\text{ cm}^2\\]\\nCalculate the numerical value:\\n\\[216\\\\pi \\\\approx 678.584\\\\text{ cm}^2 \\\\implies 678.58\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( r = \\\\frac{12}{2} = 6\\\\text{ cm} \\\\)",
        "graphData": {
          "jsxGraph": {
            "id": "y9-16c-q1c-board",
            "boundingbox": [
              -7,
              16,
              8,
              -4
            ],
            "keepaspectratio": true,
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  -5,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  1,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  -5,
                  12
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "D",
                "coords": [
                  1,
                  12
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O1",
                "coords": [
                  -2,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O2",
                "coords": [
                  -2,
                  12
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "C",
                "to": "A",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "D",
                "to": "B",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "C",
                "to": "D",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "D",
                "to": "C",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "A",
                "to": "B",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "B",
                "to": "A",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "segment",
                "from": "A",
                "to": "B",
                "color": "red",
                "dash": 2
              },
              {
                "type": "text",
                "coords": [
                  -2,
                  -1.2
                ],
                "content": "12 cm"
              },
              {
                "type": "text",
                "coords": [
                  1.5,
                  6
                ],
                "content": "12 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( \\\\text{SA} = 2\\\\pi(6)^2 + 2\\\\pi(6)(12) = 72\\\\pi + 144\\\\pi = 216\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( 216\\\\pi \\\\approx 678.58\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 678.58\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(678.58\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "id": "y9-16c-q1c-board",
        "boundingbox": [
          -7,
          16,
          8,
          -4
        ],
        "keepaspectratio": true,
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              -5,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              1,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              -5,
              12
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              1,
              12
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O1",
            "coords": [
              -2,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O2",
            "coords": [
              -2,
              12
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "D",
            "to": "B",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "C",
            "to": "D",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "D",
            "to": "C",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "A",
            "to": "B",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "B",
            "to": "A",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "segment",
            "from": "A",
            "to": "B",
            "color": "red",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              -2,
              -1.2
            ],
            "content": "12 cm"
          },
          {
            "type": "text",
            "coords": [
              1.5,
              6
            ],
            "content": "12 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q1d",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Calculate the total surface area of a horizontal cylinder with the following dimensions:\\n- Diameter = \\(8\\\\text{ cm}\\)\\n- Length (Height) = \\(20\\\\text{ cm}\\)\\n\\n(Round the final answer to two decimal places.)",
    "opts": [
      "\\(682.15\\\\text{ cm}^2\\)",
      "\\(486.20\\\\text{ cm}^2\\)",
      "\\(528.40\\\\text{ cm}^2\\)",
      "\\(603.19\\\\text{ cm}^2\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "First find the radius: r = diameter / 2.",
    "solution": "Find the radius:\\n\\[r = \\\\frac{8}{2} = 4\\\\text{ cm}\\]\\nApply the total surface area formula:\\n\\[\\\\text{SA} = 2\\\\pi r^2 + 2\\\\pi r h\\]\\nSubstitute \\(r = 4\\\\) and \\(h = 20\\\\):\\n\\[\\\\text{SA} = 2\\\\pi(4)^2 + 2\\\\pi(4)(20) = 32\\\\pi + 160\\\\pi = 192\\\\pi\\\\text{ cm}^2\\]\\nEvaluate the numerical value:\\n\\[192\\\\pi \\\\approx 603.185\\\\text{ cm}^2 \\\\implies 603.19\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( r = \\\\frac{8}{2} = 4\\\\text{ cm} \\\\)",
        "graphData": {
          "jsxGraph": {
            "id": "y9-16c-q1d-board",
            "boundingbox": [
              -4,
              6,
              14,
              -4
            ],
            "keepaspectratio": true,
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  -2
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  0,
                  2
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  10,
                  -2
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "D",
                "coords": [
                  10,
                  2
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O1",
                "coords": [
                  0,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O2",
                "coords": [
                  10,
                  0
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "A",
                "to": "C",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "B",
                "to": "D",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "B",
                "to": "A",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "A",
                "to": "B",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "D",
                "to": "C",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "C",
                "to": "D",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "segment",
                "from": "O1",
                "to": "B",
                "color": "red",
                "dash": 2
              },
              {
                "type": "text",
                "coords": [
                  -1.2,
                  0.8
                ],
                "content": "10 cm"
              },
              {
                "type": "text",
                "coords": [
                  5,
                  -2.6
                ],
                "content": "25 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( \\\\text{SA} = 2\\\\pi(4)^2 + 2\\\\pi(4)(20) = 32\\\\pi + 160\\\\pi = 192\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( 192\\\\pi \\\\approx 603.19\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 603.19\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(603.19\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "id": "y9-16c-q1d-board",
        "boundingbox": [
          -4,
          6,
          14,
          -4
        ],
        "keepaspectratio": true,
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              -2
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              0,
              2
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              10,
              -2
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              10,
              2
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O1",
            "coords": [
              0,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O2",
            "coords": [
              10,
              0
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "A",
            "to": "C",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "D",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "B",
            "to": "A",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "A",
            "to": "B",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "D",
            "to": "C",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "C",
            "to": "D",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "segment",
            "from": "O1",
            "to": "B",
            "color": "red",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              -1.2,
              0.8
            ],
            "content": "10 cm"
          },
          {
            "type": "text",
            "coords": [
              5,
              -2.6
            ],
            "content": "25 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q1e",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Calculate the total outside surface area of a cylinder that is open at the top, with the following dimensions:\\n- Radius = \\(5\\\\text{ cm}\\)\\n- Height = \\(8\\\\text{ cm}\\)\\n\\n(Round the final answer to two decimal places.)",
    "opts": [
      "\\(329.87\\\\text{ cm}^2\\)",
      "\\(360.25\\\\text{ cm}^2\\)",
      "\\(408.41\\\\text{ cm}^2\\)",
      "\\(282.74\\\\text{ cm}^2\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "Since it is open at the top, the surface area includes only 1 circular base and the curved surface: SA = \\pi r^2 + 2\\pi r h.",
    "solution": "For a cylinder open at the top, calculate the area of 1 circular base and the curved surface area:\\n\\[\\\\text{SA} = \\\\pi r^2 + 2\\\\pi r h\\]\\nSubstitute the given values:\\n\\[\\\\text{SA} = \\\\pi(5)^2 + 2\\\\pi(5)(8) = 25\\\\pi + 80\\\\pi = 105\\\\pi\\\\text{ cm}^2\\]\\nCalculate the numerical value:\\n\\[105\\\\pi \\\\approx 329.867\\\\text{ cm}^2 \\\\implies 329.87\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( \\\\text{SA} = \\\\pi r^2 + 2\\\\pi r h \\\\)",
        "graphData": {
          "jsxGraph": {
            "id": "y9-16c-q1e-board",
            "boundingbox": [
              -6,
              12,
              8,
              -4
            ],
            "keepaspectratio": true,
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  -4,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  1,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  -4,
                  8
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "D",
                "coords": [
                  1,
                  8
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O1",
                "coords": [
                  -1.5,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O2",
                "coords": [
                  -1.5,
                  8
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "C",
                "to": "A",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "D",
                "to": "B",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "C",
                "to": "D",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "D",
                "to": "C",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "A",
                "to": "B",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "B",
                "to": "A",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "segment",
                "from": "O1",
                "to": "B",
                "color": "red",
                "dash": 2
              },
              {
                "type": "text",
                "coords": [
                  -1.3,
                  -1.2
                ],
                "content": "5 cm"
              },
              {
                "type": "text",
                "coords": [
                  1.5,
                  4
                ],
                "content": "8 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( \\\\text{SA} = \\\\pi(5)^2 + 2\\\\pi(5)(8) = 25\\\\pi + 80\\\\pi = 105\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( 105\\\\pi \\\\approx 329.87\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 329.87\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(329.87\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "id": "y9-16c-q1e-board",
        "boundingbox": [
          -6,
          12,
          8,
          -4
        ],
        "keepaspectratio": true,
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              -4,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              1,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              -4,
              8
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              1,
              8
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O1",
            "coords": [
              -1.5,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O2",
            "coords": [
              -1.5,
              8
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "D",
            "to": "B",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "C",
            "to": "D",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "D",
            "to": "C",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "A",
            "to": "B",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "B",
            "to": "A",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "segment",
            "from": "O1",
            "to": "B",
            "color": "red",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              -1.3,
              -1.2
            ],
            "content": "5 cm"
          },
          {
            "type": "text",
            "coords": [
              1.5,
              4
            ],
            "content": "8 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q1f",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Calculate the total outside surface area of a pipe (open at both ends) with the following dimensions:\\n- Diameter = \\(10\\\\text{ cm}\\)\\n- Length = \\(24\\\\text{ cm}\\)\\n\\n(Round the final answer to two decimal places.)",
    "opts": [
      "\\(911.06\\\\text{ cm}^2\\)",
      "\\(832.14\\\\text{ cm}^2\\)",
      "\\(753.98\\\\text{ cm}^2\\)",
      "\\(680.51\\\\text{ cm}^2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Since both ends are open, the surface area is only the curved surface area: SA = 2\\pi r h.",
    "solution": "Since both ends are open, the surface area consists only of the curved surface area:\\n\\[\\\\text{SA} = 2\\\\pi r h\\]\\nFind the radius from the diameter:\\n\\[r = \\\\frac{10}{2} = 5\\\\text{ cm}\\]\\nSubstitute \\(r = 5\\\\) and \\(h = 24\\\\):\\n\\[\\\\text{SA} = 2\\\\pi(5)(24) = 240\\\\pi\\\\text{ cm}^2\\]\\nEvaluate the numerical value:\\n\\[240\\\\pi \\\\approx 753.982\\\\text{ cm}^2 \\\\implies 753.98\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( \\\\text{SA} = 2\\\\pi r h \\\\)",
        "graphData": {
          "jsxGraph": {
            "id": "y9-16c-q1f-board",
            "boundingbox": [
              -4,
              6,
              14,
              -4
            ],
            "keepaspectratio": true,
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  -2
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  0,
                  2
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  10,
                  -2
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "D",
                "coords": [
                  10,
                  2
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O1",
                "coords": [
                  0,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O2",
                "coords": [
                  10,
                  0
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "A",
                "to": "C",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "B",
                "to": "D",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "B",
                "to": "A",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "A",
                "to": "B",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "D",
                "to": "C",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "C",
                "to": "D",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "segment",
                "from": "O1",
                "to": "B",
                "color": "red",
                "dash": 2
              },
              {
                "type": "text",
                "coords": [
                  -1.2,
                  0.8
                ],
                "content": "12 cm"
              },
              {
                "type": "text",
                "coords": [
                  5,
                  -2.6
                ],
                "content": "30 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( r = \\\\frac{10}{2} = 5\\\\text{ cm} \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( \\\\text{SA} = 2\\\\pi(5)(24) = 240\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 753.98\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(753.98\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "id": "y9-16c-q1f-board",
        "boundingbox": [
          -4,
          6,
          14,
          -4
        ],
        "keepaspectratio": true,
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              -2
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              0,
              2
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              10,
              -2
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              10,
              2
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O1",
            "coords": [
              0,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O2",
            "coords": [
              10,
              0
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "A",
            "to": "C",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "D",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "B",
            "to": "A",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "A",
            "to": "B",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "D",
            "to": "C",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "C",
            "to": "D",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "segment",
            "from": "O1",
            "to": "B",
            "color": "red",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              -1.2,
              0.8
            ],
            "content": "12 cm"
          },
          {
            "type": "text",
            "coords": [
              5,
              -2.6
            ],
            "content": "30 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q2",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The outside surface of a piece of open pipe with diameter \\(12\\\\text{ cm}\\) and length \\(60\\\\text{ cm}\\) is to be painted. Calculate the area to be painted.\\n\\n(Round the final answer to two decimal places.)",
    "opts": [
      "\\(4523.89\\\\text{ cm}^2\\)",
      "\\(2486.30\\\\text{ cm}^2\\)",
      "\\(1862.45\\\\text{ cm}^2\\)",
      "\\(2261.95\\\\text{ cm}^2\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "The area to be painted is the curved surface area of the pipe: A = \\pi d h.",
    "solution": "The surface to be painted is the outer curved surface of the cylinder:\\n\\[A = 2\\\\pi r h = \\\\pi d h\\]\\nSubstitute the given values:\\n\\[A = \\\\pi \\\\times 12 \\\\times 60 = 720\\\\pi\\\\text{ cm}^2\\]\\nCalculate the numerical value:\\n\\[720\\\\pi \\\\approx 2261.9467\\\\text{ cm}^2 \\\\implies 2261.95\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( A = \\\\pi d h \\\\)",
        "graphData": {
          "jsxGraph": {
            "id": "y9-16c-q2-board",
            "boundingbox": [
              -4,
              6,
              14,
              -4
            ],
            "keepaspectratio": true,
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  -1.5
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  0,
                  1.5
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  10,
                  -1.5
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "D",
                "coords": [
                  10,
                  1.5
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O1",
                "coords": [
                  0,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O2",
                "coords": [
                  10,
                  0
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "A",
                "to": "C",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "B",
                "to": "D",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "B",
                "to": "A",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "A",
                "to": "B",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "D",
                "to": "C",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "C",
                "to": "D",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "text",
                "coords": [
                  -1.2,
                  0.6
                ],
                "content": "10 cm"
              },
              {
                "type": "text",
                "coords": [
                  5,
                  -2.1
                ],
                "content": "80 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( A = \\\\pi \\\\times 12 \\\\times 60 = 720\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( 720\\\\pi \\\\approx 2261.95\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2261.95\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(2261.95\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "id": "y9-16c-q2-board",
        "boundingbox": [
          -4,
          6,
          14,
          -4
        ],
        "keepaspectratio": true,
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              -1.5
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              0,
              1.5
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              10,
              -1.5
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              10,
              1.5
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O1",
            "coords": [
              0,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O2",
            "coords": [
              10,
              0
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "A",
            "to": "C",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "D",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "B",
            "to": "A",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "A",
            "to": "B",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "D",
            "to": "C",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "C",
            "to": "D",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              -1.2,
              0.6
            ],
            "content": "10 cm"
          },
          {
            "type": "text",
            "coords": [
              5,
              -2.1
            ],
            "content": "80 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q3a",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A solid half-cylinder has the following dimensions:\\n- Diameter = \\(8\\\\text{ cm}\\)\\n- Length = \\(20\\\\text{ cm}\\)\\n\\nFind the area of the flat rectangular top face.",
    "opts": [
      "\\(120\\\\text{ cm}^2\\)",
      "\\(80\\\\text{ cm}^2\\)",
      "\\(200\\\\text{ cm}^2\\)",
      "\\(160\\\\text{ cm}^2\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "The top face is a rectangle whose width is the diameter of the cylinder and whose length is the length of the cylinder.",
    "solution": "The top face of a half-cylinder is a flat rectangle.\\n- Width = diameter = 8 cm\\n- Length = length of cylinder = 20 cm\\n\\n\\[\\\\text{Area} = \\\\text{width} \\\\times \\\\text{length} = 8 \\\\times 20 = 160\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( \\\\text{Width} = 8\\\\text{ cm}, \\\\text{Length} = 20\\\\text{ cm} \\\\)",
        "graphData": {
          "jsxGraph": {
            "id": "y9-16c-q3-board",
            "boundingbox": [
              -4,
              6,
              14,
              -4
            ],
            "keepaspectratio": true,
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  -2
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  0,
                  2
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  10,
                  -1
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "D",
                "coords": [
                  10,
                  3
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O1",
                "coords": [
                  0,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O2",
                "coords": [
                  10,
                  1
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "A",
                "to": "B",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "B",
                "to": "D",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "D",
                "to": "C",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "C",
                "to": "A",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O1",
                "from": "B",
                "to": "A",
                "color": "blue"
              },
              {
                "type": "arc",
                "center": "O2",
                "from": "D",
                "to": "C",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "O1",
                "to": "O2",
                "color": "blue",
                "dash": 2
              },
              {
                "type": "text",
                "coords": [
                  -1.2,
                  0.8
                ],
                "content": "6 cm"
              },
              {
                "type": "text",
                "coords": [
                  5,
                  3.2
                ],
                "content": "15 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( A = \\\\text{width} \\\\times \\\\text{length} = 8 \\\\times 20 = 160\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(160\\\\text{ cm}^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 160\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(160\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "id": "y9-16c-q3-board",
        "boundingbox": [
          -4,
          6,
          14,
          -4
        ],
        "keepaspectratio": true,
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              -2
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              0,
              2
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              10,
              -1
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              10,
              3
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O1",
            "coords": [
              0,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O2",
            "coords": [
              10,
              1
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "A",
            "to": "B",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "D",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "D",
            "to": "C",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O1",
            "from": "B",
            "to": "A",
            "color": "blue"
          },
          {
            "type": "arc",
            "center": "O2",
            "from": "D",
            "to": "C",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "O1",
            "to": "O2",
            "color": "blue",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              -1.2,
              0.8
            ],
            "content": "6 cm"
          },
          {
            "type": "text",
            "coords": [
              5,
              3.2
            ],
            "content": "15 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q3b",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A solid half-cylinder has the following dimensions:\\n- Diameter = \\(8\\\\text{ cm}\\)\\n- Length = \\(20\\\\text{ cm}\\)\\n\\nFind the combined area of the two semicircular ends.",
    "opts": [
      "\\(75.40\\\\text{ cm}^2\\)",
      "\\(50.27\\\\text{ cm}^2\\)",
      "\\(100.53\\\\text{ cm}^2\\)",
      "\\(25.13\\\\text{ cm}^2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Two semicircular ends combine to form one full circle of the same radius.",
    "solution": "The two ends of the half-cylinder are semicircles. Together they form one full circle:\\n- Radius \\(r = 4\\\\text{ cm}\\)\\n\\[\\\\text{Combined Area} = \\\\pi r^2 = \\\\pi \\\\times 4^2 = 16\\\\pi\\\\text{ cm}^2\\]\\nEvaluate the numerical value:\\n\\[16\\\\pi \\\\approx 50.265\\\\text{ cm}^2 \\\\implies 50.27\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( r = \\\\frac{8}{2} = 4\\\\text{ cm} \\\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( A = \\\\pi r^2 = \\\\pi \\\\times 4^2 = 16\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( 16\\\\pi \\\\approx 50.27\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 50.27\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(50.27\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q3c",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A solid half-cylinder has the following dimensions:\\n- Diameter = \\(8\\\\text{ cm}\\)\\n- Length = \\(20\\\\text{ cm}\\)\\n\\nFind the curved surface area.",
    "opts": [
      "\\(180.50\\\\text{ cm}^2\\)",
      "\\(251.33\\\\text{ cm}^2\\)",
      "\\(502.65\\\\text{ cm}^2\\)",
      "\\(125.66\\\\text{ cm}^2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "The curved surface area is half of the curved surface area of a full cylinder: CSA = \\pi r h.",
    "solution": "The curved surface area of a half-cylinder is half of the curved surface of a full cylinder:\\n\\[\\\\text{CSA} = \\\\frac{1}{2} \\\\times 2\\\\pi r h = \\\\pi r h\\]\\nSubstitute \\(r = 4\\\\) and \\(h = 20\\\\):\\n\\[\\\\text{CSA} = \\\\pi \\\\times 4 \\\\times 20 = 80\\\\pi\\\\text{ cm}^2\\]\\nEvaluate the numerical value:\\n\\[80\\\\pi \\\\approx 251.327\\\\text{ cm}^2 \\\\implies 251.33\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( \\\\text{CSA} = \\\\pi r h \\\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( \\\\text{CSA} = \\\\pi \\\\times 4 \\\\times 20 = 80\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( 80\\\\pi \\\\approx 251.33\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 251.33\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(251.33\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q3d",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A solid half-cylinder has the following dimensions:\\n- Diameter = \\(8\\\\text{ cm}\\)\\n- Length = \\(20\\\\text{ cm}\\)\\n\\nFind the total surface area.",
    "opts": [
      "\\(524.30\\\\text{ cm}^2\\)",
      "\\(461.59\\\\text{ cm}^2\\)",
      "\\(401.33\\\\text{ cm}^2\\)",
      "\\(381.18\\\\text{ cm}^2\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Add the areas of all surfaces: the top rectangle (160 cm²), the two semicircular ends (16\\pi ≈ 50.27 cm²), and the curved bottom (80\\pi ≈ 251.33 cm²).",
    "solution": "The total surface area of the solid half-cylinder is the sum of:\\n1. Top rectangular face: \\(160\\\\text{ cm}^2\\)\\n2. Two semicircular ends: \\(16\\\\pi \\\\approx 50.27\\\\text{ cm}^2\\)\\n3. Curved surface: \\(80\\\\pi \\\\approx 251.33\\\\text{ cm}^2\\)\\n\\n\\[\\\\text{SA} = 160 + 16\\\\pi + 80\\\\pi = 160 + 96\\\\pi \\\\approx 461.592\\\\text{ cm}^2 \\\\implies 461.59\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( \\\\text{SA} = 160 + 16\\\\pi + 80\\\\pi = 160 + 96\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( \\\\text{SA} \\\\approx 160 + 301.59 = 461.59\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(461.59\\\\text{ cm}^2\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 461.59\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(461.59\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q4",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A skating ramp is in the shape of a half-cylinder. If the two sides are \\(8\\\\text{ m}\\) apart and the length of the ramp is \\(6\\\\text{ m}\\), find the surface area of the rideable ramp floor (curved surface area).\\n\\n(Round the final answer to two decimal places.)",
    "opts": [
      "\\(84.32\\\\text{ m}^2\\)",
      "\\(150.80\\\\text{ m}^2\\)",
      "\\(75.40\\\\text{ m}^2\\)",
      "\\(96.24\\\\text{ m}^2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The rideable ramp floor represents the curved surface area of a half-cylinder: CSA = \\pi r h.",
    "solution": "The two sides are 8 m apart, which represents the diameter of the half-cylinder, so:\\n- Radius \\(r = 4\\\\text{ m}\\)\\n- Length of ramp \\(h = 6\\\\text{ m}\\)\\n\\nCalculate the curved surface area of the half-cylinder:\\n\\[\\\\text{CSA} = \\\\pi r h = \\\\pi \\\\times 4 \\\\times 6 = 24\\\\pi\\\\text{ m}^2\\]\\nEvaluate the numerical value:\\n\\[24\\\\pi \\\\approx 75.398\\\\text{ m}^2 \\\\implies 75.40\\\\text{ m}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( r = \\\\frac{8}{2} = 4\\\\text{ m} \\\\)",
        "graphData": {
          "jsxGraph": {
            "id": "y9-16c-q4-board",
            "boundingbox": [
              -6,
              6,
              12,
              -6
            ],
            "keepaspectratio": true,
            "elements": [
              {
                "type": "curve",
                "x": "4 * Math.cos(t)",
                "y": "2 * Math.sin(t)",
                "tRange": [
                  3.141592653589793,
                  6.283185307179586
                ],
                "color": "blue"
              },
              {
                "type": "curve",
                "x": "4 + 4 * Math.cos(t)",
                "y": "2.5 + 2 * Math.sin(t)",
                "tRange": [
                  3.141592653589793,
                  6.283185307179586
                ],
                "color": "blue",
                "dash": 2
              },
              {
                "type": "point",
                "id": "FL",
                "coords": [
                  -4,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "FR",
                "coords": [
                  4,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "BL",
                "coords": [
                  0,
                  2.5
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "BR",
                "coords": [
                  8,
                  2.5
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "FL",
                "to": "BL",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "FR",
                "to": "BR",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "FL",
                "to": "FR",
                "color": "red",
                "dash": 2
              },
              {
                "type": "text",
                "coords": [
                  0,
                  0.5
                ],
                "content": "8 m"
              },
              {
                "type": "text",
                "coords": [
                  2.5,
                  2
                ],
                "content": "6 m"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( A = \\\\pi r h = \\\\pi \\\\times 4 \\\\times 6 = 24\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( 24\\\\pi \\\\approx 75.40\\\\text{ m}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 75.40\\\\text{ m}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(75.40\\\\text{ m}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "id": "y9-16c-q4-board",
        "boundingbox": [
          -6,
          6,
          12,
          -6
        ],
        "keepaspectratio": true,
        "elements": [
          {
            "type": "curve",
            "x": "4 * Math.cos(t)",
            "y": "2 * Math.sin(t)",
            "tRange": [
              3.141592653589793,
              6.283185307179586
            ],
            "color": "blue"
          },
          {
            "type": "curve",
            "x": "4 + 4 * Math.cos(t)",
            "y": "2.5 + 2 * Math.sin(t)",
            "tRange": [
              3.141592653589793,
              6.283185307179586
            ],
            "color": "blue",
            "dash": 2
          },
          {
            "type": "point",
            "id": "FL",
            "coords": [
              -4,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "FR",
            "coords": [
              4,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "BL",
            "coords": [
              0,
              2.5
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "BR",
            "coords": [
              8,
              2.5
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "FL",
            "to": "BL",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "FR",
            "to": "BR",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "FL",
            "to": "FR",
            "color": "red",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              0,
              0.5
            ],
            "content": "8 m"
          },
          {
            "type": "text",
            "coords": [
              2.5,
              2
            ],
            "content": "6 m"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q5",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A cylinder of radius \\(2\\\\text{ cm}\\) and height \\(5\\\\text{ cm}\\) is mounted on a larger cylinder of radius \\(5\\\\text{ cm}\\) and height \\(4\\\\text{ cm}\\). Find the area of the visible surfaces, if the larger cylinder is sitting on a table.\\n\\n(Round the final answer to two decimal places.)",
    "opts": [
      "\\(324.50\\\\text{ cm}^2\\)",
      "\\(294.15\\\\text{ cm}^2\\)",
      "\\(267.04\\\\text{ cm}^2\\)",
      "\\(212.80\\\\text{ cm}^2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Sum the curved surface of both cylinders, the top of the smaller cylinder, and the top ring area of the larger cylinder.",
    "solution": "The visible surfaces consist of:\\n1. Curved surface of top cylinder: \\(2\\\\pi r_1 h_1 = 2\\\\pi(2)(5) = 20\\\\pi\\\\text{ cm}^2\\)\\n2. Top circle of top cylinder: \\(\\\\pi r_1^2 = \\\\pi(2)^2 = 4\\\\pi\\\\text{ cm}^2\\)\\n3. Curved surface of bottom cylinder: \\(2\\\\pi r_2 h_2 = 2\\\\pi(5)(4) = 40\\\\text{ cm}^2\\)\\n4. Exposed top ring of bottom cylinder: \\(\\\\pi r_2^2 - \\\\pi r_1^2 = 25\\\\pi - 4\\\\pi = 21\\\\pi\\\\text{ cm}^2\\)\\n\\nAdd the components to find the total visible area:\\n\\[\\\\text{SA} = 20\\\\pi + 4\\\\pi + 40\\\\pi + 21\\\\pi = 85\\\\pi\\\\text{ cm}^2\\]\\nEvaluate the numerical value:\\n\\[85\\\\pi \\\\approx 267.035\\\\text{ cm}^2 \\\\implies 267.04\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( \\\\text{CSA}_{\\\\text{top}} = 2\\\\pi(2)(5) = 20\\\\pi\\\\text{ cm}^2, \\\\quad \\\\text{CSA}_{\\\\text{bottom}} = 2\\\\pi(5)(4) = 40\\\\pi\\\\text{ cm}^2 \\\\)",
        "graphData": {
          "jsxGraph": {
            "id": "y9-16c-q5-board",
            "boundingbox": [
              -8,
              12,
              8,
              -4
            ],
            "keepaspectratio": true,
            "elements": [
              {
                "type": "curve",
                "x": "5 * Math.cos(t)",
                "y": "1.5 * Math.sin(t)",
                "tRange": [
                  3.141592653589793,
                  6.283185307179586
                ],
                "color": "blue"
              },
              {
                "type": "curve",
                "x": "5 * Math.cos(t)",
                "y": "1.5 * Math.sin(t)",
                "tRange": [
                  0,
                  3.141592653589793
                ],
                "color": "blue",
                "dash": 2
              },
              {
                "type": "curve",
                "x": "5 * Math.cos(t)",
                "y": "4 + 1.5 * Math.sin(t)",
                "tRange": [
                  3.141592653589793,
                  6.283185307179586
                ],
                "color": "blue"
              },
              {
                "type": "curve",
                "x": "5 * Math.cos(t)",
                "y": "4 + 1.5 * Math.sin(t)",
                "tRange": [
                  0,
                  3.141592653589793
                ],
                "color": "blue",
                "dash": 2
              },
              {
                "type": "curve",
                "x": "2 * Math.cos(t)",
                "y": "9 + 0.6 * Math.sin(t)",
                "tRange": [
                  0,
                  6.283185307179586
                ],
                "color": "blue"
              },
              {
                "type": "curve",
                "x": "2 * Math.cos(t)",
                "y": "4 + 0.6 * Math.sin(t)",
                "tRange": [
                  3.141592653589793,
                  6.283185307179586
                ],
                "color": "blue"
              },
              {
                "type": "point",
                "id": "A",
                "coords": [
                  -5,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  5,
                  0
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  -5,
                  4
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "D",
                "coords": [
                  5,
                  4
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "A",
                "to": "C",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "B",
                "to": "D",
                "color": "blue"
              },
              {
                "type": "point",
                "id": "E",
                "coords": [
                  -2,
                  4
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "F",
                "coords": [
                  2,
                  4
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "G",
                "coords": [
                  -2,
                  9
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "H",
                "coords": [
                  2,
                  9
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "E",
                "to": "G",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "F",
                "to": "H",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "O1",
                "to": "B",
                "color": "red",
                "dash": 2
              },
              {
                "type": "segment",
                "from": "O3",
                "to": "H",
                "color": "red",
                "dash": 2
              },
              {
                "type": "text",
                "coords": [
                  1.8,
                  -0.6
                ],
                "content": "5 cm"
              },
              {
                "type": "text",
                "coords": [
                  0.5,
                  9.6
                ],
                "content": "2 cm"
              },
              {
                "type": "text",
                "coords": [
                  5.4,
                  2
                ],
                "content": "4 cm"
              },
              {
                "type": "text",
                "coords": [
                  2.3,
                  6.5
                ],
                "content": "5 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( A_{\\\\text{visible tops}} = \\\\pi(2)^2 + (\\\\pi(5)^2 - \\\\pi(2)^2) = 25\\\\pi\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( \\\\text{SA} = 20\\\\pi + 40\\\\pi + 25\\\\pi = 85\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 267.04\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(267.04\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "id": "y9-16c-q5-board",
        "boundingbox": [
          -8,
          12,
          8,
          -4
        ],
        "keepaspectratio": true,
        "elements": [
          {
            "type": "curve",
            "x": "5 * Math.cos(t)",
            "y": "1.5 * Math.sin(t)",
            "tRange": [
              3.141592653589793,
              6.283185307179586
            ],
            "color": "blue"
          },
          {
            "type": "curve",
            "x": "5 * Math.cos(t)",
            "y": "1.5 * Math.sin(t)",
            "tRange": [
              0,
              3.141592653589793
            ],
            "color": "blue",
            "dash": 2
          },
          {
            "type": "curve",
            "x": "5 * Math.cos(t)",
            "y": "4 + 1.5 * Math.sin(t)",
            "tRange": [
              3.141592653589793,
              6.283185307179586
            ],
            "color": "blue"
          },
          {
            "type": "curve",
            "x": "5 * Math.cos(t)",
            "y": "4 + 1.5 * Math.sin(t)",
            "tRange": [
              0,
              3.141592653589793
            ],
            "color": "blue",
            "dash": 2
          },
          {
            "type": "curve",
            "x": "2 * Math.cos(t)",
            "y": "9 + 0.6 * Math.sin(t)",
            "tRange": [
              0,
              6.283185307179586
            ],
            "color": "blue"
          },
          {
            "type": "curve",
            "x": "2 * Math.cos(t)",
            "y": "4 + 0.6 * Math.sin(t)",
            "tRange": [
              3.141592653589793,
              6.283185307179586
            ],
            "color": "blue"
          },
          {
            "type": "point",
            "id": "A",
            "coords": [
              -5,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              5,
              0
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              -5,
              4
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              5,
              4
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "A",
            "to": "C",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "D",
            "color": "blue"
          },
          {
            "type": "point",
            "id": "E",
            "coords": [
              -2,
              4
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "F",
            "coords": [
              2,
              4
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "G",
            "coords": [
              -2,
              9
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "H",
            "coords": [
              2,
              9
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "E",
            "to": "G",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "F",
            "to": "H",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "O1",
            "to": "B",
            "color": "red",
            "dash": 2
          },
          {
            "type": "segment",
            "from": "O3",
            "to": "H",
            "color": "red",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              1.8,
              -0.6
            ],
            "content": "5 cm"
          },
          {
            "type": "text",
            "coords": [
              0.5,
              9.6
            ],
            "content": "2 cm"
          },
          {
            "type": "text",
            "coords": [
              5.4,
              2
            ],
            "content": "4 cm"
          },
          {
            "type": "text",
            "coords": [
              2.3,
              6.5
            ],
            "content": "5 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q6",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The total surface area of a cylinder is \\(37.70\\\\text{ m}^2\\) and the radius of the base is \\(1.5\\\\text{ m}\\). Find the height of the cylinder, correct to two decimal places.",
    "opts": [
      "\\(3.50\\\\text{ m}\\)",
      "\\(3.00\\\\text{ m}\\)",
      "\\(2.50\\\\text{ m}\\)",
      "\\(2.00\\\\text{ m}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set up the equation using SA = 2\\pi r^2 + 2\\pi r h and solve for h.",
    "solution": "Use the surface area formula:\\n\\[\\\\text{SA} = 2\\\\pi r^2 + 2\\\\pi r h\\]\\nSubstitute the given values, noting that \\(37.70 \\\\approx 12\\\\pi\\\\):\\n\\[12\\\\pi = 2\\\\pi(1.5)^2 + 2\\\\pi(1.5)h\\]\\n\\[12\\\\pi = 4.5\\\\pi + 3\\\\pi h\\]\\nSubtract \\(4.5\\\\pi\\\\) from both sides:\\n\\[7.5\\\\pi = 3\\\\pi h\\]\\nDivide by \\(3\\\\pi\\\\):\\n\\[h = \\\\frac{7.5}{3} = 2.5\\\\text{ m}\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( 2\\\\pi r^2 + 2\\\\pi r h = \\\\text{SA} \\\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( 2\\\\pi(1.5)^2 + 2\\\\pi(1.5)h = 12\\\\pi \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( 4.5\\\\pi + 3\\\\pi h = 12\\\\pi \\\\implies 3\\\\pi h = 7.5\\\\pi \\\\implies h = 2.5\\\\text{ m} \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2.50\\\\text{ m}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(2.50\\\\text{ m}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q7a",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The radius of a cylinder is equal to its height, and it has a total surface area of \\(400\\\\text{ cm}^2\\). Find its height, correct to two decimal places.",
    "opts": [
      "\\(6.24\\\\text{ cm}\\)",
      "\\(4.82\\\\text{ cm}\\)",
      "\\(5.64\\\\text{ cm}\\)",
      "\\(7.98\\\\text{ cm}\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Since r = h, substitute r with h in the formula: SA = 2\\pi h^2 + 2\\pi h^2 = 4\\pi h^2.",
    "solution": "Given \\(r = h\\\\), substitute \\(r = h\\\\) into the surface area formula:\\n\\[\\\\text{SA} = 2\\\\pi r^2 + 2\\\\pi r h = 2\\\\pi h^2 + 2\\\\pi h^2 = 4\\\\pi h^2\\]\\nSet \\\\(4\\\\pi h^2 = 400\\\\):\\n\\[h^2 = \\\\frac{400}{4\\\\pi} = \\\\frac{100}{\\\\pi}\\]\\n\\[h = \\\\sqrt{\\\\frac{100}{\\\\pi}} \\\\approx 5.6419\\\\text{ cm} \\\\implies 5.64\\\\text{ cm}\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( \\\\text{SA} = 2\\\\pi h^2 + 2\\\\pi h^2 = 4\\\\pi h^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( 4\\\\pi h^2 = 400 \\\\implies h^2 = \\\\frac{100}{\\\\pi} \\\\approx 31.83 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( h = \\\\sqrt{31.83} \\\\approx 5.64\\\\text{ cm} \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5.64\\\\text{ cm}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(5.64\\\\text{ cm}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q7b",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The height of a cylinder is equal to its diameter, and it has a total surface area of \\(600\\\\text{ cm}^2\\). Find the radius, correct to two decimal places.",
    "opts": [
      "\\(6.80\\\\text{ cm}\\)",
      "\\(5.64\\\\text{ cm}\\)",
      "\\(4.20\\\\text{ cm}\\)",
      "\\(7.15\\\\text{ cm}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Since height is diameter (h = 2r), substitute h with 2r in the formula: SA = 2\\pi r^2 + 2\\pi r(2r) = 6\\pi r^2.",
    "solution": "Given \\(h = 2r\\\\), substitute \\(h = 2r\\\\) into the surface area formula:\\n\\[\\\\text{SA} = 2\\\\pi r^2 + 2\\\\pi r(2r) = 2\\\\pi r^2 + 4\\\\pi r^2 = 6\\\\pi r^2\\]\\nSet \\\\(6\\\\pi r^2 = 600\\\\):\\n\\[r^2 = \\\\frac{600}{6\\\\pi} = \\\\frac{100}{\\\\pi}\\]\\n\\[r = \\\\sqrt{\\\\frac{100}{\\\\pi}} \\\\approx 5.6419\\\\text{ cm} \\\\implies 5.64\\\\text{ cm}\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( \\\\text{SA} = 2\\\\pi r^2 + 2\\\\pi r(2r) = 6\\\\pi r^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( 6\\\\pi r^2 = 600 \\\\implies r^2 = \\\\frac{100}{\\\\pi} \\\\approx 31.83 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( r = \\\\sqrt{31.83} \\\\approx 5.64\\\\text{ cm} \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5.64\\\\text{ cm}. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(5.64\\\\text{ cm}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y9-16c-q8",
    "topicId": "y9-16c",
    "c": "16C",
    "t": "Surface area of a cylinder",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A \\(270^{\\\\circ}\\) sector block of cheese is cut from a cylindrical block of cheese. The original cylindrical block had:\\n- Radius = \\(8\\\\text{ cm}\\)\\n- Height = \\(4\\\\text{ cm}\\)\\n\\nFind the total surface area of the remaining piece of cheese. (Round the final answer to two decimal places.)",
    "opts": [
      "\\(550.45\\\\text{ cm}^2\\)",
      "\\(486.20\\\\text{ cm}^2\\)",
      "\\(516.39\\\\text{ cm}^2\\)",
      "\\(432.12\\\\text{ cm}^2\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The surface area includes the top and bottom sector faces (each 270/360 of a circle), the curved outer sector face, and two flat rectangular cut faces.",
    "solution": "The surface area consists of:\\n1. Top and bottom sector faces: \\(2 \\\\times \\\\left(\\\\frac{270}{360} \\\\times \\\\pi \\\\times 8^2\\\\right) = 96\\\\pi\\\\text{ cm}^2\\)\\n2. Outer curved surface sector face: \\(\\\\frac{270}{360} \\\\times 2\\\\pi r h = \\\\frac{3}{4} \\\\times 2\\\\pi(8)(4) = 48\\\\pi\\\\text{ cm}^2\\)\\n3. Two flat rectangular cut faces: \\(2 \\\\times (r \\\\times h) = 2 \\\\times (8 \\\\times 4) = 64\\\\text{ cm}^2\\)\\n\\nAdd the components to find the total surface area:\\n\\[\\\\text{SA} = 96\\\\pi + 48\\\\pi + 64 = 144\\\\pi + 64\\\\text{ cm}^2\\]\\nEvaluate the numerical value:\\n\\[144\\\\pi + 64 \\\\approx 452.389 + 64 = 516.389\\\\text{ cm}^2 \\\\implies 516.39\\\\text{ cm}^2\\]",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Surface area of a cylinder: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\\\( A_{\\\\text{sectors}} = 2 \\\\times \\\\left(\\\\frac{270}{360} \\\\times \\\\pi \\\\times 8^2\\\\right) = 96\\\\pi\\\\text{ cm}^2 \\\\)",
        "graphData": {
          "jsxGraph": {
            "id": "y9-16c-q8-board",
            "boundingbox": [
              -9,
              4.5,
              9,
              -6.5
            ],
            "keepaspectratio": true,
            "elements": [
              {
                "type": "point",
                "id": "O2",
                "coords": [
                  0,
                  1
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "O1",
                "coords": [
                  0,
                  -3
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "T1",
                "coords": [
                  -2.05,
                  -0.69
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "B1",
                "coords": [
                  -2.05,
                  -4.69
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "T2",
                "coords": [
                  5.64,
                  0.38
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "B2",
                "coords": [
                  5.64,
                  -3.62
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "L2",
                "coords": [
                  -6,
                  1
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "L1",
                "coords": [
                  -6,
                  -3
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "R2",
                "coords": [
                  6,
                  1
                ],
                "visible": false
              },
              {
                "type": "point",
                "id": "R1",
                "coords": [
                  6,
                  -3
                ],
                "visible": false
              },
              {
                "type": "segment",
                "from": "O2",
                "to": "T1",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "T1",
                "to": "B1",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "O1",
                "to": "B1",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "O2",
                "to": "T2",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "T2",
                "to": "B2",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "O1",
                "to": "B2",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "O2",
                "to": "O1",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "L2",
                "to": "L1",
                "color": "blue"
              },
              {
                "type": "segment",
                "from": "R2",
                "to": "R1",
                "color": "blue"
              },
              {
                "type": "curve",
                "x": "6 * Math.cos(t)",
                "y": "1 + 1.8 * Math.sin(t)",
                "tRange": [
                  5.9341,
                  10.6465
                ],
                "color": "blue"
              },
              {
                "type": "curve",
                "x": "6 * Math.cos(t)",
                "y": "-3 + 1.8 * Math.sin(t)",
                "tRange": [
                  3.1416,
                  4.3633
                ],
                "color": "blue"
              },
              {
                "type": "curve",
                "x": "6 * Math.cos(t)",
                "y": "-3 + 1.8 * Math.sin(t)",
                "tRange": [
                  5.9341,
                  6.2832
                ],
                "color": "blue"
              },
              {
                "type": "curve",
                "x": "1.9 * Math.cos(t)",
                "y": "1 + 0.57 * Math.sin(t)",
                "tRange": [
                  5.9341,
                  10.6465
                ],
                "color": "blue"
              },
              {
                "type": "text",
                "coords": [
                  -2.2,
                  1.9
                ],
                "content": "270°"
              },
              {
                "type": "text",
                "coords": [
                  3,
                  0.95
                ],
                "content": "8 cm"
              },
              {
                "type": "text",
                "coords": [
                  6.45,
                  -1.1
                ],
                "content": "4 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\\\( A_{\\\\text{curved}} = \\\\frac{270}{360} \\\\times 2\\\\pi(8)(4) = 48\\\\pi\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\\\( A_{\\\\text{cuts}} = 2 \\\\times (8 \\\\times 4) = 64\\\\text{ cm}^2 \\\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 516.39\\\\text{ cm}^2. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(516.39\\\\text{ cm}^2\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "id": "y9-16c-q8-board",
        "boundingbox": [
          -9,
          4.5,
          9,
          -6.5
        ],
        "keepaspectratio": true,
        "elements": [
          {
            "type": "point",
            "id": "O2",
            "coords": [
              0,
              1
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "O1",
            "coords": [
              0,
              -3
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "T1",
            "coords": [
              -2.05,
              -0.69
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "B1",
            "coords": [
              -2.05,
              -4.69
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "T2",
            "coords": [
              5.64,
              0.38
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "B2",
            "coords": [
              5.64,
              -3.62
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "L2",
            "coords": [
              -6,
              1
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "L1",
            "coords": [
              -6,
              -3
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "R2",
            "coords": [
              6,
              1
            ],
            "visible": false
          },
          {
            "type": "point",
            "id": "R1",
            "coords": [
              6,
              -3
            ],
            "visible": false
          },
          {
            "type": "segment",
            "from": "O2",
            "to": "T1",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "T1",
            "to": "B1",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "O1",
            "to": "B1",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "O2",
            "to": "T2",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "T2",
            "to": "B2",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "O1",
            "to": "B2",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "O2",
            "to": "O1",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "L2",
            "to": "L1",
            "color": "blue"
          },
          {
            "type": "segment",
            "from": "R2",
            "to": "R1",
            "color": "blue"
          },
          {
            "type": "curve",
            "x": "6 * Math.cos(t)",
            "y": "1 + 1.8 * Math.sin(t)",
            "tRange": [
              5.9341,
              10.6465
            ],
            "color": "blue"
          },
          {
            "type": "curve",
            "x": "6 * Math.cos(t)",
            "y": "-3 + 1.8 * Math.sin(t)",
            "tRange": [
              3.1416,
              4.3633
            ],
            "color": "blue"
          },
          {
            "type": "curve",
            "x": "6 * Math.cos(t)",
            "y": "-3 + 1.8 * Math.sin(t)",
            "tRange": [
              5.9341,
              6.2832
            ],
            "color": "blue"
          },
          {
            "type": "curve",
            "x": "1.9 * Math.cos(t)",
            "y": "1 + 0.57 * Math.sin(t)",
            "tRange": [
              5.9341,
              10.6465
            ],
            "color": "blue"
          },
          {
            "type": "text",
            "coords": [
              -2.2,
              1.9
            ],
            "content": "270°"
          },
          {
            "type": "text",
            "coords": [
              3,
              0.95
            ],
            "content": "8 cm"
          },
          {
            "type": "text",
            "coords": [
              6.45,
              -1.1
            ],
            "content": "4 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  }
];
