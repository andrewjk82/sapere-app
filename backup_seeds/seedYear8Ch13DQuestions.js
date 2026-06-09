export const Y8_CH13D_QUESTIONS = [
  // --- Question 1a (Split, Easy) ---
  {
    "id": "y8-13d-q1a-y",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Using the properties of the parallelogram cross diagram, find the value of $y$.",
    "a": "12",
    "solution": "Opposite sides of a parallelogram are equal in length. The top vertical side is 12, and since the four parallelograms are congruent, the bottom vertical side $y$ must also be 12.",
    "t": "Review",
    "hint": "Opposite sides of a parallelogram are equal in length.",
    "solutionSteps": [
      {
        "explanation": "Identify the side length corresponding to $y$ in the congruent top parallelogram.",
        "workingOut": "y = 12"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "O": [5, 5],
          "A": [5, 13], "B": [8.1, 13.8], "C": [8.1, 5.8],
          "Ab": [5, -3], "Bb": [1.9, -3.8], "Cb": [1.9, 4.2],
          "Al": [-3, 5], "Bl": [-3.8, 1.9], "Cl": [4.2, 1.9],
          "Ar": [13, 5], "Br": [13.8, 8.1], "Cr": [5.8, 8.1]
        },
        "segments": [
          { "from": "O", "to": "A", "arrow": true }, { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "O" },
          { "from": "O", "to": "Ab", "arrow": true }, { "from": "Ab", "to": "Bb" }, { "from": "Bb", "to": "Cb" }, { "from": "Cb", "to": "O" },
          { "from": "O", "to": "Al", "arrow": true }, { "from": "Al", "to": "Bl" }, { "from": "Bl", "to": "Cl" }, { "from": "Cl", "to": "O" },
          { "from": "O", "to": "Ar", "arrow": true }, { "from": "Ar", "to": "Br" }, { "from": "Br", "to": "Cr" }, { "from": "Cr", "to": "O" }
        ],
        "angles": [
          { "at": "O", "right": true }
        ],
        "sideLabels": [
          { "between": ["O", "A"], "text": "12" },
          { "between": ["O", "Ab"], "text": "y" }
        ],
        "freeLabels": [
          { "point": [5.4, 6.2], "text": "75°", "italic": false },
          { "point": [6.2, 5.4], "text": "75°", "italic": false },
          { "point": [4.6, 3.8], "text": "α" },
          { "point": [3.8, 4.6], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q1a-alpha",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Using the properties of the parallelogram cross diagram, find the value of $\\alpha$ in degrees.",
    "a": "75",
    "solution": "By rotational symmetry and congruence of the four parallelograms, the acute angle $\\alpha$ is equal to the given acute angle of $75^\\circ$.",
    "t": "Review",
    "hint": "Check the matching acute angles of the congruent parallelograms.",
    "solutionSteps": [
      {
        "explanation": "Compare $\\alpha$ with the corresponding acute angle in the other parallelograms.",
        "workingOut": "\\alpha = 75^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "O": [5, 5],
          "A": [5, 13], "B": [8.1, 13.8], "C": [8.1, 5.8],
          "Ab": [5, -3], "Bb": [1.9, -3.8], "Cb": [1.9, 4.2],
          "Al": [-3, 5], "Bl": [-3.8, 1.9], "Cl": [4.2, 1.9],
          "Ar": [13, 5], "Br": [13.8, 8.1], "Cr": [5.8, 8.1]
        },
        "segments": [
          { "from": "O", "to": "A", "arrow": true }, { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "O" },
          { "from": "O", "to": "Ab", "arrow": true }, { "from": "Ab", "to": "Bb" }, { "from": "Bb", "to": "Cb" }, { "from": "Cb", "to": "O" },
          { "from": "O", "to": "Al", "arrow": true }, { "from": "Al", "to": "Bl" }, { "from": "Bl", "to": "Cl" }, { "from": "Cl", "to": "O" },
          { "from": "O", "to": "Ar", "arrow": true }, { "from": "Ar", "to": "Br" }, { "from": "Br", "to": "Cr" }, { "from": "Cr", "to": "O" }
        ],
        "angles": [
          { "at": "O", "right": true }
        ],
        "sideLabels": [
          { "between": ["O", "A"], "text": "12" },
          { "between": ["O", "Ab"], "text": "y" }
        ],
        "freeLabels": [
          { "point": [5.4, 6.2], "text": "75°", "italic": false },
          { "point": [6.2, 5.4], "text": "75°", "italic": false },
          { "point": [4.6, 3.8], "text": "α" },
          { "point": [3.8, 4.6], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q1a-beta",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Using the properties of the parallelogram cross diagram, find the value of $\\beta$ in degrees.",
    "a": "15",
    "solution": "The vertical axis and horizontal axis meet at $90^\\circ$. The angle between the slanted side of the bottom-right parallelogram and the vertical axis is $75^\\circ$. Therefore, the adjacent angle $\\beta = 90^\\circ - 75^\\circ = 15^\\circ$.",
    "t": "Review",
    "hint": "The axes meet at a right angle ($90^\\circ$). Subtract the interior angle of the parallelogram ($75^\\circ$).",
    "solutionSteps": [
      {
        "explanation": "Subtract the interior angle of $75^\\circ$ from the right angle of $90^\\circ$.",
        "workingOut": "\\beta = 90^\\circ - 75^\\circ = 15^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "O": [5, 5],
          "A": [5, 13], "B": [8.1, 13.8], "C": [8.1, 5.8],
          "Ab": [5, -3], "Bb": [1.9, -3.8], "Cb": [1.9, 4.2],
          "Al": [-3, 5], "Bl": [-3.8, 1.9], "Cl": [4.2, 1.9],
          "Ar": [13, 5], "Br": [13.8, 8.1], "Cr": [5.8, 8.1]
        },
        "segments": [
          { "from": "O", "to": "A", "arrow": true }, { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "O" },
          { "from": "O", "to": "Ab", "arrow": true }, { "from": "Ab", "to": "Bb" }, { "from": "Bb", "to": "Cb" }, { "from": "Cb", "to": "O" },
          { "from": "O", "to": "Al", "arrow": true }, { "from": "Al", "to": "Bl" }, { "from": "Bl", "to": "Cl" }, { "from": "Cl", "to": "O" },
          { "from": "O", "to": "Ar", "arrow": true }, { "from": "Ar", "to": "Br" }, { "from": "Br", "to": "Cr" }, { "from": "Cr", "to": "O" }
        ],
        "angles": [
          { "at": "O", "right": true }
        ],
        "sideLabels": [
          { "between": ["O", "A"], "text": "12" },
          { "between": ["O", "Ab"], "text": "y" }
        ],
        "freeLabels": [
          { "point": [5.4, 6.2], "text": "75°", "italic": false },
          { "point": [6.2, 5.4], "text": "75°", "italic": false },
          { "point": [4.6, 3.8], "text": "α" },
          { "point": [3.8, 4.6], "text": "β" }
        ]
      }
    }
  },

  // --- Question 1b (Split, Easy) ---
  {
    "id": "y8-13d-q1b-x",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "In the given diagram, find the value of $x$.",
    "a": "6",
    "solution": "Opposite sides of a parallelogram are equal in length. The left side has a length of 6, so the opposite right side $x = 6$.",
    "t": "Review",
    "hint": "Opposite sides of a parallelogram are equal.",
    "solutionSteps": [
      {
        "explanation": "Equate the right side $x$ to the opposite left side length.",
        "workingOut": "x = 6"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [4, 0], "C": [12, 0],
          "D": [3, 6], "E": [7, 6], "F": [15, 6]
        },
        "segments": [
          { "from": "A", "to": "D", "arrow": true }, { "from": "D", "to": "E" }, { "from": "E", "to": "B", "arrow": true }, { "from": "B", "to": "A" },
          { "from": "E", "to": "F" }, { "from": "F", "to": "C", "arrow": true }, { "from": "C", "to": "B" }
        ],
        "angles": [
          { "at": "D", "label": "120°" },
          { "at": "E", "label": "β" },
          { "at": "B", "label": "α" },
          { "at": "F", "label": "60°" }
        ],
        "sideLabels": [
          { "between": ["A", "D"], "text": "6" },
          { "between": ["F", "C"], "text": "x" },
          { "between": ["A", "B"], "text": "4" },
          { "between": ["E", "F"], "text": "8" },
          { "between": ["B", "C"], "text": "z" },
          { "between": ["A", "C"], "text": "y", "side": "out" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q1b-y",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "In the given diagram, find the value of $y$.",
    "a": "12",
    "solution": "The middle vertical-ish line is parallel to the right side, so the right shape is a parallelogram. Thus, the bottom segment $z$ is equal to the top segment 8. The total bottom length is $y = 4 + 8 = 12$.",
    "t": "Review",
    "hint": "Find the length $z$ first, then sum the two bottom segments.",
    "solutionSteps": [
      {
        "explanation": "Find $z$ from the opposite top side of the right parallelogram.",
        "workingOut": "z = 8"
      },
      {
        "explanation": "Calculate the total bottom side length $y$.",
        "workingOut": "y = 4 + 8 = 12"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [4, 0], "C": [12, 0],
          "D": [3, 6], "E": [7, 6], "F": [15, 6]
        },
        "segments": [
          { "from": "A", "to": "D", "arrow": true }, { "from": "D", "to": "E" }, { "from": "E", "to": "B", "arrow": true }, { "from": "B", "to": "A" },
          { "from": "E", "to": "F" }, { "from": "F", "to": "C", "arrow": true }, { "from": "C", "to": "B" }
        ],
        "angles": [
          { "at": "D", "label": "120°" },
          { "at": "E", "label": "β" },
          { "at": "B", "label": "α" },
          { "at": "F", "label": "60°" }
        ],
        "sideLabels": [
          { "between": ["A", "D"], "text": "6" },
          { "between": ["F", "C"], "text": "x" },
          { "between": ["A", "B"], "text": "4" },
          { "between": ["E", "F"], "text": "8" },
          { "between": ["B", "C"], "text": "z" },
          { "between": ["A", "C"], "text": "y", "side": "out" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q1b-z",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "In the given diagram, find the value of $z$.",
    "a": "8",
    "solution": "The middle vertical-ish line is parallel to the right side, so the right shape is a parallelogram. Thus, the bottom segment $z$ is equal to the top segment 8.",
    "t": "Review",
    "hint": "Identify the opposite side in the right parallelogram.",
    "solutionSteps": [
      {
        "explanation": "Equate $z$ to the opposite side of length 8.",
        "workingOut": "z = 8"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [4, 0], "C": [12, 0],
          "D": [3, 6], "E": [7, 6], "F": [15, 6]
        },
        "segments": [
          { "from": "A", "to": "D", "arrow": true }, { "from": "D", "to": "E" }, { "from": "E", "to": "B", "arrow": true }, { "from": "B", "to": "A" },
          { "from": "E", "to": "F" }, { "from": "F", "to": "C", "arrow": true }, { "from": "C", "to": "B" }
        ],
        "angles": [
          { "at": "D", "label": "120°" },
          { "at": "E", "label": "β" },
          { "at": "B", "label": "α" },
          { "at": "F", "label": "60°" }
        ],
        "sideLabels": [
          { "between": ["A", "D"], "text": "6" },
          { "between": ["F", "C"], "text": "x" },
          { "between": ["A", "B"], "text": "4" },
          { "between": ["E", "F"], "text": "8" },
          { "between": ["B", "C"], "text": "z" },
          { "between": ["A", "C"], "text": "y", "side": "out" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q1b-alpha",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "In the given diagram, find the value of $\\alpha$ in degrees.",
    "a": "60",
    "solution": "Consecutive interior angles in a parallelogram sum to $180^\\circ$. For the left parallelogram, the top-left angle is $120^\\circ$, so the bottom-left angle is $180^\\circ - 120^\\circ = 60^\\circ$. By corresponding angles (since the middle line is parallel to the left side), $\\alpha = 60^\\circ$.",
    "t": "Review",
    "hint": "Consecutive interior angles of a parallelogram sum to $180^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "Calculate the consecutive angle of $120^\\circ$.",
        "workingOut": "\\alpha = 180^\\circ - 120^\\circ = 60^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [4, 0], "C": [12, 0],
          "D": [3, 6], "E": [7, 6], "F": [15, 6]
        },
        "segments": [
          { "from": "A", "to": "D", "arrow": true }, { "from": "D", "to": "E" }, { "from": "E", "to": "B", "arrow": true }, { "from": "B", "to": "A" },
          { "from": "E", "to": "F" }, { "from": "F", "to": "C", "arrow": true }, { "from": "C", "to": "B" }
        ],
        "angles": [
          { "at": "D", "label": "120°" },
          { "at": "E", "label": "β" },
          { "at": "B", "label": "α" },
          { "at": "F", "label": "60°" }
        ],
        "sideLabels": [
          { "between": ["A", "D"], "text": "6" },
          { "between": ["F", "C"], "text": "x" },
          { "between": ["A", "B"], "text": "4" },
          { "between": ["E", "F"], "text": "8" },
          { "between": ["B", "C"], "text": "z" },
          { "between": ["A", "C"], "text": "y", "side": "out" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q1b-beta",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "In the given diagram, find the value of $\\beta$ in degrees.",
    "a": "120",
    "solution": "By corresponding angles between parallel vertical-ish lines, the angle $\\beta$ is equal to the top-left angle of $120^\\circ$.",
    "t": "Review",
    "hint": "Corresponding angles of parallel lines are equal.",
    "solutionSteps": [
      {
        "explanation": "Match $\\beta$ with its corresponding angle of $120^\\circ$.",
        "workingOut": "\\beta = 120^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [4, 0], "C": [12, 0],
          "D": [3, 6], "E": [7, 6], "F": [15, 6]
        },
        "segments": [
          { "from": "A", "to": "D", "arrow": true }, { "from": "D", "to": "E" }, { "from": "E", "to": "B", "arrow": true }, { "from": "B", "to": "A" },
          { "from": "E", "to": "F" }, { "from": "F", "to": "C", "arrow": true }, { "from": "C", "to": "B" }
        ],
        "angles": [
          { "at": "D", "label": "120°" },
          { "at": "E", "label": "β" },
          { "at": "B", "label": "α" },
          { "at": "F", "label": "60°" }
        ],
        "sideLabels": [
          { "between": ["A", "D"], "text": "6" },
          { "between": ["F", "C"], "text": "x" },
          { "between": ["A", "B"], "text": "4" },
          { "between": ["E", "F"], "text": "8" },
          { "between": ["B", "C"], "text": "z" },
          { "between": ["A", "C"], "text": "y", "side": "out" }
        ]
      }
    }
  },

  // --- Question 1c (Split, Easy) ---
  {
    "id": "y8-13d-q1c-x",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "In the given parallelogram, find the value of $x$.",
    "a": "4",
    "solution": "The diagonals of a parallelogram bisect each other. Thus, the two half-segments of the diagonal are equal, which gives $x = 4$.",
    "t": "Review",
    "hint": "Diagonals of a parallelogram bisect each other.",
    "solutionSteps": [
      {
        "explanation": "Equate the two segments of the diagonal.",
        "workingOut": "x = 4"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [10, 0], "C": [14, 5], "D": [4, 5],
          "O": [7, 2.5]
        },
        "segments": [
          { "from": "A", "to": "B", "arrow": true }, { "from": "B", "to": "C" }, { "from": "C", "to": "D", "arrow": true }, { "from": "D", "to": "A" },
          { "from": "A", "to": "C", "dashed": true }, { "from": "B", "to": "D", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["D", "O"], "text": "x" },
          { "between": ["O", "B"], "text": "4" }
        ],
        "freeLabels": [
          { "point": [1.3, 0.3], "text": "40°", "italic": false },
          { "point": [12.7, 4.7], "text": "α" },
          { "point": [7.0, 2.9], "text": "120°", "italic": false },
          { "point": [8.7, 0.4], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q1c-alpha",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "In the given parallelogram, find the value of $\\alpha$ in degrees.",
    "a": "40",
    "solution": "By alternate interior angles between the parallel horizontal sides $AB$ and $CD$, the angle $\\alpha$ is equal to the alternate angle at the bottom-left vertex, which is $40^\\circ$.",
    "t": "Review",
    "hint": "Look for alternate interior angles between parallel top and bottom sides.",
    "solutionSteps": [
      {
        "explanation": "Use alternate interior angles property.",
        "workingOut": "\\alpha = 40^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [10, 0], "C": [14, 5], "D": [4, 5],
          "O": [7, 2.5]
        },
        "segments": [
          { "from": "A", "to": "B", "arrow": true }, { "from": "B", "to": "C" }, { "from": "C", "to": "D", "arrow": true }, { "from": "D", "to": "A" },
          { "from": "A", "to": "C", "dashed": true }, { "from": "B", "to": "D", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["D", "O"], "text": "x" },
          { "between": ["O", "B"], "text": "4" }
        ],
        "freeLabels": [
          { "point": [1.3, 0.3], "text": "40°", "italic": false },
          { "point": [12.7, 4.7], "text": "α" },
          { "point": [7.0, 2.9], "text": "120°", "italic": false },
          { "point": [8.7, 0.4], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q1c-beta",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "In the given parallelogram, find the value of $\\beta$ in degrees.",
    "a": "20",
    "solution": "Consider the bottom triangle $\\triangle AOB$. The angles inside a triangle sum to $180^\\circ$. The given angles are $\\angle OAB = 40^\\circ$ and the central angle $\\angle AOB = 120^\\circ$. Therefore, the third angle is $\\beta = 180^\\circ - (120^\\circ + 40^\\circ) = 20^\\circ$.",
    "t": "Review",
    "hint": "Use the angle sum of a triangle ($180^\\circ$) in the bottom triangle.",
    "solutionSteps": [
      {
        "explanation": "Add the two known angles inside $\\triangle AOB$.",
        "workingOut": "120^\\circ + 40^\\circ = 160^\\circ"
      },
      {
        "explanation": "Subtract the sum from $180^\\circ$ to find $\\beta$.",
        "workingOut": "\\beta = 180^\\circ - 160^\\circ = 20^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [10, 0], "C": [14, 5], "D": [4, 5],
          "O": [7, 2.5]
        },
        "segments": [
          { "from": "A", "to": "B", "arrow": true }, { "from": "B", "to": "C" }, { "from": "C", "to": "D", "arrow": true }, { "from": "D", "to": "A" },
          { "from": "A", "to": "C", "dashed": true }, { "from": "B", "to": "D", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["D", "O"], "text": "x" },
          { "between": ["O", "B"], "text": "4" }
        ],
        "freeLabels": [
          { "point": [1.3, 0.3], "text": "40°", "italic": false },
          { "point": [12.7, 4.7], "text": "α" },
          { "point": [7.0, 2.9], "text": "120°", "italic": false },
          { "point": [8.7, 0.4], "text": "β" }
        ]
      }
    }
  },

  // --- Question 2a (Split, Easy) ---
  {
    "id": "y8-13d-q2a-x",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Use the properties of a rhombus and the given equilateral triangle to find the value of $x$.",
    "a": "5",
    "solution": "The triangle on the right has all three sides equal (indicated by ticks and a side of 5 cm), so it is equilateral. Its left side (which is the middle vertical line) is 5. Since the left quadrilateral is a rhombus, all of its sides are equal to this middle line, so $x = 5$.",
    "t": "Review",
    "hint": "Rhombuses have four equal sides, and equilateral triangles have three equal sides.",
    "solutionSteps": [
      {
        "explanation": "Determine the length of the middle line from the equilateral triangle.",
        "workingOut": "\\text{Middle line} = 5"
      },
      {
        "explanation": "Equate the side length $x$ to the middle line length.",
        "workingOut": "x = 5"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [5, 0], "C": [10, 0],
          "D": [7.5, 4.33], "E": [2.5, 4.33]
        },
        "segments": [
          { "from": "A", "to": "B", "ticks": 1 }, { "from": "B", "to": "D", "ticks": 1 }, { "from": "D", "to": "E", "ticks": 1 }, { "from": "E", "to": "A" },
          { "from": "B", "to": "C", "ticks": 1 }, { "from": "C", "to": "D" }
        ],
        "angles": [
          { "at": "B", "label": "α" },
          { "at": "D", "label": "β" }
        ],
        "sideLabels": [
          { "between": ["A", "E"], "text": "x" },
          { "between": ["C", "D"], "text": "5 cm" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q2a-alpha",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Use the properties of a rhombus and the given equilateral triangle to find the value of $\\alpha$ in degrees.",
    "a": "120",
    "solution": "Angles on a straight line sum to $180^\\circ$. The angle of the equilateral triangle at the bottom-middle vertex is $60^\\circ$. Therefore, the adjacent angle of the rhombus is $\\alpha = 180^\\circ - 60^\\circ = 120^\\circ$.",
    "t": "Review",
    "hint": "Subtract the interior angle of the equilateral triangle ($60^\\circ$) from $180^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "Subtract $60^\\circ$ from $180^\\circ$ on the straight line.",
        "workingOut": "\\alpha = 180^\\circ - 60^\\circ = 120^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [5, 0], "C": [10, 0],
          "D": [7.5, 4.33], "E": [2.5, 4.33]
        },
        "segments": [
          { "from": "A", "to": "B", "ticks": 1 }, { "from": "B", "to": "D", "ticks": 1 }, { "from": "D", "to": "E", "ticks": 1 }, { "from": "E", "to": "A" },
          { "from": "B", "to": "C", "ticks": 1 }, { "from": "C", "to": "D" }
        ],
        "angles": [
          { "at": "B", "label": "α" },
          { "at": "D", "label": "β" }
        ],
        "sideLabels": [
          { "between": ["A", "E"], "text": "x" },
          { "between": ["C", "D"], "text": "5 cm" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q2a-beta",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Use the properties of a rhombus and the given equilateral triangle to find the value of $\\beta$ in degrees.",
    "a": "120",
    "solution": "Opposite angles of a rhombus are equal. The bottom-right interior angle of the rhombus is $\\alpha = 120^\\circ$, so the opposite top-left interior angle $\\beta$ is also $120^\\circ$.",
    "t": "Review",
    "hint": "Opposite angles of a rhombus are equal.",
    "solutionSteps": [
      {
        "explanation": "Match $\\beta$ to the opposite angle $\\alpha$.",
        "workingOut": "\\beta = \\alpha = 120^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [5, 0], "C": [10, 0],
          "D": [7.5, 4.33], "E": [2.5, 4.33]
        },
        "segments": [
          { "from": "A", "to": "B", "ticks": 1 }, { "from": "B", "to": "D", "ticks": 1 }, { "from": "D", "to": "E", "ticks": 1 }, { "from": "E", "to": "A" },
          { "from": "B", "to": "C", "ticks": 1 }, { "from": "C", "to": "D" }
        ],
        "angles": [
          { "at": "B", "label": "α" },
          { "at": "D", "label": "β" }
        ],
        "sideLabels": [
          { "between": ["A", "E"], "text": "x" },
          { "between": ["C", "D"], "text": "5 cm" }
        ]
      }
    }
  },

  // --- Question 2b (Split, Easy) ---
  {
    "id": "y8-13d-q2b-alpha",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "In the given rhombus, find the value of $\\alpha$ in degrees.",
    "a": "90",
    "solution": "The diagonals of a rhombus always bisect each other at right angles ($90^\\circ$). Therefore, the central angle $\\alpha = 90^\\circ$.",
    "t": "Review",
    "hint": "Rhombus diagonals are perpendicular.",
    "solutionSteps": [
      {
        "explanation": "Use the perpendicular diagonals property.",
        "workingOut": "\\alpha = 90^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 3], "B": [6, -1], "C": [12, 3], "D": [6, 7],
          "O": [6, 3]
        },
        "segments": [
          { "from": "A", "to": "B", "ticks": 1 }, { "from": "B", "to": "C", "ticks": 1 }, { "from": "C", "to": "D", "ticks": 1 }, { "from": "D", "to": "A", "ticks": 1 },
          { "from": "A", "to": "C", "dashed": true }, { "from": "B", "to": "D", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [1.8, 2.6], "text": "35°", "italic": false },
          { "point": [10.2, 2.6], "text": "β" },
          { "point": [6.5, 3.5], "text": "α" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q2b-beta",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "In the given rhombus, find the value of $\\beta$ in degrees.",
    "a": "55",
    "solution": "In the right-angled triangle formed by the half-diagonals, the angles sum to $180^\\circ$. The center angle is $90^\\circ$ and the bottom-left angle is $35^\\circ$. Thus, the remaining angle is $\\beta = 90^\\circ - 35^\\circ = 55^\\circ$.",
    "t": "Review",
    "hint": "Use the acute angles sum ($90^\\circ$) in the right-angled triangle.",
    "solutionSteps": [
      {
        "explanation": "Subtract the given angle from $90^\\circ$.",
        "workingOut": "\\beta = 90^\\circ - 35^\\circ = 55^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 3], "B": [6, -1], "C": [12, 3], "D": [6, 7],
          "O": [6, 3]
        },
        "segments": [
          { "from": "A", "to": "B", "ticks": 1 }, { "from": "B", "to": "C", "ticks": 1 }, { "from": "C", "to": "D", "ticks": 1 }, { "from": "D", "to": "A", "ticks": 1 },
          { "from": "A", "to": "C", "dashed": true }, { "from": "B", "to": "D", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [1.8, 2.6], "text": "35°", "italic": false },
          { "point": [10.2, 2.6], "text": "β" },
          { "point": [6.5, 3.5], "text": "α" }
        ]
      }
    }
  },

  // --- Question 2c (Split, Easy) ---
  {
    "id": "y8-13d-q2c-y",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the value of $y$ using the properties of the two rhombuses.",
    "a": "5",
    "solution": "The left rhombus has side length 5. Since both rhombuses are congruent, the right rhombus also has side length 5, so $y = 5$.",
    "t": "Review",
    "hint": "Rhombuses have equal sides, and the two shapes are congruent.",
    "solutionSteps": [
      {
        "explanation": "Match the side length of the right rhombus to the left rhombus.",
        "workingOut": "y = 5"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [5, 0], "C": [10, 0],
          "D": [11.3, 4.8], "E": [6.3, 4.8], "F": [1.3, 4.8]
        },
        "segments": [
          { "from": "A", "to": "F" }, { "from": "F", "to": "E", "ticks": 1 }, { "from": "E", "to": "B", "ticks": 1 }, { "from": "B", "to": "A" },
          { "from": "E", "to": "D", "ticks": 1 }, { "from": "D", "to": "C", "ticks": 1 }, { "from": "C", "to": "B" }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["A", "F"], "text": "5" },
          { "between": ["B", "C"], "text": "y" },
          { "between": ["A", "C"], "text": "z", "side": "out" }
        ],
        "freeLabels": [
          { "point": [1.8, 4.4], "text": "105°", "italic": false },
          { "point": [9.5, 0.4], "text": "α" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q2c-z",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the value of $z$ using the properties of the two rhombuses.",
    "a": "10",
    "solution": "The total bottom length $z$ is the sum of the bottom side of the left rhombus (5) and the bottom side of the right rhombus (5), so $z = 5 + 5 = 10$.",
    "t": "Review",
    "hint": "The total length is the sum of both base segments.",
    "solutionSteps": [
      {
        "explanation": "Add the lengths of the two base segments.",
        "workingOut": "z = 5 + 5 = 10"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [5, 0], "C": [10, 0],
          "D": [11.3, 4.8], "E": [6.3, 4.8], "F": [1.3, 4.8]
        },
        "segments": [
          { "from": "A", "to": "F" }, { "from": "F", "to": "E", "ticks": 1 }, { "from": "E", "to": "B", "ticks": 1 }, { "from": "B", "to": "A" },
          { "from": "E", "to": "D", "ticks": 1 }, { "from": "D", "to": "C", "ticks": 1 }, { "from": "C", "to": "B" }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["A", "F"], "text": "5" },
          { "between": ["B", "C"], "text": "y" },
          { "between": ["A", "C"], "text": "z", "side": "out" }
        ],
        "freeLabels": [
          { "point": [1.8, 4.4], "text": "105°", "italic": false },
          { "point": [9.5, 0.4], "text": "α" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q2c-alpha",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the value of $\\alpha$ in degrees using the properties of the two rhombuses.",
    "a": "75",
    "solution": "Consecutive interior angles in a rhombus sum to $180^\\circ$. The obtuse angle is $105^\\circ$, so the consecutive acute angle $\\alpha = 180^\\circ - 105^\\circ = 75^\\circ$.",
    "t": "Review",
    "hint": "Rhombus adjacent angles are supplementary.",
    "solutionSteps": [
      {
        "explanation": "Subtract the obtuse angle of $105^\\circ$ from $180^\\circ$.",
        "workingOut": "\\alpha = 180^\\circ - 105^\\circ = 75^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [5, 0], "C": [10, 0],
          "D": [11.3, 4.8], "E": [6.3, 4.8], "F": [1.3, 4.8]
        },
        "segments": [
          { "from": "A", "to": "F" }, { "from": "F", "to": "E", "ticks": 1 }, { "from": "E", "to": "B", "ticks": 1 }, { "from": "B", "to": "A" },
          { "from": "E", "to": "D", "ticks": 1 }, { "from": "D", "to": "C", "ticks": 1 }, { "from": "C", "to": "B" }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["A", "F"], "text": "5" },
          { "between": ["B", "C"], "text": "y" },
          { "between": ["A", "C"], "text": "z", "side": "out" }
        ],
        "freeLabels": [
          { "point": [1.8, 4.4], "text": "105°", "italic": false },
          { "point": [9.5, 0.4], "text": "α" }
        ]
      }
    }
  },

  // --- Question 3a (Split, Medium) ---
  {
    "id": "y8-13d-q3a-x",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Find the value of $x$ in the given diagram.",
    "a": "6",
    "solution": "The upper-right triangle is a right-angled isosceles triangle because its hypotenuse is parallel to the square's diagonal ($45^\\circ$ slope). Therefore, the horizontal side $x$ is equal to the vertical side of the square, which is 6.",
    "t": "Review",
    "hint": "Identify the type of the right-hand triangle using parallel line slopes.",
    "solutionSteps": [
      {
        "explanation": "State that the upper-right triangle is right-angled isosceles.",
        "workingOut": "x = 6"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 6], "B": [6, 6], "C": [0, 0], "D": [6, 0], "E": [12, 0],
          "F": [6, -6]
        },
        "segments": [
          { "from": "A", "to": "B", "ticks": 1 }, { "from": "B", "to": "D", "ticks": 1 }, { "from": "D", "to": "C", "ticks": 1 }, { "from": "C", "to": "A", "ticks": 1 },
          { "from": "C", "to": "B", "arrow": true }, { "from": "B", "to": "E", "arrow": true },
          { "from": "C", "to": "F", "arrow": true }, { "from": "F", "to": "E" }
        ],
        "angles": [
          { "at": "A", "right": true },
          { "at": "F", "right": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "6" },
          { "between": ["D", "E"], "text": "x" }
        ],
        "freeLabels": [
          { "point": [1.0, 0.4], "text": "α" },
          { "point": [6.6, -1.0], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q3a-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Find the value of $\\alpha$ in degrees.",
    "a": "45",
    "solution": "The diagonal of the square makes an angle of $45^\\circ$ with the horizontal. The side $CF$ of the bottom triangle is parallel to this diagonal, so the alternate angle $\\alpha$ is also $45^\\circ$.",
    "t": "Review",
    "hint": "The diagonal of a square bisects the right angle ($90^\\circ$).",
    "solutionSteps": [
      {
        "explanation": "Use the alternate interior angle property parallel to the square diagonal.",
        "workingOut": "\\alpha = 45^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 6], "B": [6, 6], "C": [0, 0], "D": [6, 0], "E": [12, 0],
          "F": [6, -6]
        },
        "segments": [
          { "from": "A", "to": "B", "ticks": 1 }, { "from": "B", "to": "D", "ticks": 1 }, { "from": "D", "to": "C", "ticks": 1 }, { "from": "C", "to": "A", "ticks": 1 },
          { "from": "C", "to": "B", "arrow": true }, { "from": "B", "to": "E", "arrow": true },
          { "from": "C", "to": "F", "arrow": true }, { "from": "F", "to": "E" }
        ],
        "angles": [
          { "at": "A", "right": true },
          { "at": "F", "right": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "6" },
          { "between": ["D", "E"], "text": "x" }
        ],
        "freeLabels": [
          { "point": [1.0, 0.4], "text": "α" },
          { "point": [6.6, -1.0], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q3a-beta",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Find the value of $\\beta$ in degrees.",
    "a": "45",
    "solution": "The bottom triangle $\\triangle CFE$ is a right-angled isosceles triangle. Since $\\angle FCE = 45^\\circ$ and $\\angle CFE = 90^\\circ$, we have $\\angle FEC = 45^\\circ$. The angle $\\beta$ is between the vertical bisector and the side $FE$, which is $45^\\circ$.",
    "t": "Review",
    "hint": "Determine the angles of the right-angled isosceles triangle $\\triangle CFE$.",
    "solutionSteps": [
      {
        "explanation": "Calculate the interior angles of $\\triangle CFE$.",
        "workingOut": "\\beta = 45^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 6], "B": [6, 6], "C": [0, 0], "D": [6, 0], "E": [12, 0],
          "F": [6, -6]
        },
        "segments": [
          { "from": "A", "to": "B", "ticks": 1 }, { "from": "B", "to": "D", "ticks": 1 }, { "from": "D", "to": "C", "ticks": 1 }, { "from": "C", "to": "A", "ticks": 1 },
          { "from": "C", "to": "B", "arrow": true }, { "from": "B", "to": "E", "arrow": true },
          { "from": "C", "to": "F", "arrow": true }, { "from": "F", "to": "E" }
        ],
        "angles": [
          { "at": "A", "right": true },
          { "at": "F", "right": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "6" },
          { "between": ["D", "E"], "text": "x" }
        ],
        "freeLabels": [
          { "point": [1.0, 0.4], "text": "α" },
          { "point": [6.6, -1.0], "text": "β" }
        ]
      }
    }
  },

  // --- Question 3b (Split, Medium) ---
  {
    "id": "y8-13d-q3b-z",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Find the side length of the outer square, $z$.",
    "a": "9",
    "solution": "The concentric squares are divided along their diagonals by equal ticks. This means the ratio of side lengths of the squares is $1 : 2 : 3$. Since the inner square side length is 3, the outer square side length $z = 3 \\\\times 3 = 9$.",
    "t": "Review",
    "hint": "The ratio of the concentric square side lengths is $1 : 2 : 3$.",
    "solutionSteps": [
      {
        "explanation": "Set up the ratio of the outer side $z$ to the inner side 3.",
        "workingOut": "z = 3 \\times 3 = 9"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "O": [5, 5],
          "I1": [3.5, 6.5], "I2": [6.5, 6.5], "I3": [6.5, 3.5], "I4": [3.5, 3.5],
          "M1": [2, 8], "M2": [8, 8], "M3": [8, 2], "M4": [2, 2],
          "O1": [0.5, 9.5], "O2": [9.5, 9.5], "O3": [9.5, 0.5], "O4": [0.5, 0.5]
        },
        "segments": [
          { "from": "I1", "to": "I2" }, { "from": "I2", "to": "I3" }, { "from": "I3", "to": "I4" }, { "from": "I4", "to": "I1" },
          { "from": "M1", "to": "M2" }, { "from": "M2", "to": "M3" }, { "from": "M3", "to": "M4" }, { "from": "M4", "to": "M1" },
          { "from": "O1", "to": "O2" }, { "from": "O2", "to": "O3" }, { "from": "O3", "to": "O4" }, { "from": "O4", "to": "O1" },
          { "from": "O1", "to": "O3", "dashed": true }, { "from": "O2", "to": "O4", "dashed": true },
          { "from": "O1", "to": "M1", "ticks": 1 }, { "from": "M1", "to": "I1", "ticks": 1 }, { "from": "I1", "to": "O", "ticks": 1 }
        ],
        "angles": [
          { "at": "O", "right": true }
        ],
        "sideLabels": [
          { "between": ["I2", "I3"], "text": "3" },
          { "between": ["O1", "O4"], "text": "z" }
        ],
        "freeLabels": [
          { "point": [1.0, 9.2], "text": "α" },
          { "point": [2.5, 2.2], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q3b-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Find the value of $\\alpha$ in degrees.",
    "a": "45",
    "solution": "The diagonal of a square bisects the right-angled corner ($90^\\circ$). Therefore, the angle $\\alpha = 45^\\circ$.",
    "t": "Review",
    "hint": "The diagonal of any square bisects its $90^\\circ$ corner.",
    "solutionSteps": [
      {
        "explanation": "Divide the corner angle of the square by 2.",
        "workingOut": "\\alpha = 90^\\circ / 2 = 45^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "O": [5, 5],
          "I1": [3.5, 6.5], "I2": [6.5, 6.5], "I3": [6.5, 3.5], "I4": [3.5, 3.5],
          "M1": [2, 8], "M2": [8, 8], "M3": [8, 2], "M4": [2, 2],
          "O1": [0.5, 9.5], "O2": [9.5, 9.5], "O3": [9.5, 0.5], "O4": [0.5, 0.5]
        },
        "segments": [
          { "from": "I1", "to": "I2" }, { "from": "I2", "to": "I3" }, { "from": "I3", "to": "I4" }, { "from": "I4", "to": "I1" },
          { "from": "M1", "to": "M2" }, { "from": "M2", "to": "M3" }, { "from": "M3", "to": "M4" }, { "from": "M4", "to": "M1" },
          { "from": "O1", "to": "O2" }, { "from": "O2", "to": "O3" }, { "from": "O3", "to": "O4" }, { "from": "O4", "to": "O1" },
          { "from": "O1", "to": "O3", "dashed": true }, { "from": "O2", "to": "O4", "dashed": true },
          { "from": "O1", "to": "M1", "ticks": 1 }, { "from": "M1", "to": "I1", "ticks": 1 }, { "from": "I1", "to": "O", "ticks": 1 }
        ],
        "angles": [
          { "at": "O", "right": true }
        ],
        "sideLabels": [
          { "between": ["I2", "I3"], "text": "3" },
          { "between": ["O1", "O4"], "text": "z" }
        ],
        "freeLabels": [
          { "point": [1.0, 9.2], "text": "α" },
          { "point": [2.5, 2.2], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q3b-beta",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Find the value of $\\beta$ in degrees.",
    "a": "45",
    "solution": "The diagonal of a square bisects the right-angled corner ($90^\\circ$). Therefore, the angle $\\beta = 45^\\circ$.",
    "t": "Review",
    "hint": "The diagonal of any square bisects its $90^\\circ$ corner.",
    "solutionSteps": [
      {
        "explanation": "Divide the corner angle of the square by 2.",
        "workingOut": "\\beta = 90^\\circ / 2 = 45^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "O": [5, 5],
          "I1": [3.5, 6.5], "I2": [6.5, 6.5], "I3": [6.5, 3.5], "I4": [3.5, 3.5],
          "M1": [2, 8], "M2": [8, 8], "M3": [8, 2], "M4": [2, 2],
          "O1": [0.5, 9.5], "O2": [9.5, 9.5], "O3": [9.5, 0.5], "O4": [0.5, 0.5]
        },
        "segments": [
          { "from": "I1", "to": "I2" }, { "from": "I2", "to": "I3" }, { "from": "I3", "to": "I4" }, { "from": "I4", "to": "I1" },
          { "from": "M1", "to": "M2" }, { "from": "M2", "to": "M3" }, { "from": "M3", "to": "M4" }, { "from": "M4", "to": "M1" },
          { "from": "O1", "to": "O2" }, { "from": "O2", "to": "O3" }, { "from": "O3", "to": "O4" }, { "from": "O4", "to": "O1" },
          { "from": "O1", "to": "O3", "dashed": true }, { "from": "O2", "to": "O4", "dashed": true },
          { "from": "O1", "to": "M1", "ticks": 1 }, { "from": "M1", "to": "I1", "ticks": 1 }, { "from": "I1", "to": "O", "ticks": 1 }
        ],
        "angles": [
          { "at": "O", "right": true }
        ],
        "sideLabels": [
          { "between": ["I2", "I3"], "text": "3" },
          { "between": ["O1", "O4"], "text": "z" }
        ],
        "freeLabels": [
          { "point": [1.0, 9.2], "text": "α" },
          { "point": [2.5, 2.2], "text": "β" }
        ]
      }
    }
  },

  // --- Question 6 (Split, Easy) ---
  {
    "id": "y8-13d-q6a",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the perimeter of the parallelogram in cm.",
    "a": "20",
    "solution": "A parallelogram has opposite sides equal in length. The side lengths are 6 cm and 4 cm. The perimeter is: $P = 2 \\\\times (6 + 4) = 20\\\\text{ cm}$.",
    "t": "Review",
    "hint": "The perimeter of a parallelogram is $2(a + b)$.",
    "solutionSteps": [
      {
        "explanation": "Add the adjacent side lengths.",
        "workingOut": "6 + 4 = 10"
      },
      {
        "explanation": "Multiply the sum by 2.",
        "workingOut": "P = 2 \\times 10 = 20"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [6, 0], "C": [8, 3], "D": [2, 3]
        },
        "segments": [
          { "from": "A", "to": "B", "arrow": true }, { "from": "B", "to": "C" }, { "from": "C", "to": "D", "arrow": true }, { "from": "D", "to": "A" }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["A", "B"], "text": "6 cm" },
          { "between": ["B", "C"], "text": "4 cm" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q6b",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the perimeter of the square in km.",
    "a": "32",
    "solution": "The diagonals of this quadrilateral bisect each other at right angles and are equal in length, which makes the shape a square. Since all four sides are equal to 8 km, the perimeter is: $P = 4 \\\\times 8 = 32\\\\text{ km}$.",
    "t": "Review",
    "hint": "The perimeter of a square is $4 \\\\times \\\\text{side}$.",
    "solutionSteps": [
      {
        "explanation": "Multiply the side length of 8 km by 4.",
        "workingOut": "P = 4 \\times 8 = 32"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 4], "B": [4, 0], "C": [8, 4], "D": [4, 8],
          "O": [4, 4]
        },
        "segments": [
          { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "A" },
          { "from": "A", "to": "C", "dashed": true }, { "from": "B", "to": "D", "dashed": true }
        ],
        "angles": [
          { "at": "O", "right": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "8 km" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q6c",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the perimeter of the parallelogram in m.",
    "a": "34",
    "solution": "Opposite sides are equal in length (indicated by ticks). The side lengths are 7 m and 10 m. The perimeter is: $P = 2 \\\\times (7 + 10) = 34\\\\text{ m}$.",
    "t": "Review",
    "hint": "Sum all four sides, where opposite sides are equal.",
    "solutionSteps": [
      {
        "explanation": "Add the adjacent side lengths.",
        "workingOut": "7 + 10 = 17"
      },
      {
        "explanation": "Multiply the sum by 2.",
        "workingOut": "P = 2 \\times 17 = 34"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [7, 0], "C": [9, 4], "D": [2, 4]
        },
        "segments": [
          { "from": "A", "to": "B", "ticks": 1 }, { "from": "B", "to": "C", "ticks": 2 }, { "from": "C", "to": "D", "ticks": 1 }, { "from": "D", "to": "A", "ticks": 2 }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["A", "B"], "text": "7 m" },
          { "between": ["B", "C"], "text": "10 m" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q6d",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the perimeter of the parallelogram in m.",
    "a": "24",
    "solution": "Opposite sides of a parallelogram are equal. The side lengths are 8 m and 4 m. The perimeter is: $P = 2 \\\\times (8 + 4) = 24\\\\text{ m}$.",
    "t": "Review",
    "hint": "The perimeter of a parallelogram is $2(a + b)$.",
    "solutionSteps": [
      {
        "explanation": "Add the adjacent side lengths.",
        "workingOut": "8 + 4 = 12"
      },
      {
        "explanation": "Multiply the sum by 2.",
        "workingOut": "P = 2 \\times 12 = 24"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [8, 0], "C": [12, 1.5], "D": [4, 1.5]
        },
        "segments": [
          { "from": "A", "to": "B", "arrow": true }, { "from": "B", "to": "C" }, { "from": "C", "to": "D", "arrow": true }, { "from": "D", "to": "A" }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["A", "B"], "text": "8 m" },
          { "between": ["B", "C"], "text": "4 m" }
        ]
      }
    }
  },

  // --- Question 7 (Split, Easy/Medium) ---
  {
    "id": "y8-13d-q7a",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the area of the square in $\\text{mm}^2$.",
    "a": "100",
    "solution": "Since all sides are equal and it contains a right angle, the shape is a square of side 10 mm. The area is: $A = 10 \\\\times 10 = 100\\\\text{ mm}^2$.",
    "t": "Review",
    "hint": "The area of a square is $\\\\text{side}^2$.",
    "solutionSteps": [
      {
        "explanation": "Multiply the side length by itself.",
        "workingOut": "A = 10 \\times 10 = 100"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 5], "B": [5, 0], "C": [10, 5], "D": [5, 10]
        },
        "segments": [
          { "from": "A", "to": "B", "ticks": 1 }, { "from": "B", "to": "C", "ticks": 1 }, { "from": "C", "to": "D", "ticks": 1 }, { "from": "D", "to": "A", "ticks": 1 }
        ],
        "angles": [
          { "at": "A", "right": true }
        ],
        "sideLabels": [
          { "between": ["B", "C"], "text": "10 mm" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q7b",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the area of the rhombus in $\\text{mm}^2$.",
    "a": "120",
    "solution": "The base of the rhombus is 15 mm and its vertical height is 8 mm. The area is: $A = \\\\text{base} \\\\times \\\\text{height} = 15 \\\\times 8 = 120\\\\text{ mm}^2$.",
    "t": "Review",
    "hint": "The area of a rhombus/parallelogram is $\\\\text{base} \\\\times \\\\text{height}$.",
    "solutionSteps": [
      {
        "explanation": "Multiply the base length by the height.",
        "workingOut": "A = 15 \\times 8 = 120"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [15, 0], "C": [20, 8], "D": [5, 8],
          "H": [5, 0]
        },
        "segments": [
          { "from": "A", "to": "B" }, { "from": "B", "to": "C", "ticks": 1 }, { "from": "C", "to": "D" }, { "from": "D", "to": "A", "ticks": 1 },
          { "from": "D", "to": "H", "dashed": true }
        ],
        "angles": [
          { "at": "H", "right": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "15 mm" },
          { "between": ["D", "H"], "text": "8 mm" }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q7c",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Find the area of the parallelogram in $\\text{mm}^2$.",
    "a": "126",
    "solution": "The base (left side) is 14 mm and the height perpendicular to this base is 9 mm. The area is: $A = \\\\text{base} \\\\times \\\\text{height} = 14 \\\\times 9 = 126\\\\text{ mm}^2$.",
    "t": "Review",
    "hint": "Make sure to multiply the correct base and its perpendicular height.",
    "solutionSteps": [
      {
        "explanation": "Multiply the base length (14 mm) by its perpendicular height (9 mm).",
        "workingOut": "A = 14 \\times 9 = 126"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [12, 0], "C": [15, 9], "D": [3, 9]
        },
        "segments": [
          { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D", "ticks": 1 }, { "from": "D", "to": "A", "ticks": 2 }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["D", "A"], "text": "14 mm" }
        ],
        "freeLabels": [
          { "point": [1.5, 4.5], "text": "9 mm", "italic": false }
        ]
      }
    }
  },
  {
    "id": "y8-13d-q7d",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Find the area of the parallelogram in $\\text{mm}^2$.",
    "a": "80",
    "solution": "1. First, find the vertical height $h$ using Pythagoras on the right-angled triangle formed on the right side: \n   $$h = \\\\sqrt{10^2 - 6^2} = \\\\sqrt{64} = 8\\\\text{ mm}$$\n2. The base of the parallelogram is 10 mm. The area is: \n   $$A = \\\\text{base} \\\\times \\\\text{height} = 10 \\\\times 8 = 80\\\\text{ mm}^2$$",
    "t": "Review",
    "hint": "Use Pythagoras first to calculate the perpendicular height of the parallelogram.",
    "solutionSteps": [
      {
        "explanation": "Apply Pythagoras to find the height $h$.",
        "workingOut": "h = \\sqrt{10^2 - 6^2} = 8"
      },
      {
        "explanation": "Calculate the area by multiplying the base (10 mm) and height (8 mm).",
        "workingOut": "A = 10 \\times 8 = 80"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [10, 0], "C": [16, 8], "D": [6, 8],
          "H": [16, 0]
        },
        "segments": [
          { "from": "A", "to": "B", "arrow": true }, { "from": "B", "to": "C", "arrow": true }, { "from": "C", "to": "D", "arrow": true }, { "from": "D", "to": "A", "arrow": true },
          { "from": "B", "to": "H", "dashed": true }, { "from": "C", "to": "H", "dashed": true }
        ],
        "angles": [
          { "at": "H", "right": true }
        ],
        "sideLabels": [
          { "between": ["D", "C"], "text": "10 mm" },
          { "between": ["B", "C"], "text": "10 mm" },
          { "between": ["B", "H"], "text": "6 mm" }
        ]
      }
    }
  }
];
