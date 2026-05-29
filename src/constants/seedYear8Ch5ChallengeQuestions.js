export const Y8_CH5I_QUESTIONS = [
  {
    "id": "y8-5i-q1a_alpha",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the top and bottom horizontal lines are parallel ($AD \\parallel EG$), and the two slanted lines with double arrows are also parallel ($AF \\parallel CG$). The vertical line $FB$ is perpendicular to the bottom line. At $F$, the left slanted line makes an angle of $4\\alpha$ with the vertical $FB$. The right slanted line makes an angle of $\\alpha$ with the bottom line at $C$. Find the value of $\\alpha$.",
    "a": "18",
    "solution": "1. Since $FB \\perp AD$, the angle $\\angle FBD = 90^\\circ$. The left slanted line $AF$ makes angle $4\\alpha$ with the vertical $FB$ at $F$, so it makes angle $90^\\circ - 4\\alpha$ with the horizontal bottom line.\n2. The right slanted line $CG$ makes angle $\\alpha$ with the bottom line at $C$.\n3. Since $AF \\parallel CG$, they make equal angles with the bottom horizontal (alternate angles between parallels):\n   $$90^\\circ - 4\\alpha = \\alpha$$\n   $$5\\alpha = 90^\\circ$$\n   $$\\alpha = 18^\\circ$$",
    "t": "Geometry challenge",
    "hint": "The angle the left slanted line makes with the bottom = $90^\\circ - 4\\alpha$. Set this equal to $\\alpha$ (since the two slanted lines are parallel).",
    "solutionSteps": [
      {
        "explanation": "The left slanted line makes angle $4\\alpha$ with the vertical $FB$, so it makes $90^\\circ - 4\\alpha$ with the horizontal bottom.",
        "workingOut": "\\text{Angle with bottom} = 90^\\circ - 4\\alpha"
      },
      {
        "explanation": "Since $AF \\parallel CG$, both make equal angles with the bottom line.",
        "workingOut": "90^\\circ - 4\\alpha = \\alpha"
      },
      {
        "explanation": "Solve: add $4\\alpha$ to both sides, then divide by 5.",
        "workingOut": "5\\alpha = 90^\\circ \\Rightarrow \\alpha = 18"
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
          { "from": "C", "to": "G", "marks": 2 }
        ],
        "angles": [
          { "at": "B", "right": true }
        ],
        "sideLabels": [],
        "freeLabels": [
          { "point": [3.6, 3.2], "text": "4α" },
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
    "question": "In the diagram, the top and bottom lines are parallel, and the two slanted transversals are parallel ($AC \\parallel FE$). The angle at the top-right is $76^\\circ$. The angle $\\alpha$ is between the right transversal and the top parallel line (below the $76^\\circ$ angle). Find the value of $\\alpha$.",
    "a": "104",
    "solution": "1. The two parallel slanted transversals cut the top parallel line at the same angles.\n2. The angle of $76^\\circ$ and $\\alpha$ are supplementary (they form a straight line along the top parallel line), but $\\alpha$ is above the top line, which means:\n   $$\\alpha + 76^\\circ = 180^\\circ$$\n   Wait — looking at the diagram, $\\alpha$ and $76^\\circ$ are co-interior angles between the two parallel transversals, so:\n   $$\\alpha = 180^\\circ - 76^\\circ = 104^\\circ$$",
    "t": "Geometry challenge",
    "hint": "$\\alpha$ and $76^\\circ$ are co-interior angles between the two parallel transversals, so they add to $180^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "$\\alpha$ and $76^\\circ$ are co-interior (same-side interior) angles between the two parallel transversals.",
        "workingOut": "\\alpha + 76^\\circ = 180^\\circ"
      },
      {
        "explanation": "Solve for $\\alpha$.",
        "workingOut": "\\alpha = 180^\\circ - 76^\\circ = 104"
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
    "question": "In the diagram, the top and bottom lines are parallel, and the two slanted transversals are parallel. The angle at the top-right (above the top line) is $76^\\circ$. Find the value of $\\gamma$, which is the angle directly below the top line at the same intersection.",
    "a": "76",
    "solution": "The $76^\\circ$ angle and $\\gamma$ are vertically opposite angles at the top-right intersection:\n$$\\gamma = 76^\\circ$$",
    "t": "Geometry challenge",
    "hint": "$\\gamma$ and $76^\\circ$ are vertically opposite at the same intersection point.",
    "solutionSteps": [
      {
        "explanation": "Vertically opposite angles are equal.",
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
    "question": "In the diagram, the top and bottom lines are parallel. A zigzag line connects the two parallel lines, making a reflex angle of $290^\\circ$ at the top-left vertex and an angle of $110^\\circ$ at the middle vertex. The angle $\\alpha$ is at the bottom-left where the zigzag meets the bottom parallel line. Find the value of $\\alpha$.",
    "a": "140",
    "solution": "1. The reflex angle at the top-left is $290^\\circ$, so the interior angle at that vertex is $360^\\circ - 290^\\circ = 70^\\circ$.\n2. Draw a helper line through the middle vertex, parallel to both horizontal lines.\n3. This splits the $110^\\circ$ angle into two parts: the upper part equals $70^\\circ$ (alternate angles with the top line), and the lower part = $110^\\circ - 70^\\circ = 40^\\circ$.\n4. By co-interior angles between the helper line and the bottom parallel line:\n   $$\\alpha = 180^\\circ - 40^\\circ = 140^\\circ$$",
    "t": "Geometry challenge",
    "hint": "Draw a helper parallel line through the middle vertex. The $110^\\circ$ splits into $70^\\circ$ (alternate with top) and $40^\\circ$ (remaining). Then $\\alpha$ is co-interior with $40^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "Find the interior angle at the top-left vertex (reflex = 290°).",
        "workingOut": "360^\\circ - 290^\\circ = 70^\\circ"
      },
      {
        "explanation": "Draw a helper parallel through the middle vertex. Upper part of 110° = 70° (alternate angles). Lower part = 110° - 70° = 40°.",
        "workingOut": "110^\\circ - 70^\\circ = 40^\\circ"
      },
      {
        "explanation": "Co-interior angles between helper line and bottom: $\\alpha + 40^\\circ = 180^\\circ$.",
        "workingOut": "\\alpha = 180^\\circ - 40^\\circ = 140"
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
    "question": "In the diagram, the two horizontal lines are parallel (shown by arrows). Two transversals cross these lines forming a trapezium. The bottom-left angle is $75^\\circ$ and the top-right angle (at the upper parallel line) is $\\alpha$. The two transversals are parallel to each other. Find the value of $\\alpha$.",
    "a": "75",
    "solution": "Since the two transversals are parallel to each other, the angles they make with the top parallel line equal the angles they make with the bottom parallel line (alternate angles).\n\nThe bottom-left angle is $75^\\circ$, and $\\alpha$ is the alternate angle:\n$$\\alpha = 75^\\circ$$",
    "t": "Geometry challenge",
    "hint": "The two transversals are parallel — use alternate angles.",
    "solutionSteps": [
      {
        "explanation": "Since the transversals are parallel, alternate angles with the parallel horizontal lines are equal.",
        "workingOut": "\\alpha = 75"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "L": [0, 0],
          "R": [8, 0],
          "L2": [2, 4],
          "R2": [8, 4]
        },
        "segments": [
          { "from": "L", "to": "R", "arrow": true },
          { "from": "L2", "to": "R2", "arrow": true },
          { "from": "L", "to": "L2", "marks": 2 },
          { "from": "R", "to": "R2", "marks": 2 }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [0.8, 0.5], "text": "75°" },
          { "point": [7.2, 3.5], "text": "α" }
        ]
      }
    }
  },
  {
    "id": "y8-5i-q1d_beta",
    "type": "short_answer",
    "difficulty": "hard",
    "question": "In the diagram, the two horizontal lines are parallel (shown by arrows). Two transversals cross these lines and meet above the top line, forming a triangle. The left transversal makes an angle of $75°$ with the bottom parallel line, and the right transversal makes an angle of $65°$ with the bottom parallel line. Find $\\beta$, the apex angle of the triangle.",
    "a": "40",
    "solution": "1. By alternate angles, the left transversal makes an angle of $75°$ inside the triangle at the top-left.\n2. By alternate angles, the right transversal makes an angle of $65°$ inside the triangle at the top-right.\n3. The three interior angles of the triangle must sum to $180°$:\n   $$\\beta + 75° + 65° = 180°$$\n   $$\\beta = 40°$$",
    "t": "Geometry challenge",
    "hint": "Use alternate angles to find the base angles of the triangle, then apply the angle sum of a triangle.",
    "solutionSteps": [
      {
        "explanation": "By alternate angles with the parallel lines, the base angles of the triangle are $75°$ and $65°$.",
        "workingOut": "\\text{Base angles: }75° \\text{ and } 65°"
      },
      {
        "explanation": "Apply the angle sum of a triangle.",
        "workingOut": "\\beta + 75° + 65° = 180°"
      },
      {
        "explanation": "Solve for $\\beta$.",
        "workingOut": "\\beta = 180° - 140° = 40"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "L": [0, 0],
          "R": [8, 0],
          "L2": [1, 3],
          "R2": [7, 3],
          "T": [4, 6]
        },
        "segments": [
          { "from": "L", "to": "R", "arrow": true },
          { "from": "L2", "to": "R2", "arrow": true },
          { "from": "L", "to": "T" },
          { "from": "R", "to": "T" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [1.0, 0.5], "text": "75°" },
          { "point": [6.4, 0.5], "text": "65°" },
          { "point": [3.7, 5.3], "text": "β" }
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
