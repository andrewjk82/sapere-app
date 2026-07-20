export const Y10_12C_APP_QUESTIONS = [
  {
    "id": "y10-12c-app-q7a",
    "topicId": "y10-12c-app",
    "c": "12C(Apps)",
    "t": "Applications of Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Two hikers, Paul and Sayo, are both looking at a distant landmark. From Paul, the bearing of the landmark is \\(222^\\circ\\mathrm{T}\\) and, from Sayo, the bearing of the landmark is \\(300^\\circ\\mathrm{T}\\). If Sayo is standing \\(800\\) m due south of Paul, find, correct to the nearest metre, the distance from Paul to the landmark.",
    "opts": [
      "\\(-708\\)",
      "\\(707\\)",
      "\\(708\\)",
      "\\(709\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Draw a triangle with Paul, Sayo, and the landmark. Find the interior angles using the bearings.",
    "solution": "The correct answer is \\(708\\).",
    "solutionSteps": [
      {
        "explanation": "Let \\(P\\) be Paul, \\(S\\) be Sayo, and \\(L\\) be the landmark. \\(S\\) is due south of \\(P\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or mis-copied value, so re-check before continuing.",
        "workingOut": "\\(PS = 800\\)",
        "graphData": null
      },
      {
        "explanation": "The bearing of \\(L\\) from \\(P\\) is \\(222^\\circ\\). The angle inside \\(\\triangle PSL\\) at \\(P\\) is \\(222^\\circ - 180^\\circ = 42^\\circ\\).",
        "workingOut": "\\(\\angle SPL = 42^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "The bearing of \\(L\\) from \\(S\\) is \\(300^\\circ\\). The angle inside \\(\\triangle PSL\\) at \\(S\\) is \\(360^\\circ - 300^\\circ = 60^\\circ\\).",
        "workingOut": "\\(\\angle PSL = 60^\\circ\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-12c-app-q7b",
    "topicId": "y10-12c-app",
    "c": "12C(Apps)",
    "t": "Applications of Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Two hikers, Paul and Sayo, are both looking at a distant landmark. From Paul, the bearing of the landmark is \\(222^\\circ\\mathrm{T}\\) and, from Sayo, the bearing of the landmark is \\(300^\\circ\\mathrm{T}\\). If Sayo is standing \\(800\\) m due south of Paul, find, correct to the nearest metre, the distance from Sayo to the landmark.",
    "opts": [
      "\\(-547\\)",
      "\\(546\\)",
      "\\(547\\)",
      "\\(548\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the sine rule in the triangle formed by Paul, Sayo, and the landmark.",
    "solution": "The correct answer is \\(547\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Applications of Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\frac{SL}{\\sin(42^\\circ)} = \\frac{800}{\\sin(78^\\circ)}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(SL = \\frac{800 \\sin(42^\\circ)}{\\sin(78^\\circ)} \\approx 547.3 \\implies 547\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(547\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 547. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(547\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-12c-app-q8a",
    "topicId": "y10-12c-app",
    "c": "12C(Apps)",
    "t": "Applications of Trigonometry",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "An archaeologist wishes to determine the height of an ancient temple. From a point \\(A\\) at ground level, she measures the angle of elevation of \\(V\\), the top of the temple, to be \\(37^\\circ\\). She then walks \\(100\\) m towards the temple to a point \\(B\\). From here, the angle of elevation of \\(V\\) from ground level is \\(64^\\circ\\).\n\nFind \\angle AVB.",
    "opts": [
      "\\(-27^\\circ\\)",
      "\\(27^\\circ\\)",
      "\\(27^\\circ + 1\\)",
      "\\(37^\\circ\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "Analyze the non-right-angled triangle \\(\\triangle AVB\\) first, then the right-angled triangle \\(\\triangle VOB\\).",
    "solution": "The correct answer is \\(27^\\circ\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Applications of Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\angle VBA = 180^\\circ - 64^\\circ = 116^\\circ \\implies \\angle AVB = 180^\\circ - 116^\\circ - 37^\\circ = 27^\\circ\\)",
        "graphData": {
          "geometry": {
            "width": 300,
            "points": {
              "A": [
                0,
                0
              ],
              "B": [
                100,
                0
              ],
              "O": [
                164.5,
                0
              ],
              "V": [
                164.5,
                119.1
              ]
            },
            "segments": [
              {
                "from": "A",
                "to": "O"
              },
              {
                "from": "O",
                "to": "V"
              },
              {
                "from": "V",
                "to": "A"
              },
              {
                "from": "V",
                "to": "B"
              }
            ],
            "sideLabels": [
              {
                "between": [
                  "A",
                  "B"
                ],
                "text": "100 m",
                "labelPos": [
                  50,
                  -10
                ]
              }
            ],
            "angles": [
              {
                "at": "A",
                "label": "37°"
              },
              {
                "at": "B",
                "label": "64°"
              },
              {
                "at": "O",
                "right": true
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
        "workingOut": "\\(27^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 27^\\circ. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(27^\\circ\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            100,
            0
          ],
          "O": [
            164.5,
            0
          ],
          "V": [
            164.5,
            119.1
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "O"
          },
          {
            "from": "O",
            "to": "V"
          },
          {
            "from": "V",
            "to": "A"
          },
          {
            "from": "V",
            "to": "B"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "100 m",
            "labelPos": [
              50,
              -10
            ]
          }
        ],
        "angles": [
          {
            "at": "A",
            "label": "37°"
          },
          {
            "at": "B",
            "label": "64°"
          },
          {
            "at": "O",
            "right": true
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-12c-app-q8b",
    "topicId": "y10-12c-app",
    "c": "12C(Apps)",
    "t": "Applications of Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "An archaeologist wishes to determine the height of an ancient temple. From a point \\(A\\) at ground level, she measures the angle of elevation of \\(V\\), the top of the temple, to be \\(37^\\circ\\). She then walks \\(100\\) m towards the temple to a point \\(B\\). From here, the angle of elevation of \\(V\\) from ground level is \\(64^\\circ\\).\n\nFind VB, correct to two decimal places.",
    "opts": [
      "\\(-132.56\\)",
      "\\(131.56\\)",
      "\\(132.56\\)",
      "\\(133.56\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Analyze the non-right-angled triangle \\(\\triangle AVB\\) first, then the right-angled triangle \\(\\triangle VOB\\).",
    "solution": "The correct answer is \\(132.56\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Applications of Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\frac{VB}{\\sin(37^\\circ)} = \\frac{100}{\\sin(27^\\circ)}\\)",
        "graphData": {
          "geometry": {
            "width": 300,
            "points": {
              "A": [
                0,
                0
              ],
              "B": [
                100,
                0
              ],
              "O": [
                164.5,
                0
              ],
              "V": [
                164.5,
                119.1
              ]
            },
            "segments": [
              {
                "from": "A",
                "to": "O"
              },
              {
                "from": "O",
                "to": "V"
              },
              {
                "from": "V",
                "to": "A"
              },
              {
                "from": "V",
                "to": "B"
              }
            ],
            "sideLabels": [
              {
                "between": [
                  "A",
                  "B"
                ],
                "text": "100 m",
                "labelPos": [
                  50,
                  -10
                ]
              }
            ],
            "angles": [
              {
                "at": "A",
                "label": "37°"
              },
              {
                "at": "B",
                "label": "64°"
              },
              {
                "at": "O",
                "right": true
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(VB = \\frac{100 \\sin(37^\\circ)}{\\sin(27^\\circ)} \\approx 132.56\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(132.56\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 132.56. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(132.56\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            100,
            0
          ],
          "O": [
            164.5,
            0
          ],
          "V": [
            164.5,
            119.1
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "O"
          },
          {
            "from": "O",
            "to": "V"
          },
          {
            "from": "V",
            "to": "A"
          },
          {
            "from": "V",
            "to": "B"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "100 m",
            "labelPos": [
              50,
              -10
            ]
          }
        ],
        "angles": [
          {
            "at": "A",
            "label": "37°"
          },
          {
            "at": "B",
            "label": "64°"
          },
          {
            "at": "O",
            "right": true
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-12c-app-q8c",
    "topicId": "y10-12c-app",
    "c": "12C(Apps)",
    "t": "Applications of Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "An archaeologist wishes to determine the height of an ancient temple. From a point \\(A\\) at ground level, she measures the angle of elevation of \\(V\\), the top of the temple, to be \\(37^\\circ\\). She then walks \\(100\\) m towards the temple to a point \\(B\\). From here, the angle of elevation of \\(V\\) from ground level is \\(64^\\circ\\).\n\nFind OV, the height of the temple, to the nearest metre.",
    "opts": [
      "\\(-119\\)",
      "\\(118\\)",
      "\\(119\\)",
      "\\(120\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Analyze the non-right-angled triangle \\(\\triangle AVB\\) first, then the right-angled triangle \\(\\triangle VOB\\).",
    "solution": "The correct answer is \\(119\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Applications of Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\sin(64^\\circ) = \\frac{OV}{VB} = \\frac{OV}{132.56}\\)",
        "graphData": {
          "geometry": {
            "width": 300,
            "points": {
              "A": [
                0,
                0
              ],
              "B": [
                100,
                0
              ],
              "O": [
                164.5,
                0
              ],
              "V": [
                164.5,
                119.1
              ]
            },
            "segments": [
              {
                "from": "A",
                "to": "O"
              },
              {
                "from": "O",
                "to": "V"
              },
              {
                "from": "V",
                "to": "A"
              },
              {
                "from": "V",
                "to": "B"
              }
            ],
            "sideLabels": [
              {
                "between": [
                  "A",
                  "B"
                ],
                "text": "100 m",
                "labelPos": [
                  50,
                  -10
                ]
              }
            ],
            "angles": [
              {
                "at": "A",
                "label": "37°"
              },
              {
                "at": "B",
                "label": "64°"
              },
              {
                "at": "O",
                "right": true
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(OV = 132.56 \\sin(64^\\circ) \\approx 119.14 \\implies 119\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(119\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 119. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(119\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            100,
            0
          ],
          "O": [
            164.5,
            0
          ],
          "V": [
            164.5,
            119.1
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "O"
          },
          {
            "from": "O",
            "to": "V"
          },
          {
            "from": "V",
            "to": "A"
          },
          {
            "from": "V",
            "to": "B"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "100 m",
            "labelPos": [
              50,
              -10
            ]
          }
        ],
        "angles": [
          {
            "at": "A",
            "label": "37°"
          },
          {
            "at": "B",
            "label": "64°"
          },
          {
            "at": "O",
            "right": true
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-12c-app-q9",
    "topicId": "y10-12c-app",
    "c": "12C(Apps)",
    "t": "Applications of Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A hillside is inclined at \\(26^\\circ\\) to the horizontal. From the bottom of the hill, Alex observes a vertical tree whose base is \\(40\\) m up the hill from the point where Alex is standing. If the angle of elevation of the top of the tree is \\(43^\\circ\\) from the point where Alex is standing, find the height of the tree, correct to the nearest metre.",
    "opts": [
      "\\(-16\\)",
      "\\(15\\)",
      "\\(16\\)",
      "\\(17\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the sine rule in the triangle formed by Alex, the base of the tree, and the top of the tree. Find the interior angles.",
    "solution": "The correct answer is \\(16\\).",
    "solutionSteps": [
      {
        "explanation": "Let \\(A\\) be Alex, \\(B\\) be the base of the tree, and \\(T\\) be the top of the tree. The tree is vertical.",
        "workingOut": "\\(16\\)",
        "graphData": null
      },
      {
        "explanation": "In \\(\\triangle ABT\\), \\(AB = 40\\). The angle of elevation to \\(T\\) is \\(43^\\circ\\), and the hill incline is \\(26^\\circ\\). Therefore, the angle inside the triangle at \\(A\\) is \\(43^\\circ - 26^\\circ = 17^\\circ\\).",
        "workingOut": "\\(\\angle TAB = 17^\\circ\\)",
        "graphData": null
      },
      {
        "explanation": "The tree makes an angle with the horizontal of \\(90^\\circ\\). The interior angle at \\(B\\) is the angle between the hill and the vertical tree: \\(90^\\circ + 26^\\circ = 116^\\circ\\).",
        "workingOut": "\\(\\angle ABT = 116^\\circ\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-12c-app-q10",
    "topicId": "y10-12c-app",
    "c": "12C(Apps)",
    "t": "Applications of Trigonometry",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find \\(h\\), correct to the nearest centimetre.",
    "opts": [
      "\\(-711\\)",
      "\\(710\\)",
      "\\(711\\)",
      "\\(712\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Set up equations for \\(h\\) using the two right-angled triangles \\(\\triangle SPR\\) and \\(\\triangle SQR\\). Convert the final answer to centimetres.",
    "solution": "The correct answer is \\(711\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Applications of Trigonometry: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\tan(72^\\circ) = \\frac{h}{QR} \\implies QR = \\frac{h}{\\tan(72^\\circ)}\\)",
        "graphData": {
          "geometry": {
            "width": 300,
            "points": {
              "P": [
                0,
                0
              ],
              "Q": [
                100,
                0
              ],
              "R": [
                123,
                0
              ],
              "S": [
                123,
                71.1
              ]
            },
            "segments": [
              {
                "from": "P",
                "to": "R"
              },
              {
                "from": "R",
                "to": "S"
              },
              {
                "from": "S",
                "to": "P"
              },
              {
                "from": "S",
                "to": "Q"
              }
            ],
            "sideLabels": [
              {
                "between": [
                  "P",
                  "Q"
                ],
                "text": "10 m",
                "labelPos": [
                  50,
                  -15
                ]
              },
              {
                "between": [
                  "S",
                  "R"
                ],
                "text": "$h$ m",
                "labelPos": [
                  135,
                  35
                ]
              }
            ],
            "angles": [
              {
                "at": "P",
                "label": "30°"
              },
              {
                "at": "Q",
                "label": "72°"
              },
              {
                "at": "R",
                "right": true
              }
            ]
          }
        }
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\tan(30^\\circ) = \\frac{h}{10 + QR}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\tan(30^\\circ) = \\frac{h}{10 + \\frac{h}{\\tan(72^\\circ)}}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 711. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(711\\)",
        "graphData": null
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "P": [
            0,
            0
          ],
          "Q": [
            100,
            0
          ],
          "R": [
            123,
            0
          ],
          "S": [
            123,
            71.1
          ]
        },
        "segments": [
          {
            "from": "P",
            "to": "R"
          },
          {
            "from": "R",
            "to": "S"
          },
          {
            "from": "S",
            "to": "P"
          },
          {
            "from": "S",
            "to": "Q"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "P",
              "Q"
            ],
            "text": "10 m",
            "labelPos": [
              50,
              -15
            ]
          },
          {
            "between": [
              "S",
              "R"
            ],
            "text": "$h$ m",
            "labelPos": [
              135,
              35
            ]
          }
        ],
        "angles": [
          {
            "at": "P",
            "label": "30°"
          },
          {
            "at": "Q",
            "label": "72°"
          },
          {
            "at": "R",
            "right": true
          }
        ]
      }
    },
    "isNew": true,
    "requiresManualGrading": false
  }
];
