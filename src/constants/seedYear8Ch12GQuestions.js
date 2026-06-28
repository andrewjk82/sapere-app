export const Y8_CH12G_QUESTIONS = [
// --- Question 1 (Split, Easy) ---
{
  "id": "y8-12g-q1a",
  "type": "multiple_choice",
  "difficulty": "easy",
  "question": "Which of the following triangles is congruent to $\\triangle ABC$ with side lengths $AB = 5\\text{ cm}$, $BC = 6\\text{ cm}$, and $AC = 7\\text{ cm}$?",
  "a": "0",
  "opts": [
  "$\\triangle DEF$ with $DE = 6\\text{ cm}$, $EF = 7\\text{ cm}$, and $DF = 5\\text{ cm}$",
  "$\\triangle DEF$ with $DE = 5\\text{ cm}$, $EF = 5\\text{ cm}$, and $DF = 7\\text{ cm}$",
  "$\\triangle DEF$ with $DE = 6\\text{ cm}$, $EF = 6\\text{ cm}$, and $DF = 7\\text{ cm}$",
  "$\\triangle DEF$ with $DE = 5\\text{ cm}$, $EF = 6\\text{ cm}$, and $DF = 8\\text{ cm}$"],

  "solution": "Two figures are congruent if they have the exact same shape and size. \n- The original triangle has side lengths of $5\\text{ cm}$, $6\\text{ cm}$, and $7\\text{ cm}$.\n- For another triangle to be congruent, it must also have side lengths of $5\\text{ cm}$, $6\\text{ cm}$, and $7\\text{ cm}$ (regardless of order or orientation).\n- $\\triangle DEF$ with sides $6\\text{ cm}$, $7\\text{ cm}$, and $5\\text{ cm}$ meets this requirement (SSS test).\n\nTherefore, this triangle is congruent to $\\triangle ABC$.",
  "t": "Review",
  "hint": "Congruent triangles must have the exact same three side lengths.",
  "solutionSteps": [
  {
    "explanation": "Compare the side lengths of the given triangles.",
    "workingOut": "\\text{Original sides: } 5\\text{ cm}, 6\\text{ cm}, 7\\text{ cm}"
  },
  {
    "explanation": "Identify the option with the same set of side lengths.",
    "workingOut": "\\text{Congruent sides: } 6\\text{ cm}, 7\\text{ cm}, 5\\text{ cm}"
  }],

  "graphData": null
},
{
  "id": "y8-12g-q1b",
  "type": "multiple_choice",
  "difficulty": "easy",
  "question": "Which of the following rectangles is congruent to a rectangle with dimensions $8\\text{ cm} \\times 5\\text{ cm}$?",
  "a": "0",
  "opts": [
  "A rectangle with dimensions $5\\text{ cm} \\times 8\\text{ cm}$",
  "A rectangle with dimensions $8\\text{ cm} \\times 4\\text{ cm}$",
  "A rectangle with dimensions $10\\text{ cm} \\times 4\\text{ cm}$",
  "A rectangle with dimensions $6\\text{ cm} \\times 7\\text{ cm}$"],

  "solution": "A rectangle is defined by its length and width. \n- The original rectangle is $8\\text{ cm}$ by $5\\text{ cm}$.\n- A congruent rectangle must also have sides of $8\\text{ cm}$ and $5\\text{ cm}$, though it may be rotated to be $5\\text{ cm}$ by $8\\text{ cm}$.\n\nTherefore, the rectangle with dimensions $5\\text{ cm} \\times 8\\text{ cm}$ is congruent.",
  "t": "Review",
  "hint": "Check which rectangle has the same pair of dimensions, even if rotated.",
  "solutionSteps": [
  {
    "explanation": "Identify the side lengths of the congruent rectangle.",
    "workingOut": "\\text{Dimensions: } 8\\text{ cm} \\text{ and } 5\\text{ cm}"
  }],

  "graphData": null
},
{
  "id": "y8-12g-q1c",
  "type": "multiple_choice",
  "difficulty": "easy",
  "question": "Which of the following shapes is congruent to a regular hexagon with side length $4\\text{ cm}$ split by a diagonal line connecting opposite vertices?",
  "a": "0",
  "opts": [
  "A regular hexagon with side length $4\\text{ cm}$ split by a diagonal line (rotated by $90^\\circ$)",
  "A regular hexagon with side length $4\\text{ cm}$ split by a line connecting midpoints of opposite sides",
  "A regular pentagon with side length $4\\text{ cm}$ split by a diagonal line",
  "A regular hexagon with side length $5\\text{ cm}$ split by a diagonal line"],

  "solution": "For two split shapes to be congruent, the outer boundaries must be congruent, and the dividing line must be placed in the corresponding position. \n- The original shape is a regular hexagon of side length $4\\text{ cm}$ split by a diagonal through opposite vertices.\n- Rotating this shape by $90^\\circ$ keeps it congruent.\n- Splitting a hexagon through midpoints of sides or using a pentagon results in non-congruent shapes.\n\nTherefore, the rotated regular hexagon with the same side length and diagonal split is congruent.",
  "t": "Review",
  "hint": "Rotation does not change the congruence of a shape. Look for the same outer shape and split line.",
  "solutionSteps": [
  {
    "explanation": "Check shape, dimensions, and dividing line alignment.",
    "workingOut": "\\text{Regular hexagon}, \\text{ side } 4\\text{ cm}, \\text{ diagonal split}"
  }],

  "graphData": null
},
// --- Question 2 (Split, Easy) ---
{
  "id": "y8-12g-q2a",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching vertex for $A$.",
  "a": "V",
  "solution": "By comparing the shapes and orientations of the congruent pentagons $ABCDE$ and $VWXYZ$:\n- Vertex $A$ is the sharpest corner connecting the shortest side $EA$ and the medium side $AB$.\n- In the second pentagon, the corresponding vertex connecting the shortest side $YZ$ and medium side $ZV$ is $V$.\n\nTherefore, $A \\longleftrightarrow V$.",
  "t": "Review",
  "hint": "Look at the sharpest corner of both shapes.",
  "solutionSteps": [
  {
    "explanation": "Identify the corresponding vertex on the congruent shape.",
    "workingOut": "A \\longleftrightarrow V"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
{
  "id": "y8-12g-q2b",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching vertex for $B$.",
  "a": "W",
  "solution": "By matching corresponding parts of the two pentagons:\n- Vertex $B$ connects the medium side $AB$ and the long side $BC$.\n- In the rotated pentagon, the vertex connecting the corresponding medium side $ZV$ and long side $VW$ is $W$.\n\nTherefore, $B \\longleftrightarrow W$.",
  "t": "Review",
  "hint": "Identify the vertex that corresponds to $B$ in the second pentagon.",
  "solutionSteps": [
  {
    "explanation": "Match corresponding vertex based on side lengths.",
    "workingOut": "B \\longleftrightarrow W"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
{
  "id": "y8-12g-q2c",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching vertex for $C$.",
  "a": "X",
  "solution": "Matching corresponding parts:\n- Vertex $C$ is between side $BC$ and side $CD$.\n- In the second pentagon, the corresponding vertex is $X$.\n\nTherefore, $C \\longleftrightarrow X$.",
  "t": "Review",
  "hint": "Find the vertex between the two longest sides.",
  "solutionSteps": [
  {
    "explanation": "Identify the corresponding vertex.",
    "workingOut": "C \\longleftrightarrow X"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
{
  "id": "y8-12g-q2d",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching vertex for $D$.",
  "a": "Y",
  "solution": "Matching corresponding parts:\n- Vertex $D$ connects the long side $CD$ and the flat side $DE$.\n- In the second pentagon, the corresponding vertex connecting $WX$ and $XY$ is $Y$.\n\nTherefore, $D \\longleftrightarrow Y$.",
  "t": "Review",
  "hint": "Find the vertex corresponding to $D$ on the second shape.",
  "solutionSteps": [
  {
    "explanation": "Identify the corresponding vertex.",
    "workingOut": "D \\longleftrightarrow Y"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
{
  "id": "y8-12g-q2e",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching vertex for $E$.",
  "a": "Z",
  "solution": "Matching corresponding parts:\n- Vertex $E$ is between side $DE$ and the shortest side $EA$.\n- In the second pentagon, the corresponding vertex between $YZ$ and $ZV$ is $Z$.\n\nTherefore, $E \\longleftrightarrow Z$.",
  "t": "Review",
  "hint": "Find the vertex connecting the base side and the shortest side.",
  "solutionSteps": [
  {
    "explanation": "Identify the corresponding vertex.",
    "workingOut": "E \\longleftrightarrow Z"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
{
  "id": "y8-12g-q2f",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching side for $AB$.",
  "a": "VW",
  "solution": "By matching the vertices of the side $AB$:\n- $A \\longleftrightarrow V$\n- $B \\longleftrightarrow W$\n\nTherefore, side $AB$ matches side $VW$.",
  "t": "Review",
  "hint": "Match the individual vertices of the segment.",
  "solutionSteps": [
  {
    "explanation": "Find corresponding vertices for the endpoints A and B.",
    "workingOut": "A \\longleftrightarrow V, \\quad B \\longleftrightarrow W \\implies AB \\longleftrightarrow VW"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
{
  "id": "y8-12g-q2g",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching side for $CD$.",
  "a": "XY",
  "solution": "By matching the endpoints of side $CD$:\n- $C \\longleftrightarrow X$\n- $D \\longleftrightarrow Y$\n\nTherefore, side $CD$ matches side $XY$.",
  "t": "Review",
  "hint": "Match endpoints $C$ and $D$ to the second pentagon.",
  "solutionSteps": [
  {
    "explanation": "Find corresponding endpoints.",
    "workingOut": "C \\longleftrightarrow X, \\quad D \\longleftrightarrow Y \\implies CD \\longleftrightarrow XY"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
{
  "id": "y8-12g-q2h",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching side for $DE$.",
  "a": "YZ",
  "solution": "By matching endpoints:\n- $D \\longleftrightarrow Y$\n- $E \\longleftrightarrow Z$\n\nTherefore, side $DE$ matches side $YZ$.",
  "t": "Review",
  "hint": "Match $D$ and $E$ to find the corresponding segment.",
  "solutionSteps": [
  {
    "explanation": "Match endpoints.",
    "workingOut": "D \\longleftrightarrow Y, \\quad E \\longleftrightarrow Z \\implies DE \\longleftrightarrow YZ"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
{
  "id": "y8-12g-q2i",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching side for the diagonal $AD$.",
  "a": "VY",
  "solution": "By matching the endpoints of the diagonal $AD$:\n- $A \\longleftrightarrow V$\n- $D \\longleftrightarrow Y$\n\nTherefore, diagonal $AD$ matches diagonal $VY$.",
  "t": "Review",
  "hint": "Find the diagonal in the second pentagon that connects the vertices corresponding to $A$ and $D$.",
  "solutionSteps": [
  {
    "explanation": "Match endpoints A and D.",
    "workingOut": "A \\longleftrightarrow V, \\quad D \\longleftrightarrow Y \\implies AD \\longleftrightarrow VY"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
{
  "id": "y8-12g-q2j",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching angle for $\\angle ABC$. (Write only the letters of the angle, e.g. VWX)",
  "a": "VWX",
  "solution": "By matching the three vertices of $\\angle ABC$ in order:\n- $A \\longleftrightarrow V$\n- $B \\longleftrightarrow W$\n- $C \\longleftrightarrow X$\n\nTherefore, $\\angle ABC \\longleftrightarrow \\angle VWX$.",
  "t": "Review",
  "hint": "Match the three vertices $A$, $B$, and $C$ in order to find the corresponding angle.",
  "solutionSteps": [
  {
    "explanation": "Match vertices in order.",
    "workingOut": "A \\to V, \\quad B \\to W, \\quad C \\to X \\implies \\angle ABC \\longleftrightarrow \\angle VWX"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
{
  "id": "y8-12g-q2k",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching angle for $\\angle BCD$. (Write only the letters of the angle, e.g. WXY)",
  "a": "WXY",
  "solution": "By matching the three vertices in order:\n- $B \\longleftrightarrow W$\n- $C \\longleftrightarrow X$\n- $D \\longleftrightarrow Y$\n\nTherefore, $\\angle BCD \\longleftrightarrow \\angle WXY$.",
  "t": "Review",
  "hint": "Match the vertices $B$, $C$, and $D$ in order to find the corresponding angle.",
  "solutionSteps": [
  {
    "explanation": "Match vertices in order.",
    "workingOut": "B \\to W, \\quad C \\to X, \\quad D \\to Y \\implies \\angle BCD \\longleftrightarrow \\angle WXY"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
{
  "id": "y8-12g-q2l",
  "type": "short_answer",
  "difficulty": "easy",
  "question": "Refer to the two congruent pentagons $ABCDE$ and $VWXYZ$ shown in the diagram. Find the matching angle for $\\angle ADE$. (Write only the letters of the angle, e.g. VYZ)",
  "a": "VYZ",
  "solution": "By matching the three vertices in order:\n- $A \\longleftrightarrow V$\n- $D \\longleftrightarrow Y$\n- $E \\longleftrightarrow Z$\n\nTherefore, $\\angle ADE \\longleftrightarrow \\angle VYZ$.",
  "t": "Review",
  "hint": "Match the vertices $A$, $D$, and $E$ in order to find the corresponding angle.",
  "solutionSteps": [
  {
    "explanation": "Match vertices in order.",
    "workingOut": "A \\to V, \\quad D \\to Y, \\quad E \\to Z \\implies \\angle ADE \\longleftrightarrow \\angle VYZ"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [1, 4], "B": [3, 5], "C": [5, 3], "D": [4, 1], "E": [2, 1],
        "V": [9, 3], "W": [10, 5], "X": [8, 7], "Y": [6, 6], "Z": [6, 4]
      },
      "segments": [
      { "from": "A", "to": "B" }, { "from": "B", "to": "C" }, { "from": "C", "to": "D" }, { "from": "D", "to": "E" }, { "from": "E", "to": "A" }, { "from": "A", "to": "D", "dashed": true },
      { "from": "V", "to": "W" }, { "from": "W", "to": "X" }, { "from": "X", "to": "Y" }, { "from": "Y", "to": "Z" }, { "from": "Z", "to": "V" }, { "from": "V", "to": "Y", "dashed": true }],

      "angles": [],
      "sideLabels": []
    }
  }
},
// --- Question 3 (Split, Medium) ---
{
  "id": "y8-12g-q3a",
  "type": "multiple_choice",
  "difficulty": "medium",
  "question": "Are these two triangles congruent? If so, choose the correct congruence statement.\n\n- Triangle 1: $\\triangle ABC$ with $\\angle A = 55^\\circ$, $\\angle B = 65^\\circ$, and $AB = 10\\text{ cm}$.\n- Triangle 2: $\\triangle DEF$ with $\\angle D = 55^\\circ$, $\\angle E = 65^\\circ$, and $EF = 10\\text{ cm}$.",
  "a": "0",
  "opts": [
  "Not congruent",
  "$\\triangle ABC \\equiv \\triangle DEF$ (ASA)",
  "$\\triangle ABC \\equiv \\triangle DFE$ (SAS)",
  "$\\triangle ABC \\equiv \\triangle EDF$ (AAS)"],

  "solution": "Let's check the placement of the sides relative to the angles:\n- In $\\triangle ABC$, the side $AB = 10\\text{ cm}$ is between the two angles $\\angle A = 55^\\circ$ and $\\angle B = 65^\\circ$ (it is the included side).\n- In $\\triangle DEF$, the side $EF = 10\\text{ cm}$ is opposite the angle $\\angle D = 55^\\circ$ (it is not the included side between $55^\\circ$ and $65^\\circ$).\n- Since the corresponding sides are not in the same position relative to the angles, the triangles are not congruent.\n\nTherefore, they are not congruent.",
  "t": "Review",
  "hint": "Check if the side of length $10\\text{ cm}$ is the included side between the two angles in both triangles.",
  "solutionSteps": [
  {
    "explanation": "Check if the $10\\text{ cm}$ side is included between $55^\\circ$ and $65^\\circ$ in $\\triangle ABC$.",
    "workingOut": "\\text{Included side: } AB = 10\\text{ cm}"
  },
  {
    "explanation": "Check if the $10\\text{ cm}$ side is included between $55^\\circ$ and $65^\\circ$ in $\\triangle DEF$.",
    "workingOut": "\\text{Included side is } DE, \\text{ but we are given } EF = 10\\text{ cm} \\text{ (opposite } 55^\\circ\\text{)}"
  }],

  "graphData": null
},
{
  "id": "y8-12g-q3b",
  "type": "multiple_choice",
  "difficulty": "medium",
  "question": "Are these two triangles congruent? If so, choose the correct congruence statement.\n\n- Triangle 1: $\\triangle ABC$ right-angled at $B$ ($\\angle B = 90^\\circ$), with $AB = 8\\text{ cm}$ and $BC = 15\\text{ cm}$.\n- Triangle 2: $\\triangle XYZ$ right-angled at $Y$ ($\\angle Y = 90^\\circ$), with $XY = 15\\text{ cm}$ and $YZ = 8\\text{ cm}$.",
  "a": "0",
  "opts": [
  "$\\triangle ABC \\equiv \\triangle ZYX$ (SAS)",
  "$\\triangle ABC \\equiv \\triangle XYZ$ (RHS)",
  "$\\triangle ABC \\equiv \\triangle ZYX$ (RHS)",
  "Not congruent"],

  "solution": "Let's check the given components:\n- Both triangles have a right angle: $\\angle B = 90^\\circ$ and $\\angle Y = 90^\\circ$.\n- Two sides forming the right angle are equal:\n  - $AB = YZ = 8\\text{ cm}$\n  - $BC = XY = 15\\text{ cm}$\n- Since two sides and the included angle (the right angle) are equal, the triangles are congruent by SAS (Side-Angle-Side).\n- The matching of vertices is:\n  - $B \\longleftrightarrow Y$ (right angles)\n  - $A \\longleftrightarrow Z$ (opposite the $15\\text{ cm}$ side)\n  - $C \\longleftrightarrow X$ (opposite the $8\\text{ cm}$ side)\n  So $\\triangle ABC \\equiv \\triangle ZYX$.\n\nTherefore, the correct congruence statement is $\\triangle ABC \\equiv \\triangle ZYX$ (SAS).",
  "t": "Review",
  "hint": "Both triangles have two known side lengths of $8\\text{ cm}$ and $15\\text{ cm}$ with a $90^\\circ$ angle in between them.",
  "solutionSteps": [
  {
    "explanation": "Compare the sides and the included angle.",
    "workingOut": "AB = YZ = 8\\text{ cm}, \\quad BC = XY = 15\\text{ cm}, \\quad \\angle B = \\angle Y = 90^\\circ"
  },
  {
    "explanation": "Use SAS test for congruence.",
    "workingOut": "\\triangle ABC \\equiv \\triangle ZYX \\text{ (SAS)}"
  }],

  "graphData": null
},
{
  "id": "y8-12g-q3c",
  "type": "multiple_choice",
  "difficulty": "medium",
  "question": "Are these two triangles congruent? If so, choose the correct congruence statement.\n\n- Triangle 1: $\\triangle ABC$ with $\\angle A = 40^\\circ$, $\\angle B = 105^\\circ$, and $AB = 7\\text{ cm}$.\n- Triangle 2: $\\triangle PQR$ with $\\angle P = 35^\\circ$, $\\angle Q = 105^\\circ$, and $QR = 7\\text{ cm}$.",
  "a": "0",
  "opts": [
  "$\\triangle ABC \\equiv \\triangle RQP$ (AAS)",
  "$\\triangle ABC \\equiv \\triangle PQR$ (ASA)",
  "$\\triangle ABC \\equiv \\triangle PRQ$ (ASA)",
  "Not congruent"],

  "solution": "Let's find the angles first:\n- In $\\triangle ABC$, the third angle is:\n  $$\\angle C = 180^\\circ - (40^\\circ + 105^\\circ) = 35^\\circ$$\n- In $\\triangle PQR$, the third angle is:\n  $$\\angle R = 180^\\circ - (35^\\circ + 105^\\circ) = 40^\\circ$$\n- Both triangles have the same angles: $35^\\circ, 40^\\circ, 105^\\circ$.\n- Let's check the placement of the $7\\text{ cm}$ side:\n  - In $\\triangle ABC$, the side $AB = 7\\text{ cm}$ is opposite the angle $\\angle C = 35^\\circ$.\n  - In $\\triangle PQR$, the side $QR = 7\\text{ cm}$ is opposite the angle $\\angle P = 35^\\circ$.\n- Since two angles and a corresponding side are equal in both triangles, they are congruent by AAS (Angle-Angle-Side).\n- Vertex matching:\n  - $A \\longleftrightarrow R$ ($40^\\circ$)\n  - $B \\longleftrightarrow Q$ ($105^\\circ$)\n  - $C \\longleftrightarrow P$ ($35^\\circ$)\n  So $\\triangle ABC \\equiv \\triangle RQP$.\n\nTherefore, the statement is $\\triangle ABC \\equiv \\triangle RQP$ (AAS).",
  "t": "Review",
  "hint": "Find the third angle of both triangles first, then check which side corresponds to the $7\\text{ cm}$ side.",
  "solutionSteps": [
  {
    "explanation": "Find the third angle of both triangles.",
    "workingOut": "\\angle C = 180^\\circ - 145^\\circ = 35^\\circ, \\quad \\angle R = 180^\\circ - 140^\\circ = 40^\\circ"
  },
  {
    "explanation": "Verify if the 7 cm side is opposite the same angle in both.",
    "workingOut": "\\text{In } \\triangle ABC, AB \\text{ is opposite } 35^\\circ. \\text{ In } \\triangle PQR, QR \\text{ is opposite } 35^\\circ."
  },
  {
    "explanation": "Match vertices and state congruence.",
    "workingOut": "\\triangle ABC \\equiv \\triangle RQP \\text{ (AAS)}"
  }],

  "graphData": null
},
{
  "id": "y8-12g-q3d",
  "type": "multiple_choice",
  "difficulty": "medium",
  "question": "Are these two triangles congruent? If so, choose the correct congruence statement.\n\n- Triangle 1: $\\triangle ABC$ with $\\angle A = 50^\\circ$, $\\angle B = 70^\\circ$, and $BC = 9\\text{ cm}$.\n- Triangle 2: $\\triangle DEF$ with $\\angle D = 70^\\circ$, $\\angle E = 50^\\circ$, and $DF = 9\\text{ cm}$.",
  "a": "0",
  "opts": [
  "$\\triangle ABC \\equiv \\triangle EDF$ (AAS)",
  "$\\triangle ABC \\equiv \\triangle DEF$ (ASA)",
  "$\\triangle ABC \\equiv \\triangle FED$ (SAS)",
  "Not congruent"],

  "solution": "Let's analyze the triangles:\n- Angles:\n  - In $\\triangle ABC$: $\\angle A = 50^\\circ$, $\\angle B = 70^\\circ$, so $\\angle C = 180^circ - 120^\\circ = 60^\\circ$.\n  - In $\\triangle DEF$: $\\angle E = 50^\\circ$, $\\angle D = 70^\\circ$, so $\\angle F = 180^\\circ - 120^\\circ = 60^\\circ$.\n- Sides:\n  - In $\\triangle ABC$: $BC = 9\\text{ cm}$ is opposite $\\angle A = 50^\\circ$.\n  - In $\\triangle DEF$: $DF = 9\\text{ cm}$ is opposite $\\angle E = 50^\\circ$.\n- Since they have two equal angles and a corresponding side opposite to the same angle is equal, they are congruent by AAS.\n- Matching vertices:\n  - $A \\longleftrightarrow E$ ($50^\\circ$)\n  - $B \\longleftrightarrow D$ ($70^\\circ$)\n  - $C \\longleftrightarrow F$ ($60^\\circ$)\n  So $\\triangle ABC \\equiv \\triangle EDF$.\n\nTherefore, the statement is $\\triangle ABC \\equiv \\triangle EDF$ (AAS).",
  "t": "Review",
  "hint": "Check the positions of the angles and see if the side of length $9\\text{ cm}$ is opposite the $50^\\circ$ angle in both.",
  "solutionSteps": [
  {
    "explanation": "Compare angles and check side placement.",
    "workingOut": "\\text{In } \\triangle ABC, BC=9 \\text{ is opposite } 50^\\circ. \\text{ In } \\triangle DEF, DF=9 \\text{ is opposite } 50^\\circ."
  },
  {
    "explanation": "Match vertices.",
    "workingOut": "A \\leftrightarrow E, \\quad B \\leftrightarrow D, \\quad C \\leftrightarrow F"
  }],

  "graphData": null
},
// --- Question 4 (Split, Hard) ---
// --- Sub-question a ---
{
  "id": "y8-12g-q4a-x",
  "type": "short_answer",
  "difficulty": "hard",
  "question": "The two triangles in the diagram are congruent. Find the value of $x$.",
  "a": "7",
  "solution": "By identifying corresponding sides in congruent triangles:\n- In the left triangle, the side with a single tick is $AC = 7\\text{ cm}$.\n- In the right triangle, the corresponding side with a single tick is $DE = x$.\n- Since congruent triangles have equal corresponding side lengths:\n  $$x = 7$$",
  "t": "Review",
  "hint": "Look at the side with a single tick mark in both triangles.",
  "solutionSteps": [
  {
    "explanation": "Identify the side corresponding to $x$ in the congruent triangle.",
    "workingOut": "DE \\longleftrightarrow AC"
  },
  {
    "explanation": "Equate the side lengths.",
    "workingOut": "x = 7"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "C": [0, 0], "A": [0, 5], "B": [4, 2],
        "D": [8, 0], "E": [8, 5], "F": [10, 2]
      },
      "segments": [
      { "from": "A", "to": "C", "ticks": 1 }, { "from": "C", "to": "B", "ticks": 2 }, { "from": "A", "to": "B" },
      { "from": "E", "to": "D", "ticks": 1 }, { "from": "D", "to": "F", "ticks": 2 }, { "from": "E", "to": "F" }],

      "angles": [
      { "at": "A", "label": "α" }, { "at": "C", "label": "65°" },
      { "at": "E", "label": "α" }, { "at": "F", "label": "40°" }, { "at": "D", "label": "β" }],

      "sideLabels": [
      { "between": ["A", "C"], "text": "7 cm" }, { "between": ["C", "B"], "text": "y" }, { "between": ["A", "B"], "text": "10 cm" },
      { "between": ["E", "D"], "text": "x" }]

    }
  }
},
{
  "id": "y8-12g-q4a-y",
  "type": "short_answer",
  "difficulty": "hard",
  "question": "The two triangles in the diagram are congruent. Find the value of $y$.",
  "a": "10",
  "solution": "By identifying corresponding sides in congruent triangles:\n- In the left triangle, the side with double ticks is $CB = y$.\n- In the right triangle, the corresponding side with double ticks is $DF$. Since it corresponds to the side of $10\\text{ cm}$ (opposite to angle $\\alpha$)?\n  Wait! Let's check the markings:\n  - Side with double ticks is $CB = y$ in the left triangle.\n  - Side with double ticks is $DF$ in the right triangle.\n  - In the left triangle, the third side (no ticks) is $AB = 10\\text{ cm}$.\n  - In the right triangle, the third side (no ticks) is $EF$. Since they are congruent, $DF$ must match $AB = 10\\text{ cm}$? \n    Wait, in the left triangle, $BC = y$ has double ticks, which matches $DF$ in the right triangle (double ticks). In the left triangle, $AB = 10\\text{ cm}$ has no ticks, which matches $EF$ in the right triangle (no ticks).\n    Wait, if the side with double ticks is congruent to the side with double ticks, then $y$ must match the length of the double ticked side in the second triangle.\n    Let's check the markings in the diagram: the side labeled $10\\text{ cm}$ in the left triangle has no ticks, and $y$ has double ticks. In the right triangle, the double ticked side is $DF$, and the no-tick side is $EF = 10\\text{ cm}$? Yes, so $y = 10\\text{ cm}$.\n\nTherefore, $y = 10$.",
  "t": "Review",
  "hint": "Identify the side corresponding to $y$ (which has double ticks).",
  "solutionSteps": [
  {
    "explanation": "Match the double ticked side with its length from the congruent triangle.",
    "workingOut": "y = 10"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "C": [0, 0], "A": [0, 5], "B": [4, 2],
        "D": [8, 0], "E": [8, 5], "F": [10, 2]
      },
      "segments": [
      { "from": "A", "to": "C", "ticks": 1 }, { "from": "C", "to": "B", "ticks": 2 }, { "from": "A", "to": "B" },
      { "from": "E", "to": "D", "ticks": 1 }, { "from": "D", "to": "F", "ticks": 2 }, { "from": "E", "to": "F" }],

      "angles": [
      { "at": "A", "label": "α" }, { "at": "C", "label": "65°" },
      { "at": "E", "label": "α" }, { "at": "F", "label": "40°" }, { "at": "D", "label": "β" }],

      "sideLabels": [
      { "between": ["A", "C"], "text": "7 cm" }, { "between": ["C", "B"], "text": "y" }, { "between": ["A", "B"], "text": "10 cm" },
      { "between": ["E", "D"], "text": "x" }]

    }
  }
},
{
  "id": "y8-12g-q4a-alpha",
  "type": "short_answer",
  "difficulty": "hard",
  "question": "The two triangles in the diagram are congruent. Find the value of $\\alpha$ in degrees.",
  "a": "75",
  "solution": "To find $\\alpha$:\n1. The angles of the congruent triangles must sum to $180^\\circ$.\n2. From the diagram, we have angles:\n   - $65^\\circ$ (at $C$)\n   - $40^\\circ$ (at $F$)\n3. The third angle in the triangle must be:\n   $$180^\\circ - (65^\\circ + 40^\\circ) = 180^\\circ - 105^\\circ = 75^\\circ$$\n4. Since $\\alpha$ is the angle between the single-tick side and the no-tick side, it corresponds to the $75^\\circ$ angle.\n\nTherefore, $\\alpha = 75^\\circ$.",
  "t": "Review",
  "hint": "The sum of angles in a triangle is $180^\\circ$. Subtract the two known angles ($65^\\circ$ and $40^\\circ$) from $180^\\circ$.",
  "solutionSteps": [
  {
    "explanation": "Use the angle sum of a triangle to find the third angle.",
    "workingOut": "180^\\circ - (65^\\circ + 40^\\circ) = 75^\\circ"
  },
  {
    "explanation": "Match the corresponding angle $\\alpha$.",
    "workingOut": "\\alpha = 75^\\circ"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "C": [0, 0], "A": [0, 5], "B": [4, 2],
        "D": [8, 0], "E": [8, 5], "F": [10, 2]
      },
      "segments": [
      { "from": "A", "to": "C", "ticks": 1 }, { "from": "C", "to": "B", "ticks": 2 }, { "from": "A", "to": "B" },
      { "from": "E", "to": "D", "ticks": 1 }, { "from": "D", "to": "F", "ticks": 2 }, { "from": "E", "to": "F" }],

      "angles": [
      { "at": "A", "label": "α" }, { "at": "C", "label": "65°" },
      { "at": "E", "label": "α" }, { "at": "F", "label": "40°" }, { "at": "D", "label": "β" }],

      "sideLabels": [
      { "between": ["A", "C"], "text": "7 cm" }, { "between": ["C", "B"], "text": "y" }, { "between": ["A", "B"], "text": "10 cm" },
      { "between": ["E", "D"], "text": "x" }]

    }
  }
},
{
  "id": "y8-12g-q4a-beta",
  "type": "short_answer",
  "difficulty": "hard",
  "question": "The two triangles in the diagram are congruent. Find the value of $\\beta$ in degrees.",
  "a": "65",
  "solution": "By matching the angles between congruent triangles:\n- Angle $\\beta$ is opposite the single-tick side in both triangles.\n- In the left triangle, the angle opposite the single-tick side $AC$ is $\\beta$.\n- In the right triangle, the angle opposite the single-tick side $DE$ is $65^\\circ$ (or matches $\\angle C$ which is $65^\\circ$)?\n  Wait, let's look at the angles:\n  - In the left triangle, the angle at $C$ is $65^\\circ$ (between single and double ticks).\n  - In the right triangle, the corresponding angle between single and double ticks is $\\beta$ (at $D$).\n  - Therefore, $\\beta$ must be $65^\\circ$ by congruence.\n\nTherefore, $\\beta = 65^\\circ$.",
  "t": "Review",
  "hint": "Identify the corresponding angle for $\\beta$ in the left triangle (between single and double tick sides).",
  "solutionSteps": [
  {
    "explanation": "Compare the position of angle $\\beta$ between the single-tick and double-tick sides.",
    "workingOut": "\\beta = 65^\\circ"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "C": [0, 0], "A": [0, 5], "B": [4, 2],
        "D": [8, 0], "E": [8, 5], "F": [10, 2]
      },
      "segments": [
      { "from": "A", "to": "C", "ticks": 1 }, { "from": "C", "to": "B", "ticks": 2 }, { "from": "A", "to": "B" },
      { "from": "E", "to": "D", "ticks": 1 }, { "from": "D", "to": "F", "ticks": 2 }, { "from": "E", "to": "F" }],

      "angles": [
      { "at": "A", "label": "α" }, { "at": "C", "label": "65°" },
      { "at": "E", "label": "α" }, { "at": "F", "label": "40°" }, { "at": "D", "label": "β" }],

      "sideLabels": [
      { "between": ["A", "C"], "text": "7 cm" }, { "between": ["C", "B"], "text": "y" }, { "between": ["A", "B"], "text": "10 cm" },
      { "between": ["E", "D"], "text": "x" }]

    }
  }
},
// --- Sub-question c ---
{
  "id": "y8-12g-q4c-x",
  "type": "short_answer",
  "difficulty": "hard",
  "question": "Refer to the given symmetric diagram. Find the value of $x$ in mm.",
  "a": "420",
  "solution": "By symmetry of the isosceles triangle $\\triangle AEB$:\n- $AE = AB = 1200\\text{ mm}$ (single tick marks).\n- $AD = AC$ (double tick marks).\n- Since the entire figure is symmetric about the vertical altitude from $A$, the triangles $\\triangle AED$ and $\\triangle ABC$ are congruent ($\\triangle AED \\equiv \\triangle ABC$).\n- Therefore, the corresponding sides $ED$ and $CB$ are equal:\n  $$x = ED = 420\\text{ mm}$$\n\nTherefore, $x = 420$.",
  "t": "Review",
  "hint": "Use the congruence of the outer triangles $\\triangle AED$ and $\\triangle ABC$.",
  "solutionSteps": [
  {
    "explanation": "State the congruence of the outer triangles by symmetry.",
    "workingOut": "\\triangle AED \\equiv \\triangle ABC"
  },
  {
    "explanation": "Equate corresponding sides.",
    "workingOut": "x = ED = 420\\text{ mm}"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "E": [0, 0], "B": [10, 0], "A": [5, 8.66],
        "D": [3.5, 0], "C": [6.5, 0]
      },
      "segments": [
      { "from": "A", "to": "E", "ticks": 1 }, { "from": "E", "to": "D" }, { "from": "D", "to": "C" },
      { "from": "C", "to": "B" }, { "from": "B", "to": "A", "ticks": 1 },
      { "from": "A", "to": "D", "ticks": 2 }, { "from": "A", "to": "C", "ticks": 2 }],

      "angles": [
      { "at": "E", "label": "60°" }, { "at": "C", "label": "β" }],

      "sideLabels": [
      { "between": ["A", "E"], "text": "1200 mm" },
      { "between": ["D", "C"], "text": "360 mm" },
      { "between": ["C", "B"], "text": "x" }],

      "freeLabels": [
      { "point": [4.4, 7.2], "text": "20°", "italic": false },
      { "point": [5.0, 7.0], "text": "α" },
      { "point": [5.6, 7.2], "text": "20°", "italic": false }]

    }
  }
},
{
  "id": "y8-12g-q4c-alpha",
  "type": "short_answer",
  "difficulty": "hard",
  "question": "Refer to the given symmetric diagram. Find the value of $\\alpha$ in degrees.",
  "a": "20",
  "solution": "To find $\\alpha$:\n1. The large triangle $\\triangle AEB$ is isosceles with $AE = AB$ and base angle $\\angle E = 60^\\circ$. Therefore, it is an equilateral triangle, meaning the total vertex angle $\\angle EAB = 60^\\circ$.\n2. The figure is symmetric, so the left part $\\angle EAD = 20^\\circ$ and the right part $\\angle CAB = 20^\\circ$.\n3. The middle angle $\\alpha$ is:\n   $$\\alpha = 60^\\circ - 20^\\circ - 20^\\circ = 20^\\circ$$\n\nTherefore, $\\alpha = 20^\\circ$.",
  "t": "Review",
  "hint": "Since $\\triangle AEB$ is equilateral, the total angle at $A$ is $60^\\circ$. Subtract the two side angles ($20^\\circ$ each) to find $\\alpha$.",
  "solutionSteps": [
  {
    "explanation": "State the total vertex angle of the equilateral triangle.",
    "workingOut": "\\angle EAB = 60^\\circ"
  },
  {
    "explanation": "Subtract the symmetric outer angles from the total angle.",
    "workingOut": "\\alpha = 60^\\circ - 20^\\circ - 20^\\circ = 20^\\circ"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "E": [0, 0], "B": [10, 0], "A": [5, 8.66],
        "D": [3.5, 0], "C": [6.5, 0]
      },
      "segments": [
      { "from": "A", "to": "E", "ticks": 1 }, { "from": "E", "to": "D" }, { "from": "D", "to": "C" },
      { "from": "C", "to": "B" }, { "from": "B", "to": "A", "ticks": 1 },
      { "from": "A", "to": "D", "ticks": 2 }, { "from": "A", "to": "C", "ticks": 2 }],

      "angles": [
      { "at": "E", "label": "60°" }, { "at": "C", "label": "β" }],

      "sideLabels": [
      { "between": ["A", "E"], "text": "1200 mm" },
      { "between": ["D", "C"], "text": "360 mm" },
      { "between": ["C", "B"], "text": "x" }],

      "freeLabels": [
      { "point": [4.4, 7.2], "text": "20°", "italic": false },
      { "point": [5.0, 7.0], "text": "α" },
      { "point": [5.6, 7.2], "text": "20°", "italic": false }]

    }
  }
},
{
  "id": "y8-12g-q4c-beta",
  "type": "short_answer",
  "difficulty": "hard",
  "question": "Refer to the given symmetric diagram. Find the value of $\\beta$ in degrees.",
  "a": "100",
  "solution": "To find $\\beta$:\n1. Consider $\\triangle ABC$ (or $\\triangle AED$ which is congruent to it).\n2. In $\\triangle ABC$, the angles are:\n   - $\\angle B = 60^\\circ$ (since $\\triangle AEB$ is equilateral)\n   - $\\angle CAB = 20^\\circ$ (by symmetry, equal to $\\angle EAD = 20^\\circ$)\n3. Find the third angle $\\beta = \\angle ACB$:\n   $$\\beta = 180^\\circ - (60^\\circ + 20^\\circ) = 180^\\circ - 80^\\circ = 100^\\circ$$\n\nTherefore, $\\beta = 100^\\circ$.",
  "t": "Review",
  "hint": "Use the angle sum of $\\triangle ABC$ with $\\angle B = 60^\\circ$ and $\\angle CAB = 20^\\circ$.",
  "solutionSteps": [
  {
    "explanation": "Identify the angles inside $\\triangle ABC$.",
    "workingOut": "\\angle B = 60^\\circ, \\quad \\angle CAB = 20^\\circ"
  },
  {
    "explanation": "Subtract the sum from $180^\\circ$.",
    "workingOut": "\\beta = 180^\\circ - (60^\\circ + 20^\\circ) = 100^\\circ"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "E": [0, 0], "B": [10, 0], "A": [5, 8.66],
        "D": [3.5, 0], "C": [6.5, 0]
      },
      "segments": [
      { "from": "A", "to": "E", "ticks": 1 }, { "from": "E", "to": "D" }, { "from": "D", "to": "C" },
      { "from": "C", "to": "B" }, { "from": "B", "to": "A", "ticks": 1 },
      { "from": "A", "to": "D", "ticks": 2 }, { "from": "A", "to": "C", "ticks": 2 }],

      "angles": [
      { "at": "E", "label": "60°" }, { "at": "C", "label": "β" }],

      "sideLabels": [
      { "between": ["A", "E"], "text": "1200 mm" },
      { "between": ["D", "C"], "text": "360 mm" },
      { "between": ["C", "B"], "text": "x" }],

      "freeLabels": [
      { "point": [4.4, 7.2], "text": "20°", "italic": false },
      { "point": [5.0, 7.0], "text": "α" },
      { "point": [5.6, 7.2], "text": "20°", "italic": false }]

    }
  }
},
// --- Sub-question d ---
{
  "id": "y8-12g-q4d-alpha",
  "type": "short_answer",
  "difficulty": "hard",
  "question": "In the given diagram, line $AC$ is parallel to $FE$ ($AC \\parallel FE$) and $\\triangle BFD$ is an equilateral triangle. Find the value of $\\alpha$ in degrees.",
  "a": "60",
  "solution": "To find $\\alpha$:\n1. Since $\\triangle BFD$ is an equilateral triangle (indicated by double ticks on all sides), all of its interior angles are $60^\\circ$:\n   $$\\angle BDF = 60^\\circ$$\n2. Since $AC \\parallel FE$, the alternate interior angle to $\\angle BDF$ is $\\angle CBD = \\alpha$:\n   $$\\alpha = \\angle BDF = 60^\\circ$$\n\nTherefore, $\\alpha = 60^\\circ$.",
  "t": "Review",
  "hint": "The interior angles of an equilateral triangle are all $60^\\circ$. Use alternate interior angles between parallel lines $AC$ and $FE$.",
  "solutionSteps": [
  {
    "explanation": "State the angle of the equilateral triangle.",
    "workingOut": "\\angle BDF = 60^\\circ"
  },
  {
    "explanation": "Use alternate interior angles property.",
    "workingOut": "\\alpha = \\angle BDF = 60^\\circ"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [0, 5], "B": [5, 5], "C": [10, 5],
        "G": [0, 0], "F": [3, 0], "D": [7, 0], "E": [10, 0]
      },
      "segments": [
      { "from": "A", "to": "C", "arrow": true },
      { "from": "G", "to": "E", "arrow": true },
      { "from": "F", "to": "B", "ticks": 2 },
      { "from": "B", "to": "D", "ticks": 2 },
      { "from": "F", "to": "D", "ticks": 2 }],

      "angles": [],
      "sideLabels": [],
      "freeLabels": [
      { "point": [2.2, 0.6], "text": "110°", "italic": false },
      { "point": [4.3, 4.4], "text": "β" },
      { "point": [5.0, 3.8], "text": "γ" },
      { "point": [5.7, 4.4], "text": "α" }]

    }
  }
},
{
  "id": "y8-12g-q4d-beta",
  "type": "short_answer",
  "difficulty": "hard",
  "question": "In the given diagram, line $AC$ is parallel to $FE$ ($AC \\parallel FE$) and $\\triangle BFD$ is an equilateral triangle. If the exterior angle $\\angle GFB = 110^\\circ$, find the value of $\\beta$ in degrees.",
  "a": "70",
  "solution": "To find $\\beta$:\n1. Since $G-F-E$ is a straight line, the adjacent angles must sum to $180^\\circ$:\n   $$\\angle BFE = 180^\\circ - \\angle GFB = 180^\\circ - 110^\\circ = 70^\\circ$$\n2. Since $AC \\parallel FE$, the alternate interior angle to $\\angle BFE$ is $\\angle ABF = \\beta$:\n   $$\\beta = 70^\\circ$$\n\nTherefore, $\\beta = 70^\\circ$.",
  "t": "Review",
  "hint": "Find the angle $\\angle BFE$ using angles on a straight line, and then use alternate angles for $AC \\parallel FE$.",
  "solutionSteps": [
  {
    "explanation": "Find angle BFE on the straight line.",
    "workingOut": "\\angle BFE = 180^\\circ - 110^\\circ = 70^\\circ"
  },
  {
    "explanation": "Use alternate interior angles property.",
    "workingOut": "\\beta = \\angle BFE = 70^\\circ"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [0, 5], "B": [5, 5], "C": [10, 5],
        "G": [0, 0], "F": [3, 0], "D": [7, 0], "E": [10, 0]
      },
      "segments": [
      { "from": "A", "to": "C", "arrow": true },
      { "from": "G", "to": "E", "arrow": true },
      { "from": "F", "to": "B", "ticks": 2 },
      { "from": "B", "to": "D", "ticks": 2 },
      { "from": "F", "to": "D", "ticks": 2 }],

      "angles": [],
      "sideLabels": [],
      "freeLabels": [
      { "point": [2.2, 0.6], "text": "110°", "italic": false },
      { "point": [4.3, 4.4], "text": "β" },
      { "point": [5.0, 3.8], "text": "γ" },
      { "point": [5.7, 4.4], "text": "α" }]

    }
  }
},
{
  "id": "y8-12g-q4d-gamma",
  "type": "short_answer",
  "difficulty": "hard",
  "question": "In the given diagram, line $AC$ is parallel to $FE$ ($AC \\parallel FE$) and $\\triangle BFD$ is an equilateral triangle. Find the value of $\\gamma$ in degrees.",
  "a": "60",
  "solution": "To find $\\gamma$:\n1. Since $\\triangle BFD$ is equilateral, its interior angle $\\angle FBD = 60^\\circ$.\n2. The angle $\\gamma$ is vertically opposite to $\\angle FBD$ at the intersection point $B$:\n   $$\\gamma = \\angle FBD = 60^\\circ$$\n\nTherefore, $\\gamma = 60^\\circ$.",
  "t": "Review",
  "hint": "Look at the vertically opposite angle to the interior angle of the equilateral triangle.",
  "solutionSteps": [
  {
    "explanation": "Identify the interior angle of the equilateral triangle.",
    "workingOut": "\\angle FBD = 60^\\circ"
  },
  {
    "explanation": "Use vertically opposite angles are equal property.",
    "workingOut": "\\gamma = \\angle FBD = 60^\\circ"
  }],

  "graphData": {
    "geometry": {
      "width": 320,
      "points": {
        "A": [0, 5], "B": [5, 5], "C": [10, 5],
        "G": [0, 0], "F": [3, 0], "D": [7, 0], "E": [10, 0]
      },
      "segments": [
      { "from": "A", "to": "C", "arrow": true },
      { "from": "G", "to": "E", "arrow": true },
      { "from": "F", "to": "B", "ticks": 2 },
      { "from": "B", "to": "D", "ticks": 2 },
      { "from": "F", "to": "D", "ticks": 2 }],

      "angles": [],
      "sideLabels": [],
      "freeLabels": [
      { "point": [2.2, 0.6], "text": "110°", "italic": false },
      { "point": [4.3, 4.4], "text": "β" },
      { "point": [5.0, 3.8], "text": "γ" },
      { "point": [5.7, 4.4], "text": "α" }]

    }
  }
}];