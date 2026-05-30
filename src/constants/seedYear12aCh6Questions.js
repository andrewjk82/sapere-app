export const Y12A_CH6_QUESTIONS = [
  {
    "id": "y12a-6a-q3",
    "type": "subquestions",
    "difficulty": "easy",
    "timeLimit": 90,
    "question": "Answer the following questions:",
    "t": "The behaviour of sin x near the origin",
    "subQuestions": [
      {
        "id": "y12a-6a-q3a",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "a) Express \\( 3^\\circ \\) in radians.",
        "a": "\\frac{\\pi}{60}",
        "solutionSteps": [
          {
            "explanation": "Use the conversion ratio",
            "workingOut": "180^\\circ = \\pi \\text{ radians}"
          },
          {
            "explanation": "Convert 3 degrees",
            "workingOut": "3^\\circ = 3 \\times \\frac{\\pi}{180} = \\frac{\\pi}{60}"
          }
        ]
      },
      {
        "id": "y12a-6a-q3b",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "b) Explain why \\( \\sin 3^\\circ \\approx \\frac{\\pi}{60} \\).",
        "solution": "For small angles \\( x \\) measured in radians, \\( \\sin x \\approx x \\). Since \\( 3^\\circ = \\frac{\\pi}{60} \\) radians, \\( \\sin 3^\\circ \\approx \\frac{\\pi}{60} \\).",
        "solutionSteps": [
          {
            "explanation": "Use the small angle approximation",
            "workingOut": "\\sin x \\approx x \\text{ for small } x \\text{ in radians}"
          },
          {
            "explanation": "Substitute the radian value",
            "workingOut": "\\sin 3^\\circ = \\sin \\left(\\frac{\\pi}{60}\\right) \\approx \\frac{\\pi}{60}"
          }
        ]
      },
      {
        "id": "y12a-6a-q3c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 90,
        "question": "c) Taking \\( \\pi \\) as 3.142, find \\( \\sin 3^\\circ \\), correct to four decimal places, without using a calculator.",
        "a": "0.0524",
        "solutionSteps": [
          {
            "explanation": "Use the approximation from part (b)",
            "workingOut": "\\sin 3^\\circ \\approx \\frac{\\pi}{60}"
          },
          {
            "explanation": "Substitute the value of pi",
            "workingOut": "\\approx \\frac{3.142}{60}"
          },
          {
            "explanation": "Calculate the decimal value",
            "workingOut": "0.052366..."
          },
          {
            "explanation": "Round to four decimal places",
            "workingOut": "0.0524"
          }
        ]
      }
    ]
  },
  {
    "id": "y12a-6a-q6",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A car travels \\( 2 \\text{ km} \\) up a road that is inclined at \\( 4^\\circ \\) to the horizontal. Through what vertical distance has the car climbed? (Use the fact that \\( \\sin x \\approx x \\) for small angles, and give your answer correct to the nearest metre.)",
    "a": "140",
    "t": "The behaviour of sin x near the origin",
    "solutionSteps": [
      {
        "explanation": "Convert the angle to radians",
        "workingOut": "4^\\circ = 4 \\times \\frac{\\pi}{180} = \\frac{\\pi}{45} \\text{ radians}"
      },
      {
        "explanation": "Use small angle approximation for sine",
        "workingOut": "\\sin(4^\\circ) \\approx \\frac{\\pi}{45}"
      },
      {
        "explanation": "Set up the trigonometric ratio for vertical distance h",
        "workingOut": "\\sin(4^\\circ) = \\frac{h}{2000}"
      },
      {
        "explanation": "Solve for h",
        "workingOut": "h = 2000 \\times \\sin(4^\\circ) \\approx 2000 \\times \\frac{\\pi}{45}"
      },
      {
        "explanation": "Calculate the value",
        "workingOut": "h \\approx \\frac{400\\pi}{9} \\approx 139.6..."
      },
      {
        "explanation": "Round to the nearest metre",
        "workingOut": "140"
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
            10,
            0
          ],
          "C": [
            10,
            2
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
            "right": true
          },
          {
            "at": "A",
            "label": "4^\\circ"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "C",
              "A"
            ],
            "text": "2 km"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "h"
          }
        ]
      }
    }
  },
  {
    "id": "y12a-6a-q7",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A tower is 40 metres high. What angle, correct to the nearest minute, does it subtend at a point 5 km away? (Use the fact that when \\( x \\) is small, \\( \\tan x \\approx x \\).)",
    "a": "28'",
    "t": "The behaviour of sin x near the origin",
    "solutionSteps": [
      {
        "explanation": "Set up the tangent ratio for the angle subtended",
        "workingOut": "\\tan \\theta = \\frac{\\text{height}}{\\text{distance}} = \\frac{40}{5000} = \\frac{1}{125}"
      },
      {
        "explanation": "Use the small angle approximation for tangent",
        "workingOut": "\\text{For small angles, } \\tan \\theta \\approx \\theta \\text{ in radians}"
      },
      {
        "explanation": "Approximate the angle in radians",
        "workingOut": "\\theta \\approx \\frac{1}{125} \\text{ radians}"
      },
      {
        "explanation": "Convert radians to degrees",
        "workingOut": "\\theta \\approx \\frac{1}{125} \\times \\frac{180}{\\pi} = \\frac{36}{25\\pi}^\\circ"
      },
      {
        "explanation": "Convert degrees to minutes",
        "workingOut": "\\frac{36}{25\\pi}^\\circ \\approx 0.458366^\\circ \\times 60 = 27.50...'"
      },
      {
        "explanation": "Round to the nearest minute",
        "workingOut": "28'"
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
            12,
            0
          ],
          "C": [
            12,
            2
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
            "right": true
          },
          {
            "at": "A",
            "label": "\\theta"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "5 km"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "40 m"
          }
        ]
      }
    }
  },
  {
    "id": "y12a-6a-q10",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "The moon subtends an angle of \\( 32' \\) at an observation point on Earth, \\( 380\\,000 \\text{ km} \\) away. Use the fact that the diameter of the moon is approximately equal to an arc of a circle whose centre is the point of observation to find the approximate diameter of the moon to the nearest kilometre.",
    "a": "3537",
    "t": "The behaviour of sin x near the origin",
    "solutionSteps": [
      {
        "explanation": "Convert the subtended angle from minutes to degrees",
        "workingOut": "\\theta = 32' = \\left(\\frac{32}{60}\\right)^\\circ = \\left(\\frac{8}{15}\\right)^\\circ"
      },
      {
        "explanation": "Convert the angle to radians",
        "workingOut": "\\theta = \\frac{8}{15} \\times \\frac{\\pi}{180} = \\frac{2\\pi}{675} \\text{ radians}"
      },
      {
        "explanation": "Use the arc length formula to approximate diameter",
        "workingOut": "D \\approx s = r\\theta"
      },
      {
        "explanation": "Substitute the given values",
        "workingOut": "D \\approx 380\\,000 \\times \\frac{2\\pi}{675}"
      },
      {
        "explanation": "Calculate the value",
        "workingOut": "D \\approx \\frac{760\\,000\\pi}{675} \\approx 3537.23..."
      },
      {
        "explanation": "Round to the nearest kilometre",
        "workingOut": "3537"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "O": [
            0,
            0
          ],
          "A": [
            10,
            1.5
          ],
          "B": [
            10,
            -1.5
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
            "to": "B",
            "dashed": true
          }
        ],
        "angles": [
          {
            "at": "O",
            "label": "32'"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "O",
              "A"
            ],
            "text": "380 000 km",
            "labelPos": [
              5,
              1.5
            ]
          },
          {
            "between": [
              "A",
              "B"
            ],
            "text": "D"
          }
        ]
      }
    }
  },
  {
    "id": "y12a-6a-q11",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "A regular polygon of 360 sides is inscribed in a circle of radius \\( 80 \\text{ cm} \\). Find the approximate length of each side, correct to two decimal places.",
    "a": "1.40",
    "t": "The behaviour of sin x near the origin",
    "solutionSteps": [
      {
        "explanation": "Find the angle subtended by each side at the centre",
        "workingOut": "\\theta = \\frac{360^\\circ}{360} = 1^\\circ"
      },
      {
        "explanation": "Convert the angle to radians",
        "workingOut": "\\theta = 1^\\circ = \\frac{\\pi}{180} \\text{ radians}"
      },
      {
        "explanation": "Use the arc length approximation for a large number of sides",
        "workingOut": "\\text{side length } s \\approx r\\theta"
      },
      {
        "explanation": "Substitute the given values",
        "workingOut": "s \\approx 80 \\times \\frac{\\pi}{180}"
      },
      {
        "explanation": "Calculate the value",
        "workingOut": "s \\approx \\frac{4\\pi}{9} \\approx 1.39626..."
      },
      {
        "explanation": "Round to two decimal places",
        "workingOut": "1.40"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 300,
        "points": {
          "O": [
            0,
            0
          ],
          "A": [
            5,
            1
          ],
          "B": [
            5,
            -1
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
            "to": "B"
          }
        ],
        "angles": [
          {
            "at": "O",
            "label": "1^\\circ"
          }
        ],
        "sideLabels": [
          {
            "between": [
              "O",
              "A"
            ],
            "text": "80 cm",
            "labelPos": [
              2.5,
              1.5
            ]
          },
          {
            "between": [
              "A",
              "B"
            ],
            "text": "s",
            "labelPos": [
              5.5,
              0
            ]
          }
        ]
      }
    }
  }
];
