export const Y10_CH8A_QUESTIONS = [
  {
    "id": "y10-8a-q1a-x",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "In right triangle $ABC$ (right angle at $B$), Angle $A = 45^\\circ$ and $BC = 12$. Find $x$ (side $AB$).",
    "a": "12",
    "t": "Review of triangles",
    "solutionSteps": [
      {
        "explanation": "Isosceles right triangle.",
        "workingOut": "AB = BC = 12"
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
    "id": "y10-8a-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "Triangle $RST$ is equilateral. Find the values of $\\alpha, \\beta, \\gamma$ in degrees. (Write as e.g., 60,60,60)",
    "a": "60,60,60",
    "solutionSteps": [
      {
        "explanation": "All angles equal.",
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
            "to": "S",
            "ticks": 1
          },
          {
            "from": "S",
            "to": "T",
            "ticks": 1
          },
          {
            "from": "T",
            "to": "R",
            "ticks": 1
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
    "question": "In triangle $WXY$, $WX = XY$. The exterior angle at $X$ is $80^\\circ$. Find $\\theta$ (Angle $W$) in degrees.",
    "a": "50",
    "solutionSteps": [
      {
        "explanation": "Interior X = 180 - 80 = 100°.",
        "workingOut": "\\theta = (180 - 100) / 2 = 40^\\circ"
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
            3
          ],
          "Y": [
            7,
            0
          ],
          "Z": [
            5.33,
            4
          ]
        },
        "segments": [
          {
            "from": "W",
            "to": "X",
            "ticks": 1
          },
          {
            "from": "X",
            "to": "Y",
            "ticks": 1
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
            "text": "80°"
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
    "question": "In triangle $PQR$, $PQ = QR$ and Angle $Q = 60^\\circ$. $QR = 7$ cm. Find $\\theta$ (Angle $P$) in degrees.",
    "a": "60",
    "solutionSteps": [
      {
        "explanation": "Isosceles with 60° is equilateral.",
        "workingOut": "\\theta = 60^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "P": [
            2,
            4
          ],
          "Q": [
            0,
            0
          ],
          "R": [
            4,
            0
          ]
        },
        "segments": [
          {
            "from": "P",
            "to": "Q",
            "ticks": 1
          },
          {
            "from": "Q",
            "to": "R",
            "ticks": 1
          },
          {
            "from": "R",
            "to": "P"
          }
        ],
        "angles": [
          {
            "at": "Q",
            "text": "60°"
          },
          {
            "at": "P",
            "text": "\\theta"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2c-y",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "t": "Review of triangles",
    "question": "In triangle $PQR$, $PQ = QR$ and Angle $Q = 60^\\circ$. $QR = 7$ cm. Find $y$ ($PR$).",
    "a": "7",
    "solutionSteps": [
      {
        "explanation": "Triangle is equilateral.",
        "workingOut": "PR = 7"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "P": [
            2,
            4
          ],
          "Q": [
            0,
            0
          ],
          "R": [
            4,
            0
          ]
        },
        "segments": [
          {
            "from": "P",
            "to": "Q",
            "ticks": 1
          },
          {
            "from": "Q",
            "to": "R",
            "ticks": 1
          },
          {
            "from": "R",
            "to": "P"
          }
        ],
        "angles": [
          {
            "at": "Q",
            "text": "60°"
          },
          {
            "at": "P",
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
    "timeLimit": 60,
    "t": "Review of triangles",
    "question": "Triangle $LNQ$ is equilateral. $M$ is on $NQ$ extended, and $NQ = QM$. Find $\\alpha$ (Angle $N$) in degrees.",
    "a": "60",
    "solutionSteps": [
      {
        "explanation": "Equilateral triangle.",
        "workingOut": "\\alpha = 60^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "L": [
            3,
            5.2
          ],
          "N": [
            0,
            0
          ],
          "Q": [
            6,
            0
          ],
          "M": [
            12,
            0
          ]
        },
        "segments": [
          {
            "from": "L",
            "to": "N",
            "ticks": 1
          },
          {
            "from": "N",
            "to": "Q",
            "ticks": 1
          },
          {
            "from": "Q",
            "to": "L",
            "ticks": 1
          },
          {
            "from": "Q",
            "to": "M",
            "ticks": 1
          },
          {
            "from": "L",
            "to": "M"
          }
        ],
        "angles": [
          {
            "at": "N",
            "text": "\\alpha"
          },
          {
            "at": "M",
            "text": "\\beta"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "L",
              "N"
            ],
            "text": "5"
          },
          {
            "between": [
              "N",
              "M"
            ],
            "text": "y"
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
    "question": "Triangle $LNQ$ is equilateral. $M$ is on $NQ$ extended, and $NQ = QM$. Find $\\beta$ (Angle $M$) in degrees.",
    "a": "30",
    "solutionSteps": [
      {
        "explanation": "Angle LQM = 120°. Triangle LQM is isosceles.",
        "workingOut": "\\beta = (180 - 120) / 2 = 30^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "L": [
            3,
            5.2
          ],
          "N": [
            0,
            0
          ],
          "Q": [
            6,
            0
          ],
          "M": [
            12,
            0
          ]
        },
        "segments": [
          {
            "from": "L",
            "to": "N",
            "ticks": 1
          },
          {
            "from": "N",
            "to": "Q",
            "ticks": 1
          },
          {
            "from": "Q",
            "to": "L",
            "ticks": 1
          },
          {
            "from": "Q",
            "to": "M",
            "ticks": 1
          },
          {
            "from": "L",
            "to": "M"
          }
        ],
        "angles": [
          {
            "at": "N",
            "text": "\\alpha"
          },
          {
            "at": "M",
            "text": "\\beta"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "L",
              "N"
            ],
            "text": "5"
          },
          {
            "between": [
              "N",
              "M"
            ],
            "text": "y"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2d-y",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 60,
    "t": "Review of triangles",
    "question": "Triangle $LNQ$ is equilateral with side 5. $M$ is on $NQ$ extended, $NQ = QM$. Find $y$ (length $NM$).",
    "a": "10",
    "solutionSteps": [
      {
        "explanation": "NM = NQ + QM = 5 + 5",
        "workingOut": "y = 10"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "L": [
            3,
            5.2
          ],
          "N": [
            0,
            0
          ],
          "Q": [
            6,
            0
          ],
          "M": [
            12,
            0
          ]
        },
        "segments": [
          {
            "from": "L",
            "to": "N",
            "ticks": 1
          },
          {
            "from": "N",
            "to": "Q",
            "ticks": 1
          },
          {
            "from": "Q",
            "to": "L",
            "ticks": 1
          },
          {
            "from": "Q",
            "to": "M",
            "ticks": 1
          },
          {
            "from": "L",
            "to": "M"
          }
        ],
        "angles": [
          {
            "at": "N",
            "text": "\\alpha"
          },
          {
            "at": "M",
            "text": "\\beta"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "L",
              "N"
            ],
            "text": "5"
          },
          {
            "between": [
              "N",
              "M"
            ],
            "text": "y"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2e-theta",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Review of triangles",
    "question": "Line $CA$ // Line $HJ$. $C, D, F, E$ are collinear. $AC = AD$. Angle $ACE = 55^\\circ$. Find $\\theta$ (Angle $ADE$) in degrees.",
    "a": "125",
    "solutionSteps": [
      {
        "explanation": "Isosceles triangle ACD.",
        "workingOut": "Angle ADC = 55°"
      },
      {
        "explanation": "Supplementary angles on line.",
        "workingOut": "\\theta = 180 - 55 = 125^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "C": [
            2,
            0
          ],
          "E": [
            10,
            0
          ],
          "D": [
            6,
            0
          ],
          "A": [
            4,
            3
          ],
          "F": [
            8,
            0
          ],
          "G": [
            7,
            -1.5
          ],
          "H": [
            7,
            -3
          ],
          "J": [
            9,
            3
          ]
        },
        "segments": [
          {
            "from": "C",
            "to": "E"
          },
          {
            "from": "C",
            "to": "A",
            "ticks": 2
          },
          {
            "from": "A",
            "to": "D",
            "ticks": 2
          },
          {
            "from": "A",
            "to": "G"
          },
          {
            "from": "H",
            "to": "J"
          }
        ],
        "arrows": [
          {
            "from": "C",
            "to": "A"
          },
          {
            "from": "H",
            "to": "J"
          }
        ],
        "angles": [
          {
            "at": "C",
            "text": "55°"
          },
          {
            "at": "D",
            "text": "\\theta"
          },
          {
            "at": "G",
            "text": "\\alpha"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2e-alpha",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Review of triangles",
    "question": "Line $CA$ // Line $HJ$. $AC = AD$. Angle $ACE = 55^\\circ$. Line $AD$ intersects $HJ$ at $G$. Find $\\alpha$ (obtuse angle at intersection $G$) in degrees.",
    "a": "110",
    "solutionSteps": [
      {
        "explanation": "Angle CAD = 180 - 110 = 70°.",
        "workingOut": "Alt. int. angle HGA = 70°"
      },
      {
        "explanation": "Supplementary angle.",
        "workingOut": "\\alpha = 180 - 70 = 110^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "C": [
            2,
            0
          ],
          "E": [
            10,
            0
          ],
          "D": [
            6,
            0
          ],
          "A": [
            4,
            3
          ],
          "F": [
            8,
            0
          ],
          "G": [
            7,
            -1.5
          ],
          "H": [
            7,
            -3
          ],
          "J": [
            9,
            3
          ]
        },
        "segments": [
          {
            "from": "C",
            "to": "E"
          },
          {
            "from": "C",
            "to": "A",
            "ticks": 2
          },
          {
            "from": "A",
            "to": "D",
            "ticks": 2
          },
          {
            "from": "A",
            "to": "G"
          },
          {
            "from": "H",
            "to": "J"
          }
        ],
        "arrows": [
          {
            "from": "C",
            "to": "A"
          },
          {
            "from": "H",
            "to": "J"
          }
        ],
        "angles": [
          {
            "at": "C",
            "text": "55°"
          },
          {
            "at": "D",
            "text": "\\theta"
          },
          {
            "at": "G",
            "text": "\\alpha"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2f-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "Line $DB$ // Line $EF$. $H,G,C,A$ are collinear. Triangle $DGC$ has $DG = DC$. Angle $DCG = 55^\\circ$. Find $\\alpha$ (Angle $DGC$) in degrees.",
    "a": "55",
    "solutionSteps": [
      {
        "explanation": "Isosceles triangle.",
        "workingOut": "\\alpha = 55^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "H": [
            0,
            4
          ],
          "A": [
            8,
            4
          ],
          "D": [
            4,
            8
          ],
          "B": [
            8,
            0
          ],
          "E": [
            2,
            0
          ],
          "F": [
            6,
            8
          ],
          "G": [
            5,
            4
          ],
          "C": [
            6,
            4
          ]
        },
        "segments": [
          {
            "from": "H",
            "to": "A"
          },
          {
            "from": "D",
            "to": "B"
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "D",
            "to": "G",
            "ticks": 1
          },
          {
            "from": "D",
            "to": "C",
            "ticks": 1
          }
        ],
        "arrows": [
          {
            "from": "D",
            "to": "B"
          },
          {
            "from": "E",
            "to": "F"
          }
        ],
        "angles": [
          {
            "at": "C",
            "text": "55°"
          },
          {
            "at": "G",
            "text": "\\alpha",
            "color": "black"
          },
          {
            "at": "G",
            "text": "\\beta",
            "color": "red"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2f-beta",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "Find $\\beta$ (Angle $HGD$) in degrees.",
    "a": "125",
    "solutionSteps": [
      {
        "explanation": "Supplementary to alpha.",
        "workingOut": "\\beta = 180 - 55 = 125^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "H": [
            0,
            4
          ],
          "A": [
            8,
            4
          ],
          "D": [
            4,
            8
          ],
          "B": [
            8,
            0
          ],
          "E": [
            2,
            0
          ],
          "F": [
            6,
            8
          ],
          "G": [
            5,
            4
          ],
          "C": [
            6,
            4
          ]
        },
        "segments": [
          {
            "from": "H",
            "to": "A"
          },
          {
            "from": "D",
            "to": "B"
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "D",
            "to": "G",
            "ticks": 1
          },
          {
            "from": "D",
            "to": "C",
            "ticks": 1
          }
        ],
        "arrows": [
          {
            "from": "D",
            "to": "B"
          },
          {
            "from": "E",
            "to": "F"
          }
        ],
        "angles": [
          {
            "at": "C",
            "text": "55°"
          },
          {
            "at": "G",
            "text": "\\alpha",
            "color": "black"
          },
          {
            "at": "G",
            "text": "\\beta",
            "color": "red"
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
    "question": "Line $CE$ // Line $AB$. $FA \\perp AB$. In triangle $FAD$, $FD = AD$. Angle $FAD = 40^\\circ$. Line $CE$ intersects $FD$ at $D$. Find $\\alpha$ (Angle $ADC$) in degrees.",
    "a": "50",
    "solutionSteps": [
      {
        "explanation": "In right triangle ACD, Angle C=90, A=40.",
        "workingOut": "\\alpha = 180 - 90 - 40 = 50^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "F": [
            0,
            6
          ],
          "A": [
            0,
            0
          ],
          "B": [
            6,
            0
          ],
          "C": [
            0,
            3
          ],
          "E": [
            6,
            3
          ],
          "D": [
            3,
            3
          ]
        },
        "segments": [
          {
            "from": "F",
            "to": "A"
          },
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "C",
            "to": "E"
          },
          {
            "from": "F",
            "to": "D",
            "ticks": 1
          },
          {
            "from": "A",
            "to": "D",
            "ticks": 1
          }
        ],
        "arrows": [
          {
            "from": "C",
            "to": "E"
          },
          {
            "from": "A",
            "to": "B"
          }
        ],
        "angles": [
          {
            "at": "A",
            "right": true
          },
          {
            "at": "A",
            "text": "40°"
          },
          {
            "at": "D",
            "text": "\\alpha",
            "color": "black"
          },
          {
            "at": "D",
            "text": "\\theta",
            "color": "red"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2g-theta",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Review of triangles",
    "question": "Find $\\theta$ (Angle $FDE$) in degrees.",
    "a": "130",
    "solutionSteps": [
      {
        "explanation": "Angle FDC = 50°. Angles on a straight line CE.",
        "workingOut": "\\theta = 180 - 50 = 130^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "F": [
            0,
            6
          ],
          "A": [
            0,
            0
          ],
          "B": [
            6,
            0
          ],
          "C": [
            0,
            3
          ],
          "E": [
            6,
            3
          ],
          "D": [
            3,
            3
          ]
        },
        "segments": [
          {
            "from": "F",
            "to": "A"
          },
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "C",
            "to": "E"
          },
          {
            "from": "F",
            "to": "D",
            "ticks": 1
          },
          {
            "from": "A",
            "to": "D",
            "ticks": 1
          }
        ],
        "arrows": [
          {
            "from": "C",
            "to": "E"
          },
          {
            "from": "A",
            "to": "B"
          }
        ],
        "angles": [
          {
            "at": "A",
            "right": true
          },
          {
            "at": "A",
            "text": "40°"
          },
          {
            "at": "D",
            "text": "\\alpha",
            "color": "black"
          },
          {
            "at": "D",
            "text": "\\theta",
            "color": "red"
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
    "question": "Points $A, B, C$ are on a circle center $O$. Angle $AOB = 130^\\circ$, Angle $BOC = 60^\\circ$. Find $\\alpha$ (Angle $OBC$).",
    "a": "60",
    "solutionSteps": [
      {
        "explanation": "Triangle OBC is isosceles with vertex 60°, so equilateral.",
        "workingOut": "\\alpha = 60^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "O": [
            4,
            4
          ],
          "A": [
            4,
            8
          ],
          "B": [
            0.5,
            2
          ],
          "C": [
            7.5,
            2
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
            "at": "O",
            "text": "130°",
            "color": "black"
          },
          {
            "at": "O",
            "text": "60°",
            "color": "red"
          },
          {
            "at": "B",
            "text": "\\alpha"
          },
          {
            "at": "B",
            "text": "\\beta"
          }
        ],
        "circles": [
          {
            "center": "O",
            "through": "A"
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
    "question": "Points $A, B, C$ are on a circle center $O$. Angle $AOB = 130^\\circ$, Angle $BOC = 60^\\circ$. Find $\\beta$ (Angle $OBA$).",
    "a": "25",
    "solutionSteps": [
      {
        "explanation": "Triangle OAB is isosceles.",
        "workingOut": "\\beta = (180 - 130) / 2 = 25^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "O": [
            4,
            4
          ],
          "A": [
            4,
            8
          ],
          "B": [
            0.5,
            2
          ],
          "C": [
            7.5,
            2
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
            "at": "O",
            "text": "130°",
            "color": "black"
          },
          {
            "at": "O",
            "text": "60°",
            "color": "red"
          },
          {
            "at": "B",
            "text": "\\alpha"
          },
          {
            "at": "B",
            "text": "\\beta"
          }
        ],
        "circles": [
          {
            "center": "O",
            "through": "A"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2i-alpha",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "t": "Review of triangles",
    "question": "In triangle $ABC$, $AB = AC$. Line $AD$ // $BC$. Angle $BAC = \\alpha$ and Angle $CAD = 2\\alpha$. Find $\\alpha$ in degrees.",
    "a": "36",
    "solutionSteps": [
      {
        "explanation": "Alternate interior angle ACB = 2α. Triangle is isosceles so ABC = 2α.",
        "workingOut": "5\\alpha = 180 \\implies \\alpha = 36^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            4,
            6
          ],
          "B": [
            0,
            0
          ],
          "C": [
            8,
            0
          ],
          "D": [
            8,
            6
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B",
            "ticks": 1
          },
          {
            "from": "A",
            "to": "C",
            "ticks": 1
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "A",
            "to": "D"
          }
        ],
        "arrows": [
          {
            "from": "A",
            "to": "D"
          },
          {
            "from": "B",
            "to": "C"
          }
        ],
        "angles": [
          {
            "at": "A",
            "text": "\\alpha",
            "color": "black"
          },
          {
            "at": "A",
            "text": "2\\alpha",
            "color": "red"
          },
          {
            "at": "B",
            "text": "\\beta"
          }
        ]
      }
    }
  },
  {
    "id": "y10-8a-q2i-beta",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "Find $\\beta$ (Angle $ABC$) in degrees.",
    "a": "72",
    "solutionSteps": [
      {
        "explanation": "\\beta = 2\\alpha",
        "workingOut": "\\beta = 72^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "A": [
            4,
            6
          ],
          "B": [
            0,
            0
          ],
          "C": [
            8,
            0
          ],
          "D": [
            8,
            6
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B",
            "ticks": 1
          },
          {
            "from": "A",
            "to": "C",
            "ticks": 1
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "A",
            "to": "D"
          }
        ],
        "arrows": [
          {
            "from": "A",
            "to": "D"
          },
          {
            "from": "B",
            "to": "C"
          }
        ],
        "angles": [
          {
            "at": "A",
            "text": "\\alpha",
            "color": "black"
          },
          {
            "at": "A",
            "text": "2\\alpha",
            "color": "red"
          },
          {
            "at": "B",
            "text": "\\beta"
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
    "question": "Points $A, B, C$ on circle center $O$. Line $CD$ // $AB$. Angle $AOB = 120^\\circ$. Angle $ACD = 80^\\circ$. Find $\\alpha$ (Angle $ACB$) in degrees.",
    "a": "60",
    "solutionSteps": [
      {
        "explanation": "Angle at circumference is half angle at center.",
        "workingOut": "\\alpha = 120 / 2 = 60^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "O": [
            4,
            4
          ],
          "A": [
            1,
            2
          ],
          "B": [
            7,
            2
          ],
          "C": [
            2,
            7.5
          ],
          "D": [
            8,
            7.5
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
            "from": "A",
            "to": "C"
          },
          {
            "from": "B",
            "to": "C"
          },
          {
            "from": "C",
            "to": "D"
          }
        ],
        "arrows": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "C",
            "to": "D"
          }
        ],
        "angles": [
          {
            "at": "O",
            "text": "120°"
          },
          {
            "at": "C",
            "text": "80°",
            "color": "black"
          },
          {
            "at": "C",
            "text": "\\alpha"
          }
        ],
        "circles": [
          {
            "center": "O",
            "through": "A"
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
    "id": "y10-8a-q2l-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "Find the size of the interior angle $\\alpha$ of a regular pentagon in degrees.",
    "a": "108",
    "solutionSteps": [
      {
        "explanation": "Formula.",
        "workingOut": "\\alpha = 180 \\times (5-2) / 5 = 108^\\circ"
      }
    ],
    "graphData": null
  },
  {
    "id": "y10-8a-q2m-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "t": "Review of triangles",
    "question": "In parallelogram $ABCD$, Angle $A = 60^\\circ$. Find $\\alpha$ (Angle $D$) in degrees.",
    "a": "120",
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
        "arrows": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "C",
            "to": "D"
          },
          {
            "from": "B",
            "to": "C",
            "ticks": 2
          },
          {
            "from": "A",
            "to": "D",
            "ticks": 2
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
        "arrows": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "C",
            "to": "D"
          },
          {
            "from": "B",
            "to": "C",
            "ticks": 2
          },
          {
            "from": "A",
            "to": "D",
            "ticks": 2
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
    "solutionSteps": [
      {
        "explanation": "Sum = 540.",
        "workingOut": "540 - 450 = 90. 90 / 2 = 45^\\circ"
      }
    ],
    "graphData": null
  }
];