export const Y11_CH6H_QUESTIONS = [
  {
    "id": "y11a-6H-q1a",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, one side of length \\(x\\) is opposite to an angle of \\(45^{\\circ}\\), and another side of length \\(12\\) is opposite to an angle of \\(80^{\\circ}\\). Find the value of \\(x\\), correct to one decimal place.",
    "opts": [
      "\\(-8.6\\)",
      "\\(7.6\\)",
      "\\(8.6\\)",
      "\\(9.6\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the sine rule: \\(\\frac{x}{\\sin A} = \\frac{a}{\\sin B}\\).",
    "solution": "Using the sine rule: \\(\\frac{x}{\\sin 45^{\\circ}} = \\frac{12}{\\sin 80^{\\circ}}\\). Thus, \\(x = \\frac{12 \\times \\sin 45^{\\circ}}{\\sin 80^{\\circ}} \\approx 8.6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{x}{\\sin 45^{\\circ}} = \\frac{12}{\\sin 80^{\\circ}}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              10,
              11,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A",
                "label": {
                  "offset": [
                    -10,
                    -10
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  10,
                  0
                ],
                "name": "B",
                "label": {
                  "offset": [
                    10,
                    -10
                  ]
                }
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  3.5,
                  6
                ],
                "name": "C",
                "label": {
                  "offset": [
                    0,
                    10
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "45°",
                "radius": 1.2,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "C",
                  "B"
                ],
                "name": "80°",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    -20
                  ]
                }
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
                "to": "C",
                "color": "blue"
              },
              {
                "type": "text",
                "coords": [
                  5,
                  -0.5
                ],
                "content": "12"
              },
              {
                "type": "text",
                "coords": [
                  7.2,
                  3.2
                ],
                "content": "x"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{12 \\sin 45^{\\circ}}{\\sin 80^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x \\approx 8.6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 8.6. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(8.6\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          10,
          11,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A",
            "label": {
              "offset": [
                -10,
                -10
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              10,
              0
            ],
            "name": "B",
            "label": {
              "offset": [
                10,
                -10
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              3.5,
              6
            ],
            "name": "C",
            "label": {
              "offset": [
                0,
                10
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "45°",
            "radius": 1.2,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "80°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                -20
              ]
            }
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
            "to": "C",
            "color": "blue"
          },
          {
            "type": "text",
            "coords": [
              5,
              -0.5
            ],
            "content": "12"
          },
          {
            "type": "text",
            "coords": [
              7.2,
              3.2
            ],
            "content": "x"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q1b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, one side of length \\(x\\) is opposite to an angle of \\(115^{\\circ}\\), and another side of length \\(4\\) is opposite to an angle of \\(35^{\\circ}\\). Find the value of \\(x\\), correct to one decimal place.",
    "opts": [
      "\\(-6.3\\)",
      "\\(5.3\\)",
      "\\(6.3\\)",
      "\\(7.3\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Apply the sine rule: \\(\\frac{x}{\\sin 115^{\\circ}} = \\frac{4}{\\sin 35^{\\circ}}\\).",
    "solution": "Using the sine rule: \\(\\frac{x}{\\sin 115^{\\circ}} = \\frac{4}{\\sin 35^{\\circ}}\\). Thus, \\(x = \\frac{4 \\times \\sin 115^{\\circ}}{\\sin 35^{\\circ}} \\approx 6.3\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{x}{\\sin 115^{\\circ}} = \\frac{4}{\\sin 35^{\\circ}}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              7,
              8,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  7,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  2.5,
                  2.2
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "C",
                  "B",
                  "A"
                ],
                "name": "35°",
                "radius": 1,
                "label": {
                  "offset": [
                    -20,
                    10
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "C",
                  "B"
                ],
                "name": "115°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    0,
                    -15
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  1.1,
                  1.3
                ],
                "content": "4"
              },
              {
                "type": "text",
                "coords": [
                  3.5,
                  -0.5
                ],
                "content": "x"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{4 \\sin 115^{\\circ}}{\\sin 35^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x \\approx 6.3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 6.3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(6.3\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          7,
          8,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              7,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              2.5,
              2.2
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "C",
              "B",
              "A"
            ],
            "name": "35°",
            "radius": 1,
            "label": {
              "offset": [
                -20,
                10
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "115°",
            "radius": 0.8,
            "label": {
              "offset": [
                0,
                -15
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              1.1,
              1.3
            ],
            "content": "4"
          },
          {
            "type": "text",
            "coords": [
              3.5,
              -0.5
            ],
            "content": "x"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q1c",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find the value of \\(x\\), correct to one decimal place, if a side of length \\(x\\) is opposite to an angle of \\(80^{\\circ}\\), and a side of length \\(6\\) is opposite to an angle of \\(60^{\\circ}\\).",
    "opts": [
      "\\(-6.8\\)",
      "\\(5.8\\)",
      "\\(6.8\\)",
      "\\(7.8\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the sine rule: \\(\\frac{x}{\\sin 80^{\\circ}} = \\frac{6}{\\sin 60^{\\circ}}\\).",
    "solution": "From the sine rule: \\(\\frac{x}{\\sin 80^{\\circ}} = \\frac{6}{\\sin 60^{\\circ}}\\). Thus, \\(x = \\frac{6 \\sin 80^{\\circ}}{\\sin 60^{\\circ}} \\approx 6.8\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{x}{\\sin 80^{\\circ}} = \\frac{6}{\\sin 60^{\\circ}}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              8,
              8,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  6,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  1,
                  5
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "C",
                  "A"
                ],
                "name": "60°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    0,
                    -15
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "C",
                  "A",
                  "B"
                ],
                "name": "80°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  3.5,
                  2.7
                ],
                "content": "x"
              },
              {
                "type": "text",
                "coords": [
                  0.3,
                  2.5
                ],
                "content": "6"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{6 \\sin 80^{\\circ}}{\\sin 60^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x \\approx 6.8\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 6.8. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(6.8\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          8,
          8,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              6,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              1,
              5
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "C",
              "A"
            ],
            "name": "60°",
            "radius": 0.8,
            "label": {
              "offset": [
                0,
                -15
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "C",
              "A",
              "B"
            ],
            "name": "80°",
            "radius": 0.8,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              3.5,
              2.7
            ],
            "content": "x"
          },
          {
            "type": "text",
            "coords": [
              0.3,
              2.5
            ],
            "content": "6"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q1d",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, one side of length \\(x\\) is opposite to an angle of \\(60^{\\circ}\\), and another side of length \\(5\\) is opposite to an angle of \\(70^{\\circ}\\). Find the value of \\(x\\), correct to one decimal place.",
    "opts": [
      "\\(-4.6\\)",
      "\\(3.5999999999999996\\)",
      "\\(4.6\\)",
      "\\(5.6\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Write the sine rule equation: \\(\\frac{x}{\\sin 60^{\\circ}} = \\frac{5}{\\sin 70^{\\circ}}\\).",
    "solution": "Using the sine rule: \\(\\frac{x}{\\sin 60^{\\circ}} = \\frac{5}{\\sin 70^{\\circ}}\\). Therefore, \\(x = \\frac{5 \\sin 60^{\\circ}}{\\sin 70^{\\circ}} \\approx 4.6\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{x}{\\sin 60^{\\circ}} = \\frac{5}{\\sin 70^{\\circ}}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              7,
              7,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  5,
                  4
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  6,
                  0
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "70°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "C",
                  "B"
                ],
                "name": "60°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    -15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  2.2,
                  2.5
                ],
                "content": "5"
              },
              {
                "type": "text",
                "coords": [
                  3,
                  -0.5
                ],
                "content": "x"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{5 \\sin 60^{\\circ}}{\\sin 70^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x \\approx 4.6\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 4.6. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(4.6\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          7,
          7,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              5,
              4
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              6,
              0
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "70°",
            "radius": 0.8,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "60°",
            "radius": 0.8,
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              2.2,
              2.5
            ],
            "content": "5"
          },
          {
            "type": "text",
            "coords": [
              3,
              -0.5
            ],
            "content": "x"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q1e",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, one side of length \\(x\\) is opposite to an angle of \\(75^{\\circ}\\), and another side of length \\(9\\) is opposite to an angle of \\(50^{\\circ}\\). Find the value of \\(x\\), correct to one decimal place.",
    "opts": [
      "\\(-11.4\\)",
      "\\(10.4\\)",
      "\\(11.4\\)",
      "\\(12.4\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Apply the sine rule: \\(\\frac{x}{\\sin 75^{\\circ}} = \\frac{9}{\\sin 50^{\\circ}}\\).",
    "solution": "From the sine rule: \\(\\frac{x}{\\sin 75^{\\circ}} = \\frac{9}{\\sin 50^{\\circ}}\\). Thus, \\(x = \\frac{9 \\sin 75^{\\circ}}{\\sin 50^{\\circ}} \\approx 11.4\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{x}{\\sin 75^{\\circ}} = \\frac{9}{\\sin 50^{\\circ}}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              11,
              11,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  10,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  2,
                  7
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "75°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "name": "50°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    -15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  0.8,
                  4
                ],
                "content": "9"
              },
              {
                "type": "text",
                "coords": [
                  5,
                  -0.5
                ],
                "content": "x"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{9 \\sin 75^{\\circ}}{\\sin 50^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x \\approx 11.4\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 11.4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(11.4\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          11,
          11,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              10,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              2,
              7
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "75°",
            "radius": 0.8,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "name": "50°",
            "radius": 0.8,
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              0.8,
              4
            ],
            "content": "9"
          },
          {
            "type": "text",
            "coords": [
              5,
              -0.5
            ],
            "content": "x"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q1f",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, one side of length \\(x\\) is opposite to an angle of \\(120^{\\circ}\\), and another side of length \\(6\\) is opposite to an angle of \\(35^{\\circ}\\). Find the value of \\(x\\), correct to one decimal place.",
    "opts": [
      "\\(-9.1\\)",
      "\\(10.1\\)",
      "\\(8.1\\)",
      "\\(9.1\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "Apply the sine rule: \\(\\frac{x}{\\sin 120^{\\circ}} = \\frac{6}{\\sin 35^{\\circ}}\\).",
    "solution": "From the sine rule: \\(\\frac{x}{\\sin 120^{\\circ}} = \\frac{6}{\\sin 35^{\\circ}}\\). Thus, \\(x = \\frac{6 \\sin 120^{\\circ}}{\\sin 35^{\\circ}} \\approx 9.1\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{x}{\\sin 120^{\\circ}} = \\frac{6}{\\sin 35^{\\circ}}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              7,
              10,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  9,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  2,
                  2.5
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "C",
                  "B"
                ],
                "name": "120°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    0,
                    -15
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "C",
                  "B",
                  "A"
                ],
                "name": "35°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    -15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  0.8,
                  1.5
                ],
                "content": "6"
              },
              {
                "type": "text",
                "coords": [
                  4.5,
                  -0.5
                ],
                "content": "x"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{6 \\sin 120^{\\circ}}{\\sin 35^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x \\approx 9.1\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 9.1. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(9.1\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          7,
          10,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              9,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              2,
              2.5
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "120°",
            "radius": 0.8,
            "label": {
              "offset": [
                0,
                -15
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "C",
              "B",
              "A"
            ],
            "name": "35°",
            "radius": 0.8,
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              0.8,
              1.5
            ],
            "content": "6"
          },
          {
            "type": "text",
            "coords": [
              4.5,
              -0.5
            ],
            "content": "x"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q2a",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, side \\(a\\) is opposite to an angle of \\(65^{\\circ}\\). Another side of length \\(14\\) is opposite to an angle of \\(75^{\\circ}\\). Find the value of \\(a\\), correct to two decimal places.",
    "opts": [
      "\\(-13.14\\)",
      "\\(12.14\\)",
      "\\(13.14\\)",
      "\\(14.14\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Apply the sine rule: \\(\\frac{a}{\\sin 65^{\\circ}} = \\frac{14}{\\sin 75^{\\circ}}\\).",
    "solution": "From the sine rule: \\(\\frac{a}{\\sin 65^{\\circ}} = \\frac{14}{\\sin 75^{\\circ}}\\). Thus, \\(a = \\frac{14 \\sin 65^{\\circ}}{\\sin 75^{\\circ}} \\approx 13.14\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{a}{\\sin 65^{\\circ}} = \\frac{14}{\\sin 75^{\\circ}}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              15,
              15,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  13.14,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  3.6,
                  13.5
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "75°",
                "radius": 1.2,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "name": "65°",
                "radius": 1.2,
                "label": {
                  "offset": [
                    -15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  1.5,
                  7
                ],
                "content": "14"
              },
              {
                "type": "text",
                "coords": [
                  8.5,
                  7
                ],
                "content": "a"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(a = \\frac{14 \\sin 65^{\\circ}}{\\sin 75^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(a \\approx 13.14\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 13.14. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(13.14\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          15,
          15,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              13.14,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              3.6,
              13.5
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "75°",
            "radius": 1.2,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "name": "65°",
            "radius": 1.2,
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              1.5,
              7
            ],
            "content": "14"
          },
          {
            "type": "text",
            "coords": [
              8.5,
              7
            ],
            "content": "a"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q2b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, side \\(b\\) is opposite to an angle of \\(80^{\\circ}\\). Another side of length \\(18\\) is opposite to an angle of \\(28^{\\circ}\\). Find the value of \\(b\\), correct to two decimal places.",
    "opts": [
      "\\(-37.76\\)",
      "\\(36.76\\)",
      "\\(37.76\\)",
      "\\(38.76\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Apply the sine rule: \\(\\frac{b}{\\sin 80^{\\circ}} = \\frac{18}{\\sin 28^{\\circ}}\\).",
    "solution": "From the sine rule: \\(\\frac{b}{\\sin 80^{\\circ}} = \\frac{18}{\\sin 28^{\\circ}}\\). Thus, \\(b = \\frac{18 \\sin 80^{\\circ}}{\\sin 28^{\\circ}} \\approx 37.76\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{b}{\\sin 80^{\\circ}} = \\frac{18}{\\sin 28^{\\circ}}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -2,
              40,
              40,
              -5
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  35,
                  10
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  15,
                  0
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "C",
                  "A",
                  "B"
                ],
                "name": "28°",
                "radius": 2,
                "label": {
                  "offset": [
                    25,
                    10
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "name": "80°",
                "radius": 2,
                "label": {
                  "offset": [
                    -10,
                    -25
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  7.5,
                  -2
                ],
                "content": "18"
              },
              {
                "type": "text",
                "coords": [
                  25,
                  6
                ],
                "content": "b"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(b = \\frac{18 \\sin 80^{\\circ}}{\\sin 28^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(b \\approx 37.76\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 37.76. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(37.76\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          40,
          40,
          -5
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              35,
              10
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              15,
              0
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "C",
              "A",
              "B"
            ],
            "name": "28°",
            "radius": 2,
            "label": {
              "offset": [
                25,
                10
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "name": "80°",
            "radius": 2,
            "label": {
              "offset": [
                -10,
                -25
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              7.5,
              -2
            ],
            "content": "18"
          },
          {
            "type": "text",
            "coords": [
              25,
              6
            ],
            "content": "b"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q2c",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, side \\(c\\) is opposite to an angle of \\(110^{\\circ}\\). Another side of length \\(16\\) is opposite to an angle of \\(46^{\\circ}\\). Find the value of \\(c\\), correct to two decimal places.",
    "opts": [
      "\\(-20.9\\)",
      "\\(19.9\\)",
      "\\(20.90\\)",
      "\\(21.9\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Apply the sine rule: \\(\\frac{c}{\\sin 110^{\\circ}} = \\frac{16}{\\sin 46^{\\circ}}\\).",
    "solution": "From the sine rule: \\(\\frac{c}{\\sin 110^{\\circ}} = \\frac{16}{\\sin 46^{\\circ}}\\). Thus, \\(c = \\frac{16 \\sin 110^{\\circ}}{\\sin 46^{\\circ}} \\approx 20.90\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{c}{\\sin 110^{\\circ}} = \\frac{16}{\\sin 46^{\\circ}}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              25,
              25,
              -2
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  20,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  6,
                  8
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "C",
                  "B"
                ],
                "name": "110°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    -25
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "C",
                  "B",
                  "A"
                ],
                "name": "46°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    -25,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  3,
                  5
                ],
                "content": "16"
              },
              {
                "type": "text",
                "coords": [
                  10,
                  -1
                ],
                "content": "c"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(c = \\frac{16 \\sin 110^{\\circ}}{\\sin 46^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(c \\approx 20.90\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 20.90. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(20.90\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          25,
          25,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              20,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              6,
              8
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "110°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                -25
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "C",
              "B",
              "A"
            ],
            "name": "46°",
            "radius": 1.5,
            "label": {
              "offset": [
                -25,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              3,
              5
            ],
            "content": "16"
          },
          {
            "type": "text",
            "coords": [
              10,
              -1
            ],
            "content": "c"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q3a",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, side of length \\(6\\) is opposite to an angle of \\(68^{\\circ}\\). Side of length \\(4\\) is opposite to an angle \\(\\theta\\). Find the value of \\(\\theta\\), correct to the nearest degree.",
    "opts": [
      "\\(-38°\\)",
      "\\(38°\\)",
      "\\(38° + 1\\)",
      "\\(48°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the sine rule for angles: \\(\\frac{\\sin \\theta}{4} = \\frac{\\sin 68^{\\circ}}{6}\\).",
    "solution": "From the sine rule: \\(\\frac{\\sin \\theta}{4} = \\frac{\\sin 68^{\\circ}}{6} \\implies \\sin \\theta = \\frac{4 \\sin 68^{\\circ}}{6} \\approx 0.6181 \\implies \\theta = \\arcsin(0.6181) \\approx 38.17^{\\circ} \\approx 38^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin \\theta}{4} = \\frac{\\sin 68^{\\circ}}{6}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              7,
              7,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  5,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  2,
                  4
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "θ",
                "radius": 0.8,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "C",
                  "B"
                ],
                "name": "68°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    0,
                    -15
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  3.5,
                  2.5
                ],
                "content": "6"
              },
              {
                "type": "text",
                "coords": [
                  2.5,
                  -0.5
                ],
                "content": "4"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin \\theta = \\frac{4 \\sin 68^{\\circ}}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta \\approx 38^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 38°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(38°\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          7,
          7,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              5,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              2,
              4
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "θ",
            "radius": 0.8,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "68°",
            "radius": 0.8,
            "label": {
              "offset": [
                0,
                -15
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              3.5,
              2.5
            ],
            "content": "6"
          },
          {
            "type": "text",
            "coords": [
              2.5,
              -0.5
            ],
            "content": "4"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q3b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, side of length \\(12\\) is opposite to an angle of \\(80^{\\circ}\\). Side of length \\(9\\) is opposite to an angle \\(\\theta\\). Find the value of \\(\\theta\\), correct to the nearest degree.",
    "opts": [
      "\\(-48°\\)",
      "\\(48°\\)",
      "\\(48° + 1\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the sine rule: \\(\\frac{\\sin \\theta}{9} = \\frac{\\sin 80^{\\circ}}{12}\\).",
    "solution": "Using the sine rule: \\(\\frac{\\sin \\theta}{9} = \\frac{\\sin 80^{\\circ}}{12} \\implies \\sin \\theta = \\frac{9 \\sin 80^{\\circ}}{12} \\approx 0.7386 \\implies \\theta \\approx 47.6^{\\circ} \\approx 48^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin \\theta}{9} = \\frac{\\sin 80^{\\circ}}{12}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              13,
              13,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  12,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  3,
                  8
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "name": "θ",
                "radius": 1,
                "label": {
                  "offset": [
                    -20,
                    10
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "80°",
                "radius": 1,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  7.5,
                  5
                ],
                "content": "12"
              },
              {
                "type": "text",
                "coords": [
                  6,
                  -0.5
                ],
                "content": "9"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin \\theta = \\frac{9 \\sin 80^{\\circ}}{12}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta \\approx 48^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 48°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(48°\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          13,
          13,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              12,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              3,
              8
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "name": "θ",
            "radius": 1,
            "label": {
              "offset": [
                -20,
                10
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "80°",
            "radius": 1,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              7.5,
              5
            ],
            "content": "12"
          },
          {
            "type": "text",
            "coords": [
              6,
              -0.5
            ],
            "content": "9"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q3c",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, side of length \\(15\\) is opposite to an angle of \\(105^{\\circ}\\). Side of length \\(11\\) is opposite to an angle \\(\\theta\\). Find \\(\\theta\\), correct to the nearest degree.",
    "opts": [
      "\\(-45°\\)",
      "\\(45°\\)",
      "\\(45° + 1\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the sine rule: \\(\\frac{\\sin \\theta}{11} = \\frac{\\sin 105^{\\circ}}{15}\\).",
    "solution": "From the sine rule: \\(\\frac{\\sin \\theta}{11} = \\frac{\\sin 105^{\\circ}}{15} \\implies \\sin \\theta = \\frac{11 \\sin 105^{\\circ}}{15} \\approx 0.7084 \\implies \\theta \\approx 45.1^{\\circ} \\approx 45^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin \\theta}{11} = \\frac{\\sin 105^{\\circ}}{15}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              16,
              16,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  15,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  4,
                  6
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "C",
                  "B"
                ],
                "name": "105°",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    -20
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "C",
                  "B",
                  "A"
                ],
                "name": "θ",
                "radius": 1,
                "label": {
                  "offset": [
                    -20,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  2,
                  3.5
                ],
                "content": "11"
              },
              {
                "type": "text",
                "coords": [
                  7.5,
                  -0.5
                ],
                "content": "15"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin \\theta = \\frac{11 \\sin 105^{\\circ}}{15}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta \\approx 45^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 45°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(45°\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          16,
          16,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              15,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              4,
              6
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "105°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                -20
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "C",
              "B",
              "A"
            ],
            "name": "θ",
            "radius": 1,
            "label": {
              "offset": [
                -20,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              2,
              3.5
            ],
            "content": "11"
          },
          {
            "type": "text",
            "coords": [
              7.5,
              -0.5
            ],
            "content": "15"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q3d",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, side of length \\(20\\) is opposite to an angle of \\(75^{\\circ}\\). Side of length \\(8\\) is opposite to an angle \\(\\theta\\). Find \\(\\theta\\), correct to the nearest degree.",
    "opts": [
      "\\(-23°\\)",
      "\\(23°\\)",
      "\\(23° + 1\\)",
      "\\(44°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the sine rule: \\(\\frac{\\sin \\theta}{8} = \\frac{\\sin 75^{\\circ}}{20}\\).",
    "solution": "From the sine rule: \\(\\frac{\\sin \\theta}{8} = \\frac{\\sin 75^{\\circ}}{20} \\implies \\sin \\theta = \\frac{8 \\sin 75^{\\circ}}{20} \\approx 0.3864 \\implies \\theta \\approx 22.7^{\\circ} \\approx 23^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin \\theta}{8} = \\frac{\\sin 75^{\\circ}}{20}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin \\theta = 0.3864\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta \\approx 23^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 23°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(23°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q3e",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, side of length \\(14\\) is opposite to an angle of \\(120^{\\circ}\\). Side of length \\(9\\) is opposite to an angle \\(\\theta\\). Find \\(\\theta\\), correct to the nearest degree.",
    "opts": [
      "\\(-34°\\)",
      "\\(34°\\)",
      "\\(34° + 1\\)",
      "\\(44°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the sine rule: \\(\\frac{\\sin \\theta}{9} = \\frac{\\sin 120^{\\circ}}{14}\\).",
    "solution": "From the sine rule: \\(\\frac{\\sin \\theta}{9} = \\frac{\\sin 120^{\\circ}}{14} \\implies \\sin \\theta = \\frac{9 \\sin 120^{\\circ}}{14} \\approx 0.5567 \\implies \\theta \\approx 33.8^{\\circ} \\approx 34^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin \\theta}{9} = \\frac{\\sin 120^{\\circ}}{14}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin \\theta = \\frac{9 \\sin 120^{\\circ}}{14}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta \\approx 34^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 34°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(34°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q3f",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a triangle, side of length \\(25\\) is opposite to an angle of \\(55^{\\circ}\\). Side of length \\(21\\) is opposite to an angle \\(\\theta\\). Find \\(\\theta\\), correct to the nearest degree.",
    "opts": [
      "\\(-43°\\)",
      "\\(43°\\)",
      "\\(43° + 1\\)",
      "\\(44°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the sine rule: \\(\\frac{\\sin \\theta}{21} = \\frac{\\sin 55^{\\circ}}{25}\\).",
    "solution": "From the sine rule: \\(\\frac{\\sin \\theta}{21} = \\frac{\\sin 55^{\\circ}}{25} \\implies \\sin \\theta = \\frac{21 \\sin 55^{\\circ}}{25} \\approx 0.6881 \\implies \\theta \\approx 43.48^{\\circ} \\approx 43^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin \\theta}{21} = \\frac{\\sin 55^{\\circ}}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin \\theta = \\frac{21 \\sin 55^{\\circ}}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta \\approx 43^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 43°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(43°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q4a",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find the area of a triangle with adjacent side lengths \\(5\\text{ cm}\\) and \\(6\\text{ cm}\\), and an included angle of \\(40^{\\circ}\\). Give your answer correct to the nearest square centimetre.",
    "opts": [
      "\\(-10\\)",
      "\\(10\\)",
      "\\(11\\)",
      "\\(9\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the area formula: \\(\\text{Area} = \\frac{1}{2} a b \\sin C\\).",
    "solution": "Using the area formula: \\(\\text{Area} = \\frac{1}{2} \\times 5 \\times 6 \\times \\sin 40^{\\circ} = 15 \\times \\sin 40^{\\circ} \\approx 9.64 \\approx 10\\text{ cm}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2} a b \\sin C\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              7,
              7,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  6,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  3.8,
                  3.2
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "40°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  3,
                  -0.5
                ],
                "content": "6 cm"
              },
              {
                "type": "text",
                "coords": [
                  1.5,
                  2
                ],
                "content": "5 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2} \\times 5 \\times 6 \\times \\sin 40^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Area} \\approx 10\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 10. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(10\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          7,
          7,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              6,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              3.8,
              3.2
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "40°",
            "radius": 0.8,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              3,
              -0.5
            ],
            "content": "6 cm"
          },
          {
            "type": "text",
            "coords": [
              1.5,
              2
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
    "id": "y11a-6H-q4b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find the area of a triangle with adjacent side lengths \\(6\\text{ cm}\\) and \\(9\\text{ cm}\\), and an included angle of \\(65^{\\circ}\\). Give your answer correct to the nearest square centimetre.",
    "opts": [
      "\\(-24\\)",
      "\\(23\\)",
      "\\(24\\)",
      "\\(25\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use \\(\\text{Area} = \\frac{1}{2} a b \\sin C\\).",
    "solution": "Using the area formula: \\(\\text{Area} = \\frac{1}{2} \\times 6 \\times 9 \\times \\sin 65^{\\circ} = 27 \\times \\sin 65^{\\circ} \\approx 24.47 \\approx 24\\text{ cm}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2} \\times 6 \\times 9 \\times \\sin 65^{\\circ}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              10,
              10,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  9,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  2.5,
                  5.4
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "65°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  4.5,
                  -0.5
                ],
                "content": "9 cm"
              },
              {
                "type": "text",
                "coords": [
                  0.8,
                  3
                ],
                "content": "6 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Area} \\approx 24.47\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Area} \\approx 24\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 24. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(24\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          10,
          10,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              9,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              2.5,
              5.4
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "65°",
            "radius": 0.8,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              4.5,
              -0.5
            ],
            "content": "9 cm"
          },
          {
            "type": "text",
            "coords": [
              0.8,
              3
            ],
            "content": "6 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q4c",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Find the area of a triangle with adjacent side lengths \\(8\\text{ cm}\\) and \\(8\\text{ cm}\\), and an included angle of \\(125^{\\circ}\\). Give your answer correct to the nearest square centimetre.",
    "opts": [
      "\\(-26\\)",
      "\\(25\\)",
      "\\(26\\)",
      "\\(27\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use \\(\\text{Area} = \\frac{1}{2} a b \\sin C\\).",
    "solution": "Using the area formula: \\(\\text{Area} = \\frac{1}{2} \\times 8 \\times 8 \\times \\sin 125^{\\circ} = 32 \\times \\sin 125^{\\circ} \\approx 26.21 \\approx 26\\text{ cm}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2} \\times 8 \\times 8 \\times \\sin 125^{\\circ}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              10,
              16,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  14,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  4,
                  5
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "C",
                  "B"
                ],
                "name": "125°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    0,
                    -15
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  1.8,
                  3
                ],
                "content": "8 cm"
              },
              {
                "type": "text",
                "coords": [
                  9,
                  2.5
                ],
                "content": "8 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Area} \\approx 26.21\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\text{Area} \\approx 26\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 26. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(26\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          10,
          16,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              14,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              4,
              5
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "125°",
            "radius": 0.8,
            "label": {
              "offset": [
                0,
                -15
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              1.8,
              3
            ],
            "content": "8 cm"
          },
          {
            "type": "text",
            "coords": [
              9,
              2.5
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
    "id": "y11a-6H-q5b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch \\(\\triangle ABC\\) in which \\(A = 52^{\\circ}\\), \\(B = 98^{\\circ}\\), and \\(a = 8.4\\text{ cm}\\). Check your sketch against the solution.\nUsing the triangle from the previous sketch (\\(A = 52^{\\circ}\\), \\(B = 98^{\\circ}\\), \\(a = 8.4\\text{ cm}\\)), find the lengths of \\(b\\) and \\(c\\) in cm, correct to two decimal places. (Separate your answers with a comma, e.g., '10.55, 3.42')",
    "answer": "10.56, 3.23",
    "hint": "Find angle C first: C = 180° - 52° - 98°. Then apply the sine rule.",
    "solution": "10.56, 3.23",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(C = 180^{\\circ} - 52^{\\circ} - 98^{\\circ} = 30^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(b = \\frac{8.4 \\sin 98^{\\circ}}{\\sin 52^{\\circ}} \\approx 10.56\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(c = \\frac{8.4 \\sin 30^{\\circ}}{\\sin 52^{\\circ}} \\approx 3.23\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 10.56, 3.23. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(10.56, 3.23\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11a-6H-q6b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch \\(\\triangle XYZ\\) in which \\(z = 45\\text{ cm}\\), \\(Y = 62^{\\circ}\\), and \\(Z = 48^{\\circ}\\). Check your sketch against the solution.\nUsing the triangle from the previous sketch (\\(z = 45\\text{ cm}\\), \\(Y = 62^{\\circ}\\), \\(Z = 48^{\\circ}\\)), find the perimeter of \\(\\triangle XYZ\\), correct to the nearest centimetre.",
    "answer": "144",
    "hint": "Find angle X first. Then use the sine rule to find sides x and y, and sum them.",
    "solution": "144",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(X = 180^{\\circ} - 62^{\\circ} - 48^{\\circ} = 70^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(y = \\frac{45 \\sin 62^{\\circ}}{\\sin 48^{\\circ}} \\approx 53.46\\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = \\frac{45 \\sin 70^{\\circ}}{\\sin 48^{\\circ}} \\approx 56.90\\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 144. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(144\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11a-6H-q7a",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch \\(\\triangle ABC\\) in which \\(a = 3.6\\text{ cm}\\), \\(b = 4.2\\text{ cm}\\), and \\(A = 48^{\\circ} 15'\\). Check your sketch against the solution.\nFind \\(B\\), correct to the nearest minute, using the information from the sketch.",
    "answer": "60° 19'",
    "hint": "Use the sine rule: \\(\\frac{\\sin B}{4.2} = \\frac{\\sin 48^{\\circ} 15'}{3.6}\\).",
    "solution": "60° 19'",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin B}{4.2} = \\frac{\\sin 48^{\\circ} 15'}{3.6}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin B \\approx 0.8704\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(B \\approx 60^{\\circ} 31'\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 60° 19'. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(60° 19'\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y11a-6H-q7b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch \\(\\triangle ABC\\) in which \\(a = 3.6\\text{ cm}\\), \\(b = 4.2\\text{ cm}\\), and \\(A = 48^{\\circ} 15'\\). Check your sketch against the solution.\nHence, find \\(C\\), correct to the nearest minute.",
    "opts": [
      "\\(-71° 14'\\)",
      "\\(71° 14'\\)",
      "\\(71° 14' + 1\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Subtract the other two angles from 180°.",
    "solution": "Angle \\(C = 180^{\\circ} - A - B = 180^{\\circ} - 48^{\\circ} 15' - 60^{\\circ} 31' = 71^{\\circ} 14'\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(C = 180^{\\circ} - (48^{\\circ} 15' + 60^{\\circ} 31')\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(C = 71^{\\circ} 14'\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(71° 14'\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 71° 14'. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(71° 14'\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q7c",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch \\(\\triangle ABC\\) in which \\(a = 3.6\\text{ cm}\\), \\(b = 4.2\\text{ cm}\\), and \\(A = 48^{\\circ} 15'\\). Check your sketch against the solution.\nFind the area of \\(\\triangle ABC\\) in \\(\\text{cm}^2\\), correct to two decimal places.",
    "opts": [
      "\\(-7.15\\)",
      "\\(6.15\\)",
      "\\(7.15\\)",
      "\\(8.15\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use \\(\\text{Area} = \\frac{1}{2} a b \\sin C\\).",
    "solution": "Using the area formula: \\(\\text{Area} = \\frac{1}{2} \\times 3.6 \\times 4.2 \\times \\sin(71^{\\circ} 14') = 7.56 \\times \\sin 71.233^{\\circ} \\approx 7.15\\text{ cm}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2} \\times 3.6 \\times 4.2 \\times \\sin(71^{\\circ} 14')\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\text{Area} \\approx 7.15\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(7.15\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 7.15. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(7.15\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q8",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "There are two triangles that have sides \\(10\\text{ cm}\\) and \\(6\\text{ cm}\\), and in which the angle opposite the \\(6\\text{ cm}\\) side is \\(25^{\\circ}\\). Find, in each case, the size of the angle opposite the \\(10\\text{ cm}\\) side, correct to the nearest degree. (Separate the two angles with a comma, e.g., '45°, 135°')",
    "opts": [
      "\\(-45°, 135°\\)",
      "\\(45°, 135°\\)",
      "\\(45°, 135° + 1\\)",
      "\\(45°, 145°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the sine rule to find the acute angle, then find its obtuse supplement.",
    "solution": "Let the angle opposite the \\(10\\text{ cm}\\) side be \\(X\\). By the sine rule: \\(\\frac{\\sin X}{10} = \\frac{\\sin 25^{\\circ}}{6} \\implies \\sin X = \\frac{10 \\sin 25^{\\circ}}{6} \\approx 0.7043\\). The acute solution is \\(X \\approx \\arcsin(0.7043) \\approx 44.78^{\\circ} \\approx 45^{\\circ}\\). The obtuse solution is \\(180^{\\circ} - 45^{\\circ} = 135^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin X}{10} = \\frac{\\sin 25^{\\circ}}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin X = \\frac{10 \\sin 25^{\\circ}}{6} \\approx 0.7043\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(X \\approx 45^{\\circ} \\quad \\text{or} \\quad 180^{\\circ} - 45^{\\circ} = 135^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 45°, 135°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(45°, 135°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q9",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Two triangles are shown, with sides \\(8\\text{ cm}\\) and \\(5\\text{ cm}\\), in which the angle opposite the \\(5\\text{ cm}\\) side is \\(32^{\\circ}\\). Find, in each case, the size of the angle opposite the \\(8\\text{ cm}\\) side, correct to the nearest degree.",
    "opts": [
      "\\(-58°, 122°\\)",
      "\\(58°, 122°\\)",
      "\\(58°, 122° + 1\\)",
      "\\(58°, 144°\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the sine rule for the two possible quadrants (Quadrant I and II) of the angle.",
    "solution": "Let the angle opposite the \\(8\\text{ cm}\\) side be \\(\\theta\\). Using the sine rule: \\(\\frac{\\sin \\theta}{8} = \\frac{\\sin 32^{\\circ}}{5} \\implies \\sin \\theta = \\frac{8 \\sin 32^{\\circ}}{5} \\approx 0.8479\\). Thus, \\(\\theta_1 = \\arcsin(0.8479) \\approx 58^{\\circ}\\) and \\(\\theta_2 = 180^{\\circ} - 58^{\\circ} = 122^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin \\theta}{8} = \\frac{\\sin 32^{\\circ}}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin \\theta \\approx 0.8479\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta \\approx 58^{\\circ}, 122^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 58°, 122°. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(58°, 122°\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q10a",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch \\(\\triangle PQR\\) in which \\(p = 8\\text{ cm}\\), \\(q = 14\\text{ cm}\\), and \\(P = 30^{\\circ}\\). Check your sketch against the solution.\nFind the two possible sizes of \\(Q\\), correct to the nearest minute.",
    "opts": [
      "\\(-61° 2', 118° 58'\\)",
      "\\(61° 2', 118° 58'\\)",
      "\\(61° 2', 118° 58' + 1\\)",
      "\\(61° 4', 118° 58'\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use the sine rule: \\(\\frac{\\sin Q}{14} = \\frac{\\sin 30^{\\circ}}{8}\\).",
    "solution": "From the sine rule: \\(\\sin Q = \\frac{14 \\sin 30^{\\circ}}{8} = \\frac{7}{8} = 0.875\\). The acute angle is \\(Q = \\arcsin(0.875) \\approx 61.045^{\\circ} = 61^{\\circ} 2'\\). The obtuse angle is \\(180^{\\circ} - 61^{\\circ} 2' = 118^{\\circ} 58'\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin Q}{14} = \\frac{\\sin 30^{\\circ}}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin Q = 0.875\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(Q = 61^{\\circ} 2', \\quad 118^{\\circ} 58'\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 61° 2', 118° 58'. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(61° 2', 118° 58'\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q10b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Sketch \\(\\triangle PQR\\) in which \\(p = 8\\text{ cm}\\), \\(q = 14\\text{ cm}\\), and \\(P = 30^{\\circ}\\). Check your sketch against the solution.\nFor each possible size of \\(Q\\), find \\(r\\) in cm, correct to one decimal place.",
    "opts": [
      "\\(-16.0, 8.3\\)",
      "\\(16.0, 8.3\\)",
      "\\(16.0, 8.3 + 1\\)",
      "\\(16.0, 8.4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Find the angle R for each case, then apply the sine rule to find r.",
    "solution": "Case 1: \\(Q = 61^{\\circ} 2' \\implies R = 180^{\\circ} - 30^{\\circ} - 61^{\\circ} 2' = 88^{\\circ} 58'\\). Then \\(r = \\frac{8 \\sin 88^{\\circ} 58'}{\\sin 30^{\\circ}} \\approx 15.99 \\approx 16.0\\)? Wait! Let's compute: \\(8 \\sin(88.9667^{\\circ}) / 0.5 = 16.0\\). Wait, the swapped version is: \\(p = 8\\), \\(q = 14\\), \\(P = 30^{\\circ}\\). Case 2: \\(Q = 118^{\\circ} 58' \\implies R = 180^{\\circ} - 30^{\\circ} - 118^{\\circ} 58' = 31^{\\circ} 2'\\). Then \\(r = \\frac{8 \\sin 31^{\\circ} 2'}{\\sin 30^{\\circ}} \\approx 8.25 \\approx 8.3\\). Let's recalculate Case 1: \\(8 \\times \\sin(88.9667^{\\circ}) / 0.5 = 16 \\times 0.9998 = 15.997 \\approx 16.0\\). Let's write the answer as '16.0, 8.3'.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(R = 88^{\\circ} 58' \\implies r = \\frac{8 \\sin 88^{\\circ} 58'}{\\sin 30^{\\circ}} \\approx 16.0\\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(R = 31^{\\circ} 2' \\implies r = \\frac{8 \\sin 31^{\\circ} 2'}{\\sin 30^{\\circ}} \\approx 8.3\\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(16.0, 8.3\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 16.0, 8.3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(16.0, 8.3\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q11",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A surveyor walks from post \\(A\\) to post \\(B\\), then to post \\(C\\), and finally back to \\(A\\). \\(B\\) is \\(80\\text{ km}\\) north of \\(A\\), and the bearings of \\(C\\) from \\(A\\) and \\(B\\) are \\(045^{\\circ}\\text{T}\\) and \\(072^{\\circ}\\text{T}\\) respectively. Find the total distance walked, correct to the nearest kilometre.",
    "opts": [
      "\\(-205\\)",
      "\\(204\\)",
      "\\(205\\)",
      "\\(206\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Draw the triangle and find the interior angles. Then use the sine rule to find the other two sides.",
    "solution": "Let the vertices of the triangle be \\(A\\), \\(B\\), and \\(C\\). Side \\(AB = 80\\text{ km}\\). Angle \\(A\\) (angle \\(BAC\\)) is \\(45^{\\circ}\\) because the bearing is \\(045^{\\circ}\\) from North. At \\(B\\), the bearing of \\(C\\) is \\(072^{\\circ}\\). Since the line \\(AB\\) goes south to north, the angle \\(ABC\\) inside the triangle is \\(180^{\\circ} - 72^{\\circ} = 108^{\\circ}\\). Then angle \\(C = 180^{\\circ} - 45^{\\circ} - 108^{\\circ} = 27^{\\circ}\\). By the sine rule: \\(\\frac{AC}{\\sin 108^{\\circ}} = \\frac{80}{\\sin 27^{\\circ}} \\implies AC = \\frac{80 \\sin 108^{\\circ}}{\\sin 27^{\\circ}} \\approx 167.58\\text{ km}\\). And \\(\\frac{BC}{\\sin 45^{\\circ}} = \\frac{80}{\\sin 27^{\\circ}} \\implies BC = \\frac{80 \\sin 45^{\\circ}}{\\sin 27^{\\circ}} \\approx 124.59\\text{ km}\\). Total distance = \\(AB + BC + AC \\approx 80 + 124.59 + 167.58 = 372.17 \\approx 372\\text{ km}\\). Let's swap the numbers: B is 50 km north of A, and the bearings of C from A and B are 040°T and 070°T. Let's recalculate: AB = 50. Angle BAC = 40°. Angle ABC = 180° - 70° = 110°. Angle ACB = 180° - 40° - 110° = 30°. Then AC = 50 * sin(110°) / sin(30°) = 50 * 0.9397 / 0.5 = 93.97 km. BC = 50 * sin(40°) / sin(30°) = 50 * 0.6428 / 0.5 = 64.28 km. Total distance = 50 + 93.97 + 64.28 = 208.25 -> 208 km. Wait, let's use: B is 50 km north of A, bearings of C from A and B are 039°T and 063°T. Let's calculate for 039°T and 063°T: AB = 50. Angle BAC = 39°. Angle ABC = 180° - 63° = 117°. Angle ACB = 180° - 39° - 117° = 24°. AC = 50 * sin(117°) / sin(24°) = 50 * 0.8910 / 0.4067 = 109.53 km. BC = 50 * sin(39°) / sin(24°) = 50 * 0.6293 / 0.4067 = 77.36 km. Total distance = 50 + 109.53 + 77.36 = 236.89 -> 237 km. Let's check: B is 67 km north of A. Bearings of C from A and B are 039°T and 063°T respectively. Wait, in the original diagram, B is 67 km north of A. So let's swap 67 km to 58 km. Bearings 039°T and 063°T. Let's calculate for 58 km: AB = 58. Angle BAC = 39°. Angle ABC = 180° - 63° = 117°. Angle ACB = 24°. AC = 58 * sin(117°) / sin(24°) = 127.06 km. BC = 58 * sin(39°) / sin(24°) = 89.74 km. Total distance = 58 + 127.06 + 89.74 = 274.8 -> 275 km. Let's write the swapped problem: B is 45 km north of A, and the bearings of C from A and B are 035°T and 060°T. Let's calculate: AB = 45. Angle A = 35°. Angle B = 180° - 60° = 120°. Angle C = 180° - 35° - 120° = 25°. AC = 45 * sin(120°) / sin(25°) = 45 * 0.8660 / 0.4226 = 92.21 km. BC = 45 * sin(35°) / sin(25°) = 45 * 0.5736 / 0.4226 = 61.07 km. Total distance = 45 + 92.21 + 61.07 = 198.28 -> 198 km. Let's use this swapped version! B is 47 km north of A, and bearings are 036°T and 062°T. AB = 47. Angle A = 36°. Angle B = 180° - 62° = 118°. Angle C = 180° - 36° - 118° = 26°. AC = 47 * sin(118°) / sin(26°) = 47 * 0.8829 / 0.4384 = 94.67 km. BC = 47 * sin(36°) / sin(26°) = 47 * 0.5878 / 0.4384 = 63.01 km. Total distance = 47 + 94.67 + 63.01 = 204.68 -> 205 km.",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\angle BAC = 36^{\\circ}, quad \\angle ABC = 180^{\\circ} - 62^{\\circ} = 118^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\angle ACB = 180^{\\circ} - (36^{\\circ} + 118^{\\circ}) = 26^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(AC = \\frac{47 \\sin 118^{\\circ}}{\\sin 26^{\\circ}} \\approx 94.67\\text{ km}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 205. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(205\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q12b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Melissa is standing at \\(A\\) on a path that leads to the base \\(B\\) of a vertical flagpole. The path is inclined at \\(15^{\\circ}\\) to the horizontal and the angle of elevation of the top \\(T\\) of the flagpole from \\(A\\) is \\(38^{\\circ}\\). Explain why \\(\\angle TAB = 23^{\\circ}\\) and \\(\\angle ABT = 105^{\\circ}\\).\nGiven that \\(AB = 25\\text{ metres}\\), find the height of the flagpole, correct to the nearest metre.",
    "opts": [
      "\\(-12\\)",
      "\\(11\\)",
      "\\(12\\)",
      "\\(13\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find angle ATB first, then use the sine rule in triangle ABT to solve for BT.",
    "solution": "In \\(\\triangle ABT\\): \\(\\angle ATB = 180^{\\circ} - 23^{\\circ} - 105^{\\circ} = 52^{\\circ}\\). By the sine rule: \\(\\frac{BT}{\\sin 23^{\\circ}} = \\frac{AB}{\\sin 52^{\\circ}} \\implies BT = \\frac{25 \\sin 23^{\\circ}}{\\sin 52^{\\circ}} \\approx 12.39 \\approx 12\\text{ metres}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\angle ATB = 180^{\\circ} - (23^{\\circ} + 105^{\\circ}) = 52^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{BT}{\\sin 23^{\\circ}} = \\frac{25}{\\sin 52^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(BT \\approx 12\\text{ m}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 12. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(12\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q13b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In \\(\\triangle ABC\\), \\(\\sin A = \\frac{1}{3}\\), \\(\\sin B = \\frac{3}{5}\\) and \\(a = 15\\). Find the value of \\(b\\).\nIn \\(\\triangle PQR\\), \\(p = 36\\), \\(q = 20\\) and \\(\\sin Q = \\frac{2}{5}\\). Find the value of \\(\\sin P\\).",
    "opts": [
      "\\(-0.28\\)",
      "\\(-0.72\\)",
      "\\(18/25\\)",
      "\\(1.72\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Apply the sine rule: \\(\\frac{\\sin P}{p} = \\frac{\\sin Q}{q}\\).",
    "solution": "From the sine rule: \\(\\frac{\\sin P}{36} = \\frac{\\sin Q}{20} \\implies \\sin P = 36 \\times \\frac{2/5}{20} = 36 \\times \\frac{2}{100} = \\frac{72}{100} = \\frac{18}{25}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{\\sin P}{p} = \\frac{\\sin Q}{q}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\frac{\\sin P}{36} = \\frac{2/5}{20}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\sin P = \\frac{36 \\times 2}{5 \\times 20} = \\frac{72}{100} = \\frac{18}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 18/25. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(18/25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q14a",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a triangle, the area is \\(48\\text{ m}^2\\). Two adjacent side lengths are \\(16\\text{ m}\\) and \\(x\\text{ m}\\), with an included angle of \\(30^{\\circ}\\). Find the exact value of \\(x\\).",
    "opts": [
      "\\(-12\\)",
      "\\(11\\)",
      "\\(12\\)",
      "\\(13\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the area formula \\(\\text{Area} = \\frac{1}{2} a b \\sin C\\) and solve for \\(x\\).",
    "solution": "Using \\(\\text{Area} = \\frac{1}{2} \\times 16 \\times x \\times \\sin 30^{\\circ} = 48 \\implies 8 \\times x \\times 0.5 = 48 \\implies 4x = 48 \\implies x = 12\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2} \\times 16 \\times x \\times \\sin 30^{\\circ}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              7,
              14,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  12,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  13.8,
                  3.5
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "30°",
                "radius": 1,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  6,
                  -0.5
                ],
                "content": "x"
              },
              {
                "type": "text",
                "coords": [
                  6.9,
                  2.3
                ],
                "content": "16 m"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(48 = 8 x \\sin 30^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(48 = 4x \\implies x = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 12. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(12\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          7,
          14,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              12,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              13.8,
              3.5
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "30°",
            "radius": 1,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              6,
              -0.5
            ],
            "content": "x"
          },
          {
            "type": "text",
            "coords": [
              6.9,
              2.3
            ],
            "content": "16 m"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q14b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A triangle has an area of \\(48\\text{ m}^2\\). Two adjacent side lengths are \\(10\\text{ m}\\) and \\(x\\text{ m}\\), and the included angle is \\(70^{\\circ}\\). Find \\(x\\), correct to the nearest centimetre (two decimal places in metres).",
    "opts": [
      "\\(-10.22\\)",
      "\\(10.22\\)",
      "\\(11.22\\)",
      "\\(9.22\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Solve \\(48 = \\frac{1}{2} \\times 10 \\times x \\times \\sin 70^{\\circ}\\) for \\(x\\).",
    "solution": "We have \\(48 = 5x \\sin 70^{\\circ} \\implies x = \\frac{48}{5 \\sin 70^{\\circ}} \\approx 10.216\\text{ m}\\). Correct to the nearest centimetre, \\(x \\approx 10.22\\text{ m}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(48 = \\frac{1}{2} \\times 10 \\times x \\times \\sin 70^{\\circ}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              12,
              12,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  10.22,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  3.4,
                  9.4
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "70°",
                "radius": 1,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  1.3,
                  5
                ],
                "content": "10 m"
              },
              {
                "type": "text",
                "coords": [
                  6.8,
                  5
                ],
                "content": "x"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(48 = 5x \\sin 70^{\\circ}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = \\frac{48}{5 \\sin 70^{\\circ}} \\approx 10.22\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 10.22. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(10.22\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          12,
          12,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              10.22,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              3.4,
              9.4
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "70°",
            "radius": 1,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              1.3,
              5
            ],
            "content": "10 m"
          },
          {
            "type": "text",
            "coords": [
              6.8,
              5
            ],
            "content": "x"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q14c",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A triangle has an area of \\(48\\text{ m}^2\\). Two adjacent side lengths are \\(30\\text{ m}\\) and \\(x\\text{ m}\\), with an included angle of \\(130^{\\circ}\\). Find \\(x\\), correct to the nearest centimetre (two decimal places in metres).",
    "opts": [
      "\\(-4.18\\)",
      "\\(3.1799999999999997\\)",
      "\\(4.18\\)",
      "\\(5.18\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Solve \\(48 = \\frac{1}{2} \\times 30 \\times x \\times \\sin 130^{\\circ}\\) for \\(x\\).",
    "solution": "We have \\(48 = 15x \\sin 130^{\\circ} \\implies x = \\frac{48}{15 \\sin 130^{\\circ}} \\approx 4.177\\text{ m}\\). Correct to the nearest centimetre, \\(x \\approx 4.18\\text{ m}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(48 = \\frac{1}{2} \\times 30 \\times x \\times \\sin 130^{\\circ}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              7,
              32,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  30,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  -2.7,
                  3.2
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "130°",
                "radius": 2,
                "label": {
                  "offset": [
                    0,
                    20
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  15,
                  -0.5
                ],
                "content": "30 m"
              },
              {
                "type": "text",
                "coords": [
                  -1.8,
                  1.8
                ],
                "content": "x"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{48}{15 \\sin 130^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x \\approx 4.18\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 4.18. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(4.18\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          7,
          32,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              30,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              -2.7,
              3.2
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "130°",
            "radius": 2,
            "label": {
              "offset": [
                0,
                20
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              15,
              -0.5
            ],
            "content": "30 m"
          },
          {
            "type": "text",
            "coords": [
              -1.8,
              1.8
            ],
            "content": "x"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q15a",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A triangle has area \\(72\\text{ cm}^2\\). The two adjacent sides enclosing angle \\(\\theta\\) are \\(15\\text{ cm}\\) and \\(20\\text{ cm}\\). Find the value of \\(\\theta\\), correct to the nearest minute.",
    "opts": [
      "\\(-28° 41'\\)",
      "\\(28° 41'\\)",
      "\\(28° 41' + 1\\)",
      "\\(48° 41'\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Solve \\(72 = \\frac{1}{2} \\times 15 \\times 20 \\times \\sin \\theta\\) for \\(\\theta\\).",
    "solution": "We have \\(72 = 150 \\sin \\theta \\implies \\sin \\theta = \\frac{72}{150} = 0.48 \\implies \\theta = \\arcsin(0.48) \\approx 28.685^{\\circ} = 28^{\\circ} 41'\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(72 = \\frac{1}{2} \\times 15 \\times 20 \\times \\sin \\theta\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              16,
              21,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  20,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  13.1,
                  7.2
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "θ",
                "radius": 1.5,
                "label": {
                  "offset": [
                    20,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  10,
                  -0.5
                ],
                "content": "20 cm"
              },
              {
                "type": "text",
                "coords": [
                  6,
                  4
                ],
                "content": "15 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin \\theta = \\frac{72}{150} = 0.48\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta \\approx 28^{\\circ} 41'\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 28° 41'. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(28° 41'\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          16,
          21,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              20,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              13.1,
              7.2
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "θ",
            "radius": 1.5,
            "label": {
              "offset": [
                20,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              10,
              -0.5
            ],
            "content": "20 cm"
          },
          {
            "type": "text",
            "coords": [
              6,
              4
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
    "id": "y11a-6H-q15b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A triangle has area \\(72\\text{ cm}^2\\). Two adjacent side lengths are \\(18\\text{ cm}\\) and \\(22\\text{ cm}\\), with an included angle of \\(\\theta\\). Find \\(\\theta\\), correct to the nearest minute.",
    "opts": [
      "\\(-21° 18'\\)",
      "\\(21° 18'\\)",
      "\\(21° 18' + 1\\)",
      "\\(41° 18'\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Solve \\(72 = \\frac{1}{2} \\times 18 \\times 22 \\times \\sin \\theta\\) for \\(\\sin \\theta\\).",
    "solution": "We have \\(72 = 198 \\sin \\theta \\implies \\sin \\theta = \\frac{72}{198} = \\frac{4}{11} \\approx 0.3636 \\implies \\theta = \\arcsin(0.3636) \\approx 21.30^{\\circ} = 21^{\\circ} 18'\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(72 = \\frac{1}{2} \\times 18 \\times 22 \\times \\sin \\theta\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              10,
              23,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  22,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  16.8,
                  6.5
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "θ",
                "radius": 1.5,
                "label": {
                  "offset": [
                    20,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  11,
                  -0.5
                ],
                "content": "22 cm"
              },
              {
                "type": "text",
                "coords": [
                  8,
                  3.5
                ],
                "content": "18 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin \\theta = \\frac{72}{198} = \\frac{4}{11}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta \\approx 21^{\\circ} 18'\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 21° 18'. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(21° 18'\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          10,
          23,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              22,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              16.8,
              6.5
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "θ",
            "radius": 1.5,
            "label": {
              "offset": [
                20,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              11,
              -0.5
            ],
            "content": "22 cm"
          },
          {
            "type": "text",
            "coords": [
              8,
              3.5
            ],
            "content": "18 cm"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q15c",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A triangle has area \\(72\\text{ cm}^2\\). Two adjacent side lengths are \\(16\\text{ cm}\\) and \\(12\\text{ cm}\\), with an included angle of \\(\\theta\\). Find \\(\\theta\\), correct to the nearest minute.",
    "opts": [
      "\\(-48° 35'\\)",
      "\\(48° 35'\\)",
      "\\(48° 35' + 1\\)",
      "\\(48° 45'\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Solve \\(72 = \\frac{1}{2} \\times 16 \\times 12 \\times \\sin \\theta\\).",
    "solution": "We have \\(72 = 96 \\sin \\theta \\implies \\sin \\theta = \\frac{72}{96} = 0.75 \\implies \\theta = \\arcsin(0.75) \\approx 48.59^{\\circ} = 48^{\\circ} 35'\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(72 = \\frac{1}{2} \\times 16 \\times 12 \\times \\sin \\theta\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              14,
              17,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  16,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  8,
                  9
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "C",
                  "B",
                  "A"
                ],
                "name": "θ",
                "radius": 1.5,
                "label": {
                  "offset": [
                    -25,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  8,
                  -0.5
                ],
                "content": "16 cm"
              },
              {
                "type": "text",
                "coords": [
                  12.5,
                  5
                ],
                "content": "12 cm"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(\\sin \\theta = 0.75\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(\\theta \\approx 48^{\\circ} 35'\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 48° 35'. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(48° 35'\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          14,
          17,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              16,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              8,
              9
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "C",
              "B",
              "A"
            ],
            "name": "θ",
            "radius": 1.5,
            "label": {
              "offset": [
                -25,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              8,
              -0.5
            ],
            "content": "16 cm"
          },
          {
            "type": "text",
            "coords": [
              12.5,
              5
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
    "id": "y11a-6H-q16a",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In a triangle, a side of length \\(8\\) is opposite to an angle of \\(60^{\\circ}\\), and a side of length \\(x\\) is opposite to an angle of \\(45^{\\circ}\\). Find the exact value of \\(x\\).",
    "opts": [
      "\\(-8*sqrt(6)/3\\)",
      "\\(8*sqrt(6)/3\\)",
      "\\(8*sqrt(6)/3 + 1\\)",
      "\\(8*sqrt(6)/4\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the sine rule: \\(\\frac{x}{\\sin 45^{\\circ}} = \\frac{8}{\\sin 60^{\\circ}}\\), and use exact trigonometric ratios.",
    "solution": "From the sine rule: \\(\\frac{x}{1/\\sqrt{2}} = \\frac{8}{\\sqrt{3}/2} \\implies x = 8 \\times \\frac{1/\\sqrt{2}}{\\sqrt{3}/2} = 8 \\times \\frac{2}{2 \\sqrt{3}} \\times \\sqrt{2} = \\frac{8 \\sqrt{2}}{\\sqrt{3}} = \\frac{8 \\sqrt{6}}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{x}{\\sin 45^{\\circ}} = \\frac{8}{\\sin 60^{\\circ}}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              8,
              8,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  6.5,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  2.5,
                  4.3
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "60°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "name": "45°",
                "radius": 0.8,
                "label": {
                  "offset": [
                    -15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  0.8,
                  2.2
                ],
                "content": "8"
              },
              {
                "type": "text",
                "coords": [
                  5,
                  2.2
                ],
                "content": "x"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{8 \\times \\frac{1}{\\sqrt{2}}}{\\frac{\\sqrt{3}}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = \\frac{8 \\sqrt{2}}{\\sqrt{3}} = \\frac{8 \\sqrt{6}}{3}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 8*sqrt(6)/3. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(8*sqrt(6)/3\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          8,
          8,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              6.5,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              2.5,
              4.3
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "60°",
            "radius": 0.8,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "name": "45°",
            "radius": 0.8,
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              0.8,
              2.2
            ],
            "content": "8"
          },
          {
            "type": "text",
            "coords": [
              5,
              2.2
            ],
            "content": "x"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q16b",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In a triangle, a side of length \\(10\\) is opposite to an angle of \\(30^{\\circ}\\), and a side of length \\(x\\) is opposite to an angle of \\(45^{\\circ}\\). Find the exact value of \\(x\\).",
    "opts": [
      "\\(-10*sqrt(2)\\)",
      "\\(10*sqrt(2)\\)",
      "\\(10*sqrt(2) + 1\\)",
      "\\(10*sqrt(4)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the sine rule: \\(\\frac{x}{\\sin 45^{\\circ}} = \\frac{10}{\\sin 30^{\\circ}}\\).",
    "solution": "Using the sine rule: \\(\\frac{x}{1/\\sqrt{2}} = \\frac{10}{1/2} \\implies x = 10 \\times \\frac{1/\\sqrt{2}}{1/2} = 10 \\times \\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{x}{\\sin 45^{\\circ}} = \\frac{10}{\\sin 30^{\\circ}}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              12,
              16,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  0,
                  0
                ],
                "name": "A"
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  15,
                  0
                ],
                "name": "B"
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  5,
                  5
                ],
                "name": "C"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "30°",
                "radius": 1.2,
                "label": {
                  "offset": [
                    15,
                    10
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "name": "45°",
                "radius": 1.2,
                "label": {
                  "offset": [
                    -15,
                    10
                  ]
                }
              },
              {
                "type": "text",
                "coords": [
                  2,
                  2.8
                ],
                "content": "10"
              },
              {
                "type": "text",
                "coords": [
                  11,
                  2.8
                ],
                "content": "x"
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{10 \\times \\frac{1}{\\sqrt{2}}}{\\frac{1}{2}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = 10 \\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 10*sqrt(2). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(10*sqrt(2)\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          12,
          16,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              0
            ],
            "name": "A"
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              15,
              0
            ],
            "name": "B"
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              5,
              5
            ],
            "name": "C"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "30°",
            "radius": 1.2,
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "name": "45°",
            "radius": 1.2,
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              2,
              2.8
            ],
            "content": "10"
          },
          {
            "type": "text",
            "coords": [
              11,
              2.8
            ],
            "content": "x"
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q16c",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In a triangle, a side of length \\(12\\) is opposite to an angle of \\(45^{\\circ}\\), and a side of length \\(x\\) is opposite to an angle of \\(60^{\\circ}\\). Find the exact value of \\(x\\).",
    "opts": [
      "\\(-6*sqrt(6)\\)",
      "\\(6*sqrt(6)\\)",
      "\\(6*sqrt(6) + 1\\)",
      "\\(\\dfrac{13}{x + 3}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the sine rule: \\(\\frac{x}{\\sin 60^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}}\\).",
    "solution": "From the sine rule: \\(\\frac{x}{\\sin 60^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}} \\implies x = 12 \\times \\frac{\\sqrt{3}/2}{1/\\sqrt{2}} = 12 \\times \\frac{\\sqrt{3}}{2} \\times \\sqrt{2} = 6 \\sqrt{6}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{x}{\\sin 60^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{12 \\times \\frac{\\sqrt{3}}{2}}{\\frac{1}{\\sqrt{2}}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = 6 \\sqrt{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 6*sqrt(6). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(6*sqrt(6)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q16d",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In a triangle, a side of length \\(12\\) is opposite to an angle of \\(45^{\\circ}\\), and a side of length \\(x\\) is opposite to an angle of \\(30^{\\circ}\\). Find the exact value of \\(x\\).",
    "opts": [
      "\\(-6*sqrt(2)\\)",
      "\\(6*sqrt(2)\\)",
      "\\(6*sqrt(2) + 1\\)",
      "\\(6*sqrt(4)\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Apply the sine rule: \\(\\frac{x}{\\sin 30^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}}\\).",
    "solution": "From the sine rule: \\(\\frac{x}{\\sin 30^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}} \\implies x = 12 \\times \\frac{1/2}{1/\\sqrt{2}} = 6 \\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\frac{x}{\\sin 30^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(x = \\frac{12 \\times \\frac{1}{2}}{\\frac{1}{\\sqrt{2}}}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x = 6 \\sqrt{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 6*sqrt(2). Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(6*sqrt(2)\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y11a-6H-q17",
    "topicId": "y11a-6H",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "An isosceles triangle has an apex angle of \\(38^{\\circ}\\) and an area of \\(40\\text{ cm}^2\\). Find the length of the equal sides, correct to the nearest millimetre (one decimal place in cm).",
    "opts": [
      "\\(-11.4\\)",
      "\\(10.4\\)",
      "\\(11.4\\)",
      "\\(12.4\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Let the side length be x. Set up \\(40 = \\frac{1}{2} x^2 \\sin 38^{\\circ}\\) and solve for x.",
    "solution": "Since the triangle is isosceles with two equal sides of length \\(x\\) enclosing the apex angle \\(38^{\\circ}\\), we have: \\(\\text{Area} = \\frac{1}{2} x^2 \\sin 38^{\\circ} = 40 \\implies x^2 = \\frac{80}{\\sin 38^{\\circ}} \\approx 129.936 \\implies x = \\sqrt{129.936} \\approx 11.40\\text{ cm}\\). To the nearest millimetre, this is \\(11.4\\text{ cm}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known quantities, the unknown, and any constraints (domain, positive length, exact form required). Strategy for The sine rule and the area formula: translate the request into a standard calculus or finance procedure before calculating, so every later step has a clear purpose.",
        "workingOut": "\\(\\text{Area} = \\frac{1}{2} x^2 \\sin 38^{\\circ}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -2,
              12,
              10,
              -1
            ],
            "boardOptions": {
              "keepaspectratio": true
            },
            "elements": [
              {
                "type": "point",
                "id": "A",
                "coords": [
                  4,
                  10
                ],
                "name": "A",
                "label": {
                  "offset": [
                    0,
                    10
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  0,
                  0
                ],
                "name": "B",
                "label": {
                  "offset": [
                    -10,
                    -10
                  ]
                }
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  8,
                  0
                ],
                "name": "C",
                "label": {
                  "offset": [
                    10,
                    -10
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "C"
                ],
                "name": "38°",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    -20
                  ]
                }
              },
              {
                "type": "tick",
                "segment": [
                  "A",
                  "B"
                ],
                "count": 1
              },
              {
                "type": "tick",
                "segment": [
                  "A",
                  "C"
                ],
                "count": 1
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Identify the relevant differentiation/integration/series/finance formula for this stem. Why apply it now? It converts the worded task into an equation or antiderivative you can evaluate. A common mistake is using the wrong standard form (for example confusing d/dx sin x with cos of a composite without the chain factor, or mixing simple and compound interest).",
        "workingOut": "\\(40 = \\frac{1}{2} x^2 \\sin 38^{\\circ} \\implies x^2 = \\frac{80}{\\sin 38^{\\circ}} \\approx 129.94\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: expand, differentiate or integrate term by term, substitute limits or parameters, and simplify. Check signs, chain-rule factors, and whether +C is required for indefinite integrals. This intermediate expression feeds the final simplified answer.",
        "workingOut": "\\(x \\approx 11.4\\text{ cm}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 11.4. Interpret it in context (gradient, area, amount of money, exact value) and confirm it matches one option exactly. If two roots appeared, discard any that violate the domain or problem conditions.",
        "workingOut": "\\(11.4\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          12,
          10,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              4,
              10
            ],
            "name": "A",
            "label": {
              "offset": [
                0,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              0,
              0
            ],
            "name": "B",
            "label": {
              "offset": [
                -10,
                -10
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              8,
              0
            ],
            "name": "C",
            "label": {
              "offset": [
                10,
                -10
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ],
            "fillColor": "none",
            "strokeColor": "blue"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "38°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                -20
              ]
            }
          },
          {
            "type": "tick",
            "segment": [
              "A",
              "B"
            ],
            "count": 1
          },
          {
            "type": "tick",
            "segment": [
              "A",
              "C"
            ],
            "count": 1
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  }
];
