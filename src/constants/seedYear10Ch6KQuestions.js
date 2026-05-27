export const Y10_CH6K_QUESTIONS = [
  {
    "id": "y10-6k-q1",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "For a rectangular prism measuring \\( 40 \\) cm \\( \\times \\) \\( 25 \\) cm \\( \\times \\) \\( 15 \\) cm, calculate:",
    "a": "",
    "solution": "",
    "solutionSteps": [],
    "hint": "",
    "t": "Revision",
    "graphData": null,
    "subQuestions": [
      {
        "id": "y10-6k-q1a",
        "type": "short_answer",
        "question": "a) the surface area",
        "a": "3950",
        "solutionSteps": [
          {
            "explanation": "SA = 2(lw + lh + wh)",
            "workingOut": "2(40\\times 25 + 40\\times 15 + 25\\times 15) = 3950"
          }
        ]
      },
      {
        "id": "y10-6k-q1b",
        "type": "short_answer",
        "question": "b) the volume",
        "a": "15000",
        "solutionSteps": [
          {
            "explanation": "V = lwh",
            "workingOut": "40 \\times 25 \\times 15 = 15000"
          }
        ]
      }
    ]
  },
  {
    "id": "y10-6k-q2",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A rectangular prism has a surface area of \\( 600 \\) cm\\(^2\\). If its length is \\( 20 \\) cm and its width is \\( 5 \\) cm, calculate the height of the rectangular prism.",
    "a": "",
    "solution": "",
    "solutionSteps": [],
    "hint": "",
    "t": "Revision",
    "graphData": null,
    "subQuestions": [
      {
        "id": "y10-6k-q2a",
        "type": "short_answer",
        "question": "Calculate the height.",
        "a": "8",
        "solutionSteps": [
          {
            "explanation": "Use SA formula",
            "workingOut": "2(20\\times 5 + 20h + 5h) = 600"
          },
          {
            "explanation": "Simplify",
            "workingOut": "100 + 25h = 300"
          },
          {
            "explanation": "Solve for h",
            "workingOut": "25h = 200 \\Rightarrow h = 8"
          }
        ]
      }
    ]
  },
  {
    "id": "y10-6k-q3",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A rectangular prism has a volume of \\( 840 \\) cm\\(^3\\). If its length is \\( 14 \\) cm and its width is \\( 10 \\) cm, calculate the height of the rectangular prism.",
    "a": "",
    "solution": "",
    "solutionSteps": [],
    "hint": "",
    "t": "Revision",
    "graphData": null,
    "subQuestions": [
      {
        "id": "y10-6k-q3a",
        "type": "short_answer",
        "question": "Calculate the height.",
        "a": "6",
        "solutionSteps": [
          {
            "explanation": "Use Volume formula",
            "workingOut": "14 \\times 10 \\times h = 840"
          },
          {
            "explanation": "Solve for h",
            "workingOut": "140h = 840 \\Rightarrow h = 6"
          }
        ]
      }
    ]
  },
  {
    "id": "y10-6k-q4",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "The cross-section \\( ABCD \\) of the prism shown is an isosceles trapezium with \\( AB = 10 \\) cm, \\( DC = 22 \\) cm, \\( AD = BC = 10 \\) cm and \\( AE = 25 \\) cm.\n\nCalculate:",
    "a": "",
    "solution": "",
    "solutionSteps": [],
    "hint": "",
    "t": "Revision",
    "graphData": {
      "geometry": {
        "width": 250,
        "points": {
          "D": [
            0,
            0
          ],
          "C": [
            22,
            0
          ],
          "A": [
            6,
            8
          ],
          "B": [
            16,
            8
          ],
          "H": [
            10,
            12
          ],
          "G": [
            32,
            12
          ],
          "E": [
            16,
            20
          ],
          "F": [
            26,
            20
          ]
        },
        "segments": [
          {
            "from": "D",
            "to": "C"
          },
          {
            "from": "C",
            "to": "B"
          },
          {
            "from": "B",
            "to": "A"
          },
          {
            "from": "A",
            "to": "D"
          },
          {
            "from": "H",
            "to": "G",
            "dashed": true
          },
          {
            "from": "G",
            "to": "F"
          },
          {
            "from": "F",
            "to": "E"
          },
          {
            "from": "E",
            "to": "H",
            "dashed": true
          },
          {
            "from": "D",
            "to": "H",
            "dashed": true
          },
          {
            "from": "C",
            "to": "G"
          },
          {
            "from": "B",
            "to": "F"
          },
          {
            "from": "A",
            "to": "E"
          }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y10-6k-q4a",
        "type": "short_answer",
        "question": "a) the area of \\( ABCD \\)",
        "a": "128",
        "solutionSteps": [
          {
            "explanation": "Find the height of the trapezium",
            "workingOut": "\\text{Height} = \\sqrt{10^2 - 6^2} = 8"
          },
          {
            "explanation": "Area formula",
            "workingOut": "\\frac{1}{2}(10 + 22) \\times 8 = 128"
          }
        ]
      },
      {
        "id": "y10-6k-q4b",
        "type": "short_answer",
        "question": "b) the surface area of the prism",
        "a": "1556",
        "solutionSteps": [
          {
            "explanation": "Perimeter of trapezium",
            "workingOut": "10 + 22 + 10 + 10 = 52"
          },
          {
            "explanation": "SA = 2(Base Area) + (Perimeter \\(\\times\\) length)",
            "workingOut": "2(128) + 52(25) = 256 + 1300 = 1556"
          }
        ]
      },
      {
        "id": "y10-6k-q4c",
        "type": "short_answer",
        "question": "c) the volume of the prism",
        "a": "3200",
        "solutionSteps": [
          {
            "explanation": "Volume = Area of cross-section \\(\\times\\) length",
            "workingOut": "128 \\times 25 = 3200"
          }
        ]
      }
    ]
  },
  {
    "id": "y10-6k-q5",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "A cylindrical water tank stands on its circular base. It has a diameter of \\( 4 \\) m and a height of \\( 2.5 \\) m.",
    "a": "",
    "solution": "",
    "solutionSteps": [],
    "hint": "",
    "t": "Revision",
    "graphData": null,
    "subQuestions": [
      {
        "id": "y10-6k-q5a",
        "type": "short_answer",
        "question": "a) Calculate the volume of the tank, to the nearest litre.",
        "a": "31416",
        "solutionSteps": [
          {
            "explanation": "Radius is half of diameter",
            "workingOut": "r = 2"
          },
          {
            "explanation": "Volume in m\\(^3\\)",
            "workingOut": "\\pi \\times 2^2 \\times 2.5 = 10\\pi \\approx 31.4159 \\text{ m}^3"
          },
          {
            "explanation": "Convert to litres",
            "workingOut": "31.4159 \\times 1000 = 31416 \\text{ L}"
          }
        ]
      },
      {
        "id": "y10-6k-q5b",
        "type": "short_answer",
        "question": "b) Calculate the depth of water in the tank, to the nearest centimetre, when it contains \\( 5000 \\) litres of water.",
        "a": "40",
        "solutionSteps": [
          {
            "explanation": "Convert 5000 L to m\\(^3\\)",
            "workingOut": "5 \\text{ m}^3"
          },
          {
            "explanation": "Use volume formula",
            "workingOut": "\\pi \\times 2^2 \\times d = 5"
          },
          {
            "explanation": "Solve for d",
            "workingOut": "d = \\frac{5}{4\\pi} \\approx 0.39789 \\text{ m} = 40 \\text{ cm}"
          }
        ]
      }
    ]
  },
  {
    "id": "y10-6k-q6",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 30,
    "question": "Find exact answers to these questions (leaving \\( \\pi \\) in your answer if necessary).",
    "a": "",
    "solution": "",
    "solutionSteps": [],
    "hint": "",
    "t": "Revision",
    "graphData": null,
    "subQuestions": [
      {
        "id": "y10-6k-q6a",
        "type": "short_answer",
        "question": "a) A square-based pyramid has base side length \\( 14 \\) cm and perpendicular height \\( 24 \\) cm.\ni) Calculate the surface area",
        "a": "896",
        "solutionSteps": [
          {
            "explanation": "Find slant height",
            "workingOut": "\\sqrt{7^2 + 24^2} = \\sqrt{625} = 25"
          },
          {
            "explanation": "Surface area",
            "workingOut": "14^2 + 4 \\times (\\frac{1}{2} \\times 14 \\times 25) = 196 + 700 = 896"
          }
        ]
      },
      {
        "id": "y10-6k-q6b",
        "type": "short_answer",
        "question": "ii) Calculate the volume",
        "a": "1568",
        "solutionSteps": [
          {
            "explanation": "Volume formula",
            "workingOut": "\\frac{1}{3} \\times 14^2 \\times 24 = 1568"
          }
        ]
      },
      {
        "id": "y10-6k-q6c",
        "type": "short_answer",
        "question": "b) A cone has a radius of \\( 5 \\) cm and a slant height of \\( 13 \\) cm.\ni) Calculate the exact surface area",
        "a": "90\\pi",
        "solutionSteps": [
          {
            "explanation": "Surface area",
            "workingOut": "\\pi r^2 + \\pi r l = 25\\pi + 5(13)\\pi = 90\\pi"
          }
        ]
      },
      {
        "id": "y10-6k-q6d",
        "type": "short_answer",
        "question": "ii) Calculate the exact volume",
        "a": "100\\pi",
        "solutionSteps": [
          {
            "explanation": "Find height",
            "workingOut": "h = \\sqrt{13^2 - 5^2} = 12"
          },
          {
            "explanation": "Volume formula",
            "workingOut": "\\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi (25)(12) = 100\\pi"
          }
        ]
      }
    ]
  },
  {
    "id": "y10-6k-q7",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In the pyramid \\( VABCD \\) shown, \\( VB \\) is perpendicular to rectangle \\( ABCD \\), \\( AB = 15 \\) m, \\( BC = 8 \\) m and \\( VB = 6 \\) m.",
    "a": "",
    "solution": "",
    "solutionSteps": [],
    "hint": "",
    "t": "Revision",
    "graphData": {
      "geometry": {
        "width": 250,
        "points": {
          "D": [
            0,
            0
          ],
          "C": [
            15,
            0
          ],
          "A": [
            6,
            5
          ],
          "B": [
            21,
            5
          ],
          "V": [
            21,
            15
          ]
        },
        "segments": [
          {
            "from": "D",
            "to": "C"
          },
          {
            "from": "C",
            "to": "B"
          },
          {
            "from": "B",
            "to": "A",
            "dashed": true
          },
          {
            "from": "A",
            "to": "D",
            "dashed": true
          },
          {
            "from": "V",
            "to": "A",
            "dashed": true
          },
          {
            "from": "V",
            "to": "B"
          },
          {
            "from": "V",
            "to": "C"
          },
          {
            "from": "V",
            "to": "D"
          }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y10-6k-q7a",
        "type": "short_answer",
        "question": "a) Calculate the surface area of the pyramid in m\\(^2\\), correct to one decimal place.",
        "a": "328.6",
        "solutionSteps": [
          {
            "explanation": "Area of base ABCD",
            "workingOut": "15 \\times 8 = 120"
          },
          {
            "explanation": "Area of VBC (right-angled at B)",
            "workingOut": "\\frac{1}{2} \\times 8 \\times 6 = 24"
          },
          {
            "explanation": "Area of VBA (right-angled at B)",
            "workingOut": "\\frac{1}{2} \\times 15 \\times 6 = 45"
          },
          {
            "explanation": "Area of VDC (VC is perpendicular to DC)",
            "workingOut": "VC = \\sqrt{6^2 + 8^2} = 10 \\Rightarrow \\text{Area} = \\frac{1}{2} \\times 15 \\times 10 = 75"
          },
          {
            "explanation": "Area of VAD (VA is perpendicular to AD)",
            "workingOut": "VA = \\sqrt{6^2 + 15^2} = \\sqrt{261} \\Rightarrow \\text{Area} = \\frac{1}{2} \\times 8 \\times \\sqrt{261} = 4\\sqrt{261} \\approx 64.6"
          },
          {
            "explanation": "Total surface area",
            "workingOut": "120 + 24 + 45 + 75 + 64.6 = 328.6"
          }
        ]
      },
      {
        "id": "y10-6k-q7b",
        "type": "short_answer",
        "question": "b) Calculate the volume of the pyramid.",
        "a": "240",
        "solutionSteps": [
          {
            "explanation": "Volume formula",
            "workingOut": "\\frac{1}{3} \\times \\text{Base Area} \\times \\text{height} = \\frac{1}{3} \\times 120 \\times 6 = 240"
          }
        ]
      }
    ]
  },
  {
    "id": "y10-6k-q8",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The curved surface area of a cone is \\( 65\\pi \\) cm\\(^2\\) and the area of the circular base is \\( 25\\pi \\) cm\\(^2\\).",
    "a": "",
    "solution": "",
    "solutionSteps": [],
    "hint": "",
    "t": "Revision",
    "graphData": null,
    "subQuestions": [
      {
        "id": "y10-6k-q8a",
        "type": "short_answer",
        "question": "a) Calculate the radius of the cone.",
        "a": "5",
        "solutionSteps": [
          {
            "explanation": "Base area",
            "workingOut": "\\pi r^2 = 25\\pi \\Rightarrow r^2 = 25 \\Rightarrow r = 5"
          }
        ]
      },
      {
        "id": "y10-6k-q8b",
        "type": "short_answer",
        "question": "b) Calculate the exact perpendicular height of the cone.",
        "a": "12",
        "solutionSteps": [
          {
            "explanation": "Curved surface area",
            "workingOut": "\\pi r l = 65\\pi \\Rightarrow 5l = 65 \\Rightarrow l = 13"
          },
          {
            "explanation": "Use Pythagoras to find height",
            "workingOut": "h = \\sqrt{13^2 - 5^2} = 12"
          }
        ]
      },
      {
        "id": "y10-6k-q8c",
        "type": "short_answer",
        "question": "c) Calculate the volume of the cone, correct to the nearest cm\\(^3\\).",
        "a": "314",
        "solutionSteps": [
          {
            "explanation": "Volume formula",
            "workingOut": "V = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi (25)(12) = 100\\pi"
          },
          {
            "explanation": "Calculate to nearest whole number",
            "workingOut": "100\\pi \\approx 314.159 \\approx 314"
          }
        ]
      }
    ]
  },
  {
    "id": "y10-6k-q9",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A storage tank is constructed as a cylinder with a hemisphere at each end of the cylinder. The radius of the cylinder is \\( 2 \\) m and the overall length of the tank is \\( 10 \\) m.\n\nCalculate (correct to 1 decimal place):",
    "a": "",
    "solution": "",
    "solutionSteps": [],
    "hint": "",
    "t": "Revision",
    "graphData": null,
    "subQuestions": [
      {
        "id": "y10-6k-q9a",
        "type": "short_answer",
        "question": "a) the surface area of the tank in m\\(^2\\)",
        "a": "125.7",
        "solutionSteps": [
          {
            "explanation": "Length of cylindrical part",
            "workingOut": "10 - 2 - 2 = 6 \\text{ m}"
          },
          {
            "explanation": "Two hemispheres make one sphere",
            "workingOut": "\\text{SA} = 4\\pi(2^2) + 2\\pi(2)(6) = 16\\pi + 24\\pi = 40\\pi"
          },
          {
            "explanation": "Calculate to 1 decimal place",
            "workingOut": "40\\pi \\approx 125.7"
          }
        ]
      },
      {
        "id": "y10-6k-q9b",
        "type": "short_answer",
        "question": "b) the volume of the tank",
        "a": "108.9",
        "solutionSteps": [
          {
            "explanation": "Volume of sphere + cylinder",
            "workingOut": "\\frac{4}{3}\\pi(2^3) + \\pi(2^2)(6) = \\frac{32\\pi}{3} + 24\\pi = \\frac{104\\pi}{3}"
          },
          {
            "explanation": "Calculate to 1 decimal place",
            "workingOut": "\\frac{104\\pi}{3} \\approx 108.9"
          }
        ]
      }
    ]
  },
  {
    "id": "y10-6k-q10",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Fill in the missing entries for the scale factors.",
    "a": "",
    "solution": "",
    "solutionSteps": [],
    "hint": "",
    "t": "Revision",
    "graphData": null,
    "subQuestions": [
      {
        "id": "y10-6k-q10a",
        "type": "short_answer",
        "question": "a) If Length scale factor is \\( 4 \\), find the Area and Volume scale factors.",
        "a": "16, 64",
        "solutionSteps": []
      },
      {
        "id": "y10-6k-q10b",
        "type": "short_answer",
        "question": "b) If Length scale factor is \\( 2.5 \\), find the Area and Volume scale factors.",
        "a": "6.25, 15.625",
        "solutionSteps": []
      },
      {
        "id": "y10-6k-q10c",
        "type": "short_answer",
        "question": "c) If Area scale factor is \\( 9 \\), find the Length and Volume scale factors.",
        "a": "3, 27",
        "solutionSteps": []
      },
      {
        "id": "y10-6k-q10d",
        "type": "short_answer",
        "question": "d) If Area scale factor is \\( 49 \\), find the Length and Volume scale factors.",
        "a": "7, 343",
        "solutionSteps": []
      },
      {
        "id": "y10-6k-q10e",
        "type": "short_answer",
        "question": "e) If Volume scale factor is \\( 216 \\), find the Length and Area scale factors.",
        "a": "6, 36",
        "solutionSteps": []
      },
      {
        "id": "y10-6k-q10f",
        "type": "short_answer",
        "question": "f) If Volume scale factor is \\( 1000 \\), find the Length and Area scale factors.",
        "a": "10, 100",
        "solutionSteps": []
      }
    ]
  }
];