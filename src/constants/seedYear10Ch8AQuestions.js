export const Y10_CH8A_QUESTIONS = [
  {
    "id": "y10-8a-q1a-x",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "In the right-angled triangle $ABC$, the right angle is at $B$. Angle $A = 45^\\circ$ and side $BC = 12$. Find the value of $x$ (side $AB$).",
    "a": "12",
    "t": "Review of triangles",
    "hint": "What type of triangle is this if one angle is 90 and another is 45?",
    "solutionSteps": [
      {
        "explanation": "The sum of angles in a triangle is 180°.",
        "workingOut": "Angle C = 180^\\circ - 90^\\circ - 45^\\circ = 45^\\circ"
      },
      {
        "explanation": "Since Angle A = Angle C, the triangle is an isosceles right triangle.",
        "workingOut": "AB = BC"
      },
      {
        "explanation": "Substitute the given value.",
        "workingOut": "x = 12"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            4
          ],
          "B": [
            0,
            0
          ],
          "C": [
            4,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "A"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "x"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "12"
          }
        ],
        "angles": [
          {
            "at": "B",
            "right": true
          },
          {
            "at": "A",
            "text": "45°"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1a-alpha",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "In the right-angled triangle $ABC$, the right angle is at $B$. Angle $A = 45^\\circ$ and side $BC = 12$. Find the value of $\\alpha$ (Angle $C$) in degrees.",
    "a": "45",
    "t": "Review of triangles",
    "hint": "The sum of angles in a triangle is 180°.",
    "solutionSteps": [
      {
        "explanation": "Use the angle sum of a triangle.",
        "workingOut": "\\alpha = 180^\\circ - 90^\\circ - 45^\\circ = 45^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            4
          ],
          "B": [
            0,
            0
          ],
          "C": [
            4,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "A"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "B",
              "C"
            ],
            "text": "12"
          }
        ],
        "angles": [
          {
            "at": "B",
            "right": true
          },
          {
            "at": "A",
            "text": "45°"
          },
          {
            "at": "C",
            "text": "\\alpha"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1b-x",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "In triangle $ABC$, Angle $A = 130^\\circ$ and Angle $B = 25^\\circ$. Side $AC = 8$. Find the value of $x$ (side $AB$).",
    "a": "8",
    "hint": "Find the size of Angle C first.",
    "solutionSteps": [
      {
        "explanation": "Find the third angle of the triangle.",
        "workingOut": "Angle C = 180^\\circ - (130^\\circ + 25^\\circ) = 25^\\circ"
      },
      {
        "explanation": "Since Angle B = Angle C, the triangle is isosceles.",
        "workingOut": "AB = AC"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            2,
            2
          ],
          "B": [
            0,
            0
          ],
          "C": [
            8,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "A"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "x"
          },
          {
            "between": [
              "A",
              "C"
            ],
            "text": "8"
          }
        ],
        "angles": [
          {
            "at": "A",
            "text": "130°"
          },
          {
            "at": "B",
            "text": "25°"
          },
          {
            "at": "C",
            "text": "\\alpha"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1b-alpha",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "In triangle $ABC$, Angle $A = 130^\\circ$ and Angle $B = 25^\\circ$. Find the value of $\\alpha$ (Angle $C$) in degrees.",
    "a": "25",
    "hint": "The sum of angles in a triangle is 180°.",
    "solutionSteps": [
      {
        "explanation": "Subtract the known angles from 180°.",
        "workingOut": "\\alpha = 180^\\circ - 130^\\circ - 25^\\circ = 25^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            2,
            2
          ],
          "B": [
            0,
            0
          ],
          "C": [
            8,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "A"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "x"
          },
          {
            "between": [
              "A",
              "C"
            ],
            "text": "8"
          }
        ],
        "angles": [
          {
            "at": "A",
            "text": "130°"
          },
          {
            "at": "B",
            "text": "25°"
          },
          {
            "at": "C",
            "text": "\\alpha"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1c-alpha",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "In triangle $LMN$, the exterior angle at $N$ is $110^\\circ$. The interior angles at $M$ and $N$ are both equal to $\\alpha$. Find $\\alpha$ in degrees.",
    "a": "70",
    "hint": "Interior and exterior angles on a straight line add to 180°.",
    "solutionSteps": [
      {
        "explanation": "Calculate the interior angle at N.",
        "workingOut": "\\alpha = 180^\\circ - 110^\\circ = 70^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "L": [
            3,
            4
          ],
          "M": [
            0,
            0
          ],
          "N": [
            6,
            0
          ],
          "P": [
            8,
            0
          ],
          "Q": [
            -2,
            0
          ]
        },
        "segments": [
          {
            "from": "L",
            "to": "M"
          },
          {
            "from": "M",
            "to": "N"
          },
          {
            "from": "N",
            "to": "L"
          },
          {
            "from": "N",
            "to": "P",
            "dashed": true
          },
          {
            "from": "M",
            "to": "Q",
            "dashed": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "L",
              "N"
            ],
            "text": "9"
          },
          {
            "between": [
              "L",
              "M"
            ],
            "text": "x"
          }
        ],
        "angles": [
          {
            "at": "M",
            "text": "\\alpha"
          },
          {
            "at": "N",
            "text": "\\alpha"
          },
          {
            "at": "L",
            "text": "\\gamma"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1c-gamma",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "In triangle $LMN$, exterior angle at $N$ is $110^\\circ$. Interior angles at $M, N$ are $\\alpha$. Find $\\gamma$ (Angle $L$) in degrees.",
    "a": "40",
    "hint": "Find alpha first, then use angle sum.",
    "solutionSteps": [
      {
        "explanation": "\\alpha = 70^\\circ",
        "workingOut": "\\gamma = 180^\\circ - 2(70^\\circ) = 40^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "L": [
            3,
            4
          ],
          "M": [
            0,
            0
          ],
          "N": [
            6,
            0
          ],
          "P": [
            8,
            0
          ],
          "Q": [
            -2,
            0
          ]
        },
        "segments": [
          {
            "from": "L",
            "to": "M"
          },
          {
            "from": "M",
            "to": "N"
          },
          {
            "from": "N",
            "to": "L"
          },
          {
            "from": "N",
            "to": "P",
            "dashed": true
          },
          {
            "from": "M",
            "to": "Q",
            "dashed": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "L",
              "N"
            ],
            "text": "9"
          },
          {
            "between": [
              "L",
              "M"
            ],
            "text": "x"
          }
        ],
        "angles": [
          {
            "at": "M",
            "text": "\\alpha"
          },
          {
            "at": "N",
            "text": "\\alpha"
          },
          {
            "at": "L",
            "text": "\\gamma"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1c-x",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "In triangle $LMN$, exterior angle at $N$ is $110^\\circ$. Interior angles $M$ and $N$ are equal. Side $LN = 9$. Find $x$ (side $LM$).",
    "a": "9",
    "hint": "Equal angles mean equal opposite sides.",
    "solutionSteps": [
      {
        "explanation": "Since base angles are equal, triangle is isosceles.",
        "workingOut": "LM = LN = 9"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "L": [
            3,
            4
          ],
          "M": [
            0,
            0
          ],
          "N": [
            6,
            0
          ],
          "P": [
            8,
            0
          ],
          "Q": [
            -2,
            0
          ]
        },
        "segments": [
          {
            "from": "L",
            "to": "M"
          },
          {
            "from": "M",
            "to": "N"
          },
          {
            "from": "N",
            "to": "L"
          },
          {
            "from": "N",
            "to": "P",
            "dashed": true
          },
          {
            "from": "M",
            "to": "Q",
            "dashed": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "L",
              "N"
            ],
            "text": "9"
          },
          {
            "between": [
              "L",
              "M"
            ],
            "text": "x"
          }
        ],
        "angles": [
          {
            "at": "M",
            "text": "\\alpha"
          },
          {
            "at": "N",
            "text": "\\alpha"
          },
          {
            "at": "L",
            "text": "\\gamma"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1c-beta",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "In triangle $LMN$, exterior angle at $N$ is $110^\\circ$. Interior angles $M, N$ are equal. Find $\\beta$ (exterior angle at $M$) in degrees.",
    "a": "110",
    "hint": "Find interior M, then find its supplement.",
    "solutionSteps": [
      {
        "explanation": "Interior M = Interior N = 70°.",
        "workingOut": "\\beta = 180^\\circ - 70^\\circ = 110^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "L": [
            3,
            4
          ],
          "M": [
            0,
            0
          ],
          "N": [
            6,
            0
          ],
          "P": [
            8,
            0
          ],
          "Q": [
            -2,
            0
          ]
        },
        "segments": [
          {
            "from": "L",
            "to": "M"
          },
          {
            "from": "M",
            "to": "N"
          },
          {
            "from": "N",
            "to": "L"
          },
          {
            "from": "N",
            "to": "P",
            "dashed": true
          },
          {
            "from": "M",
            "to": "Q",
            "dashed": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "L",
              "N"
            ],
            "text": "9"
          },
          {
            "between": [
              "L",
              "M"
            ],
            "text": "x"
          }
        ],
        "angles": [
          {
            "at": "M",
            "text": "\\alpha"
          },
          {
            "at": "N",
            "text": "\\alpha"
          },
          {
            "at": "L",
            "text": "\\gamma"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1d-alpha",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "In triangle $ABC$, $AB = 8, AC = 8, BC = 8$. Line $AP$ bisects angle $A$. Find $\\alpha$ (angle $APB$) in degrees.",
    "a": "90",
    "hint": "In an equilateral triangle, the angle bisector is also the altitude.",
    "solutionSteps": [
      {
        "explanation": "The angle bisector of an equilateral triangle is perpendicular to the base.",
        "workingOut": "\\alpha = 90^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            3,
            5
          ],
          "B": [
            0,
            0
          ],
          "C": [
            6,
            0
          ],
          "P": [
            3,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "A"
          },
          {
            "from": "A",
            "to": "P"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "8"
          },
          {
            "between": [
              "A",
              "C"
            ],
            "text": "8"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "8"
          }
        ],
        "angles": [
          {
            "at": "P",
            "text": "\\alpha"
          },
          {
            "at": "C",
            "text": "\\beta"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1d-beta",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "In triangle $ABC$, $AB = 8, AC = 8, BC = 8$. Find $\\beta$ (angle $C$) in degrees.",
    "a": "60",
    "hint": "What are the angles in an equilateral triangle?",
    "solutionSteps": [
      {
        "explanation": "Equilateral triangle angles are 60°.",
        "workingOut": "\\beta = 60^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            3,
            5
          ],
          "B": [
            0,
            0
          ],
          "C": [
            6,
            0
          ],
          "P": [
            3,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "A"
          },
          {
            "from": "A",
            "to": "P"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "8"
          },
          {
            "between": [
              "A",
              "C"
            ],
            "text": "8"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "8"
          }
        ],
        "angles": [
          {
            "at": "P",
            "text": "\\alpha"
          },
          {
            "at": "C",
            "text": "\\beta"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1e-x",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "In right triangle $ABC$ (right angle at $C$), altitude $CN$ is drawn to hypotenuse $AB$. Angle $B = 45^\\circ$. The total length of $AB = 10$, and $NB = 5$. Find $x$ (length $AN$).",
    "a": "5",
    "hint": "AB = AN + NB",
    "solutionSteps": [
      {
        "explanation": "Subtract NB from total length AB.",
        "workingOut": "x = 10 - 5 = 5"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "C": [
            0,
            0
          ],
          "A": [
            0,
            4
          ],
          "B": [
            4,
            0
          ],
          "N": [
            2,
            2
          ]
        },
        "segments": [
          {
            "from": "C",
            "to": "A"
          },
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "N"
          }
        ],
        "angles": [
          {
            "at": "C",
            "right": true
          },
          {
            "at": "N",
            "right": true
          },
          {
            "at": "B",
            "text": "45°"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1e-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "In right triangle $ABC$ (right angle at $C$), altitude $CN$ is drawn. Angle $B = 45^\\circ$. Find $\\alpha$ (Angle $ACN$) in degrees.",
    "a": "45",
    "hint": "Find Angle A first.",
    "solutionSteps": [
      {
        "explanation": "Angle A = 90 - 45 = 45.",
        "workingOut": "\\alpha = 180 - 90 - 45 = 45^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "C": [
            0,
            0
          ],
          "A": [
            0,
            4
          ],
          "B": [
            4,
            0
          ],
          "N": [
            2,
            2
          ]
        },
        "segments": [
          {
            "from": "C",
            "to": "A"
          },
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "N"
          }
        ],
        "angles": [
          {
            "at": "C",
            "right": true
          },
          {
            "at": "N",
            "right": true
          },
          {
            "at": "B",
            "text": "45°"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1f-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "In triangle $APQ$, angle $PAQ = 90^\\circ$. $AP = 8$ and $AQ = 8$. Find $\\alpha$ (angle $AQP$) in degrees.",
    "a": "45",
    "hint": "It is an isosceles right triangle.",
    "solutionSteps": [
      {
        "explanation": "Base angles are equal.",
        "workingOut": "\\alpha = (180 - 90) / 2 = 45^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            2,
            4
          ],
          "P": [
            0,
            0
          ],
          "Q": [
            4,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "P"
          },
          {
            "from": "A",
            "to": "Q"
          },
          {
            "from": "P",
            "to": "Q"
          }
        ],
        "angles": [
          {
            "at": "A",
            "right": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "P"
            ],
            "text": "8"
          },
          {
            "between": [
              "A",
              "Q"
            ],
            "text": "8"
          },
          {
            "between": [
              "P",
              "Q"
            ],
            "text": "x"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q1f-x",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Review of triangles",
    "question": "In triangle $APQ$, angle $PAQ = 90^\\circ$. $AP = 8$ and $AQ = 8$. Find $x^2$, where $x$ is the length $PQ$.",
    "a": "128",
    "hint": "Use Pythagoras.",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras theorem.",
        "workingOut": "x^2 = 8^2 + 8^2 = 64 + 64 = 128"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            2,
            4
          ],
          "P": [
            0,
            0
          ],
          "Q": [
            4,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "P"
          },
          {
            "from": "A",
            "to": "Q"
          },
          {
            "from": "P",
            "to": "Q"
          }
        ],
        "angles": [
          {
            "at": "A",
            "right": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "P"
            ],
            "text": "8"
          },
          {
            "between": [
              "A",
              "Q"
            ],
            "text": "8"
          },
          {
            "between": [
              "P",
              "Q"
            ],
            "text": "x"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "Triangle $RST$ is equilateral. Find the values of $\\alpha, \\beta, \\gamma$ in degrees. (Write as alpha,beta,gamma e.g., 60,60,60)",
    "a": "60,60,60",
    "hint": "Equilateral means all angles equal.",
    "solutionSteps": [
      {
        "explanation": "All angles are equal.",
        "workingOut": "180/3 = 60^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "R": [
            3,
            5
          ],
          "S": [
            0,
            0
          ],
          "T": [
            6,
            0
          ]
        },
        "segments": [
          {
            "from": "R",
            "to": "S"
          },
          {
            "from": "S",
            "to": "T"
          },
          {
            "from": "T",
            "to": "R"
          }
        ],
        "angles": [
          {
            "at": "R",
            "text": "\\alpha"
          },
          {
            "at": "S",
            "text": "\\beta"
          },
          {
            "at": "T",
            "text": "\\gamma"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2b-theta",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "Triangle $WXY$ has $WX = XY$. The exterior angle at $X$ is $130^\\circ$. Find $\\theta$ (Angle $W$) in degrees.",
    "a": "65",
    "hint": "Find interior angle X first.",
    "solutionSteps": [
      {
        "explanation": "Interior X = 180 - 130 = 50°.",
        "workingOut": "\\theta = (180 - 50) / 2 = 65^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "W": [
            0,
            0
          ],
          "X": [
            4,
            4
          ],
          "Y": [
            6,
            0
          ],
          "Z": [
            8,
            8
          ]
        },
        "segments": [
          {
            "from": "W",
            "to": "X"
          },
          {
            "from": "X",
            "to": "Y"
          },
          {
            "from": "Y",
            "to": "W"
          },
          {
            "from": "W",
            "to": "Z",
            "dashed": true
          }
        ],
        "angles": [
          {
            "at": "X",
            "text": "x"
          },
          {
            "at": "W",
            "text": "\\theta"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2c-theta",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "Triangle $PQR$ has a right angle at $P$, and $PR = PQ$. Find $\\theta$ (Angle $R$) in degrees.",
    "a": "45",
    "hint": "It is an isosceles right triangle.",
    "solutionSteps": [
      {
        "explanation": "Base angles are equal.",
        "workingOut": "\\theta = (180 - 90) / 2 = 45^\\circ"
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
            0,
            6
          ],
          "R": [
            6,
            0
          ]
        },
        "segments": [
          {
            "from": "P",
            "to": "Q"
          },
          {
            "from": "Q",
            "to": "R"
          },
          {
            "from": "R",
            "to": "P"
          }
        ],
        "angles": [
          {
            "at": "P",
            "right": true
          },
          {
            "at": "R",
            "text": "\\theta"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2d-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "Triangle $LNQ$ is equilateral ($LN = NQ = QL = 6$). Find $\\alpha$ (Angle $LQN$) in degrees.",
    "a": "60",
    "hint": "All angles in equilateral triangle are 60.",
    "solutionSteps": [
      {
        "explanation": "Equilateral triangle angles are 60°.",
        "workingOut": "\\alpha = 60^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "L": [
            3,
            5
          ],
          "N": [
            0,
            0
          ],
          "M": [
            8,
            0
          ],
          "Q": [
            4,
            0
          ]
        },
        "segments": [
          {
            "from": "L",
            "to": "N"
          },
          {
            "from": "N",
            "to": "M"
          },
          {
            "from": "M",
            "to": "L"
          },
          {
            "from": "L",
            "to": "Q"
          }
        ],
        "angles": [
          {
            "at": "Q",
            "text": "\\alpha"
          },
          {
            "at": "M",
            "text": "\\beta"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2d-beta",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Review of triangles",
    "question": "Triangle $LNQ$ is equilateral ($LN=NQ=QL=6$). $M$ is on the line $NQ$ extended, such that $QM = 6$. Find $\\beta$ (Angle $M$) in degrees.",
    "a": "30",
    "hint": "Triangle LQM is isosceles with LQ=QM.",
    "solutionSteps": [
      {
        "explanation": "Angle LQM = 180 - 60 = 120.",
        "workingOut": "\\beta = (180 - 120) / 2 = 30^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "L": [
            3,
            5
          ],
          "N": [
            0,
            0
          ],
          "M": [
            8,
            0
          ],
          "Q": [
            4,
            0
          ]
        },
        "segments": [
          {
            "from": "L",
            "to": "N"
          },
          {
            "from": "N",
            "to": "M"
          },
          {
            "from": "M",
            "to": "L"
          },
          {
            "from": "L",
            "to": "Q"
          }
        ],
        "angles": [
          {
            "at": "Q",
            "text": "\\alpha"
          },
          {
            "at": "M",
            "text": "\\beta"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2e-theta",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "Lines $AB$ and $CD$ are parallel. A transversal intersects them. If the alternate interior angle is $110^\\circ$, find $\\theta$.",
    "a": "110",
    "hint": "Alternate interior angles are equal.",
    "solutionSteps": [
      {
        "explanation": "Alternate interior angles are equal.",
        "workingOut": "\\theta = 110^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            0,
            4
          ],
          "B": [
            6,
            4
          ],
          "C": [
            2,
            0
          ],
          "D": [
            8,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "C",
            "to": "D"
          },
          {
            "from": "A",
            "to": "D"
          }
        ],
        "angles": [
          {
            "at": "A",
            "text": "110°"
          },
          {
            "at": "D",
            "text": "\\theta"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2g-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "In right triangle $FCD$, angle $C = 90^\\circ$ and angle $F = 40^\\circ$. Find $\\alpha$ (Angle $D$) in degrees.",
    "a": "50",
    "hint": "Angle sum is 180.",
    "solutionSteps": [
      {
        "explanation": "Angle sum is 180.",
        "workingOut": "\\alpha = 180 - 90 - 40 = 50^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "F": [
            0,
            4
          ],
          "C": [
            0,
            0
          ],
          "D": [
            4,
            0
          ]
        },
        "segments": [
          {
            "from": "F",
            "to": "C"
          },
          {
            "from": "C",
            "to": "D"
          },
          {
            "from": "D",
            "to": "F"
          }
        ],
        "angles": [
          {
            "at": "C",
            "right": true
          },
          {
            "at": "F",
            "text": "40°"
          },
          {
            "at": "D",
            "text": "\\alpha"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2h-alpha",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Review of triangles",
    "question": "Points $A, B, C$ lie on a circle with center $O$. Angle $BOC = 120^\\circ$. Find $\\alpha$ (Angle $OBC$) in degrees.",
    "a": "30",
    "hint": "Triangle OBC is isosceles (OB and OC are radii).",
    "solutionSteps": [
      {
        "explanation": "Radii are equal.",
        "workingOut": "\\alpha = (180 - 120) / 2 = 30^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "O": [
            3,
            3
          ],
          "A": [
            3,
            6
          ],
          "B": [
            1,
            1
          ],
          "C": [
            5,
            1
          ]
        },
        "segments": [
          {
            "from": "O",
            "to": "A"
          },
          {
            "from": "O",
            "to": "B"
          },
          {
            "from": "O",
            "to": "C"
          },
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "A",
            "to": "C"
          },
          {
            "from": "B",
            "to": "C"
          }
        ],
        "angles": [
          {
            "at": "O",
            "text": "120°"
          },
          {
            "at": "B",
            "text": "\\alpha"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2h-beta",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Review of triangles",
    "question": "Points $A, B, C$ lie on a circle with center $O$. Angle $BOC = 120^\\circ$. Find $\\beta$ (Angle $BAC$) in degrees.",
    "a": "60",
    "hint": "Angle at center is twice angle at circumference.",
    "solutionSteps": [
      {
        "explanation": "Use circle theorems.",
        "workingOut": "\\beta = 120 / 2 = 60^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "O": [
            3,
            3
          ],
          "A": [
            3,
            6
          ],
          "B": [
            1,
            1
          ],
          "C": [
            5,
            1
          ]
        },
        "segments": [
          {
            "from": "O",
            "to": "A"
          },
          {
            "from": "O",
            "to": "B"
          },
          {
            "from": "O",
            "to": "C"
          },
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "A",
            "to": "C"
          },
          {
            "from": "B",
            "to": "C"
          }
        ],
        "angles": [
          {
            "at": "O",
            "text": "120°"
          },
          {
            "at": "B",
            "text": "\\alpha"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2i-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "In isosceles triangle $ABC$, $AB = AC$. Angle $B = 70^\\circ$. Find $\\alpha$ (Angle $A$) in degrees.",
    "a": "40",
    "hint": "Base angles are equal.",
    "solutionSteps": [
      {
        "explanation": "Angle C = 70.",
        "workingOut": "\\alpha = 180 - 70 - 70 = 40^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            3,
            5
          ],
          "B": [
            0,
            0
          ],
          "C": [
            6,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "A"
          }
        ],
        "angles": [
          {
            "at": "B",
            "text": "70°"
          },
          {
            "at": "A",
            "text": "\\alpha"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2j-alpha",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Review of triangles",
    "question": "Points $B, C$ lie on a circle with center $O$. Angle $BOC = 100^\\circ$. If $A$ is a point on the major arc $BC$, find angle $BAC$ ($\\alpha$) in degrees.",
    "a": "50",
    "hint": "Angle at center is twice angle at circumference.",
    "solutionSteps": [
      {
        "explanation": "Circle theorem.",
        "workingOut": "\\alpha = 100 / 2 = 50^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "O": [
            3,
            3
          ],
          "C": [
            5,
            5
          ],
          "B": [
            4,
            1
          ]
        },
        "segments": [
          {
            "from": "O",
            "to": "C"
          },
          {
            "from": "O",
            "to": "B"
          },
          {
            "from": "C",
            "to": "B"
          }
        ],
        "angles": [
          {
            "at": "O",
            "text": "100°"
          },
          {
            "at": "C",
            "text": "\\alpha"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2k-alpha",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "In quadrilateral $ABCD$, Angle $A = 80^\\circ$, Angle $B = 110^\\circ$, Angle $D = 40^\\circ$. Find $\\alpha$ (Angle $C$) in degrees.",
    "a": "130",
    "hint": "Quadrilateral angles sum to 360.",
    "solutionSteps": [
      {
        "explanation": "Sum = 360.",
        "workingOut": "\\alpha = 360 - (80 + 110 + 40) = 130^\\circ"
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
            2,
            4
          ],
          "C": [
            6,
            4
          ],
          "D": [
            8,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "D"
          },
          {
            "from": "D",
            "to": "A"
          }
        ],
        "angles": [
          {
            "at": "A",
            "text": "80°"
          },
          {
            "at": "B",
            "text": "110°"
          },
          {
            "at": "D",
            "text": "40°"
          },
          {
            "at": "C",
            "text": "\\alpha"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2m-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "In parallelogram $ABCD$, Angle $A = 60^\\circ$. Find $\\alpha$ (Angle $D$) in degrees.",
    "a": "120",
    "hint": "Adjacent angles in a parallelogram sum to 180.",
    "solutionSteps": [
      {
        "explanation": "Adjacent angles.",
        "workingOut": "\\alpha = 180 - 60 = 120^\\circ"
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
            2,
            4
          ],
          "C": [
            8,
            4
          ],
          "D": [
            6,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "D"
          },
          {
            "from": "D",
            "to": "A"
          }
        ],
        "angles": [
          {
            "at": "A",
            "text": "60°"
          },
          {
            "at": "D",
            "text": "\\alpha"
          },
          {
            "at": "C",
            "text": "\\beta"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2m-beta",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "In parallelogram $ABCD$, Angle $A = 60^\\circ$. Find $\\beta$ (Angle $C$) in degrees.",
    "a": "60",
    "hint": "Opposite angles are equal.",
    "solutionSteps": [
      {
        "explanation": "Opposite angles.",
        "workingOut": "\\beta = 60^\\circ"
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
            2,
            4
          ],
          "C": [
            8,
            4
          ],
          "D": [
            6,
            0
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "D"
          },
          {
            "from": "D",
            "to": "A"
          }
        ],
        "angles": [
          {
            "at": "A",
            "text": "60°"
          },
          {
            "at": "D",
            "text": "\\alpha"
          },
          {
            "at": "C",
            "text": "\\beta"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q3",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "The exterior angles of a regular polygon are each $45^\\circ$. How many sides does the polygon have?",
    "a": "8",
    "hint": "Exterior angles sum to 360.",
    "solutionSteps": [
      {
        "explanation": "360 / 45",
        "workingOut": "n = 8"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-8a-q4",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "Three angles of a pentagon are each $150^\\circ$ and the remaining angles are equal. Find the size of each of the two remaining angles in degrees.",
    "a": "45",
    "hint": "Pentagon angle sum is 540.",
    "solutionSteps": [
      {
        "explanation": "Sum = 540.",
        "workingOut": "540 - 450 = 90. 90 / 2 = 45^\\circ"
      }
    ],
    "graphData": null
  }
];