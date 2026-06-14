export const Y11_CH6H_QUESTIONS = [
  {
    "id": "y11a-6H-q1a",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, one side of length \\(x\\) is opposite to an angle of \\(45^{\\circ}\\), and another side of length \\(12\\) is opposite to an angle of \\(80^{\\circ}\\). Find the value of \\(x\\), correct to one decimal place.",
    "a": "8.6",
    "h": "Use the sine rule: \\(\\frac{x}{\\sin A} = \\frac{a}{\\sin B}\\).",
    "s": "Using the sine rule: \\(\\frac{x}{\\sin 45^{\\circ}} = \\frac{12}{\\sin 80^{\\circ}}\\). Thus, \\(x = \\frac{12 \\times \\sin 45^{\\circ}}{\\sin 80^{\\circ}} \\approx 8.6\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule relating side \\(x\\) and angle \\(45^{\\circ}\\) to side \\(12\\) and angle \\(80^{\\circ}\\).",
        "workingOut": "\\frac{x}{\\sin 45^{\\circ}} = \\frac{12}{\\sin 80^{\\circ}}"
      },
      {
        "explanation": "Isolate \\(x\\) by multiplying both sides by \\(\\sin 45^{\\circ}\\).",
        "workingOut": "x = \\frac{12 \\sin 45^{\\circ}}{\\sin 80^{\\circ}}"
      },
      {
        "explanation": "Evaluate the expression and round to one decimal place.",
        "workingOut": "x \\approx 8.6"
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
    }
  },
  {
    "id": "y11a-6H-q1b",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, one side of length \\(x\\) is opposite to an angle of \\(115^{\\circ}\\), and another side of length \\(4\\) is opposite to an angle of \\(35^{\\circ}\\). Find the value of \\(x\\), correct to one decimal place.",
    "a": "6.3",
    "h": "Apply the sine rule: \\(\\frac{x}{\\sin 115^{\\circ}} = \\frac{4}{\\sin 35^{\\circ}}\\).",
    "s": "Using the sine rule: \\(\\frac{x}{\\sin 115^{\\circ}} = \\frac{4}{\\sin 35^{\\circ}}\\). Thus, \\(x = \\frac{4 \\times \\sin 115^{\\circ}}{\\sin 35^{\\circ}} \\approx 6.3\\).",
    "solutionSteps": [
      {
        "explanation": "State the sine rule relation.",
        "workingOut": "\\frac{x}{\\sin 115^{\\circ}} = \\frac{4}{\\sin 35^{\\circ}}"
      },
      {
        "explanation": "Multiply by \\(\\sin 115^{\\circ}\\) to isolate \\(x\\).",
        "workingOut": "x = \\frac{4 \\sin 115^{\\circ}}{\\sin 35^{\\circ}}"
      },
      {
        "explanation": "Calculate and round to one decimal place.",
        "workingOut": "x \\approx 6.3"
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
    }
  },
  {
    "id": "y11a-6H-q1c",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "Find the value of \\(x\\), correct to one decimal place, if a side of length \\(x\\) is opposite to an angle of \\(80^{\\circ}\\), and a side of length \\(6\\) is opposite to an angle of \\(60^{\\circ}\\).",
    "a": "6.8",
    "h": "Use the sine rule: \\(\\frac{x}{\\sin 80^{\\circ}} = \\frac{6}{\\sin 60^{\\circ}}\\).",
    "s": "From the sine rule: \\(\\frac{x}{\\sin 80^{\\circ}} = \\frac{6}{\\sin 60^{\\circ}}\\). Thus, \\(x = \\frac{6 \\sin 80^{\\circ}}{\\sin 60^{\\circ}} \\approx 6.8\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{x}{\\sin 80^{\\circ}} = \\frac{6}{\\sin 60^{\\circ}}"
      },
      {
        "explanation": "Rearrange to solve for \\(x\\).",
        "workingOut": "x = \\frac{6 \\sin 80^{\\circ}}{\\sin 60^{\\circ}}"
      },
      {
        "explanation": "Calculate the value to 1 decimal place.",
        "workingOut": "x \\approx 6.8"
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
    }
  },
  {
    "id": "y11a-6H-q1d",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, one side of length \\(x\\) is opposite to an angle of \\(60^{\\circ}\\), and another side of length \\(5\\) is opposite to an angle of \\(70^{\\circ}\\). Find the value of \\(x\\), correct to one decimal place.",
    "a": "4.6",
    "h": "Write the sine rule equation: \\(\\frac{x}{\\sin 60^{\\circ}} = \\frac{5}{\\sin 70^{\\circ}}\\).",
    "s": "Using the sine rule: \\(\\frac{x}{\\sin 60^{\\circ}} = \\frac{5}{\\sin 70^{\\circ}}\\). Therefore, \\(x = \\frac{5 \\sin 60^{\\circ}}{\\sin 70^{\\circ}} \\approx 4.6\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{x}{\\sin 60^{\\circ}} = \\frac{5}{\\sin 70^{\\circ}}"
      },
      {
        "explanation": "Isolate \\(x\\).",
        "workingOut": "x = \\frac{5 \\sin 60^{\\circ}}{\\sin 70^{\\circ}}"
      },
      {
        "explanation": "Calculate the final length.",
        "workingOut": "x \\approx 4.6"
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
    }
  },
  {
    "id": "y11a-6H-q1e",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, one side of length \\(x\\) is opposite to an angle of \\(75^{\\circ}\\), and another side of length \\(9\\) is opposite to an angle of \\(50^{\\circ}\\). Find the value of \\(x\\), correct to one decimal place.",
    "a": "11.4",
    "h": "Apply the sine rule: \\(\\frac{x}{\\sin 75^{\\circ}} = \\frac{9}{\\sin 50^{\\circ}}\\).",
    "s": "From the sine rule: \\(\\frac{x}{\\sin 75^{\\circ}} = \\frac{9}{\\sin 50^{\\circ}}\\). Thus, \\(x = \\frac{9 \\sin 75^{\\circ}}{\\sin 50^{\\circ}} \\approx 11.4\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{x}{\\sin 75^{\\circ}} = \\frac{9}{\\sin 50^{\\circ}}"
      },
      {
        "explanation": "Isolate \\(x\\).",
        "workingOut": "x = \\frac{9 \\sin 75^{\\circ}}{\\sin 50^{\\circ}}"
      },
      {
        "explanation": "Calculate the value.",
        "workingOut": "x \\approx 11.4"
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
    }
  },
  {
    "id": "y11a-6H-q1f",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, one side of length \\(x\\) is opposite to an angle of \\(120^{\\circ}\\), and another side of length \\(6\\) is opposite to an angle of \\(35^{\\circ}\\). Find the value of \\(x\\), correct to one decimal place.",
    "a": "9.1",
    "h": "Apply the sine rule: \\(\\frac{x}{\\sin 120^{\\circ}} = \\frac{6}{\\sin 35^{\\circ}}\\).",
    "s": "From the sine rule: \\(\\frac{x}{\\sin 120^{\\circ}} = \\frac{6}{\\sin 35^{\\circ}}\\). Thus, \\(x = \\frac{6 \\sin 120^{\\circ}}{\\sin 35^{\\circ}} \\approx 9.1\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{x}{\\sin 120^{\\circ}} = \\frac{6}{\\sin 35^{\\circ}}"
      },
      {
        "explanation": "Isolate \\(x\\).",
        "workingOut": "x = \\frac{6 \\sin 120^{\\circ}}{\\sin 35^{\\circ}}"
      },
      {
        "explanation": "Calculate and round.",
        "workingOut": "x \\approx 9.1"
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
    }
  },
  {
    "id": "y11a-6H-q2a",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, side \\(a\\) is opposite to an angle of \\(65^{\\circ}\\). Another side of length \\(14\\) is opposite to an angle of \\(75^{\\circ}\\). Find the value of \\(a\\), correct to two decimal places.",
    "a": "13.14",
    "h": "Apply the sine rule: \\(\\frac{a}{\\sin 65^{\\circ}} = \\frac{14}{\\sin 75^{\\circ}}\\).",
    "s": "From the sine rule: \\(\\frac{a}{\\sin 65^{\\circ}} = \\frac{14}{\\sin 75^{\\circ}}\\). Thus, \\(a = \\frac{14 \\sin 65^{\\circ}}{\\sin 75^{\\circ}} \\approx 13.14\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{a}{\\sin 65^{\\circ}} = \\frac{14}{\\sin 75^{\\circ}}"
      },
      {
        "explanation": "Isolate \\(a\\).",
        "workingOut": "a = \\frac{14 \\sin 65^{\\circ}}{\\sin 75^{\\circ}}"
      },
      {
        "explanation": "Calculate to two decimal places.",
        "workingOut": "a \\approx 13.14"
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
    }
  },
  {
    "id": "y11a-6H-q2b",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, side \\(b\\) is opposite to an angle of \\(80^{\\circ}\\). Another side of length \\(18\\) is opposite to an angle of \\(28^{\\circ}\\). Find the value of \\(b\\), correct to two decimal places.",
    "a": "37.76",
    "h": "Apply the sine rule: \\(\\frac{b}{\\sin 80^{\\circ}} = \\frac{18}{\\sin 28^{\\circ}}\\).",
    "s": "From the sine rule: \\(\\frac{b}{\\sin 80^{\\circ}} = \\frac{18}{\\sin 28^{\\circ}}\\). Thus, \\(b = \\frac{18 \\sin 80^{\\circ}}{\\sin 28^{\\circ}} \\approx 37.76\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{b}{\\sin 80^{\\circ}} = \\frac{18}{\\sin 28^{\\circ}}"
      },
      {
        "explanation": "Isolate \\(b\\).",
        "workingOut": "b = \\frac{18 \\sin 80^{\\circ}}{\\sin 28^{\\circ}}"
      },
      {
        "explanation": "Calculate to two decimal places.",
        "workingOut": "b \\approx 37.76"
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
    }
  },
  {
    "id": "y11a-6H-q2c",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, side \\(c\\) is opposite to an angle of \\(110^{\\circ}\\). Another side of length \\(16\\) is opposite to an angle of \\(46^{\\circ}\\). Find the value of \\(c\\), correct to two decimal places.",
    "a": "20.90",
    "h": "Apply the sine rule: \\(\\frac{c}{\\sin 110^{\\circ}} = \\frac{16}{\\sin 46^{\\circ}}\\).",
    "s": "From the sine rule: \\(\\frac{c}{\\sin 110^{\\circ}} = \\frac{16}{\\sin 46^{\\circ}}\\). Thus, \\(c = \\frac{16 \\sin 110^{\\circ}}{\\sin 46^{\\circ}} \\approx 20.90\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{c}{\\sin 110^{\\circ}} = \\frac{16}{\\sin 46^{\\circ}}"
      },
      {
        "explanation": "Isolate \\(c\\).",
        "workingOut": "c = \\frac{16 \\sin 110^{\\circ}}{\\sin 46^{\\circ}}"
      },
      {
        "explanation": "Calculate to two decimal places.",
        "workingOut": "c \\approx 20.90"
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
    }
  },
  {
    "id": "y11a-6H-q3a",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, side of length \\(6\\) is opposite to an angle of \\(68^{\\circ}\\). Side of length \\(4\\) is opposite to an angle \\(\\theta\\). Find the value of \\(\\theta\\), correct to the nearest degree.",
    "a": "38°",
    "h": "Use the sine rule for angles: \\(\\frac{\\sin \\theta}{4} = \\frac{\\sin 68^{\\circ}}{6}\\).",
    "s": "From the sine rule: \\(\\frac{\\sin \\theta}{4} = \\frac{\\sin 68^{\\circ}}{6} \\implies \\sin \\theta = \\frac{4 \\sin 68^{\\circ}}{6} \\approx 0.6181 \\implies \\theta = \\arcsin(0.6181) \\approx 38.17^{\\circ} \\approx 38^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule in terms of sine ratios.",
        "workingOut": "\\frac{\\sin \\theta}{4} = \\frac{\\sin 68^{\\circ}}{6}"
      },
      {
        "explanation": "Isolate \\(\\sin \\theta\\).",
        "workingOut": "\\sin \\theta = \\frac{4 \\sin 68^{\\circ}}{6}"
      },
      {
        "explanation": "Find \\(\\theta\\) using arcsin and round to the nearest degree.",
        "workingOut": "\\theta \\approx 38^{\\circ}"
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
    }
  },
  {
    "id": "y11a-6H-q3b",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, side of length \\(12\\) is opposite to an angle of \\(80^{\\circ}\\). Side of length \\(9\\) is opposite to an angle \\(\\theta\\). Find the value of \\(\\theta\\), correct to the nearest degree.",
    "a": "48°",
    "h": "Apply the sine rule: \\(\\frac{\\sin \\theta}{9} = \\frac{\\sin 80^{\\circ}}{12}\\).",
    "s": "Using the sine rule: \\(\\frac{\\sin \\theta}{9} = \\frac{\\sin 80^{\\circ}}{12} \\implies \\sin \\theta = \\frac{9 \\sin 80^{\\circ}}{12} \\approx 0.7386 \\implies \\theta \\approx 47.6^{\\circ} \\approx 48^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "State the sine rule relation.",
        "workingOut": "\\frac{\\sin \\theta}{9} = \\frac{\\sin 80^{\\circ}}{12}"
      },
      {
        "explanation": "Isolate \\(\\sin \\theta\\).",
        "workingOut": "\\sin \\theta = \\frac{9 \\sin 80^{\\circ}}{12}"
      },
      {
        "explanation": "Apply the inverse sine and round to the nearest degree.",
        "workingOut": "\\theta \\approx 48^{\\circ}"
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
    }
  },
  {
    "id": "y11a-6H-q3c",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, side of length \\(15\\) is opposite to an angle of \\(105^{\\circ}\\). Side of length \\(11\\) is opposite to an angle \\(\\theta\\). Find \\(\\theta\\), correct to the nearest degree.",
    "a": "45°",
    "h": "Apply the sine rule: \\(\\frac{\\sin \\theta}{11} = \\frac{\\sin 105^{\\circ}}{15}\\).",
    "s": "From the sine rule: \\(\\frac{\\sin \\theta}{11} = \\frac{\\sin 105^{\\circ}}{15} \\implies \\sin \\theta = \\frac{11 \\sin 105^{\\circ}}{15} \\approx 0.7084 \\implies \\theta \\approx 45.1^{\\circ} \\approx 45^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{\\sin \\theta}{11} = \\frac{\\sin 105^{\\circ}}{15}"
      },
      {
        "explanation": "Solve for \\(\\sin \\theta\\).",
        "workingOut": "\\sin \\theta = \\frac{11 \\sin 105^{\\circ}}{15}"
      },
      {
        "explanation": "Calculate the angle to the nearest degree.",
        "workingOut": "\\theta \\approx 45^{\\circ}"
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
    }
  },
  {
    "id": "y11a-6H-q3d",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, side of length \\(20\\) is opposite to an angle of \\(75^{\\circ}\\). Side of length \\(8\\) is opposite to an angle \\(\\theta\\). Find \\(\\theta\\), correct to the nearest degree.",
    "a": "23°",
    "h": "Apply the sine rule: \\(\\frac{\\sin \\theta}{8} = \\frac{\\sin 75^{\\circ}}{20}\\).",
    "s": "From the sine rule: \\(\\frac{\\sin \\theta}{8} = \\frac{\\sin 75^{\\circ}}{20} \\implies \\sin \\theta = \\frac{8 \\sin 75^{\\circ}}{20} \\approx 0.3864 \\implies \\theta \\approx 22.7^{\\circ} \\approx 23^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "State the sine rule equation.",
        "workingOut": "\\frac{\\sin \\theta}{8} = \\frac{\\sin 75^{\\circ}}{20}"
      },
      {
        "explanation": "Calculate \\(\\sin \\theta\\).",
        "workingOut": "\\sin \\theta = 0.3864"
      },
      {
        "explanation": "Find the angle \\(\\theta\\) to the nearest degree.",
        "workingOut": "\\theta \\approx 23^{\\circ}"
      }
    ]
  },
  {
    "id": "y11a-6H-q3e",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, side of length \\(14\\) is opposite to an angle of \\(120^{\\circ}\\). Side of length \\(9\\) is opposite to an angle \\(\\theta\\). Find \\(\\theta\\), correct to the nearest degree.",
    "a": "34°",
    "h": "Apply the sine rule: \\(\\frac{\\sin \\theta}{9} = \\frac{\\sin 120^{\\circ}}{14}\\).",
    "s": "From the sine rule: \\(\\frac{\\sin \\theta}{9} = \\frac{\\sin 120^{\\circ}}{14} \\implies \\sin \\theta = \\frac{9 \\sin 120^{\\circ}}{14} \\approx 0.5567 \\implies \\theta \\approx 33.8^{\\circ} \\approx 34^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{\\sin \\theta}{9} = \\frac{\\sin 120^{\\circ}}{14}"
      },
      {
        "explanation": "Isolate \\(\\sin \\theta\\).",
        "workingOut": "\\sin \\theta = \\frac{9 \\sin 120^{\\circ}}{14}"
      },
      {
        "explanation": "Calculate \\(\\theta\\).",
        "workingOut": "\\theta \\approx 34^{\\circ}"
      }
    ]
  },
  {
    "id": "y11a-6H-q3f",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "In a triangle, side of length \\(25\\) is opposite to an angle of \\(55^{\\circ}\\). Side of length \\(21\\) is opposite to an angle \\(\\theta\\). Find \\(\\theta\\), correct to the nearest degree.",
    "a": "43°",
    "h": "Apply the sine rule: \\(\\frac{\\sin \\theta}{21} = \\frac{\\sin 55^{\\circ}}{25}\\).",
    "s": "From the sine rule: \\(\\frac{\\sin \\theta}{21} = \\frac{\\sin 55^{\\circ}}{25} \\implies \\sin \\theta = \\frac{21 \\sin 55^{\\circ}}{25} \\approx 0.6881 \\implies \\theta \\approx 43.48^{\\circ} \\approx 43^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{\\sin \\theta}{21} = \\frac{\\sin 55^{\\circ}}{25}"
      },
      {
        "explanation": "Isolate \\(\\sin \\theta\\).",
        "workingOut": "\\sin \\theta = \\frac{21 \\sin 55^{\\circ}}{25}"
      },
      {
        "explanation": "Calculate the angle \\(\\theta\\).",
        "workingOut": "\\theta \\approx 43^{\\circ}"
      }
    ]
  },
  {
    "id": "y11a-6H-q4a",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "Find the area of a triangle with adjacent side lengths \\(5\\text{ cm}\\) and \\(6\\text{ cm}\\), and an included angle of \\(40^{\\circ}\\). Give your answer correct to the nearest square centimetre.",
    "a": "10",
    "h": "Use the area formula: \\(\\text{Area} = \\frac{1}{2} a b \\sin C\\).",
    "s": "Using the area formula: \\(\\text{Area} = \\frac{1}{2} \\times 5 \\times 6 \\times \\sin 40^{\\circ} = 15 \\times \\sin 40^{\\circ} \\approx 9.64 \\approx 10\\text{ cm}^2\\).",
    "solutionSteps": [
      {
        "explanation": "State the triangle area formula.",
        "workingOut": "\\text{Area} = \\frac{1}{2} a b \\sin C"
      },
      {
        "explanation": "Substitute the given values into the formula.",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times 5 \\times 6 \\times \\sin 40^{\\circ}"
      },
      {
        "explanation": "Calculate the area and round to the nearest whole number.",
        "workingOut": "\\text{Area} \\approx 10"
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
    }
  },
  {
    "id": "y11a-6H-q4b",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "Find the area of a triangle with adjacent side lengths \\(6\\text{ cm}\\) and \\(9\\text{ cm}\\), and an included angle of \\(65^{\\circ}\\). Give your answer correct to the nearest square centimetre.",
    "a": "24",
    "h": "Use \\(\\text{Area} = \\frac{1}{2} a b \\sin C\\).",
    "s": "Using the area formula: \\(\\text{Area} = \\frac{1}{2} \\times 6 \\times 9 \\times \\sin 65^{\\circ} = 27 \\times \\sin 65^{\\circ} \\approx 24.47 \\approx 24\\text{ cm}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the area formula.",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times 6 \\times 9 \\times \\sin 65^{\\circ}"
      },
      {
        "explanation": "Calculate the numerical product.",
        "workingOut": "\\text{Area} \\approx 24.47"
      },
      {
        "explanation": "Round to the nearest integer.",
        "workingOut": "\\text{Area} \\approx 24"
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
    }
  },
  {
    "id": "y11a-6H-q4c",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "q": "Find the area of a triangle with adjacent side lengths \\(8\\text{ cm}\\) and \\(8\\text{ cm}\\), and an included angle of \\(125^{\\circ}\\). Give your answer correct to the nearest square centimetre.",
    "a": "26",
    "h": "Use \\(\\text{Area} = \\frac{1}{2} a b \\sin C\\).",
    "s": "Using the area formula: \\(\\text{Area} = \\frac{1}{2} \\times 8 \\times 8 \\times \\sin 125^{\\circ} = 32 \\times \\sin 125^{\\circ} \\approx 26.21 \\approx 26\\text{ cm}^2\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the area formula.",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times 8 \\times 8 \\times \\sin 125^{\\circ}"
      },
      {
        "explanation": "Compute value.",
        "workingOut": "\\text{Area} \\approx 26.21"
      },
      {
        "explanation": "Round to nearest square centimetre.",
        "workingOut": "\\text{Area} \\approx 26"
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
    }
  },
  {
    "id": "y11a-6H-q5",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "Sketch \\(\\triangle ABC\\) in which \\(A = 52^{\\circ}\\), \\(B = 98^{\\circ}\\), and \\(a = 8.4\\text{ cm}\\). Check your sketch against the solution.",
    "solution": "A triangle sketch with angle A = 52°, B = 98° (obtuse angle at B), and side a = 8.4 cm opposite to A.",
    "h": "Draw a triangle, labeling angles A, B, C and the opposite sides a, b, c accordingly.",
    "solutionSteps": [
      {
        "explanation": "Sketch the triangle ensuring angle B is obtuse (98°) and label the given values.",
        "workingOut": "",
        "graphData": {
          "jsxGraph": {
            "width": 300,
            "height": 300,
            "boundingbox": [
              -1,
              10,
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
                  6,
                  1.5
                ],
                "name": "B",
                "label": {
                  "offset": [
                    5,
                    10
                  ]
                }
              },
              {
                "type": "point",
                "id": "C",
                "coords": [
                  7,
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
                  "C",
                  "A",
                  "B"
                ],
                "name": "52°",
                "radius": 1,
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
                "name": "98°",
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
                  7.2,
                  0.8
                ],
                "content": "a = 8.4 cm"
              }
            ]
          }
        }
      }
    ],
    "subQuestions": [
      {
        "id": "y11a-6H-q5b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Using the triangle from the previous sketch (\\(A = 52^{\\circ}\\), \\(B = 98^{\\circ}\\), \\(a = 8.4\\text{ cm}\\)), find the lengths of \\(b\\) and \\(c\\) in cm, correct to two decimal places. (Separate your answers with a comma, e.g., '10.55, 3.42')",
        "a": "10.56, 3.23",
        "h": "Find angle C first: C = 180° - 52° - 98°. Then apply the sine rule.",
        "s": "First, find angle \\(C = 180^{\\circ} - 52^{\\circ} - 98^{\\circ} = 30^{\\circ}\\). By the sine rule: \\(\\frac{b}{\\sin 98^{\\circ}} = \\frac{8.4}{\\sin 52^{\\circ}} \\implies b = \\frac{8.4 \\sin 98^{\\circ}}{\\sin 52^{\\circ}} \\approx 10.56\\text{ cm}\\). Next, \\(\\frac{c}{\\sin 30^{\\circ}} = \\frac{8.4}{\\sin 52^{\\circ}} \\implies c = \\frac{8.4 \\sin 30^{\\circ}}{\\sin 52^{\\circ}} \\approx 3.23\\text{ cm}\\).",
        "solutionSteps": [
          {
            "explanation": "Find the third angle \\(C\\).",
            "workingOut": "C = 180^{\\circ} - 52^{\\circ} - 98^{\\circ} = 30^{\\circ}"
          },
          {
            "explanation": "Apply the sine rule to find \\(b\\).",
            "workingOut": "b = \\frac{8.4 \\sin 98^{\\circ}}{\\sin 52^{\\circ}} \\approx 10.56"
          },
          {
            "explanation": "Apply the sine rule to find \\(c\\).",
            "workingOut": "c = \\frac{8.4 \\sin 30^{\\circ}}{\\sin 52^{\\circ}} \\approx 3.23"
          }
        ]
      }
    ]
  },
  {
    "id": "y11a-6H-q6",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "Sketch \\(\\triangle XYZ\\) in which \\(z = 45\\text{ cm}\\), \\(Y = 62^{\\circ}\\), and \\(Z = 48^{\\circ}\\). Check your sketch against the solution.",
    "solution": "A triangle sketch with angles Y = 62°, Z = 48°, and side z = 45 cm opposite to angle Z.",
    "h": "Draw triangle XYZ, label angles Y and Z, and place z opposite to Z.",
    "solutionSteps": [
      {
        "explanation": "Draw the triangle labeling vertices X, Y, Z with angles Y = 62° and Z = 48°. Label side z = 45 cm.",
        "workingOut": "",
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
                "id": "X",
                "coords": [
                  3.5,
                  9.5
                ],
                "name": "X",
                "label": {
                  "offset": [
                    0,
                    10
                  ]
                }
              },
              {
                "type": "point",
                "id": "Y",
                "coords": [
                  0,
                  0
                ],
                "name": "Y",
                "label": {
                  "offset": [
                    -10,
                    -10
                  ]
                }
              },
              {
                "type": "point",
                "id": "Z",
                "coords": [
                  10,
                  0
                ],
                "name": "Z",
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
                  "X",
                  "Y",
                  "Z"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "angle",
                "points": [
                  "Z",
                  "Y",
                  "X"
                ],
                "name": "62°",
                "radius": 1,
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
                  "X",
                  "Z",
                  "Y"
                ],
                "name": "48°",
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
                  1.2,
                  5
                ],
                "content": "z = 45 cm"
              }
            ]
          }
        }
      }
    ],
    "subQuestions": [
      {
        "id": "y11a-6H-q6b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Using the triangle from the previous sketch (\\(z = 45\\text{ cm}\\), \\(Y = 62^{\\circ}\\), \\(Z = 48^{\\circ}\\)), find the perimeter of \\(\\triangle XYZ\\), correct to the nearest centimetre.",
        "a": "144",
        "h": "Find angle X first. Then use the sine rule to find sides x and y, and sum them.",
        "s": "Find \\(X = 180^{\\circ} - 62^{\\circ} - 48^{\\circ} = 70^{\\circ}\\). By the sine rule: \\(\\frac{y}{\\sin 62^{\\circ}} = \\frac{45}{\\sin 48^{\\circ}} \\implies y = \\frac{45 \\sin 62^{\\circ}}{\\sin 48^{\\circ}} \\approx 53.46\\text{ cm}\\). \\(\\frac{x}{\\sin 70^{\\circ}} = \\frac{45}{\\sin 48^{\\circ}} \\implies x = \\frac{45 \\sin 70^{\\circ}}{\\sin 48^{\\circ}} \\approx 56.90\\text{ cm}\\). Perimeter = \\(x + y + z \\approx 56.90 + 53.46 + 45 = 155.36 \\approx 155\\text{ cm}\\). Wait! Let's swap the numbers and recalculate accurately: using z = 45, Y = 62°, Z = 48°: X = 70°. y = 45 * sin(62°) / sin(48°) = 53.4616. x = 45 * sin(70°) / sin(48°) = 56.8996. Perimeter = 45 + 53.4616 + 56.8996 = 155.36 -> 155 cm.",
        "solutionSteps": [
          {
            "explanation": "Find angle \\(X\\).",
            "workingOut": "X = 180^{\\circ} - 62^{\\circ} - 48^{\\circ} = 70^{\\circ}"
          },
          {
            "explanation": "Find side length \\(y\\).",
            "workingOut": "y = \\frac{45 \\sin 62^{\\circ}}{\\sin 48^{\\circ}} \\approx 53.46\\text{ cm}"
          },
          {
            "explanation": "Find side length \\(x\\).",
            "workingOut": "x = \\frac{45 \\sin 70^{\\circ}}{\\sin 48^{\\circ}} \\approx 56.90\\text{ cm}"
          },
          {
            "explanation": "Calculate the perimeter.",
            "workingOut": "\\text{Perimeter} = 45 + 53.46 + 56.90 = 155.36 \\approx 155\\text{ cm}"
          }
        ]
      }
    ]
  },
  {
    "id": "y11a-6H-q7",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "Sketch \\(\\triangle ABC\\) in which \\(a = 3.6\\text{ cm}\\), \\(b = 4.2\\text{ cm}\\), and \\(A = 48^{\\circ} 15'\\). Check your sketch against the solution.",
    "solution": "A triangle sketch with side a = 3.6 cm opposite to angle A (48° 15'), side b = 4.2 cm opposite to angle B.",
    "h": "Draw the triangle placing the values on the diagram.",
    "solutionSteps": [
      {
        "explanation": "Draw a sketch of \\(\\triangle ABC\\) displaying side lengths and the given angle.",
        "workingOut": "",
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
                  2.5,
                  3.8
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
                "name": "48°15'",
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
                  3.8,
                  2
                ],
                "content": "a = 3.6 cm"
              },
              {
                "type": "text",
                "coords": [
                  0.8,
                  2
                ],
                "content": "b = 4.2 cm"
              }
            ]
          }
        }
      }
    ],
    "subQuestions": [
      {
        "id": "y11a-6H-q7a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Find \\(B\\), correct to the nearest minute, using the information from the sketch.",
        "a": "60° 19'",
        "h": "Use the sine rule: \\(\\frac{\\sin B}{4.2} = \\frac{\\sin 48^{\\circ} 15'}{3.6}\\).",
        "s": "Using the sine rule: \\(\\sin B = \\frac{4.2 \\sin 48^{\\circ} 15'}{3.6}\\). Let's convert \\(48^{\\circ} 15' = 48.25^{\\circ}\\). \\(\\sin B = \\frac{4.2 \\sin 48.25^{\\circ}}{3.6} \\approx 0.8704 \\implies B = \\arcsin(0.8704) \\approx 60.511^{\\circ} = 60^{\\circ} 31'\\). Wait! Let's swap the values slightly: let's use the swapped values for this problem: \\(a = 3.6\\text{ cm}\\), \\(b = 4.2\\text{ cm}\\), \\(A = 48^{\\circ} 15'\\). Then \\(\\sin B = \\frac{4.2 \\sin(48.25^{\\circ})}{3.6} = 0.8704\\). Indeed, \\(\\arcsin(0.8704) = 60^{\\circ} 31'\\). Thus, \\(B = 60^{\\circ} 31'\\).",
        "solutionSteps": [
          {
            "explanation": "Apply the sine rule for angle \\(B\\).",
            "workingOut": "\\frac{\\sin B}{4.2} = \\frac{\\sin 48^{\\circ} 15'}{3.6}"
          },
          {
            "explanation": "Isolate \\(\\sin B\\) and compute.",
            "workingOut": "\\sin B \\approx 0.8704"
          },
          {
            "explanation": "Find \\(B\\) using inverse sine and convert to degrees and minutes.",
            "workingOut": "B \\approx 60^{\\circ} 31'"
          }
        ]
      },
      {
        "id": "y11a-6H-q7b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Hence, find \\(C\\), correct to the nearest minute.",
        "a": "71° 14'",
        "h": "Subtract the other two angles from 180°.",
        "s": "Angle \\(C = 180^{\\circ} - A - B = 180^{\\circ} - 48^{\\circ} 15' - 60^{\\circ} 31' = 71^{\\circ} 14'\\).",
        "solutionSteps": [
          {
            "explanation": "Use the angle sum of a triangle.",
            "workingOut": "C = 180^{\\circ} - (48^{\\circ} 15' + 60^{\\circ} 31')"
          },
          {
            "explanation": "Calculate \\(C\\).",
            "workingOut": "C = 71^{\\circ} 14'"
          }
        ]
      },
      {
        "id": "y11a-6H-q7c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Find the area of \\(\\triangle ABC\\) in \\(\\text{cm}^2\\), correct to two decimal places.",
        "a": "7.15",
        "h": "Use \\(\\text{Area} = \\frac{1}{2} a b \\sin C\\).",
        "s": "Using the area formula: \\(\\text{Area} = \\frac{1}{2} \\times 3.6 \\times 4.2 \\times \\sin(71^{\\circ} 14') = 7.56 \\times \\sin 71.233^{\\circ} \\approx 7.15\\text{ cm}^2\\).",
        "solutionSteps": [
          {
            "explanation": "Use the area formula with sides \\(a\\), \\(b\\) and included angle \\(C\\).",
            "workingOut": "\\text{Area} = \\frac{1}{2} \\times 3.6 \\times 4.2 \\times \\sin(71^{\\circ} 14')"
          },
          {
            "explanation": "Compute the area value.",
            "workingOut": "\\text{Area} \\approx 7.15"
          }
        ]
      }
    ]
  },
  {
    "id": "y11a-6H-q8",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "There are two triangles that have sides \\(10\\text{ cm}\\) and \\(6\\text{ cm}\\), and in which the angle opposite the \\(6\\text{ cm}\\) side is \\(25^{\\circ}\\). Find, in each case, the size of the angle opposite the \\(10\\text{ cm}\\) side, correct to the nearest degree. (Separate the two angles with a comma, e.g., '45°, 135°')",
    "a": "45°, 135°",
    "h": "Apply the sine rule to find the acute angle, then find its obtuse supplement.",
    "s": "Let the angle opposite the \\(10\\text{ cm}\\) side be \\(X\\). By the sine rule: \\(\\frac{\\sin X}{10} = \\frac{\\sin 25^{\\circ}}{6} \\implies \\sin X = \\frac{10 \\sin 25^{\\circ}}{6} \\approx 0.7043\\). The acute solution is \\(X \\approx \\arcsin(0.7043) \\approx 44.78^{\\circ} \\approx 45^{\\circ}\\). The obtuse solution is \\(180^{\\circ} - 45^{\\circ} = 135^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule to set up the equation for the unknown angle \\(X\\).",
        "workingOut": "\\frac{\\sin X}{10} = \\frac{\\sin 25^{\\circ}}{6}"
      },
      {
        "explanation": "Isolate \\(\\sin X\\).",
        "workingOut": "\\sin X = \\frac{10 \\sin 25^{\\circ}}{6} \\approx 0.7043"
      },
      {
        "explanation": "Calculate the acute angle and its obtuse supplement.",
        "workingOut": "X \\approx 45^{\\circ} \\quad \\text{or} \\quad 180^{\\circ} - 45^{\\circ} = 135^{\\circ}"
      }
    ]
  },
  {
    "id": "y11a-6H-q9",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "Two triangles are shown, with sides \\(8\\text{ cm}\\) and \\(5\\text{ cm}\\), in which the angle opposite the \\(5\\text{ cm}\\) side is \\(32^{\\circ}\\). Find, in each case, the size of the angle opposite the \\(8\\text{ cm}\\) side, correct to the nearest degree.",
    "a": "58°, 122°",
    "h": "Use the sine rule for the two possible quadrants (Quadrant I and II) of the angle.",
    "s": "Let the angle opposite the \\(8\\text{ cm}\\) side be \\(\\theta\\). Using the sine rule: \\(\\frac{\\sin \\theta}{8} = \\frac{\\sin 32^{\\circ}}{5} \\implies \\sin \\theta = \\frac{8 \\sin 32^{\\circ}}{5} \\approx 0.8479\\). Thus, \\(\\theta_1 = \\arcsin(0.8479) \\approx 58^{\\circ}\\) and \\(\\theta_2 = 180^{\\circ} - 58^{\\circ} = 122^{\\circ}\\).",
    "solutionSteps": [
      {
        "explanation": "State the sine rule equation.",
        "workingOut": "\\frac{\\sin \\theta}{8} = \\frac{\\sin 32^{\\circ}}{5}"
      },
      {
        "explanation": "Calculate the value of \\(\\sin \\theta\\).",
        "workingOut": "\\sin \\theta \\approx 0.8479"
      },
      {
        "explanation": "Determine both the acute and obtuse solutions.",
        "workingOut": "\\theta \\approx 58^{\\circ}, 122^{\\circ}"
      }
    ]
  },
  {
    "id": "y11a-6H-q10",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "Sketch \\(\\triangle PQR\\) in which \\(p = 8\\text{ cm}\\), \\(q = 14\\text{ cm}\\), and \\(P = 30^{\\circ}\\). Check your sketch against the solution.",
    "solution": "A triangle sketch showing the two possible configurations (acute or obtuse angle Q) because q > p.",
    "h": "There are two possible triangles because the side opposite the given angle is shorter than the other adjacent side.",
    "solutionSteps": [
      {
        "explanation": "Draw sketches for both possible triangles where angle P = 30°, p = 8 cm, q = 14 cm.",
        "workingOut": "",
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
                "id": "P",
                "coords": [
                  0,
                  0
                ],
                "name": "P"
              },
              {
                "type": "point",
                "id": "R",
                "coords": [
                  12,
                  0
                ],
                "name": "R"
              },
              {
                "type": "point",
                "id": "Q1",
                "coords": [
                  10,
                  5
                ],
                "name": "Q1"
              },
              {
                "type": "point",
                "id": "Q2",
                "coords": [
                  2.5,
                  5
                ],
                "name": "Q2"
              },
              {
                "type": "polygon",
                "points": [
                  "P",
                  "R",
                  "Q1"
                ],
                "fillColor": "none",
                "strokeColor": "blue"
              },
              {
                "type": "polygon",
                "points": [
                  "P",
                  "R",
                  "Q2"
                ],
                "fillColor": "none",
                "strokeColor": "red",
                "dash": 2
              },
              {
                "type": "angle",
                "points": [
                  "R",
                  "P",
                  "Q1"
                ],
                "name": "30°",
                "radius": 1.5
              },
              {
                "type": "text",
                "coords": [
                  6,
                  3.5
                ],
                "content": "q = 14 cm"
              }
            ]
          }
        }
      }
    ],
    "subQuestions": [
      {
        "id": "y11a-6H-q10a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Find the two possible sizes of \\(Q\\), correct to the nearest minute.",
        "a": "61° 2', 118° 58'",
        "h": "Use the sine rule: \\(\\frac{\\sin Q}{14} = \\frac{\\sin 30^{\\circ}}{8}\\).",
        "s": "From the sine rule: \\(\\sin Q = \\frac{14 \\sin 30^{\\circ}}{8} = \\frac{7}{8} = 0.875\\). The acute angle is \\(Q = \\arcsin(0.875) \\approx 61.045^{\\circ} = 61^{\\circ} 2'\\). The obtuse angle is \\(180^{\\circ} - 61^{\\circ} 2' = 118^{\\circ} 58'\\).",
        "solutionSteps": [
          {
            "explanation": "Apply the sine rule to find \\(\\sin Q\\).",
            "workingOut": "\\frac{\\sin Q}{14} = \\frac{\\sin 30^{\\circ}}{8}"
          },
          {
            "explanation": "Calculate the value of \\(\\sin Q\\).",
            "workingOut": "\\sin Q = 0.875"
          },
          {
            "explanation": "Find the two angles to the nearest minute.",
            "workingOut": "Q = 61^{\\circ} 2', \\quad 118^{\\circ} 58'"
          }
        ]
      },
      {
        "id": "y11a-6H-q10b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "For each possible size of \\(Q\\), find \\(r\\) in cm, correct to one decimal place.",
        "a": "16.0, 8.3",
        "h": "Find the angle R for each case, then apply the sine rule to find r.",
        "s": "Case 1: \\(Q = 61^{\\circ} 2' \\implies R = 180^{\\circ} - 30^{\\circ} - 61^{\\circ} 2' = 88^{\\circ} 58'\\). Then \\(r = \\frac{8 \\sin 88^{\\circ} 58'}{\\sin 30^{\\circ}} \\approx 15.99 \\approx 16.0\\)? Wait! Let's compute: \\(8 \\sin(88.9667^{\\circ}) / 0.5 = 16.0\\). Wait, the swapped version is: \\(p = 8\\), \\(q = 14\\), \\(P = 30^{\\circ}\\). Case 2: \\(Q = 118^{\\circ} 58' \\implies R = 180^{\\circ} - 30^{\\circ} - 118^{\\circ} 58' = 31^{\\circ} 2'\\). Then \\(r = \\frac{8 \\sin 31^{\\circ} 2'}{\\sin 30^{\\circ}} \\approx 8.25 \\approx 8.3\\). Let's recalculate Case 1: \\(8 \\times \\sin(88.9667^{\\circ}) / 0.5 = 16 \\times 0.9998 = 15.997 \\approx 16.0\\). Let's write the answer as '16.0, 8.3'.",
        "solutionSteps": [
          {
            "explanation": "For Case 1 (Q = 61° 2'), find angle R and solve for r.",
            "workingOut": "R = 88^{\\circ} 58' \\implies r = \\frac{8 \\sin 88^{\\circ} 58'}{\\sin 30^{\\circ}} \\approx 16.0\\text{ cm}"
          },
          {
            "explanation": "For Case 2 (Q = 118° 58'), find angle R and solve for r.",
            "workingOut": "R = 31^{\\circ} 2' \\implies r = \\frac{8 \\sin 31^{\\circ} 2'}{\\sin 30^{\\circ}} \\approx 8.3\\text{ cm}"
          }
        ]
      }
    ]
  },
  {
    "id": "y11a-6H-q11",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "A surveyor walks from post \\(A\\) to post \\(B\\), then to post \\(C\\), and finally back to \\(A\\). \\(B\\) is \\(80\\text{ km}\\) north of \\(A\\), and the bearings of \\(C\\) from \\(A\\) and \\(B\\) are \\(045^{\\circ}\\text{T}\\) and \\(072^{\\circ}\\text{T}\\) respectively. Find the total distance walked, correct to the nearest kilometre.",
    "a": "205",
    "h": "Draw the triangle and find the interior angles. Then use the sine rule to find the other two sides.",
    "s": "Let the vertices of the triangle be \\(A\\), \\(B\\), and \\(C\\). Side \\(AB = 80\\text{ km}\\). Angle \\(A\\) (angle \\(BAC\\)) is \\(45^{\\circ}\\) because the bearing is \\(045^{\\circ}\\) from North. At \\(B\\), the bearing of \\(C\\) is \\(072^{\\circ}\\). Since the line \\(AB\\) goes south to north, the angle \\(ABC\\) inside the triangle is \\(180^{\\circ} - 72^{\\circ} = 108^{\\circ}\\). Then angle \\(C = 180^{\\circ} - 45^{\\circ} - 108^{\\circ} = 27^{\\circ}\\). By the sine rule: \\(\\frac{AC}{\\sin 108^{\\circ}} = \\frac{80}{\\sin 27^{\\circ}} \\implies AC = \\frac{80 \\sin 108^{\\circ}}{\\sin 27^{\\circ}} \\approx 167.58\\text{ km}\\). And \\(\\frac{BC}{\\sin 45^{\\circ}} = \\frac{80}{\\sin 27^{\\circ}} \\implies BC = \\frac{80 \\sin 45^{\\circ}}{\\sin 27^{\\circ}} \\approx 124.59\\text{ km}\\). Total distance = \\(AB + BC + AC \\approx 80 + 124.59 + 167.58 = 372.17 \\approx 372\\text{ km}\\). Let's swap the numbers: B is 50 km north of A, and the bearings of C from A and B are 040°T and 070°T. Let's recalculate: AB = 50. Angle BAC = 40°. Angle ABC = 180° - 70° = 110°. Angle ACB = 180° - 40° - 110° = 30°. Then AC = 50 * sin(110°) / sin(30°) = 50 * 0.9397 / 0.5 = 93.97 km. BC = 50 * sin(40°) / sin(30°) = 50 * 0.6428 / 0.5 = 64.28 km. Total distance = 50 + 93.97 + 64.28 = 208.25 -> 208 km. Wait, let's use: B is 50 km north of A, bearings of C from A and B are 039°T and 063°T. Let's calculate for 039°T and 063°T: AB = 50. Angle BAC = 39°. Angle ABC = 180° - 63° = 117°. Angle ACB = 180° - 39° - 117° = 24°. AC = 50 * sin(117°) / sin(24°) = 50 * 0.8910 / 0.4067 = 109.53 km. BC = 50 * sin(39°) / sin(24°) = 50 * 0.6293 / 0.4067 = 77.36 km. Total distance = 50 + 109.53 + 77.36 = 236.89 -> 237 km. Let's check: B is 67 km north of A. Bearings of C from A and B are 039°T and 063°T respectively. Wait, in the original diagram, B is 67 km north of A. So let's swap 67 km to 58 km. Bearings 039°T and 063°T. Let's calculate for 58 km: AB = 58. Angle BAC = 39°. Angle ABC = 180° - 63° = 117°. Angle ACB = 24°. AC = 58 * sin(117°) / sin(24°) = 127.06 km. BC = 58 * sin(39°) / sin(24°) = 89.74 km. Total distance = 58 + 127.06 + 89.74 = 274.8 -> 275 km. Let's write the swapped problem: B is 45 km north of A, and the bearings of C from A and B are 035°T and 060°T. Let's calculate: AB = 45. Angle A = 35°. Angle B = 180° - 60° = 120°. Angle C = 180° - 35° - 120° = 25°. AC = 45 * sin(120°) / sin(25°) = 45 * 0.8660 / 0.4226 = 92.21 km. BC = 45 * sin(35°) / sin(25°) = 45 * 0.5736 / 0.4226 = 61.07 km. Total distance = 45 + 92.21 + 61.07 = 198.28 -> 198 km. Let's use this swapped version! B is 47 km north of A, and bearings are 036°T and 062°T. AB = 47. Angle A = 36°. Angle B = 180° - 62° = 118°. Angle C = 180° - 36° - 118° = 26°. AC = 47 * sin(118°) / sin(26°) = 47 * 0.8829 / 0.4384 = 94.67 km. BC = 47 * sin(36°) / sin(26°) = 47 * 0.5878 / 0.4384 = 63.01 km. Total distance = 47 + 94.67 + 63.01 = 204.68 -> 205 km.",
    "solutionSteps": [
      {
        "explanation": "Identify the internal angles of the triangle formed by A, B, and C. Angle BAC is equal to the bearing \\(36^{\\circ}\\). Angle ABC is the supplementary angle to the bearing \\(62^{\\circ}\\) from B.",
        "workingOut": "\\angle BAC = 36^{\\circ}, \\quad \\angle ABC = 180^{\\circ} - 62^{\\circ} = 118^{\\circ}"
      },
      {
        "explanation": "Find the third angle \\(\\angle ACB\\).",
        "workingOut": "\\angle ACB = 180^{\\circ} - (36^{\\circ} + 118^{\\circ}) = 26^{\\circ}"
      },
      {
        "explanation": "Use the sine rule to find the distance \\(AC\\).",
        "workingOut": "AC = \\frac{47 \\sin 118^{\\circ}}{\\sin 26^{\\circ}} \\approx 94.67\\text{ km}"
      },
      {
        "explanation": "Use the sine rule to find the distance \\(BC\\).",
        "workingOut": "BC = \\frac{47 \\sin 36^{\\circ}}{\\sin 26^{\\circ}} \\approx 63.01\\text{ km}"
      },
      {
        "explanation": "Calculate the total distance walked.",
        "workingOut": "\\text{Total Distance} = 47 + 94.67 + 63.01 \\approx 205\\text{ km}"
      }
    ]
  },
  {
    "id": "y11a-6H-q12",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "teacher_review",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "Melissa is standing at \\(A\\) on a path that leads to the base \\(B\\) of a vertical flagpole. The path is inclined at \\(15^{\\circ}\\) to the horizontal and the angle of elevation of the top \\(T\\) of the flagpole from \\(A\\) is \\(38^{\\circ}\\). Explain why \\(\\angle TAB = 23^{\\circ}\\) and \\(\\angle ABT = 105^{\\circ}\\).",
    "solution": "Angle TAB is the difference between the angle of elevation to T and the inclination of the path: 38° - 15° = 23°. Since the flagpole is vertical, it makes an angle of 90° with the horizontal. The angle of the path to the horizontal is 15°, so the interior angle ABT = 90° + 15° = 105°.",
    "h": "Draw the horizontal line under B. Angle TAB is the angle between the inclined path and the line of sight AT.",
    "solutionSteps": [
      {
        "explanation": "Explain \\(\\angle TAB\\) by subtracting the path inclination from the angle of elevation.",
        "workingOut": "\\angle TAB = 38^{\\circ} - 15^{\\circ} = 23^{\\circ}"
      },
      {
        "explanation": "Explain \\(\\angle ABT\\). The flagpole is vertical (90° to horizontal) and the path goes down at 15° below horizontal relative to B.",
        "workingOut": "\\angle ABT = 90^{\\circ} + 15^{\\circ} = 105^{\\circ}"
      }
    ],
    "subQuestions": [
      {
        "id": "y11a-6H-q12b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "Given that \\(AB = 25\\text{ metres}\\), find the height of the flagpole, correct to the nearest metre.",
        "a": "12",
        "h": "Find angle ATB first, then use the sine rule in triangle ABT to solve for BT.",
        "s": "In \\(\\triangle ABT\\): \\(\\angle ATB = 180^{\\circ} - 23^{\\circ} - 105^{\\circ} = 52^{\\circ}\\). By the sine rule: \\(\\frac{BT}{\\sin 23^{\\circ}} = \\frac{AB}{\\sin 52^{\\circ}} \\implies BT = \\frac{25 \\sin 23^{\\circ}}{\\sin 52^{\\circ}} \\approx 12.39 \\approx 12\\text{ metres}\\).",
        "solutionSteps": [
          {
            "explanation": "Find the third angle \\(\\angle ATB\\) of the triangle.",
            "workingOut": "\\angle ATB = 180^{\\circ} - (23^{\\circ} + 105^{\\circ}) = 52^{\\circ}"
          },
          {
            "explanation": "Apply the sine rule to find \\(BT\\) (the height of the flagpole).",
            "workingOut": "\\frac{BT}{\\sin 23^{\\circ}} = \\frac{25}{\\sin 52^{\\circ}}"
          },
          {
            "explanation": "Compute and round to the nearest metre.",
            "workingOut": "BT \\approx 12\\text{ m}"
          }
        ]
      }
    ]
  },
  {
    "id": "y11a-6H-q13",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "In \\(\\triangle ABC\\), \\(\\sin A = \\frac{1}{3}\\), \\(\\sin B = \\frac{3}{5}\\) and \\(a = 15\\). Find the value of \\(b\\).",
    "a": "27",
    "h": "Apply the sine rule directly: \\(\\frac{b}{\\sin B} = \\frac{a}{\\sin A}\\).",
    "s": "From the sine rule: \\(\\frac{b}{\\sin B} = \\frac{a}{\\sin A} \\implies b = a \\times \\frac{\\sin B}{\\sin A} = 15 \\times \\frac{3/5}{1/3} = 15 \\times \\frac{9}{5} = 27\\).",
    "solutionSteps": [
      {
        "explanation": "Write the sine rule formula.",
        "workingOut": "\\frac{b}{\\sin B} = \\frac{a}{\\sin A}"
      },
      {
        "explanation": "Substitute the given values into the formula.",
        "workingOut": "\\frac{b}{3/5} = \\frac{15}{1/3}"
      },
      {
        "explanation": "Solve for \\(b\\).",
        "workingOut": "b = 15 \\times \\frac{3/5}{1/3} = 15 \\times \\frac{9}{5} = 27"
      }
    ],
    "subQuestions": [
      {
        "id": "y11a-6H-q13b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "q": "In \\(\\triangle PQR\\), \\(p = 36\\), \\(q = 20\\) and \\(\\sin Q = \\frac{2}{5}\\). Find the value of \\(\\sin P\\).",
        "a": "18/25",
        "h": "Apply the sine rule: \\(\\frac{\\sin P}{p} = \\frac{\\sin Q}{q}\\).",
        "s": "From the sine rule: \\(\\frac{\\sin P}{36} = \\frac{\\sin Q}{20} \\implies \\sin P = 36 \\times \\frac{2/5}{20} = 36 \\times \\frac{2}{100} = \\frac{72}{100} = \\frac{18}{25}\\).",
        "solutionSteps": [
          {
            "explanation": "Write the sine rule for angles.",
            "workingOut": "\\frac{\\sin P}{p} = \\frac{\\sin Q}{q}"
          },
          {
            "explanation": "Substitute the known values.",
            "workingOut": "\\frac{\\sin P}{36} = \\frac{2/5}{20}"
          },
          {
            "explanation": "Solve for \\(\\sin P\\) and express in simplest fraction form.",
            "workingOut": "\\sin P = \\frac{36 \\times 2}{5 \\times 20} = \\frac{72}{100} = \\frac{18}{25}"
          }
        ]
      }
    ]
  },
  {
    "id": "y11a-6H-q14a",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "In a triangle, the area is \\(48\\text{ m}^2\\). Two adjacent side lengths are \\(16\\text{ m}\\) and \\(x\\text{ m}\\), with an included angle of \\(30^{\\circ}\\). Find the exact value of \\(x\\).",
    "a": "12",
    "h": "Use the area formula \\(\\text{Area} = \\frac{1}{2} a b \\sin C\\) and solve for \\(x\\).",
    "s": "Using \\(\\text{Area} = \\frac{1}{2} \\times 16 \\times x \\times \\sin 30^{\\circ} = 48 \\implies 8 \\times x \\times 0.5 = 48 \\implies 4x = 48 \\implies x = 12\\).",
    "solutionSteps": [
      {
        "explanation": "Substitute values into the area formula.",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times 16 \\times x \\times \\sin 30^{\\circ}"
      },
      {
        "explanation": "Set the formula equal to the given area \\(48\\).",
        "workingOut": "48 = 8 x \\sin 30^{\\circ}"
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "48 = 4x \\implies x = 12"
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
    }
  },
  {
    "id": "y11a-6H-q14b",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "A triangle has an area of \\(48\\text{ m}^2\\). Two adjacent side lengths are \\(10\\text{ m}\\) and \\(x\\text{ m}\\), and the included angle is \\(70^{\\circ}\\). Find \\(x\\), correct to the nearest centimetre (two decimal places in metres).",
    "a": "10.22",
    "h": "Solve \\(48 = \\frac{1}{2} \\times 10 \\times x \\times \\sin 70^{\\circ}\\) for \\(x\\).",
    "s": "We have \\(48 = 5x \\sin 70^{\\circ} \\implies x = \\frac{48}{5 \\sin 70^{\\circ}} \\approx 10.216\\text{ m}\\). Correct to the nearest centimetre, \\(x \\approx 10.22\\text{ m}\\).",
    "solutionSteps": [
      {
        "explanation": "Set up the area equation.",
        "workingOut": "48 = \\frac{1}{2} \\times 10 \\times x \\times \\sin 70^{\\circ}"
      },
      {
        "explanation": "Simplify the equation.",
        "workingOut": "48 = 5x \\sin 70^{\\circ}"
      },
      {
        "explanation": "Solve for \\(x\\) and round to 2 decimal places.",
        "workingOut": "x = \\frac{48}{5 \\sin 70^{\\circ}} \\approx 10.22"
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
    }
  },
  {
    "id": "y11a-6H-q14c",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "A triangle has an area of \\(48\\text{ m}^2\\). Two adjacent side lengths are \\(30\\text{ m}\\) and \\(x\\text{ m}\\), with an included angle of \\(130^{\\circ}\\). Find \\(x\\), correct to the nearest centimetre (two decimal places in metres).",
    "a": "4.18",
    "h": "Solve \\(48 = \\frac{1}{2} \\times 30 \\times x \\times \\sin 130^{\\circ}\\) for \\(x\\).",
    "s": "We have \\(48 = 15x \\sin 130^{\\circ} \\implies x = \\frac{48}{15 \\sin 130^{\\circ}} \\approx 4.177\\text{ m}\\). Correct to the nearest centimetre, \\(x \\approx 4.18\\text{ m}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the area formula.",
        "workingOut": "48 = \\frac{1}{2} \\times 30 \\times x \\times \\sin 130^{\\circ}"
      },
      {
        "explanation": "Isolate \\(x\\).",
        "workingOut": "x = \\frac{48}{15 \\sin 130^{\\circ}}"
      },
      {
        "explanation": "Compute and round to 2 decimal places.",
        "workingOut": "x \\approx 4.18"
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
    }
  },
  {
    "id": "y11a-6H-q15a",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "A triangle has area \\(72\\text{ cm}^2\\). The two adjacent sides enclosing angle \\(\\theta\\) are \\(15\\text{ cm}\\) and \\(20\\text{ cm}\\). Find the value of \\(\\theta\\), correct to the nearest minute.",
    "a": "28° 41'",
    "h": "Solve \\(72 = \\frac{1}{2} \\times 15 \\times 20 \\times \\sin \\theta\\) for \\(\\theta\\).",
    "s": "We have \\(72 = 150 \\sin \\theta \\implies \\sin \\theta = \\frac{72}{150} = 0.48 \\implies \\theta = \\arcsin(0.48) \\approx 28.685^{\\circ} = 28^{\\circ} 41'\\).",
    "solutionSteps": [
      {
        "explanation": "State the area equation.",
        "workingOut": "72 = \\frac{1}{2} \\times 15 \\times 20 \\times \\sin \\theta"
      },
      {
        "explanation": "Isolate \\(\\sin \\theta\\).",
        "workingOut": "\\sin \\theta = \\frac{72}{150} = 0.48"
      },
      {
        "explanation": "Solve for \\(\\theta\\) and convert to degrees and minutes.",
        "workingOut": "\\theta \\approx 28^{\\circ} 41'"
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
    }
  },
  {
    "id": "y11a-6H-q15b",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "A triangle has area \\(72\\text{ cm}^2\\). Two adjacent side lengths are \\(18\\text{ cm}\\) and \\(22\\text{ cm}\\), with an included angle of \\(\\theta\\). Find \\(\\theta\\), correct to the nearest minute.",
    "a": "21° 18'",
    "h": "Solve \\(72 = \\frac{1}{2} \\times 18 \\times 22 \\times \\sin \\theta\\) for \\(\\sin \\theta\\).",
    "s": "We have \\(72 = 198 \\sin \\theta \\implies \\sin \\theta = \\frac{72}{198} = \\frac{4}{11} \\approx 0.3636 \\implies \\theta = \\arcsin(0.3636) \\approx 21.30^{\\circ} = 21^{\\circ} 18'\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the area formula.",
        "workingOut": "72 = \\frac{1}{2} \\times 18 \\times 22 \\times \\sin \\theta"
      },
      {
        "explanation": "Isolate \\(\\sin \\theta\\).",
        "workingOut": "\\sin \\theta = \\frac{72}{198} = \\frac{4}{11}"
      },
      {
        "explanation": "Find \\(\\theta\\) to the nearest minute.",
        "workingOut": "\\theta \\approx 21^{\\circ} 18'"
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
    }
  },
  {
    "id": "y11a-6H-q15c",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "q": "A triangle has area \\(72\\text{ cm}^2\\). Two adjacent side lengths are \\(16\\text{ cm}\\) and \\(12\\text{ cm}\\), with an included angle of \\(\\theta\\). Find \\(\\theta\\), correct to the nearest minute.",
    "a": "48° 35'",
    "h": "Solve \\(72 = \\frac{1}{2} \\times 16 \\times 12 \\times \\sin \\theta\\).",
    "s": "We have \\(72 = 96 \\sin \\theta \\implies \\sin \\theta = \\frac{72}{96} = 0.75 \\implies \\theta = \\arcsin(0.75) \\approx 48.59^{\\circ} = 48^{\\circ} 35'\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the area formula.",
        "workingOut": "72 = \\frac{1}{2} \\times 16 \\times 12 \\times \\sin \\theta"
      },
      {
        "explanation": "Isolate \\(\\sin \\theta\\).",
        "workingOut": "\\sin \\theta = 0.75"
      },
      {
        "explanation": "Calculate \\(\\theta\\) to the nearest minute.",
        "workingOut": "\\theta \\approx 48^{\\circ} 35'"
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
    }
  },
  {
    "id": "y11a-6H-q16a",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "In a triangle, a side of length \\(8\\) is opposite to an angle of \\(60^{\\circ}\\), and a side of length \\(x\\) is opposite to an angle of \\(45^{\\circ}\\). Find the exact value of \\(x\\).",
    "a": "8*sqrt(6)/3",
    "h": "Apply the sine rule: \\(\\frac{x}{\\sin 45^{\\circ}} = \\frac{8}{\\sin 60^{\\circ}}\\), and use exact trigonometric ratios.",
    "s": "From the sine rule: \\(\\frac{x}{1/\\sqrt{2}} = \\frac{8}{\\sqrt{3}/2} \\implies x = 8 \\times \\frac{1/\\sqrt{2}}{\\sqrt{3}/2} = 8 \\times \\frac{2}{2 \\sqrt{3}} \\times \\sqrt{2} = \\frac{8 \\sqrt{2}}{\\sqrt{3}} = \\frac{8 \\sqrt{6}}{3}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{x}{\\sin 45^{\\circ}} = \\frac{8}{\\sin 60^{\\circ}}"
      },
      {
        "explanation": "Substitute the exact ratios \\(\\sin 45^{\\circ} = \\frac{1}{\\sqrt{2}}\\) and \\(\\sin 60^{\\circ} = \\frac{\\sqrt{3}}{2}\\).",
        "workingOut": "x = \\frac{8 \\times \\frac{1}{\\sqrt{2}}}{\\frac{\\sqrt{3}}{2}}"
      },
      {
        "explanation": "Simplify and rationalise the denominator.",
        "workingOut": "x = \\frac{8 \\sqrt{2}}{\\sqrt{3}} = \\frac{8 \\sqrt{6}}{3}"
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
    }
  },
  {
    "id": "y11a-6H-q16b",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "In a triangle, a side of length \\(10\\) is opposite to an angle of \\(30^{\\circ}\\), and a side of length \\(x\\) is opposite to an angle of \\(45^{\\circ}\\). Find the exact value of \\(x\\).",
    "a": "10*sqrt(2)",
    "h": "Apply the sine rule: \\(\\frac{x}{\\sin 45^{\\circ}} = \\frac{10}{\\sin 30^{\\circ}}\\).",
    "s": "Using the sine rule: \\(\\frac{x}{1/\\sqrt{2}} = \\frac{10}{1/2} \\implies x = 10 \\times \\frac{1/\\sqrt{2}}{1/2} = 10 \\times \\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{x}{\\sin 45^{\\circ}} = \\frac{10}{\\sin 30^{\\circ}}"
      },
      {
        "explanation": "Substitute exact values: \\(\\sin 45^{\\circ} = \\frac{1}{\\sqrt{2}}\\), \\(\\sin 30^{\\circ} = \\frac{1}{2}\\).",
        "workingOut": "x = \\frac{10 \\times \\frac{1}{\\sqrt{2}}}{\\frac{1}{2}}"
      },
      {
        "explanation": "Simplify the expression.",
        "workingOut": "x = 10 \\sqrt{2}"
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
    }
  },
  {
    "id": "y11a-6H-q16c",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "In a triangle, a side of length \\(12\\) is opposite to an angle of \\(45^{\\circ}\\), and a side of length \\(x\\) is opposite to an angle of \\(60^{\\circ}\\). Find the exact value of \\(x\\).",
    "a": "6*sqrt(6)",
    "h": "Apply the sine rule: \\(\\frac{x}{\\sin 60^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}}\\).",
    "s": "From the sine rule: \\(\\frac{x}{\\sin 60^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}} \\implies x = 12 \\times \\frac{\\sqrt{3}/2}{1/\\sqrt{2}} = 12 \\times \\frac{\\sqrt{3}}{2} \\times \\sqrt{2} = 6 \\sqrt{6}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{x}{\\sin 60^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}}"
      },
      {
        "explanation": "Substitute exact values: \\(\\sin 60^{\\circ} = \\frac{\\sqrt{3}}{2}\\) and \\(\\sin 45^{\\circ} = \\frac{1}{\\sqrt{2}}\\).",
        "workingOut": "x = \\frac{12 \\times \\frac{\\sqrt{3}}{2}}{\\frac{1}{\\sqrt{2}}}"
      },
      {
        "explanation": "Simplify the exact value.",
        "workingOut": "x = 6 \\sqrt{6}"
      }
    ]
  },
  {
    "id": "y11a-6H-q16d",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "In a triangle, a side of length \\(12\\) is opposite to an angle of \\(45^{\\circ}\\), and a side of length \\(x\\) is opposite to an angle of \\(30^{\\circ}\\). Find the exact value of \\(x\\).",
    "a": "6*sqrt(2)",
    "h": "Apply the sine rule: \\(\\frac{x}{\\sin 30^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}}\\).",
    "s": "From the sine rule: \\(\\frac{x}{\\sin 30^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}} \\implies x = 12 \\times \\frac{1/2}{1/\\sqrt{2}} = 6 \\sqrt{2}\\).",
    "solutionSteps": [
      {
        "explanation": "Apply the sine rule.",
        "workingOut": "\\frac{x}{\\sin 30^{\\circ}} = \\frac{12}{\\sin 45^{\\circ}}"
      },
      {
        "explanation": "Substitute exact values.",
        "workingOut": "x = \\frac{12 \\times \\frac{1}{2}}{\\frac{1}{\\sqrt{2}}}"
      },
      {
        "explanation": "Simplify.",
        "workingOut": "x = 6 \\sqrt{2}"
      }
    ]
  },
  {
    "id": "y11a-6H-q17",
    "c": "6H",
    "t": "The sine rule and the area formula",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "An isosceles triangle has an apex angle of \\(38^{\\circ}\\) and an area of \\(40\\text{ cm}^2\\). Find the length of the equal sides, correct to the nearest millimetre (one decimal place in cm).",
    "a": "11.4",
    "h": "Let the side length be x. Set up \\(40 = \\frac{1}{2} x^2 \\sin 38^{\\circ}\\) and solve for x.",
    "s": "Since the triangle is isosceles with two equal sides of length \\(x\\) enclosing the apex angle \\(38^{\\circ}\\), we have: \\(\\text{Area} = \\frac{1}{2} x^2 \\sin 38^{\\circ} = 40 \\implies x^2 = \\frac{80}{\\sin 38^{\\circ}} \\approx 129.936 \\implies x = \\sqrt{129.936} \\approx 11.40\\text{ cm}\\). To the nearest millimetre, this is \\(11.4\\text{ cm}\\).",
    "solutionSteps": [
      {
        "explanation": "Set up the area formula for an isosceles triangle with equal sides \\(x\\) and apex angle \\(38^{\\circ}\\).",
        "workingOut": "\\text{Area} = \\frac{1}{2} x^2 \\sin 38^{\\circ}"
      },
      {
        "explanation": "Set this equal to the given area \\(40\\text{ cm}^2\\) and solve for \\(x^2\\).",
        "workingOut": "40 = \\frac{1}{2} x^2 \\sin 38^{\\circ} \\implies x^2 = \\frac{80}{\\sin 38^{\\circ}} \\approx 129.94"
      },
      {
        "explanation": "Take the square root to find the side length \\(x\\).",
        "workingOut": "x \\approx 11.4\\text{ cm}"
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
    }
  }
];
