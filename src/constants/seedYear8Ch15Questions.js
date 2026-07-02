export const Y8_CH15A_QUESTIONS = [
  {
    "id": "y8-15a-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the area of the shaded region in the figure below.",
    "a": "32",
    "solution": "1. Find the area of the outer rectangle: $\\text{Area}_{\\text{outer}} = 8\\text{ m} \\times 5\\text{ m} = 40\\text{ m}^2$.\n2. Find the area of the two square cutouts: $\\text{Area}_{\\text{cutouts}} = 2 \\times (2\\text{ m} \\times 2\\text{ m}) = 8\\text{ m}^2$.\n3. Subtract the cutouts from the outer area: $\\text{Area}_{\\text{shaded}} = 40 - 8 = 32\\text{ m}^2$.",
    "t": "Review of area and length",
    "hint": "Subtract the area of the two squares from the area of the outer rectangle.",
    "solutionSteps": [
      {
        "explanation": "Calculate the outer rectangle's area.",
        "workingOut": "\\text{Area}_{\\text{outer}} = 8 \\times 5 = 40\\text{ m}^2"
      },
      {
        "explanation": "Calculate the total area of the two square cutouts.",
        "workingOut": "\\text{Area}_{\\text{squares}} = 2 \\times (2^2) = 8\\text{ m}^2"
      },
      {
        "explanation": "Subtract to find the shaded area.",
        "workingOut": "\\text{Area}_{\\text{shaded}} = 40 - 8 = 32\\text{ m}^2"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            8,
            0
          ],
          "C": [
            8,
            5
          ],
          "D": [
            0,
            5
          ],
          "L1": [
            1.5,
            1.5
          ],
          "L2": [
            3.5,
            1.5
          ],
          "L3": [
            3.5,
            3.5
          ],
          "L4": [
            1.5,
            3.5
          ],
          "R1": [
            4.5,
            1.5
          ],
          "R2": [
            6.5,
            1.5
          ],
          "R3": [
            6.5,
            3.5
          ],
          "R4": [
            4.5,
            3.5
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
          },
          {
            "from": "L1",
            "to": "L2",
            "ticks": 1
          },
          {
            "from": "L2",
            "to": "L3",
            "ticks": 1
          },
          {
            "from": "L3",
            "to": "L4",
            "ticks": 1
          },
          {
            "from": "L4",
            "to": "L1",
            "ticks": 1
          },
          {
            "from": "R1",
            "to": "R2",
            "ticks": 1
          },
          {
            "from": "R2",
            "to": "R3",
            "ticks": 1
          },
          {
            "from": "R3",
            "to": "R4",
            "ticks": 1
          },
          {
            "from": "R4",
            "to": "L1",
            "ticks": 1
          }
        ],
        "angles": [
          {
            "at": "A",
            "right": true
          },
          {
            "at": "B",
            "right": true
          },
          {
            "at": "C",
            "right": true
          },
          {
            "at": "D",
            "right": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "D",
              "A"
            ],
            "text": "5 m"
          },
          {
            "between": [
              "A",
              "B"
            ],
            "text": "8 m"
          },
          {
            "between": [
              "L4",
              "L3"
            ],
            "text": "2 m"
          },
          {
            "between": [
              "R4",
              "R3"
            ],
            "text": "2 m"
          }
        ],
        "freeLabels": []
      }
    }
  },
  {
    "id": "y8-15a-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the area of the shaded region in the figure below.",
    "a": "30",
    "solution": "1. The outer shape is a rectangle with dimensions $10\\text{ cm}$ by $6\\text{ cm}$. Area = $10 \\times 6 = 60\\text{ cm}^2$.\n2. The unshaded region is a triangle with base $10\\text{ cm}$ (the bottom side) and height $6\\text{ cm}$ (the height of the rectangle). Area = $0.5 \\times 10 \\times 6 = 30\\text{ cm}^2$.\n3. Shaded Area = $\\text{Area}_{\\text{rectangle}} - \\text{Area}_{\\text{triangle}} = 60 - 30 = 30\\text{ cm}^2$.",
    "t": "Review of area and length",
    "hint": "The shaded area is the total rectangle area minus the unshaded triangle area.",
    "solutionSteps": [
      {
        "explanation": "Calculate the area of the rectangle.",
        "workingOut": "\\text{Area}_{\\text{rect}} = 10 \\times 6 = 60\\text{ cm}^2"
      },
      {
        "explanation": "Calculate the area of the unshaded triangle.",
        "workingOut": "\\text{Area}_{\\text{tri}} = \\frac{1}{2} \\times 10 \\times 6 = 30\\text{ cm}^2"
      },
      {
        "explanation": "Subtract the triangle's area from the rectangle's area.",
        "workingOut": "\\text{Area}_{\\text{shaded}} = 60 - 30 = 30\\text{ cm}^2"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
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
            6
          ],
          "D": [
            0,
            6
          ],
          "E": [
            4,
            6
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B",
            "ticks": 2
          },
          {
            "from": "B",
            "to": "C",
            "ticks": 1
          },
          {
            "from": "C",
            "to": "D",
            "ticks": 2
          },
          {
            "from": "D",
            "to": "A",
            "ticks": 1
          },
          {
            "from": "A",
            "to": "E"
          },
          {
            "from": "E",
            "to": "B"
          }
        ],
        "angles": [
          {
            "at": "A",
            "right": true
          },
          {
            "at": "B",
            "right": true
          },
          {
            "at": "C",
            "right": true
          },
          {
            "at": "D",
            "right": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "D",
              "A"
            ],
            "text": "6 cm"
          },
          {
            "between": [
              "A",
              "B"
            ],
            "text": "10 cm"
          }
        ],
        "freeLabels": []
      }
    }
  },
  {
    "id": "y8-15a-q2c",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the area of the shaded region (the border) in the figure below.",
    "a": "144",
    "solution": "1. Find the area of the outer square: $\\text{Area}_{\\text{outer}} = 15\\text{ mm} \\times 15\\text{ mm} = 225\\text{ mm}^2$.\n2. Find the area of the inner square cutout: $\\text{Area}_{\\text{inner}} = 9\\text{ mm} \\times 9\\text{ mm} = 81\\text{ mm}^2$.\n3. Shaded Area = $225 - 81 = 144\\text{ mm}^2$.",
    "t": "Review of area and length",
    "hint": "Subtract the area of the smaller inner square from the larger outer square.",
    "solutionSteps": [
      {
        "explanation": "Calculate the area of the outer square.",
        "workingOut": "\\text{Area}_{\\text{outer}} = 15^2 = 225\\text{ mm}^2"
      },
      {
        "explanation": "Calculate the area of the inner square.",
        "workingOut": "\\text{Area}_{\\text{inner}} = 9^2 = 81\\text{ mm}^2"
      },
      {
        "explanation": "Subtract the inner area from the outer area.",
        "workingOut": "\\text{Area}_{\\text{shaded}} = 225 - 81 = 144\\text{ mm}^2"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
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
            10
          ],
          "D": [
            0,
            10
          ],
          "E": [
            2,
            2
          ],
          "F": [
            8,
            2
          ],
          "G": [
            8,
            8
          ],
          "H": [
            2,
            8
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B",
            "ticks": 1
          },
          {
            "from": "B",
            "to": "C",
            "ticks": 1
          },
          {
            "from": "C",
            "to": "D",
            "ticks": 1
          },
          {
            "from": "D",
            "to": "A",
            "ticks": 1
          },
          {
            "from": "E",
            "to": "F",
            "ticks": 2
          },
          {
            "from": "F",
            "to": "G",
            "ticks": 2
          },
          {
            "from": "G",
            "to": "H",
            "ticks": 2
          },
          {
            "from": "H",
            "to": "E",
            "ticks": 2
          }
        ],
        "angles": [
          {
            "at": "A",
            "right": true
          },
          {
            "at": "E",
            "right": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "15 mm"
          },
          {
            "between": [
              "E",
              "F"
            ],
            "text": "9 mm"
          }
        ],
        "freeLabels": []
      }
    }
  },
  {
    "id": "y8-15a-q2d",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the area of the shaded trapezoid in the figure below.",
    "a": "99",
    "solution": "1. Find the area of the outer rectangle: $\\text{Area}_{\\text{rect}} = 16\\text{ cm} \\times 9\\text{ cm} = 144\\text{ cm}^2$.\n2. Find the area of the two unshaded right-angled triangles:\n   - Left triangle: $\\text{Area} = 0.5 \\times 6\\text{ cm} \\times 9\\text{ cm} = 27\\text{ cm}^2$.\n   - Right triangle: $\\text{Area} = 0.5 \\times 4\\text{ cm} \\times 9\\text{ cm} = 18\\text{ cm}^2$.\n3. Shaded Area = $144 - (27 + 18) = 144 - 45 = 99\\text{ cm}^2$.",
    "t": "Review of area and length",
    "hint": "Find the area of the outer rectangle and subtract the areas of the two unshaded corner triangles.",
    "solutionSteps": [
      {
        "explanation": "Calculate the area of the outer rectangle.",
        "workingOut": "\\text{Area}_{\\text{rect}} = 16 \\times 9 = 144\\text{ cm}^2"
      },
      {
        "explanation": "Calculate the area of the left corner triangle.",
        "workingOut": "\\text{Area}_{\\text{left}} = \\frac{1}{2} \\times 6 \\times 9 = 27\\text{ cm}^2"
      },
      {
        "explanation": "Calculate the area of the right corner triangle.",
        "workingOut": "\\text{Area}_{\\text{right}} = \\frac{1}{2} \\times 4 \\times 9 = 18\\text{ cm}^2"
      },
      {
        "explanation": "Subtract both triangles from the rectangle area.",
        "workingOut": "\\text{Area}_{\\text{shaded}} = 144 - 27 - 18 = 99\\text{ cm}^2"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            16,
            0
          ],
          "C": [
            16,
            9
          ],
          "D": [
            0,
            9
          ],
          "E": [
            6,
            9
          ],
          "F": [
            12,
            9
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
          },
          {
            "from": "A",
            "to": "E"
          },
          {
            "from": "E",
            "to": "F"
          },
          {
            "from": "F",
            "to": "B"
          }
        ],
        "angles": [
          {
            "at": "A",
            "right": true
          },
          {
            "at": "B",
            "right": true
          },
          {
            "at": "C",
            "right": true
          },
          {
            "at": "D",
            "right": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "D",
              "A"
            ],
            "text": "9 cm"
          },
          {
            "between": [
              "A",
              "B"
            ],
            "text": "16 cm"
          },
          {
            "between": [
              "D",
              "E"
            ],
            "text": "6 cm"
          },
          {
            "between": [
              "F",
              "C"
            ],
            "text": "4 cm"
          }
        ],
        "freeLabels": []
      }
    }
  },
  {
    "id": "y8-15a-q3",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "A rectangular orchard is $720\\text{ m}$ long and $350\\text{ m}$ wide. Find the area of the orchard in hectares. (Recall that $1\\text{ hectare} = 10\\,000\\text{ m}^2$.)",
    "a": "25.2",
    "solution": "1. Find the area in square metres: $\\text{Area} = 720\\text{ m} \\times 350\\text{ m} = 252\\,000\\text{ m}^2$.\n2. Convert to hectares by dividing by $10\\,000$:\n   $$\\text{Area in hectares} = \\frac{252\\,000}{10\\,000} = 25.2\\text{ hectares}$$",
    "t": "Review of area and length",
    "hint": "Calculate the area in square metres first, then divide by $10\\,000$.",
    "solutionSteps": [
      {
        "explanation": "Calculate the area of the rectangle in square metres.",
        "workingOut": "\\text{Area} = 720 \\times 350 = 252\\,000\\text{ m}^2"
      },
      {
        "explanation": "Divide the area by \\(10\\,000\\) to convert to hectares.",
        "workingOut": "\\text{Area in hectares} = \\frac{252\\,000}{10\\,000} = 25.2"
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-15a-q4",
    "type": "multiple_choice",
    "difficulty": "medium",
    "question": "The base and height of a triangle are whole numbers, and its area is $10$. Find all possible pairs of values for the base and height $(b, h)$.",
    "a": "0",
    "opts": [
      "(1, 20), (2, 10), (4, 5) and their reverses",
      "(1, 10), (2, 5) and their reverses",
      "(1, 40), (2, 20), (4, 10), (5, 8) and their reverses",
      "(2, 10), (4, 5) and their reverses"
    ],
    "solution": "1. The formula for the area of a triangle is $\\text{Area} = 0.5 \\times b \\times h$.\n2. Given $\\text{Area} = 10$, we have $0.5 \\times b \\times h = 10 \\implies b \\times h = 20$.\n3. Since base and height are whole numbers, we find all factor pairs of 20:\n   - Pairs: $(1, 20), (2, 10), (4, 5)$ and their reversed pairs $(20, 1), (10, 2), (5, 4)$.",
    "t": "Review of area and length",
    "hint": "Set up the area formula $0.5 \\times b \\times h = 10$ and solve for $b \\times h$.",
    "solutionSteps": [
      {
        "explanation": "Set the area formula equal to \\(10\\).",
        "workingOut": "\\frac{1}{2} \\times b \\times h = 10"
      },
      {
        "explanation": "Multiply by 2 to find the product of base and height.",
        "workingOut": "b \\times h = 20"
      },
      {
        "explanation": "List all pairs of whole numbers that multiply to 20.",
        "workingOut": "\\text{Pairs: } (1, 20), (2, 10), (4, 5) \\text{ and reverses}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-15a-q5a",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write down an algebraic formula, in simplest form, for the area of the rectangle shown.",
    "a": "15xy",
    "solution": "1. The area of a rectangle is length $\\times$ width.\n2. Here, the side lengths are $3x$ and $5y$.\n3. Area = $3x \\times 5y = 15xy$.",
    "t": "Review of area and length",
    "hint": "Multiply the two algebraic side lengths together.",
    "solutionSteps": [
      {
        "explanation": "Multiply base by height.",
        "workingOut": "\\text{Area} = 3x \\times 5y"
      },
      {
        "explanation": "Simplify the coefficient and variables.",
        "workingOut": "\\text{Area} = 15xy"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            8,
            0
          ],
          "C": [
            8,
            4
          ],
          "D": [
            0,
            4
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B",
            "ticks": 2
          },
          {
            "from": "B",
            "to": "C",
            "ticks": 1
          },
          {
            "from": "C",
            "to": "D",
            "ticks": 2
          },
          {
            "from": "D",
            "to": "A",
            "ticks": 1
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
              "B"
            ],
            "text": "3x"
          },
          {
            "between": [
              "B",
              "C"
            ],
            "text": "5y"
          }
        ],
        "freeLabels": []
      }
    }
  },
  {
    "id": "y8-15a-q5b",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write down an algebraic formula, in simplest form, for the area of the square shown.",
    "a": "16a^2",
    "solution": "1. The area of a square is $\\text{side}^2$.\n2. Here, the side length is $4a$.\n3. Area = $(4a)^2 = 16a^2$.",
    "t": "Review of area and length",
    "hint": "Square the algebraic side length of the square.",
    "solutionSteps": [
      {
        "explanation": "Multiply side by side.",
        "workingOut": "\\text{Area} = (4a) \\times (4a)"
      },
      {
        "explanation": "Simplify to index form.",
        "workingOut": "\\text{Area} = 16a^2"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            5,
            0
          ],
          "C": [
            5,
            5
          ],
          "D": [
            0,
            5
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B",
            "ticks": 1
          },
          {
            "from": "B",
            "to": "C",
            "ticks": 1
          },
          {
            "from": "C",
            "to": "D",
            "ticks": 1
          },
          {
            "from": "D",
            "to": "A",
            "ticks": 1
          }
        ],
        "angles": [],
        "sideLabels": [
          {
            "between": [
              "B",
              "C"
            ],
            "text": "4a"
          }
        ],
        "freeLabels": []
      }
    }
  },
  {
    "id": "y8-15a-q5c",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write down an algebraic formula, in simplest form, for the area of the triangle shown.",
    "a": "45xy",
    "solution": "1. The area of a triangle is $0.5 \\times \\text{base} \\times \\text{height}$.\n2. Here, the base is $10y$ and the perpendicular height is $9x$.\n3. Area = $0.5 \\times 10y \\times 9x = 45xy$.",
    "t": "Review of area and length",
    "hint": "Use the formula $\\text{Area} = 0.5 \\times b \\times h$ with the given algebraic expressions.",
    "solutionSteps": [
      {
        "explanation": "Set up the area formula.",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times 10y \\times 9x"
      },
      {
        "explanation": "Multiply and simplify.",
        "workingOut": "\\text{Area} = 5y \\times 9x = 45xy"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
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
            4,
            6
          ],
          "H": [
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
          },
          {
            "from": "C",
            "to": "H",
            "dashed": true
          }
        ],
        "angles": [
          {
            "at": "H",
            "right": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "10y"
          },
          {
            "between": [
              "C",
              "H"
            ],
            "text": "9x"
          }
        ],
        "freeLabels": []
      }
    }
  },
  {
    "id": "y8-15a-q5d",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write down an algebraic formula, in simplest form, for the area of the compound figure shown.",
    "a": "24m^2",
    "solution": "1. The shape consists of a square of side $4m$ and a right-angled triangle on top.\n2. Area of the square: $\\text{Area}_{\\text{square}} = (4m)^2 = 16m^2$.\n3. Area of the triangle: $\\text{Area}_{\\text{triangle}} = 0.5 \\times 4m \\times 4m = 8m^2$.\n4. Total Area = $16m^2 + 8m^2 = 24m^2$.",
    "t": "Review of area and length",
    "hint": "Calculate the area of the square and the triangle separately, then add them together.",
    "solutionSteps": [
      {
        "explanation": "Calculate the area of the square base.",
        "workingOut": "\\text{Area}_{\\text{square}} = (4m)^2 = 16m^2"
      },
      {
        "explanation": "Calculate the area of the top triangle.",
        "workingOut": "\\text{Area}_{\\text{triangle}} = \\frac{1}{2} \\times 4m \\times 4m = 8m^2"
      },
      {
        "explanation": "Add the two areas together.",
        "workingOut": "\\text{Area}_{\\text{total}} = 16m^2 + 8m^2 = 24m^2"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            6,
            0
          ],
          "C": [
            6,
            6
          ],
          "D": [
            0,
            6
          ],
          "E": [
            3,
            11
          ],
          "H": [
            3,
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
            "from": "B",
            "to": "C",
            "ticks": 1
          },
          {
            "from": "C",
            "to": "D"
          },
          {
            "from": "D",
            "to": "A",
            "ticks": 1
          },
          {
            "from": "D",
            "to": "E"
          },
          {
            "from": "E",
            "to": "C"
          },
          {
            "from": "E",
            "to": "H",
            "dashed": true,
            "ticks": 1
          }
        ],
        "angles": [],
        "sideLabels": [
          {
            "between": [
              "A",
              "B"
            ],
            "text": "4m"
          }
        ],
        "freeLabels": []
      }
    }
  },
  {
    "id": "y8-15a-q6",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "A room has 4 walls and 2 doorways. The walls each have dimensions $8\\text{ m}$ by $4\\text{ m}$, and the doorways have dimensions $1\\text{ m}$ by $2\\text{ m}$. If the inside walls of the room must be painted, how much will this cost (in dollars) if the rate for painting is $6 per square metre?",
    "a": "744",
    "solution": "1. Find the total area of the 4 walls: $4 \\times (8\\text{ m} \\times 4\\text{ m}) = 128\\text{ m}^2$.\n2. Find the total area of the 2 doorways: $2 \\times (1\\text{ m} \\times 2\\text{ m}) = 4\\text{ m}^2$.\n3. Find the net area to be painted: $128 - 4 = 124\\text{ m}^2$.\n4. Calculate the cost: $124\\text{ m}^2 \\times \\$6/\\text{m}^2 = \\$744$.",
    "t": "Review of area and length",
    "hint": "Subtract the area of the doorways from the total wall area, then multiply by the cost per square metre.",
    "solutionSteps": [
      {
        "explanation": "Calculate the total area of the 4 walls.",
        "workingOut": "\\text{Wall Area} = 4 \\times 8 \\times 4 = 128\\text{ m}^2"
      },
      {
        "explanation": "Calculate the total area of the 2 doorways.",
        "workingOut": "\\text{Doorway Area} = 2 \\times 1 \\times 2 = 4\\text{ m}^2"
      },
      {
        "explanation": "Calculate the net area to paint.",
        "workingOut": "\\text{Net Area} = 128 - 4 = 124\\text{ m}^2"
      },
      {
        "explanation": "Multiply the net area by the painting rate to find the total cost.",
        "workingOut": "\\text{Cost} = 124 \\times 6 = 744"
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-15a-q7",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Use Pythagoras' theorem to find $h$ and hence find the area of the triangle in the diagram.",
    "a": "h = 12, Area = 120 cm^2",
    "solution": "a) By Pythagoras on the left right-angled triangle: $h^2 + 5^2 = 13^2 \\implies h^2 = 144 \\implies h = 12$.\nb) The base of the entire triangle is $5 + 15 = 20\\text{ cm}$. Area = $0.5 \\times 20 \\times 12 = 120\\text{ cm}^2$.",
    "t": "Review of area and length",
    "hint": "Apply Pythagoras to the left triangle to find $h$, then use the base $5 + 15 = 20$ for the area.",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras' theorem to the left side triangle.",
        "workingOut": "h^2 + 5^2 = 13^2 \\implies h^2 = 169 - 25 = 144"
      },
      {
        "explanation": "Solve for \\(h\\).",
        "workingOut": "h = \\sqrt{144} = 12\\text{ cm}"
      },
      {
        "explanation": "Calculate total base length.",
        "workingOut": "\\text{Base} = 5 + 15 = 20\\text{ cm}"
      },
      {
        "explanation": "Calculate area of the triangle.",
        "workingOut": "\\text{Area} = \\frac{1}{2} \\times 20 \\times 12 = 120\\text{ cm}^2"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            18,
            0
          ],
          "C": [
            5,
            12
          ],
          "D": [
            5,
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
            "from": "C",
            "to": "D",
            "dashed": true
          }
        ],
        "angles": [
          {
            "at": "D",
            "right": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "A",
              "C"
            ],
            "text": "13 cm"
          },
          {
            "between": [
              "A",
              "D"
            ],
            "text": "5 cm"
          },
          {
            "between": [
              "D",
              "B"
            ],
            "text": "15 cm"
          },
          {
            "between": [
              "C",
              "D"
            ],
            "text": "h cm"
          }
        ],
        "freeLabels": []
      }
    },
    "subQuestions": [
      {
        "id": "y8-15a-q7a",
        "type": "short_answer",
        "question": "a) Use Pythagoras' theorem to find $h$.",
        "a": "12"
      },
      {
        "id": "y8-15a-q7b",
        "type": "short_answer",
        "question": "b) Hence find the area of the triangle.",
        "a": "120"
      }
    ]
  },
  {
    "id": "y8-15a-q8",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find $x$ and hence find the area of the rectangle shown.",
    "a": "x = 15, Area = 120 m^2",
    "solution": "a) Using Pythagoras' theorem on the right triangle formed by the diagonal: $x^2 + 8^2 = 17^2 \\implies x^2 = 289 - 64 = 225 \\implies x = 15$.\nb) The area of the rectangle is base $\\times$ height: $\\text{Area} = 15\\text{ m} \\times 8\\text{ m} = 120\\text{ m}^2$.",
    "t": "Review of area and length",
    "hint": "Use Pythagoras to find the missing side $x$, then calculate base $\\times$ height.",
    "solutionSteps": [
      {
        "explanation": "Use Pythagoras' theorem on the right triangle.",
        "workingOut": "x^2 + 8^2 = 17^2 \\implies x^2 = 289 - 64 = 225"
      },
      {
        "explanation": "Solve for \\(x\\).",
        "workingOut": "x = \\sqrt{225} = 15\\text{ m}"
      },
      {
        "explanation": "Calculate the area of the rectangle.",
        "workingOut": "\\text{Area} = 15 \\times 8 = 120\\text{ m}^2"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "A": [
            0,
            0
          ],
          "B": [
            15,
            0
          ],
          "C": [
            15,
            8
          ],
          "D": [
            0,
            8
          ]
        },
        "segments": [
          {
            "from": "A",
            "to": "B"
          },
          {
            "from": "B",
            "to": "C",
            "ticks": 1
          },
          {
            "from": "C",
            "to": "D"
          },
          {
            "from": "D",
            "to": "A",
            "ticks": 1
          },
          {
            "from": "A",
            "to": "C"
          }
        ],
        "angles": [
          {
            "at": "D",
            "right": true
          }
        ],
        "sideLabels": [
          {
            "between": [
              "D",
              "A"
            ],
            "text": "8 m"
          },
          {
            "between": [
              "D",
              "C"
            ],
            "text": "x m"
          },
          {
            "between": [
              "A",
              "C"
            ],
            "text": "17 m"
          }
        ],
        "freeLabels": []
      }
    },
    "subQuestions": [
      {
        "id": "y8-15a-q8a",
        "type": "short_answer",
        "question": "a) Find $x$.",
        "a": "15"
      },
      {
        "id": "y8-15a-q8b",
        "type": "short_answer",
        "question": "b) Hence find the area of the rectangle.",
        "a": "120"
      }
    ]
  },
  {
    "id": "y8-15a-q9",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "Find the area of the floor of a room (in square metres) that is left uncovered if a carpet measuring $5\\text{ m}$ by $4\\text{ m}$ is laid in a room that is $6\\text{ m}$ square.",
    "a": "16",
    "solution": "1. Find the area of the square room: $\\text{Area}_{\\text{room}} = 6\\text{ m} \\times 6\\text{ m} = 36\\text{ m}^2$.\n2. Find the area of the carpet: $\\text{Area}_{\\text{carpet}} = 5\\text{ m} \\times 4\\text{ m} = 20\\text{ m}^2$.\n3. The uncovered floor area is: $36 - 20 = 16\\text{ m}^2$.",
    "t": "Review of area and length",
    "hint": "Subtract the area of the rectangular carpet from the area of the square room.",
    "solutionSteps": [
      {
        "explanation": "Calculate the area of the square room.",
        "workingOut": "\\text{Area}_{\\text{room}} = 6^2 = 36\\text{ m}^2"
      },
      {
        "explanation": "Calculate the area of the carpet.",
        "workingOut": "\\text{Area}_{\\text{carpet}} = 5 \\times 4 = 20\\text{ m}^2"
      },
      {
        "explanation": "Subtract the carpet area from the room area.",
        "workingOut": "\\text{Uncovered Area} = 36 - 20 = 16\\text{ m}^2"
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-15a-q10",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "This diagram is the ground floor plan of a house drawn to a scale of $1\\text{ cm}$ to represent $3\\text{ metres}$. The plan has the following measured dimensions on the paper:\n- Total length of the house: $10\\text{ cm}$\n- Total width of the house: $7\\text{ cm}$\n- Family room: length $5\\text{ cm}$, width $3.5\\text{ cm}$\n- Kitchen: length $3.5\\text{ cm}$, width $3\\text{ cm}$\n- Hall: length $1.5\\text{ cm}$, width $3.5\\text{ cm}$\n- Lounge: width $5\\text{ cm}$ at its widest point\n- Patio: length $5\\text{ cm}$, width $3.5\\text{ cm}$\n\nAnswer the questions below using the scale.",
    "a": "See sub-questions for individual answers.",
    "solution": "a) Length = $10 \\times 3 = 30\\text{ m}$.\nb) Width = $7 \\times 3 = 21\\text{ m}$.\nc) Family room = $15\\text{ m}$ by $10.5\\text{ m}$.\nd) Kitchen area = $(3.5 \\times 3) \\times (3 \\times 3) = 10.5 \\times 9 = 94.5\\text{ m}^2$.\ne) Lounge width = $5 \\times 3 = 15\\text{ m}$.\nf) Patio area = $(5 \\times 3) \\times (3.5 \\times 3) = 15 \\times 10.5 = 157.5\\text{ m}^2$.",
    "t": "Review of area and length",
    "hint": "For each dimension in cm, multiply by 3 to get the actual dimension in metres. Then calculate areas.",
    "solutionSteps": [
      {
        "explanation": "Apply the scale \\(1\\text{ cm} = 3\\text{ m}\\) to total dimensions.",
        "workingOut": "\\text{Length} = 10 \\times 3 = 30\\text{ m}, \\quad \\text{Width} = 7 \\times 3 = 21\\text{ m}"
      },
      {
        "explanation": "Calculate the kitchen area using actual dimensions.",
        "workingOut": "\\text{Kitchen Area} = (3.5 \\times 3) \\times (3 \\times 3) = 10.5 \\times 9 = 94.5\\text{ m}^2"
      },
      {
        "explanation": "Calculate the patio area using actual dimensions.",
        "workingOut": "\\text{Patio Area} = (5 \\times 3) \\times (3.5 \\times 3) = 15 \\times 10.5 = 157.5\\text{ m}^2"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
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
            7
          ],
          "D": [
            0,
            7
          ],
          "P1": [
            5.5,
            0
          ],
          "P2": [
            5.5,
            3.5
          ],
          "P3": [
            5.5,
            7
          ],
          "K1": [
            7.5,
            0
          ],
          "K2": [
            7.5,
            3.5
          ],
          "K3": [
            7.5,
            7
          ],
          "W_div": [
            0,
            3.5
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
          },
          {
            "from": "P1",
            "to": "P3"
          },
          {
            "from": "K1",
            "to": "K2"
          },
          {
            "from": "W_div",
            "to": "P2"
          },
          {
            "from": "P2",
            "to": "K2"
          },
          {
            "from": "K2",
            "to": "K3"
          }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          {
            "point": [
              2.7,
              5.2
            ],
            "text": "family room"
          },
          {
            "point": [
              2.7,
              1.7
            ],
            "text": "patio"
          },
          {
            "point": [
              6.5,
              5.2
            ],
            "text": "kitchen"
          },
          {
            "point": [
              6.5,
              1.7
            ],
            "text": "hall"
          },
          {
            "point": [
              8.7,
              3.5
            ],
            "text": "lounge"
          }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y8-15a-q10a",
        "type": "short_answer",
        "question": "a) What is the length of the house (in metres)?",
        "a": "30"
      },
      {
        "id": "y8-15a-q10b",
        "type": "short_answer",
        "question": "b) What is the width of the house (in metres)?",
        "a": "21"
      },
      {
        "id": "y8-15a-q10c",
        "type": "short_answer",
        "question": "c) Find the length and width of the family room in the form 'L by W' (e.g. '15 by 10.5').",
        "a": "15 by 10.5"
      },
      {
        "id": "y8-15a-q10d",
        "type": "short_answer",
        "question": "d) What is the area of the kitchen (in square metres)?",
        "a": "94.5"
      },
      {
        "id": "y8-15a-q10e",
        "type": "short_answer",
        "question": "e) What is the width of the lounge at its widest point (in metres)?",
        "a": "15"
      },
      {
        "id": "y8-15a-q10f",
        "type": "short_answer",
        "question": "f) What is the area of the patio (in square metres)?",
        "a": "157.5"
      }
    ]
  }
];
