export const Y8_CH15I_QUESTIONS = [
  // --- Question 1a ---
  {
    "id": "y8-15i-q1a",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find the perimeter and area of the composite figure. It is formed by two isosceles triangles joining at a horizontal line of symmetry. The top triangle has side lengths of 15 cm, and the bottom triangle has side lengths of 20 cm. The horizontal diagonal measures $12 + 12 = 24$ cm.",
    "solution": "### Step 1: Perimeter\nThe perimeter is the sum of the four outer edge lengths.\n$$P = 15 + 15 + 20 + 20 = 70 \\text{ cm}$$\n\n### Step 2: Area\nThe figure is a kite. The area is half the product of the diagonals: $A = \\frac{1}{2}xy$.\nThe horizontal diagonal is $x = 24$ cm.\nWe find the vertical diagonal $y$ by using Pythagoras' theorem on the two triangles.\nTop half vertical height $h_1 = \\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = 9$ cm.\nBottom half vertical height $h_2 = \\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ cm.\nTotal vertical diagonal $y = 9 + 16 = 25$ cm.\n\n$$A = \\frac{1}{2} \\times 24 \\times 25 = 300 \\text{ cm}^2$$\n\n**Answers:** Perimeter: $70$ cm, Area: $300 \\text{ cm}^2$",
    "hint": "Use Pythagoras' theorem to find the vertical heights of the two triangles to determine the total vertical diagonal of the kite.",
    "graphData": {
      "geometry": {
        "width": 250,
        "points": {
          "A": [-12, 0],
          "B": [12, 0],
          "C": [0, 9],
          "D": [0, -16],
          "O": [0, 0]
        },
        "segments": [
          { "from": "A", "to": "C", "ticks": 1 },
          { "from": "B", "to": "C", "ticks": 1 },
          { "from": "A", "to": "D", "ticks": 2 },
          { "from": "B", "to": "D", "ticks": 2 },
          { "from": "A", "to": "B", "dashed": true },
          { "from": "C", "to": "D", "dashed": true }
        ],
        "sideLabels": [
          { "between": ["B", "C"], "text": "15 cm", "side": "out" },
          { "between": ["B", "D"], "text": "20 cm", "side": "out" },
          { "between": ["A", "O"], "text": "12 cm", "side": "out" },
          { "between": ["O", "B"], "text": "12 cm", "side": "out" }
        ],
        "showPointLabels": false
      }
    }
  },
  // --- Question 1b ---
  {
    "id": "y8-15i-q1b",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find the perimeter and area of the rectilinear figure with the following given dimensions, travelling clockwise from the bottom-left corner: up 18 m, right 10 m, down 8 m, right 10 m, down 10 m, and left 20 m back to the start.",
    "solution": "### Step 1: Perimeter\nThe perimeter is the sum of all outer edges.\n$$P = 18 + 10 + 8 + 10 + 10 + 20 = 76 \\text{ m}$$\n\n### Step 2: Area\nWe can split the shape into two rectangles: a left rectangle and a right rectangle.\nThe left rectangle has width 10 m and height 18 m.\nArea 1 = $10 \\times 18 = 180 \\text{ m}^2$.\n\nThe right rectangle has width 10 m and height 10 m.\nArea 2 = $10 \\times 10 = 100 \\text{ m}^2$.\n\nTotal Area = $180 + 100 = 280 \\text{ m}^2$.\n\n**Answers:** Perimeter: $76$ m, Area: $280 \\text{ m}^2$",
    "hint": "Split the composite shape into two simpler rectangles to find the total area.",
    "graphData": {
      "geometry": {
        "width": 250,
        "points": {
          "A": [0, 0],
          "B": [0, 18],
          "C": [10, 18],
          "D": [10, 10],
          "E": [20, 10],
          "F": [20, 0]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "E" },
          { "from": "E", "to": "F" },
          { "from": "F", "to": "A" }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "18 m", "side": "in" },
          { "between": ["B", "C"], "text": "10 m", "side": "in" },
          { "between": ["C", "D"], "text": "8 m", "side": "in" },
          { "between": ["D", "E"], "text": "10 m", "side": "in" },
          { "between": ["E", "F"], "text": "10 m", "side": "in" },
          { "between": ["F", "A"], "text": "20 m", "side": "out" }
        ],
        "showPointLabels": false
      }
    }
  },
  // --- Question 1c ---
  {
    "id": "y8-15i-q1c",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Find the perimeter and area of a parallelogram with a base of 16 mm, a slanted side of 10 mm, and a perpendicular height of 8 mm.",
    "solution": "### Step 1: Perimeter\nThe perimeter is the sum of all four outer edges.\n$$P = 2 \\times (16 + 10) = 2 \\times 26 = 52 \\text{ mm}$$\n\n### Step 2: Area\nThe area of a parallelogram is base multiplied by perpendicular height.\n$$A = b \\times h = 16 \\times 8 = 128 \\text{ mm}^2$$\n\n**Answers:** Perimeter: $52$ mm, Area: $128 \\text{ mm}^2$",
    "hint": "The perimeter uses the slanted side, while the area uses the perpendicular height.",
    "graphData": {
      "geometry": {
        "width": 250,
        "points": {
          "A": [0, 0],
          "B": [16, 0],
          "C": [22, 8],
          "D": [6, 8],
          "E": [6, 0]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "D", "to": "E", "dashed": true }
        ],
        "angles": [
          { "at": "E", "right": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "16 mm", "side": "out" },
          { "between": ["A", "D"], "text": "10 mm", "side": "in" },
          { "between": ["E", "D"], "text": "8 mm", "side": "out" }
        ],
        "showPointLabels": false
      }
    }
  },
  // --- Question 1d ---
  {
    "id": "y8-15i-q1d",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find the perimeter and area of the composite figure consisting of a rectangle with a semicircle on top. The base of the rectangle is 14 cm, and its vertical sides are 20 cm each. Give answers in terms of $\\pi$.",
    "solution": "### Step 1: Perimeter\nThe perimeter consists of the bottom, two vertical sides, and the semicircular arc. The radius of the semicircle is half the base, $r = 7$ cm.\nArc length = $\\frac{1}{2} \\times 2\\pi r = \\pi \\times 7 = 7\\pi$ cm.\n$$P = 14 + 20 + 20 + 7\\pi = 54 + 7\\pi \\text{ cm}$$\n\n### Step 2: Area\nThe area consists of the rectangle and the semicircle.\nArea of rectangle = $14 \\times 20 = 280 \\text{ cm}^2$.\nArea of semicircle = $\\frac{1}{2}\\pi r^2 = \\frac{1}{2}\\pi (7^2) = \\frac{49\\pi}{2} = 24.5\\pi \\text{ cm}^2$.\nTotal Area = $280 + 24.5\\pi \\text{ cm}^2$.\n\n**Answers:** Perimeter: $54 + 7\\pi$ cm, Area: $280 + 24.5\\pi \\text{ cm}^2$",
    "hint": "The diameter of the semicircle is equal to the base of the rectangle.",
    "graphData": {
      "jsxGraph": {
        "width": 250,
        "height": 350,
        "boundingbox": [-5, 30, 20, -5],
        "script": "board.suspendUpdate();\nvar p1 = board.create('point', [0, 0], {visible: false});\nvar p2 = board.create('point', [14, 0], {visible: false});\nvar p3 = board.create('point', [14, 20], {visible: false});\nvar p4 = board.create('point', [0, 20], {visible: false});\nvar center = board.create('point', [7, 20], {visible: false});\nboard.create('segment', [p1, p2], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('segment', [p2, p3], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('segment', [p4, p1], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('arc', [center, p3, p4], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('text', [7, -2, '14 cm'], {anchorX: 'middle', anchorY: 'top', fontSize: 14});\nboard.create('text', [-2, 10, '20 cm'], {anchorX: 'right', anchorY: 'middle', fontSize: 14});\nboard.unsuspendUpdate();"
      }
    }
  },
  // --- Question 1e ---
  {
    "id": "y8-15i-q1e",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find the perimeter and area of a sector of a circle with radius 12 m. A right angle ($90^\\circ$) has been removed, so the angle of the sector is $270^\\circ$. Give answers in terms of $\\pi$.",
    "solution": "### Step 1: Perimeter\nThe perimeter consists of the arc length and two straight radii.\nAngle fraction = $\\frac{270}{360} = \\frac{3}{4}$.\nArc length = $\\frac{3}{4} \\times 2\\pi(12) = 18\\pi$ m.\n$$P = 18\\pi + 12 + 12 = 18\\pi + 24 \\text{ m}$$\n\n### Step 2: Area\nThe area of the sector is a fraction of the full circle's area.\n$$A = \\frac{3}{4} \\times \\pi (12^2) = \\frac{3}{4} \\times 144\\pi = 108\\pi \\text{ m}^2$$\n\n**Answers:** Perimeter: $18\\pi + 24$ m, Area: $108\\pi \\text{ m}^2$",
    "hint": "A sector with a right angle removed represents three-quarters of a full circle.",
    "graphData": {
      "jsxGraph": {
        "width": 250,
        "height": 250,
        "boundingbox": [-15, 15, 15, -15],
        "script": "board.suspendUpdate();\nvar center = board.create('point', [0, 0], {visible: false});\nvar p1 = board.create('point', [12, 0], {visible: false});\nvar p2 = board.create('point', [0, -12], {visible: false});\nboard.create('arc', [center, p1, p2], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('segment', [center, p1], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('segment', [center, p2], {strokeColor: '#000000', strokeWidth: 2});\nvar angle = board.create('angle', [p1, center, p2], {type: 'sector', orthoType: 'square', radius: 2, fillOpacity: 0, label: {offset: [0, 0]}});\nboard.create('text', [6, 1, '12 m'], {anchorX: 'middle', anchorY: 'bottom', fontSize: 14});\nboard.unsuspendUpdate();"
      }
    }
  },
  // --- Question 1f ---
  {
    "id": "y8-15i-q1f",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find the perimeter and area of a shape that is a quarter of an annulus. The inner radius is 10 mm and the width of the band is 6 mm, making the outer radius 16 mm. The angle is $90^\\circ$. Give answers in terms of $\\pi$.",
    "solution": "### Step 1: Perimeter\nThe perimeter consists of the outer arc, the inner arc, and the two straight edges.\nOuter arc = $\\frac{1}{4} \\times 2\\pi(16) = 8\\pi$ mm.\nInner arc = $\\frac{1}{4} \\times 2\\pi(10) = 5\\pi$ mm.\nStraight edges = $6 + 6 = 12$ mm.\n$$P = 8\\pi + 5\\pi + 12 = 13\\pi + 12 \\text{ mm}$$\n\n### Step 2: Area\nThe area is a quarter of the outer circle minus a quarter of the inner circle.\n$$A = \\frac{1}{4}\\pi(16^2) - \\frac{1}{4}\\pi(10^2) = \\frac{1}{4}\\pi(256) - \\frac{1}{4}\\pi(100) = 64\\pi - 25\\pi = 39\\pi \\text{ mm}^2$$\n\n**Answers:** Perimeter: $13\\pi + 12$ mm, Area: $39\\pi \\text{ mm}^2$",
    "hint": "The area is a quarter of the large circle minus a quarter of the smaller inner circle.",
    "graphData": {
      "jsxGraph": {
        "width": 250,
        "height": 250,
        "boundingbox": [-2, 18, 18, -2],
        "script": "board.suspendUpdate();\nvar c = board.create('point', [0, 0], {visible: true, name: 'O', label: {offset: [0, 10]}});\nvar p1 = board.create('point', [10, 0], {visible: false});\nvar p2 = board.create('point', [0, 10], {visible: false});\nvar p3 = board.create('point', [16, 0], {visible: false});\nvar p4 = board.create('point', [0, 16], {visible: false});\nboard.create('arc', [c, p1, p2], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('arc', [c, p3, p4], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('segment', [p1, p3], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('segment', [p2, p4], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('segment', [c, p1], {strokeColor: '#000000', strokeWidth: 1, dash: 2});\nboard.create('segment', [c, p2], {strokeColor: '#000000', strokeWidth: 1, dash: 2});\nboard.create('text', [5, -1, '10 mm'], {anchorX: 'middle', anchorY: 'top', fontSize: 14});\nboard.create('text', [13, -1, '6 mm'], {anchorX: 'middle', anchorY: 'top', fontSize: 14});\nboard.unsuspendUpdate();"
      }
    }
  },
  // --- Question 2a ---
  {
    "id": "y8-15i-q2a",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Find the volume of a rectangular prism with length 8 m, width 5 m, and height 3 m.",
    "solution": "The volume of a rectangular prism is length $\\times$ width $\\times$ height.\n$$V = 8 \\times 5 \\times 3 = 120 \\text{ m}^3$$\n\n**Answer:** $120 \\text{ m}^3$",
    "hint": "Multiply the three dimensions together to find the volume.",
    "graphData": {
      "geometry": {
        "width": 250,
        "points": {
          "A": [0, 0],
          "B": [80, 0],
          "C": [80, 30],
          "D": [0, 30],
          "E": [30, 20],
          "F": [110, 20],
          "G": [110, 50],
          "H": [30, 50]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "E", "dashed": true },
          { "from": "B", "to": "F" },
          { "from": "C", "to": "G" },
          { "from": "D", "to": "H" },
          { "from": "E", "to": "F", "dashed": true },
          { "from": "F", "to": "G" },
          { "from": "G", "to": "H" },
          { "from": "H", "to": "E", "dashed": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "8 m", "side": "out" },
          { "between": ["B", "C"], "text": "3 m", "side": "out" },
          { "between": ["B", "F"], "text": "5 m", "side": "out" }
        ],
        "showPointLabels": false
      }
    }
  },
  // --- Question 2b ---
  {
    "id": "y8-15i-q2b",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Find the volume of a triangular prism. The triangular base has a base of 10 cm and a perpendicular height of 6 cm. The length of the prism is 15 cm.",
    "solution": "The volume of any prism is the area of its base multiplied by its length.\nArea of triangular base $A = \\frac{1}{2} \\times b \\times h = \\frac{1}{2} \\times 10 \\times 6 = 30 \\text{ cm}^2$.\n$$V = A \\times \\text{length} = 30 \\times 15 = 450 \\text{ cm}^3$$\n\n**Answer:** $450 \\text{ cm}^3$",
    "hint": "First find the area of the triangular cross-section, then multiply by the length of the prism.",
    "graphData": {
      "geometry": {
        "width": 250,
        "points": {
          "A": [0, 0],
          "B": [60, 0],
          "C": [30, 40],
          "D": [60, 20],
          "E": [120, 20],
          "F": [90, 60]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "A" },
          { "from": "A", "to": "D", "dashed": true },
          { "from": "B", "to": "E" },
          { "from": "C", "to": "F" },
          { "from": "D", "to": "E", "dashed": true },
          { "from": "E", "to": "F" },
          { "from": "F", "to": "D", "dashed": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "10 cm", "side": "out" },
          { "between": ["B", "E"], "text": "15 cm", "side": "out" }
        ],
        "showPointLabels": false
      }
    }
  },
  // --- Question 2c ---
  {
    "id": "y8-15i-q2c",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find the volume of a cylinder with a diameter of 8 cm and a height of 20 cm. Leave your answer in terms of $\\pi$.",
    "solution": "The volume of a cylinder is $V = \\pi r^2 h$.\nThe diameter is 8 cm, so the radius is $r = 4$ cm.\n$$V = \\pi \\times 4^2 \\times 20 = \\pi \\times 16 \\times 20 = 320\\pi \\text{ cm}^3$$\n*(Approximate value: $\\approx 1005.31 \\text{ cm}^3$)*\n\n**Answer:** $320\\pi \\text{ cm}^3$",
    "hint": "Remember to halve the diameter to find the radius before applying the volume formula.",
    "graphData": {
      "jsxGraph": {
        "width": 150,
        "height": 300,
        "boundingbox": [-6, 22, 6, -2],
        "script": "board.suspendUpdate();\nvar c1 = board.create('ellipse', [[0,0], [0,0], [4,1]], {strokeColor: '#000000', strokeWidth: 2, fillOpacity: 0});\nvar c2 = board.create('ellipse', [[0,20], [0,20], [4,1]], {strokeColor: '#000000', strokeWidth: 2, fillOpacity: 0});\nboard.create('segment', [[-4,0], [-4,20]], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('segment', [[4,0], [4,20]], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('segment', [[-4,20], [4,20]], {strokeColor: '#000000', strokeWidth: 1});\nboard.create('text', [0, 20.2, '8 cm'], {anchorX: 'middle', anchorY: 'bottom', fontSize: 14});\nboard.create('text', [4.5, 10, '20 cm'], {anchorX: 'left', anchorY: 'middle', fontSize: 14});\nboard.unsuspendUpdate();"
      }
    }
  },
  // --- Question 3a ---
  {
    "id": "y8-15i-q3a",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find the surface area of a rectangular prism with dimensions 7 cm by 4 cm by 2 cm.",
    "solution": "The surface area consists of 3 pairs of identical rectangular faces.\n$$SA = 2 \\times (lw + lh + wh)$$\n$$SA = 2 \\times (7 \\times 4 + 7 \\times 2 + 4 \\times 2)$$\n$$SA = 2 \\times (28 + 14 + 8) = 2 \\times 50 = 100 \\text{ cm}^2$$\n\n**Answer:** $100 \\text{ cm}^2$",
    "hint": "Calculate the area of the three distinct faces, add them together, and multiply the sum by 2.",
    "graphData": {
      "geometry": {
        "width": 250,
        "points": {
          "A": [0, 0],
          "B": [70, 0],
          "C": [70, 40],
          "D": [0, 40],
          "E": [20, 20],
          "F": [90, 20],
          "G": [90, 60],
          "H": [20, 60]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "E", "dashed": true },
          { "from": "B", "to": "F" },
          { "from": "C", "to": "G" },
          { "from": "D", "to": "H" },
          { "from": "E", "to": "F", "dashed": true },
          { "from": "F", "to": "G" },
          { "from": "G", "to": "H" },
          { "from": "H", "to": "E", "dashed": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "7 cm", "side": "out" },
          { "between": ["B", "C"], "text": "4 cm", "side": "out" },
          { "between": ["B", "F"], "text": "2 cm", "side": "out" }
        ],
        "showPointLabels": false
      }
    }
  },
  // --- Question 3b ---
  {
    "id": "y8-15i-q3b",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find the surface area of a triangular prism. The bases are right-angled triangles with side lengths 3 m, 4 m, and 5 m. The length of the prism is 10 m.",
    "solution": "The surface area consists of two triangular bases and three rectangular side faces.\nArea of two triangular bases: $2 \\times (\\frac{1}{2} \\times 3 \\times 4) = 12 \\text{ m}^2$.\nArea of the three rectangular faces:\n1) $3 \\times 10 = 30 \\text{ m}^2$\n2) $4 \\times 10 = 40 \\text{ m}^2$\n3) $5 \\times 10 = 50 \\text{ m}^2$\n\nTotal surface area $= 12 + 30 + 40 + 50 = 132 \\text{ m}^2$.\n\n**Answer:** $132 \\text{ m}^2$",
    "hint": "The three rectangular faces have different widths, corresponding to the three side lengths of the triangular base.",
    "graphData": {
      "geometry": {
        "width": 250,
        "points": {
          "A": [0, 0],
          "B": [40, 0],
          "C": [0, 30],
          "D": [60, 30],
          "E": [100, 30],
          "F": [60, 60]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "A" },
          { "from": "A", "to": "D", "dashed": true },
          { "from": "B", "to": "E" },
          { "from": "C", "to": "F" },
          { "from": "D", "to": "E", "dashed": true },
          { "from": "E", "to": "F" },
          { "from": "F", "to": "D", "dashed": true }
        ],
        "angles": [
          { "at": "A", "right": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "4 m", "side": "out" },
          { "between": ["A", "C"], "text": "3 m", "side": "out" },
          { "between": ["B", "E"], "text": "10 m", "side": "out" }
        ],
        "showPointLabels": false
      }
    }
  },
  // --- Question 4a ---
  {
    "id": "y8-15i-q4a",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write the measurement in the unit given:\n$5 \\text{ cm}^2 = \\_\\_\\_ \\text{ mm}^2$\n(Enter only the number)",
    "a": "500",
    "solution": "$1 \\text{ cm}^2 = 100 \\text{ mm}^2$.\n$5 \\times 100 = 500 \\text{ mm}^2$.\n\n**Answer:** $500$",
    "hint": "When converting from $\\text{cm}^2$ to $\\text{mm}^2$, multiply by $10^2 = 100$."
  },
  // --- Question 4b ---
  {
    "id": "y8-15i-q4b",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write the measurement in the unit given:\n$12 \\text{ m}^2 = \\_\\_\\_ \\text{ cm}^2$\n(Enter only the number)",
    "a": "120000",
    "solution": "$1 \\text{ m}^2 = 10000 \\text{ cm}^2$.\n$12 \\times 10000 = 120000 \\text{ cm}^2$.\n\n**Answer:** $120000$",
    "hint": "When converting from $\\text{m}^2$ to $\\text{cm}^2$, multiply by $100^2 = 10000$."
  },
  // --- Question 4c ---
  {
    "id": "y8-15i-q4c",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write the measurement in the unit given:\n$4000 \\text{ mm}^2 = \\_\\_\\_ \\text{ cm}^2$\n(Enter only the number)",
    "a": "40",
    "solution": "$100 \\text{ mm}^2 = 1 \\text{ cm}^2$.\n$4000 \\div 100 = 40 \\text{ cm}^2$.\n\n**Answer:** $40$",
    "hint": "When converting from $\\text{mm}^2$ to $\\text{cm}^2$, divide by $10^2 = 100$."
  },
  // --- Question 4d ---
  {
    "id": "y8-15i-q4d",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write the measurement in the unit given:\n$7.2 \\text{ ha} = \\_\\_\\_ \\text{ m}^2$\n(Enter only the number)",
    "a": "72000",
    "solution": "$1 \\text{ ha} = 10000 \\text{ m}^2$.\n$7.2 \\times 10000 = 72000 \\text{ m}^2$.\n\n**Answer:** $72000$",
    "hint": "There are $10000 \\text{ m}^2$ in one hectare."
  },
  // --- Question 4e ---
  {
    "id": "y8-15i-q4e",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write the measurement in the unit given:\n$500 \\text{ mm}^3 = \\_\\_\\_ \\text{ cm}^3$\n(Enter only the number)",
    "a": "0.5",
    "solution": "$1 \\text{ cm}^3 = 1000 \\text{ mm}^3$.\n$500 \\div 1000 = 0.5 \\text{ cm}^3$.\n\n**Answer:** $0.5$",
    "hint": "When converting from $\\text{mm}^3$ to $\\text{cm}^3$, divide by $10^3 = 1000$."
  },
  // --- Question 4f ---
  {
    "id": "y8-15i-q4f",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write the measurement in the unit given:\n$3 \\text{ m}^3 = \\_\\_\\_ \\text{ cm}^3$\n(Enter only the number)",
    "a": "3000000",
    "solution": "$1 \\text{ m}^3 = 1000000 \\text{ cm}^3$.\n$3 \\times 1000000 = 3000000 \\text{ cm}^3$.\n\n**Answer:** $3000000$",
    "hint": "When converting from $\\text{m}^3$ to $\\text{cm}^3$, multiply by $100^3 = 1000000$."
  },
  // --- Question 4g ---
  {
    "id": "y8-15i-q4g",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write the measurement in the unit given:\n$2500 \\text{ L} = \\_\\_\\_ \\text{ kL}$\n(Enter only the number)",
    "a": "2.5",
    "solution": "$1000 \\text{ L} = 1 \\text{ kL}$.\n$2500 \\div 1000 = 2.5 \\text{ kL}$.\n\n**Answer:** $2.5$",
    "hint": "To convert from Litres to kilolitres, divide by $1000$."
  },
  // --- Question 4h ---
  {
    "id": "y8-15i-q4h",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "Write the measurement in the unit given:\n$0.4 \\text{ ML} = \\_\\_\\_ \\text{ L}$\n(Enter only the number)",
    "a": "400000",
    "solution": "$1 \\text{ ML} = 1000000 \\text{ L}$.\n$0.4 \\times 1000000 = 400000 \\text{ L}$.\n\n**Answer:** $400000$",
    "hint": "To convert from Megalitres to Litres, multiply by $1000000$."
  },
  // --- Question 5a ---
  {
    "id": "y8-15i-q5a",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Complete the following time conversion:\n$5 \\text{ weeks} = \\_\\_\\_ \\text{ days}$\n(Enter only the number)",
    "a": "35",
    "solution": "$5 \\times 7 = 35 \\text{ days}$.\n\n**Answer:** $35$",
    "hint": "There are 7 days in a week."
  },
  // --- Question 5b ---
  {
    "id": "y8-15i-q5b",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Complete the following time conversion:\n$180 \\text{ min} = \\_\\_\\_ \\text{ h}$\n(Enter only the number)",
    "a": "3",
    "solution": "$180 \\div 60 = 3 \\text{ h}$.\n\n**Answer:** $3$",
    "hint": "There are 60 minutes in an hour."
  },
  // --- Question 5c ---
  {
    "id": "y8-15i-q5c",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Complete the following time conversion:\n$2\\frac{1}{2} \\text{ days} = \\_\\_\\_ \\text{ hours}$\n(Enter only the number)",
    "a": "60",
    "solution": "$2.5 \\times 24 = 60 \\text{ hours}$.\n\n**Answer:** $60$",
    "hint": "There are 24 hours in a day."
  },
  // --- Question 5d ---
  {
    "id": "y8-15i-q5d",
    "type": "short_answer",
    "difficulty": "easy",
    "question": "Complete the following time conversion:\n$1 \\text{ year} = \\_\\_\\_ \\text{ weeks}$\n(Enter only the number of full weeks)",
    "a": "52",
    "solution": "There are $52$ full weeks in a standard year.\n\n**Answer:** $52$",
    "hint": "Think about how many weeks are conventionally in a year."
  },
  // --- Question 6a ---
  {
    "id": "y8-15i-q6a",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "Find the capacity of a rectangular container with dimensions 50 cm by 40 cm by 20 cm.",
    "solution": "First, find the volume in cubic centimetres.\n$$V = 50 \\times 40 \\times 20 = 40000 \\text{ cm}^3$$\nSince $1 \\text{ cm}^3 = 1 \\text{ mL}$, the capacity is $40000 \\text{ mL}$.\nTo convert to litres, divide by 1000:\n$$40000 \\div 1000 = 40 \\text{ L}$$\n\n**Answer:** $40$ L",
    "hint": "Calculate the volume in cm³ first, which is directly equivalent to mL, then convert to litres.",
    "graphData": {
      "geometry": {
        "width": 250,
        "points": {
          "A": [0, 0],
          "B": [50, 0],
          "C": [50, 20],
          "D": [0, 20],
          "E": [20, 20],
          "F": [70, 20],
          "G": [70, 40],
          "H": [20, 40]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "A", "to": "E", "dashed": true },
          { "from": "B", "to": "F" },
          { "from": "C", "to": "G" },
          { "from": "D", "to": "H" },
          { "from": "E", "to": "F", "dashed": true },
          { "from": "F", "to": "G" },
          { "from": "G", "to": "H" },
          { "from": "H", "to": "E", "dashed": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "50 cm", "side": "out" },
          { "between": ["B", "C"], "text": "20 cm", "side": "out" },
          { "between": ["B", "F"], "text": "40 cm", "side": "out" }
        ],
        "showPointLabels": false
      }
    }
  },
  // --- Question 6b ---
  {
    "id": "y8-15i-q6b",
    "type": "teacher_review",
    "difficulty": "hard",
    "question": "Find the capacity of a cylindrical container with a diameter of 20 cm and a height of 30 cm. Leave your answer in terms of $\\pi$ in mL, and give an approximate answer in Litres.",
    "solution": "First, find the volume in cubic centimetres.\nThe radius is $10$ cm.\n$$V = \\pi \\times 10^2 \\times 30 = 3000\\pi \\text{ cm}^3$$\nSince $1 \\text{ cm}^3 = 1 \\text{ mL}$, the capacity is $3000\\pi \\text{ mL}$.\nApproximating $\\pi \\approx 3.14159$, the capacity is roughly $9425 \\text{ mL}$ or $9.42$ L.\n\n**Answer:** $3000\\pi \\text{ mL}$ (or $\\approx 9.42$ L)",
    "hint": "Use $V = \\pi r^2 h$ to find the volume, and remember that $1000 \\text{ mL} = 1 \\text{ L}$.",
    "graphData": {
      "jsxGraph": {
        "width": 150,
        "height": 300,
        "boundingbox": [-12, 33, 12, -3],
        "script": "board.suspendUpdate();\nvar c1 = board.create('ellipse', [[0,0], [0,0], [10,2]], {strokeColor: '#000000', strokeWidth: 2, fillOpacity: 0});\nvar c2 = board.create('ellipse', [[0,30], [0,30], [10,2]], {strokeColor: '#000000', strokeWidth: 2, fillOpacity: 0});\nboard.create('segment', [[-10,0], [-10,30]], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('segment', [[10,0], [10,30]], {strokeColor: '#000000', strokeWidth: 2});\nboard.create('segment', [[-10,30], [10,30]], {strokeColor: '#000000', strokeWidth: 1});\nboard.create('text', [0, 30.5, '20 cm'], {anchorX: 'middle', anchorY: 'bottom', fontSize: 14});\nboard.create('text', [11, 15, '30 cm'], {anchorX: 'left', anchorY: 'middle', fontSize: 14});\nboard.unsuspendUpdate();"
      }
    }
  },
  // --- Question 7a ---
  {
    "id": "y8-15i-q7a",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Use a timeline to find the time difference between 8:30 am and 11:15 am.",
    "solution": "From 8:30 am to 11:00 am is $2$ hours and $30$ minutes.\nFrom 11:00 am to 11:15 am is $15$ minutes.\nTotal time difference = $2 \\text{ h } 30 \\text{ min} + 15 \\text{ min} = 2 \\text{ hours and } 45 \\text{ minutes}$.\n\n**Answer:** $2$ hours $45$ minutes",
    "hint": "Count the full hours first, then add the remaining minutes."
  },
  // --- Question 7b ---
  {
    "id": "y8-15i-q7b",
    "type": "teacher_review",
    "difficulty": "easy",
    "question": "Use a timeline to find the time difference between 10:40 am and 2:20 pm.",
    "solution": "From 10:40 am to 11:00 am is $20$ minutes.\nFrom 11:00 am to 2:00 pm is $3$ hours.\nFrom 2:00 pm to 2:20 pm is $20$ minutes.\nTotal time difference = $20 \\text{ min} + 3 \\text{ h} + 20 \\text{ min} = 3 \\text{ hours and } 40 \\text{ minutes}$.\n\n**Answer:** $3$ hours $40$ minutes",
    "hint": "Count up to the next full hour, then count the hours past noon, and finally add the remaining minutes."
  }
];
