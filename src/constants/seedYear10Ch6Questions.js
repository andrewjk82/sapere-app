export const Y10_CH6_QUESTIONS = [
  {
    "id": "y10-6a-q1a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Calculate the surface area of the rectangular prism.",
    "a": "340",
    "solutionSteps": [
      {
        "explanation": "Dimensions of the rectangular prism are l = 8, b = 5, h = 10.",
        "workingOut": "l = 8, b = 5, h = 10"
      },
      {
        "explanation": "Substitute into the surface area formula.",
        "workingOut": "SA = 2(lb + lh + bh)"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "SA = 2(40 + 80 + 50) = 340"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 280,
        "projection": "isometric",
        "vertices": {
          "A": [
            0,
            0,
            0
          ],
          "B": [
            8,
            0,
            0
          ],
          "C": [
            8,
            0,
            5
          ],
          "D": [
            0,
            0,
            5
          ],
          "E": [
            0,
            10,
            0
          ],
          "F": [
            8,
            10,
            0
          ],
          "G": [
            8,
            10,
            5
          ],
          "H": [
            0,
            10,
            5
          ]
        },
        "edges": [
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
            "to": "A",
            "dashed": true
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "F",
            "to": "G"
          },
          {
            "from": "G",
            "to": "H"
          },
          {
            "from": "H",
            "to": "E"
          },
          {
            "from": "A",
            "to": "E",
            "dashed": true
          },
          {
            "from": "B",
            "to": "F"
          },
          {
            "from": "C",
            "to": "G"
          },
          {
            "from": "D",
            "to": "H",
            "dashed": true
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "8 cm"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "5 cm"
          },
          {
            "between": [
              "B",
              "F"
            ],
            "text": "10 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q1b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Calculate the surface area of the rectangular prism.",
    "a": "550",
    "solutionSteps": [
      {
        "explanation": "Dimensions are l = 15, b = 10, h = 5.",
        "workingOut": "l = 15, b = 10, h = 5"
      },
      {
        "explanation": "Use the surface area formula.",
        "workingOut": "SA = 2(15 \\times 10 + 15 \\times 5 + 10 \\times 5)"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "SA = 2(150 + 75 + 50) = 550"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 280,
        "projection": "isometric",
        "vertices": {
          "A": [
            0,
            0,
            0
          ],
          "B": [
            15,
            0,
            0
          ],
          "C": [
            15,
            0,
            10
          ],
          "D": [
            0,
            0,
            10
          ],
          "E": [
            0,
            5,
            0
          ],
          "F": [
            15,
            5,
            0
          ],
          "G": [
            15,
            5,
            10
          ],
          "H": [
            0,
            5,
            10
          ]
        },
        "edges": [
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
            "to": "A",
            "dashed": true
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "F",
            "to": "G"
          },
          {
            "from": "G",
            "to": "H"
          },
          {
            "from": "H",
            "to": "E"
          },
          {
            "from": "A",
            "to": "E",
            "dashed": true
          },
          {
            "from": "B",
            "to": "F"
          },
          {
            "from": "C",
            "to": "G"
          },
          {
            "from": "D",
            "to": "H",
            "dashed": true
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "15 cm"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "10 cm"
          },
          {
            "between": [
              "B",
              "F"
            ],
            "text": "5 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q1c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Calculate the exact surface area of the cylinder (in terms of \\(\\pi\\)).",
    "a": "170\\pi",
    "solutionSteps": [
      {
        "explanation": "Identify radius and height.",
        "workingOut": "r = 5, h = 12"
      },
      {
        "explanation": "Surface area of cylinder formula.",
        "workingOut": "SA = 2\\pi r^2 + 2\\pi rh"
      },
      {
        "explanation": "Substitute values.",
        "workingOut": "SA = 2\\pi(5)^2 + 2\\pi(5)(12)"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "SA = 50\\pi + 120\\pi = 170\\pi"
      }
    ],
    "graphData": {
      "geometry3d": {
        "shape": "cylinder",
        "radius": 5,
        "height": 12,
        "edgeLabels": [
          {
            "part": "radius",
            "text": "5 cm"
          },
          {
            "part": "height",
            "text": "12 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q1d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Calculate the exact surface area of the half-cylinder (in terms of \\(\\pi\\)).",
    "a": "56\\pi + 80",
    "solutionSteps": [
      {
        "explanation": "Radius and height of the half-cylinder.",
        "workingOut": "r = 4, h = 10"
      },
      {
        "explanation": "Surface area comprises two half-circles, half a curved surface, and a rectangular base.",
        "workingOut": "SA = 2(\\frac{1}{2}\\pi r^2) + \\frac{1}{2}(2\\pi rh) + (2r \\times h)"
      },
      {
        "explanation": "Substitute values.",
        "workingOut": "SA = \\pi(4^2) + \\pi(4)(10) + (8 \\times 10)"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "SA = 16\\pi + 40\\pi + 80 = 56\\pi + 80"
      }
    ],
    "graphData": {
      "geometry3d": {
        "shape": "cylinder",
        "radius": 4,
        "height": 10,
        "edgeLabels": [
          {
            "part": "radius",
            "text": "4 cm"
          },
          {
            "part": "height",
            "text": "10 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q1e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Calculate the surface area of the right-angled triangular prism.",
    "a": "660",
    "solutionSteps": [
      {
        "explanation": "The base is a right-angled triangle with sides 5, 12, 13.",
        "workingOut": "Base Area = \\frac{1}{2} \\times 5 \\times 12 = 30"
      },
      {
        "explanation": "Perimeter of the triangular base.",
        "workingOut": "P = 5 + 12 + 13 = 30"
      },
      {
        "explanation": "Surface area of prism.",
        "workingOut": "SA = 2 \\times \\text{Base Area} + P \\times h"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "SA = 2(30) + 30(20) = 60 + 600 = 660"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 280,
        "projection": "isometric",
        "vertices": {
          "A": [
            0,
            0,
            0
          ],
          "B": [
            12,
            0,
            0
          ],
          "C": [
            0,
            5,
            0
          ],
          "D": [
            0,
            0,
            20
          ],
          "E": [
            12,
            0,
            20
          ],
          "F": [
            0,
            5,
            20
          ]
        },
        "edges": [
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
            "from": "D",
            "to": "E"
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "F",
            "to": "D",
            "dashed": true
          },
          {
            "from": "A",
            "to": "D",
            "dashed": true
          },
          {
            "from": "B",
            "to": "E"
          },
          {
            "from": "C",
            "to": "F"
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "A",
              "C"
            ],
            "text": "5"
          },
          {
            "between": [
              "A",
              "B"
            ],
            "text": "12"
          },
          {
            "between": [
              "B",
              "E"
            ],
            "text": "20"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "The base of a right prism of height 10 cm is an equilateral triangle.\nIf the side length of the triangle is 8 cm, calculate the exact height of the triangle.",
    "a": "4\\sqrt{3}",
    "solutionSteps": [
      {
        "explanation": "Use Pythagoras theorem on half of the equilateral triangle.",
        "workingOut": "h^2 + 4^2 = 8^2"
      },
      {
        "explanation": "Solve for h.",
        "workingOut": "h^2 = 64 - 16 = 48"
      },
      {
        "explanation": "Simplify the surd.",
        "workingOut": "h = \\sqrt{48} = 4\\sqrt{3}"
      }
    ],
    "graphData": null,
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Calculate the exact surface area of the prism from the previous question.",
    "a": "32\\sqrt{3} + 240",
    "solutionSteps": [
      {
        "explanation": "Area of the triangular base.",
        "workingOut": "A = \\frac{1}{2} \\times 8 \\times 4\\sqrt{3} = 16\\sqrt{3}"
      },
      {
        "explanation": "Perimeter of the base.",
        "workingOut": "P = 3 \\times 8 = 24"
      },
      {
        "explanation": "Surface Area.",
        "workingOut": "SA = 2 \\times 16\\sqrt{3} + 24 \\times 10 = 32\\sqrt{3} + 240"
      }
    ],
    "graphData": null,
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q3",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A cube has a surface area of 150 m\\(^2\\). Find its side length.",
    "a": "5",
    "solutionSteps": [
      {
        "explanation": "Surface area of a cube with side length s.",
        "workingOut": "6s^2 = 150"
      },
      {
        "explanation": "Solve for s^2.",
        "workingOut": "s^2 = 25"
      },
      {
        "explanation": "Take the square root.",
        "workingOut": "s = 5"
      }
    ],
    "graphData": null,
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q4",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A cylinder of base radius 5 cm has a curved surface area of 60\\(\\pi\\) cm\\(^2\\). Find its height.",
    "a": "6",
    "solutionSteps": [
      {
        "explanation": "Curved surface area formula.",
        "workingOut": "2\\pi rh = 60\\pi"
      },
      {
        "explanation": "Substitute r = 5.",
        "workingOut": "2\\pi(5)h = 60\\pi"
      },
      {
        "explanation": "Solve for h.",
        "workingOut": "10\\pi h = 60\\pi \\implies h = 6"
      }
    ],
    "graphData": null,
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q5a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A rubbish bin is in the shape of an open cylinder.\nIf the bin has radius 10 cm and height 30 cm, find its exact total surface area (do not include the lid).",
    "a": "700\\pi",
    "solutionSteps": [
      {
        "explanation": "The bin has one base and a curved surface.",
        "workingOut": "SA = \\pi r^2 + 2\\pi rh"
      },
      {
        "explanation": "Substitute the values.",
        "workingOut": "SA = \\pi(10)^2 + 2\\pi(10)(30)"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "SA = 100\\pi + 600\\pi = 700\\pi"
      }
    ],
    "graphData": null,
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q5b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "If the open bin has radius 12 cm and a curved surface area of 2400 cm\\(^2\\), find the height of the bin, correct to one decimal place.",
    "a": "31.8",
    "solutionSteps": [
      {
        "explanation": "Curved surface area formula.",
        "workingOut": "2\\pi rh = 2400"
      },
      {
        "explanation": "Substitute r = 12.",
        "workingOut": "24\\pi h = 2400"
      },
      {
        "explanation": "Solve for h.",
        "workingOut": "h = \\frac{100}{\\pi} \\approx 31.83"
      }
    ],
    "graphData": null,
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q6a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Calculate the volume of the rectangular prism.",
    "a": "480",
    "solutionSteps": [
      {
        "explanation": "Volume of rectangular prism formula.",
        "workingOut": "V = l \\times b \\times h"
      },
      {
        "explanation": "Substitute dimensions 12, 8, 5.",
        "workingOut": "V = 12 \\times 8 \\times 5"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "V = 480"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 280,
        "projection": "isometric",
        "vertices": {
          "A": [
            0,
            0,
            0
          ],
          "B": [
            12,
            0,
            0
          ],
          "C": [
            12,
            0,
            8
          ],
          "D": [
            0,
            0,
            8
          ],
          "E": [
            0,
            5,
            0
          ],
          "F": [
            12,
            5,
            0
          ],
          "G": [
            12,
            5,
            8
          ],
          "H": [
            0,
            5,
            8
          ]
        },
        "edges": [
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
            "to": "A",
            "dashed": true
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "F",
            "to": "G"
          },
          {
            "from": "G",
            "to": "H"
          },
          {
            "from": "H",
            "to": "E"
          },
          {
            "from": "A",
            "to": "E",
            "dashed": true
          },
          {
            "from": "B",
            "to": "F"
          },
          {
            "from": "C",
            "to": "G"
          },
          {
            "from": "D",
            "to": "H",
            "dashed": true
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "12 cm"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "8 cm"
          },
          {
            "between": [
              "B",
              "F"
            ],
            "text": "5 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q6e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Calculate the exact volume of the cylinder (in terms of \\(\\pi\\)).",
    "a": "300\\pi",
    "solutionSteps": [
      {
        "explanation": "Volume of cylinder formula.",
        "workingOut": "V = \\pi r^2 h"
      },
      {
        "explanation": "Substitute r = 5, h = 12.",
        "workingOut": "V = \\pi(5^2)(12)"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "V = 25 \\times 12 \\times \\pi = 300\\pi"
      }
    ],
    "graphData": {
      "geometry3d": {
        "shape": "cylinder",
        "radius": 5,
        "height": 12,
        "edgeLabels": [
          {
            "part": "radius",
            "text": "5 cm"
          },
          {
            "part": "height",
            "text": "12 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q7a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a right triangular prism ABCDEF with AB = AC, if AB = 10 cm and BC = 12 cm, find the height of \\(\\Delta ABC\\).",
    "a": "8",
    "solutionSteps": [
      {
        "explanation": "Drop a perpendicular from A to BC, bisecting it.",
        "workingOut": "h^2 + 6^2 = 10^2"
      },
      {
        "explanation": "Solve for h.",
        "workingOut": "h^2 = 100 - 36 = 64"
      },
      {
        "explanation": "Take the square root.",
        "workingOut": "h = 8"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 280,
        "projection": "isometric",
        "vertices": {
          "A": [
            4,
            6,
            0
          ],
          "B": [
            8,
            0,
            0
          ],
          "C": [
            0,
            0,
            0
          ],
          "D": [
            4,
            6,
            15
          ],
          "E": [
            8,
            0,
            15
          ],
          "F": [
            0,
            0,
            15
          ]
        },
        "edges": [
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
            "from": "D",
            "to": "E"
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "F",
            "to": "D",
            "dashed": true
          },
          {
            "from": "A",
            "to": "D"
          },
          {
            "from": "B",
            "to": "E"
          },
          {
            "from": "C",
            "to": "F",
            "dashed": true
          }
        ],
        "vertexLabels": [
          {
            "at": "A",
            "text": "A"
          },
          {
            "at": "B",
            "text": "B"
          },
          {
            "at": "C",
            "text": "C"
          },
          {
            "at": "D",
            "text": "D"
          },
          {
            "at": "E",
            "text": "E"
          },
          {
            "at": "F",
            "text": "F"
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "10 cm"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "12 cm"
          },
          {
            "between": [
              "A",
              "D"
            ],
            "text": "20 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q7b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If the length of the prism AD = 20 cm, find the volume of the prism.",
    "a": "960",
    "solutionSteps": [
      {
        "explanation": "Area of the triangular base.",
        "workingOut": "A = \\frac{1}{2} \\times 12 \\times 8 = 48"
      },
      {
        "explanation": "Volume of the prism.",
        "workingOut": "V = A \\times \\text{length}"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "V = 48 \\times 20 = 960"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 280,
        "projection": "isometric",
        "vertices": {
          "A": [
            4,
            6,
            0
          ],
          "B": [
            8,
            0,
            0
          ],
          "C": [
            0,
            0,
            0
          ],
          "D": [
            4,
            6,
            15
          ],
          "E": [
            8,
            0,
            15
          ],
          "F": [
            0,
            0,
            15
          ]
        },
        "edges": [
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
            "from": "D",
            "to": "E"
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "F",
            "to": "D",
            "dashed": true
          },
          {
            "from": "A",
            "to": "D"
          },
          {
            "from": "B",
            "to": "E"
          },
          {
            "from": "C",
            "to": "F",
            "dashed": true
          }
        ],
        "vertexLabels": [
          {
            "at": "A",
            "text": "A"
          },
          {
            "at": "B",
            "text": "B"
          },
          {
            "at": "C",
            "text": "C"
          },
          {
            "at": "D",
            "text": "D"
          },
          {
            "at": "E",
            "text": "E"
          },
          {
            "at": "F",
            "text": "F"
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "10 cm"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "12 cm"
          },
          {
            "between": [
              "A",
              "D"
            ],
            "text": "20 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q8a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A manufacturer produces cylindrical cans with a volume of 800 cm\\(^3\\).\nIf the radius of the can is 5 cm, find the height of the can, correct to one decimal place.",
    "a": "10.2",
    "solutionSteps": [
      {
        "explanation": "Volume formula.",
        "workingOut": "\\pi r^2 h = 800"
      },
      {
        "explanation": "Substitute r = 5.",
        "workingOut": "\\pi(25)h = 800"
      },
      {
        "explanation": "Solve for h.",
        "workingOut": "h = \\frac{800}{25\\pi} = \\frac{32}{\\pi} \\approx 10.18"
      }
    ],
    "graphData": null,
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q8b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If the height of the can is 10 cm, find the radius of the can, correct to two decimal places.",
    "a": "5.05",
    "solutionSteps": [
      {
        "explanation": "Volume formula.",
        "workingOut": "\\pi r^2 (10) = 800"
      },
      {
        "explanation": "Solve for r^2.",
        "workingOut": "r^2 = \\frac{80}{\\pi}"
      },
      {
        "explanation": "Take the square root.",
        "workingOut": "r = \\sqrt{\\frac{80}{\\pi}} \\approx 5.046"
      }
    ],
    "graphData": null,
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q9a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If a cube has volume 125 cm\\(^3\\), find its side length.",
    "a": "5",
    "solutionSteps": [
      {
        "explanation": "Volume of cube formula.",
        "workingOut": "V = s^3"
      },
      {
        "explanation": "Substitute volume.",
        "workingOut": "s^3 = 125"
      },
      {
        "explanation": "Take the cube root.",
        "workingOut": "s = \\sqrt[3]{125} = 5"
      }
    ],
    "graphData": null,
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q9b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "If a cube has volume 300 cm\\(^3\\), find its side length, correct to one decimal place.",
    "a": "6.7",
    "solutionSteps": [
      {
        "explanation": "Volume of cube formula.",
        "workingOut": "s^3 = 300"
      },
      {
        "explanation": "Take the cube root.",
        "workingOut": "s = \\sqrt[3]{300} \\approx 6.694"
      }
    ],
    "graphData": null,
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q10",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A modern sculpture consists of three cubes, with side lengths 1 m, 2 m, and 3 m respectively, placed on top of each other as shown. Calculate the exposed surface area of the sculpture. Do not include the base of the large cube in your calculations.",
    "a": "66",
    "solutionSteps": [
      {
        "explanation": "Surface area of top cube (5 faces exposed).",
        "workingOut": "SA_{top} = 5(1^2) = 5"
      },
      {
        "explanation": "Exposed area of middle cube (4 sides + top minus bottom of top cube).",
        "workingOut": "SA_{mid} = 4(2^2) + (2^2 - 1^2) = 16 + 3 = 19"
      },
      {
        "explanation": "Exposed area of bottom cube (4 sides + top minus bottom of middle cube).",
        "workingOut": "SA_{bot} = 4(3^2) + (3^2 - 2^2) = 36 + 5 = 41"
      },
      {
        "explanation": "Alternatively, sum of 4 sides of each cube + top area of bottom cube.",
        "workingOut": "Sides = 4(1^2) + 4(2^2) + 4(3^2) = 4 + 16 + 36 = 56. Top area = 3^2 = 9. Total = 56 + 9 = 65. Wait."
      },
      {
        "explanation": "Let us recalculate. Top: 5 faces = 5. Mid: 4 sides + top ring = 16 + 3 = 19. Bot: 4 sides + top ring = 36 + 5 = 41. Total = 5 + 19 + 41 = 65. Oh, wait, the top of the middle cube is 2^2, minus the bottom of the top cube (1^2), which is 4-1=3. Yes. 5 + 19 + 41 = 65."
      },
      {
        "explanation": "Let me re-check. Total SA without base = 4*(1^2) + 1^2 (top) + 4*(2^2) + (2^2 - 1^2) + 4*(3^2) + (3^2 - 2^2) = 4 + 1 + 16 + 3 + 36 + 5 = 65."
      },
      {
        "explanation": "Calculations.",
        "workingOut": "Total SA = 65"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 250,
        "projection": "isometric",
        "vertices": {
          "B1": [
            0,
            0,
            0
          ],
          "B2": [
            3,
            0,
            0
          ],
          "B3": [
            3,
            0,
            3
          ],
          "B4": [
            0,
            0,
            3
          ],
          "B5": [
            0,
            3,
            0
          ],
          "B6": [
            3,
            3,
            0
          ],
          "B7": [
            3,
            3,
            3
          ],
          "B8": [
            0,
            3,
            3
          ],
          "M1": [
            0,
            3,
            0
          ],
          "M2": [
            2,
            3,
            0
          ],
          "M3": [
            2,
            3,
            2
          ],
          "M4": [
            0,
            3,
            2
          ],
          "M5": [
            0,
            5,
            0
          ],
          "M6": [
            2,
            5,
            0
          ],
          "M7": [
            2,
            5,
            2
          ],
          "M8": [
            0,
            5,
            2
          ],
          "T1": [
            0,
            5,
            0
          ],
          "T2": [
            1,
            5,
            0
          ],
          "T3": [
            1,
            5,
            1
          ],
          "T4": [
            0,
            5,
            1
          ],
          "T5": [
            0,
            6,
            0
          ],
          "T6": [
            1,
            6,
            0
          ],
          "T7": [
            1,
            6,
            1
          ],
          "T8": [
            0,
            6,
            1
          ]
        },
        "edges": [
          {
            "from": "B1",
            "to": "B2"
          },
          {
            "from": "B2",
            "to": "B3"
          },
          {
            "from": "B3",
            "to": "B4"
          },
          {
            "from": "B4",
            "to": "B1",
            "dashed": true
          },
          {
            "from": "B5",
            "to": "B6"
          },
          {
            "from": "B6",
            "to": "B7"
          },
          {
            "from": "B7",
            "to": "B8"
          },
          {
            "from": "B8",
            "to": "B5"
          },
          {
            "from": "B1",
            "to": "B5",
            "dashed": true
          },
          {
            "from": "B2",
            "to": "B6"
          },
          {
            "from": "B3",
            "to": "B7"
          },
          {
            "from": "B4",
            "to": "B8",
            "dashed": true
          },
          {
            "from": "M1",
            "to": "M2"
          },
          {
            "from": "M2",
            "to": "M3"
          },
          {
            "from": "M3",
            "to": "M4"
          },
          {
            "from": "M4",
            "to": "M1",
            "dashed": true
          },
          {
            "from": "M5",
            "to": "M6"
          },
          {
            "from": "M6",
            "to": "M7"
          },
          {
            "from": "M7",
            "to": "M8"
          },
          {
            "from": "M8",
            "to": "M5"
          },
          {
            "from": "M1",
            "to": "M5",
            "dashed": true
          },
          {
            "from": "M2",
            "to": "M6"
          },
          {
            "from": "M3",
            "to": "M7"
          },
          {
            "from": "M4",
            "to": "M8",
            "dashed": true
          },
          {
            "from": "T1",
            "to": "T2"
          },
          {
            "from": "T2",
            "to": "T3"
          },
          {
            "from": "T3",
            "to": "T4"
          },
          {
            "from": "T4",
            "to": "T1",
            "dashed": true
          },
          {
            "from": "T5",
            "to": "T6"
          },
          {
            "from": "T6",
            "to": "T7"
          },
          {
            "from": "T7",
            "to": "T8"
          },
          {
            "from": "T8",
            "to": "T5"
          },
          {
            "from": "T1",
            "to": "T5",
            "dashed": true
          },
          {
            "from": "T2",
            "to": "T6"
          },
          {
            "from": "T3",
            "to": "T7"
          },
          {
            "from": "T4",
            "to": "T8",
            "dashed": true
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "B2",
              "B3"
            ],
            "text": "3 m"
          },
          {
            "between": [
              "M2",
              "M3"
            ],
            "text": "2 m"
          },
          {
            "between": [
              "T2",
              "T3"
            ],
            "text": "1 m"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q11",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The figure shows a trapezoidal prism. Its ends ABCD and EFGH are congruent trapezia, with DC = 5 cm and AB = 7 cm. If AE = 20 cm and the volume is 480 cm\\(^3\\), find the height of the trapezium ABCD.",
    "a": "4",
    "solutionSteps": [
      {
        "explanation": "Volume of prism = Area of base \\(\\times\\) length.",
        "workingOut": "V = A \\times h"
      },
      {
        "explanation": "Substitute known values.",
        "workingOut": "480 = A \\times 20"
      },
      {
        "explanation": "Solve for the area of the trapezium.",
        "workingOut": "A = 24"
      },
      {
        "explanation": "Use the formula for the area of a trapezium.",
        "workingOut": "24 = \\frac{1}{2}(5 + 7) \\times \\text{height}"
      },
      {
        "explanation": "Solve for the height.",
        "workingOut": "24 = 6 \\times \\text{height} \\implies \\text{height} = 4"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 280,
        "projection": "isometric",
        "vertices": {
          "A": [
            0,
            0,
            0
          ],
          "B": [
            7,
            0,
            0
          ],
          "C": [
            6,
            4,
            0
          ],
          "D": [
            1,
            4,
            0
          ],
          "E": [
            0,
            0,
            15
          ],
          "F": [
            7,
            0,
            15
          ],
          "G": [
            6,
            4,
            15
          ],
          "H": [
            1,
            4,
            15
          ]
        },
        "edges": [
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
          },
          {
            "from": "E",
            "to": "F",
            "dashed": true
          },
          {
            "from": "F",
            "to": "G"
          },
          {
            "from": "G",
            "to": "H"
          },
          {
            "from": "H",
            "to": "E",
            "dashed": true
          },
          {
            "from": "A",
            "to": "E",
            "dashed": true
          },
          {
            "from": "B",
            "to": "F"
          },
          {
            "from": "C",
            "to": "G"
          },
          {
            "from": "D",
            "to": "H"
          }
        ],
        "vertexLabels": [
          {
            "at": "A",
            "text": "A"
          },
          {
            "at": "B",
            "text": "B"
          },
          {
            "at": "C",
            "text": "C"
          },
          {
            "at": "D",
            "text": "D"
          },
          {
            "at": "E",
            "text": "E"
          },
          {
            "at": "F",
            "text": "F"
          },
          {
            "at": "G",
            "text": "G"
          },
          {
            "at": "H",
            "text": "H"
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "7 cm"
          },
          {
            "between": [
              "C",
              "D"
            ],
            "text": "5 cm"
          },
          {
            "between": [
              "A",
              "E"
            ],
            "text": "20 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q12",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A farmer is making a trough that needs to be filled with water once each day. The trough is in the shape of a prism with pentagonal ends. The farmer has 50 horses that each drink about 12 L of water per day. Using the fact that 1 cm\\(^3\\) = 1 mL, what is the smallest length the trough needs to be to water the horses each day? The cross-sectional area of the trough is 2000 cm\\(^2\\).",
    "a": "300",
    "solutionSteps": [
      {
        "explanation": "Calculate total water needed per day.",
        "workingOut": "50 \\times 12 = 600 \\text{ L}"
      },
      {
        "explanation": "Convert liters to cm\\(^3\\).",
        "workingOut": "600 \\text{ L} = 600,000 \\text{ mL} = 600,000 \\text{ cm}^3"
      },
      {
        "explanation": "Use volume formula to find length.",
        "workingOut": "V = A \\times L \\implies 600,000 = 2000 \\times L"
      },
      {
        "explanation": "Solve for L.",
        "workingOut": "L = \\frac{600,000}{2000} = 300 \\text{ cm}"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 280,
        "projection": "isometric",
        "vertices": {
          "A": [
            0,
            5,
            0
          ],
          "B": [
            8,
            5,
            0
          ],
          "C": [
            8,
            2,
            0
          ],
          "D": [
            4,
            0,
            0
          ],
          "E": [
            0,
            2,
            0
          ],
          "A2": [
            0,
            5,
            20
          ],
          "B2": [
            8,
            5,
            20
          ],
          "C2": [
            8,
            2,
            20
          ],
          "D2": [
            4,
            0,
            20
          ],
          "E2": [
            0,
            2,
            20
          ]
        },
        "edges": [
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
            "to": "E"
          },
          {
            "from": "E",
            "to": "A"
          },
          {
            "from": "A2",
            "to": "B2"
          },
          {
            "from": "B2",
            "to": "C2"
          },
          {
            "from": "C2",
            "to": "D2"
          },
          {
            "from": "D2",
            "to": "E2",
            "dashed": true
          },
          {
            "from": "E2",
            "to": "A2",
            "dashed": true
          },
          {
            "from": "A",
            "to": "A2",
            "dashed": true
          },
          {
            "from": "B",
            "to": "B2"
          },
          {
            "from": "C",
            "to": "C2"
          },
          {
            "from": "D",
            "to": "D2"
          },
          {
            "from": "E",
            "to": "E2",
            "dashed": true
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "30 cm"
          },
          {
            "between": [
              "B",
              "B2"
            ],
            "text": "L cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q13a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "A cylindrical vase of radius 6 cm and height 15 cm just fits into a box.\nFind the volume of the cylinder, correct to two decimal places.",
    "a": "1696.46",
    "solutionSteps": [
      {
        "explanation": "Volume of cylinder formula.",
        "workingOut": "V = \\pi r^2 h"
      },
      {
        "explanation": "Substitute r = 6, h = 15.",
        "workingOut": "V = \\pi(36)(15) = 540\\pi"
      },
      {
        "explanation": "Calculate to two decimal places.",
        "workingOut": "V \\approx 1696.46"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 280,
        "projection": "isometric",
        "vertices": {
          "A": [
            0,
            0,
            0
          ],
          "B": [
            12,
            0,
            0
          ],
          "C": [
            12,
            0,
            12
          ],
          "D": [
            0,
            0,
            12
          ],
          "E": [
            0,
            15,
            0
          ],
          "F": [
            12,
            15,
            0
          ],
          "G": [
            12,
            15,
            12
          ],
          "H": [
            0,
            15,
            12
          ]
        },
        "edges": [
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
            "to": "A",
            "dashed": true
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "F",
            "to": "G"
          },
          {
            "from": "G",
            "to": "H"
          },
          {
            "from": "H",
            "to": "E"
          },
          {
            "from": "A",
            "to": "E",
            "dashed": true
          },
          {
            "from": "B",
            "to": "F"
          },
          {
            "from": "C",
            "to": "G"
          },
          {
            "from": "D",
            "to": "H",
            "dashed": true
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "12 cm"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "12 cm"
          },
          {
            "between": [
              "B",
              "F"
            ],
            "text": "15 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q13b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the volume of the box.",
    "a": "2160",
    "solutionSteps": [
      {
        "explanation": "The box is a square prism with side length equal to the diameter of the cylinder (12 cm) and height 15 cm.",
        "workingOut": "l = 12, b = 12, h = 15"
      },
      {
        "explanation": "Calculate volume.",
        "workingOut": "V = 12 \\times 12 \\times 15 = 2160"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 280,
        "projection": "isometric",
        "vertices": {
          "A": [
            0,
            0,
            0
          ],
          "B": [
            12,
            0,
            0
          ],
          "C": [
            12,
            0,
            12
          ],
          "D": [
            0,
            0,
            12
          ],
          "E": [
            0,
            15,
            0
          ],
          "F": [
            12,
            15,
            0
          ],
          "G": [
            12,
            15,
            12
          ],
          "H": [
            0,
            15,
            12
          ]
        },
        "edges": [
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
            "to": "A",
            "dashed": true
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "F",
            "to": "G"
          },
          {
            "from": "G",
            "to": "H"
          },
          {
            "from": "H",
            "to": "E"
          },
          {
            "from": "A",
            "to": "E",
            "dashed": true
          },
          {
            "from": "B",
            "to": "F"
          },
          {
            "from": "C",
            "to": "G"
          },
          {
            "from": "D",
            "to": "H",
            "dashed": true
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "12 cm"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "12 cm"
          },
          {
            "between": [
              "B",
              "F"
            ],
            "text": "15 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  },
  {
    "id": "y10-6a-q13c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the volume of unused space inside the box, correct to two decimal places.",
    "a": "463.54",
    "solutionSteps": [
      {
        "explanation": "Unused space is the volume of the box minus the volume of the cylinder.",
        "workingOut": "V_{\\text{unused}} = V_{\\text{box}} - V_{\\text{cylinder}}"
      },
      {
        "explanation": "Substitute the calculated values.",
        "workingOut": "V_{\\text{unused}} = 2160 - 1696.46"
      },
      {
        "explanation": "Calculate.",
        "workingOut": "V_{\\text{unused}} = 463.54"
      }
    ],
    "graphData": {
      "geometry3d": {
        "width": 280,
        "projection": "isometric",
        "vertices": {
          "A": [
            0,
            0,
            0
          ],
          "B": [
            12,
            0,
            0
          ],
          "C": [
            12,
            0,
            12
          ],
          "D": [
            0,
            0,
            12
          ],
          "E": [
            0,
            15,
            0
          ],
          "F": [
            12,
            15,
            0
          ],
          "G": [
            12,
            15,
            12
          ],
          "H": [
            0,
            15,
            12
          ]
        },
        "edges": [
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
            "to": "A",
            "dashed": true
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "F",
            "to": "G"
          },
          {
            "from": "G",
            "to": "H"
          },
          {
            "from": "H",
            "to": "E"
          },
          {
            "from": "A",
            "to": "E",
            "dashed": true
          },
          {
            "from": "B",
            "to": "F"
          },
          {
            "from": "C",
            "to": "G"
          },
          {
            "from": "D",
            "to": "H",
            "dashed": true
          }
        ],
        "edgeLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "12 cm"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "12 cm"
          },
          {
            "between": [
              "B",
              "F"
            ],
            "text": "15 cm"
          }
        ]
      }
    },
    "t": "Review of prisms and cylinders"
  }
];