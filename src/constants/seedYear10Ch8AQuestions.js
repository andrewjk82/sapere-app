export const Y10_CH8A_QUESTIONS = [
  {
    id: "y10-8a-q1a-x",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "In the right-angled triangle $ABC$, the right angle is at $B$. Angle $A = 45^\\circ$ and side $BC = 12$. Find the value of $x$ (side $AB$).",
    a: "12",
    t: "Review of triangles",
    hint: "What type of triangle is this if one angle is 90 and another is 45?",
    solutionSteps: [
      { explanation: "The sum of angles in a triangle is 180°.", workingOut: "Angle C = 180^\\circ - 90^\\circ - 45^\\circ = 45^\\circ" },
      { explanation: "Since Angle A = Angle C, the triangle is an isosceles right triangle.", workingOut: "AB = BC" },
      { explanation: "Substitute the given value.", workingOut: "x = 12" }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: { A: [0, 4], B: [0, 0], C: [4, 0] },
        segments: [
          { from: "A", to: "B" },
          { from: "B", to: "C" },
          { from: "C", to: "A" }
        ],
        sideLabels: [
          { between: ["A", "B"], text: "x" },
          { between: ["B", "C"], text: "12" }
        ],
        angles: [
          { at: "B", right: true },
          { at: "A", text: "45°" },
          { at: "C", text: "\\alpha" }
        ]
      }
    }
  },
  {
    id: "y10-8a-q1a-alpha",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "In the right-angled triangle $ABC$, the right angle is at $B$. Angle $A = 45^\\circ$ and side $BC = 12$. Find the value of $\\alpha$ (Angle $C$) in degrees.",
    a: "45",
    t: "Review of triangles",
    hint: "The sum of angles in a triangle is 180°.",
    solutionSteps: [
      { explanation: "Use the angle sum of a triangle.", workingOut: "\\alpha = 180^\\circ - 90^\\circ - 45^\\circ = 45^\\circ" }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: { A: [0, 4], B: [0, 0], C: [4, 0] },
        segments: [
          { from: "A", to: "B" },
          { from: "B", to: "C" },
          { from: "C", to: "A" }
        ],
        sideLabels: [
          { between: ["A", "B"], text: "x" },
          { between: ["B", "C"], text: "12" }
        ],
        angles: [
          { at: "B", right: true },
          { at: "A", text: "45°" },
          { at: "C", text: "\\alpha" }
        ]
      }
    }
  },
  {
    id: "y10-8a-q1b-x",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "In triangle $ABC$, Angle $A = 130^\\circ$ and Angle $B = 25^\\circ$. Side $AC = 8$. Find the value of $x$ (side $AB$).",
    a: "8",
    t: "Review of triangles",
    hint: "Find the size of Angle C first.",
    solutionSteps: [
      { explanation: "Find the third angle of the triangle.", workingOut: "Angle C = 180^\\circ - (130^\\circ + 25^\\circ) = 25^\\circ" },
      { explanation: "Since Angle B = Angle C, the triangle is isosceles.", workingOut: "AB = AC" },
      { explanation: "Substitute the given value.", workingOut: "x = 8" }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: { A: [2, 2], B: [0, 0], C: [8, 0] },
        segments: [
          { from: "A", to: "B" },
          { from: "B", to: "C" },
          { from: "C", to: "A" }
        ],
        sideLabels: [
          { between: ["A", "B"], text: "x" },
          { between: ["A", "C"], text: "8" }
        ],
        angles: [
          { at: "A", text: "130°" },
          { at: "B", text: "25°" },
          { at: "C", text: "\\alpha" }
        ]
      }
    }
  },
  {
    id: "y10-8a-q1b-alpha",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "In triangle $ABC$, Angle $A = 130^\\circ$ and Angle $B = 25^\\circ$. Find the value of $\\alpha$ (Angle $C$) in degrees.",
    a: "25",
    t: "Review of triangles",
    hint: "The sum of angles in a triangle is 180°.",
    solutionSteps: [
      { explanation: "Subtract the known angles from 180°.", workingOut: "\\alpha = 180^\\circ - 130^\\circ - 25^\\circ = 25^\\circ" }
    ],
    graphData: {
      geometry: {
        width: 300,
        points: { A: [2, 2], B: [0, 0], C: [8, 0] },
        segments: [
          { from: "A", to: "B" },
          { from: "B", to: "C" },
          { from: "C", to: "A" }
        ],
        sideLabels: [
          { between: ["A", "B"], text: "x" },
          { between: ["A", "C"], text: "8" }
        ],
        angles: [
          { at: "A", text: "130°" },
          { at: "B", text: "25°" },
          { at: "C", text: "\\alpha" }
        ]
      }
    }
  },
  {
    id: "y10-8a-q1c-alpha",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "In triangle $LMN$, the exterior angle at $N$ is $110^\\circ$. The interior angles at $M$ and $N$ are both equal to $\\alpha$. Find the value of $\\alpha$ in degrees.",
    a: "70",
    t: "Review of triangles",
    hint: "Interior and exterior angles on a straight line add to 180°.",
    solutionSteps: [
      { explanation: "Calculate the interior angle at N.", workingOut: "\\alpha = 180^\\circ - 110^\\circ = 70^\\circ" }
    ],
    graphData: null
  },
  {
    id: "y10-8a-q1c-gamma",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "In triangle $LMN$, the exterior angle at $N$ is $110^\\circ$. The interior angles at $M$ and $N$ are both equal to $\\alpha$. Find the value of $\\gamma$ (Angle $L$) in degrees.",
    a: "40",
    t: "Review of triangles",
    hint: "Find alpha first, then use the angle sum of a triangle.",
    solutionSteps: [
      { explanation: "Find the interior base angles.", workingOut: "\\alpha = 180^\\circ - 110^\\circ = 70^\\circ" },
      { explanation: "Use the angle sum of a triangle to find gamma.", workingOut: "\\gamma = 180^\\circ - (70^\\circ + 70^\\circ) = 40^\\circ" }
    ],
    graphData: null
  },
  {
    id: "y10-8a-q1c-x",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "In triangle $LMN$, the exterior angle at $N$ is $110^\\circ$. The interior angles at $M$ and $N$ are both equal to $\\alpha$. Side $LN = 9$. Find the value of $x$ (side $LM$).",
    a: "9",
    t: "Review of triangles",
    hint: "If a triangle has two equal base angles, what type of triangle is it?",
    solutionSteps: [
      { explanation: "Identify the triangle type.", workingOut: "Since Angle M = Angle N, triangle LMN is isosceles." },
      { explanation: "Equal angles are opposite equal sides.", workingOut: "LM = LN" },
      { explanation: "Substitute the given value.", workingOut: "x = 9" }
    ],
    graphData: null
  },
  {
    id: "y10-8a-q1e-x",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "In right-angled triangle $ABC$, the right angle is at $C$. An altitude $CN$ is drawn to the hypotenuse $AB$. Angle $B = 45^\\circ$. The total length of $AB$ is $10$ and $NB = 5$. Find the value of $x$ (length $AN$).",
    a: "5",
    t: "Review of triangles",
    hint: "Look at the given lengths on the segment AB.",
    solutionSteps: [
      { explanation: "The total length AB is the sum of AN and NB.", workingOut: "AB = AN + NB" },
      { explanation: "Substitute the known values.", workingOut: "10 = x + 5" },
      { explanation: "Solve for x.", workingOut: "x = 5" }
    ],
    graphData: null
  },
  {
    id: "y10-8a-q1e-alpha",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "In right-angled triangle $ABC$, the right angle is at $C$. An altitude $CN$ is drawn to the hypotenuse $AB$. Angle $B = 45^\\circ$. Find the value of $\\alpha$ (Angle $ACN$) in degrees.",
    a: "45",
    t: "Review of triangles",
    hint: "First find Angle A in the large triangle, then look at the smaller triangle ACN.",
    solutionSteps: [
      { explanation: "Find Angle A in triangle ABC.", workingOut: "Angle A = 180^\\circ - 90^\\circ - 45^\\circ = 45^\\circ" },
      { explanation: "Find Angle ACN in right triangle ACN.", workingOut: "\\alpha = 180^\\circ - 90^\\circ - 45^\\circ = 45^\\circ" }
    ],
    graphData: null
  },
  {
    id: "y10-8a-q2a-alpha",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "Triangle $RST$ has all three sides equal (equilateral). Find the value of $\\alpha$ (Angle $R$) in degrees.",
    a: "60",
    t: "Review of triangles",
    hint: "All angles in an equilateral triangle are equal.",
    solutionSteps: [
      { explanation: "The sum of angles is 180°, and all 3 are equal.", workingOut: "\\alpha = 180^\\circ \\div 3 = 60^\\circ" }
    ],
    graphData: null
  },
  {
    id: "y10-8a-q2k-alpha",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "In quadrilateral $ABCD$, Angle $A = 80^\\circ$, Angle $B = 110^\\circ$, and Angle $D = 40^\\circ$. Find the value of $\\alpha$ (Angle $C$) in degrees.",
    a: "130",
    t: "Review of triangles",
    hint: "The interior angles of a quadrilateral add up to 360°.",
    solutionSteps: [
      { explanation: "Use the angle sum property of a quadrilateral.", workingOut: "\\alpha = 360^\\circ - (80^\\circ + 110^\\circ + 40^\\circ)" },
      { explanation: "Calculate the result.", workingOut: "\\alpha = 130^\\circ" }
    ],
    graphData: null
  },
  {
    id: "y10-8a-q2l-alpha",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "Find the size of the interior angle $\\alpha$ of a regular pentagon in degrees.",
    a: "108",
    t: "Review of triangles",
    hint: "Use the formula for the interior angle of a regular polygon: 180(n-2)/n.",
    solutionSteps: [
      { explanation: "Calculate the sum of interior angles for a pentagon (n=5).", workingOut: "Sum = 180^\\circ \\times (5 - 2) = 540^\\circ" },
      { explanation: "Divide by the number of angles.", workingOut: "\\alpha = 540^\\circ \\div 5 = 108^\\circ" }
    ],
    graphData: null
  },
  {
    id: "y10-8a-q3",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "The exterior angles of a regular polygon are each $45^\\circ$. How many sides does the polygon have?",
    a: "8",
    t: "Review of triangles",
    hint: "The sum of exterior angles of any polygon is always 360°.",
    solutionSteps: [
      { explanation: "The sum of exterior angles is 360°.", workingOut: "n \\times 45^\\circ = 360^\\circ" },
      { explanation: "Solve for the number of sides (n).", workingOut: "n = 360 \\div 45 = 8" }
    ],
    graphData: null
  },
  {
    id: "y10-8a-q4",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Three angles of a pentagon are each $150^\\circ$ and the remaining angles are equal. Find the size of each of the two remaining angles in degrees.",
    a: "45",
    t: "Review of triangles",
    hint: "First find the total angle sum of a pentagon.",
    solutionSteps: [
      { explanation: "Find the angle sum of a pentagon.", workingOut: "S = 180^\\circ \\times (5 - 2) = 540^\\circ" },
      { explanation: "Subtract the known angles.", workingOut: "Remaining sum = 540^\\circ - (3 \\times 150^\\circ) = 90^\\circ" },
      { explanation: "Divide by 2 since the remaining two angles are equal.", workingOut: "Angle = 90^\\circ \\div 2 = 45^\\circ" }
    ],
    graphData: null
  }
];
