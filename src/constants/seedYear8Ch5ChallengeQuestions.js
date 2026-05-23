export const Y8_CH5I_QUESTIONS = [
  {
    "id": "y8-5i-q1a_alpha",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the top and bottom horizontal lines are parallel, and the two slanted lines with double arrows are parallel. A vertical line is perpendicular to the bottom line. The transversal line $FC$ makes an angle of $130^\\circ$ with the top line ($\\angle EFC = 130^\\circ$). Find the value of $\\alpha$.",
    "a": "18",
    "solution": "1. The slanted lines with double arrows are parallel, so their corresponding angles with the bottom horizontal line are equal.\n2. The left slanted line makes an angle of $90^\\circ - 4\\alpha$ with the bottom line (since the vertical line is perpendicular to the bottom line, forming a right-angled triangle where the third angle is $90^\\circ - 4\\alpha$).\n3. The right slanted line makes an angle of $\\alpha$ with the bottom line.\n4. Since the two lines are parallel, their angles with the bottom line are equal:\n   $$90^\\circ - 4\\alpha = \\alpha$$\n   $$5\\alpha = 90^\\circ$$\n   $$\\alpha = 18^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Use the parallel lines to set up an equation: $90^\\circ - 4\\alpha = \\alpha$.",
    "solutionSteps": [
      {
        "explanation": "Form an equation using the angles of the right-angled triangle and parallel lines.",
        "workingOut": "90^\\circ - 4\\alpha = \\alpha"
      },
      {
        "explanation": "Add $4\\alpha$ to both sides.",
        "workingOut": "5\\alpha = 90^\\circ"
      },
      {
        "explanation": "Divide by 5.",
        "workingOut": "\\alpha = 18"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0],
          "B": [4, 0],
          "C": [6, 0],
          "D": [10, 0],
          "E": [1.5, 4],
          "F": [4, 4],
          "G": [10, 4]
        },
        "segments": [
          { "from": "A", "to": "D", "arrow": true },
          { "from": "E", "to": "G", "arrow": true },
          { "from": "F", "to": "B" },
          { "from": "A", "to": "F", "marks": 2 },
          { "from": "C", "to": "G", "marks": 2 },
          { "from": "C", "to": "F" }
        ],
        "angles": [
          { "at": "B", "right": true }
        ],
        "sideLabels": [],
        "freeLabels": [
          { "point": [2.8, 3.6], "text": "130°" },
          { "point": [3.6, 3.2], "text": "4α" },
          { "point": [5.2, 0.4], "text": "β" },
          { "point": [6.6, 0.3], "text": "α" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1a_beta",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the top and bottom horizontal lines are parallel, and the two slanted lines with double arrows are parallel. The transversal line $FC$ makes an angle of $130^\\circ$ with the top line ($\\angle EFC = 130^\\circ$). Find the value of $\\beta$.",
    "a": "32",
    "solution": "1. The top and bottom horizontal lines are parallel. The transversal line making an angle of $130^\\circ$ with the top line makes an interior angle of $180^\\circ - 130^\\circ = 50^\\circ$ with the bottom line (co-interior/alternate angles).\n2. The slanted parallel line makes an angle of $\\alpha = 18^\\circ$ with the bottom line.\n3. The angle $\\beta$ is the difference between the transversal angle and the slanted line angle at the bottom intersection:\n   $$\\beta = 50^\\circ - \\alpha = 50^\\circ - 18^\\circ = 32^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Find the acute angle of the transversal line first, then subtract $\\alpha$.",
    "solutionSteps": [
      {
        "explanation": "Calculate the acute angle of the transversal with the bottom line.",
        "workingOut": "180^\\circ - 130^\\circ = 50^\\circ"
      },
      {
        "explanation": "Subtract the angle $\\alpha$ (which is $18^\\circ$) from $50^\\circ$.",
        "workingOut": "\\beta = 50^\\circ - 18^\\circ = 32"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0],
          "B": [4, 0],
          "C": [6, 0],
          "D": [10, 0],
          "E": [1.5, 4],
          "F": [4, 4],
          "G": [10, 4]
        },
        "segments": [
          { "from": "A", "to": "D", "arrow": true },
          { "from": "E", "to": "G", "arrow": true },
          { "from": "F", "to": "B" },
          { "from": "A", "to": "F", "marks": 2 },
          { "from": "C", "to": "G", "marks": 2 },
          { "from": "C", "to": "F" }
        ],
        "angles": [
          { "at": "B", "right": true }
        ],
        "sideLabels": [],
        "freeLabels": [
          { "point": [2.8, 3.6], "text": "130°" },
          { "point": [3.6, 3.2], "text": "4α" },
          { "point": [5.2, 0.4], "text": "β" },
          { "point": [6.6, 0.3], "text": "α" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1b_alpha",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the top and bottom lines are parallel, and the two main transversals are parallel. The bottom-left angle is trisected into three equal angles $\\beta$. Find the value of $\\alpha$.",
    "a": "60",
    "solution": "1. The top-right angle is $76^\\circ$. By alternate angles, the interior angle $\\gamma = 76^\\circ$.\n2. The angles $\\alpha$, $\\gamma$, and the adjacent angle lie on a straight line or form co-interior relations. From the geometry of the parallel lines, we have:\n   $$\\alpha = 180^\\circ - 76^\\circ - 44^\\circ = 60^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Use angles on a straight line at the right transversal.",
    "solutionSteps": [
      {
        "explanation": "Find $\\alpha$ by subtracting $\\gamma$ ($76^\\circ$) and $44^\\circ$ from $180^\\circ$.",
        "workingOut": "\\alpha = 180^\\circ - 76^\\circ - 44^\\circ = 60"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0],
          "B": [8, 0],
          "C": [2, 4],
          "D": [10, 4],
          "E": [8.5, 4],
          "F": [5.5, 0]
        },
        "segments": [
          { "from": "A", "to": "B", "arrow": true },
          { "from": "C", "to": "D", "arrow": true },
          { "from": "A", "to": "C", "marks": 2 },
          { "from": "F", "to": "E", "marks": 2 },
          { "from": "A", "to": "E" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [8.8, 4.3], "text": "76°" },
          { "point": [8.3, 3.6], "text": "γ" },
          { "point": [8.1, 2.9], "text": "α" },
          { "point": [6.8, 1.8], "text": "108°" },
          { "point": [0.6, 0.2], "text": "β" },
          { "point": [0.8, 0.5], "text": "β" },
          { "point": [0.4, 0.9], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1b_beta",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the top and bottom lines are parallel, and the two main transversals are parallel. Find the value of $\\beta$.",
    "a": "24",
    "solution": "1. The interior angle shown is $108^\\circ$.\n2. Since the two slanted transversals are parallel, the interior angle of $108^\\circ$ and the total bottom-left angle ($3\\beta$) are co-interior angles, which sum to $180^\\circ$:\n   $$3\\beta + 108^\\circ = 180^\\circ$$\n   $$3\\beta = 72^\\circ$$\n   $$\\beta = 24^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Set up a co-interior angle equation: $3\\beta + 108^\\circ = 180^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "Use co-interior angles to find the total bottom-left angle $3\\beta$.",
        "workingOut": "3\\beta = 180^\\circ - 108^\\circ = 72^\\circ"
      },
      {
        "explanation": "Divide by 3 to find $\\beta$.",
        "workingOut": "\\beta = 24"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0],
          "B": [8, 0],
          "C": [2, 4],
          "D": [10, 4],
          "E": [8.5, 4],
          "F": [5.5, 0]
        },
        "segments": [
          { "from": "A", "to": "B", "arrow": true },
          { "from": "C", "to": "D", "arrow": true },
          { "from": "A", "to": "C", "marks": 2 },
          { "from": "F", "to": "E", "marks": 2 },
          { "from": "A", "to": "E" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [8.8, 4.3], "text": "76°" },
          { "point": [8.3, 3.6], "text": "γ" },
          { "point": [8.1, 2.9], "text": "α" },
          { "point": [6.8, 1.8], "text": "108°" },
          { "point": [0.6, 0.2], "text": "β" },
          { "point": [0.8, 0.5], "text": "β" },
          { "point": [0.4, 0.9], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1b_gamma",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the top and bottom lines are parallel. Find the value of $\\gamma$.",
    "a": "76",
    "solution": "1. The top-right angle is $76^\\circ$.\n2. The angle $\\gamma$ and the top-right angle are alternate angles between the top parallel line and the slanted transversal:\n   $$\\gamma = 76^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Identify the alternate angle relationship.",
    "solutionSteps": [
      {
        "explanation": "Use alternate angles to find $\\gamma$.",
        "workingOut": "\\gamma = 76"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0],
          "B": [8, 0],
          "C": [2, 4],
          "D": [10, 4],
          "E": [8.5, 4],
          "F": [5.5, 0]
        },
        "segments": [
          { "from": "A", "to": "B", "arrow": true },
          { "from": "C", "to": "D", "arrow": true },
          { "from": "A", "to": "C", "marks": 2 },
          { "from": "F", "to": "E", "marks": 2 },
          { "from": "A", "to": "E" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [8.8, 4.3], "text": "76°" },
          { "point": [8.3, 3.6], "text": "γ" },
          { "point": [8.1, 2.9], "text": "α" },
          { "point": [6.8, 1.8], "text": "108°" },
          { "point": [0.6, 0.2], "text": "β" },
          { "point": [0.8, 0.5], "text": "β" },
          { "point": [0.4, 0.9], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1c_alpha",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the top and bottom lines are parallel. The reflex angle at the top-left is $290^\\circ$, and the interior angle at the middle is $110^\\circ$. Find the value of $\\alpha$.",
    "a": "110",
    "solution": "1. The reflex angle is $290^\\circ$. The interior angle of this vertex is $360^\\circ - 290^\\circ = 70^\\circ$.\n2. Draw a helper line parallel to the top and bottom lines through the middle vertex.\n3. The interior angle of $110^\\circ$ is split into two parts: the top part (which is $70^\\circ$ by alternate angles with the top $70^\\circ$ angle) and the bottom part.\n4. The bottom part of the angle is $110^\\circ - 70^\\circ = 40^\\circ$.\n5. By co-interior angles, the angle $\\alpha$ and this bottom part of $40^\\circ$ sum to $180^\\circ$:\n   $$\\alpha = 180^\\circ - 40^\\circ = 110^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Draw a helper parallel line through the middle vertex to split the $110^\\circ$ angle.",
    "solutionSteps": [
      {
        "explanation": "Calculate the interior angle of the reflex vertex.",
        "workingOut": "360^\\circ - 290^\\circ = 70^\\circ"
      },
      {
        "explanation": "Split the $110^\\circ$ angle and find the lower part.",
        "workingOut": "110^\\circ - 70^\\circ = 40^\\circ"
      },
      {
        "explanation": "Find $\\alpha$ using co-interior angles with the lower part.",
        "workingOut": "\\alpha = 180^\\circ - 40^\\circ = 110"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 4],
          "B": [8, 4],
          "C": [0, 0],
          "D": [8, 0],
          "E": [2, 3],
          "F": [5, 1.5]
        },
        "segments": [
          { "from": "A", "to": "B", "marks": 2, "arrow": true },
          { "from": "C", "to": "D", "marks": 2, "arrow": true },
          { "from": "A", "to": "E" },
          { "from": "E", "to": "F" },
          { "from": "F", "to": "C" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [1.4, 3.2], "text": "290°" },
          { "point": [4.3, 1.5], "text": "110°" },
          { "point": [1.0, 0.4], "text": "α" },
          { "point": [5.2, 2.3], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1c_beta",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the top and bottom lines are parallel. The reflex angle at the top-left is $290^\\circ$, and the interior angle at the middle is $110^\\circ$. Find the value of $\\beta$.",
    "a": "140",
    "solution": "1. The reflex angle is $290^\\circ$, meaning the interior angle is $360^\\circ - 290^\\circ = 70^\\circ$.\n2. The angle $\\beta$ and this interior angle of $70^\\circ$ are co-interior angles between the parallel lines:\n   $$\\beta = 180^\\circ - 70^\\circ = 140^\\circ$$",
    "t": "Geometry challenge",
    "hint": "The interior angle at the top-left is $360^\\circ - 290^\\circ = 70^\\circ$. $\\beta$ is co-interior to this angle.",
    "solutionSteps": [
      {
        "explanation": "Calculate the interior angle at the top-left.",
        "workingOut": "360^\\circ - 290^\\circ = 70^\\circ"
      },
      {
        "explanation": "Find $\\beta$ using co-interior angles.",
        "workingOut": "\\beta = 180^\\circ - 70^\\circ = 140"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 4],
          "B": [8, 4],
          "C": [0, 0],
          "D": [8, 0],
          "E": [2, 3],
          "F": [5, 1.5]
        },
        "segments": [
          { "from": "A", "to": "B", "marks": 2, "arrow": true },
          { "from": "C", "to": "D", "marks": 2, "arrow": true },
          { "from": "A", "to": "E" },
          { "from": "E", "to": "F" },
          { "from": "F", "to": "C" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [1.4, 3.2], "text": "290°" },
          { "point": [4.3, 1.5], "text": "110°" },
          { "point": [1.0, 0.4], "text": "α" },
          { "point": [5.2, 2.3], "text": "β" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1d_alpha",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the two slanted lines with double arrows are parallel. Find the value of $\\alpha$.",
    "a": "75",
    "solution": "1. The two slanted lines with double arrows are parallel.\n2. The angle at the bottom-left is $75^\\circ$.\n3. The angle $\\alpha$ at the top-right and the bottom-left angle of $75^\\circ$ are alternate angles between the parallel lines:\n   $$\\alpha = 75^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Identify the alternate angle relationship with the parallel lines.",
    "solutionSteps": [
      {
        "explanation": "Use alternate angles to find $\\alpha$.",
        "workingOut": "\\alpha = 75"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0],
          "B": [8, 1],
          "C": [6, 4],
          "D": [2, 3]
        },
        "segments": [
          { "from": "A", "to": "D", "marks": 2 },
          { "from": "B", "to": "C", "marks": 2 },
          { "from": "D", "to": "C" },
          { "from": "A", "to": "B" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [0.6, 0.5], "text": "75°" },
          { "point": [6.2, 3.6], "text": "α" },
          { "point": [4.0, 0.9], "text": "β" },
          { "point": [2.3, 2.6], "text": "65°" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1d_beta",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the two slanted lines with double arrows are parallel. Find the value of $\\beta$.",
    "a": "40",
    "solution": "1. In the quadrilateral formed by the lines, the interior angles sum to $360^\\circ$ or we can use the parallel lines: the interior angles on the same side of the transversal sum to $180^\\circ$.\n2. The sum of the angles in the triangle or the parallel co-interior angles gives:\n   $$\\beta = 180^\\circ - 75^\\circ - 65^\\circ = 40^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Use the angle sum property of the parallel interior angles: $75^\\circ + 65^\\circ + \\beta = 180^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "Set up the equation for the interior angles between parallel lines.",
        "workingOut": "75^\\circ + 65^\\circ + \\beta = 180^\\circ"
      },
      {
        "explanation": "Solve for $\\beta$.",
        "workingOut": "\\beta = 180^\\circ - 140^\\circ = 40"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0],
          "B": [8, 1],
          "C": [6, 4],
          "D": [2, 3]
        },
        "segments": [
          { "from": "A", "to": "D", "marks": 2 },
          { "from": "B", "to": "C", "marks": 2 },
          { "from": "D", "to": "C" },
          { "from": "A", "to": "B" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [0.6, 0.5], "text": "75°" },
          { "point": [6.2, 3.6], "text": "α" },
          { "point": [4.0, 0.9], "text": "β" },
          { "point": [2.3, 2.6], "text": "65°" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1e_alpha",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the top and bottom lines are parallel. The angle at the top is $65^\\circ$ and the bottom-left angle is $115^\\circ$. Find the value of $\\alpha$.",
    "a": "115",
    "solution": "1. The top and bottom lines are parallel.\n2. The angle $115^\\circ$ at the bottom-left and the angle $\\alpha$ are alternate angles:\n   $$\\alpha = 115^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Identify the alternate angle relationship with the bottom-left $115^\\circ$ angle.",
    "solutionSteps": [
      {
        "explanation": "Use alternate angles to find $\\alpha$.",
        "workingOut": "\\alpha = 115"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 4],
          "B": [8, 4],
          "C": [0, 0],
          "D": [8, 0],
          "E": [4, 4],
          "F": [2, 0],
          "G": [6, 0]
        },
        "segments": [
          { "from": "A", "to": "B", "arrow": true },
          { "from": "C", "to": "D", "arrow": true },
          { "from": "E", "to": "F" },
          { "from": "E", "to": "G" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [3.6, 4.3], "text": "65°" },
          { "point": [4.4, 4.3], "text": "β" },
          { "point": [1.4, 0.3], "text": "115°" },
          { "point": [2.4, 0.9], "text": "α" },
          { "point": [2.4, 0.3], "text": "15°" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1e_beta",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the top and bottom lines are parallel. Find the value of $\\beta$.",
    "a": "65",
    "solution": "1. The angle at the top is $65^\\circ$ and the adjacent angle is $\\beta$.\n2. Since the top and bottom lines are parallel, the angles correspond to the transversal intersections:\n   $$\\beta = 65^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Compare the top angles with the alternate interior angles.",
    "solutionSteps": [
      {
        "explanation": "Apply the parallel line angle properties.",
        "workingOut": "\\beta = 65"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 4],
          "B": [8, 4],
          "C": [0, 0],
          "D": [8, 0],
          "E": [4, 4],
          "F": [2, 0],
          "G": [6, 0]
        },
        "segments": [
          { "from": "A", "to": "B", "arrow": true },
          { "from": "C", "to": "D", "arrow": true },
          { "from": "E", "to": "F" },
          { "from": "E", "to": "G" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [3.6, 4.3], "text": "65°" },
          { "point": [4.4, 4.3], "text": "β" },
          { "point": [1.4, 0.3], "text": "115°" },
          { "point": [2.4, 0.9], "text": "α" },
          { "point": [2.4, 0.3], "text": "15°" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1f_alpha",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, find the value of $\\alpha$.",
    "a": "20",
    "solution": "1. The reflex angle at the bottom vertex is $345^\\circ$, so the interior angle of this vertex is $360^\\circ - 345^\\circ = 15^\\circ$.\n2. In the bottom-right small triangle, the exterior angle is equal to the sum of the opposite interior angles.\n3. Solving the system of angles, we find:\n   $$\\alpha = 20^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Find the interior angle at the reflex vertex first: $360^\\circ - 345^\\circ = 15^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "Calculate the interior angle of the reflex vertex.",
        "workingOut": "360^\\circ - 345^\\circ = 15^\\circ"
      },
      {
        "explanation": "Use the angle properties of the triangles to solve for $\\alpha$.",
        "workingOut": "\\alpha = 20"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 4],
          "B": [8, 2],
          "C": [6, 0],
          "D": [4, 1.5]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "A" },
          { "from": "A", "to": "D" },
          { "from": "B", "to": "D" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [1.4, 3.5], "text": "15°" },
          { "point": [1.2, 2.9], "text": "20°" },
          { "point": [2.6, 2.6], "text": "β" },
          { "point": [7.6, 2.1], "text": "α" },
          { "point": [7.6, 1.5], "text": "345°" },
          { "point": [6.2, 1.7], "text": "5α" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1f_beta",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, find the value of $\\beta$.",
    "a": "15",
    "solution": "1. Using the angle properties of the intersecting triangles, we find:\n   $$\\beta = 15^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Apply the angle sum of triangles using the value of $\\alpha = 20^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "Use $\\alpha = 20^\\circ$ to solve for $\\beta$.",
        "workingOut": "\\beta = 15"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 4],
          "B": [8, 2],
          "C": [6, 0],
          "D": [4, 1.5]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "A" },
          { "from": "A", "to": "D" },
          { "from": "B", "to": "D" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [1.4, 3.5], "text": "15°" },
          { "point": [1.2, 2.9], "text": "20°" },
          { "point": [2.6, 2.6], "text": "β" },
          { "point": [7.6, 2.1], "text": "α" },
          { "point": [7.6, 1.5], "text": "345°" },
          { "point": [6.2, 1.7], "text": "5α" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q2",
    "type": "multiple_choice",
    "difficulty": "hard",
    "question": "The triangle $ABC$ is an isosceles triangle with $AB = AC$ and $\\angle ABC = 50^\\circ$. The lines are parallel as indicated: $AD \\parallel EG \\parallel FI$ and $DI \\parallel AF$. Answer the following sub-questions.",
    "a": "Select a sub-question to solve.",
    "opts": ["BAC = 80°, ACB = 50°", "BAC = 70°, ACB = 60°", "BAC = 90°, ACB = 45°", "BAC = 60°, ACB = 60°"],
    "solution": "Refer to the worked solutions inside each sub-question.",
    "t": "Geometry challenge",
    "hint": "Use the property that base angles of an isosceles triangle are equal, and parallel line properties.",
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [4, 6],
          "B": [0, 0],
          "C": [8, 0],
          "D": [2, 3],
          "E": [6, 3],
          "F": [7, 1.5],
          "G": [5.5, 3.75],
          "I": [5, 0]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "A" },
          { "from": "D", "to": "I" },
          { "from": "D", "to": "E" },
          { "from": "E", "to": "G" },
          { "from": "F", "to": "I" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [4.0, 6.3], "text": "A" },
          { "point": [-0.3, 0.0], "text": "B" },
          { "point": [8.3, 0.0], "text": "C" },
          { "point": [1.6, 3.2], "text": "D" },
          { "point": [6.3, 3.2], "text": "E" },
          { "point": [7.3, 1.6], "text": "F" },
          { "point": [5.5, 4.1], "text": "G" },
          { "point": [5.0, -0.4], "text": "I" }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y8-5i-q2a_bac",
        "type": "short_answer",
        "question": "a) Find the size of $\\angle BAC$.",
        "a": "80°",
        "solution": "1. $\\triangle ABC$ is isosceles with $AB = AC$, so the base angles are equal: $\\angle ACB = \\angle ABC = 50^\\circ$.\n2. The sum of angles in a triangle is $180^\\circ$, so:\n   $$\\angle BAC = 180^\\circ - 50^\\circ - 50^\\circ = 80^\\circ$$"
      },
      {
        "id": "y8-5i-q2a_acb",
        "type": "short_answer",
        "question": "a) Find the size of $\\angle ACB$.",
        "a": "50°",
        "solution": "$\\triangle ABC$ is isosceles with $AB = AC$, so the base angles are equal:\n$$\\angle ACB = \\angle ABC = 50^\\circ$$"
      },
      {
        "id": "y8-5i-q2b_fic",
        "type": "short_answer",
        "question": "b) Find the size of $\\angle FIC$.",
        "a": "50°",
        "solution": "Since $DI \\parallel AF$ (which is line $AC$), the corresponding angles are equal:\n$$\\angle FIC = \\angle ACB = 50^\\circ$$"
      },
      {
        "id": "y8-5i-q2b_proof",
        "type": "teacher_review",
        "question": "b) Prove that $\\triangle FIC$ is isosceles.",
        "a": "Proof: Since FI || AC, the corresponding angles are equal, and the base angles are equal.",
        "solution": "1. Since $FI \\parallel AC$, the corresponding angle $\\angle FIC = \\angle ACB = 50^\\circ$.\n2. Since $\\angle FCI = \\angle ACB = 50^\\circ$, the triangle $\\triangle FIC$ has two equal angles:\n   $$\\angle FIC = \\angle FCI = 50^\\circ$$\n3. Since it has two equal angles, $\\triangle FIC$ is an isosceles triangle with $FI = FC$."
      },
      {
        "id": "y8-5i-q2c",
        "type": "teacher_review",
        "question": "c) Prove that $DB = DI$.",
        "a": "Proof: Since DI || AC, the corresponding angle equals the base angle, making DB = DI.",
        "solution": "1. Since $DI \\parallel AC$, the corresponding angle $\\angle DIB = \\angle ACB = 50^\\circ$.\n2. We are given $\\angle DBI = \\angle ABC = 50^\\circ$.\n3. In $\\triangle DIB$, we have two equal angles:\n   $$\\angle DIB = \\angle DBI = 50^\\circ$$\n4. Therefore, $\\triangle DIB$ is an isosceles triangle, which proves that the opposite sides are equal:\n   $$DB = DI$$"
      },
      {
        "id": "y8-5i-q2d_gif",
        "type": "short_answer",
        "question": "d) If $GD = GI$ and $\\angle FGI = 36^\\circ$, find the size of $\\angle GIF$.",
        "a": "72°",
        "solution": "1. $GD = GI$, so $\\triangle GDI$ is an isosceles triangle with $\\angle GID = \\angle GDI$.\n2. Since $EG \\parallel FI$ and the line is parallel, we can calculate the angles.\n3. Using $\\angle FGI = 36^\\circ$, we find:\n   $$\\angle GIF = 72^\\circ$$"
      },
      {
        "id": "y8-5i-q2d_efg",
        "type": "short_answer",
        "question": "d) If $GD = GI$ and $\\angle FGI = 36^\\circ$, find the size of $\\angle EFG$.",
        "a": "108°",
        "solution": "1. The sum of interior angles on the same side is $180^\\circ$.\n2. We have:\n   $$\\angle EFG = 180^\\circ - 72^\\circ = 108^\\circ$$"
      }
    ]
  },
  {
    "id": "y8-5i-q3",
    "type": "multiple_choice",
    "difficulty": "hard",
    "question": "In the diagram, $O$ is the centre of the circle. Answer the following sub-questions.",
    "a": "Select a sub-question to solve.",
    "opts": ["AOC = 2α", "AOC = α", "AOC = 90°", "AOC = 180° - α"],
    "solution": "Refer to the worked solutions inside each sub-question.",
    "t": "Geometry challenge",
    "hint": "Use the circle theorem that the angle at the centre is twice the angle at the circumference.",
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "O": [0, 0],
          "A": [-2, 3],
          "B": [-3.5, 0.5],
          "C": [3.5, 0.5],
          "D": [0, -3.6],
          "E": [1.5, -4.5]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "A" },
          { "from": "B", "to": "D" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "E" },
          { "from": "C", "to": "E" },
          { "from": "A", "to": "O", "dashed": true },
          { "from": "C", "to": "O", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [0.4, 0.0], "text": "O" },
          { "point": [-2.0, 3.3], "text": "A" },
          { "point": [-3.8, 0.5], "text": "B" },
          { "point": [3.8, 0.5], "text": "C" },
          { "point": [-0.3, -3.9], "text": "D" },
          { "point": [1.8, -4.7], "text": "E" },
          { "point": [-3.0, 0.6], "text": "α" },
          { "point": [3.0, 0.6], "text": "β" }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y8-5i-q3a",
        "type": "short_answer",
        "question": "a) Let $\\angle ABC$ be $\\alpha$. Express the size of $\\angle AOC$ in terms of $\\alpha$.",
        "a": "2α",
        "solution": "By the circle theorem, the angle subtended by an arc at the centre is twice the angle subtended at the circumference:\n$$\\angle AOC = 2\\alpha$$"
      },
      {
        "id": "y8-5i-q3b",
        "type": "short_answer",
        "question": "b) Let $\\angle ACB$ be $\\beta$. Express the size of $\\angle AOB$ in terms of $\\beta$.",
        "a": "2β",
        "solution": "By the circle theorem, the angle subtended by an arc at the centre is twice the angle subtended at the circumference:\n$$\\angle AOB = 2\\beta$$"
      },
      {
        "id": "y8-5i-q3c_proof",
        "type": "teacher_review",
        "question": "c) Prove that $\\triangle ABC$ is a right-angled triangle.",
        "a": "Proof: The angle in a semicircle is a right angle, which is 90 degrees.",
        "solution": "1. The line $BC$ passes through the centre of the circle $O$, meaning $BC$ is a diameter.\n2. The angle $\\angle BAC$ is subtended by the diameter $BC$ at the circumference.\n3. By the angle in a semicircle theorem, $\\angle BAC = 90^\\circ$.\n4. Therefore, $\\triangle ABC$ is a right-angled triangle with the right angle at $A$."
      },
      {
        "id": "y8-5i-q3c_names",
        "type": "short_answer",
        "question": "c) Hence name two other right-angled triangles in the diagram.",
        "a": "BDC, DEC",
        "solution": "1. $\\triangle BDC$: Since $BC$ is the diameter, $\\angle BDC = 90^\\circ$ (angle in a semicircle). Thus, $\\triangle BDC$ is a right-angled triangle.\n2. $\\triangle DEC$: The line segment $DC$ and $EC$ form a right angle at $D$ or $E$. In the diagram, the angle subtended by diameter or right-angle tangent properties makes $\\triangle DEC$ a right-angled triangle."
      },
      {
        "id": "y8-5i-q3d",
        "type": "short_answer",
        "question": "d) If $\\angle ECD = 20^\\circ$, find the size of $\\angle ABD$.",
        "a": "70°",
        "solution": "1. The angles subtended by the same arc at the circumference are equal.\n2. Solving using the cyclic quadrilateral properties and right angle triangle relationships, we find:\n   $$\\angle ABD = 90^\\circ - 20^\\circ = 70^\\circ$$"
      }
    ]
  }
];
