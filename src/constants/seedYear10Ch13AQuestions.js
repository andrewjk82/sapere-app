export const Y10_CH13A_QUESTIONS = [
  {
    "id": "y10-13a-q2a",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma (e.g. 30, 40).",
    "opts": [
      "\\(-9075\\)",
      "\\(9074\\)",
      "\\(90, 75\\)",
      "\\(9076\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "Since \\(AB\\) is a diameter, the angle in a semicircle is a right angle, so \\(\\alpha = 90^\\circ\\).\nIn \\(\\triangle PAB\\), the sum of angles is \\(180^\\circ\\), so \\(\\beta = 180^\\circ - 90^\\circ - 15^\\circ = 75^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "A",
                "on": "c1",
                "angle": 240,
                "name": "A",
                "label": {
                  "offset": [
                    -6,
                    -12
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "on": "c1",
                "angle": 60,
                "name": "B",
                "label": {
                  "offset": [
                    6,
                    12
                  ]
                }
              },
              {
                "type": "point",
                "id": "P",
                "on": "c1",
                "angle": 120,
                "name": "P",
                "label": {
                  "offset": [
                    -6,
                    12
                  ]
                }
              },
              {
                "type": "segment",
                "from": "A",
                "to": "B"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "P",
                  "B"
                ]
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "P"
                ],
                "name": "15°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "P",
                  "B"
                ],
                "name": "α",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "P",
                  "B",
                  "A"
                ],
                "name": "β",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(90, 75\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 90, 75. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(90, 75\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 240,
            "name": "A",
            "label": {
              "offset": [
                -6,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 60,
            "name": "B",
            "label": {
              "offset": [
                6,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 120,
            "name": "P",
            "label": {
              "offset": [
                -6,
                12
              ]
            }
          },
          {
            "type": "segment",
            "from": "A",
            "to": "B"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "P",
              "B"
            ]
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "P"
            ],
            "name": "15°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "P",
              "B"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "P",
              "B",
              "A"
            ],
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q2b",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\theta\\).",
    "opts": [
      "\\(-90\\)",
      "\\(89\\)",
      "\\(90\\)",
      "\\(91\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "Since \\(PQ\\) is a diameter, the angle in a semicircle is a right angle. Therefore, the angle at \\(T\\) is \\(90^\\circ\\), so \\(\\theta = 90^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "P",
                "on": "c1",
                "angle": 180,
                "name": "P",
                "label": {
                  "offset": [
                    -14,
                    0
                  ]
                }
              },
              {
                "type": "point",
                "id": "Q",
                "on": "c1",
                "angle": 0,
                "name": "Q",
                "label": {
                  "offset": [
                    12,
                    0
                  ]
                }
              },
              {
                "type": "point",
                "id": "T",
                "on": "c1",
                "angle": 220,
                "name": "T",
                "label": {
                  "offset": [
                    -8,
                    -10
                  ]
                }
              },
              {
                "type": "segment",
                "from": "P",
                "to": "Q"
              },
              {
                "type": "polygon",
                "points": [
                  "P",
                  "T",
                  "Q"
                ]
              },
              {
                "type": "angle",
                "points": [
                  "T",
                  "P",
                  "Q"
                ],
                "name": "65°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "P",
                  "T",
                  "Q"
                ],
                "name": "θ",
                "radius": 1.2,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(90\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 90. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(90\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 180,
            "name": "P",
            "label": {
              "offset": [
                -14,
                0
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "on": "c1",
            "angle": 0,
            "name": "Q",
            "label": {
              "offset": [
                12,
                0
              ]
            }
          },
          {
            "type": "point",
            "id": "T",
            "on": "c1",
            "angle": 220,
            "name": "T",
            "label": {
              "offset": [
                -8,
                -10
              ]
            }
          },
          {
            "type": "segment",
            "from": "P",
            "to": "Q"
          },
          {
            "type": "polygon",
            "points": [
              "P",
              "T",
              "Q"
            ]
          },
          {
            "type": "angle",
            "points": [
              "T",
              "P",
              "Q"
            ],
            "name": "65°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "P",
              "T",
              "Q"
            ],
            "name": "θ",
            "radius": 1.2,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q2c",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\theta\\).",
    "opts": [
      "\\(-90\\)",
      "\\(89\\)",
      "\\(90\\)",
      "\\(91\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "Since \\(JL\\) is a diameter (passing through the centre \\(O\\)), the angle in a semicircle is a right angle. Therefore, the angle at \\(K\\) is \\(90^\\circ\\), so \\(\\theta = 90^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "J",
                "on": "c1",
                "angle": 90,
                "name": "J",
                "label": {
                  "offset": [
                    0,
                    12
                  ]
                }
              },
              {
                "type": "point",
                "id": "K",
                "on": "c1",
                "angle": 270,
                "name": "K",
                "label": {
                  "offset": [
                    0,
                    -12
                  ]
                }
              },
              {
                "type": "point",
                "id": "L",
                "on": "c1",
                "angle": 60,
                "name": "L",
                "label": {
                  "offset": [
                    6,
                    12
                  ]
                }
              },
              {
                "type": "segment",
                "from": "J",
                "to": "K"
              },
              {
                "type": "polygon",
                "points": [
                  "J",
                  "L",
                  "K"
                ]
              },
              {
                "type": "angle",
                "points": [
                  "K",
                  "J",
                  "L"
                ],
                "name": "80°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "J",
                  "K",
                  "L"
                ],
                "name": "θ",
                "radius": 1.2,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(90\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 90. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(90\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "J",
            "on": "c1",
            "angle": 90,
            "name": "J",
            "label": {
              "offset": [
                0,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "K",
            "on": "c1",
            "angle": 270,
            "name": "K",
            "label": {
              "offset": [
                0,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "L",
            "on": "c1",
            "angle": 60,
            "name": "L",
            "label": {
              "offset": [
                6,
                12
              ]
            }
          },
          {
            "type": "segment",
            "from": "J",
            "to": "K"
          },
          {
            "type": "polygon",
            "points": [
              "J",
              "L",
              "K"
            ]
          },
          {
            "type": "angle",
            "points": [
              "K",
              "J",
              "L"
            ],
            "name": "80°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "J",
              "K",
              "L"
            ],
            "name": "θ",
            "radius": 1.2,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q2d",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of \\(\\alpha\\), \\(\\beta\\), \\(\\gamma\\), and \\(\\theta\\). Enter your answer as four numbers separated by commas (e.g. 10, 20, 30, 40).",
    "opts": [
      "\\(-402070140\\)",
      "\\(402070139\\)",
      "\\(40, 20, 70, 140\\)",
      "\\(402070141\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "Since \\(RS\\) is a diameter, \\(\\angle RTS = 90^\\circ\\).\nIn \\(\\triangle OST\\), \\(OS = OT\\) (radii), so it is isosceles. Thus \\(\\gamma = 70^\\circ\\).\nIn right \\(\\triangle RTS\\), \\(\\beta = 90^\\circ - 70^\\circ = 20^\\circ\\).\nIn isosceles \\(\\triangle OST\\), \\(\\alpha = 180^\\circ - 2(70^\\circ) = 40^\\circ\\).\nAngles on a straight line: \\(\\theta = 180^\\circ - \\alpha = 140^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "R",
                "on": "c1",
                "angle": 110,
                "name": "R",
                "label": {
                  "offset": [
                    -4,
                    12
                  ]
                }
              },
              {
                "type": "point",
                "id": "S",
                "on": "c1",
                "angle": 290,
                "name": "S",
                "label": {
                  "offset": [
                    4,
                    -10
                  ]
                }
              },
              {
                "type": "point",
                "id": "T",
                "on": "c1",
                "angle": 250,
                "name": "T",
                "label": {
                  "offset": [
                    -4,
                    -12
                  ]
                }
              },
              {
                "type": "segment",
                "from": "R",
                "to": "S"
              },
              {
                "type": "polygon",
                "points": [
                  "R",
                  "T",
                  "S"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "T"
              },
              {
                "type": "angle",
                "points": [
                  "O",
                  "S",
                  "T"
                ],
                "name": "70°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "T",
                  "O",
                  "S"
                ],
                "name": "α",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "R",
                  "T",
                  "O"
                ],
                "name": "β",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "O",
                  "T",
                  "S"
                ],
                "name": "γ",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "R",
                  "O",
                  "T"
                ],
                "name": "θ",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(40, 20, 70, 140\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 40, 20, 70, 140. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(40, 20, 70, 140\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "R",
            "on": "c1",
            "angle": 110,
            "name": "R",
            "label": {
              "offset": [
                -4,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "S",
            "on": "c1",
            "angle": 290,
            "name": "S",
            "label": {
              "offset": [
                4,
                -10
              ]
            }
          },
          {
            "type": "point",
            "id": "T",
            "on": "c1",
            "angle": 250,
            "name": "T",
            "label": {
              "offset": [
                -4,
                -12
              ]
            }
          },
          {
            "type": "segment",
            "from": "R",
            "to": "S"
          },
          {
            "type": "polygon",
            "points": [
              "R",
              "T",
              "S"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "T"
          },
          {
            "type": "angle",
            "points": [
              "O",
              "S",
              "T"
            ],
            "name": "70°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "T",
              "O",
              "S"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "R",
              "T",
              "O"
            ],
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "T",
              "S"
            ],
            "name": "γ",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "R",
              "O",
              "T"
            ],
            "name": "θ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q2e",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma.",
    "opts": [
      "\\(-9035\\)",
      "\\(9034\\)",
      "\\(90, 35\\)",
      "\\(9036\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "Since \\(XY\\) is a diameter, \\(\\alpha = \\angle XZY = 90^\\circ\\).\nIn isosceles \\(\\triangle OYZ\\), \\(\\angle OYZ = \\angle OZY = (180^\\circ - 70^\\circ)/2 = 55^\\circ\\).\nIn \\(\\triangle XYZ\\), \\(\\beta = 180^\\circ - 90^\\circ - 55^\\circ = 35^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "X",
                "on": "c1",
                "angle": 210,
                "name": "X",
                "label": {
                  "offset": [
                    -10,
                    -8
                  ]
                }
              },
              {
                "type": "point",
                "id": "Y",
                "on": "c1",
                "angle": 30,
                "name": "Y",
                "label": {
                  "offset": [
                    10,
                    6
                  ]
                }
              },
              {
                "type": "point",
                "id": "Z",
                "on": "c1",
                "angle": 100,
                "name": "Z",
                "label": {
                  "offset": [
                    10,
                    10
                  ]
                }
              },
              {
                "type": "segment",
                "from": "X",
                "to": "Y"
              },
              {
                "type": "polygon",
                "points": [
                  "X",
                  "Z",
                  "Y"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "Z"
              },
              {
                "type": "angle",
                "points": [
                  "Z",
                  "O",
                  "Y"
                ],
                "name": "70°",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "X",
                  "Z",
                  "Y"
                ],
                "name": "α",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "Z",
                  "X",
                  "Y"
                ],
                "name": "β",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(90, 35\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 90, 35. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(90, 35\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "X",
            "on": "c1",
            "angle": 210,
            "name": "X",
            "label": {
              "offset": [
                -10,
                -8
              ]
            }
          },
          {
            "type": "point",
            "id": "Y",
            "on": "c1",
            "angle": 30,
            "name": "Y",
            "label": {
              "offset": [
                10,
                6
              ]
            }
          },
          {
            "type": "point",
            "id": "Z",
            "on": "c1",
            "angle": 100,
            "name": "Z",
            "label": {
              "offset": [
                10,
                10
              ]
            }
          },
          {
            "type": "segment",
            "from": "X",
            "to": "Y"
          },
          {
            "type": "polygon",
            "points": [
              "X",
              "Z",
              "Y"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "Z"
          },
          {
            "type": "angle",
            "points": [
              "Z",
              "O",
              "Y"
            ],
            "name": "70°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "X",
              "Z",
              "Y"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "Z",
              "X",
              "Y"
            ],
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q2f",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\theta\\).",
    "opts": [
      "\\(-80\\)",
      "\\(79\\)",
      "\\(80\\)",
      "\\(81\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "Since \\(AOB\\) is a straight line, \\(\\angle AOC = 180^\\circ - 160^\\circ = 20^\\circ\\).\nIn isosceles \\(\\triangle AOC\\), \\(\\theta = (180^\\circ - 20^\\circ)/2 = 80^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "A",
                "on": "c1",
                "angle": 170,
                "name": "A",
                "label": {
                  "offset": [
                    -14,
                    2
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "on": "c1",
                "angle": 350,
                "name": "B",
                "label": {
                  "offset": [
                    12,
                    -4
                  ]
                }
              },
              {
                "type": "point",
                "id": "C",
                "on": "c1",
                "angle": 190,
                "name": "C",
                "label": {
                  "offset": [
                    -14,
                    -2
                  ]
                }
              },
              {
                "type": "segment",
                "from": "A",
                "to": "B"
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "C",
                  "O"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "C"
              },
              {
                "type": "angle",
                "points": [
                  "C",
                  "O",
                  "B"
                ],
                "name": "160°",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "O",
                  "A",
                  "C"
                ],
                "name": "θ",
                "radius": 0.6,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(80\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 80. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(80\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 170,
            "name": "A",
            "label": {
              "offset": [
                -14,
                2
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 350,
            "name": "B",
            "label": {
              "offset": [
                12,
                -4
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "on": "c1",
            "angle": 190,
            "name": "C",
            "label": {
              "offset": [
                -14,
                -2
              ]
            }
          },
          {
            "type": "segment",
            "from": "A",
            "to": "B"
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "C",
              "O"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "C"
          },
          {
            "type": "angle",
            "points": [
              "C",
              "O",
              "B"
            ],
            "name": "160°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "A",
              "C"
            ],
            "name": "θ",
            "radius": 0.6,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q3a",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\alpha\\).",
    "opts": [
      "\\(-27.5\\)",
      "\\(26.5\\)",
      "\\(27.5\\)",
      "\\(28.5\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc. \\(\\alpha = 55^\\circ / 2 = 27.5^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "A",
                "on": "c1",
                "angle": 90,
                "name": "A",
                "label": {
                  "offset": [
                    0,
                    12
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "on": "c1",
                "angle": 210,
                "name": "B",
                "label": {
                  "offset": [
                    -10,
                    -8
                  ]
                }
              },
              {
                "type": "point",
                "id": "C",
                "on": "c1",
                "angle": 330,
                "name": "C",
                "label": {
                  "offset": [
                    10,
                    -8
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "B"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "C"
              },
              {
                "type": "angle",
                "points": [
                  "C",
                  "O",
                  "B"
                ],
                "name": "55°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
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
                "name": "α",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(27.5\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 27.5. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(27.5\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 90,
            "name": "A",
            "label": {
              "offset": [
                0,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 210,
            "name": "B",
            "label": {
              "offset": [
                -10,
                -8
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "on": "c1",
            "angle": 330,
            "name": "C",
            "label": {
              "offset": [
                10,
                -8
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "B"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "C"
          },
          {
            "type": "angle",
            "points": [
              "C",
              "O",
              "B"
            ],
            "name": "55°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
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
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q3b",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\gamma\\).",
    "opts": [
      "\\(-44\\)",
      "\\(43\\)",
      "\\(44\\)",
      "\\(45\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc. \\(\\gamma = 88^\\circ / 2 = 44^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "A",
                "on": "c1",
                "angle": 140,
                "name": "A",
                "label": {
                  "offset": [
                    -10,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "on": "c1",
                "angle": 40,
                "name": "B",
                "label": {
                  "offset": [
                    10,
                    10
                  ]
                }
              },
              {
                "type": "point",
                "id": "C",
                "on": "c1",
                "angle": 270,
                "name": "C",
                "label": {
                  "offset": [
                    0,
                    -12
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "A"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "B"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "O",
                  "A"
                ],
                "name": "88°",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "C",
                  "A"
                ],
                "name": "γ",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(44\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 44. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(44\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 140,
            "name": "A",
            "label": {
              "offset": [
                -10,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 40,
            "name": "B",
            "label": {
              "offset": [
                10,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "on": "c1",
            "angle": 270,
            "name": "C",
            "label": {
              "offset": [
                0,
                -12
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "A"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "B"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "O",
              "A"
            ],
            "name": "88°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "B",
              "C",
              "A"
            ],
            "name": "γ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q3c",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\alpha\\).",
    "opts": [
      "\\(-190\\)",
      "\\(189\\)",
      "\\(190\\)",
      "\\(191\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The reflex angle at the centre is twice the angle at the circumference. \\(\\alpha = 2 \\times 95^\\circ = 190^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "A",
                "on": "c1",
                "angle": 190,
                "name": "A",
                "label": {
                  "offset": [
                    -14,
                    -2
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "on": "c1",
                "angle": 350,
                "name": "B",
                "label": {
                  "offset": [
                    12,
                    -4
                  ]
                }
              },
              {
                "type": "point",
                "id": "C",
                "on": "c1",
                "angle": 90,
                "name": "C",
                "label": {
                  "offset": [
                    0,
                    12
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "A"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "B"
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "C",
                  "B"
                ],
                "name": "95°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "O",
                  "B"
                ],
                "name": "α",
                "radius": 1.2,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(190\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 190. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(190\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 190,
            "name": "A",
            "label": {
              "offset": [
                -14,
                -2
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 350,
            "name": "B",
            "label": {
              "offset": [
                12,
                -4
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "on": "c1",
            "angle": 90,
            "name": "C",
            "label": {
              "offset": [
                0,
                12
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "A"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "B"
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "95°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "O",
              "B"
            ],
            "name": "α",
            "radius": 1.2,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q3d",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\gamma\\).",
    "opts": [
      "\\(-100\\)",
      "\\(100\\)",
      "\\(101\\)",
      "\\(99\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The angle at the circumference is half the reflex angle at the centre. \\(\\gamma = 200^\\circ / 2 = 100^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "A",
                "on": "c1",
                "angle": 260,
                "name": "A",
                "label": {
                  "offset": [
                    -2,
                    -12
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "on": "c1",
                "angle": 90,
                "name": "B",
                "label": {
                  "offset": [
                    0,
                    12
                  ]
                }
              },
              {
                "type": "point",
                "id": "C",
                "on": "c1",
                "angle": 30,
                "name": "C",
                "label": {
                  "offset": [
                    10,
                    6
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "B",
                  "C"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "A"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "B"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "O",
                  "A"
                ],
                "name": "200°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
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
                "name": "γ",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(100\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 100. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(100\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 260,
            "name": "A",
            "label": {
              "offset": [
                -2,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 90,
            "name": "B",
            "label": {
              "offset": [
                0,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "on": "c1",
            "angle": 30,
            "name": "C",
            "label": {
              "offset": [
                10,
                6
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "A"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "B"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "O",
              "A"
            ],
            "name": "200°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
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
            "name": "γ",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q3e",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\theta\\).",
    "opts": [
      "\\(-129\\)",
      "\\(128\\)",
      "\\(129\\)",
      "\\(130\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The angle at the circumference is half the reflex angle at the centre. \\(\\theta = 258^\\circ / 2 = 129^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "J",
                "on": "c1",
                "angle": 170,
                "name": "J",
                "label": {
                  "offset": [
                    -14,
                    2
                  ]
                }
              },
              {
                "type": "point",
                "id": "M",
                "on": "c1",
                "angle": 280,
                "name": "M",
                "label": {
                  "offset": [
                    2,
                    -12
                  ]
                }
              },
              {
                "type": "point",
                "id": "K",
                "on": "c1",
                "angle": 210,
                "name": "K",
                "label": {
                  "offset": [
                    -10,
                    -8
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "J",
                  "K",
                  "M"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "J"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "M"
              },
              {
                "type": "angle",
                "points": [
                  "M",
                  "O",
                  "J"
                ],
                "name": "258°",
                "radius": 1.2,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "J",
                  "K",
                  "M"
                ],
                "name": "θ",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(129\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 129. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(129\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "J",
            "on": "c1",
            "angle": 170,
            "name": "J",
            "label": {
              "offset": [
                -14,
                2
              ]
            }
          },
          {
            "type": "point",
            "id": "M",
            "on": "c1",
            "angle": 280,
            "name": "M",
            "label": {
              "offset": [
                2,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "K",
            "on": "c1",
            "angle": 210,
            "name": "K",
            "label": {
              "offset": [
                -10,
                -8
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "J",
              "K",
              "M"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "J"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "M"
          },
          {
            "type": "angle",
            "points": [
              "M",
              "O",
              "J"
            ],
            "name": "258°",
            "radius": 1.2,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "J",
              "K",
              "M"
            ],
            "name": "θ",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q3f",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\alpha\\).",
    "opts": [
      "\\(-40\\)",
      "\\(39\\)",
      "\\(40\\)",
      "\\(41\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The angle at the circumference is half the angle at the centre. \\(\\alpha = 80^\\circ / 2 = 40^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "A",
                "on": "c1",
                "angle": 210,
                "name": "A",
                "label": {
                  "offset": [
                    -10,
                    -8
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "on": "c1",
                "angle": 310,
                "name": "B",
                "label": {
                  "offset": [
                    8,
                    -10
                  ]
                }
              },
              {
                "type": "point",
                "id": "P",
                "on": "c1",
                "angle": 30,
                "name": "P",
                "label": {
                  "offset": [
                    10,
                    6
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "P",
                  "B"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "A"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "B"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "O",
                  "A"
                ],
                "name": "80°",
                "radius": 1.2,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "P",
                  "B"
                ],
                "name": "α",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(40\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 40. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(40\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 210,
            "name": "A",
            "label": {
              "offset": [
                -10,
                -8
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 310,
            "name": "B",
            "label": {
              "offset": [
                8,
                -10
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 30,
            "name": "P",
            "label": {
              "offset": [
                10,
                6
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "P",
              "B"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "A"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "B"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "O",
              "A"
            ],
            "name": "80°",
            "radius": 1.2,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "P",
              "B"
            ],
            "name": "α",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q3g",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\beta\\).",
    "opts": [
      "\\(-30\\)",
      "\\(29\\)",
      "\\(30\\)",
      "\\(31\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The angle at the circumference is half the angle at the centre subtended by the same arc. \\(\\beta = 60^\\circ / 2 = 30^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "X",
                "on": "c1",
                "angle": 130,
                "name": "X",
                "label": {
                  "offset": [
                    -8,
                    10
                  ]
                }
              },
              {
                "type": "point",
                "id": "Q",
                "on": "c1",
                "angle": 60,
                "name": "Q",
                "label": {
                  "offset": [
                    6,
                    12
                  ]
                }
              },
              {
                "type": "point",
                "id": "P",
                "on": "c1",
                "angle": 0,
                "name": "P",
                "label": {
                  "offset": [
                    12,
                    0
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "X",
                  "Q",
                  "P"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "X"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "P"
              },
              {
                "type": "angle",
                "points": [
                  "P",
                  "O",
                  "X"
                ],
                "name": "60°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "P",
                  "Q",
                  "X"
                ],
                "name": "β",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(30\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 30. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(30\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "X",
            "on": "c1",
            "angle": 130,
            "name": "X",
            "label": {
              "offset": [
                -8,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "on": "c1",
            "angle": 60,
            "name": "Q",
            "label": {
              "offset": [
                6,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 0,
            "name": "P",
            "label": {
              "offset": [
                12,
                0
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "X",
              "Q",
              "P"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "X"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "P"
          },
          {
            "type": "angle",
            "points": [
              "P",
              "O",
              "X"
            ],
            "name": "60°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "P",
              "Q",
              "X"
            ],
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q3h",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\gamma\\).",
    "opts": [
      "\\(-100\\)",
      "\\(100\\)",
      "\\(101\\)",
      "\\(99\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc. \\(\\gamma = 2 \\times 50^\\circ = 100^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "K",
                "on": "c1",
                "angle": 160,
                "name": "K",
                "label": {
                  "offset": [
                    -12,
                    4
                  ]
                }
              },
              {
                "type": "point",
                "id": "L",
                "on": "c1",
                "angle": 100,
                "name": "L",
                "label": {
                  "offset": [
                    10,
                    10
                  ]
                }
              },
              {
                "type": "point",
                "id": "J",
                "on": "c1",
                "angle": 0,
                "name": "J",
                "label": {
                  "offset": [
                    12,
                    0
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "K",
                  "L",
                  "J"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "K"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "J"
              },
              {
                "type": "angle",
                "points": [
                  "J",
                  "L",
                  "K"
                ],
                "name": "50°",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "J",
                  "O",
                  "K"
                ],
                "name": "γ",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(100\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 100. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(100\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "K",
            "on": "c1",
            "angle": 160,
            "name": "K",
            "label": {
              "offset": [
                -12,
                4
              ]
            }
          },
          {
            "type": "point",
            "id": "L",
            "on": "c1",
            "angle": 100,
            "name": "L",
            "label": {
              "offset": [
                10,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "J",
            "on": "c1",
            "angle": 0,
            "name": "J",
            "label": {
              "offset": [
                12,
                0
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "K",
              "L",
              "J"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "K"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "J"
          },
          {
            "type": "angle",
            "points": [
              "J",
              "L",
              "K"
            ],
            "name": "50°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "J",
              "O",
              "K"
            ],
            "name": "γ",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q3i",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\theta\\).",
    "opts": [
      "\\(-24\\)",
      "\\(23\\)",
      "\\(24\\)",
      "\\(25\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The angle at the centre is twice the angle at the circumference. \\(\\theta = 2 \\times 12^\\circ = 24^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "R",
                "on": "c1",
                "angle": 210,
                "name": "R",
                "label": {
                  "offset": [
                    -10,
                    -8
                  ]
                }
              },
              {
                "type": "point",
                "id": "S",
                "on": "c1",
                "angle": 260,
                "name": "S",
                "label": {
                  "offset": [
                    -2,
                    -12
                  ]
                }
              },
              {
                "type": "point",
                "id": "T",
                "on": "c1",
                "angle": 0,
                "name": "T",
                "label": {
                  "offset": [
                    12,
                    0
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "R",
                  "S",
                  "T"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "R"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "T"
              },
              {
                "type": "angle",
                "points": [
                  "T",
                  "S",
                  "R"
                ],
                "name": "12°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "T",
                  "O",
                  "R"
                ],
                "name": "θ",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(24\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 24. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(24\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "R",
            "on": "c1",
            "angle": 210,
            "name": "R",
            "label": {
              "offset": [
                -10,
                -8
              ]
            }
          },
          {
            "type": "point",
            "id": "S",
            "on": "c1",
            "angle": 260,
            "name": "S",
            "label": {
              "offset": [
                -2,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "T",
            "on": "c1",
            "angle": 0,
            "name": "T",
            "label": {
              "offset": [
                12,
                0
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "R",
              "S",
              "T"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "R"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "T"
          },
          {
            "type": "angle",
            "points": [
              "T",
              "S",
              "R"
            ],
            "name": "12°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "T",
              "O",
              "R"
            ],
            "name": "θ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q4a",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma.",
    "opts": [
      "\\(-12060\\)",
      "\\(12059\\)",
      "\\(120, 60\\)",
      "\\(12061\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The reflex angle is \\(240^\\circ\\). The obtuse angle at the centre is \\(\\alpha = 360^\\circ - 240^\\circ = 120^\\circ\\).\n\\(\\beta\\) is the angle at the circumference subtended by the minor arc, so \\(\\beta = 120^\\circ / 2 = 60^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "A",
                "on": "c1",
                "angle": 210,
                "name": "A",
                "label": {
                  "offset": [
                    -10,
                    -8
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "on": "c1",
                "angle": 330,
                "name": "B",
                "label": {
                  "offset": [
                    10,
                    -8
                  ]
                }
              },
              {
                "type": "point",
                "id": "P",
                "on": "c1",
                "angle": 90,
                "name": "P",
                "label": {
                  "offset": [
                    0,
                    12
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "A",
                  "P",
                  "B"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "A"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "B"
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "O",
                  "B"
                ],
                "name": "α",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "O",
                  "A"
                ],
                "name": "240°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "P",
                  "B"
                ],
                "name": "β",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(120, 60\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 120, 60. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(120, 60\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 210,
            "name": "A",
            "label": {
              "offset": [
                -10,
                -8
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 330,
            "name": "B",
            "label": {
              "offset": [
                10,
                -8
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 90,
            "name": "P",
            "label": {
              "offset": [
                0,
                12
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "P",
              "B"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "A"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "B"
          },
          {
            "type": "angle",
            "points": [
              "A",
              "O",
              "B"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "B",
              "O",
              "A"
            ],
            "name": "240°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "P",
              "B"
            ],
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q4b",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\theta\\).",
    "opts": [
      "\\(-30\\)",
      "\\(29\\)",
      "\\(30\\)",
      "\\(31\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The obtuse angle at the centre is \\(360^\\circ - 300^\\circ = 60^\\circ\\).\nThe angle at the circumference is half the angle at the centre subtended by the same minor arc, so \\(\\theta = 60^\\circ / 2 = 30^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "P",
                "on": "c1",
                "angle": 180,
                "name": "P",
                "label": {
                  "offset": [
                    -14,
                    0
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "on": "c1",
                "angle": 60,
                "name": "B",
                "label": {
                  "offset": [
                    6,
                    12
                  ]
                }
              },
              {
                "type": "point",
                "id": "A",
                "on": "c1",
                "angle": 110,
                "name": "A",
                "label": {
                  "offset": [
                    -4,
                    12
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "P",
                  "A",
                  "B"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "P"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "B"
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "O",
                  "P"
                ],
                "name": "300°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "B",
                  "A",
                  "P"
                ],
                "name": "θ",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(30\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 30. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(30\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 180,
            "name": "P",
            "label": {
              "offset": [
                -14,
                0
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 60,
            "name": "B",
            "label": {
              "offset": [
                6,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 110,
            "name": "A",
            "label": {
              "offset": [
                -4,
                12
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "P",
              "A",
              "B"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "P"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "B"
          },
          {
            "type": "angle",
            "points": [
              "B",
              "O",
              "P"
            ],
            "name": "300°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "P"
            ],
            "name": "θ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q4c",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of \\(\\theta\\).",
    "opts": [
      "\\(-140\\)",
      "\\(139\\)",
      "\\(140\\)",
      "\\(141\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc.\n\\(\\theta = 2 \\times 70^\\circ = 140^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "T",
                "on": "c1",
                "angle": 200,
                "name": "T",
                "label": {
                  "offset": [
                    -12,
                    -6
                  ]
                }
              },
              {
                "type": "point",
                "id": "S",
                "on": "c1",
                "angle": 60,
                "name": "S",
                "label": {
                  "offset": [
                    6,
                    12
                  ]
                }
              },
              {
                "type": "point",
                "id": "R",
                "on": "c1",
                "angle": 280,
                "name": "R",
                "label": {
                  "offset": [
                    2,
                    -12
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "T",
                  "S",
                  "R"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "S"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "R"
              },
              {
                "type": "angle",
                "points": [
                  "S",
                  "T",
                  "R"
                ],
                "name": "70°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "S",
                  "O",
                  "R"
                ],
                "name": "θ",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(140\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 140. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(140\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "T",
            "on": "c1",
            "angle": 200,
            "name": "T",
            "label": {
              "offset": [
                -12,
                -6
              ]
            }
          },
          {
            "type": "point",
            "id": "S",
            "on": "c1",
            "angle": 60,
            "name": "S",
            "label": {
              "offset": [
                6,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "R",
            "on": "c1",
            "angle": 280,
            "name": "R",
            "label": {
              "offset": [
                2,
                -12
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "T",
              "S",
              "R"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "S"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "R"
          },
          {
            "type": "angle",
            "points": [
              "S",
              "T",
              "R"
            ],
            "name": "70°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "S",
              "O",
              "R"
            ],
            "name": "θ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q4d",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma.",
    "opts": [
      "\\(-4040\\)",
      "\\(4039\\)",
      "\\(40, 40\\)",
      "\\(4041\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The angle at the circumference is half the angle at the centre: \\(\\alpha = 80^\\circ / 2 = 40^\\circ\\).\nAngles subtended by the same arc are equal, so \\(\\beta = \\alpha = 40^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "P",
                "on": "c1",
                "angle": 110,
                "name": "P",
                "label": {
                  "offset": [
                    -4,
                    12
                  ]
                }
              },
              {
                "type": "point",
                "id": "Q",
                "on": "c1",
                "angle": 10,
                "name": "Q",
                "label": {
                  "offset": [
                    10,
                    10
                  ]
                }
              },
              {
                "type": "point",
                "id": "F",
                "on": "c1",
                "angle": 230,
                "name": "F",
                "label": {
                  "offset": [
                    -8,
                    -12
                  ]
                }
              },
              {
                "type": "point",
                "id": "G",
                "on": "c1",
                "angle": 310,
                "name": "G",
                "label": {
                  "offset": [
                    8,
                    -10
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "F",
                  "P",
                  "G"
                ]
              },
              {
                "type": "polygon",
                "points": [
                  "F",
                  "Q",
                  "G"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "F"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "G"
              },
              {
                "type": "angle",
                "points": [
                  "G",
                  "O",
                  "F"
                ],
                "name": "80°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "F",
                  "P",
                  "G"
                ],
                "name": "α",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "F",
                  "Q",
                  "G"
                ],
                "name": "β",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(40, 40\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 40, 40. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(40, 40\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 110,
            "name": "P",
            "label": {
              "offset": [
                -4,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "on": "c1",
            "angle": 10,
            "name": "Q",
            "label": {
              "offset": [
                10,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "F",
            "on": "c1",
            "angle": 230,
            "name": "F",
            "label": {
              "offset": [
                -8,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "G",
            "on": "c1",
            "angle": 310,
            "name": "G",
            "label": {
              "offset": [
                8,
                -10
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "F",
              "P",
              "G"
            ]
          },
          {
            "type": "polygon",
            "points": [
              "F",
              "Q",
              "G"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "F"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "G"
          },
          {
            "type": "angle",
            "points": [
              "G",
              "O",
              "F"
            ],
            "name": "80°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "F",
              "P",
              "G"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "F",
              "Q",
              "G"
            ],
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q4e",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of \\(\\alpha\\) and \\(\\theta\\). Enter your answer as two numbers separated by a comma.",
    "opts": [
      "\\(-2040\\)",
      "\\(2039\\)",
      "\\(20, 40\\)",
      "\\(2041\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "Angles subtended by the same arc are equal, so \\(\\alpha = \\angle PSR = 20^\\circ\\).\nThe angle at the centre is twice the angle at the circumference, so \\(\\theta = 2 \\times 20^\\circ = 40^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "P",
                "on": "c1",
                "angle": 160,
                "name": "P",
                "label": {
                  "offset": [
                    -12,
                    4
                  ]
                }
              },
              {
                "type": "point",
                "id": "Q",
                "on": "c1",
                "angle": 30,
                "name": "Q",
                "label": {
                  "offset": [
                    10,
                    6
                  ]
                }
              },
              {
                "type": "point",
                "id": "S",
                "on": "c1",
                "angle": 240,
                "name": "S",
                "label": {
                  "offset": [
                    -6,
                    -12
                  ]
                }
              },
              {
                "type": "point",
                "id": "R",
                "on": "c1",
                "angle": 300,
                "name": "R",
                "label": {
                  "offset": [
                    6,
                    -12
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "P",
                  "Q",
                  "R"
                ]
              },
              {
                "type": "polygon",
                "points": [
                  "P",
                  "S",
                  "R"
                ]
              },
              {
                "type": "segment",
                "from": "O",
                "to": "P"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "R"
              },
              {
                "type": "angle",
                "points": [
                  "P",
                  "S",
                  "R"
                ],
                "name": "20°",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "P",
                  "Q",
                  "R"
                ],
                "name": "α",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "R",
                  "O",
                  "P"
                ],
                "name": "θ",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(20, 40\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 20, 40. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(20, 40\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 160,
            "name": "P",
            "label": {
              "offset": [
                -12,
                4
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "on": "c1",
            "angle": 30,
            "name": "Q",
            "label": {
              "offset": [
                10,
                6
              ]
            }
          },
          {
            "type": "point",
            "id": "S",
            "on": "c1",
            "angle": 240,
            "name": "S",
            "label": {
              "offset": [
                -6,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "R",
            "on": "c1",
            "angle": 300,
            "name": "R",
            "label": {
              "offset": [
                6,
                -12
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "P",
              "Q",
              "R"
            ]
          },
          {
            "type": "polygon",
            "points": [
              "P",
              "S",
              "R"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "P"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "R"
          },
          {
            "type": "angle",
            "points": [
              "P",
              "S",
              "R"
            ],
            "name": "20°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "P",
              "Q",
              "R"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "R",
              "O",
              "P"
            ],
            "name": "θ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q4f",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of \\(\\alpha\\), \\(\\beta\\), and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    "opts": [
      "\\(-1002050\\)",
      "\\(1002049\\)",
      "\\(100, 20, 50\\)",
      "\\(1002051\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "In isosceles \\(\\triangle POQ\\), \\(\\angle OPQ = (180^\\circ - 120^\\circ)/2 = 30^\\circ\\).\n\\(\\angle PRQ = 120^\\circ / 2 = 60^\\circ\\). We are given \\(\\angle ORQ = 40^\\circ\\), so \\(\\angle ORP = 60^\\circ - 40^\\circ = 20^\\circ\\).\nIn isosceles \\(\\triangle OQR\\), \\(\\angle OQR = 40^\\circ\\), so \\(\\alpha = \\angle ROQ = 180^\\circ - 80^\\circ = 100^\\circ\\).\nIn isosceles \\(\\triangle OPR\\), \\(\\beta = \\angle OPR = \\angle ORP = 20^\\circ\\).\n\\(\\gamma = \\angle RPQ = \\angle OPQ + \\angle OPR = 30^\\circ + 20^\\circ = 50^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "In isosceles \\(\\triangle POQ\\), \\(\\angle OPQ = (180^\\circ - 120^\\circ)/2 = 30^\\circ\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(100, 20, 50\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\angle PRQ = 120^\\circ / 2 = 60^\\circ\\). We are given \\(\\angle ORQ = 40^\\circ\\), so \\(\\angle ORP = 60^\\circ - 40^\\circ = 20^\\circ\\).",
        "workingOut": "\\(100, 20, 50\\)",
        "graphData": null
      },
      {
        "explanation": "In isosceles \\(\\triangle OQR\\), \\(\\angle OQR = 40^\\circ\\), so \\(\\alpha = \\angle ROQ = 180^\\circ - 80^\\circ = 100^\\circ\\).",
        "workingOut": "\\(100, 20, 50\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\gamma = \\angle RPQ = \\angle OPQ + \\angle OPR = 30^\\circ + 20^\\circ = 50^\\circ\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(100, 20, 50\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 90,
            "name": "P",
            "label": {
              "offset": [
                0,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "on": "c1",
            "angle": 330,
            "name": "Q",
            "label": {
              "offset": [
                10,
                -8
              ]
            }
          },
          {
            "type": "point",
            "id": "R",
            "on": "c1",
            "angle": 210,
            "name": "R",
            "label": {
              "offset": [
                -10,
                -8
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "P",
              "R",
              "Q"
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "P"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "Q"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "R"
          },
          {
            "type": "angle",
            "points": [
              "Q",
              "O",
              "P"
            ],
            "name": "120°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "R",
              "Q"
            ],
            "name": "40°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "R",
              "O",
              "Q"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "P",
              "R"
            ],
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "R",
              "P",
              "Q"
            ],
            "name": "γ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q4g",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of \\(\\alpha\\), \\(\\beta\\), and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    "opts": [
      "\\(-10020080\\)",
      "\\(10020079\\)",
      "\\(100, 200, 80\\)",
      "\\(10020081\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "The reflex angle at the centre is \\(\\beta = 360^\\circ - 160^\\circ = 200^\\circ\\).\n\\(\\gamma\\) subtends the minor arc \\(AB\\), so \\(\\gamma = 160^\\circ / 2 = 80^\\circ\\).\n\\(\\alpha\\) subtends the major arc \\(AB\\), so \\(\\alpha = \\beta / 2 = 200^\\circ / 2 = 100^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "The reflex angle at the centre is \\(\\beta = 360^\\circ - 160^\\circ = 200^\\circ\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(100, 200, 80\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\gamma\\) subtends the minor arc \\(AB\\), so \\(\\gamma = 160^\\circ / 2 = 80^\\circ\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(100, 200, 80\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\alpha\\) subtends the major arc \\(AB\\), so \\(\\alpha = \\beta / 2 = 200^\\circ / 2 = 100^\\circ\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(100, 200, 80\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 90,
            "name": "P",
            "label": {
              "offset": [
                0,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 350,
            "name": "A",
            "label": {
              "offset": [
                12,
                -4
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "on": "c1",
            "angle": 260,
            "name": "Q",
            "label": {
              "offset": [
                -2,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 150,
            "name": "B",
            "label": {
              "offset": [
                -12,
                6
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "P",
              "A",
              "Q",
              "B"
            ]
          },
          {
            "type": "segment",
            "from": "A",
            "to": "B",
            "dash": 2
          },
          {
            "type": "segment",
            "from": "O",
            "to": "A"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "B"
          },
          {
            "type": "angle",
            "points": [
              "A",
              "O",
              "B"
            ],
            "name": "160°",
            "radius": 1.2,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "B",
              "O",
              "A"
            ],
            "name": "β",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "B",
              "Q",
              "A"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "P",
              "B"
            ],
            "name": "γ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q4h",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of \\(\\alpha\\), \\(\\beta\\), and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    "opts": [
      "\\(-6060120\\)",
      "\\(6060119\\)",
      "\\(60, 60, 120\\)",
      "\\(6060121\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "Since \\(AC\\) and \\(BD\\) pass through \\(O\\), they are diameters. So \\(ABCD\\) is a rectangle.\n\\(\\angle ADC = 90^\\circ\\). In \\(\\triangle AOD\\), \\(OA=OD\\), so \\(\\angle ADO = 30^\\circ\\), \\(\\angle AOD = 120^\\circ\\).\n\\(\\gamma\\) and \\(\\angle AOD\\) are vertically opposite, so \\(\\gamma = 120^\\circ\\).\n\\(\\angle DAB = 90^\\circ\\). \\(\\alpha = 90^\\circ - 30^\\circ = 60^\\circ\\).\nIn right \\(\\triangle DAB\\), \\(\\beta = 90^\\circ - 30^\\circ = 60^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Since \\(AC\\) and \\(BD\\) pass through \\(O\\), they are diameters. So \\(ABCD\\) is a rectangle. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(60, 60, 120\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\angle ADC = 90^\\circ\\). In \\(\\triangle AOD\\), \\(OA=OD\\), so \\(\\angle ADO = 30^\\circ\\), \\(\\angle AOD = 120^\\circ\\).",
        "workingOut": "\\(60, 60, 120\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\gamma\\) and \\(\\angle AOD\\) are vertically opposite, so \\(\\gamma = 120^\\circ\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(60, 60, 120\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 45,
            "name": "A",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 315,
            "name": "B",
            "label": {
              "offset": [
                8,
                -8
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "on": "c1",
            "angle": 225,
            "name": "C",
            "label": {
              "offset": [
                -8,
                -8
              ]
            }
          },
          {
            "type": "point",
            "id": "D",
            "on": "c1",
            "angle": 135,
            "name": "D",
            "label": {
              "offset": [
                -8,
                8
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "A",
              "B",
              "C",
              "D"
            ]
          },
          {
            "type": "segment",
            "from": "A",
            "to": "C"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "D"
          },
          {
            "type": "angle",
            "points": [
              "D",
              "A",
              "C"
            ],
            "name": "30°",
            "radius": 1.2,
            "label": {
              "offset": [
                0,
                0
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
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "B",
              "D"
            ],
            "name": "β",
            "radius": 1.2,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "C",
              "O",
              "B"
            ],
            "name": "γ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q4i",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma.",
    "opts": [
      "\\(-4545\\)",
      "\\(4544\\)",
      "\\(45, 45\\)",
      "\\(4546\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
    "solution": "Since \\(JL\\) and \\(KM\\) are perpendicular diameters, \\(\\triangle JOK\\) is a right isosceles triangle (\\(OJ = OK\\)).\n\\(\\alpha = \\angle OJK = (180^\\circ - 90^\\circ) / 2 = 45^\\circ\\).\nSimilarly, \\(\\beta = \\angle OKL = 45^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "Identify given data",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "J",
                "on": "c1",
                "angle": 135,
                "name": "J",
                "label": {
                  "offset": [
                    -8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "K",
                "on": "c1",
                "angle": 45,
                "name": "K",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "point",
                "id": "L",
                "on": "c1",
                "angle": 315,
                "name": "L",
                "label": {
                  "offset": [
                    8,
                    -8
                  ]
                }
              },
              {
                "type": "point",
                "id": "M",
                "on": "c1",
                "angle": 225,
                "name": "M",
                "label": {
                  "offset": [
                    -8,
                    -8
                  ]
                }
              },
              {
                "type": "polygon",
                "points": [
                  "J",
                  "K",
                  "L",
                  "M"
                ]
              },
              {
                "type": "segment",
                "from": "J",
                "to": "L"
              },
              {
                "type": "segment",
                "from": "K",
                "to": "M"
              },
              {
                "type": "angle",
                "points": [
                  "O",
                  "J",
                  "K"
                ],
                "name": "α",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "O",
                  "K",
                  "L"
                ],
                "name": "β",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "rightangle",
                "points": [
                  "K",
                  "O",
                  "J"
                ],
                "size": 0.4
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "State the rule",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(45, 45\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 45, 45. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(45, 45\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "J",
            "on": "c1",
            "angle": 135,
            "name": "J",
            "label": {
              "offset": [
                -8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "K",
            "on": "c1",
            "angle": 45,
            "name": "K",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "L",
            "on": "c1",
            "angle": 315,
            "name": "L",
            "label": {
              "offset": [
                8,
                -8
              ]
            }
          },
          {
            "type": "point",
            "id": "M",
            "on": "c1",
            "angle": 225,
            "name": "M",
            "label": {
              "offset": [
                -8,
                -8
              ]
            }
          },
          {
            "type": "polygon",
            "points": [
              "J",
              "K",
              "L",
              "M"
            ]
          },
          {
            "type": "segment",
            "from": "J",
            "to": "L"
          },
          {
            "type": "segment",
            "from": "K",
            "to": "M"
          },
          {
            "type": "angle",
            "points": [
              "O",
              "J",
              "K"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "K",
              "L"
            ],
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "rightangle",
            "points": [
              "K",
              "O",
              "J"
            ],
            "size": 0.4
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q5a",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma (e.g. 30, 40).",
    "opts": [
      "\\(-10020\\)",
      "\\(10019\\)",
      "\\(100, 20\\)",
      "\\(10021\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the angle in a semicircle and alternate interior angles from parallel lines.",
    "solution": "Since \\(AB \\parallel FG\\), alternate interior angles are equal: \\(\\angle BFG = \\angle ABF = 10^\\circ\\).\nThe angle in a semicircle is a right angle, so \\(\\angle AFB = 90^\\circ\\).\nThus, \\(\\alpha = \\angle AFG = \\angle AFB + \\angle BFG = 90^\\circ + 10^\\circ = 100^\\circ\\).\nThe angle \\(\\beta\\) is the angle between chords \\(AG\\) and \\(FB\\). Angles subtended by arcs \\(AB\\) (\\(180^\\circ\\)) and \\(FG\\) (\\(140^\\circ\\)). The acute angle \\(\\beta = \\frac{1}{2}(180^\\circ - 140^\\circ) = 20^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Since \\(AB \\parallel FG\\), alternate interior angles are equal: \\(\\angle BFG = \\angle ABF = 10^\\circ\\).",
        "workingOut": "\\(100, 20\\)",
        "graphData": null
      },
      {
        "explanation": "Thus, \\(\\alpha = \\angle AFG = \\angle AFB + \\angle BFG = 90^\\circ + 10^\\circ = 100^\\circ\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(100, 20\\)",
        "graphData": null
      },
      {
        "explanation": "The angle \\(\\beta\\) is the angle between chords \\(AG\\) and \\(FB\\). Angles subtended by arcs \\(AB\\) (\\(180^\\circ\\)) and \\(FG\\) (\\(140^\\circ\\)). The acute angle \\(\\beta = \\frac{1}{2}(180^\\circ - 140^\\circ) = 20^\\circ\\).",
        "workingOut": "\\(100, 20\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [-5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar F = board.create('point', [5*Math.cos(200*Math.PI/180), 5*Math.sin(200*Math.PI/180)], {name: 'F', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-12, -12]}});\nvar G = board.create('point', [5*Math.cos(340*Math.PI/180), 5*Math.sin(340*Math.PI/180)], {name: 'G', size: 2, color: '#64748b', label: {autoPosition: false, offset: [12, -12]}});\nboard.create('segment', [A,B], {strokeColor: 'black', lastArrow: true});\nboard.create('segment', [F,G], {strokeColor: 'black', lastArrow: true});\nboard.create('segment', [A,G], {strokeColor: 'black'});\nboard.create('segment', [F,B], {strokeColor: 'black'});\nvar M = board.create('intersection', [board.create('line',[A,G],{visible:false}), board.create('line',[F,B],{visible:false}), 0], {name: '', visible: false});\nboard.create('angle', [A,B,F], {radius: 1.5, name: '10°', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [A,F,G], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [F,M,G], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q5b",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of \\(\\alpha\\) and \\(\\beta\\). Enter your answer as two numbers separated by a comma.",
    "opts": [
      "\\(-6030\\)",
      "\\(6029\\)",
      "\\(60, 30\\)",
      "\\(6031\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Look for an equilateral triangle formed by radii and a chord.",
    "solution": "In \\(\\triangle OAP\\), \\(OA = OP\\) (radii) and \\(OA = AP\\) (given). Thus \\(\\triangle OAP\\) is equilateral, so \\(\\alpha = \\angle AOP = 60^\\circ\\).\nSince \\(AOB\\) is a straight line (diameter), \\(\\angle POB = 180^\\circ - 60^\\circ = 120^\\circ\\).\nIn isosceles \\(\\triangle OPB\\) (\\(OB = OP\\) radii), \\(\\beta = \\angle OBP = (180^\\circ - 120^\\circ) / 2 = 30^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "In \\(\\triangle OAP\\), \\(OA = OP\\) (radii) and \\(OA = AP\\) (given). Thus \\(\\triangle OAP\\) is equilateral, so \\(\\alpha = \\angle AOP = 60^\\circ\\).",
        "workingOut": "\\(60, 30\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(AOB\\) is a straight line (diameter), \\(\\angle POB = 180^\\circ - 60^\\circ = 120^\\circ\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(60, 30\\)",
        "graphData": null
      },
      {
        "explanation": "In isosceles \\(\\triangle OPB\\) (\\(OB = OP\\) radii), \\(\\beta = \\angle OBP = (180^\\circ - 120^\\circ) / 2 = 30^\\circ\\).",
        "workingOut": "\\(60, 30\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 240,
            "name": "A",
            "label": {
              "offset": [
                -6,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 60,
            "name": "B",
            "label": {
              "offset": [
                6,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 0,
            "name": "P",
            "label": {
              "offset": [
                12,
                0
              ]
            }
          },
          {
            "type": "segment",
            "from": "A",
            "to": "B"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "A",
            "id": "seg_OA"
          },
          {
            "type": "segment",
            "from": "A",
            "to": "P",
            "id": "seg_AP"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "P"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "P"
          },
          {
            "type": "tick",
            "segment": "seg_OA"
          },
          {
            "type": "tick",
            "segment": "seg_AP"
          },
          {
            "type": "angle",
            "points": [
              "A",
              "O",
              "P"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "B",
              "P"
            ],
            "name": "β",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q5c",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    "opts": [
      "\\(-40110140\\)",
      "\\(40110139\\)",
      "\\(40, 110, 140\\)",
      "\\(40110141\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use alternate interior angles and the angle subtended by the major arc.",
    "solution": "In isosceles \\(\\triangle ORP\\) (radii \\(OR = OP\\)), \\(\\angle ORP = \\angle OPR = 20^\\circ\\). So \\(\\gamma = \\angle POR = 180^\\circ - 40^\\circ = 140^\\circ\\).\nSince \\(PQ \\parallel OR\\), alternate interior angles give \\(\\angle QPR = \\angle ORP = 20^\\circ\\).\nThus \\(\\alpha = \\angle OPQ = \\angle OPR + \\angle QPR = 20^\\circ + 20^\\circ = 40^\\circ\\).\nThe angle \\(\\beta = \\angle PQR\\) subtends the major arc \\(PR\\) (\\(360^\\circ - 140^\\circ = 220^\\circ\\)), so \\(\\beta = 220^\\circ / 2 = 110^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "In isosceles \\(\\triangle ORP\\) (radii \\(OR = OP\\)), \\(\\angle ORP = \\angle OPR = 20^\\circ\\). So \\(\\gamma = \\angle POR = 180^\\circ - 40^\\circ = 140^\\circ\\).",
        "workingOut": "\\(40, 110, 140\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(PQ \\parallel OR\\), alternate interior angles give \\(\\angle QPR = \\angle ORP = 20^\\circ\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(40, 110, 140\\)",
        "graphData": null
      },
      {
        "explanation": "Thus \\(\\alpha = \\angle OPQ = \\angle OPR + \\angle QPR = 20^\\circ + 20^\\circ = 40^\\circ\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(40, 110, 140\\)",
        "graphData": null
      },
      {
        "explanation": "The angle \\(\\beta = \\angle PQR\\) subtends the major arc \\(PR\\) (\\(360^\\circ - 140^\\circ = 220^\\circ\\)), so \\(\\beta = 220^\\circ / 2 = 110^\\circ\\).",
        "workingOut": "\\(40, 110, 140\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 150,
            "name": "P",
            "label": {
              "offset": [
                -12,
                6
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "on": "c1",
            "angle": 250,
            "name": "Q",
            "label": {
              "offset": [
                -4,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "R",
            "on": "c1",
            "angle": 290,
            "name": "R",
            "label": {
              "offset": [
                4,
                -10
              ]
            }
          },
          {
            "type": "segment",
            "from": "O",
            "to": "P"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "R",
            "lastArrow": true
          },
          {
            "type": "polygon",
            "points": [
              "P",
              "Q",
              "R"
            ]
          },
          {
            "type": "segment",
            "from": "P",
            "to": "Q",
            "lastArrow": true
          },
          {
            "type": "angle",
            "points": [
              "O",
              "R",
              "P"
            ],
            "name": "20°",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "P",
              "Q"
            ],
            "name": "α",
            "radius": 1.2,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "P",
              "Q",
              "R"
            ],
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "P",
              "O",
              "R"
            ],
            "name": "γ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q5d",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    "opts": [
      "\\(-1206070\\)",
      "\\(1206069\\)",
      "\\(120, 60, 70\\)",
      "\\(1206071\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the angle at the centre theorem for each of the three arcs.",
    "solution": "The angle at the circumference \\(\\angle BAC = 50^\\circ\\) subtends arc \\(BC\\), so \\(\\angle BOC = 2 \\times 50^\\circ = 100^\\circ\\).\nWe are given \\(\\angle AOB = 140^\\circ\\), so \\(\\alpha = \\angle AOC = 360^\\circ - 140^\\circ - 100^\\circ = 120^\\circ\\).\nThe angle \\(\\beta = \\angle ABC\\) subtends arc \\(AC\\) (central angle \\(120^\\circ\\)), so \\(\\beta = 120^\\circ / 2 = 60^\\circ\\).\nThe angle \\(\\gamma = \\angle ACB\\) subtends arc \\(AB\\) (central angle \\(140^\\circ\\)), so \\(\\gamma = 140^\\circ / 2 = 70^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "The angle at the circumference \\(\\angle BAC = 50^\\circ\\) subtends arc \\(BC\\), so \\(\\angle BOC = 2 \\times 50^\\circ = 100^\\circ\\).",
        "workingOut": "\\(120, 60, 70\\)",
        "graphData": null
      },
      {
        "explanation": "We are given \\(\\angle AOB = 140^\\circ\\), so \\(\\alpha = \\angle AOC = 360^\\circ - 140^\\circ - 100^\\circ = 120^\\circ\\).",
        "workingOut": "\\(120, 60, 70\\)",
        "graphData": null
      },
      {
        "explanation": "The angle \\(\\beta = \\angle ABC\\) subtends arc \\(AC\\) (central angle \\(120^\\circ\\)), so \\(\\beta = 120^\\circ / 2 = 60^\\circ\\).",
        "workingOut": "\\(120, 60, 70\\)",
        "graphData": null
      },
      {
        "explanation": "The angle \\(\\gamma = \\angle ACB\\) subtends arc \\(AB\\) (central angle \\(140^\\circ\\)), so \\(\\gamma = 140^\\circ / 2 = 70^\\circ\\).",
        "workingOut": "\\(120, 60, 70\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 190,
            "name": "A",
            "label": {
              "offset": [
                -14,
                -2
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 50,
            "name": "B",
            "label": {
              "offset": [
                10,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "on": "c1",
            "angle": 310,
            "name": "C",
            "label": {
              "offset": [
                8,
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
            ]
          },
          {
            "type": "segment",
            "from": "O",
            "to": "A"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "B"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "C"
          },
          {
            "type": "angle",
            "points": [
              "A",
              "O",
              "B"
            ],
            "name": "140°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
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
            "name": "50°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "O",
              "C"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
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
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
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
            "name": "γ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q5e",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    "opts": [
      "\\(-1408020\\)",
      "\\(1408019\\)",
      "\\(140, 80, 20\\)",
      "\\(1408021\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the parallel lines to find alternate interior angles.",
    "solution": "Let \\(OQ\\) and \\(PR\\) be parallel. \\(\\angle POQ = 160^\\circ\\). By alternate interior angles, \\(\\angle ORP = \\angle ROQ = \\gamma\\).\nIn isosceles \\(\\triangle OPR\\), \\(\\angle ORP = \\angle OPR = \\gamma\\). In \\(\\triangle OQR\\), \\(OQ = OR\\), so \\(\\angle OQR = \\angle ORQ = \\beta\\).\nFrom the parallel lines, \\(\\angle OQP + \\angle POQ = 180^\\circ\\), etc. But more simply, if we set angles: \\(Q\\) at \\(0^\\circ\\), \\(P\\) at \\(160^\\circ\\), \\(PR\\) horizontal \\(\\implies R\\) is at \\(20^\\circ\\).\nThen \\(\\alpha = \\angle POR = 160^\\circ - 20^\\circ = 140^\\circ\\).\n\\(\\gamma = \\angle ORP = (180^\\circ - 140^\\circ)/2 = 20^\\circ\\).\n\\(\\beta = \\angle OQR = (180^\\circ - 20^\\circ)/2 = 80^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Let \\(OQ\\) and \\(PR\\) be parallel. \\(\\angle POQ = 160^\\circ\\). By alternate interior angles, \\(\\angle ORP = \\angle ROQ = \\gamma\\).",
        "workingOut": "\\(140, 80, 20\\)",
        "graphData": null
      },
      {
        "explanation": "In isosceles \\(\\triangle OPR\\), \\(\\angle ORP = \\angle OPR = \\gamma\\). In \\(\\triangle OQR\\), \\(OQ = OR\\), so \\(\\angle OQR = \\angle ORQ = \\beta\\).",
        "workingOut": "\\(140, 80, 20\\)",
        "graphData": null
      },
      {
        "explanation": "From the parallel lines, \\(\\angle OQP + \\angle POQ = 180^\\circ\\), etc. But more simply, if we set angles: \\(Q\\) at \\(0^\\circ\\), \\(P\\) at \\(160^\\circ\\), \\(PR\\) horizontal \\(\\implies R\\) is at \\(20^\\circ\\).",
        "workingOut": "\\(140, 80, 20\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 160,
            "name": "P",
            "label": {
              "offset": [
                -12,
                4
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "on": "c1",
            "angle": 0,
            "name": "Q",
            "label": {
              "offset": [
                12,
                0
              ]
            }
          },
          {
            "type": "point",
            "id": "R",
            "on": "c1",
            "angle": 20,
            "name": "R",
            "label": {
              "offset": [
                10,
                10
              ]
            }
          },
          {
            "type": "segment",
            "from": "O",
            "to": "P"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "Q",
            "lastArrow": true
          },
          {
            "type": "segment",
            "from": "O",
            "to": "R"
          },
          {
            "type": "segment",
            "from": "P",
            "to": "R",
            "lastArrow": true
          },
          {
            "type": "segment",
            "from": "Q",
            "to": "R"
          },
          {
            "type": "angle",
            "points": [
              "Q",
              "O",
              "P"
            ],
            "name": "160°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "R",
              "O",
              "P"
            ],
            "name": "α",
            "radius": 0.8,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "Q",
              "R"
            ],
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "R",
              "P"
            ],
            "name": "γ",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q5f",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of \\(\\alpha\\), \\(\\beta\\) and \\(\\gamma\\). Enter your answer as three numbers separated by commas.",
    "opts": [
      "\\(-404010\\)",
      "\\(404009\\)",
      "\\(40, 40, 10\\)",
      "\\(404011\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Equal chords subtend equal angles at the centre.",
    "solution": "The reflex \\(\\angle AOC = 200^\\circ\\), so the interior \\(\\angle AOC = 360^\\circ - 200^\\circ = 160^\\circ\\).\nSince \\(AB = BC\\), the arcs are equal, and \\(\\angle AOB = \\angle BOC = (360^\\circ - 200^\\circ) / 2 = 100^\\circ\\).\n\\(\\alpha = \\angle OAB\\) in isosceles \\(\\triangle OAB\\), so \\(\\alpha = (180^\\circ - 100^\\circ)/2 = 40^\\circ\\).\n\\(\\beta = \\angle OBC\\) in isosceles \\(\\triangle OBC\\), so \\(\\beta = (180^\\circ - 100^\\circ)/2 = 40^\\circ\\).\n\\(\\gamma = \\angle OCA\\) in isosceles \\(\\triangle OAC\\), so \\(\\gamma = (180^\\circ - 160^\\circ)/2 = 10^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "The reflex \\(\\angle AOC = 200^\\circ\\), so the interior \\(\\angle AOC = 360^\\circ - 200^\\circ = 160^\\circ\\).",
        "workingOut": "\\(40, 40, 10\\)",
        "graphData": null
      },
      {
        "explanation": "Since \\(AB = BC\\), the arcs are equal, and \\(\\angle AOB = \\angle BOC = (360^\\circ - 200^\\circ) / 2 = 100^\\circ\\).",
        "workingOut": "\\(40, 40, 10\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\alpha = \\angle OAB\\) in isosceles \\(\\triangle OAB\\), so \\(\\alpha = (180^\\circ - 100^\\circ)/2 = 40^\\circ\\).",
        "workingOut": "\\(40, 40, 10\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\beta = \\angle OBC\\) in isosceles \\(\\triangle OBC\\), so \\(\\beta = (180^\\circ - 100^\\circ)/2 = 40^\\circ\\).",
        "workingOut": "\\(40, 40, 10\\)",
        "graphData": null
      },
      {
        "explanation": "\\(\\gamma = \\angle OCA\\) in isosceles \\(\\triangle OAC\\), so \\(\\gamma = (180^\\circ - 160^\\circ)/2 = 10^\\circ\\).",
        "workingOut": "\\(40, 40, 10\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 170,
            "name": "A",
            "label": {
              "offset": [
                -14,
                2
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "on": "c1",
            "angle": 70,
            "name": "B",
            "label": {
              "offset": [
                10,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "on": "c1",
            "angle": 330,
            "name": "C",
            "label": {
              "offset": [
                10,
                -8
              ]
            }
          },
          {
            "type": "segment",
            "from": "O",
            "to": "A"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "B"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "C"
          },
          {
            "type": "segment",
            "from": "A",
            "to": "B",
            "id": "seg_AB"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "C",
            "id": "seg_BC"
          },
          {
            "type": "segment",
            "from": "A",
            "to": "C"
          },
          {
            "type": "tick",
            "segment": "seg_AB"
          },
          {
            "type": "tick",
            "segment": "seg_BC"
          },
          {
            "type": "angle",
            "points": [
              "C",
              "O",
              "A"
            ],
            "name": "200°",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "A",
              "B"
            ],
            "name": "α",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "B",
              "C"
            ],
            "name": "β",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "O",
              "C",
              "A"
            ],
            "name": "γ",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-13a-q6a",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Thales' theorem states that: *An angle in a semicircle is a right angle*. This question develops Euclid's proof. Let \\(A\\), \\(O\\), \\(B\\) form the diameter of a circle, and \\(P\\) be a point on the circumference. Join \\(PO\\), and produce \\(AP\\) to \\(X\\).\nLet \\(\\angle A = \\alpha\\) and \\(\\angle B = \\beta\\).\n\n**i)** Prove that \\(\\angle APB = \\alpha + \\beta\\), and that \\(\\angle XPB = \\alpha + \\beta\\).\n**ii)** Hence, prove that \\(\\alpha + \\beta = 90^\\circ\\).",
    "answer": "",
    "hint": "Use the properties of isosceles triangles formed by radii, and the exterior angle theorem.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(OA = OP \\Rightarrow \\angle APO = \\alpha\nOB = OP \\Rightarrow \\angle BPO = \\beta\n\\angle APB = \\angle APO + \\angle BPO = \\alpha + \\beta\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [-5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-5, 12]}});\nvar X = board.create('point', [8*Math.cos(60*Math.PI/180), 8*Math.sin(60*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('segment', [A,X], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,P], {strokeColor: 'red', dash: 2});\nboard.create('angle', [B,A,P], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,B,A], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\text{Exterior } \\angle XPB = \\angle PAB + \\angle PBA = \\alpha + \\beta\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\angle APB + \\angle XPB = 180^\\circ\n(\\alpha + \\beta) + (\\alpha + \\beta) = 180^\\circ\n2(\\alpha + \\beta) = 180^\\circ \\implies \\alpha + \\beta = 90^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [-5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-5, 12]}});\nvar X = board.create('point', [8*Math.cos(60*Math.PI/180), 8*Math.sin(60*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('segment', [A,X], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,P], {strokeColor: 'red', dash: 2});\nboard.create('angle', [B,A,P], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,B,A], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-13a-q6b",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Thales' theorem states that: *An angle in a semicircle is a right angle*. This question develops an alternate proof.\nJoin \\(PO\\) and produce it to a point \\(M\\).\nLet \\(\\angle PAB = \\alpha\\) and \\(\\angle PBA = \\beta\\).\n\n**i)** Prove that \\(\\angle AOM = 2\\alpha\\) and \\(\\angle BOM = 2\\beta\\).\n**ii)** Hence, prove that \\(2\\alpha + 2\\beta = 180^\\circ\\).\n**iii)** Deduce that \\(\\alpha + \\beta = 90^\\circ\\) (and therefore \\(\\angle APB = 90^\\circ\\)).",
    "answer": "",
    "hint": "Use the exterior angle theorem for triangles AOP and BOP.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\triangle AOP \\text{ is isosceles} \\Rightarrow \\angle APO = \\alpha\n\\angle AOM = \\angle OAP + \\angle APO = 2\\alpha\n\\triangle BOP \\text{ is isosceles} \\Rightarrow \\angle BPO = \\beta\n\\angle BOM = \\angle OBP + \\angle BPO = 2\\beta\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [-5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-5, 12]}});\nvar M = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'M', size: 2, color: '#64748b', visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('segment', [A,P], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [P,M], {strokeColor: 'red', dash: 2});\nboard.create('text', [-2.5, -4.3, 'M'], {fontSize: 14});\nboard.create('angle', [B,A,P], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,B,A], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\angle AOM + \\angle BOM = 180^\\circ\n2\\alpha + 2\\beta = 180^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\alpha + \\beta = 90^\\circ\n\\angle APB = \\alpha + \\beta = 90^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar A = board.create('point', [-5,0], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5,0], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [-5, 12]}});\nvar M = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'M', size: 2, color: '#64748b', visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [A,B], {strokeColor: 'black'});\nboard.create('segment', [A,P], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [P,M], {strokeColor: 'red', dash: 2});\nboard.create('text', [-2.5, -4.3, 'M'], {fontSize: 14});\nboard.create('angle', [B,A,P], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [P,B,A], {radius: 1, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-13a-q7a",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre \\(O\\) lies inside the angle \\(\\angle APB\\), and the line \\(PO\\) is produced to a point \\(X\\) on the circle.\nLet \\(\\angle OPB = \\beta\\) and \\(\\angle OPA = \\alpha\\).\n\n**i)** Prove that \\(\\angle APB = \\alpha + \\beta\\).\n**ii)** Prove that \\(\\angle AOB = 2\\alpha + 2\\beta = 2\\angle APB\\).",
    "answer": "",
    "hint": "Use isosceles triangles and the exterior angle theorem for each half of the angle.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\angle APB = \\angle OPA + \\angle OPB = \\alpha + \\beta\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [0,5], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar A = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5*Math.cos(320*Math.PI/180), 5*Math.sin(320*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar X = board.create('point', [0,-5], {name: '', size: 0, visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [P,A], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,A], {strokeColor: 'red', dash: 2});\nboard.create('segment', [O,B], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,X], {strokeColor: 'red', dash: 2});\nboard.create('angle', [O,P,A], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,P,O], {radius: 1.2, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\triangle OPB \\text{ is isosceles} \\Rightarrow \\angle BOX = 2\\beta\n\\triangle OPA \\text{ is isosceles} \\Rightarrow \\angle AOX = 2\\alpha\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\angle AOB = 2\\alpha + 2\\beta = 2(\\alpha + \\beta) = 2\\angle APB\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [0,5], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar A = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5*Math.cos(320*Math.PI/180), 5*Math.sin(320*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar X = board.create('point', [0,-5], {name: '', size: 0, visible: false, label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [P,A], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,A], {strokeColor: 'red', dash: 2});\nboard.create('segment', [O,B], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,X], {strokeColor: 'red', dash: 2});\nboard.create('angle', [O,P,A], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,P,O], {radius: 1.2, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-13a-q7b",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre \\(O\\) lies outside the angle \\(\\angle APB\\), and the line \\(PO\\) is produced to a point \\(X\\) on the circle.\nLet \\(\\angle OPB = \\beta\\) and \\(\\angle OPA = \\alpha\\).\n\n**i)** Prove that \\(\\angle APB = \\beta - \\alpha\\).\n**ii)** Prove that \\(\\angle AOB = 2(\\beta - \\alpha) = 2\\angle APB\\).",
    "answer": "",
    "hint": "Use isosceles triangles and the exterior angle theorem, but this time subtract the angles.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\angle APB = \\angle OPB - \\angle OPA = \\beta - \\alpha\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar A = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5*Math.cos(340*Math.PI/180), 5*Math.sin(340*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar X = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [P,A], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,A], {strokeColor: 'red', dash: 2});\nboard.create('segment', [O,B], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,X], {strokeColor: 'red', dash: 2});\nboard.create('angle', [O,P,A], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,P,O], {radius: 1.5, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\triangle OPB \\text{ is isosceles} \\Rightarrow \\angle XOB = 2\\beta\n\\triangle OPA \\text{ is isosceles} \\Rightarrow \\angle XOA = 2\\alpha\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\angle AOB = \\angle XOB - \\angle XOA = 2\\beta - 2\\alpha = 2(\\beta - \\alpha) = 2\\angle APB\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "script": "board.suspendUpdate();\nvar O = board.create('point', [0,0], {name: 'O', size: 2, color: 'red', label: {autoPosition: false, offset: [0, 10]}});\nvar circle = board.create('circle', [O, 5], {strokeColor: '#3b82f6', highlight: false, strokeWidth: 2});\nvar P = board.create('point', [5*Math.cos(60*Math.PI/180), 5*Math.sin(60*Math.PI/180)], {name: 'P', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar A = board.create('point', [5*Math.cos(220*Math.PI/180), 5*Math.sin(220*Math.PI/180)], {name: 'A', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar B = board.create('point', [5*Math.cos(340*Math.PI/180), 5*Math.sin(340*Math.PI/180)], {name: 'B', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nvar X = board.create('point', [5*Math.cos(240*Math.PI/180), 5*Math.sin(240*Math.PI/180)], {name: 'X', size: 2, color: '#64748b', label: {autoPosition: false, offset: [0, 10]}});\nboard.create('segment', [P,A], {strokeColor: 'black'});\nboard.create('segment', [P,B], {strokeColor: 'black'});\nboard.create('segment', [O,A], {strokeColor: 'red', dash: 2});\nboard.create('segment', [O,B], {strokeColor: 'red', dash: 2});\nboard.create('segment', [P,X], {strokeColor: 'red', dash: 2});\nboard.create('angle', [O,P,A], {radius: 1, name: 'α', label: {autoPosition: false, offset: [0, 0]}});\nboard.create('angle', [B,P,O], {radius: 1.5, name: 'β', label: {autoPosition: false, offset: [0, 0]}});\nboard.unsuspendUpdate();"
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-13a-q8",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The converse of Thales' theorem is established by proving the following result: *The midpoint of the hypotenuse of a right-angled triangle is equidistant from the three vertices of the triangle*.\n\nLet \\(\\triangle ABP\\) be right-angled at \\(P\\), and let \\(O\\) be the midpoint of the hypotenuse \\(AB\\). Draw \\(PO\\) and produce it to \\(Q\\) so that \\(PO = OQ\\). Draw \\(AQ\\) and \\(BQ\\).\n\n**a)** Explain why \\(APBQ\\) is a parallelogram.\n**b)** Hence, explain why \\(APBQ\\) is a rectangle.\n**c)** Hence, explain why \\(AO = BO = PO\\) and why the circle with diameter \\(AB\\) passes through \\(P\\).",
    "answer": "",
    "hint": "Use the properties of quadrilaterals based on their diagonals.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(AO = OB \\text{ (given, midpoint)}\nPO = OQ \\text{ (by construction)}\n\\text{Diagonals bisect each other } \\Rightarrow APBQ \\text{ is a parallelogram}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              6,
              6,
              -1
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "point",
                "id": "P",
                "coords": [
                  0,
                  0
                ],
                "name": "P",
                "color": "#64748b",
                "label": {
                  "offset": [
                    0,
                    -12
                  ]
                }
              },
              {
                "type": "point",
                "id": "A",
                "coords": [
                  5,
                  0
                ],
                "name": "A",
                "color": "#64748b",
                "label": {
                  "offset": [
                    0,
                    -12
                  ]
                }
              },
              {
                "type": "point",
                "id": "B",
                "coords": [
                  0,
                  4
                ],
                "name": "B",
                "color": "#64748b",
                "label": {
                  "offset": [
                    0,
                    12
                  ]
                }
              },
              {
                "type": "point",
                "id": "Q",
                "coords": [
                  5,
                  4
                ],
                "name": "Q",
                "color": "#64748b",
                "label": {
                  "offset": [
                    0,
                    12
                  ]
                }
              },
              {
                "type": "point",
                "id": "O",
                "coords": [
                  2.5,
                  2
                ],
                "name": "O",
                "color": "red",
                "label": {
                  "offset": [
                    0,
                    12
                  ]
                }
              },
              {
                "type": "segment",
                "from": "A",
                "to": "B"
              },
              {
                "type": "segment",
                "from": "P",
                "to": "Q",
                "dash": 2,
                "color": "red"
              },
              {
                "type": "segment",
                "from": "P",
                "to": "A"
              },
              {
                "type": "segment",
                "from": "P",
                "to": "B"
              },
              {
                "type": "segment",
                "from": "A",
                "to": "Q",
                "dash": 2,
                "color": "red"
              },
              {
                "type": "segment",
                "from": "B",
                "to": "Q",
                "dash": 2,
                "color": "red"
              },
              {
                "type": "rightangle",
                "points": [
                  "B",
                  "P",
                  "A"
                ],
                "size": 0.3
              },
              {
                "type": "segment",
                "id": "ao",
                "from": "A",
                "to": "O",
                "color": "none"
              },
              {
                "type": "segment",
                "id": "ob",
                "from": "O",
                "to": "B",
                "color": "none"
              },
              {
                "type": "segment",
                "id": "po",
                "from": "P",
                "to": "O",
                "color": "none"
              },
              {
                "type": "segment",
                "id": "oq",
                "from": "O",
                "to": "Q",
                "color": "none"
              },
              {
                "type": "tick",
                "segment": "ao"
              },
              {
                "type": "tick",
                "segment": "ob"
              },
              {
                "type": "tick",
                "segment": "po",
                "count": 2
              },
              {
                "type": "tick",
                "segment": "oq",
                "count": 2
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\angle APB = 90^\\circ \\text{ (given)}\n\\text{A parallelogram with a right angle is a rectangle.}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Diagonals of a rectangle are equal: } AB = PQ\n\\text{Halves are equal: } AO = BO = PO = OQ\n\\text{Since } AO = BO = PO, text{ the circle with centre } O \\text{ and radius } AO \\text{ passes through } P.\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          6,
          6,
          -1
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "point",
            "id": "P",
            "coords": [
              0,
              0
            ],
            "name": "P",
            "color": "#64748b",
            "label": {
              "offset": [
                0,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "coords": [
              5,
              0
            ],
            "name": "A",
            "color": "#64748b",
            "label": {
              "offset": [
                0,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              0,
              4
            ],
            "name": "B",
            "color": "#64748b",
            "label": {
              "offset": [
                0,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "coords": [
              5,
              4
            ],
            "name": "Q",
            "color": "#64748b",
            "label": {
              "offset": [
                0,
                12
              ]
            }
          },
          {
            "type": "point",
            "id": "O",
            "coords": [
              2.5,
              2
            ],
            "name": "O",
            "color": "red",
            "label": {
              "offset": [
                0,
                12
              ]
            }
          },
          {
            "type": "segment",
            "from": "A",
            "to": "B"
          },
          {
            "type": "segment",
            "from": "P",
            "to": "Q",
            "dash": 2,
            "color": "red"
          },
          {
            "type": "segment",
            "from": "P",
            "to": "A"
          },
          {
            "type": "segment",
            "from": "P",
            "to": "B"
          },
          {
            "type": "segment",
            "from": "A",
            "to": "Q",
            "dash": 2,
            "color": "red"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "Q",
            "dash": 2,
            "color": "red"
          },
          {
            "type": "rightangle",
            "points": [
              "B",
              "P",
              "A"
            ],
            "size": 0.3
          },
          {
            "type": "segment",
            "id": "ao",
            "from": "A",
            "to": "O",
            "color": "none"
          },
          {
            "type": "segment",
            "id": "ob",
            "from": "O",
            "to": "B",
            "color": "none"
          },
          {
            "type": "segment",
            "id": "po",
            "from": "P",
            "to": "O",
            "color": "none"
          },
          {
            "type": "segment",
            "id": "oq",
            "from": "O",
            "to": "Q",
            "color": "none"
          },
          {
            "type": "tick",
            "segment": "ao"
          },
          {
            "type": "tick",
            "segment": "ob"
          },
          {
            "type": "tick",
            "segment": "po",
            "count": 2
          },
          {
            "type": "tick",
            "segment": "oq",
            "count": 2
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "y10-13a-q9",
    "topicId": "y10-13a",
    "c": "13A",
    "t": "Angles at the centre and the circumference",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "*(An application of the angle at the centre and circumference theorem)*\n\nA horse is travelling around a circular track at a constant speed. A punter standing at the very edge of the track is following him with binoculars. Explain why the punter's binoculars are rotating at a constant rate.",
    "answer": "",
    "hint": "Relate the horse's movement to the angle at the centre, and then use the theorem to relate it to the angle at the circumference.",
    "solution": "",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Angles at the centre and the circumference: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\text{Constant speed means the arc length grows at a constant rate.}\n\\text{Arc length is proportional to the central angle } \\angle AOH.\n\\text{Therefore, } \\angle AOH \\text{ increases at a constant rate.}\\)",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -6,
              6,
              6,
              -6
            ],
            "boardOptions": {
              "axis": false,
              "keepaspectratio": true,
              "showNavigation": false
            },
            "elements": [
              {
                "type": "point",
                "id": "O",
                "coords": [
                  0,
                  0
                ],
                "name": "O (Centre)",
                "color": "red",
                "label": {
                  "offset": [
                    8,
                    8
                  ]
                }
              },
              {
                "type": "circle",
                "id": "c1",
                "center": "O",
                "radius": 5
              },
              {
                "type": "point",
                "id": "P",
                "on": "c1",
                "angle": 270,
                "name": "P (Punter)",
                "color": "#64748b",
                "label": {
                  "offset": [
                    0,
                    -12
                  ]
                }
              },
              {
                "type": "point",
                "id": "A",
                "on": "c1",
                "angle": 0,
                "name": "A (Start)",
                "color": "#64748b",
                "label": {
                  "offset": [
                    12,
                    0
                  ]
                }
              },
              {
                "type": "point",
                "id": "H",
                "on": "c1",
                "angle": 60,
                "name": "H (Horse)",
                "color": "#10b981",
                "label": {
                  "offset": [
                    6,
                    12
                  ]
                }
              },
              {
                "type": "segment",
                "from": "O",
                "to": "A",
                "dash": 2,
                "color": "#9ca3af"
              },
              {
                "type": "segment",
                "from": "O",
                "to": "H",
                "dash": 2,
                "color": "#9ca3af"
              },
              {
                "type": "segment",
                "from": "P",
                "to": "A",
                "dash": 2,
                "color": "#9ca3af"
              },
              {
                "type": "segment",
                "from": "P",
                "to": "H",
                "lastArrow": true
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "O",
                  "H"
                ],
                "name": "2θ",
                "radius": 1,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              },
              {
                "type": "angle",
                "points": [
                  "A",
                  "P",
                  "H"
                ],
                "name": "θ",
                "radius": 1.5,
                "label": {
                  "offset": [
                    0,
                    0
                  ]
                }
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\angle APH = \\frac{1}{2} \\angle AOH\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\text{Since } \\angle AOH \\text{ changes at a constant rate, } \\frac{1}{2}\\angle AOH \\text{ also changes at a constant rate.}\n\\text{Thus, the binoculars rotate at a constant rate.}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: . Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "",
        "graphData": null
      }
    ],
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -6,
          6,
          6,
          -6
        ],
        "boardOptions": {
          "axis": false,
          "keepaspectratio": true,
          "showNavigation": false
        },
        "elements": [
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O (Centre)",
            "color": "red",
            "label": {
              "offset": [
                8,
                8
              ]
            }
          },
          {
            "type": "circle",
            "id": "c1",
            "center": "O",
            "radius": 5
          },
          {
            "type": "point",
            "id": "P",
            "on": "c1",
            "angle": 270,
            "name": "P (Punter)",
            "color": "#64748b",
            "label": {
              "offset": [
                0,
                -12
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "on": "c1",
            "angle": 0,
            "name": "A (Start)",
            "color": "#64748b",
            "label": {
              "offset": [
                12,
                0
              ]
            }
          },
          {
            "type": "point",
            "id": "H",
            "on": "c1",
            "angle": 60,
            "name": "H (Horse)",
            "color": "#10b981",
            "label": {
              "offset": [
                6,
                12
              ]
            }
          },
          {
            "type": "segment",
            "from": "O",
            "to": "A",
            "dash": 2,
            "color": "#9ca3af"
          },
          {
            "type": "segment",
            "from": "O",
            "to": "H",
            "dash": 2,
            "color": "#9ca3af"
          },
          {
            "type": "segment",
            "from": "P",
            "to": "A",
            "dash": 2,
            "color": "#9ca3af"
          },
          {
            "type": "segment",
            "from": "P",
            "to": "H",
            "lastArrow": true
          },
          {
            "type": "angle",
            "points": [
              "A",
              "O",
              "H"
            ],
            "name": "2θ",
            "radius": 1,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "angle",
            "points": [
              "A",
              "P",
              "H"
            ],
            "name": "θ",
            "radius": 1.5,
            "label": {
              "offset": [
                0,
                0
              ]
            }
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": true
  }
];
