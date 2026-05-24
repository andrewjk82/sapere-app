export const Y8_CH12A_QUESTIONS = [
  // --- Question 1 ---
  {
    "id": "y8-12a-q1a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "In the diagram below, which figure is congruent to Figure X?",
    "a": "Figure Z",
    "opts": [
      "Figure Y",
      "Figure Z",
      "Both Figure Y and Figure Z",
      "None of the above"
    ],
    "solution": "1. Figure X is a square of size $3 \\times 3$ with a diagonal.\n2. Figure Y is a smaller square of size $2 \\times 2$, so it is not congruent (different size).\n3. Figure Z is a square of size $3 \\times 3$ with a diagonal. Although the diagonal is drawn along the other direction, a reflection or rotation shows that Figure Z is congruent to Figure X.\nTherefore, Figure Z is congruent to Figure X.",
    "t": "Congruence of figures in the plane",
    "hint": "Congruent figures have the exact same shape and size. They can be rotated or reflected.",
    "solutionSteps": [
      {
        "explanation": "Compare the dimensions of Figure X and Figure Y.",
        "workingOut": "\\text{Size of X} = 3 \\times 3, \\quad \\text{Size of Y} = 2 \\times 2 \\implies \\text{Not congruent}"
      },
      {
        "explanation": "Compare the dimensions of Figure X and Figure Z.",
        "workingOut": "\\text{Size of X} = 3 \\times 3, \\quad \\text{Size of Z} = 3 \\times 3 \\implies \\text{Congruent under rotation/reflection}"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "A1": [0, 3],
          "B1": [3, 3],
          "C1": [3, 0],
          "D1": [0, 0],
          "A2": [4.5, 2.5],
          "B2": [7.0, 2.5],
          "C2": [7.0, 0],
          "D2": [4.5, 0],
          "A3": [8.5, 3],
          "B3": [11.5, 3],
          "C3": [11.5, 0],
          "D3": [8.5, 0]
        },
        "segments": [
          { "from": "A1", "to": "B1" },
          { "from": "B1", "to": "C1" },
          { "from": "C1", "to": "D1" },
          { "from": "D1", "to": "A1" },
          { "from": "A1", "to": "C1" },
          { "from": "A2", "to": "B2" },
          { "from": "B2", "to": "C2" },
          { "from": "C2", "to": "D2" },
          { "from": "D2", "to": "A2" },
          { "from": "A2", "to": "C2" },
          { "from": "A3", "to": "B3" },
          { "from": "B3", "to": "C3" },
          { "from": "C3", "to": "D3" },
          { "from": "D3", "to": "A3" },
          { "from": "B3", "to": "D3" }
        ],
        "freeLabels": [
          { "point": [1.5, -0.5], "text": "Figure X", "italic": false },
          { "point": [5.75, -0.5], "text": "Figure Y", "italic": false },
          { "point": [10.0, -0.5], "text": "Figure Z", "italic": false }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q1b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "In the diagram below, which figure is congruent to Figure P?",
    "a": "Figure R",
    "opts": [
      "Figure Q",
      "Figure R",
      "Both Figure Q and Figure R",
      "None of the above"
    ],
    "solution": "1. Figure P is a right-angled trapezoid with heights of $2$ and base of $3$.\n2. Figure Q is a scaled-down version of the same shape (different size), so it is not congruent.\n3. Figure R is a reflected version of Figure P with the same dimensions ($2$ units height, $3$ units base). Since reflections preserve size and shape, Figure R is congruent to Figure P.",
    "t": "Congruence of figures in the plane",
    "hint": "Check if one figure can be flipped or rotated to perfectly fit over the other without changing size.",
    "solutionSteps": [
      {
        "explanation": "Verify that Figure Q is scaled down.",
        "workingOut": "\\text{Size of Q} < \\text{Size of P}"
      },
      {
        "explanation": "Verify that Figure R has the same side lengths and angles as Figure P under horizontal reflection.",
        "workingOut": "\\text{Figure R} \\cong \\text{Figure P}"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "A1": [0, 0],
          "B1": [3, 0],
          "C1": [2, 2],
          "D1": [0, 2],
          "A2": [4.5, 0],
          "B2": [6.5, 0],
          "C2": [5.8, 1.33],
          "D2": [4.5, 1.33],
          "A3": [8, 0],
          "B3": [11, 0],
          "C3": [11, 2],
          "D3": [9, 2]
        },
        "segments": [
          { "from": "A1", "to": "B1" },
          { "from": "B1", "to": "C1" },
          { "from": "C1", "to": "D1" },
          { "from": "D1", "to": "A1" },
          { "from": "A2", "to": "B2" },
          { "from": "B2", "to": "C2" },
          { "from": "C2", "to": "D2" },
          { "from": "D2", "to": "A2" },
          { "from": "A3", "to": "B3" },
          { "from": "B3", "to": "C3" },
          { "from": "C3", "to": "D3" },
          { "from": "D3", "to": "A3" }
        ],
        "freeLabels": [
          { "point": [1.5, -0.5], "text": "Figure P", "italic": false },
          { "point": [5.5, -0.5], "text": "Figure Q", "italic": false },
          { "point": [9.5, -0.5], "text": "Figure R", "italic": false }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q1c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "In the diagram below, which figure is congruent to Figure U?",
    "a": "Figure V",
    "opts": [
      "Figure V",
      "Figure W",
      "Both Figure V and Figure W",
      "None of the above"
    ],
    "solution": "1. Figure U is a horizontal $4 \\times 2$ rectangle with a diagonal.\n2. Figure V is a vertical $2 \\times 4$ rectangle with a diagonal. It is a $90^\\circ$ rotated version of Figure U, meaning it is congruent.\n3. Figure W is a larger rectangle of size $5 \\times 2.5$, so it is not congruent.\nTherefore, Figure V is congruent to Figure U.",
    "t": "Congruence of figures in the plane",
    "hint": "Check the dimensions (width and height) of the rectangles to see if they are the same.",
    "solutionSteps": [
      {
        "explanation": "Check dimensions of Figure V.",
        "workingOut": "\\text{Dimensions: } 2 \\times 4 \\implies \\text{Congruent to } 4 \\times 2 \\text{ under rotation}"
      },
      {
        "explanation": "Check dimensions of Figure W.",
        "workingOut": "\\text{Dimensions: } 5 \\times 2.5 \\implies \\text{Not congruent}"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": false,
        "points": {
          "A1": [0, 0],
          "B1": [4, 0],
          "C1": [4, 2],
          "D1": [0, 2],
          "A2": [5.5, 0],
          "B2": [7.5, 0],
          "C2": [7.5, 4],
          "D2": [5.5, 4],
          "A3": [9.0, 0],
          "B3": [13.0, 0],
          "C3": [13.0, 2.5],
          "D3": [9.0, 2.5]
        },
        "segments": [
          { "from": "A1", "to": "B1" },
          { "from": "B1", "to": "C1" },
          { "from": "C1", "to": "D1" },
          { "from": "D1", "to": "A1" },
          { "from": "A1", "to": "C1" },
          { "from": "A2", "to": "B2" },
          { "from": "B2", "to": "C2" },
          { "from": "C2", "to": "D2" },
          { "from": "D2", "to": "A2" },
          { "from": "A2", "to": "C2" },
          { "from": "A3", "to": "B3" },
          { "from": "B3", "to": "C3" },
          { "from": "C3", "to": "D3" },
          { "from": "D3", "to": "A3" },
          { "from": "A3", "to": "C3" }
        ],
        "freeLabels": [
          { "point": [2.0, -0.5], "text": "Figure U", "italic": false },
          { "point": [6.5, -0.5], "text": "Figure V", "italic": false },
          { "point": [11.0, -0.5], "text": "Figure W", "italic": false }
        ]
      }
    }
  },

  // --- Question 2 ---
  {
    "id": "y8-12a-q2a",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of vertex $A \\leftrightarrow \\dots$",
    "a": "L",
    "solution": "$$A \\leftrightarrow L$$",
    "t": "Congruence of figures in the plane",
    "hint": "The right figure is a rotated version of the left figure. Identify which vertex matches A.",
    "solutionSteps": [
      {
        "explanation": "Identify the rotation that maps the left figure onto the right figure.",
        "workingOut": "\\text{Rotate counter-clockwise by } 90^\\circ"
      },
      {
        "explanation": "Match vertex A.",
        "workingOut": "A \\leftrightarrow L"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q2b",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of vertex $B \\leftrightarrow \\dots$",
    "a": "K",
    "solution": "$$B \\leftrightarrow K$$",
    "t": "Congruence of figures in the plane",
    "hint": "Identify the corresponding vertex on the right figure for B.",
    "solutionSteps": [
      {
        "explanation": "Find the correspondence under the $90^\\circ$ counter-clockwise rotation.",
        "workingOut": "B \\leftrightarrow K"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q2c",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of vertex $C \\leftrightarrow \\dots$",
    "a": "N",
    "solution": "$$C \\leftrightarrow N$$",
    "t": "Congruence of figures in the plane",
    "hint": "Identify the corresponding vertex on the right figure for C.",
    "solutionSteps": [
      {
        "explanation": "Find the correspondence under the $90^\\circ$ counter-clockwise rotation.",
        "workingOut": "C \\leftrightarrow N"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q2d",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of vertex $D \\leftrightarrow \\dots$",
    "a": "M",
    "solution": "$$D \\leftrightarrow M$$",
    "t": "Congruence of figures in the plane",
    "hint": "Identify the corresponding vertex on the right figure for D.",
    "solutionSteps": [
      {
        "explanation": "Find the correspondence under the $90^\\circ$ counter-clockwise rotation.",
        "workingOut": "D \\leftrightarrow M"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q2e",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of intersection point $E \\leftrightarrow \\dots$",
    "a": "O",
    "solution": "$$E \\leftrightarrow O$$",
    "t": "Congruence of figures in the plane",
    "hint": "E is the intersection of the diagonals. Find the corresponding intersection point.",
    "solutionSteps": [
      {
        "explanation": "Determine which point represents the intersection of the diagonals in the second figure.",
        "workingOut": "E \\leftrightarrow O"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q2f",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of side $AB \\leftrightarrow \\dots$",
    "a": "LK",
    "solution": "$$AB \\leftrightarrow LK$$",
    "t": "Congruence of figures in the plane",
    "hint": "Use the vertex pairings to determine corresponding sides.",
    "solutionSteps": [
      {
        "explanation": "Since $A \\leftrightarrow L$ and $B \\leftrightarrow K$, the side $AB$ corresponds to $LK$.",
        "workingOut": "AB \\leftrightarrow LK"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q2g",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of diagonal $AC \\leftrightarrow \\dots$",
    "a": "LN",
    "solution": "$$AC \\leftrightarrow LN$$",
    "t": "Congruence of figures in the plane",
    "hint": "Use the vertex pairings: $A \\leftrightarrow L$ and $C \\leftrightarrow N$.",
    "solutionSteps": [
      {
        "explanation": "Since $A \\leftrightarrow L$ and $C \\leftrightarrow N$, the diagonal $AC$ corresponds to $LN$.",
        "workingOut": "AC \\leftrightarrow LN"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q2h",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of diagonal $BD \\leftrightarrow \\dots$",
    "a": "KM",
    "solution": "$$BD \\leftrightarrow KM$$",
    "t": "Congruence of figures in the plane",
    "hint": "Use the vertex pairings: $B \\leftrightarrow K$ and $D \\leftrightarrow M$.",
    "solutionSteps": [
      {
        "explanation": "Since $B \\leftrightarrow K$ and $D \\leftrightarrow M$, the diagonal $BD$ corresponds to $KM$.",
        "workingOut": "BD \\leftrightarrow KM"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q2i",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of segment $ED \\leftrightarrow \\dots$",
    "a": "OM",
    "solution": "$$ED \\leftrightarrow OM$$",
    "t": "Congruence of figures in the plane",
    "hint": "Use the vertex pairings: $E \\leftrightarrow O$ and $D \\leftrightarrow M$.",
    "solutionSteps": [
      {
        "explanation": "Since $E \\leftrightarrow O$ and $D \\leftrightarrow M$, the segment $ED$ corresponds to $OM$.",
        "workingOut": "ED \\leftrightarrow OM"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q2j",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of angle $\\angle ABC \\leftrightarrow \\dots$",
    "a": "\\angle LKN",
    "solution": "$$\\angle ABC \\leftrightarrow \\angle LKN$$",
    "t": "Congruence of figures in the plane",
    "hint": "Check the corresponding vertices for $A$, $B$, and $C$.",
    "solutionSteps": [
      {
        "explanation": "Since $A \\leftrightarrow L$, $B \\leftrightarrow K$, and $C \\leftrightarrow N$, the angle $\\angle ABC$ corresponds to $\\angle LKN$.",
        "workingOut": "\\angle ABC \\leftrightarrow \\angle LKN"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q2k",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of angle $\\angle EAB \\leftrightarrow \\dots$",
    "a": "\\angle OLK",
    "solution": "$$\\angle EAB \\leftrightarrow \\angle OLK$$",
    "t": "Congruence of figures in the plane",
    "hint": "Check the corresponding vertices for $E$, $A$, and $B$.",
    "solutionSteps": [
      {
        "explanation": "Since $E \\leftrightarrow O$, $A \\leftrightarrow L$, and $B \\leftrightarrow K$, the angle $\\angle EAB$ corresponds to $\\angle OLK$.",
        "workingOut": "\\angle EAB \\leftrightarrow \\angle OLK"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },
  {
    "id": "y8-12a-q2l",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "The two figures in the diagram are congruent. Complete the pairing of angle $\\angle DAB \\leftrightarrow \\dots$",
    "a": "\\angle MLK",
    "solution": "$$\\angle DAB \\leftrightarrow \\angle MLK$$",
    "t": "Congruence of figures in the plane",
    "hint": "Check the corresponding vertices for $D$, $A$, and $B$.",
    "solutionSteps": [
      {
        "explanation": "Since $D \\leftrightarrow M$, $A \\leftrightarrow L$, and $B \\leftrightarrow K$, the angle $\\angle DAB$ corresponds to $\\angle MLK$.",
        "workingOut": "\\angle DAB \\leftrightarrow \\angle MLK"
      }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "showPointLabels": true,
        "points": {
          "A": [0, 2],
          "B": [3, 2],
          "C": [5.5, 0],
          "D": [0, 0],
          "E": [1.94, 1.29],
          "L": [8, 0],
          "K": [8, 3],
          "N": [10, 5.5],
          "M": [10, 0],
          "O": [8.71, 1.94]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "C" },
          { "from": "B", "to": "D" },
          { "from": "L", "to": "K" },
          { "from": "K", "to": "N" },
          { "from": "N", "to": "M" },
          { "from": "M", "to": "L" },
          { "from": "L", "to": "N" },
          { "from": "K", "to": "M" }
        ]
      }
    }
  },

  // --- Question 3 ---
  {
    "id": "y8-12a-q3a",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "A drawing of a triangle is reflected in a mirror. Is the reflected image congruent to the original drawing?",
    "a": "Yes",
    "opts": [
      "Yes",
      "No",
      "Only if it is an equilateral triangle",
      "Cannot be determined"
    ],
    "solution": "1. Reflection is a rigid transformation (an isometry).\n2. It preserves all distances, side lengths, and angle sizes.\n3. Therefore, the reflected image is always congruent to the original shape.\nThe correct answer is Yes.",
    "t": "Congruence of figures in the plane",
    "hint": "Think about whether reflecting a drawing changes its physical dimensions or shape.",
    "solutionSteps": [
      {
        "explanation": "Identify if reflection changes size or shape.",
        "workingOut": "\\text{Reflection preserves lengths and angles} \\implies \\text{Congruent}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-12a-q3b",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Think of two large oak trees growing in a forest. Are they geometrically congruent?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only if they are of the same species",
      "Only if they have the same age"
    ],
    "solution": "1. Geometrical congruence requires two objects to have the exact same shape and size in every detail.\n2. Natural organisms like trees grow organically and differ in branch structures, leaf counts, and overall shapes.\n3. Therefore, no two natural trees are geometrically congruent.\nThe correct answer is No.",
    "t": "Congruence of figures in the plane",
    "hint": "Do two natural trees ever have the exact same branch-by-branch structure?",
    "solutionSteps": [
      {
        "explanation": "Evaluate the geometric detail of natural living organisms.",
        "workingOut": "\\text{Living things are unique in detail} \\implies \\text{Not geometrically congruent}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-12a-q3c",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Is a scale model of the Eiffel Tower congruent to the actual Eiffel Tower?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only if the scale is 1:100",
      "Only if it is made of the same metal"
    ],
    "solution": "1. A scale model has the same shape but a much smaller size than the actual structure.\n2. Since their sizes are different, they are mathematically similar, but not congruent.\nThe correct answer is No.",
    "t": "Congruence of figures in the plane",
    "hint": "Do the model and the actual tower have the same size?",
    "solutionSteps": [
      {
        "explanation": "Compare the sizes of the scale model and the real object.",
        "workingOut": "\\text{Different size} \\implies \\text{Similar but not congruent}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-12a-q3d",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Two identical manufactured coins of the same denomination are placed side by side. Are they congruent?",
    "a": "Yes",
    "opts": [
      "Yes",
      "No",
      "Only if they are made of gold",
      "Cannot be determined"
    ],
    "solution": "1. Manufactured coins of the same denomination are produced using identical molds.\n2. Therefore, they have the same shape and size.\n3. Hence, they are congruent in a geometric sense.\nThe correct answer is Yes.",
    "t": "Congruence of figures in the plane",
    "hint": "Do manufactured objects of the same specification have the same size and shape?",
    "solutionSteps": [
      {
        "explanation": "Determine if identical manufactured products have the same size and shape.",
        "workingOut": "\\text{Identical mold and specs} \\implies \\text{Congruent}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-12a-q3e",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Think of two clouds of similar shape and size in the sky. Are they geometrically congruent?",
    "a": "No",
    "opts": [
      "Yes",
      "No",
      "Only if they are at the same altitude",
      "Only if they have the same water content"
    ],
    "solution": "1. Geometrical congruence requires absolute precision in matching shapes and dimensions.\n2. Clouds are fluid, amorphous, and constantly shifting, meaning their boundaries and shapes are never exactly identical.\n3. Thus, they cannot be congruent.\nThe correct answer is No.",
    "t": "Congruence of figures in the plane",
    "hint": "Are the shapes of two natural clouds identical down to every mist droplet?",
    "solutionSteps": [
      {
        "explanation": "Check if fluid, irregular shapes can be exactly identical in size and shape.",
        "workingOut": "\\text{Constantly changing and fluid} \\implies \\text{Not congruent}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-12a-q3f",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Are two print copies of the same digital photograph at the same scale congruent?",
    "a": "Yes",
    "opts": [
      "Yes",
      "No",
      "Only if the digital photo is in color",
      "Only if the photo depicts symmetric objects"
    ],
    "solution": "1. Print copies of the same digital file printed at the same scale will have the exact same dimensions and visual contents.\n2. Since they have the same shape and size, they are congruent.\nThe correct answer is Yes.",
    "t": "Congruence of figures in the plane",
    "hint": "Do same-scale prints of the same digital image differ in dimensions or details?",
    "solutionSteps": [
      {
        "explanation": "Determine if equal-scale copies of the same image are identical.",
        "workingOut": "\\text{Same scale, same source} \\implies \\text{Congruent}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-12a-q3g",
    "type": "multiple_choice",
    "difficulty": "easy",
    "question": "Which of the following lower-case letters, apart from 'p' itself, is congruent to 'p' in a standard geometric sans-serif font under reflection?",
    "a": "q",
    "opts": [
      "h",
      "q",
      "u",
      "w"
    ],
    "solution": "1. In a geometric sans-serif font, the letter 'p' consists of a vertical stem and a circular loop on the right.\n2. The letter 'q' is a horizontal reflection of the letter 'p' (with the stem on the right and the loop on the left).\n3. Because reflection is a congruence transformation, 'q' is congruent to 'p'.\nThe correct answer is q.",
    "t": "Congruence of figures in the plane",
    "hint": "Look for a letter that is a flipped version of 'p'.",
    "solutionSteps": [
      {
        "explanation": "Examine the geometric structure of 'p' and the choices.",
        "workingOut": "\\text{'q' is a horizontal reflection of 'p'} \\implies \\text{Congruent}"
      }
    ],
    "graphData": null
  },
  {
    "id": "y8-12a-q3h",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "What digit, apart from '9' itself, is congruent to '9' in a standard sans-serif geometric font under a $180^\\circ$ rotation?",
    "a": "6",
    "solution": "1. In a standard geometric font, the digit '9' consists of a loop at the top and a stem curving downwards.\n2. Rotating the digit '9' by $180^\\circ$ turns the loop to the bottom and the stem upwards, forming the digit '6'.\n3. Since rotation is an isometry (rigid transformation), the digit '6' is congruent to '9'.\nThe correct digit is 6.",
    "t": "Congruence of figures in the plane",
    "hint": "Which digit looks like a rotated version of '9'?",
    "solutionSteps": [
      {
        "explanation": "Evaluate the rotation of digit '9'.",
        "workingOut": "\\text{Rotate '9' by } 180^\\circ \\implies \\text{Digit '6'}"
      }
    ],
    "graphData": null
  }
]
