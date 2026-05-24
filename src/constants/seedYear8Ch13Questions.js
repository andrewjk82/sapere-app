export const Y8_CH13A_QUESTIONS = [
  // --- Question 5a (alpha) ---
  {
    "id": "y8-13a-q5a-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Use the properties of a parallelogram to find the value of $\\alpha$ in the diagram. Give reasons.",
    "a": "115^\\circ",
    "solution": "1. Opposite angles of a parallelogram are equal.\n2. In the given parallelogram $ABCD$, the angle opposite to $\\angle ADC$ is $\\angle ABC$.\n3. Therefore, $\\alpha = \\angle ABC = \\angle ADC = 115^\\circ$.",
    "t": "Parallelograms and their properties",
    "hint": "Recall that opposite angles in a parallelogram are equal.",
    "solutionSteps": [
      {
        "explanation": "Identify the relationship between opposite angles in a parallelogram.",
        "workingOut": "\\angle ABC = \\angle ADC"
      },
      {
        "explanation": "Substitute the given value $\\angle ADC = 115^\\circ$ to solve for $\\alpha$.",
        "workingOut": "\\alpha = 115^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "D": [1.5, 1.0],
          "C": [7.5, 1.0],
          "A": [3.0, 5.0],
          "B": [9.0, 5.0],
          "P": [12.0, 5.0]
        },
        "segments": [
          { "from": "A", "to": "B", "marks": 1 },
          { "from": "B", "to": "P" },
          { "from": "D", "to": "C", "marks": 1 },
          { "from": "A", "to": "D", "marks": 2 },
          { "from": "B", "to": "C", "marks": 2 }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [2.0, 1.4], "text": "115°" },
          { "point": [8.4, 4.6], "text": "α" },
          { "point": [9.6, 4.6], "text": "β" },
          { "point": [2.7, 5.2], "text": "A" },
          { "point": [8.9, 5.3], "text": "B" },
          { "point": [7.7, 0.7], "text": "C" },
          { "point": [1.2, 0.7], "text": "D" },
          { "point": [12.0, 5.3], "text": "P" }
        ]
      }
    }
  },

  // --- Question 5a (beta) ---
  {
    "id": "y8-13a-q5a-beta",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Use the properties of a parallelogram to find the value of $\\beta$ in the diagram. Give reasons.",
    "a": "65^\\circ",
    "solution": "1. Opposite angles of a parallelogram are equal, so the interior angle $\\angle ABC = \\angle ADC = 115^\\circ$.\n2. The points $A$, $B$, and $P$ lie on a straight line, so the angles on the straight line add up to $180^\\circ$.\n3. Therefore, $\\beta = 180^\\circ - 115^\\circ = 65^\\circ$.",
    "t": "Parallelograms and their properties",
    "hint": "Angles on a straight line add up to $180^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "Find the interior angle $\\angle ABC$ using the opposite angle property.",
        "workingOut": "\\angle ABC = 115^\\circ"
      },
      {
        "explanation": "Use the fact that angles on a straight line add to $180^\\circ$.",
        "workingOut": "\\alpha + \\beta = 180^\\circ"
      },
      {
        "explanation": "Solve for $\\beta$.",
        "workingOut": "\\beta = 180^\\circ - 115^\\circ = 65^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "D": [1.5, 1.0],
          "C": [7.5, 1.0],
          "A": [3.0, 5.0],
          "B": [9.0, 5.0],
          "P": [12.0, 5.0]
        },
        "segments": [
          { "from": "A", "to": "B", "marks": 1 },
          { "from": "B", "to": "P" },
          { "from": "D", "to": "C", "marks": 1 },
          { "from": "A", "to": "D", "marks": 2 },
          { "from": "B", "to": "C", "marks": 2 }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [2.0, 1.4], "text": "115°" },
          { "point": [8.4, 4.6], "text": "α" },
          { "point": [9.6, 4.6], "text": "β" },
          { "point": [2.7, 5.2], "text": "A" },
          { "point": [8.9, 5.3], "text": "B" },
          { "point": [7.7, 0.7], "text": "C" },
          { "point": [1.2, 0.7], "text": "D" },
          { "point": [12.0, 5.3], "text": "P" }
        ]
      }
    }
  },

  // --- Question 5b (x) ---
  {
    "id": "y8-13a-q5b-x",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In the parallelogram $PQRS$, find the value of $x$. Give reasons.",
    "a": "15",
    "solution": "1. Opposite sides of a parallelogram are equal in length.\n2. In parallelogram $PQRS$, the side opposite to $PQ$ is $SR$.\n3. Therefore, $SR = PQ \\implies x = 15$.",
    "t": "Parallelograms and their properties",
    "hint": "Recall that opposite sides of a parallelogram are equal in length.",
    "solutionSteps": [
      {
        "explanation": "Equate the opposite sides of the parallelogram.",
        "workingOut": "SR = PQ"
      },
      {
        "explanation": "Substitute the given values to find $x$.",
        "workingOut": "x = 15"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "S": [1.5, 1.0],
          "R": [7.5, 1.0],
          "P": [3.5, 5.0],
          "Q": [9.5, 5.0],
          "M": [5.5, 3.0]
        },
        "segments": [
          { "from": "P", "to": "Q", "marks": 1 },
          { "from": "S", "to": "R", "marks": 1 },
          { "from": "P", "to": "S", "marks": 2 },
          { "from": "Q", "to": "R", "marks": 2 },
          { "from": "P", "to": "M", "dashed": true },
          { "from": "M", "to": "R", "dashed": true },
          { "from": "Q", "to": "M", "dashed": true },
          { "from": "M", "to": "S", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["P", "Q"], "text": "15 cm" },
          { "between": ["S", "R"], "text": "x" }
        ],
        "freeLabels": [
          { "point": [4.3, 4.0], "text": "9 cm" },
          { "point": [6.5, 2.0], "text": "z" },
          { "point": [7.3, 4.0], "text": "7 cm" },
          { "point": [3.5, 2.0], "text": "y" },
          { "point": [3.2, 5.3], "text": "P" },
          { "point": [9.7, 5.3], "text": "Q" },
          { "point": [7.7, 0.7], "text": "R" },
          { "point": [1.2, 0.7], "text": "S" }
        ]
      }
    }
  },

  // --- Question 5b (y) ---
  {
    "id": "y8-13a-q5b-y",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In the parallelogram $PQRS$, find the value of $y$. Give reasons.",
    "a": "7",
    "solution": "1. The diagonals of a parallelogram bisect each other.\n2. Let $M$ be the intersection of the diagonals $PR$ and $QS$. The segment $QS$ is split into $QM$ and $MS$, where $QM = MS$.\n3. Therefore, $y = MS = QM = 7$.",
    "t": "Parallelograms and their properties",
    "hint": "Recall that the diagonals of a parallelogram bisect each other.",
    "solutionSteps": [
      {
        "explanation": "Set the bisected diagonal parts equal to each other.",
        "workingOut": "MS = QM"
      },
      {
        "explanation": "Substitute the given length of $QM = 7\\text{ cm}$ to find $y$.",
        "workingOut": "y = 7"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "S": [1.5, 1.0],
          "R": [7.5, 1.0],
          "P": [3.5, 5.0],
          "Q": [9.5, 5.0],
          "M": [5.5, 3.0]
        },
        "segments": [
          { "from": "P", "to": "Q", "marks": 1 },
          { "from": "S", "to": "R", "marks": 1 },
          { "from": "P", "to": "S", "marks": 2 },
          { "from": "Q", "to": "R", "marks": 2 },
          { "from": "P", "to": "M", "dashed": true },
          { "from": "M", "to": "R", "dashed": true },
          { "from": "Q", "to": "M", "dashed": true },
          { "from": "M", "to": "S", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["P", "Q"], "text": "15 cm" },
          { "between": ["S", "R"], "text": "x" }
        ],
        "freeLabels": [
          { "point": [4.3, 4.0], "text": "9 cm" },
          { "point": [6.5, 2.0], "text": "z" },
          { "point": [7.3, 4.0], "text": "7 cm" },
          { "point": [3.5, 2.0], "text": "y" },
          { "point": [3.2, 5.3], "text": "P" },
          { "point": [9.7, 5.3], "text": "Q" },
          { "point": [7.7, 0.7], "text": "R" },
          { "point": [1.2, 0.7], "text": "S" }
        ]
      }
    }
  },

  // --- Question 5b (z) ---
  {
    "id": "y8-13a-q5b-z",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In the parallelogram $PQRS$, find the value of $z$. Give reasons.",
    "a": "9",
    "solution": "1. The diagonals of a parallelogram bisect each other.\n2. Let $M$ be the intersection of the diagonals $PR$ and $QS$. The segment $PR$ is split into $PM$ and $MR$, where $MR = PM$.\n3. Therefore, $z = MR = PM = 9$.",
    "t": "Parallelograms and their properties",
    "hint": "Recall that the diagonals of a parallelogram bisect each other.",
    "solutionSteps": [
      {
        "explanation": "Set the bisected diagonal parts equal to each other.",
        "workingOut": "MR = PM"
      },
      {
        "explanation": "Substitute the given length of $PM = 9\\text{ cm}$ to find $z$.",
        "workingOut": "z = 9"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "S": [1.5, 1.0],
          "R": [7.5, 1.0],
          "P": [3.5, 5.0],
          "Q": [9.5, 5.0],
          "M": [5.5, 3.0]
        },
        "segments": [
          { "from": "P", "to": "Q", "marks": 1 },
          { "from": "S", "to": "R", "marks": 1 },
          { "from": "P", "to": "S", "marks": 2 },
          { "from": "Q", "to": "R", "marks": 2 },
          { "from": "P", "to": "M", "dashed": true },
          { "from": "M", "to": "R", "dashed": true },
          { "from": "Q", "to": "M", "dashed": true },
          { "from": "M", "to": "S", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [
          { "between": ["P", "Q"], "text": "15 cm" },
          { "between": ["S", "R"], "text": "x" }
        ],
        "freeLabels": [
          { "point": [4.3, 4.0], "text": "9 cm" },
          { "point": [6.5, 2.0], "text": "z" },
          { "point": [7.3, 4.0], "text": "7 cm" },
          { "point": [3.5, 2.0], "text": "y" },
          { "point": [3.2, 5.3], "text": "P" },
          { "point": [9.7, 5.3], "text": "Q" },
          { "point": [7.7, 0.7], "text": "R" },
          { "point": [1.2, 0.7], "text": "S" }
        ]
      }
    }
  },

  // --- Question 5c (alpha) ---
  {
    "id": "y8-13a-q5c-alpha",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In the given diagram, find the value of $\\alpha$. Give reasons.",
    "a": "75^\\circ",
    "solution": "1. Since the vertical lines $KP$ and $LQ$ are parallel ($KP \\parallel LQ$), the co-interior angles formed by the transversal line $KL$ add up to $180^\\circ$.\n2. Since $\\angle PKL = 105^\\circ$, we have $\\angle KLQ = 180^\\circ - 105^\\circ = 75^\\circ$.\n3. Since the horizontal lines $KM$ and $PS$ are parallel ($KM \\parallel PS$), the alternate interior angles formed by the transversal $LQ$ are equal: $\\alpha = \\angle LQR = \\angle KLQ = 75^\\circ$.",
    "t": "Parallelograms and their properties",
    "hint": "Use the properties of parallel lines (co-interior and alternate interior angles).",
    "solutionSteps": [
      {
        "explanation": "Find the co-interior angle $\\angle KLQ$ using parallel vertical lines.",
        "workingOut": "\\angle KLQ = 180^\\circ - 105^\\circ = 75^\\circ"
      },
      {
        "explanation": "Relate $\\alpha$ to $\\angle KLQ$ using alternate interior angles on parallel horizontal lines.",
        "workingOut": "\\alpha = \\angle KLQ = 75^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "P": [1.5, 1.0],
          "Q": [5.0, 2.0],
          "R": [8.5, 3.0],
          "S": [11.0, 3.71],
          "K": [2.5, 4.5],
          "L": [6.0, 5.5],
          "M": [9.5, 6.5],
          "N": [12.0, 7.21],
          "T": [1.0, -0.5],
          "U": [4.5, 0.5],
          "V": [8.0, 1.5],
          "M_up": [9.5, 7.5]
        },
        "segments": [
          { "from": "K", "to": "L", "marks": 1 },
          { "from": "L", "to": "M", "marks": 1 },
          { "from": "M", "to": "N" },
          { "from": "P", "to": "Q", "marks": 1 },
          { "from": "Q", "to": "R", "marks": 1 },
          { "from": "R", "to": "S" },
          { "from": "T", "to": "K", "marks": 2 },
          { "from": "U", "to": "L", "marks": 2 },
          { "from": "V", "to": "M_up", "marks": 2 }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [2.8, 3.9], "text": "105°" },
          { "point": [5.5, 2.6], "text": "α" },
          { "point": [9.9, 6.9], "text": "β" },
          { "point": [2.2, 4.7], "text": "K" },
          { "point": [5.7, 5.7], "text": "L" },
          { "point": [9.2, 6.7], "text": "M" },
          { "point": [12.2, 7.3], "text": "N" },
          { "point": [1.2, 1.2], "text": "P" },
          { "point": [4.7, 2.2], "text": "Q" },
          { "point": [8.2, 3.2], "text": "R" },
          { "point": [11.2, 3.8], "text": "S" },
          { "point": [1.0, -0.8], "text": "T" },
          { "point": [4.5, 0.2], "text": "U" },
          { "point": [8.0, 1.2], "text": "V" }
        ]
      }
    }
  },

  // --- Question 5c (beta) ---
  {
    "id": "y8-13a-q5c-beta",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In the given diagram, find the value of $\\beta$. Give reasons.",
    "a": "75^\\circ",
    "solution": "1. Since the vertical lines $KP$ and $MR$ are parallel ($KP \\parallel MR$), the corresponding angles formed by the transversal line $KM$ are equal.\n2. The corresponding angle to $\\angle PKL = 105^\\circ$ at the intersection $M$ is $\\angle RMN = 105^\\circ$.\n3. The angles $\\beta$ and $\\angle RMN$ lie on the straight line $VRM$, so they are supplementary: $\\beta = 180^\\circ - 105^\\circ = 75^\\circ$.",
    "t": "Parallelograms and their properties",
    "hint": "Corresponding angles on parallel lines are equal, and angles on a straight line add to $180^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "Find the corresponding angle at vertex $M$.",
        "workingOut": "\\angle RMN = 105^\\circ"
      },
      {
        "explanation": "Use supplementary angles on a straight line to find $\\beta$.",
        "workingOut": "\\beta = 180^\\circ - 105^\\circ = 75^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "P": [1.5, 1.0],
          "Q": [5.0, 2.0],
          "R": [8.5, 3.0],
          "S": [11.0, 3.71],
          "K": [2.5, 4.5],
          "L": [6.0, 5.5],
          "M": [9.5, 6.5],
          "N": [12.0, 7.21],
          "T": [1.0, -0.5],
          "U": [4.5, 0.5],
          "V": [8.0, 1.5],
          "M_up": [9.5, 7.5]
        },
        "segments": [
          { "from": "K", "to": "L", "marks": 1 },
          { "from": "L", "to": "M", "marks": 1 },
          { "from": "M", "to": "N" },
          { "from": "P", "to": "Q", "marks": 1 },
          { "from": "Q", "to": "R", "marks": 1 },
          { "from": "R", "to": "S" },
          { "from": "T", "to": "K", "marks": 2 },
          { "from": "U", "to": "L", "marks": 2 },
          { "from": "V", "to": "M_up", "marks": 2 }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [2.8, 3.9], "text": "105°" },
          { "point": [5.5, 2.6], "text": "α" },
          { "point": [9.9, 6.9], "text": "β" },
          { "point": [2.2, 4.7], "text": "K" },
          { "point": [5.7, 5.7], "text": "L" },
          { "point": [9.2, 6.7], "text": "M" },
          { "point": [12.2, 7.3], "text": "N" },
          { "point": [1.2, 1.2], "text": "P" },
          { "point": [4.7, 2.2], "text": "Q" },
          { "point": [8.2, 3.2], "text": "R" },
          { "point": [11.2, 3.8], "text": "S" },
          { "point": [1.0, -0.8], "text": "T" },
          { "point": [4.5, 0.2], "text": "U" },
          { "point": [8.0, 1.2], "text": "V" }
        ]
      }
    }
  },

  // --- Question 5d ---
  {
    "id": "y8-13a-q5d",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Use the properties of parallelograms to find the value of $\\beta$ in the diagram. Give reasons.",
    "a": "270^\\circ",
    "solution": "1. In parallelogram $RSVW$, the opposite angles are equal, so $\\angle WVS = \\angle WRS = 55^\\circ$.\n2. Since $SV \\parallel TU$, the alternate interior angle to the given $35^\\circ$ angle is the interior angle of parallelogram $STUV$ at $T$, so $\\angle STU = 35^\\circ$.\n3. Since opposite angles in a parallelogram are equal, in parallelogram $STUV$ we have $\\angle SVU = \\angle STU = 35^\\circ$.\n4. The total angle inside the V-shape at $V$ is $\\angle WVU = \\angle WVS + \\angle SVU = 55^\\circ + 35^\\circ = 90^\\circ$.\n5. The angle $\\beta$ is the reflex angle at $V$, so $\\beta = 360^\\circ - 90^\\circ = 270^\\circ$.",
    "t": "Parallelograms and their properties",
    "hint": "Find the two interior angles at $V$ first, then subtract their sum from $360^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "Find $\\angle WVS$ using opposite angles of parallelogram $RSVW$.",
        "workingOut": "\\angle WVS = \\angle WRS = 55^\\circ"
      },
      {
        "explanation": "Find $\\angle SVU$ using opposite angles of parallelogram $STUV$.",
        "workingOut": "\\angle SVU = \\angle STU = 35^\\circ"
      },
      {
        "explanation": "Calculate the interior angle $\\angle WVU$.",
        "workingOut": "\\angle WVU = 55^\\circ + 35^\\circ = 90^\\circ"
      },
      {
        "explanation": "Calculate the reflex angle $\\beta$.",
        "workingOut": "\\beta = 360^\\circ - 90^\\circ = 270^\\circ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "R": [1.5, 6.0],
          "W": [1.5, 2.0],
          "S": [5.5, 4.0],
          "V": [5.5, 0.0],
          "T": [9.5, 6.5],
          "U": [9.5, 2.5]
        },
        "segments": [
          { "from": "R", "to": "W", "marks": 3 },
          { "from": "S", "to": "V", "marks": 3 },
          { "from": "T", "to": "U", "marks": 3 },
          { "from": "R", "to": "S", "marks": 1 },
          { "from": "W", "to": "V", "marks": 1 },
          { "from": "S", "to": "T", "marks": 2 },
          { "from": "V", "to": "U", "marks": 2 }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [2.0, 5.2], "text": "55°" },
          { "point": [5.9, 4.8], "text": "35°" },
          { "point": [5.5, -0.5], "text": "β" },
          { "point": [1.1, 6.2], "text": "R" },
          { "point": [1.1, 2.0], "text": "W" },
          { "point": [5.1, 4.2], "text": "S" },
          { "point": [5.1, -0.2], "text": "V" },
          { "point": [9.8, 6.7], "text": "T" },
          { "point": [9.8, 2.5], "text": "U" }
        ]
      }
    }
  },

  // --- Question 5e ---
  {
    "id": "y8-13a-q5e",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In the parallelogram $DEFG$, the angles are marked as shown. Find the value of $\\alpha$.",
    "a": "50",
    "solution": "1. In a parallelogram, consecutive interior angles are co-interior and add up to $180^\\circ$.\n2. Therefore, $\\angle DGF + \\angle GFE = 180^\\circ$.\n3. Substitute the given expressions: $\\alpha + (2\\alpha + 30^\\circ) = 180^\\circ$.\n4. Simplify and solve: $3\\alpha + 30 = 180 \\implies 3\\alpha = 150 \\implies \\alpha = 50$.",
    "t": "Parallelograms and their properties",
    "hint": "The sum of co-interior angles between parallel lines is $180^\\circ$.",
    "solutionSteps": [
      {
        "explanation": "Set up the co-interior angle equation.",
        "workingOut": "\\alpha + (2\\alpha + 30^\\circ) = 180^\\circ"
      },
      {
        "explanation": "Combine like terms.",
        "workingOut": "3\\alpha + 30 = 180"
      },
      {
        "explanation": "Solve for $\\alpha$.",
        "workingOut": "3\\alpha = 150 \\implies \\alpha = 50"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "G": [1.5, 1.0],
          "F": [7.5, 1.0],
          "D": [3.5, 4.5],
          "E": [9.5, 4.5]
        },
        "segments": [
          { "from": "D", "to": "E", "marks": 1 },
          { "from": "G", "to": "F", "marks": 1 },
          { "from": "D", "to": "G", "marks": 2 },
          { "from": "E", "to": "F", "marks": 2 }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [2.2, 1.4], "text": "α" },
          { "point": [6.6, 1.4], "text": "2α + 30°" },
          { "point": [3.2, 4.8], "text": "D" },
          { "point": [9.8, 4.8], "text": "E" },
          { "point": [7.8, 0.7], "text": "F" },
          { "point": [1.2, 0.7], "text": "G" }
        ]
      }
    }
  },

  // --- Question 5f (x) ---
  {
    "id": "y8-13a-q5f-x",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In the parallelogram $JKLM$ with diagonals intersecting at $O$, find the value of $x$.",
    "a": "5",
    "solution": "1. In a parallelogram, the diagonals bisect each other.\n2. Therefore, the segments $MO$ and $OK$ are equal: $x = 3x - 10$.\n3. Solve for $x$: $2x = 10 \\implies x = 5$.",
    "t": "Parallelograms and their properties",
    "hint": "The diagonals of a parallelogram bisect each other.",
    "solutionSteps": [
      {
        "explanation": "Set the diagonal segments equal.",
        "workingOut": "x = 3x - 10"
      },
      {
        "explanation": "Solve the linear equation for $x$.",
        "workingOut": "2x = 10 \\implies x = 5"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "M": [1.0, 3.0],
          "L": [4.5, 0.5],
          "K": [8.0, 3.0],
          "J": [4.5, 5.5],
          "O": [4.5, 3.0]
        },
        "segments": [
          { "from": "J", "to": "K", "marks": 1 },
          { "from": "M", "to": "L", "marks": 1 },
          { "from": "M", "to": "J", "marks": 2 },
          { "from": "L", "to": "K", "marks": 2 },
          { "from": "M", "to": "O", "dashed": true },
          { "from": "O", "to": "K", "dashed": true },
          { "from": "J", "to": "O", "dashed": true },
          { "from": "O", "to": "L", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [6.5, 4.5], "text": "6" },
          { "point": [2.2, 1.5], "text": "20 - 2z" },
          { "point": [2.7, 3.2], "text": "x" },
          { "point": [6.2, 3.2], "text": "3x - 10" },
          { "point": [4.7, 4.2], "text": "y" },
          { "point": [4.7, 1.8], "text": "12 - y" },
          { "point": [4.5, 5.8], "text": "J" },
          { "point": [8.3, 3.0], "text": "K" },
          { "point": [4.5, 0.2], "text": "L" },
          { "point": [0.7, 3.0], "text": "M" }
        ]
      }
    }
  },

  // --- Question 5f (y) ---
  {
    "id": "y8-13a-q5f-y",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In the parallelogram $JKLM$ with diagonals intersecting at $O$, find the value of $y$.",
    "a": "6",
    "solution": "1. In a parallelogram, the diagonals bisect each other.\n2. Therefore, the segments $JO$ and $OL$ are equal: $y = 12 - y$.\n3. Solve for $y$: $2y = 12 \\implies y = 6$.",
    "t": "Parallelograms and their properties",
    "hint": "The diagonals of a parallelogram bisect each other.",
    "solutionSteps": [
      {
        "explanation": "Set the diagonal segments equal.",
        "workingOut": "y = 12 - y"
      },
      {
        "explanation": "Solve the linear equation for $y$.",
        "workingOut": "2y = 12 \\implies y = 6"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "M": [1.0, 3.0],
          "L": [4.5, 0.5],
          "K": [8.0, 3.0],
          "J": [4.5, 5.5],
          "O": [4.5, 3.0]
        },
        "segments": [
          { "from": "J", "to": "K", "marks": 1 },
          { "from": "M", "to": "L", "marks": 1 },
          { "from": "M", "to": "J", "marks": 2 },
          { "from": "L", "to": "K", "marks": 2 },
          { "from": "M", "to": "O", "dashed": true },
          { "from": "O", "to": "K", "dashed": true },
          { "from": "J", "to": "O", "dashed": true },
          { "from": "O", "to": "L", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [6.5, 4.5], "text": "6" },
          { "point": [2.2, 1.5], "text": "20 - 2z" },
          { "point": [2.7, 3.2], "text": "x" },
          { "point": [6.2, 3.2], "text": "3x - 10" },
          { "point": [4.7, 4.2], "text": "y" },
          { "point": [4.7, 1.8], "text": "12 - y" },
          { "point": [4.5, 5.8], "text": "J" },
          { "point": [8.3, 3.0], "text": "K" },
          { "point": [4.5, 0.2], "text": "L" },
          { "point": [0.7, 3.0], "text": "M" }
        ]
      }
    }
  },

  // --- Question 5f (z) ---
  {
    "id": "y8-13a-q5f-z",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In the parallelogram $JKLM$ with diagonals intersecting at $O$, find the value of $z$.",
    "a": "7",
    "solution": "1. Opposite sides of a parallelogram are equal in length.\n2. Therefore, $ML = JK \\implies 20 - 2z = 6$.\n3. Solve for $z$: $2z = 14 \\implies z = 7$.",
    "t": "Parallelograms and their properties",
    "hint": "Opposite sides of a parallelogram are equal in length.",
    "solutionSteps": [
      {
        "explanation": "Set the opposite sides equal.",
        "workingOut": "20 - 2z = 6"
      },
      {
        "explanation": "Solve the linear equation for $z$.",
        "workingOut": "2z = 14 \\implies z = 7"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "M": [1.0, 3.0],
          "L": [4.5, 0.5],
          "K": [8.0, 3.0],
          "J": [4.5, 5.5],
          "O": [4.5, 3.0]
        },
        "segments": [
          { "from": "J", "to": "K", "marks": 1 },
          { "from": "M", "to": "L", "marks": 1 },
          { "from": "M", "to": "J", "marks": 2 },
          { "from": "L", "to": "K", "marks": 2 },
          { "from": "M", "to": "O", "dashed": true },
          { "from": "O", "to": "K", "dashed": true },
          { "from": "J", "to": "O", "dashed": true },
          { "from": "O", "to": "L", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [6.5, 4.5], "text": "6" },
          { "point": [2.2, 1.5], "text": "20 - 2z" },
          { "point": [2.7, 3.2], "text": "x" },
          { "point": [6.2, 3.2], "text": "3x - 10" },
          { "point": [4.7, 4.2], "text": "y" },
          { "point": [4.7, 1.8], "text": "12 - y" },
          { "point": [4.5, 5.8], "text": "J" },
          { "point": [8.3, 3.0], "text": "K" },
          { "point": [4.5, 0.2], "text": "L" },
          { "point": [0.7, 3.0], "text": "M" }
        ]
      }
    }
  },

  // --- Question 6a ---
  {
    "id": "y8-13a-q6a",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Find the perimeter of a parallelogram whose adjacent side lengths are $14\\text{ cm}$ and $25\\text{ cm}$.",
    "a": "78",
    "solution": "1. A parallelogram has two pairs of equal opposite sides.\n2. Perimeter = $2 \\times (\\text{side}_1 + \\text{side}_2)$.\n3. Perimeter = $2 \\times (14\\text{ cm} + 25\\text{ cm}) = 2 \\times 39\\text{ cm} = 78\\text{ cm}$.",
    "t": "Parallelograms and their properties",
    "hint": "Recall that opposite sides of a parallelogram are equal, so the perimeter is the sum of all four sides.",
    "solutionSteps": [
      {
        "explanation": "Write down the formula for the perimeter of a parallelogram.",
        "workingOut": "P = 2(a + b)"
      },
      {
        "explanation": "Substitute the values $a = 14$ and $b = 25$.",
        "workingOut": "P = 2(14 + 25) = 2(39)"
      },
      {
        "explanation": "Calculate the final perimeter.",
        "workingOut": "P = 78"
      }
    ],
    "graphData": null
  },

  // --- Question 6b ---
  {
    "id": "y8-13a-q6b",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Find the perimeter of a parallelogram whose adjacent side lengths are $7.5\\text{ km}$ and $14.5\\text{ km}$.",
    "a": "44",
    "solution": "1. A parallelogram has two pairs of equal opposite sides.\n2. Perimeter = $2 \\times (\\text{side}_1 + \\text{side}_2)$.\n3. Perimeter = $2 \\times (7.5\\text{ km} + 14.5\\text{ km}) = 2 \\times 22\\text{ km} = 44\\text{ km}$.",
    "t": "Parallelograms and their properties",
    "hint": "Sum the adjacent sides and multiply by 2.",
    "solutionSteps": [
      {
        "explanation": "Use the perimeter formula.",
        "workingOut": "P = 2(7.5 + 14.5)"
      },
      {
        "explanation": "Calculate the sum inside the parentheses.",
        "workingOut": "P = 2(22)"
      },
      {
        "explanation": "Multiply to find the final answer.",
        "workingOut": "P = 44"
      }
    ],
    "graphData": null
  },

  // --- Question 6c ---
  {
    "id": "y8-13a-q6c",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Find the perimeter of a parallelogram whose adjacent side lengths are $6\\frac{1}{2}\\text{ m}$ and $9\\text{ m}$.",
    "a": "31",
    "solution": "1. Convert the mixed fraction: $6\\frac{1}{2}\\text{ m} = 6.5\\text{ m}$.\n2. Perimeter = $2 \\times (\\text{side}_1 + \\text{side}_2)$.\n3. Perimeter = $2 \\times (6.5\\text{ m} + 9\\text{ m}) = 2 \\times 15.5\\text{ m} = 31\\text{ m}$.",
    "t": "Parallelograms and their properties",
    "hint": "Convert the mixed number to a decimal first.",
    "solutionSteps": [
      {
        "explanation": "Convert mixed fraction to decimal.",
        "workingOut": "6\\frac{1}{2} = 6.5"
      },
      {
        "explanation": "Apply the perimeter formula.",
        "workingOut": "P = 2(6.5 + 9)"
      },
      {
        "explanation": "Perform the calculation.",
        "workingOut": "P = 2(15.5) = 31"
      }
    ],
    "graphData": null
  },

  // --- Question 6d ---
  {
    "id": "y8-13a-q6d",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Find the perimeter of a parallelogram whose adjacent side lengths are $16\\text{ cm}$ and $28\\text{ cm}$.",
    "a": "88",
    "solution": "1. Perimeter = $2 \\times (\\text{side}_1 + \\text{side}_2)$.\n2. Perimeter = $2 \\times (16\\text{ cm} + 28\\text{ cm}) = 2 \\times 44\\text{ cm} = 88\\text{ cm}$.",
    "t": "Parallelograms and their properties",
    "hint": "Sum the adjacent sides and multiply by 2.",
    "solutionSteps": [
      {
        "explanation": "Use the perimeter formula.",
        "workingOut": "P = 2(16 + 28)"
      },
      {
        "explanation": "Simplify and calculate.",
        "workingOut": "P = 2(44) = 88"
      }
    ],
    "graphData": null
  },

  // --- Question 7 ---
  {
    "id": "y8-13a-q7",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Follow the drawing steps and answer the questions:\n\nStep 1: Draw a parallelogram using the following steps. First, choose two horizontal lines on your page as opposite sides. Then place your ruler obliquely across the page and use the two edges of the ruler to draw the other two sides. Label the parallelogram $PQRS$.",
    "a": "See solution for detailed verification and answers.",
    "solution": "1. Diagonals $PR$ and $QS$ intersect at $T$.\n2. A circle with center $T$ passing through $P$ will also pass through $R$, demonstrating that the diagonals bisect each other ($PT = TR$).\n3. Similarly, a second circle with center $T$ passing through $Q$ will also pass through $S$, showing $QT = TS$.",
    "t": "Parallelograms and their properties",
    "hint": "Remember that diagonals of a parallelogram bisect each other.",
    "solutionSteps": [
      {
        "explanation": "Draw the diagonals and label the intersection point $T$.",
        "workingOut": "\\text{Intersection } = T"
      },
      {
        "explanation": "A circle centered at $T$ passing through $P$ also passes through $R$ because $PT = TR$.",
        "workingOut": "PT = TR"
      },
      {
        "explanation": "A circle centered at $T$ passing through $Q$ also passes through $S$ because $QT = TS$.",
        "workingOut": "QT = TS"
      }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y8-13a-q7a",
        "type": "teacher_review",
        "question": "a) Draw the diagonals $PR$ and $QS$, and label their intersection $T$.",
        "a": "Verify that the student drew the diagonals intersecting at $T$."
      },
      {
        "id": "y8-13a-q7b",
        "type": "teacher_review",
        "question": "b) Draw the circle with centre $T$ passing through $P$. Does it go through $R$? What property of the parallelogram does this illustrate?",
        "a": "Yes, it goes through $R$. This illustrates that the diagonals of a parallelogram bisect each other (i.e. $PT = TR$)."
      },
      {
        "id": "y8-13a-q7c",
        "type": "teacher_review",
        "question": "c) Draw a second circle with centre $T$ passing through $Q$. Does it go through $S$? Why or why not?",
        "a": "Yes, it goes through $S$. Since the diagonals bisect each other, the distance $QT$ equals $TS$, meaning $S$ is at the same distance from the centre $T$ as $Q$."
      }
    ]
  },

  // --- Question 8 ---
  {
    "id": "y8-13a-q8",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "In the diagram, $PQRS$ is a parallelogram. Show that the diagonal $PR$ has three times the length of the diagonal $QS$.",
    "a": "By the diagonal bisection property, $QS = 2y$ and $PR = 6y \\implies PR = 3QS$.",
    "solution": "1. In a parallelogram, the diagonals bisect each other.\n2. Since the diagonal intersection point is $T$:\n   - $QT = ST = y \\implies QS = QT + ST = y + y = 2y$.\n   - $PT = TR = 3y \\implies PR = PT + TR = 3y + 3y = 6y$.\n3. Therefore, $PR = 6y = 3(2y) = 3QS$.\nThis shows that diagonal $PR$ has three times the length of diagonal $QS$.",
    "t": "Parallelograms and their properties",
    "hint": "Find the total length of each diagonal in terms of $y$ using the bisection property.",
    "solutionSteps": [
      {
        "explanation": "Find the total length of diagonal $QS$ using bisection.",
        "workingOut": "QS = 2 \\times ST = 2y"
      },
      {
        "explanation": "Find the total length of diagonal $PR$ using bisection.",
        "workingOut": "PR = 2 \\times PT = 2 \\times 3y = 6y"
      },
      {
        "explanation": "Express $PR$ in terms of $QS$.",
        "workingOut": "PR = 6y = 3(2y) = 3QS"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "S": [1.0, 1.0],
          "R": [7.0, 1.0],
          "P": [3.0, 4.5],
          "Q": [9.0, 4.5],
          "T": [5.0, 2.75]
        },
        "segments": [
          { "from": "P", "to": "Q", "marks": 1 },
          { "from": "S", "to": "R", "marks": 1 },
          { "from": "P", "to": "S", "marks": 2 },
          { "from": "Q", "to": "R", "marks": 2 },
          { "from": "P", "to": "T", "dashed": true },
          { "from": "T", "to": "R", "dashed": true },
          { "from": "Q", "to": "T", "dashed": true },
          { "from": "T", "to": "S", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [3.7, 1.8], "text": "y" },
          { "point": [4.3, 3.7], "text": "3y" },
          { "point": [2.7, 4.7], "text": "P" },
          { "point": [9.3, 4.7], "text": "Q" },
          { "point": [7.3, 0.8], "text": "R" },
          { "point": [0.7, 0.8], "text": "S" },
          { "point": [5.0, 2.4], "text": "T" }
        ]
      }
    }
  },

  // --- Question 9 ---
  {
    "id": "y8-13a-q9",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "In the quadrilateral $WXYZ$, the opposite angles are equal. Let $\\angle W = \\angle Y = \\theta$ and $\\angle X = \\angle Z = \\phi$.",
    "a": "See proofs for parts a and b.",
    "solution": "a) The sum of angles in a quadrilateral is $360^\\circ$, so $2\\theta + 2\\phi = 360^\\circ \\implies \\theta + \\phi = 180^\\circ$.\nb) Since adjacent angles sum to $180^\\circ$ (co-interior angles), opposite sides are parallel, hence $WXYZ$ is a parallelogram.",
    "t": "Parallelograms and their properties",
    "hint": "Use the quadrilateral angle sum and co-interior angle tests.",
    "solutionSteps": [
      {
        "explanation": "Apply the angle sum of a quadrilateral.",
        "workingOut": "\\theta + \\phi + \\theta + \\phi = 360^\\circ"
      },
      {
        "explanation": "Simplify and solve for the sum of adjacent angles.",
        "workingOut": "2(\\theta + \\phi) = 360^\\circ \\implies \\theta + \\phi = 180^\\circ"
      },
      {
        "explanation": "Use supplementary co-interior angles to prove parallel sides.",
        "workingOut": "\\text{co-interior angles add to } 180^\\circ \\implies WX \\parallel YZ \\text{ and } XY \\parallel WZ"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "W": [1.5, 1.0],
          "Z": [7.5, 1.0],
          "X": [3.5, 4.5],
          "Y": [9.5, 4.5]
        },
        "segments": [
          { "from": "X", "to": "Y" },
          { "from": "W", "to": "Z" },
          { "from": "X", "to": "W" },
          { "from": "Y", "to": "Z" }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [2.2, 1.4], "text": "θ" },
          { "point": [8.8, 4.1], "text": "θ" },
          { "point": [4.2, 4.1], "text": "φ" },
          { "point": [6.8, 1.4], "text": "φ" },
          { "point": [1.1, 0.8], "text": "W" },
          { "point": [3.1, 4.7], "text": "X" },
          { "point": [9.8, 4.7], "text": "Y" },
          { "point": [7.8, 0.8], "text": "Z" }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y8-13a-q9a",
        "type": "teacher_review",
        "question": "a) Use the fact that the angle sum of a quadrilateral is $360^\\circ$ to prove that $\\theta + \\phi = 180^\\circ$.",
        "a": "\\angle W + \\angle X + \\angle Y + \\angle Z = 360^\\circ \\implies 2\\theta + 2\\phi = 360^\\circ \\implies \\theta + \\phi = 180^\\circ."
      },
      {
        "id": "y8-13a-q9b",
        "type": "teacher_review",
        "question": "b) Hence prove that $WXYZ$ is a parallelogram.",
        "a": "Since $\\angle W + \\angle X = 180^\\circ$, co-interior angles are supplementary, so $XY \\parallel WZ$. Similarly, since $\\angle W + \\angle Z = 180^\\circ$, $WX \\parallel YZ$. Since both pairs of opposite sides are parallel, $WXYZ$ is a parallelogram."
      }
    ]
  },

  // --- Question 10 ---
  {
    "id": "y8-13a-q10",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "In the quadrilateral $PQRS$, the opposite sides are equal ($PQ = RS$ and $PS = QR$). Join the diagonal $PR$.",
    "a": "See proofs for parts a and b.",
    "solution": "a) $\\triangle PQR \\equiv \\triangle RSP$ by SSS.\nb) Corresponding angles in congruent triangles are equal, so alternate angles are equal $\\implies$ sides are parallel $\\implies$ parallelogram.",
    "t": "Parallelograms and their properties",
    "hint": "Use the SSS congruence test and alternate angle converse.",
    "solutionSteps": [
      {
        "explanation": "Prove congruence of the triangles sharing diagonal $PR$.",
        "workingOut": "\\triangle PQR \\equiv \\triangle RSP \\text{ (SSS)}"
      },
      {
        "explanation": "Equate corresponding alternate angles to establish parallel lines.",
        "workingOut": "\\angle QPR = \\angle SRP \\implies PQ \\parallel SR"
      },
      {
        "explanation": "Repeat for the other pair of sides and conclude.",
        "workingOut": "\\angle PRQ = \\angle RPS \\implies PS \\parallel QR \\implies PQRS \\text{ is a parallelogram}"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "S": [1.5, 1.0],
          "R": [7.5, 1.0],
          "P": [3.5, 4.5],
          "Q": [9.5, 4.5]
        },
        "segments": [
          { "from": "P", "to": "Q", "ticks": 2 },
          { "from": "S", "to": "R", "ticks": 2 },
          { "from": "P", "to": "S", "ticks": 1 },
          { "from": "Q", "to": "R", "ticks": 1 },
          { "from": "P", "to": "R", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [3.1, 4.7], "text": "P" },
          { "point": [9.8, 4.7], "text": "Q" },
          { "point": [7.8, 0.8], "text": "R" },
          { "point": [1.1, 0.8], "text": "S" }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y8-13a-q10a",
        "type": "teacher_review",
        "question": "a) Prove that $\\triangle PQR \\equiv \\triangle RSP$.",
        "a": "In $\\triangle PQR$ and $\\triangle RSP$:\n1. $PQ = RS$ (given)\n2. $QR = SP$ (given)\n3. $PR = RP$ (common side)\nTherefore, $\\triangle PQR \\equiv \\triangle RSP$ (SSS)."
      },
      {
        "id": "y8-13a-q10b",
        "type": "teacher_review",
        "question": "b) Hence show that $PQ \\parallel SR$ and $PS \\parallel QR$, and hence that $PQRS$ is a parallelogram.",
        "a": "Since $\\triangle PQR \\equiv \\triangle RSP$, corresponding angles are equal: $\\angle QPR = \\angle SRP$. Since these alternate interior angles are equal, $PQ \\parallel SR$. Similarly, $\\angle PRQ = \\angle RPS \\implies PS \\parallel QR$. Since both pairs of opposite sides are parallel, $PQRS$ is a parallelogram."
      }
    ]
  },

  // --- Question 12 ---
  {
    "id": "y8-13a-q12",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "In the diagram, $PQRS$ is a parallelogram. The bisector of $\\angle P$ meets $QR$ at $M$. The bisector of $\\angle R$ meets $PS$ at $N$. Prove $PM$ is parallel to $RN$.",
    "a": "Since opposite angles are equal, their halves are equal $\\implies \\angle QPM = \\angle SRN$. Since opposite sides are parallel, alternate angles are equal $\\implies \\angle MPS = \\angle PMQ$. Thus $\\angle PMQ = \\angle SRN \\implies PM \\parallel RN$.",
    "solution": "1. In parallelogram $PQRS$, opposite angles are equal, so $\\angle QPS = \\angle QRS$.\n2. Since $PM$ and $RN$ bisect these angles, $\\angle QPM = \\angle MPS = \\alpha$ and $\\angle QRN = \\angle NRS = \\phi$, where $\\alpha = \\phi$.\n3. Since $QR \\parallel PS$, the alternate interior angle to $\\angle MPS$ is $\\angle PMQ$. Thus $\\angle PMQ = \\angle MPS = \\alpha$.\n4. Therefore, $\\angle PMQ = \\angle NRS = \\alpha$. Since these are corresponding angles for lines $PM$ and $RN$ with transversal $QS$ (or alternate angles depending on geometry), we have $PM \\parallel RN$.",
    "t": "Parallelograms and their properties",
    "hint": "Halves of equal opposite angles are equal. Relate alternate and corresponding angles.",
    "solutionSteps": [
      {
        "explanation": "Identify equal opposite angles and their bisectors.",
        "workingOut": "\\angle QPS = \\angle QRS \\implies \\angle MPS = \\angle NRS"
      },
      {
        "explanation": "Use parallel lines alternate interior angle property.",
        "workingOut": "\\angle PMQ = \\angle MPS \\text{ (alternate interior, } QR \\parallel PS)"
      },
      {
        "explanation": "Equate the angles and conclude lines are parallel.",
        "workingOut": "\\angle PMQ = \\angle NRS \\implies PM \\parallel RN \\text{ (alternate interior / corresponding angles equal)}"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "P": [1.5, 1.0],
          "S": [7.5, 1.0],
          "Q": [3.5, 4.5],
          "R": [9.5, 4.5],
          "M": [7.5, 4.5],
          "N": [3.5, 1.0]
        },
        "segments": [
          { "from": "Q", "to": "R", "marks": 1 },
          { "from": "P", "to": "S", "marks": 1 },
          { "from": "Q", "to": "P", "marks": 2 },
          { "from": "R", "to": "S", "marks": 2 },
          { "from": "P", "to": "M", "dashed": true },
          { "from": "N", "to": "R", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [2.1, 1.5], "text": "α" },
          { "point": [2.7, 1.2], "text": "α" },
          { "point": [8.9, 4.0], "text": "φ" },
          { "point": [8.3, 4.3], "text": "φ" },
          { "point": [1.1, 0.8], "text": "P" },
          { "point": [3.1, 4.7], "text": "Q" },
          { "point": [7.5, 4.8], "text": "M" },
          { "point": [9.8, 4.7], "text": "R" },
          { "point": [3.5, 0.7], "text": "N" },
          { "point": [7.8, 0.8], "text": "S" }
        ]
      }
    }
  },

  // --- Question 13 ---
  {
    "id": "y8-13a-q13",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "In the diagram, $EFGH$ is a parallelogram. $EG$ is a diagonal, and $X$ and $Y$ are points on $EG$ such that $EX = GY$. Prove that $XFHY$ is a parallelogram.",
    "a": "Prove using congruent triangles: $\\triangle EXF \\equiv \\triangle GYH$ by SAS $\\implies XF = YH$, and $\\triangle EXH \\equiv \\triangle GYF$ by SAS $\\implies XH = YF$.",
    "solution": "1. In $\\triangle EXF$ and $\\triangle GYH$:\n   - $EX = GY$ (given)\n   - $EF = GH$ (opposite sides of parallelogram $EFGH$)\n   - $\\angle XEF = \\angle YGH$ (alternate interior angles, $EF \\parallel GH$)\n   Therefore, $\\triangle EXF \\equiv \\triangle GYH$ (SAS) $\\implies XF = YH$.\n2. Similarly, in $\\triangle EXH$ and $\\triangle GYF$:\n   - $EX = GY$ (given)\n   - $EH = GF$ (opposite sides of parallelogram $EFGH$)\n   - $\\angle XEH = \\angle YGF$ (alternate interior angles, $EH \\parallel GF$)\n   Therefore, $\\triangle EXH \\equiv \\triangle GYF$ (SAS) $\\implies XH = YF$.\n3. Since opposite sides of the quadrilateral $XFHY$ are equal ($XF = YH$ and $XH = YF$), $XFHY$ is a parallelogram.",
    "t": "Parallelograms and their properties",
    "hint": "Show that $\\triangle EXF \\equiv \\triangle GYH$ and $\\triangle EXH \\equiv \\triangle GYF$ to prove opposite sides are equal.",
    "solutionSteps": [
      {
        "explanation": "Prove congruence of the first pair of triangles.",
        "workingOut": "\\triangle EXF \\equiv \\triangle GYH \\text{ (SAS)} \\implies XF = YH"
      },
      {
        "explanation": "Prove congruence of the second pair of triangles.",
        "workingOut": "\\triangle EXH \\equiv \\triangle GYF \\text{ (SAS)} \\implies XH = YF"
      },
      {
        "explanation": "Conclude that the quadrilateral is a parallelogram since opposite sides are equal.",
        "workingOut": "XF = YH \\text{ and } XH = YF \\implies XFHY \\text{ is a parallelogram}"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "H": [1.5, 1.0],
          "G": [7.5, 1.0],
          "E": [3.5, 4.5],
          "F": [9.5, 4.5],
          "X": [4.5, 3.625],
          "Y": [6.5, 1.875]
        },
        "segments": [
          { "from": "E", "to": "F", "marks": 1 },
          { "from": "H", "to": "G", "marks": 1 },
          { "from": "E", "to": "H", "marks": 2 },
          { "from": "F", "to": "G", "marks": 2 },
          { "from": "E", "to": "X", "dashed": true },
          { "from": "X", "to": "Y", "dashed": true },
          { "from": "Y", "to": "G", "dashed": true },
          { "from": "X", "to": "F", "dashed": true },
          { "from": "F", "to": "Y", "dashed": true },
          { "from": "Y", "to": "H", "dashed": true },
          { "from": "H", "to": "X", "dashed": true }
        ],
        "angles": [],
        "sideLabels": [],
        "freeLabels": [
          { "point": [3.1, 4.7], "text": "E" },
          { "point": [9.8, 4.7], "text": "F" },
          { "point": [7.8, 0.8], "text": "G" },
          { "point": [1.1, 0.8], "text": "H" },
          { "point": [4.3, 3.9], "text": "X" },
          { "point": [6.7, 2.1], "text": "Y" }
        ]
      }
    }
  }
];
