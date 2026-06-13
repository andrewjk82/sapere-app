export const Y11_CH6B_QUESTIONS = [
  {
    "id": "y11a-6b-q1",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "A ladder of length \\(4\\text{ m}\\) is leaning against a wall and is inclined at \\(58^{\\circ}\\) to the ground. How far does it reach up the wall? (Answer in metres correct to two decimal places.)",
    "a": "3.39",
    "h": "Use the sine ratio: \\(\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}\\).",
    "s": "\\(h = 4 \\sin 58^{\\circ} \\approx 3.39\\text{ m}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          10,
          10,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              3.39
            ],
            "name": "Wall top",
            "label": {
              "offset": [
                -10,
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
            "name": "Base",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              2.12,
              0
            ],
            "name": "Ladder foot",
            "label": {
              "offset": [
                10,
                -10
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
            "from": "B",
            "to": "C"
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A"
          },
          {
            "type": "rightangle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "size": 0.4
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "58°",
            "radius": 0.6,
            "label": {
              "offset": [
                -30,
                15
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              1.26,
              1.895
            ],
            "content": "4 m",
            "fontSize": 14
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Define the variable \\(h\\) as the height reached up the wall. Using the sine ratio for the right-angled triangle:",
        "workingOut": "\\sin 58^{\\circ} = \\frac{h}{4}",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(h\\) by multiplying both sides by 4.",
        "workingOut": "h = 4 \\sin 58^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Calculate the numerical value and round to two decimal places.",
        "workingOut": "h \\approx 4 \\times 0.8480 = 3.39",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q2",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "Determine, correct to the nearest degree, the angle of elevation of the top \\(T\\) of a \\(8\\text{ m}\\) flagpole \\(FT\\) from a point \\(P\\) on level ground \\(4\\text{ m}\\) from \\(F\\).",
    "a": "63°",
    "h": "Use the tangent ratio: \\(\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}\\).",
    "s": "\\(\\tan \\theta = \\frac{8}{4} = 2 \\implies \\theta = \\tan^{-1}(2) \\approx 63^{\\circ}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          10,
          10,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              4,
              8
            ],
            "name": "T",
            "label": {
              "offset": [
                0,
                15
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              4,
              0
            ],
            "name": "F",
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
              0,
              0
            ],
            "name": "P",
            "label": {
              "offset": [
                -15,
                -10
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
            "from": "B",
            "to": "C"
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A"
          },
          {
            "type": "rightangle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "size": 0.4
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
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
            "type": "text",
            "coords": [
              4.3,
              4
            ],
            "content": "8 m",
            "fontSize": 14
          },
          {
            "type": "text",
            "coords": [
              2,
              -0.4
            ],
            "content": "4 m",
            "fontSize": 14
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Identify the tangent ratio for the angle of elevation \\(\\theta\\) at point \\(P\\):",
        "workingOut": "\\tan \\theta = \\frac{8}{4} = 2",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(\\theta\\) by taking the inverse tangent.",
        "workingOut": "\\theta = \\tan^{-1}(2)",
        "graphData": null
      },
      {
        "explanation": "Calculate the angle to the nearest degree.",
        "workingOut": "\\theta \\approx 63.43^{\\circ} \\approx 63^{\\circ}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q3",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "Ben cycles from \\(P\\) to \\(Q\\) to \\(R\\) and then back to \\(P\\) in a road-race. \\(P\\) to \\(Q\\) is \\(30\\text{ km}\\), the angle at \\(Q\\) is \\(52^{\\circ}\\), and the angle at \\(R\\) is a right angle. Find, correct to the nearest kilometre, the total distance he has ridden.",
    "a": "72",
    "h": "Find the lengths of \\(PR\\) and \\(QR\\) using trigonometry, then sum all three sides.",
    "s": "\\(PR = 30 \\sin 52^{\\circ} \\approx 23.64\\text{ km}\\), \\(QR = 30 \\cos 52^{\\circ} \\approx 18.47\\text{ km}\\). Total distance \\(\\approx 30 + 23.64 + 18.47 \\approx 72\\text{ km}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          10,
          10,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              5.12
            ],
            "name": "P",
            "label": {
              "offset": [
                -10,
                15
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
            "name": "R",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              4,
              0
            ],
            "name": "Q",
            "label": {
              "offset": [
                15,
                -10
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
            "from": "B",
            "to": "C"
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A"
          },
          {
            "type": "rightangle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "size": 0.4
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "52°",
            "radius": 0.8,
            "label": {
              "offset": [
                -30,
                15
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              2.3,
              2.86
            ],
            "content": "30 km",
            "fontSize": 14
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Determine the side \\(PR\\) opposite to the \\(52^{\\circ}\\) angle.",
        "workingOut": "PR = 30 \\sin 52^{\\circ} \\approx 23.64",
        "graphData": null
      },
      {
        "explanation": "Determine the side \\(QR\\) adjacent to the \\(52^{\\circ}\\) angle.",
        "workingOut": "QR = 30 \\cos 52^{\\circ} \\approx 18.47",
        "graphData": null
      },
      {
        "explanation": "Sum the three sides to find the total perimeter of the track.",
        "workingOut": "\\text{Total Distance} = 30 + 23.64 + 18.47 = 72.11",
        "graphData": null
      },
      {
        "explanation": "Round to the nearest kilometre.",
        "workingOut": "\\text{Total Distance} \\approx 72",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q4",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "A ship sails \\(95\\text{ nautical miles}\\) due north from \\(X\\) to \\(Y\\), then \\(55\\text{ nautical miles}\\) due east from \\(Y\\) to \\(Z\\). Find the bearing of \\(Z\\) from \\(X\\), correct to the nearest degree.",
    "a": "030°",
    "h": "Find the angle \\(\\theta\\) at \\(X\\) using the tangent ratio.",
    "s": "\\(\\tan \\theta = \\frac{55}{95} \\implies \\theta = \\tan^{-1}\\left(\\frac{11}{19}\\right) \\approx 30^{\\circ}\\). Bearing is \\(030^{\\circ}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          6,
          5,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "X",
            "coords": [
              0,
              0
            ],
            "name": "X",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "Y",
            "coords": [
              0,
              4
            ],
            "name": "Y",
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "Z",
            "coords": [
              2.32,
              4
            ],
            "name": "Z",
            "label": {
              "offset": [
                15,
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
            "type": "segment",
            "from": "Y",
            "to": "Z"
          },
          {
            "type": "segment",
            "from": "Z",
            "to": "X"
          },
          {
            "type": "rightangle",
            "points": [
              "X",
              "Y",
              "Z"
            ],
            "size": 0.3
          },
          {
            "type": "angle",
            "points": [
              "Z",
              "X",
              "Y"
            ],
            "name": "θ",
            "radius": 0.8,
            "label": {
              "offset": [
                5,
                15
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              -0.8,
              2
            ],
            "content": "95 M"
          },
          {
            "type": "text",
            "coords": [
              1.16,
              4.3
            ],
            "content": "55 M"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Set up the tangent ratio for the angle \\(\\theta\\) at \\(X\\):",
        "workingOut": "\\tan \\theta = \\frac{55}{95}",
        "graphData": null
      },
      {
        "explanation": "Calculate the angle \\(\\theta\\).",
        "workingOut": "\\theta = \\tan^{-1}(0.5789) \\approx 30.07^{\\circ} \\approx 30^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Represent the bearing as a three-digit angle from North.",
        "workingOut": "\\text{Bearing} = 030^{\\circ}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q5",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "A tree snapped into two sections \\(AB\\) and \\(BC\\) in high winds and then fell. The section \\(BA\\) is inclined at \\(48^{\\circ}12'\\) to the horizontal and \\(AC\\) is \\(8.6\\text{ m}\\) long. Find the height of the original tree, in metres correct to one decimal place.",
    "a": "22.5",
    "h": "Find \\(BC\\) and \\(AB\\) using tangent and cosine ratios, then add them.",
    "s": "\\(BC = 8.6 \\tan(48^{\\circ}12') \\approx 9.61\\text{ m}\\), \\(AB = \\frac{8.6}{\\cos(48^{\\circ}12')} \\approx 12.91\\text{ m}\\). Height \\(\\approx 9.61 + 12.91 = 22.5\\text{ m}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          10,
          10,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              5.59
            ],
            "name": "B",
            "label": {
              "offset": [
                0,
                15
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
            "name": "C",
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
              -5,
              0
            ],
            "name": "A",
            "label": {
              "offset": [
                -15,
                -10
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
            "from": "B",
            "to": "C"
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A"
          },
          {
            "type": "rightangle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "size": 0.4
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "48°12'",
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
              -2.5,
              -0.4
            ],
            "content": "8.6 m",
            "fontSize": 14
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Convert the angle to decimal degrees.",
        "workingOut": "48^{\\circ}12' = 48.2^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Calculate the vertical section \\(BC\\) using the tangent ratio.",
        "workingOut": "BC = 8.6 \\tan 48.2^{\\circ} \\approx 9.61",
        "graphData": null
      },
      {
        "explanation": "Calculate the fallen section \\(AB\\) (hypotenuse) using the cosine ratio.",
        "workingOut": "AB = \\frac{8.6}{\\cos 48.2^{\\circ}} \\approx 12.91",
        "graphData": null
      },
      {
        "explanation": "Sum both sections to find the total height.",
        "workingOut": "\\text{Height} = 9.61 + 12.91 = 22.52 \\approx 22.5",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q6",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "A ladder makes an angle of \\(34^{\\circ}18'\\) with a wall, and its foot is \\(1.8\\text{ m}\\) out from the base of the wall. Find the length of the ladder, in metres correct to one decimal place.",
    "a": "3.2",
    "h": "Use the sine ratio: the angle is opposite to the floor distance.",
    "s": "\\(L = \\frac{1.8}{\\sin(34^{\\circ}18')} \\approx 3.20\\text{ m}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          10,
          10,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              3.66
            ],
            "name": "Wall top",
            "label": {
              "offset": [
                -10,
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
            "name": "Base",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              1.8,
              0
            ],
            "name": "Foot",
            "label": {
              "offset": [
                10,
                -10
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
            "from": "B",
            "to": "C"
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A"
          },
          {
            "type": "rightangle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "size": 0.4
          },
          {
            "type": "angle",
            "points": [
              "B",
              "A",
              "C"
            ],
            "name": "34°18'",
            "radius": 0.6,
            "label": {
              "offset": [
                5,
                -20
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              0.9,
              -0.4
            ],
            "content": "1.8 m",
            "fontSize": 14
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Convert the angle to decimal degrees.",
        "workingOut": "34^{\\circ}18' = 34.3^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Relate the ladder length \\(L\\) to the opposite side using the sine ratio.",
        "workingOut": "\\sin 34.3^{\\circ} = \\frac{1.8}{L}",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(L\\).",
        "workingOut": "L = \\frac{1.8}{\\sin 34.3^{\\circ}} \\approx 3.20 \\approx 3.2",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q7",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "Eleni drives \\(150\\text{ km}\\) on a bearing of \\(125^{\\circ}\\). She then drives due west until she is due south of her starting point. How far is she from her starting point, correct to the nearest kilometre?",
    "a": "86",
    "h": "Model the movement as a right-angled triangle. Find the angle between the South direction and the bearing.",
    "s": "The angle at the starting point between South and \\(125^{\\circ}\\) is \\(180^{\\circ} - 125^{\\circ} = 55^{\\circ}\\). Distance \\(= 150 \\cos 55^{\\circ} \\approx 86\\text{ km}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          5,
          5,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "S",
            "coords": [
              0,
              4
            ],
            "name": "Start",
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              0,
              1.71
            ],
            "name": "South Point",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "T",
            "coords": [
              3.28,
              1.71
            ],
            "name": "Turn",
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "N_S",
            "coords": [
              0,
              5
            ],
            "name": "",
            "label": {
              "offset": [
                0,
                0
              ]
            },
            "color": "none",
            "size": 0
          },
          {
            "type": "segment",
            "from": "S",
            "to": "D"
          },
          {
            "type": "segment",
            "from": "D",
            "to": "T"
          },
          {
            "type": "segment",
            "from": "T",
            "to": "S"
          },
          {
            "type": "rightangle",
            "points": [
              "S",
              "D",
              "T"
            ],
            "size": 0.3
          },
          {
            "type": "arrow",
            "from": "S",
            "to": "N_S",
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              0.1,
              4.8
            ],
            "content": "N"
          },
          {
            "type": "angle",
            "points": [
              "T",
              "S",
              "D"
            ],
            "name": "55°",
            "radius": 0.8,
            "label": {
              "offset": [
                10,
                -20
              ]
            }
          },
          {
            "type": "text",
            "coords": [
              1.8,
              3.1
            ],
            "content": "150 km"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Identify the internal angle of the right-angled triangle formed between the starting point, the turning point, and the due south point.",
        "workingOut": "\\theta = 180^{\\circ} - 125^{\\circ} = 55^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Use the cosine ratio to find the adjacent side (distance due south).",
        "workingOut": "d = 150 \\cos 55^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Calculate the final distance.",
        "workingOut": "d \\approx 150 \\times 0.5736 = 86.04 \\approx 86",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q8",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "John is looking out a window \\(W\\) at a car \\(C\\) parked on the street below. If the angle of depression of \\(C\\) from \\(W\\) is \\(68^{\\circ}\\) and the car is \\(9\\text{ m}\\) from the base \\(B\\) of the building, find the height \\(WB\\) of the window, correct to the nearest metre.",
    "a": "22",
    "h": "Use the tangent ratio: the angle of depression equals the angle of elevation.",
    "s": "\\(WB = 9 \\tan 68^{\\circ} \\approx 22.27 \\approx 22\\text{ m}\\).",
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
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "W",
            "coords": [
              0,
              5
            ],
            "name": "W",
            "label": {
              "offset": [
                -15,
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
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              4,
              0
            ],
            "name": "C",
            "label": {
              "offset": [
                15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "W_end",
            "coords": [
              5,
              5
            ],
            "name": "",
            "color": "none",
            "size": 0
          },
          {
            "type": "segment",
            "from": "W",
            "to": "B"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "C"
          },
          {
            "type": "segment",
            "from": "C",
            "to": "W"
          },
          {
            "type": "rightangle",
            "points": [
              "C",
              "B",
              "W"
            ],
            "size": 0.3
          },
          {
            "type": "line",
            "through": [
              "W",
              "W_end"
            ],
            "color": "slate",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              2,
              0.3
            ],
            "content": "9 m"
          },
          {
            "type": "angle",
            "points": [
              "C",
              "W",
              "B"
            ],
            "name": "22°",
            "radius": 0.8
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "State the angle of elevation of the window from the car, which is equal to the angle of depression.",
        "workingOut": "\\theta = 68^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Apply the tangent ratio.",
        "workingOut": "\\tan 68^{\\circ} = \\frac{WB}{9}",
        "graphData": null
      },
      {
        "explanation": "Solve for \\(WB\\).",
        "workingOut": "WB = 9 \\tan 68^{\\circ} \\approx 22.27 \\approx 22",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q9",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "A ladder of length \\(6\\text{ m}\\) is placed on level ground against a vertical wall. If the foot of the ladder is \\(2.2\\text{ m}\\) from the base of the wall, find, correct to the nearest degree, the angle at which the ladder is inclined to the ground.",
    "a": "68°",
    "h": "Use the cosine ratio: \\(\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}\\).",
    "s": "\\(\\cos \\theta = \\frac{2.2}{6} \\implies \\theta = \\cos^{-1}(0.3667) \\approx 68^{\\circ}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          10,
          10,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              5.58
            ],
            "name": "Wall top",
            "label": {
              "offset": [
                -10,
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
            "name": "Base",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              2.2,
              0
            ],
            "name": "Foot",
            "label": {
              "offset": [
                10,
                -10
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
            "from": "B",
            "to": "C"
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A"
          },
          {
            "type": "rightangle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "size": 0.4
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "θ",
            "radius": 0.6,
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
              1.1,
              -0.4
            ],
            "content": "2.2 m",
            "fontSize": 14
          },
          {
            "type": "text",
            "coords": [
              1.3,
              2.99
            ],
            "content": "6 m",
            "fontSize": 14
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Express the relation using the cosine ratio.",
        "workingOut": "\\cos \\theta = \\frac{2.2}{6}",
        "graphData": null
      },
      {
        "explanation": "Take the inverse cosine.",
        "workingOut": "\\theta = \\cos^{-1}\\left(\\frac{11}{30}\\right)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the angle to the nearest degree.",
        "workingOut": "\\theta \\approx 68.49^{\\circ} \\approx 68^{\\circ}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q10",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "Find, correct to the nearest tenth of a metre, the height of a tower, if the angle of elevation of the top of the tower is \\(58^{\\circ}36'\\) from a point on horizontal ground \\(15\\text{ m}\\) from the base of the tower.",
    "a": "24.6",
    "h": "Use the tangent ratio: \\(\\tan \\theta = \\frac{h}{d}\\).",
    "s": "\\(h = 15 \\tan(58^{\\circ}36') \\approx 24.6\\text{ m}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -2,
          10,
          10,
          -2
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              8.19
            ],
            "name": "Top",
            "label": {
              "offset": [
                0,
                15
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
            "name": "Base",
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
              -5,
              0
            ],
            "name": "P",
            "label": {
              "offset": [
                -15,
                -10
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
            "from": "B",
            "to": "C"
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A"
          },
          {
            "type": "rightangle",
            "points": [
              "A",
              "B",
              "C"
            ],
            "size": 0.4
          },
          {
            "type": "angle",
            "points": [
              "A",
              "C",
              "B"
            ],
            "name": "58°36'",
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
              -2.5,
              -0.4
            ],
            "content": "15 m",
            "fontSize": 14
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Convert the angle to decimal degrees.",
        "workingOut": "58^{\\circ}36' = 58.6^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Set up the tangent relation.",
        "workingOut": "\\tan 58.6^{\\circ} = \\frac{h}{15}",
        "graphData": null
      },
      {
        "explanation": "Calculate the height \\(h\\).",
        "workingOut": "h = 15 \\tan 58.6^{\\circ} \\approx 24.57 \\approx 24.6",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q11",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "A boat is \\(250\\text{ m}\\) out to sea from a vertical cliff of height \\(45\\text{ m}\\). Find, correct to the nearest degree, the angle of depression of the boat from the top of the cliff.",
    "a": "10°",
    "h": "Use the tangent ratio: \\(\\tan \\theta = \\frac{\\text{Height}}{\\text{Distance}}\\).",
    "s": "\\(\\tan \\theta = \\frac{45}{250} \\implies \\theta \\approx 10^{\\circ}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          5,
          6,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "T",
            "coords": [
              0,
              3
            ],
            "name": "Cliff Top",
            "label": {
              "offset": [
                -15,
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
            "name": "Base",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "coords": [
              5,
              0
            ],
            "name": "Boat",
            "label": {
              "offset": [
                15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "T_end",
            "coords": [
              5,
              3
            ],
            "name": "",
            "color": "none",
            "size": 0
          },
          {
            "type": "segment",
            "from": "T",
            "to": "B"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "P"
          },
          {
            "type": "segment",
            "from": "P",
            "to": "T"
          },
          {
            "type": "rightangle",
            "points": [
              "P",
              "B",
              "T"
            ],
            "size": 0.3
          },
          {
            "type": "line",
            "through": [
              "T",
              "T_end"
            ],
            "color": "slate",
            "dash": 2
          },
          {
            "type": "text",
            "coords": [
              -1.2,
              1.5
            ],
            "content": "45 m"
          },
          {
            "type": "text",
            "coords": [
              2.5,
              -0.4
            ],
            "content": "250 m"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Identify the tangent ratio of the angle of depression \\(\\theta\\).",
        "workingOut": "\\tan \\theta = \\frac{45}{250}",
        "graphData": null
      },
      {
        "explanation": "Apply the inverse tangent.",
        "workingOut": "\\theta = \\tan^{-1}(0.18)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the angle.",
        "workingOut": "\\theta \\approx 10.20^{\\circ} \\approx 10^{\\circ}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q12",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "Port \\(Q\\) is \\(40\\text{ nautical miles}\\) from port \\(P\\) on a bearing of \\(050^{\\circ}\\). Port \\(R\\) is \\(60\\text{ nautical miles}\\) from port \\(P\\), and \\(\\angle PQR = 90^{\\circ}\\).",
    "a": "a) 48°. b) 098°.",
    "h": "a) Use the cosine ratio in right triangle \\(PQR\\). b) Add the angle to the initial bearing.",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          5,
          5,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
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
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "coords": [
              3.06,
              2.57
            ],
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
            "id": "R",
            "coords": [
              4,
              0.5
            ],
            "name": "R",
            "label": {
              "offset": [
                15,
                -10
              ]
            }
          },
          {
            "type": "point",
            "id": "N_P",
            "coords": [
              0,
              3
            ],
            "name": "",
            "color": "none",
            "size": 0
          },
          {
            "type": "segment",
            "from": "P",
            "to": "Q"
          },
          {
            "type": "segment",
            "from": "Q",
            "to": "R"
          },
          {
            "type": "segment",
            "from": "R",
            "to": "P"
          },
          {
            "type": "rightangle",
            "points": [
              "P",
              "Q",
              "R"
            ],
            "size": 0.3
          },
          {
            "type": "arrow",
            "from": "P",
            "to": "N_P",
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              0.1,
              2.8
            ],
            "content": "N"
          },
          {
            "type": "text",
            "coords": [
              1.1,
              1.5
            ],
            "content": "40"
          },
          {
            "type": "text",
            "coords": [
              2.5,
              0.1
            ],
            "content": "60"
          }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y11a-6b-q12a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Find \\(\\angle QPR\\) to the nearest degree.",
        "a": "48°",
        "h": "In the right-angled triangle \\(PQR\\), the hypotenuse is \\(PR = 60\\) and the adjacent side is \\(PQ = 40\\).",
        "s": "\\(\\cos(\\angle QPR) = \\frac{40}{60} \\implies \\angle QPR \\approx 48^{\\circ}\\).",
        "solutionSteps": [
          {
            "explanation": "Relate the sides using the cosine ratio.",
            "workingOut": "\\cos(\\angle QPR) = \\frac{40}{60} = \\frac{2}{3}",
            "graphData": null
          },
          {
            "explanation": "Solve for the angle.",
            "workingOut": "\\angle QPR = \\cos^{-1}\\left(\\frac{2}{3}\\right)",
            "graphData": null
          },
          {
            "explanation": "Round to the nearest degree.",
            "workingOut": "\\angle QPR \\approx 48.19^{\\circ} \\approx 48^{\\circ}",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-6b-q12b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Hence find the bearing of \\(R\\) from \\(P\\), correct to the nearest degree.",
        "a": "098°",
        "h": "Add the angle \\(\\angle QPR\\) to the bearing of \\(Q\\) from \\(P\\).",
        "s": "\\(\\text{Bearing} = 050^{\\circ} + 48^{\\circ} = 098^{\\circ}\\).",
        "solutionSteps": [
          {
            "explanation": "Find the total angle from North to the line \\(PR\\).",
            "workingOut": "\\text{Bearing} = 050^{\\circ} + \\angle QPR",
            "graphData": null
          },
          {
            "explanation": "Substitute the calculated value.",
            "workingOut": "\\text{Bearing} = 50^{\\circ} + 48^{\\circ} = 98^{\\circ}",
            "graphData": null
          },
          {
            "explanation": "Write as a standard three-digit bearing.",
            "workingOut": "\\text{Bearing} = 098^{\\circ}",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "id": "y11a-6b-q13",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "The bearings of towns \\(Y\\) and \\(Z\\) from town \\(X\\) are \\(070^{\\circ}\\) and \\(340^{\\circ}\\) respectively.",
    "a": "a) Show that angle ZXY = 90 degrees. b) 107 km.",
    "h": "a) Calculate the difference between the bearings. b) Use the tangent ratio in right triangle \\(ZXY\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          4,
          4,
          -4
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "X",
            "coords": [
              0,
              -2
            ],
            "name": "X",
            "label": {
              "offset": [
                -10,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "Y",
            "coords": [
              3.06,
              -0.89
            ],
            "name": "Y",
            "label": {
              "offset": [
                10,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "Z",
            "coords": [
              -1.37,
              1.76
            ],
            "name": "Z",
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "N_X",
            "coords": [
              0,
              1
            ],
            "name": "",
            "color": "none",
            "size": 0
          },
          {
            "type": "segment",
            "from": "X",
            "to": "Y"
          },
          {
            "type": "segment",
            "from": "X",
            "to": "Z"
          },
          {
            "type": "segment",
            "from": "Z",
            "to": "Y"
          },
          {
            "type": "rightangle",
            "points": [
              "Z",
              "X",
              "Y"
            ],
            "size": 0.3
          },
          {
            "type": "arrow",
            "from": "X",
            "to": "N_X",
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              0.1,
              0.8
            ],
            "content": "N"
          }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y11a-6b-q13a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Show that \\(\\angle ZXY = 90^{\\circ}\\).",
        "a": "The angle is the difference of bearings: 340° - 70° = 270° reflex, so the interior angle is 360° - 270° = 90°.",
        "h": "Find the angle between the two bearing vectors.",
        "s": "\\(\\angle ZXY = 360^{\\circ} - (340^{\\circ} - 70^{\\circ}) = 90^{\\circ}\\).",
        "solutionSteps": [
          {
            "explanation": "Subtract the smaller bearing from the larger bearing to find the outer angle.",
            "workingOut": "340^{\\circ} - 70^{\\circ} = 270^{\\circ}",
            "graphData": null
          },
          {
            "explanation": "Subtract from \\(360^{\\circ}\\) to find the interior angle.",
            "workingOut": "\\angle ZXY = 360^{\\circ} - 270^{\\circ} = 90^{\\circ}",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-6b-q13b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Given that town \\(Z\\) is \\(90\\text{ km}\\) from town \\(X\\) and that \\(\\angle XYZ = 40^{\\circ}\\), find, correct to the nearest kilometre, how far town \\(Y\\) is from town \\(X\\).",
        "a": "107",
        "h": "In the right-angled triangle \\(ZXY\\) with the right angle at \\(X\\), use the tangent ratio for \\(\\angle XYZ\\).",
        "s": "\\(XY = \\frac{90}{\\tan 40^{\\circ}} \\approx 107\\text{ km}\\).",
        "solutionSteps": [
          {
            "explanation": "Set up the tangent ratio for the \\(40^{\\circ}\\) angle at \\(Y\\).",
            "workingOut": "\\tan 40^{\\circ} = \\frac{ZX}{XY} = \\frac{90}{XY}",
            "graphData": null
          },
          {
            "explanation": "Solve for \\(XY\\).",
            "workingOut": "XY = \\frac{90}{\\tan 40^{\\circ}}",
            "graphData": null
          },
          {
            "explanation": "Evaluate the value.",
            "workingOut": "XY \\approx 107.26 \\approx 107",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "id": "y11a-6b-q14",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "A ship leaves port \\(P\\) and travels \\(160\\text{ nautical miles}\\) to port \\(Q\\) on a bearing of \\(120^{\\circ}\\). It then travels \\(100\\text{ nautical miles}\\) to port \\(R\\) on a bearing of \\(210^{\\circ}\\).",
    "a": "a) The difference between the back bearing of P from Q (300°) and the bearing to R (210°) is 90°. b) 152°.",
    "h": "a) Work out the angles at \\(Q\\). b) Find \\(\\angle QPR\\) in the right triangle, then add it to the bearing of \\(Q\\) from \\(P\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          5,
          6,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "P",
            "coords": [
              0,
              4
            ],
            "name": "P",
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "coords": [
              3.46,
              2
            ],
            "name": "Q",
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "R",
            "coords": [
              2.46,
              0.27
            ],
            "name": "R",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "N_P",
            "coords": [
              0,
              5
            ],
            "name": "",
            "color": "none",
            "size": 0
          },
          {
            "type": "point",
            "id": "N_Q",
            "coords": [
              3.46,
              3.5
            ],
            "name": "",
            "color": "none",
            "size": 0
          },
          {
            "type": "segment",
            "from": "P",
            "to": "Q"
          },
          {
            "type": "segment",
            "from": "Q",
            "to": "R"
          },
          {
            "type": "segment",
            "from": "R",
            "to": "P"
          },
          {
            "type": "rightangle",
            "points": [
              "P",
              "Q",
              "R"
            ],
            "size": 0.3
          },
          {
            "type": "arrow",
            "from": "P",
            "to": "N_P",
            "color": "slate"
          },
          {
            "type": "arrow",
            "from": "Q",
            "to": "N_Q",
            "color": "slate"
          }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y11a-6b-q14a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Explain why \\(\\angle PQR = 90^{\\circ}\\).",
        "a": "The bearing of P from Q is 120° + 180° = 300°. The bearing of R from Q is 210°. The angle between them is 300° - 210° = 90°.",
        "h": "Calculate the bearing of \\(P\\) from \\(Q\\) and compare it to the bearing of \\(R\\) from \\(Q\\).",
        "s": "\\(\\text{Bearing of } P \\text{ from } Q = 120^{\\circ} + 180^{\\circ} = 300^{\\circ}\\). The bearing of \\(R\\) from \\(Q\\) is \\(210^{\\circ}\\). Therefore, \\(\\angle PQR = 300^{\\circ} - 210^{\\circ} = 90^{\\circ}\\).",
        "solutionSteps": [
          {
            "explanation": "Calculate the back bearing of \\(P\\) from \\(Q\\).",
            "workingOut": "\\text{Back-bearing} = 120^{\\circ} + 180^{\\circ} = 300^{\\circ}",
            "graphData": null
          },
          {
            "explanation": "Find the angle between the paths \\(QP\\) and \\(QR\\) by subtracting the bearings.",
            "workingOut": "\\angle PQR = 300^{\\circ} - 210^{\\circ} = 90^{\\circ}",
            "graphData": null
          }
        ]
      },
      {
        "id": "y11a-6b-q14b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Find, correct to the nearest degree, the bearing of port \\(R\\) from port \\(P\\).",
        "a": "152°",
        "h": "Find \\(\\angle QPR\\) using tangent in the right-angled triangle \\(PQR\\).",
        "s": "\\(\\tan(\\angle QPR) = \\frac{100}{160} \\implies \\angle QPR \\approx 32^{\\circ}\\). Bearing \\(= 120^{\\circ} + 32^{\\circ} = 152^{\\circ}\\).",
        "solutionSteps": [
          {
            "explanation": "Identify the tangent ratio for \\(\\angle QPR\\).",
            "workingOut": "\\tan(\\angle QPR) = \\frac{QR}{PQ} = \\frac{100}{160} = 0.625",
            "graphData": null
          },
          {
            "explanation": "Solve for the angle.",
            "workingOut": "\\angle QPR = \\tan^{-1}(0.625) \\approx 32.01^{\\circ} \\approx 32^{\\circ}",
            "graphData": null
          },
          {
            "explanation": "Add this angle to the bearing of \\(Q\\) from \\(P\\).",
            "workingOut": "\\text{Bearing} = 120^{\\circ} + 32^{\\circ} = 152^{\\circ}",
            "graphData": null
          }
        ]
      }
    ]
  },
  {
    "id": "y11a-6b-q15a",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "In the diagram below, \\(CD = 8\\text{ cm}\\), \\(\\angle ADC = 48^{\\circ}\\), \\(\\angle BDC = 28^{\\circ}\\), and \\(\\angle C = 90^{\\circ}\\). Show that \\(AC = 8 \\tan 48^{\\circ}\\) and \\(BC = 8 \\tan 28^{\\circ}\\), and hence find the length \\(AB\\), correct to the nearest millimetre.",
    "a": "AB = 4.6 cm (or 46 mm)",
    "h": "Evaluate the height of both triangles using the tangent ratio and subtract them.",
    "s": "\\(AC = 8 \\tan 48^{\\circ} \\approx 8.89\\text{ cm}\\). \\(BC = 8 \\tan 28^{\\circ} \\approx 4.25\\text{ cm}\\). \\(AB = AC - BC \\approx 4.63\\text{ cm} \\approx 46\\text{ mm}\\).",
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
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "C",
            "coords": [
              0,
              0
            ],
            "name": "C",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "D",
            "coords": [
              6,
              0
            ],
            "name": "D",
            "label": {
              "offset": [
                15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              0,
              3.19
            ],
            "name": "B",
            "label": {
              "offset": [
                -15,
                0
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              6.66
            ],
            "name": "A",
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "segment",
            "from": "C",
            "to": "D"
          },
          {
            "type": "segment",
            "from": "C",
            "to": "A"
          },
          {
            "type": "segment",
            "from": "B",
            "to": "D"
          },
          {
            "type": "segment",
            "from": "A",
            "to": "D"
          },
          {
            "type": "rightangle",
            "points": [
              "D",
              "C",
              "A"
            ],
            "size": 0.3
          },
          {
            "type": "angle",
            "points": [
              "C",
              "D",
              "B"
            ],
            "name": "28°",
            "radius": 1.2
          },
          {
            "type": "angle",
            "points": [
              "C",
              "D",
              "A"
            ],
            "name": "48°",
            "radius": 2
          },
          {
            "type": "text",
            "coords": [
              3,
              -0.4
            ],
            "content": "8 cm"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Apply the tangent ratio in right-angled triangle \\(ADC\\):",
        "workingOut": "\\tan 48^{\\circ} = \\frac{AC}{8} \\implies AC = 8 \\tan 48^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Apply the tangent ratio in right-angled triangle \\(BDC\\):",
        "workingOut": "\\tan 28^{\\circ} = \\frac{BC}{8} \\implies BC = 8 \\tan 28^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Express \\(AB\\) as the difference between \\(AC\\) and \\(BC\\).",
        "workingOut": "AB = AC - BC = 8 \\tan 48^{\\circ} - 8 \\tan 28^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Calculate the numerical values and convert to millimetres.",
        "workingOut": "AB \\approx 8.885 - 4.254 = 4.631\\text{ cm} = 46.31\\text{ mm} \\approx 46\\text{ mm}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q15b",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "In the diagram below, \\(AB = 25\\text{ cm}\\), \\(\\angle B = 52^{\\circ}\\), \\(\\angle C = 42^{\\circ}\\), and \\(AP \\perp BC\\). Show that \\(AP = 25 \\sin 52^{\\circ}\\), and hence find the length of \\(PC\\), correct to \\(1\\text{ cm}\\).",
    "a": "PC = 22 cm",
    "h": "Find the common vertical side \\(AP\\) first, then use it to solve for \\(PC\\) in the adjacent triangle.",
    "s": "\\(AP = 25 \\sin 52^{\\circ} \\approx 19.70\\text{ cm}\\). \\(PC = \\frac{AP}{\\tan 42^{\\circ}} \\approx 21.88\\text{ cm} \\approx 22\\text{ cm}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -5,
          6,
          6,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
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
            "label": {
              "offset": [
                0,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "coords": [
              0,
              4
            ],
            "name": "A",
            "label": {
              "offset": [
                0,
                15
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              -3.12,
              0
            ],
            "name": "B",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "C",
            "coords": [
              4.44,
              0
            ],
            "name": "C",
            "label": {
              "offset": [
                15,
                -15
              ]
            }
          },
          {
            "type": "segment",
            "from": "B",
            "to": "C"
          },
          {
            "type": "segment",
            "from": "A",
            "to": "P"
          },
          {
            "type": "segment",
            "from": "A",
            "to": "B"
          },
          {
            "type": "segment",
            "from": "A",
            "to": "C"
          },
          {
            "type": "rightangle",
            "points": [
              "A",
              "P",
              "C"
            ],
            "size": 0.3
          },
          {
            "type": "angle",
            "points": [
              "P",
              "C",
              "A"
            ],
            "name": "42°",
            "radius": 0.8
          },
          {
            "type": "angle",
            "points": [
              "A",
              "B",
              "P"
            ],
            "name": "52°",
            "radius": 0.8
          },
          {
            "type": "text",
            "coords": [
              -2,
              2.3
            ],
            "content": "25 cm"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Use right-angled triangle \\(ABP\\) to express the height \\(AP\\):",
        "workingOut": "\\sin 52^{\\circ} = \\frac{AP}{25} \\implies AP = 25 \\sin 52^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Use right-angled triangle \\(APC\\) to relate \\(AP\\) and \\(PC\\) via tangent:",
        "workingOut": "\\tan 42^{\\circ} = \\frac{AP}{PC} \\implies PC = \\frac{AP}{\\tan 42^{\\circ}}",
        "graphData": null
      },
      {
        "explanation": "Substitute the expression for \\(AP\\) and calculate.",
        "workingOut": "PC = \\frac{25 \\sin 52^{\\circ}}{\\tan 42^{\\circ}} \\approx \\frac{19.700}{0.9004} \\approx 21.88\\text{ cm}",
        "graphData": null
      },
      {
        "explanation": "Round to the nearest centimetre.",
        "workingOut": "PC \\approx 22\\text{ cm}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q15c",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "In the diagram below, \\(\\angle P = 90^{\\circ}\\), \\(QR = 20\\text{ cm}\\), \\(\\angle R = 38^{\\circ}\\), and \\(SR = 9\\text{ cm}\\). Show that \\(PR = 20 \\cos 38^{\\circ}\\), find an expression for \\(PQ\\), and hence find the angle \\(\\alpha\\), correct to the nearest minute.",
    "a": "alpha = 28°46'",
    "h": "Find \\(PR\\) and \\(PQ\\) first, then subtract \\(SR\\) to find \\(PS\\), and finally use the tangent ratio for \\(\\alpha\\).",
    "s": "\\(PR = 20 \\cos 38^{\\circ} \\approx 15.76\\text{ cm}\\). \\(PQ = 20 \\sin 38^{\\circ} \\approx 12.31\\text{ cm}\\). \\(PS = PR - 9 \\approx 6.76\\text{ cm}\\). \\(\\tan \\alpha = \\frac{PS}{PQ} \\implies \\alpha \\approx 28^{\\circ}46'\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          5,
          8,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "P",
            "coords": [
              0,
              4
            ],
            "name": "P",
            "label": {
              "offset": [
                -15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "S",
            "coords": [
              3,
              4
            ],
            "name": "S",
            "label": {
              "offset": [
                0,
                15
              ]
            }
          },
          {
            "type": "point",
            "id": "R",
            "coords": [
              7,
              4
            ],
            "name": "R",
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "Q",
            "coords": [
              0,
              0
            ],
            "name": "Q",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "segment",
            "from": "P",
            "to": "R"
          },
          {
            "type": "segment",
            "from": "P",
            "to": "Q"
          },
          {
            "type": "segment",
            "from": "Q",
            "to": "S"
          },
          {
            "type": "segment",
            "from": "Q",
            "to": "R"
          },
          {
            "type": "rightangle",
            "points": [
              "Q",
              "P",
              "R"
            ],
            "size": 0.3
          },
          {
            "type": "angle",
            "points": [
              "P",
              "Q",
              "S"
            ],
            "name": "α",
            "radius": 0.8
          },
          {
            "type": "angle",
            "points": [
              "Q",
              "R",
              "P"
            ],
            "name": "38°",
            "radius": 1.2
          },
          {
            "type": "text",
            "coords": [
              5,
              4.3
            ],
            "content": "9 cm"
          },
          {
            "type": "text",
            "coords": [
              3.5,
              1.6
            ],
            "content": "20 cm"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Apply the cosine ratio in right-angled triangle \\(PQR\\):",
        "workingOut": "\\cos 38^{\\circ} = \\frac{PR}{20} \\implies PR = 20 \\cos 38^{\\circ}",
        "graphData": null
      },
      {
        "explanation": "Find the vertical side \\(PQ\\) using the sine ratio.",
        "workingOut": "PQ = 20 \\sin 38^{\\circ} \\approx 12.31\\text{ cm}",
        "graphData": null
      },
      {
        "explanation": "Find the section \\(PS\\) by subtracting \\(SR\\) from \\(PR\\).",
        "workingOut": "PS = PR - SR = 20 \\cos 38^{\\circ} - 9 \\approx 6.76\\text{ cm}",
        "graphData": null
      },
      {
        "explanation": "Find \\(\\alpha\\) using the tangent ratio in triangle \\(PQS\\).",
        "workingOut": "\\tan \\alpha = \\frac{PS}{PQ} = \\frac{20 \\cos 38^{\\circ} - 9}{20 \\sin 38^{\\circ}} \\approx \\frac{6.760}{12.313} \\approx 0.5490",
        "graphData": null
      },
      {
        "explanation": "Calculate the angle in degrees, minutes.",
        "workingOut": "\\alpha = \\tan^{-1}(0.5490) \\approx 28.767^{\\circ} \\approx 28^{\\circ}46'",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q16a",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "In the diagram, a base is \\(12\\text{ units}\\) wide. The smaller angle is \\(30^{\\circ}\\) and the extra upper angle is \\(15^{\\circ}\\) (making a total angle of \\(45^{\\circ}\\)). Show that the height difference \\(x\\) is given by \\(x = 4(3 - \\sqrt{3})\\).",
    "a": "x = 12 - 4*sqrt(3) = 4(3 - sqrt(3))",
    "h": "Find the total height of the large triangle and subtract the height of the smaller one.",
    "s": "\\(h_{\\mathrm{large}} = 12 \\tan 45^{\\circ} = 12\\). \\(h_{\\mathrm{small}} = 12 \\tan 30^{\\circ} = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3}\\). \\(x = 12 - 4\\sqrt{3} = 4(3 - \\sqrt{3})\\).",
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
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              10,
              5.77
            ],
            "name": "B",
            "label": {
              "offset": [
                15,
                0
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "coords": [
              10,
              10
            ],
            "name": "A",
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "Base",
            "coords": [
              10,
              0
            ],
            "name": "",
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "segment",
            "from": "O",
            "to": "Base"
          },
          {
            "type": "segment",
            "from": "Base",
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
            "to": "A"
          },
          {
            "type": "rightangle",
            "points": [
              "O",
              "Base",
              "A"
            ],
            "size": 0.3
          },
          {
            "type": "angle",
            "points": [
              "Base",
              "O",
              "B"
            ],
            "name": "30°",
            "radius": 2
          },
          {
            "type": "angle",
            "points": [
              "B",
              "O",
              "A"
            ],
            "name": "15°",
            "radius": 3
          },
          {
            "type": "text",
            "coords": [
              5,
              -0.6
            ],
            "content": "12"
          },
          {
            "type": "text",
            "coords": [
              10.3,
              7.8
            ],
            "content": "x"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Find the height of the smaller right-angled triangle using the \\(30^{\\circ}\\) angle.",
        "workingOut": "h_{\\mathrm{small}} = 12 \\tan 30^{\\circ} = 12 \\times \\frac{1}{\\sqrt{3}} = 4\\sqrt{3}",
        "graphData": null
      },
      {
        "explanation": "Find the height of the larger right-angled triangle using the total angle of \\(30^{\\circ} + 15^{\\circ} = 45^{\\circ}\\).",
        "workingOut": "h_{\\mathrm{large}} = 12 \\tan 45^{\\circ} = 12",
        "graphData": null
      },
      {
        "explanation": "Express \\(x\\) as the difference of the two heights.",
        "workingOut": "x = h_{\\mathrm{large}} - h_{\\mathrm{small}} = 12 - 4\\sqrt{3}",
        "graphData": null
      },
      {
        "explanation": "Factor out the common term 4.",
        "workingOut": "x = 4(3 - \\sqrt{3})",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q16b",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "In the diagram, a base is \\(15\\text{ units}\\) wide. The smaller angle is \\(45^{\\circ}\\) and the extra upper angle is \\(15^{\\circ}\\) (making a total angle of \\(60^{\\circ}\\)). Show that the height difference \\(x\\) is given by \\(x = 15(\\sqrt{3} - 1)\\).",
    "a": "x = 15*sqrt(3) - 15 = 15(sqrt(3) - 1)",
    "h": "Subtract the height of the smaller triangle from the height of the larger triangle.",
    "s": "\\(h_{\\mathrm{large}} = 15 \\tan 60^{\\circ} = 15\\sqrt{3}\\). \\(h_{\\mathrm{small}} = 15 \\tan 45^{\\circ} = 15\\). \\(x = 15\\sqrt{3} - 15 = 15(\\sqrt{3} - 1)\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          20,
          12,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              10,
              10
            ],
            "name": "B",
            "label": {
              "offset": [
                15,
                0
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "coords": [
              10,
              17.32
            ],
            "name": "A",
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "Base",
            "coords": [
              10,
              0
            ],
            "name": "",
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "segment",
            "from": "O",
            "to": "Base"
          },
          {
            "type": "segment",
            "from": "Base",
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
            "to": "A"
          },
          {
            "type": "rightangle",
            "points": [
              "O",
              "Base",
              "A"
            ],
            "size": 0.3
          },
          {
            "type": "angle",
            "points": [
              "Base",
              "O",
              "B"
            ],
            "name": "45°",
            "radius": 2
          },
          {
            "type": "angle",
            "points": [
              "B",
              "O",
              "A"
            ],
            "name": "15°",
            "radius": 3
          },
          {
            "type": "text",
            "coords": [
              5,
              -0.6
            ],
            "content": "15"
          },
          {
            "type": "text",
            "coords": [
              10.3,
              13.5
            ],
            "content": "x"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Find the height of the smaller right-angled triangle.",
        "workingOut": "h_{\\mathrm{small}} = 15 \\tan 45^{\\circ} = 15",
        "graphData": null
      },
      {
        "explanation": "Find the height of the larger right-angled triangle.",
        "workingOut": "h_{\\mathrm{large}} = 15 \\tan 60^{\\circ} = 15\\sqrt{3}",
        "graphData": null
      },
      {
        "explanation": "Subtract the smaller height from the larger height.",
        "workingOut": "x = 15\\sqrt{3} - 15",
        "graphData": null
      },
      {
        "explanation": "Factor out 15.",
        "workingOut": "x = 15(\\sqrt{3} - 1)",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q16c",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "In the diagram, a base is \\(9\\text{ units}\\) wide. The two consecutive angles are both \\(30^{\\circ}\\) (making a total angle of \\(60^{\\circ}\\)). Show that the height difference \\(x\\) is given by \\(x = 6\\sqrt{3}\\).",
    "a": "x = 9*sqrt(3) - 3*sqrt(3) = 6*sqrt(3)",
    "h": "Find both heights using \\(30^{\\circ}\\) and \\(60^{\\circ}\\) tangent ratios, then subtract.",
    "s": "\\(h_{\\mathrm{large}} = 9 \\tan 60^{\\circ} = 9\\sqrt{3}\\). \\(h_{\\mathrm{small}} = 9 \\tan 30^{\\circ} = 3\\sqrt{3}\\). \\(x = 9\\sqrt{3} - 3\\sqrt{3} = 6\\sqrt{3}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -1,
          20,
          12,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "O",
            "coords": [
              0,
              0
            ],
            "name": "O",
            "label": {
              "offset": [
                -15,
                -15
              ]
            }
          },
          {
            "type": "point",
            "id": "B",
            "coords": [
              10,
              5.77
            ],
            "name": "B",
            "label": {
              "offset": [
                15,
                0
              ]
            }
          },
          {
            "type": "point",
            "id": "A",
            "coords": [
              10,
              17.32
            ],
            "name": "A",
            "label": {
              "offset": [
                15,
                10
              ]
            }
          },
          {
            "type": "point",
            "id": "Base",
            "coords": [
              10,
              0
            ],
            "name": "",
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "segment",
            "from": "O",
            "to": "Base"
          },
          {
            "type": "segment",
            "from": "Base",
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
            "to": "A"
          },
          {
            "type": "rightangle",
            "points": [
              "O",
              "Base",
              "A"
            ],
            "size": 0.3
          },
          {
            "type": "angle",
            "points": [
              "Base",
              "O",
              "B"
            ],
            "name": "30°",
            "radius": 2
          },
          {
            "type": "angle",
            "points": [
              "B",
              "O",
              "A"
            ],
            "name": "30°",
            "radius": 3
          },
          {
            "type": "text",
            "coords": [
              5,
              -0.6
            ],
            "content": "9"
          },
          {
            "type": "text",
            "coords": [
              10.3,
              11.5
            ],
            "content": "x"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Find the height of the smaller triangle.",
        "workingOut": "h_{\\mathrm{small}} = 9 \\tan 30^{\\circ} = \\frac{9}{\\sqrt{3}} = 3\\sqrt{3}",
        "graphData": null
      },
      {
        "explanation": "Find the height of the larger triangle.",
        "workingOut": "h_{\\mathrm{large}} = 9 \\tan 60^{\\circ} = 9\\sqrt{3}",
        "graphData": null
      },
      {
        "explanation": "Calculate the difference \\(x\\).",
        "workingOut": "x = 9\\sqrt{3} - 3\\sqrt{3} = 6\\sqrt{3}",
        "graphData": null
      }
    ]
  },
  {
    "id": "y11a-6b-q17",
    "c": "6B",
    "t": "Problems involving right-angled triangles",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "From the ends of a straight horizontal road \\(1.5\\text{ km}\\) long, a balloon directly above the road is observed to have angles of elevation of \\(55^{\\circ}\\) and \\(35^{\\circ}\\) respectively. Find, correct to the nearest metre, the height of the balloon above the road.",
    "a": "705",
    "h": "Represent the horizontal road as the sum of two adjacent sides of two right-angled triangles: \\(d_1 + d_2 = 1500\\).",
    "s": "\\(h \\cot 55^{\\circ} + h \\cot 35^{\\circ} = 1500 \\implies h \\approx 705\\text{ m}\\).",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 300,
        "boundingbox": [
          -4,
          6,
          7,
          -1
        ],
        "boardOptions": {
          "keepaspectratio": true,
          "showNavigation": false,
          "showCopyright": false
        },
        "elements": [
          {
            "type": "point",
            "id": "L",
            "coords": [
              -2.8,
              0
            ],
            "name": "",
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "point",
            "id": "R",
            "coords": [
              5.71,
              0
            ],
            "name": "",
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "point",
            "id": "T",
            "coords": [
              0,
              4
            ],
            "name": "Balloon",
            "label": {
              "offset": [
                0,
                15
              ]
            }
          },
          {
            "type": "point",
            "id": "P",
            "coords": [
              0,
              0
            ],
            "name": "",
            "label": {
              "offset": [
                0,
                0
              ]
            }
          },
          {
            "type": "segment",
            "from": "L",
            "to": "R"
          },
          {
            "type": "segment",
            "from": "L",
            "to": "T"
          },
          {
            "type": "segment",
            "from": "R",
            "to": "T"
          },
          {
            "type": "segment",
            "from": "T",
            "to": "P",
            "dash": 2
          },
          {
            "type": "rightangle",
            "points": [
              "L",
              "P",
              "T"
            ],
            "size": 0.3
          },
          {
            "type": "angle",
            "points": [
              "P",
              "L",
              "T"
            ],
            "name": "55°",
            "radius": 0.8
          },
          {
            "type": "angle",
            "points": [
              "T",
              "R",
              "P"
            ],
            "name": "35°",
            "radius": 0.8
          },
          {
            "type": "text",
            "coords": [
              1.4,
              -0.6
            ],
            "content": "1.5 km"
          }
        ]
      }
    },
    "solutionSteps": [
      {
        "explanation": "Let \\(h\\) be the height of the balloon in metres. Convert the road length to metres.",
        "workingOut": "1.5\\text{ km} = 1500\\text{ m}",
        "graphData": null
      },
      {
        "explanation": "Express the two segments of the road in terms of \\(h\\) and the cotangents of the angles of elevation.",
        "workingOut": "d_1 = \\frac{h}{\\tan 55^{\\circ}}, \\quad d_2 = \\frac{h}{\\tan 35^{\\circ}}",
        "graphData": null
      },
      {
        "explanation": "Form the equation for the total distance.",
        "workingOut": "h \\left(\\frac{1}{\\tan 55^{\\circ}} + \\frac{1}{\\tan 35^{\\circ}}\\right) = 1500",
        "graphData": null
      },
      {
        "explanation": "Evaluate the terms inside the parentheses.",
        "workingOut": "\\frac{1}{\\tan 55^{\\circ}} \\approx 0.7002, \\quad \\frac{1}{\\tan 35^{\\circ}} \\approx 1.4281",
        "graphData": null
      },
      {
        "explanation": "Solve for the height \\(h\\).",
        "workingOut": "h (0.7002 + 1.4281) = 1500 \\implies 2.1283h = 1500 \\implies h \\approx 704.78",
        "graphData": null
      },
      {
        "explanation": "Round to the nearest metre.",
        "workingOut": "h \\approx 705",
        "graphData": null
      }
    ]
  }
];
