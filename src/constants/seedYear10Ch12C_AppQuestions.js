export const Y10_CH12C_APP_QUESTIONS = [
  {
    "id": "y10-12c-app-q7a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Two hikers, Paul and Sayo, are both looking at a distant landmark. From Paul, the bearing of the landmark is $222^\\circ\\mathrm{T}$ and, from Sayo, the bearing of the landmark is $300^\\circ\\mathrm{T}$. If Sayo is standing $800$ m due south of Paul, find, correct to the nearest metre, the distance from Paul to the landmark.",
    "a": "708",
    "t": "Applications of Trigonometry",
    "hint": "Draw a triangle with Paul, Sayo, and the landmark. Find the interior angles using the bearings.",
    "solutionSteps": [
      {
        "explanation": "Let \\(P\\) be Paul, \\(S\\) be Sayo, and \\(L\\) be the landmark. \\(S\\) is due south of \\(P\\).",
        "workingOut": "PS = 800"
      },
      {
        "explanation": "The bearing of \\(L\\) from \\(P\\) is \\(222^\\circ\\). The angle inside \\(\\triangle PSL\\) at \\(P\\) is \\(222^\\circ - 180^\\circ = 42^\\circ\\).",
        "workingOut": "\\angle SPL = 42^\\circ"
      },
      {
        "explanation": "The bearing of \\(L\\) from \\(S\\) is \\(300^\\circ\\). The angle inside \\(\\triangle PSL\\) at \\(S\\) is \\(360^\\circ - 300^\\circ = 60^\\circ\\).",
        "workingOut": "\\angle PSL = 60^\\circ"
      },
      {
        "explanation": "Find the third angle at \\(L\\).",
        "workingOut": "\\angle PLS = 180^\\circ - 42^\\circ - 60^\\circ = 78^\\circ"
      },
      {
        "explanation": "Use the sine rule to find the distance \\(PL\\).",
        "workingOut": "\\frac{PL}{\\sin(60^\\circ)} = \\frac{800}{\\sin(78^\\circ)}"
      },
      {
        "explanation": "Calculate the final value to the nearest metre.",
        "workingOut": "PL = \\frac{800 \\sin(60^\\circ)}{\\sin(78^\\circ)} \\approx 708.3 \\implies 708"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-12c-app-q7b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Two hikers, Paul and Sayo, are both looking at a distant landmark. From Paul, the bearing of the landmark is $222^\\circ\\mathrm{T}$ and, from Sayo, the bearing of the landmark is $300^\\circ\\mathrm{T}$. If Sayo is standing $800$ m due south of Paul, find, correct to the nearest metre, the distance from Sayo to the landmark.",
    "a": "547",
    "t": "Applications of Trigonometry",
    "hint": "Use the sine rule in the triangle formed by Paul, Sayo, and the landmark.",
    "solutionSteps": [
      {
        "explanation": "From the previous part, \\(\\angle PSL = 60^\\circ\\), \\(\\angle SPL = 42^\\circ\\), and \\(\\angle PLS = 78^\\circ\\).",
        "workingOut": ""
      },
      {
        "explanation": "Use the sine rule to find the distance \\(SL\\).",
        "workingOut": "\\frac{SL}{\\sin(42^\\circ)} = \\frac{800}{\\sin(78^\\circ)}"
      },
      {
        "explanation": "Calculate the final value to the nearest metre.",
        "workingOut": "SL = \\frac{800 \\sin(42^\\circ)}{\\sin(78^\\circ)} \\approx 547.3 \\implies 547"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-12c-app-q8a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "An archaeologist wishes to determine the height of an ancient temple. From a point $A$ at ground level, she measures the angle of elevation of $V$, the top of the temple, to be $37^\\circ$. She then walks $100$ m towards the temple to a point $B$. From here, the angle of elevation of $V$ from ground level is $64^\\circ$.\n\nFind \\angle AVB.",
    "a": "27^\\circ",
    "t": "Applications of Trigonometry",
    "hint": "Analyze the non-right-angled triangle $\\triangle AVB$ first, then the right-angled triangle $\\triangle VOB$.",
    "solutionSteps": [
      {
        "explanation": "Use the exterior angle of \\(\\triangle AVB\\) at \\(B\\).",
        "workingOut": "\\angle VBA = 180^\\circ - 64^\\circ = 116^\\circ \\implies \\angle AVB = 180^\\circ - 116^\\circ - 37^\\circ = 27^\\circ"
      },
      {
        "explanation": "Calculate the final answer.",
        "workingOut": ""
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
    }
  },
  {
    "id": "y10-12c-app-q8b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "An archaeologist wishes to determine the height of an ancient temple. From a point $A$ at ground level, she measures the angle of elevation of $V$, the top of the temple, to be $37^\\circ$. She then walks $100$ m towards the temple to a point $B$. From here, the angle of elevation of $V$ from ground level is $64^\\circ$.\n\nFind VB, correct to two decimal places.",
    "a": "132.56",
    "t": "Applications of Trigonometry",
    "hint": "Analyze the non-right-angled triangle $\\triangle AVB$ first, then the right-angled triangle $\\triangle VOB$.",
    "solutionSteps": [
      {
        "explanation": "Use the sine rule in \\(\\triangle AVB\\).",
        "workingOut": "\\frac{VB}{\\sin(37^\\circ)} = \\frac{100}{\\sin(27^\\circ)}"
      },
      {
        "explanation": "Calculate the final answer.",
        "workingOut": "VB = \\frac{100 \\sin(37^\\circ)}{\\sin(27^\\circ)} \\approx 132.56"
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
    }
  },
  {
    "id": "y10-12c-app-q8c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "An archaeologist wishes to determine the height of an ancient temple. From a point $A$ at ground level, she measures the angle of elevation of $V$, the top of the temple, to be $37^\\circ$. She then walks $100$ m towards the temple to a point $B$. From here, the angle of elevation of $V$ from ground level is $64^\\circ$.\n\nFind OV, the height of the temple, to the nearest metre.",
    "a": "119",
    "t": "Applications of Trigonometry",
    "hint": "Analyze the non-right-angled triangle $\\triangle AVB$ first, then the right-angled triangle $\\triangle VOB$.",
    "solutionSteps": [
      {
        "explanation": "Use right-angled triangle \\(VOB\\).",
        "workingOut": "\\sin(64^\\circ) = \\frac{OV}{VB} = \\frac{OV}{132.56}"
      },
      {
        "explanation": "Calculate the final answer.",
        "workingOut": "OV = 132.56 \\sin(64^\\circ) \\approx 119.14 \\implies 119"
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
    }
  },
  {
    "id": "y10-12c-app-q9",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A hillside is inclined at $26^\\circ$ to the horizontal. From the bottom of the hill, Alex observes a vertical tree whose base is $40$ m up the hill from the point where Alex is standing. If the angle of elevation of the top of the tree is $43^\\circ$ from the point where Alex is standing, find the height of the tree, correct to the nearest metre.",
    "a": "16",
    "t": "Applications of Trigonometry",
    "hint": "Use the sine rule in the triangle formed by Alex, the base of the tree, and the top of the tree. Find the interior angles.",
    "solutionSteps": [
      {
        "explanation": "Let \\(A\\) be Alex, \\(B\\) be the base of the tree, and \\(T\\) be the top of the tree. The tree is vertical.",
        "workingOut": ""
      },
      {
        "explanation": "In \\(\\triangle ABT\\), \\(AB = 40\\). The angle of elevation to \\(T\\) is \\(43^\\circ\\), and the hill incline is \\(26^\\circ\\). Therefore, the angle inside the triangle at \\(A\\) is \\(43^\\circ - 26^\\circ = 17^\\circ\\).",
        "workingOut": "\\angle TAB = 17^\\circ"
      },
      {
        "explanation": "The tree makes an angle with the horizontal of \\(90^\\circ\\). The interior angle at \\(B\\) is the angle between the hill and the vertical tree: \\(90^\\circ + 26^\\circ = 116^\\circ\\).",
        "workingOut": "\\angle ABT = 116^\\circ"
      },
      {
        "explanation": "The third angle \\(\\angle ATB\\) can be found.",
        "workingOut": "\\angle ATB = 180^\\circ - 116^\\circ - 17^\\circ = 47^\\circ"
      },
      {
        "explanation": "Use the sine rule in \\(\\triangle ABT\\) to find the height \\(BT\\).",
        "workingOut": "\\frac{BT}{\\sin(17^\\circ)} = \\frac{40}{\\sin(47^\\circ)}"
      },
      {
        "explanation": "Calculate the height to the nearest metre.",
        "workingOut": "BT = \\frac{40 \\sin(17^\\circ)}{\\sin(47^\\circ)} \\approx 15.98 \\implies 16"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-12c-app-q10",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 90,
    "question": "Find $h$, correct to the nearest centimetre.",
    "a": "711",
    "t": "Applications of Trigonometry",
    "hint": "Set up equations for $h$ using the two right-angled triangles $\\triangle SPR$ and $\\triangle SQR$. Convert the final answer to centimetres.",
    "solutionSteps": [
      {
        "explanation": "In \\(\\triangle SQR\\), express \\(QR\\) in terms of \\(h\\).",
        "workingOut": "\\tan(72^\\circ) = \\frac{h}{QR} \\implies QR = \\frac{h}{\\tan(72^\\circ)}"
      },
      {
        "explanation": "In \\(\\triangle SPR\\), express \\(h\\) in terms of the whole base \\(PR = 10 + QR\\).",
        "workingOut": "\\tan(30^\\circ) = \\frac{h}{10 + QR}"
      },
      {
        "explanation": "Substitute \\(QR\\) into the second equation.",
        "workingOut": "\\tan(30^\\circ) = \\frac{h}{10 + \\frac{h}{\\tan(72^\\circ)}}"
      },
      {
        "explanation": "Solve for \\(h\\).",
        "workingOut": "h = (10 + \\frac{h}{\\tan(72^\\circ)}) \\tan(30^\\circ) \\implies h(1 - \\frac{\\tan(30^\\circ)}{\\tan(72^\\circ)}) = 10\\tan(30^\\circ)"
      },
      {
        "explanation": "Calculate the value in metres.",
        "workingOut": "h \\approx \\frac{5.7735}{1 - 0.1876} \\approx 7.1067 \\mathrm{\\ m}"
      },
      {
        "explanation": "Convert to centimetres (nearest whole number).",
        "workingOut": "h \\approx 711 \\mathrm{\\ cm}"
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
    }
  }
];
