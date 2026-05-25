export const Y7_CH3G_QUESTIONS = [
  {
    id: "y7-3g-q1",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "The following describes an arrangement of sticks. The first diagram has $5$ sticks, the second has $9$, and the third has $13$. The $k$th diagram has $4k + 1$ sticks.",
    a: "N/A",
    t: "Describing arrays, areas and number patterns",
    hint: "Substitute the required diagram number into the expression $4k + 1$.",
    solutionSteps: [
      { explanation: "Use the formula given, $4k + 1$, where $k$ is the diagram number.", workingOut: "4k + 1" }
    ],
    graphData: null,
    subQuestions: [
      {
        "id": "y7-3g-q1a",
        "type": "short_answer",
        "question": "a) How many sticks are there in the fifth diagram?",
        "a": "21"
      },
      {
        "id": "y7-3g-q1b",
        "type": "short_answer",
        "question": "b) How many sticks are there in the 50th diagram?",
        "a": "201"
      }
    ]
  },
  {
    id: "y7-3g-q2a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "Write down the area of this rectangle in terms of $m$.",
    a: "12m^2",
    t: "Describing arrays, areas and number patterns",
    hint: "Area of a rectangle is length multiplied by width.",
    solutionSteps: [
      { explanation: "Multiply the length by the width.", workingOut: "4m \\times 3m" },
      { explanation: "Multiply the coefficients and the variables.", workingOut: "12m^2" }
    ],
    graphData: {
      geometry: {
        width: 240,
        points: { "A": [0, 3], "B": [4, 3], "C": [4, 0], "D": [0, 0] },
        segments: [
          { from: "A", to: "B" },
          { from: "B", to: "C" },
          { from: "C", to: "D" },
          { from: "D", to: "A" }
        ],
        sideLabels: [
          { between: ["D", "C"], text: "4m cm" },
          { between: ["B", "C"], text: "3m cm" }
        ]
      }
    }
  },
  {
    id: "y7-3g-q2b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "For the rectangle with area $12m^2$, if $m = 4$, what is the area?",
    a: "192",
    t: "Describing arrays, areas and number patterns",
    hint: "Substitute $m = 4$ into the area expression.",
    solutionSteps: [
      { explanation: "Substitute $m = 4$ into $12m^2$.", workingOut: "12(4)^2" },
      { explanation: "Square the $4$.", workingOut: "12(16)" },
      { explanation: "Multiply.", workingOut: "192" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q2c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "For the rectangle with area $12m^2$, if $m = 6$, what is the area?",
    a: "432",
    t: "Describing arrays, areas and number patterns",
    hint: "Substitute $m = 6$ into the area expression.",
    solutionSteps: [
      { explanation: "Substitute $m = 6$ into $12m^2$.", workingOut: "12(6)^2" },
      { explanation: "Square the $6$.", workingOut: "12(36)" },
      { explanation: "Multiply.", workingOut: "432" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q3",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "Find the total area of the shaded region below in terms of $a$ and $b$.",
    a: "3ab + a^2",
    t: "Describing arrays, areas and number patterns",
    hint: "Find the area of each rectangular part and add them together.",
    solutionSteps: [
      { explanation: "The region can be split into two rectangles.", workingOut: "" },
      { explanation: "Area of the left rectangle is $b \\times 3a$.", workingOut: "3ab" },
      { explanation: "Area of the right rectangle is $a \\times a$.", workingOut: "a^2" },
      { explanation: "Total area is the sum of the two.", workingOut: "3ab + a^2" }
    ],
    graphData: {
      geometry: {
        width: 200,
        points: { "A": [0, 3], "B": [1, 3], "C": [1, 1], "D": [2, 1], "E": [2, 0], "F": [1, 0], "G": [0, 0] },
        segments: [
          { from: "A", to: "B" },
          { from: "B", to: "C" },
          { from: "C", to: "D" },
          { from: "D", to: "E" },
          { from: "E", to: "F" },
          { from: "F", to: "G" },
          { from: "G", to: "A" },
          { from: "C", to: "F" }
        ],
        sideLabels: [
          { between: ["A", "B"], text: "b cm" },
          { between: ["G", "A"], text: "3a cm" },
          { between: ["D", "E"], text: "a cm" },
          { between: ["E", "F"], text: "a cm" }
        ]
      }
    }
  },
  {
    id: "y7-3g-q4",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "The $m$th non-zero even number is $2m$.",
    a: "N/A",
    t: "Describing arrays, areas and number patterns",
    hint: "Consecutive whole numbers are $1$ apart, and consecutive even numbers are $2$ apart.",
    solutionSteps: [
      { explanation: "Understand the sequence of numbers.", workingOut: "" }
    ],
    graphData: null,
    subQuestions: [
      {
        "id": "y7-3g-q4a",
        "type": "short_answer",
        "question": "a) What is the whole number immediately after the $m$th non-zero even number?",
        "a": "2m + 1"
      },
      {
        "id": "y7-3g-q4b",
        "type": "short_answer",
        "question": "b) What is the next even number after $2m$?",
        "a": "2m + 2"
      }
    ]
  },
  {
    id: "y7-3g-q5a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "A shaded region is composed of $3$ squares and $2$ rectangles. The area of a square is $x$ cm$^2$ and the area of a rectangle is $y$ cm$^2$.\\n\\nGive the total area of the region in terms of $x$ and $y$.",
    a: "3x + 2y",
    t: "Describing arrays, areas and number patterns",
    hint: "Multiply the quantity of each shape by its area, then add them.",
    solutionSteps: [
      { explanation: "Area of $3$ squares.", workingOut: "3x" },
      { explanation: "Area of $2$ rectangles.", workingOut: "2y" },
      { explanation: "Total area.", workingOut: "3x + 2y" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q5b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "A shaded region is composed of $5$ squares and $1$ rectangle. The area of a square is $x$ cm$^2$ and the area of a rectangle is $y$ cm$^2$.\\n\\nGive the total area of the region in terms of $x$ and $y$.",
    a: "5x + y",
    t: "Describing arrays, areas and number patterns",
    hint: "Multiply the quantity of each shape by its area, then add them.",
    solutionSteps: [
      { explanation: "Area of $5$ squares.", workingOut: "5x" },
      { explanation: "Area of $1$ rectangle.", workingOut: "y" },
      { explanation: "Total area.", workingOut: "5x + y" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q5c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "A shaded region is composed of $1$ square and $4$ rectangles. The area of a square is $x$ cm$^2$ and the area of a rectangle is $y$ cm$^2$.\\n\\nGive the total area of the region in terms of $x$ and $y$.",
    a: "x + 4y",
    t: "Describing arrays, areas and number patterns",
    hint: "Multiply the quantity of each shape by its area, then add them.",
    solutionSteps: [
      { explanation: "Area of $1$ square.", workingOut: "x" },
      { explanation: "Area of $4$ rectangles.", workingOut: "4y" },
      { explanation: "Total area.", workingOut: "x + 4y" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q5d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 30,
    question: "A shaded region is composed of $2$ squares and $3$ rectangles. The area of a square is $x$ cm$^2$ and the area of a rectangle is $y$ cm$^2$.\\n\\nGive the total area of the region in terms of $x$ and $y$.",
    a: "2x + 3y",
    t: "Describing arrays, areas and number patterns",
    hint: "Multiply the quantity of each shape by its area, then add them.",
    solutionSteps: [
      { explanation: "Area of $2$ squares.", workingOut: "2x" },
      { explanation: "Area of $3$ rectangles.", workingOut: "3y" },
      { explanation: "Total area.", workingOut: "2x + 3y" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, other multiples of $4$ can be generated by adding $4, 8, 12$ and so on to it. \\n\\nIs the following expression always a multiple of $4$?\\n$k + 16$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Check if the number being added is a multiple of $4$.",
    solutionSteps: [
      { explanation: "$k$ is a multiple of $4$, and $16$ is also a multiple of $4$.", workingOut: "16 = 4 \\times 4" },
      { explanation: "The sum of two multiples of $4$ is always a multiple of $4$.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, is the following expression always a multiple of $4$?\\n\\n$k + 100$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Check if $100$ is a multiple of $4$.",
    solutionSteps: [
      { explanation: "$100$ is a multiple of $4$ ($25 \\times 4$).", workingOut: "" },
      { explanation: "The sum of two multiples of $4$ is a multiple of $4$.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, is the following expression always a multiple of $4$?\\n\\n$40 + k$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Check if $40$ is a multiple of $4$.",
    solutionSteps: [
      { explanation: "$40$ is a multiple of $4$ ($10 \\times 4$).", workingOut: "" },
      { explanation: "The sum of two multiples of $4$ is a multiple of $4$.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6d",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, is the following expression always a multiple of $4$?\\n\\n$k - 12$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Subtracting a multiple of $4$ keeps the result a multiple of $4$.",
    solutionSteps: [
      { explanation: "$12$ is a multiple of $4$ ($3 \\times 4$).", workingOut: "" },
      { explanation: "The difference of two multiples of $4$ is a multiple of $4$.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6e",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, is the following expression always a multiple of $4$?\\n\\n$5k$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Multiplying a multiple of $4$ by any integer results in another multiple of $4$.",
    solutionSteps: [
      { explanation: "Since $k$ is a multiple of $4$, let $k = 4n$.", workingOut: "5(4n) = 20n" },
      { explanation: "$20n$ is clearly divisible by $4$, so the answer is Yes.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6f",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, is the following expression always a multiple of $4$?\\n\\n$3k + 12$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Check both parts of the sum.",
    solutionSteps: [
      { explanation: "$3k$ is a multiple of $4$ (since $k$ is).", workingOut: "" },
      { explanation: "$12$ is also a multiple of $4$.", workingOut: "" },
      { explanation: "Their sum must be a multiple of $4$.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6g",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, is the following expression always a multiple of $4$?\\n\\n$5(k + 8)$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Evaluate what is inside the brackets first.",
    solutionSteps: [
      { explanation: "$k + 8$ is a multiple of $4$, since $8$ is a multiple of $4$.", workingOut: "" },
      { explanation: "Multiplying by $5$ keeps it a multiple of $4$.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6h",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, is the following expression always a multiple of $4$?\\n\\n$24 - k$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Check the components of the subtraction.",
    solutionSteps: [
      { explanation: "$24$ is a multiple of $4$. $k$ is a multiple of $4$.", workingOut: "" },
      { explanation: "Their difference is a multiple of $4$.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6i",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, is the following expression always a multiple of $4$?\\n\\n$17 - 3k$",
    a: "No",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Check if both parts are multiples of $4$.",
    solutionSteps: [
      { explanation: "$3k$ is a multiple of $4$, but $17$ is not.", workingOut: "" },
      { explanation: "Therefore, the result is not a multiple of $4$.", workingOut: "No" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6j",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, is the following expression always a multiple of $4$?\\n\\n$4(k^2 - 1)$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Look at the factor outside the brackets.",
    solutionSteps: [
      { explanation: "The entire expression is multiplied by $4$.", workingOut: "" },
      { explanation: "Any integer multiplied by $4$ is a multiple of $4$.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6k",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, is the following expression always a multiple of $4$?\\n\\n$4k^2 - 1$",
    a: "No",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Does subtracting $1$ from a multiple of $4$ yield a multiple of $4$?",
    solutionSteps: [
      { explanation: "$4k^2$ is a multiple of $4$.", workingOut: "" },
      { explanation: "Subtracting $1$ makes it not a multiple of $4$.", workingOut: "No" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q6l",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $k$ is a multiple of $4$, is the following expression always a multiple of $4$?\\n\\n$4m - 1$ (where $m$ is any integer)",
    a: "No",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Does subtracting $1$ from a multiple of $4$ yield a multiple of $4$?",
    solutionSteps: [
      { explanation: "$4m$ is a multiple of $4$.", workingOut: "" },
      { explanation: "Subtracting $1$ means it is one less than a multiple of $4$.", workingOut: "No" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q7a",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Assuming $m$ is even, what is the next even number?",
    a: "m + 2",
    t: "Describing arrays, areas and number patterns",
    hint: "Even numbers are spaced by $2$.",
    solutionSteps: [
      { explanation: "To get to the next even number, add $2$.", workingOut: "m + 2" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q7b",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Assuming $p$ is a multiple of $5$, what are the next two multiples of $5$?\\n\\nWrite your answer separated by a comma, e.g., $p+5, p+10$.",
    a: "p + 5, p + 10",
    t: "Describing arrays, areas and number patterns",
    hint: "Multiples of $5$ increase by $5$ each time.",
    solutionSteps: [
      { explanation: "The first next multiple is found by adding $5$.", workingOut: "p + 5" },
      { explanation: "The second next multiple is found by adding another $5$.", workingOut: "p + 10" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q7c",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "Assuming $k$ is odd and $k > 1$, what is the previous odd number?",
    a: "k - 2",
    t: "Describing arrays, areas and number patterns",
    hint: "Odd numbers are spaced by $2$.",
    solutionSteps: [
      { explanation: "To find the previous odd number, subtract $2$.", workingOut: "k - 2" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q8a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $m$ is an odd number, is the following expression always an odd number?\\n\\n$2m$",
    a: "No",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Any integer multiplied by $2$ is even.",
    solutionSteps: [
      { explanation: "$2m$ is a multiple of $2$, so it is always even.", workingOut: "No" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q8b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $m$ is an odd number, is the following expression always an odd number?\\n\\n$2m + 1$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "An even number plus $1$ is odd.",
    solutionSteps: [
      { explanation: "$2m$ is always even.", workingOut: "" },
      { explanation: "Adding $1$ makes it odd.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q8c",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $m$ is an odd number, is the following expression always an odd number?\\n\\n$2m + 2$",
    a: "No",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "An even number plus an even number is even.",
    solutionSteps: [
      { explanation: "$2m$ is even, and $2$ is even.", workingOut: "" },
      { explanation: "Their sum is even, so it is not odd.", workingOut: "No" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q8d",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $m$ is an odd number, is the following expression always an odd number?\\n\\n$2m + 3$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "An even number plus an odd number is odd.",
    solutionSteps: [
      { explanation: "$2m$ is even, and $3$ is odd.", workingOut: "" },
      { explanation: "Their sum is odd.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q8e",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $m$ is an odd number, is the following expression always an odd number?\\n\\n$3m + 1$",
    a: "No",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "An odd number times an odd number is odd.",
    solutionSteps: [
      { explanation: "Since $m$ is odd, $3m$ is odd.", workingOut: "" },
      { explanation: "An odd number plus $1$ is even. So it is not odd.", workingOut: "No" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q8f",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $m$ is an odd number, is the following expression always an odd number?\\n\\n$3m + 2$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "An odd number plus an even number is odd.",
    solutionSteps: [
      { explanation: "Since $m$ is odd, $3m$ is odd.", workingOut: "" },
      { explanation: "An odd number plus $2$ (which is even) results in an odd number.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q8g",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $m$ is an odd number, is the following expression always an odd number?\\n\\n$3m + 4$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "An odd number plus an even number is odd.",
    solutionSteps: [
      { explanation: "Since $m$ is odd, $3m$ is odd.", workingOut: "" },
      { explanation: "Adding $4$ (an even number) to an odd number yields an odd number.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q8h",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    question: "If $m$ is an odd number, is the following expression always an odd number?\\n\\n$4m + 1$",
    a: "Yes",
    opts: ["Yes", "No"],
    t: "Describing arrays, areas and number patterns",
    hint: "Any integer multiplied by $4$ is even.",
    solutionSteps: [
      { explanation: "$4m$ is always even.", workingOut: "" },
      { explanation: "Adding $1$ to an even number results in an odd number.", workingOut: "Yes" }
    ],
    graphData: null
  },
  {
    id: "y7-3g-q9",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "A rectangle has side lengths $3y$ cm and $5x$ cm.",
    a: "N/A",
    t: "Describing arrays, areas and number patterns",
    hint: "Perimeter is the sum of all sides. Area is length times width.",
    solutionSteps: [
      { explanation: "Use the formulas for perimeter and area.", workingOut: "" }
    ],
    graphData: null,
    subQuestions: [
      {
        "id": "y7-3g-q9a",
        "type": "short_answer",
        "question": "a) Find the perimeter of the rectangle.",
        "a": "6y + 10x"
      },
      {
        "id": "y7-3g-q9b",
        "type": "short_answer",
        "question": "b) Find the area of the rectangle.",
        "a": "15xy"
      }
    ]
  },
  {
    id: "y7-3g-q10",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "A square has side length $k$ cm.",
    a: "N/A",
    t: "Describing arrays, areas and number patterns",
    hint: "Perimeter is $4$ times the side length. Area is the side length squared.",
    solutionSteps: [
      { explanation: "Use the formulas for a square.", workingOut: "" }
    ],
    graphData: null,
    subQuestions: [
      {
        "id": "y7-3g-q10a",
        "type": "short_answer",
        "question": "a) Find the perimeter of the square.",
        "a": "4k"
      },
      {
        "id": "y7-3g-q10b",
        "type": "short_answer",
        "question": "b) Find the area of the square.",
        "a": "k^2"
      }
    ]
  },
  {
    id: "y7-3g-q11",
    type: "short_answer",
    difficulty: "medium",
    timeLimit: 90,
    question: "A rectangle has side lengths $y + 4$ cm and $5$ cm.",
    a: "N/A",
    t: "Describing arrays, areas and number patterns",
    hint: "Expand brackets when calculating the perimeter and area.",
    solutionSteps: [
      { explanation: "Perimeter = $2 \\times \\text{length} + 2 \\times \\text{width}$.", workingOut: "2(y + 4) + 2(5)" },
      { explanation: "Area = $\\text{length} \\times \\text{width}$.", workingOut: "5(y + 4)" }
    ],
    graphData: null,
    subQuestions: [
      {
        "id": "y7-3g-q11a",
        "type": "short_answer",
        "question": "a) Find the perimeter of the rectangle.",
        "a": "2y + 18"
      },
      {
        "id": "y7-3g-q11b",
        "type": "short_answer",
        "question": "b) Find the area of the rectangle.",
        "a": "5y + 20"
      }
    ]
  }
];
