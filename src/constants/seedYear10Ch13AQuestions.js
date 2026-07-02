export const Y10_CH13A_QUESTIONS = [
  {
    "id": "y10-13a-q2a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma (e.g. 30, 40).",
    "a": "90, 75",
    "solution": "Since $AB$ is a diameter, the angle in a semicircle is a right angle, so $\\alpha = 90^\\circ$.\nIn $\\triangle PAB$, the sum of angles is $180^\\circ$, so $\\beta = 180^\\circ - 90^\\circ - 15^\\circ = 75^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "Since \\(AB\\) is a diameter, the angle in a semicircle is a right angle, so \\(\\alpha = 90^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In \\(\\triangle PAB\\), the sum of angles is \\(180^\\circ\\), so \\(\\beta = 180^\\circ - 90^\\circ - 15^\\circ = 75^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q2b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "90",
    "solution": "Since $PQ$ is a diameter, the angle in a semicircle is a right angle. Therefore, the angle at $T$ is $90^\\circ$, so $\\theta = 90^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "Since \\(PQ\\) is a diameter, the angle in a semicircle is a right angle. Therefore, the angle at \\(T\\) is \\(90^\\circ\\), so \\(\\theta = 90^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q2c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "90",
    "solution": "Since $JL$ is a diameter (passing through the centre $O$), the angle in a semicircle is a right angle. Therefore, the angle at $K$ is $90^\\circ$, so $\\theta = 90^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "Since \\(JL\\) is a diameter (passing through the centre \\(O\\)), the angle in a semicircle is a right angle. Therefore, the angle at \\(K\\) is \\(90^\\circ\\), so \\(\\theta = 90^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q2d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, $\\gamma$, and $\\theta$. Enter your answer as four numbers separated by commas (e.g. 10, 20, 30, 40).",
    "a": "40, 20, 70, 140",
    "solution": "Since $RS$ is a diameter, $\\angle RTS = 90^\\circ$.\nIn $\\triangle OST$, $OS = OT$ (radii), so it is isosceles. Thus $\\gamma = 70^\\circ$.\nIn right $\\triangle RTS$, $\\beta = 90^\\circ - 70^\\circ = 20^\\circ$.\nIn isosceles $\\triangle OST$, $\\alpha = 180^\\circ - 2(70^\\circ) = 40^\\circ$.\nAngles on a straight line: $\\theta = 180^\\circ - \\alpha = 140^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "Since \\(RS\\) is a diameter, \\(\\angle RTS = 90^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In \\(\\triangle OST\\), \\(OS = OT\\) (radii), so it is isosceles. Thus \\(\\gamma = 70^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In right \\(\\triangle RTS\\), \\(\\beta = 90^\\circ - 70^\\circ = 20^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In isosceles \\(\\triangle OST\\), \\(\\alpha = 180^\\circ - 2(70^\\circ) = 40^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Angles on a straight line: \\(\\theta = 180^\\circ - \\alpha = 140^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q2e",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "90, 35",
    "solution": "Since $XY$ is a diameter, $\\alpha = \\angle XZY = 90^\\circ$.\nIn isosceles $\\triangle OYZ$, $\\angle OYZ = \\angle OZY = (180^\\circ - 70^\\circ)/2 = 55^\\circ$.\nIn $\\triangle XYZ$, $\\beta = 180^\\circ - 90^\\circ - 55^\\circ = 35^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "Since \\(XY\\) is a diameter, \\(\\alpha = \\angle XZY = 90^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In isosceles \\(\\triangle OYZ\\), \\(\\angle OYZ = \\angle OZY = (180^\\circ - 70^\\circ)/2 = 55^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In \\(\\triangle XYZ\\), \\(\\beta = 180^\\circ - 90^\\circ - 55^\\circ = 35^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q2f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "80",
    "solution": "Since $AOB$ is a straight line, $\\angle AOC = 180^\\circ - 160^\\circ = 20^\\circ$.\nIn isosceles $\\triangle AOC$, $\\theta = (180^\\circ - 20^\\circ)/2 = 80^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "Since \\(AOB\\) is a straight line, \\(\\angle AOC = 180^\\circ - 160^\\circ = 20^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In isosceles \\(\\triangle AOC\\), \\(\\theta = (180^\\circ - 20^\\circ)/2 = 80^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q3a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\alpha$.",
    "a": "27.5",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc. $\\alpha = 55^\\circ / 2 = 27.5^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The angle at the centre is twice the angle at the circumference subtended by the same arc. \\(\\alpha = 55^\\circ / 2 = 27.5^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q3b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\gamma$.",
    "a": "44",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc. $\\gamma = 88^\\circ / 2 = 44^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The angle at the centre is twice the angle at the circumference subtended by the same arc. \\(\\gamma = 88^\\circ / 2 = 44^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q3c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\alpha$.",
    "a": "190",
    "solution": "The reflex angle at the centre is twice the angle at the circumference. $\\alpha = 2 \\times 95^\\circ = 190^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The reflex angle at the centre is twice the angle at the circumference. \\(\\alpha = 2 \\times 95^\\circ = 190^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q3d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\gamma$.",
    "a": "100",
    "solution": "The angle at the circumference is half the reflex angle at the centre. $\\gamma = 200^\\circ / 2 = 100^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The angle at the circumference is half the reflex angle at the centre. \\(\\gamma = 200^\\circ / 2 = 100^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q3e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "129",
    "solution": "The angle at the circumference is half the reflex angle at the centre. $\\theta = 258^\\circ / 2 = 129^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The angle at the circumference is half the reflex angle at the centre. \\(\\theta = 258^\\circ / 2 = 129^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q3f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\alpha$.",
    "a": "40",
    "solution": "The angle at the circumference is half the angle at the centre. $\\alpha = 80^\\circ / 2 = 40^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The angle at the circumference is half the angle at the centre. \\(\\alpha = 80^\\circ / 2 = 40^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q3g",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\beta$.",
    "a": "30",
    "solution": "The angle at the circumference is half the angle at the centre subtended by the same arc. $\\beta = 60^\\circ / 2 = 30^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The angle at the circumference is half the angle at the centre subtended by the same arc. \\(\\beta = 60^\\circ / 2 = 30^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q3h",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\gamma$.",
    "a": "100",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc. $\\gamma = 2 \\times 50^\\circ = 100^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The angle at the centre is twice the angle at the circumference subtended by the same arc. \\(\\gamma = 2 \\times 50^\\circ = 100^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q3i",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "24",
    "solution": "The angle at the centre is twice the angle at the circumference. $\\theta = 2 \\times 12^\\circ = 24^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The angle at the centre is twice the angle at the circumference. \\(\\theta = 2 \\times 12^\\circ = 24^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q4a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "120, 60",
    "solution": "The reflex angle is $240^\\circ$. The obtuse angle at the centre is $\\alpha = 360^\\circ - 240^\\circ = 120^\\circ$.\n$\\beta$ is the angle at the circumference subtended by the minor arc, so $\\beta = 120^\\circ / 2 = 60^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The reflex angle is \\(240^\\circ\\). The obtuse angle at the centre is \\(\\alpha = 360^\\circ - 240^\\circ = 120^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\beta\\) is the angle at the circumference subtended by the minor arc, so \\(\\beta = 120^\\circ / 2 = 60^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q4b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "30",
    "solution": "The obtuse angle at the centre is $360^\\circ - 300^\\circ = 60^\\circ$.\nThe angle at the circumference is half the angle at the centre subtended by the same minor arc, so $\\theta = 60^\\circ / 2 = 30^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The obtuse angle at the centre is \\(360^\\circ - 300^\\circ = 60^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The angle at the circumference is half the angle at the centre subtended by the same minor arc, so \\(\\theta = 60^\\circ / 2 = 30^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q4c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Find the value of $\\theta$.",
    "a": "140",
    "solution": "The angle at the centre is twice the angle at the circumference subtended by the same arc.\n$\\theta = 2 \\times 70^\\circ = 140^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The angle at the centre is twice the angle at the circumference subtended by the same arc.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\theta = 2 \\times 70^\\circ = 140^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q4d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "40, 40",
    "solution": "The angle at the circumference is half the angle at the centre: $\\alpha = 80^\\circ / 2 = 40^\\circ$.\nAngles subtended by the same arc are equal, so $\\beta = \\alpha = 40^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The angle at the circumference is half the angle at the centre: \\(\\alpha = 80^\\circ / 2 = 40^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Angles subtended by the same arc are equal, so \\(\\beta = \\alpha = 40^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q4e",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\theta$. Enter your answer as two numbers separated by a comma.",
    "a": "20, 40",
    "solution": "Angles subtended by the same arc are equal, so $\\alpha = \\angle PSR = 20^\\circ$.\nThe angle at the centre is twice the angle at the circumference, so $\\theta = 2 \\times 20^\\circ = 40^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "Angles subtended by the same arc are equal, so \\(\\alpha = \\angle PSR = 20^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The angle at the centre is twice the angle at the circumference, so \\(\\theta = 2 \\times 20^\\circ = 40^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q4f",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "100, 20, 50",
    "solution": "In isosceles $\\triangle POQ$, $\\angle OPQ = (180^\\circ - 120^\\circ)/2 = 30^\\circ$.\n$\\angle PRQ = 120^\\circ / 2 = 60^\\circ$. We are given $\\angle ORQ = 40^\\circ$, so $\\angle ORP = 60^\\circ - 40^\\circ = 20^\\circ$.\nIn isosceles $\\triangle OQR$, $\\angle OQR = 40^\\circ$, so $\\alpha = \\angle ROQ = 180^\\circ - 80^\\circ = 100^\\circ$.\nIn isosceles $\\triangle OPR$, $\\beta = \\angle OPR = \\angle ORP = 20^\\circ$.\n$\\gamma = \\angle RPQ = \\angle OPQ + \\angle OPR = 30^\\circ + 20^\\circ = 50^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "In isosceles \\(\\triangle POQ\\), \\(\\angle OPQ = (180^\\circ - 120^\\circ)/2 = 30^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\angle PRQ = 120^\\circ / 2 = 60^\\circ\\). We are given \\(\\angle ORQ = 40^\\circ\\), so \\(\\angle ORP = 60^\\circ - 40^\\circ = 20^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In isosceles \\(\\triangle OQR\\), \\(\\angle OQR = 40^\\circ\\), so \\(\\alpha = \\angle ROQ = 180^\\circ - 80^\\circ = 100^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In isosceles \\(\\triangle OPR\\), \\(\\beta = \\angle OPR = \\angle ORP = 20^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\gamma = \\angle RPQ = \\angle OPQ + \\angle OPR = 30^\\circ + 20^\\circ = 50^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q4g",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "100, 200, 80",
    "solution": "The reflex angle at the centre is $\\beta = 360^\\circ - 160^\\circ = 200^\\circ$.\n$\\gamma$ subtends the minor arc $AB$, so $\\gamma = 160^\\circ / 2 = 80^\\circ$.\n$\\alpha$ subtends the major arc $AB$, so $\\alpha = \\beta / 2 = 200^\\circ / 2 = 100^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "The reflex angle at the centre is \\(\\beta = 360^\\circ - 160^\\circ = 200^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\gamma\\) subtends the minor arc \\(AB\\), so \\(\\gamma = 160^\\circ / 2 = 80^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\alpha\\) subtends the major arc \\(AB\\), so \\(\\alpha = \\beta / 2 = 200^\\circ / 2 = 100^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q4h",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$, $\\beta$, and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "60, 60, 120",
    "solution": "Since $AC$ and $BD$ pass through $O$, they are diameters. So $ABCD$ is a rectangle.\n$\\angle ADC = 90^\\circ$. In $\\triangle AOD$, $OA=OD$, so $\\angle ADO = 30^\\circ$, $\\angle AOD = 120^\\circ$.\n$\\gamma$ and $\\angle AOD$ are vertically opposite, so $\\gamma = 120^\\circ$.\n$\\angle DAB = 90^\\circ$. $\\alpha = 90^\\circ - 30^\\circ = 60^\\circ$.\nIn right $\\triangle DAB$, $\\beta = 90^\\circ - 30^\\circ = 60^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "Since \\(AC\\) and \\(BD\\) pass through \\(O\\), they are diameters. So \\(ABCD\\) is a rectangle.",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\angle ADC = 90^\\circ\\). In \\(\\triangle AOD\\), \\(OA=OD\\), so \\(\\angle ADO = 30^\\circ\\), \\(\\angle AOD = 120^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\gamma\\) and \\(\\angle AOD\\) are vertically opposite, so \\(\\gamma = 120^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\angle DAB = 90^\\circ\\). \\(\\alpha = 90^\\circ - 30^\\circ = 60^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In right \\(\\triangle DAB\\), \\(\\beta = 90^\\circ - 30^\\circ = 60^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q4i",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "45, 45",
    "solution": "Since $JL$ and $KM$ are perpendicular diameters, $\\triangle JOK$ is a right isosceles triangle ($OJ = OK$).\n$\\alpha = \\angle OJK = (180^\\circ - 90^\\circ) / 2 = 45^\\circ$.\nSimilarly, $\\beta = \\angle OKL = 45^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use circle theorems: angle at centre, angle in a semicircle, isosceles triangles from radii.",
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
    "solutionSteps": [
      {
        "explanation": "Since \\(JL\\) and \\(KM\\) are perpendicular diameters, \\(\\triangle JOK\\) is a right isosceles triangle (\\(OJ = OK\\)).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\alpha = \\angle OJK = (180^\\circ - 90^\\circ) / 2 = 45^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Similarly, \\(\\beta = \\angle OKL = 45^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q5a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma (e.g. 30, 40).",
    "a": "100, 20",
    "solution": "Since $AB \\parallel FG$, alternate interior angles are equal: $\\angle BFG = \\angle ABF = 10^\\circ$.\nThe angle in a semicircle is a right angle, so $\\angle AFB = 90^\\circ$.\nThus, $\\alpha = \\angle AFG = \\angle AFB + \\angle BFG = 90^\\circ + 10^\\circ = 100^\\circ$.\nThe angle $\\beta$ is the angle between chords $AG$ and $FB$. Angles subtended by arcs $AB$ ($180^\\circ$) and $FG$ ($140^\\circ$). The acute angle $\\beta = \\frac{1}{2}(180^\\circ - 140^\\circ) = 20^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the angle in a semicircle and alternate interior angles from parallel lines.",
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
    "solutionSteps": [
      {
        "explanation": "Since \\(AB \\parallel FG\\), alternate interior angles are equal: \\(\\angle BFG = \\angle ABF = 10^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The angle in a semicircle is a right angle, so \\(\\angle AFB = 90^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Thus, \\(\\alpha = \\angle AFG = \\angle AFB + \\angle BFG = 90^\\circ + 10^\\circ = 100^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The angle \\(\\beta\\) is the angle between chords \\(AG\\) and \\(FB\\). Angles subtended by arcs \\(AB\\) (\\(180^\\circ\\)) and \\(FG\\) (\\(140^\\circ\\)). The acute angle \\(\\beta = \\frac{1}{2}(180^\\circ - 140^\\circ) = 20^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q5b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$ and $\\beta$. Enter your answer as two numbers separated by a comma.",
    "a": "60, 30",
    "solution": "In $\\triangle OAP$, $OA = OP$ (radii) and $OA = AP$ (given). Thus $\\triangle OAP$ is equilateral, so $\\alpha = \\angle AOP = 60^\\circ$.\nSince $AOB$ is a straight line (diameter), $\\angle POB = 180^\\circ - 60^\\circ = 120^\\circ$.\nIn isosceles $\\triangle OPB$ ($OB = OP$ radii), $\\beta = \\angle OBP = (180^\\circ - 120^\\circ) / 2 = 30^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Look for an equilateral triangle formed by radii and a chord.",
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
    "solutionSteps": [
      {
        "explanation": "In \\(\\triangle OAP\\), \\(OA = OP\\) (radii) and \\(OA = AP\\) (given). Thus \\(\\triangle OAP\\) is equilateral, so \\(\\alpha = \\angle AOP = 60^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since \\(AOB\\) is a straight line (diameter), \\(\\angle POB = 180^\\circ - 60^\\circ = 120^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In isosceles \\(\\triangle OPB\\) (\\(OB = OP\\) radii), \\(\\beta = \\angle OBP = (180^\\circ - 120^\\circ) / 2 = 30^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q5c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$, $\\beta$ and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "40, 110, 140",
    "solution": "In isosceles $\\triangle ORP$ (radii $OR = OP$), $\\angle ORP = \\angle OPR = 20^\\circ$. So $\\gamma = \\angle POR = 180^\\circ - 40^\\circ = 140^\\circ$.\nSince $PQ \\parallel OR$, alternate interior angles give $\\angle QPR = \\angle ORP = 20^\\circ$.\nThus $\\alpha = \\angle OPQ = \\angle OPR + \\angle QPR = 20^\\circ + 20^\\circ = 40^\\circ$.\nThe angle $\\beta = \\angle PQR$ subtends the major arc $PR$ ($360^\\circ - 140^\\circ = 220^\\circ$), so $\\beta = 220^\\circ / 2 = 110^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use alternate interior angles and the angle subtended by the major arc.",
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
    "solutionSteps": [
      {
        "explanation": "In isosceles \\(\\triangle ORP\\) (radii \\(OR = OP\\)), \\(\\angle ORP = \\angle OPR = 20^\\circ\\). So \\(\\gamma = \\angle POR = 180^\\circ - 40^\\circ = 140^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since \\(PQ \\parallel OR\\), alternate interior angles give \\(\\angle QPR = \\angle ORP = 20^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Thus \\(\\alpha = \\angle OPQ = \\angle OPR + \\angle QPR = 20^\\circ + 20^\\circ = 40^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The angle \\(\\beta = \\angle PQR\\) subtends the major arc \\(PR\\) (\\(360^\\circ - 140^\\circ = 220^\\circ\\)), so \\(\\beta = 220^\\circ / 2 = 110^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q5d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$, $\\beta$ and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "120, 60, 70",
    "solution": "The angle at the circumference $\\angle BAC = 50^\\circ$ subtends arc $BC$, so $\\angle BOC = 2 \\times 50^\\circ = 100^\\circ$.\nWe are given $\\angle AOB = 140^\\circ$, so $\\alpha = \\angle AOC = 360^\\circ - 140^\\circ - 100^\\circ = 120^\\circ$.\nThe angle $\\beta = \\angle ABC$ subtends arc $AC$ (central angle $120^\\circ$), so $\\beta = 120^\\circ / 2 = 60^\\circ$.\nThe angle $\\gamma = \\angle ACB$ subtends arc $AB$ (central angle $140^\\circ$), so $\\gamma = 140^\\circ / 2 = 70^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the angle at the centre theorem for each of the three arcs.",
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
    "solutionSteps": [
      {
        "explanation": "The angle at the circumference \\(\\angle BAC = 50^\\circ\\) subtends arc \\(BC\\), so \\(\\angle BOC = 2 \\times 50^\\circ = 100^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "We are given \\(\\angle AOB = 140^\\circ\\), so \\(\\alpha = \\angle AOC = 360^\\circ - 140^\\circ - 100^\\circ = 120^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The angle \\(\\beta = \\angle ABC\\) subtends arc \\(AC\\) (central angle \\(120^\\circ\\)), so \\(\\beta = 120^\\circ / 2 = 60^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "The angle \\(\\gamma = \\angle ACB\\) subtends arc \\(AB\\) (central angle \\(140^\\circ\\)), so \\(\\gamma = 140^\\circ / 2 = 70^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q5e",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$, $\\beta$ and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "140, 80, 20",
    "solution": "Let $OQ$ and $PR$ be parallel. $\\angle POQ = 160^\\circ$. By alternate interior angles, $\\angle ORP = \\angle ROQ = \\gamma$.\nIn isosceles $\\triangle OPR$, $\\angle ORP = \\angle OPR = \\gamma$. In $\\triangle OQR$, $OQ = OR$, so $\\angle OQR = \\angle ORQ = \\beta$.\nFrom the parallel lines, $\\angle OQP + \\angle POQ = 180^\\circ$, etc. But more simply, if we set angles: $Q$ at $0^\\circ$, $P$ at $160^\\circ$, $PR$ horizontal $\\implies R$ is at $20^\\circ$.\nThen $\\alpha = \\angle POR = 160^\\circ - 20^\\circ = 140^\\circ$.\n$\\gamma = \\angle ORP = (180^\\circ - 140^\\circ)/2 = 20^\\circ$.\n$\\beta = \\angle OQR = (180^\\circ - 20^\\circ)/2 = 80^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the parallel lines to find alternate interior angles.",
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
    "solutionSteps": [
      {
        "explanation": "Let \\(OQ\\) and \\(PR\\) be parallel. \\(\\angle POQ = 160^\\circ\\). By alternate interior angles, \\(\\angle ORP = \\angle ROQ = \\gamma\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "In isosceles \\(\\triangle OPR\\), \\(\\angle ORP = \\angle OPR = \\gamma\\). In \\(\\triangle OQR\\), \\(OQ = OR\\), so \\(\\angle OQR = \\angle ORQ = \\beta\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "From the parallel lines, \\(\\angle OQP + \\angle POQ = 180^\\circ\\), etc. But more simply, if we set angles: \\(Q\\) at \\(0^\\circ\\), \\(P\\) at \\(160^\\circ\\), \\(PR\\) horizontal \\(\\implies R\\) is at \\(20^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Then \\(\\alpha = \\angle POR = 160^\\circ - 20^\\circ = 140^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\gamma = \\angle ORP = (180^\\circ - 140^\\circ)/2 = 20^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\beta = \\angle OQR = (180^\\circ - 20^\\circ)/2 = 80^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q5f",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the values of $\\alpha$, $\\beta$ and $\\gamma$. Enter your answer as three numbers separated by commas.",
    "a": "40, 40, 10",
    "solution": "The reflex $\\angle AOC = 200^\\circ$, so the interior $\\angle AOC = 360^\\circ - 200^\\circ = 160^\\circ$.\nSince $AB = BC$, the arcs are equal, and $\\angle AOB = \\angle BOC = (360^\\circ - 200^\\circ) / 2 = 100^\\circ$.\n$\\alpha = \\angle OAB$ in isosceles $\\triangle OAB$, so $\\alpha = (180^\\circ - 100^\\circ)/2 = 40^\\circ$.\n$\\beta = \\angle OBC$ in isosceles $\\triangle OBC$, so $\\beta = (180^\\circ - 100^\\circ)/2 = 40^\\circ$.\n$\\gamma = \\angle OCA$ in isosceles $\\triangle OAC$, so $\\gamma = (180^\\circ - 160^\\circ)/2 = 10^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Equal chords subtend equal angles at the centre.",
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
    "solutionSteps": [
      {
        "explanation": "The reflex \\(\\angle AOC = 200^\\circ\\), so the interior \\(\\angle AOC = 360^\\circ - 200^\\circ = 160^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "Since \\(AB = BC\\), the arcs are equal, and \\(\\angle AOB = \\angle BOC = (360^\\circ - 200^\\circ) / 2 = 100^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\alpha = \\angle OAB\\) in isosceles \\(\\triangle OAB\\), so \\(\\alpha = (180^\\circ - 100^\\circ)/2 = 40^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\beta = \\angle OBC\\) in isosceles \\(\\triangle OBC\\), so \\(\\beta = (180^\\circ - 100^\\circ)/2 = 40^\\circ\\).",
        "workingOut": "",
        "graphData": null
      },
      {
        "explanation": "\\(\\gamma = \\angle OCA\\) in isosceles \\(\\triangle OAC\\), so \\(\\gamma = (180^\\circ - 160^\\circ)/2 = 10^\\circ\\).",
        "workingOut": "",
        "graphData": null
      }
    ]
  },
  {
    "id": "y10-13a-q6a",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Thales' theorem states that: *An angle in a semicircle is a right angle*. This question develops Euclid's proof. Let $A$, $O$, $B$ form the diameter of a circle, and $P$ be a point on the circumference. Join $PO$, and produce $AP$ to $X$.\nLet $\\angle A = \\alpha$ and $\\angle B = \\beta$.\n\n**i)** Prove that $\\angle APB = \\alpha + \\beta$, and that $\\angle XPB = \\alpha + \\beta$.\n**ii)** Hence, prove that $\\alpha + \\beta = 90^\\circ$.",
    "solution": "**i)** In $\\triangle AOP$, $OA = OP$ (radii), so it is isosceles and $\\angle APO = \\angle PAO = \\alpha$.\nIn $\\triangle BOP$, $OB = OP$ (radii), so it is isosceles and $\\angle BPO = \\angle PBO = \\beta$.\nThus, the whole angle $\\angle APB = \\angle APO + \\angle BPO = \\alpha + \\beta$.\nThe exterior angle of $\\triangle APB$ at $P$ is $\\angle XPB$. By the exterior angle theorem on $\\triangle APB$, the exterior angle is the sum of the two opposite interior angles, so $\\angle XPB = \\angle PAB + \\angle PBA = \\alpha + \\beta$.\n\n**ii)** Angles on a straight line add to $180^\\circ$, so $\\angle APB + \\angle XPB = 180^\\circ$.\nSubstituting our expressions: $(\\alpha + \\beta) + (\\alpha + \\beta) = 180^\\circ$.\n$2(\\alpha + \\beta) = 180^\\circ$.\nTherefore, $\\alpha + \\beta = 90^\\circ$. Since $\\angle APB = \\alpha + \\beta$, we have $\\angle APB = 90^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the properties of isosceles triangles formed by radii, and the exterior angle theorem.",
    "solutionSteps": [
      {
        "explanation": "Use radii to form isosceles triangles and find the parts of angle APB.",
        "workingOut": "OA = OP \\Rightarrow \\angle APO = \\alpha\nOB = OP \\Rightarrow \\angle BPO = \\beta\n\\angle APB = \\angle APO + \\angle BPO = \\alpha + \\beta",
        "graphData": null
      },
      {
        "explanation": "Use the exterior angle theorem for triangle APB.",
        "workingOut": "\\text{Exterior } \\angle XPB = \\angle PAB + \\angle PBA = \\alpha + \\beta",
        "graphData": null
      },
      {
        "explanation": "Use the straight line APX to solve for the sum.",
        "workingOut": "\\angle APB + \\angle XPB = 180^\\circ\n(\\alpha + \\beta) + (\\alpha + \\beta) = 180^\\circ\n2(\\alpha + \\beta) = 180^\\circ \\implies \\alpha + \\beta = 90^\\circ",
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
    }
  },
  {
    "id": "y10-13a-q6b",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Thales' theorem states that: *An angle in a semicircle is a right angle*. This question develops an alternate proof.\nJoin $PO$ and produce it to a point $M$.\nLet $\\angle PAB = \\alpha$ and $\\angle PBA = \\beta$.\n\n**i)** Prove that $\\angle AOM = 2\\alpha$ and $\\angle BOM = 2\\beta$.\n**ii)** Hence, prove that $2\\alpha + 2\\beta = 180^\\circ$.\n**iii)** Deduce that $\\alpha + \\beta = 90^\\circ$ (and therefore $\\angle APB = 90^\\circ$).",
    "solution": "**i)** In $\\triangle AOP$, $OA = OP$ (radii), so $\\angle APO = \\angle PAO = \\alpha$.\nThe exterior angle of $\\triangle AOP$ at $O$ is $\\angle AOM$. By the exterior angle theorem, $\\angle AOM = \\angle OAP + \\angle APO = \\alpha + \\alpha = 2\\alpha$.\nSimilarly, in $\\triangle BOP$, $OB = OP$ (radii), so $\\angle BPO = \\angle PBO = \\beta$.\nThe exterior angle of $\\triangle BOP$ at $O$ is $\\angle BOM = \\angle OBP + \\angle BPO = \\beta + \\beta = 2\\beta$.\n\n**ii)** $AOB$ is a straight line (a diameter), so the angles on it sum to $180^\\circ$.\nTherefore, $\\angle AOM + \\angle BOM = 180^\\circ$.\nSubstituting our expressions: $2\\alpha + 2\\beta = 180^\\circ$.\n\n**iii)** Dividing the equation by 2 gives $\\alpha + \\beta = 90^\\circ$.\nSince $\\angle APB = \\angle APO + \\angle BPO = \\alpha + \\beta$, we deduce that $\\angle APB = 90^\\circ$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the exterior angle theorem for triangles AOP and BOP.",
    "solutionSteps": [
      {
        "explanation": "Use isosceles triangles and exterior angle theorem.",
        "workingOut": "\\triangle AOP \\text{ is isosceles} \\Rightarrow \\angle APO = \\alpha\n\\angle AOM = \\angle OAP + \\angle APO = 2\\alpha\n\\triangle BOP \\text{ is isosceles} \\Rightarrow \\angle BPO = \\beta\n\\angle BOM = \\angle OBP + \\angle BPO = 2\\beta",
        "graphData": null
      },
      {
        "explanation": "Use angles on a straight line.",
        "workingOut": "\\angle AOM + \\angle BOM = 180^\\circ\n2\\alpha + 2\\beta = 180^\\circ",
        "graphData": null
      },
      {
        "explanation": "Divide by 2 to find the final angle.",
        "workingOut": "\\alpha + \\beta = 90^\\circ\n\\angle APB = \\alpha + \\beta = 90^\\circ",
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
    }
  },
  {
    "id": "y10-13a-q7a",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre $O$ lies inside the angle $\\angle APB$, and the line $PO$ is produced to a point $X$ on the circle.\nLet $\\angle OPB = \\beta$ and $\\angle OPA = \\alpha$.\n\n**i)** Prove that $\\angle APB = \\alpha + \\beta$.\n**ii)** Prove that $\\angle AOB = 2\\alpha + 2\\beta = 2\\angle APB$.",
    "solution": "**i)** By looking at the diagram, the line segment $PO$ splits $\\angle APB$ into two adjacent angles, $\\angle OPA$ and $\\angle OPB$.\nThus, $\\angle APB = \\angle OPA + \\angle OPB = \\alpha + \\beta$.\n\n**ii)** Consider $\\triangle OPB$. Since $OP = OB$ (radii), the triangle is isosceles and $\\angle OBP = \\angle OPB = \\beta$.\nThe exterior angle $\\angle BOX$ equals the sum of the interior opposite angles: $\\angle BOX = \\angle OBP + \\angle OPB = \\beta + \\beta = 2\\beta$.\nSimilarly, in $\\triangle OPA$, $OP = OA$ (radii), so $\\angle OAP = \\angle OPA = \\alpha$.\nThe exterior angle $\\angle AOX = \\angle OAP + \\angle OPA = \\alpha + \\alpha = 2\\alpha$.\nThe total angle at the centre is $\\angle AOB = \\angle AOX + \\angle BOX = 2\\alpha + 2\\beta$.\nFactoring out 2 gives $\\angle AOB = 2(\\alpha + \\beta) = 2\\angle APB$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use isosceles triangles and the exterior angle theorem for each half of the angle.",
    "solutionSteps": [
      {
        "explanation": "Identify the angle at the circumference.",
        "workingOut": "\\angle APB = \\angle OPA + \\angle OPB = \\alpha + \\beta",
        "graphData": null
      },
      {
        "explanation": "Use the exterior angle theorem on the two isosceles triangles.",
        "workingOut": "\\triangle OPB \\text{ is isosceles} \\Rightarrow \\angle BOX = 2\\beta\n\\triangle OPA \\text{ is isosceles} \\Rightarrow \\angle AOX = 2\\alpha",
        "graphData": null
      },
      {
        "explanation": "Sum the angles at the centre.",
        "workingOut": "\\angle AOB = 2\\alpha + 2\\beta = 2(\\alpha + \\beta) = 2\\angle APB",
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
    }
  },
  {
    "id": "y10-13a-q7b",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre $O$ lies outside the angle $\\angle APB$, and the line $PO$ is produced to a point $X$ on the circle.\nLet $\\angle OPB = \\beta$ and $\\angle OPA = \\alpha$.\n\n**i)** Prove that $\\angle APB = \\beta - \\alpha$.\n**ii)** Prove that $\\angle AOB = 2(\\beta - \\alpha) = 2\\angle APB$.",
    "solution": "**i)** By looking at the diagram, the angle $\\angle APB$ is the difference between the larger angle $\\angle OPB$ and the smaller angle $\\angle OPA$.\nThus, $\\angle APB = \\angle OPB - \\angle OPA = \\beta - \\alpha$.\n\n**ii)** Consider $\\triangle OPB$. Since $OP = OB$ (radii), the triangle is isosceles and $\\angle OBP = \\angle OPB = \\beta$.\nThe exterior angle $\\angle XOB$ equals the sum of the interior opposite angles: $\\angle XOB = \\angle OBP + \\angle OPB = 2\\beta$.\nSimilarly, in $\\triangle OPA$, $OP = OA$ (radii), so $\\angle OAP = \\angle OPA = \\alpha$.\nThe exterior angle $\\angle XOA = \\angle OAP + \\angle OPA = 2\\alpha$.\nThe angle at the centre $\\angle AOB$ is the difference between the two exterior angles: $\\angle AOB = \\angle XOB - \\angle XOA = 2\\beta - 2\\alpha$.\nFactoring out 2 gives $\\angle AOB = 2(\\beta - \\alpha) = 2\\angle APB$.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use isosceles triangles and the exterior angle theorem, but this time subtract the angles.",
    "solutionSteps": [
      {
        "explanation": "Express angle APB as a difference.",
        "workingOut": "\\angle APB = \\angle OPB - \\angle OPA = \\beta - \\alpha",
        "graphData": null
      },
      {
        "explanation": "Use exterior angles for the two isosceles triangles.",
        "workingOut": "\\triangle OPB \\text{ is isosceles} \\Rightarrow \\angle XOB = 2\\beta\n\\triangle OPA \\text{ is isosceles} \\Rightarrow \\angle XOA = 2\\alpha",
        "graphData": null
      },
      {
        "explanation": "Subtract the exterior angles to find the centre angle.",
        "workingOut": "\\angle AOB = \\angle XOB - \\angle XOA = 2\\beta - 2\\alpha = 2(\\beta - \\alpha) = 2\\angle APB",
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
    }
  },
  {
    "id": "y10-13a-q8",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "The converse of Thales' theorem is established by proving the following result: *The midpoint of the hypotenuse of a right-angled triangle is equidistant from the three vertices of the triangle*.\n\nLet $\\triangle ABP$ be right-angled at $P$, and let $O$ be the midpoint of the hypotenuse $AB$. Draw $PO$ and produce it to $Q$ so that $PO = OQ$. Draw $AQ$ and $BQ$.\n\n**a)** Explain why $APBQ$ is a parallelogram.\n**b)** Hence, explain why $APBQ$ is a rectangle.\n**c)** Hence, explain why $AO = BO = PO$ and why the circle with diameter $AB$ passes through $P$.",
    "solution": "**a)** In the quadrilateral $APBQ$, the diagonals $AB$ and $PQ$ intersect at $O$. We are given that $O$ is the midpoint of $AB$, so $AO = OB$. By construction, $PO = OQ$. Since the diagonals bisect each other, $APBQ$ is a parallelogram.\n\n**b)** A parallelogram with at least one right angle is a rectangle. We are given that $\\triangle ABP$ is right-angled at $P$, so $\\angle APB = 90^\\circ$. Therefore, the parallelogram $APBQ$ is a rectangle.\n\n**c)** The diagonals of a rectangle are equal in length and bisect each other. Thus, $AB = PQ$, and their halves are also equal: $\\frac{1}{2}AB = \\frac{1}{2}PQ$, which means $AO = BO = PO = OQ$. Since $O$ is equidistant from $A$, $B$, and $P$, a circle drawn with centre $O$ and radius $OA$ will pass through $A$, $B$, and $P$. Since $AB$ is a straight line passing through the centre $O$, it is a diameter.",
    "t": "Angles at the centre and the circumference",
    "hint": "Use the properties of quadrilaterals based on their diagonals.",
    "solutionSteps": [
      {
        "explanation": "Show APBQ is a parallelogram.",
        "workingOut": "AO = OB \\text{ (given, midpoint)}\nPO = OQ \\text{ (by construction)}\n\\text{Diagonals bisect each other } \\Rightarrow APBQ \\text{ is a parallelogram}",
        "graphData": null
      },
      {
        "explanation": "Show APBQ is a rectangle.",
        "workingOut": "\\angle APB = 90^\\circ \\text{ (given)}\n\\text{A parallelogram with a right angle is a rectangle.}",
        "graphData": null
      },
      {
        "explanation": "Use properties of rectangles to prove equal distances.",
        "workingOut": "\\text{Diagonals of a rectangle are equal: } AB = PQ\n\\text{Halves are equal: } AO = BO = PO = OQ\n\\text{Since } AO = BO = PO, \\text{ the circle with centre } O \\text{ and radius } AO \\text{ passes through } P.",
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
    }
  },
  {
    "id": "y10-13a-q9",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "*(An application of the angle at the centre and circumference theorem)*\n\nA horse is travelling around a circular track at a constant speed. A punter standing at the very edge of the track is following him with binoculars. Explain why the punter's binoculars are rotating at a constant rate.",
    "solution": "Let the horse's position on the circular track be $H$, the punter's position be $P$ (on the circumference), and the centre of the track be $O$. Assume the punter's initial line of sight is towards a fixed point $A$ on the track.\nAs the horse travels at a constant speed along the circumference, the angle it sweeps at the centre, $\\angle AOH$, increases at a constant rate (since arc length is proportional to the central angle).\nBy the angle at the centre theorem, the angle at the circumference subtended by the same arc $AH$ is half the angle at the centre: $\\angle APH = \\frac{1}{2}\\angle AOH$.\nSince $\\angle AOH$ increases at a constant rate, its half, $\\angle APH$, also increases at a constant rate. Therefore, the punter's binoculars (which track the angle $\\angle APH$) rotate at a constant rate.",
    "t": "Angles at the centre and the circumference",
    "hint": "Relate the horse's movement to the angle at the centre, and then use the theorem to relate it to the angle at the circumference.",
    "solutionSteps": [
      {
        "explanation": "Relate speed to the central angle.",
        "workingOut": "\\text{Constant speed means the arc length grows at a constant rate.}\n\\text{Arc length is proportional to the central angle } \\angle AOH.\n\\text{Therefore, } \\angle AOH \\text{ increases at a constant rate.}",
        "graphData": null
      },
      {
        "explanation": "Apply the angle at the centre theorem.",
        "workingOut": "\\angle APH = \\frac{1}{2} \\angle AOH",
        "graphData": null
      },
      {
        "explanation": "Conclude about the rotation rate.",
        "workingOut": "\\text{Since } \\angle AOH \\text{ changes at a constant rate, } \\frac{1}{2}\\angle AOH \\text{ also changes at a constant rate.}\n\\text{Thus, the binoculars rotate at a constant rate.}",
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
    }
  }
];
