export const Y7_CH3H_QUESTIONS = [
  {
    "id": "y7-3h-q1a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the area of this shape in terms of $a$ and $b$.",
    "a": "\\frac{1}{2}ab",
    "t": "Chapter review",
    "hint": "Area of a triangle = \\frac{1}{2} \\times \\text{base} \\times \\text{height}.",
    "solutionSteps": [
      { "explanation": "Identify base and height of the right triangle.", "workingOut": "\\text{base} = b\\ \\text{cm},\\ \\text{height} = a\\ \\text{cm}" },
      { "explanation": "Apply the formula.", "workingOut": "A = \\frac{1}{2} \\times b \\times a = \\frac{ab}{2}\\ \\text{cm}^2" }
    ],
    "graphData": {
      "geometry": {
        "width": 200,
        "points": { "O": [0, 0], "H": [3, 0], "V": [0, 3] },
        "segments": [
          { "from": "O", "to": "H" },
          { "from": "O", "to": "V" },
          { "from": "H", "to": "V" }
        ],
        "angles": [{ "at": "O", "right": true }],
        "sideLabels": [
          { "between": ["O", "H"], "text": "b cm" },
          { "between": ["O", "V"], "text": "a cm" }
        ]
      }
    }
  },
  {
    "id": "y7-3h-q1b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the area of this shape in terms of $a$ and $b$.",
    "a": "ab",
    "t": "Chapter review",
    "hint": "The total base is $2b$ cm and the height is $a$ cm.",
    "solutionSteps": [
      { "explanation": "Total base = b + b = 2b. Height = a.", "workingOut": "A = \\frac{1}{2} \\times 2b \\times a = ab\\ \\text{cm}^2" }
    ],
    "graphData": {
      "geometry": {
        "width": 240,
        "points": { "A": [0, 0], "M": [3, 0], "B": [6, 0], "T": [3, 4] },
        "segments": [
          { "from": "A", "to": "T" },
          { "from": "T", "to": "B" },
          { "from": "A", "to": "B" },
          { "from": "T", "to": "M", "dashed": true }
        ],
        "angles": [{ "at": "M", "right": true }],
        "sideLabels": [
          { "between": ["A", "M"], "text": "b cm" },
          { "between": ["M", "B"], "text": "b cm" },
          { "between": ["T", "M"], "text": "a cm" }
        ]
      }
    }
  },
  {
    "id": "y7-3h-q1c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Find the area of this shape in terms of $a$ and $b$.",
    "a": "2ab",
    "t": "Chapter review",
    "hint": "Area of a rhombus = $\\frac{1}{2} \\times d_1 \\times d_2$ where $d_1, d_2$ are the diagonals.",
    "solutionSteps": [
      { "explanation": "Vertical diagonal = 2a, horizontal diagonal = 2b.", "workingOut": "A = \\frac{1}{2} \\times 2a \\times 2b = 2ab\\ \\text{cm}^2" }
    ],
    "graphData": {
      "geometry": {
        "width": 200,
        "points": { "T": [2, 4], "R": [4, 2], "B": [2, 0], "L": [0, 2], "M": [2, 2] },
        "segments": [
          { "from": "T", "to": "R" },
          { "from": "R", "to": "B" },
          { "from": "B", "to": "L" },
          { "from": "L", "to": "T" },
          { "from": "M", "to": "T", "dashed": true },
          { "from": "M", "to": "B", "dashed": true },
          { "from": "M", "to": "L", "dashed": true },
          { "from": "M", "to": "R", "dashed": true }
        ],
        "angles": [{ "at": "M", "right": true }],
        "sideLabels": [
          { "between": ["M", "T"], "text": "a cm" },
          { "between": ["M", "L"], "text": "b cm" }
        ]
      }
    }
  },
  {
    "id": "y7-3h-q2a",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Think of a number. Let this number be $n$.\n\nWrite the following using algebra:\n\na) Multiply the number by 4 and subtract 8.",
    "a": "4n - 8",
    "t": "Chapter review",
    "hint": "Translate each operation into algebra step by step.",
    "solutionSteps": [
      { "explanation": "Multiply n by 4.", "workingOut": "4n" },
      { "explanation": "Subtract 8.", "workingOut": "4n - 8" }
    ],
    "graphData": null
  },
  {
    "id": "y7-3h-q2b",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Think of a number $n$. After step a) you have $4n - 8$.\n\nb) Multiply the result by 2. Write the simplified expression.",
    "a": "8n - 16",
    "t": "Chapter review",
    "hint": "Use the distributive law: $2(4n - 8)$.",
    "solutionSteps": [
      { "explanation": "Multiply each term by 2.", "workingOut": "2(4n - 8) = 8n - 16" }
    ],
    "graphData": null
  },
  {
    "id": "y7-3h-q2c",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Think of a number $n$. After steps a) and b) you have $8n - 16$.\n\nc) Add 16. Write the simplified expression.",
    "a": "8n",
    "t": "Chapter review",
    "hint": "Combine the constant terms: $-16 + 16 = 0$.",
    "solutionSteps": [
      { "explanation": "Add 16.", "workingOut": "8n - 16 + 16 = 8n" }
    ],
    "graphData": null
  },
  {
    "id": "y7-3h-q2d",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Think of a number $n$. After steps a), b) and c) you have $8n$.\n\nd) Subtract 7 times the number you first thought of. What is the final answer? Why is it so?",
    "a": "n",
    "t": "Chapter review",
    "hint": "7 times the original number is $7n$. Subtract from $8n$.",
    "solutionSteps": [
      { "explanation": "Subtract 7n from 8n.", "workingOut": "8n - 7n = n" },
      { "explanation": "The answer is always n — the original number — because 8 − 7 = 1, so the coefficients cancel to 1.", "workingOut": "8n - 7n = 1 \\times n = n" }
    ],
    "graphData": null
  },
  {
    "id": "y7-3h-q3",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Rectangle $ABCD$ is divided into four smaller rectangles ①, ②, ③ and ④ as shown, where $a$ cm is the side of rectangle ①. Total width $(a + 5)$ cm, total height $(a + 4)$ cm.",
    "a": null,
    "t": "Chapter review",
    "hint": "Use the labelled dimensions to find each sub-rectangle's area and perimeter.",
    "solutionSteps": [
      { "explanation": "Area of ①: a × a.", "workingOut": "a^2" },
      { "explanation": "Area of ②: 5 × a.", "workingOut": "5a" },
      { "explanation": "Area of ③: a × 4.", "workingOut": "4a" },
      { "explanation": "Area of ④: 5 × 4.", "workingOut": "20" }
    ],
    "graphData": {
      "geometry": {
        "width": 280,
        "points": {
          "A": [0, 0], "B": [0, 6], "C": [7, 6], "D": [7, 0],
          "P1": [2, 6], "P2": [2, 0], "P3": [0, 4], "P4": [7, 4]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "P1", "to": "P2", "dashed": true },
          { "from": "P3", "to": "P4", "dashed": true }
        ],
        "sideLabels": [
          { "between": ["B", "P1"], "text": "a cm" },
          { "between": ["P1", "C"], "text": "5 cm" },
          { "between": ["A", "P3"], "text": "4 cm" },
          { "between": ["P3", "B"], "text": "a cm" }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y7-3h-q3a",
        "type": "short_answer",
        "question": "a) Find the area of each of the rectangles ①, ②, ③ and ④.",
        "a": "① = a², ② = 5a, ③ = 4a, ④ = 20",
        "solutionSteps": [
          { "explanation": "① = a × a", "workingOut": "a^2" },
          { "explanation": "② = 5 × a", "workingOut": "5a" },
          { "explanation": "③ = a × 4", "workingOut": "4a" },
          { "explanation": "④ = 5 × 4", "workingOut": "20" }
        ]
      },
      {
        "id": "y7-3h-q3b",
        "type": "short_answer",
        "question": "b) Find the area of rectangle $ABCD$ as a product of the lengths of its sides.",
        "a": "(a + 5)(a + 4)",
        "solutionSteps": [
          { "explanation": "Width × Height.", "workingOut": "(a + 5)(a + 4)" }
        ]
      },
      {
        "id": "y7-3h-q3c",
        "type": "short_answer",
        "question": "c) Deduce that $(a + 5)(a + 4) = a^2 + 9a + 20$ for all values of $a$.",
        "a": "a² + 9a + 20",
        "solutionSteps": [
          { "explanation": "Sum the four sub-rectangle areas.", "workingOut": "a^2 + 5a + 4a + 20" },
          { "explanation": "Collect like terms.", "workingOut": "a^2 + 9a + 20" },
          { "explanation": "This equals ABCD area, so the identity holds.", "workingOut": "(a+5)(a+4) = a^2 + 9a + 20" }
        ]
      },
      {
        "id": "y7-3h-q3d",
        "type": "short_answer",
        "question": "d) Find the perimeter of each of the rectangles ①, ②, ③ and ④.",
        "a": "① = 4a, ② = 2a + 10, ③ = 2a + 8, ④ = 18",
        "solutionSteps": [
          { "explanation": "P① = 2(a + a)", "workingOut": "4a" },
          { "explanation": "P② = 2(5 + a)", "workingOut": "2a + 10" },
          { "explanation": "P③ = 2(a + 4)", "workingOut": "2a + 8" },
          { "explanation": "P④ = 2(5 + 4)", "workingOut": "18" }
        ]
      },
      {
        "id": "y7-3h-q3e",
        "type": "short_answer",
        "question": "e) Find the perimeter of rectangle $ABCD$.",
        "a": "4a + 18",
        "solutionSteps": [
          { "explanation": "P = 2(width + height).", "workingOut": "2[(a+5)+(a+4)] = 2(2a+9) = 4a + 18\\ \\text{cm}" }
        ]
      }
    ]
  },
  {
    "id": "y7-3h-q4",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For the shape below, find:\na) the perimeter of the shaded region\nb) the area of the shaded region",
    "a": null,
    "t": "Chapter review",
    "hint": "Trace all 6 outer edges for the perimeter. Split into two rectangles for the area.",
    "solutionSteps": [
      { "explanation": "Six sides of the staircase shape.", "workingOut": "4 + 2p + 4 + p + 8 + 3p = 6p + 16" },
      { "explanation": "Area: split into left (2p × 4) + right (p × 8).", "workingOut": "8p + 8p = 16p" }
    ],
    "graphData": {
      "geometry": {
        "width": 260,
        "points": {
          "A": [0, 0], "B": [0, 4], "C": [4, 4],
          "D": [4, 8], "E": [6, 8], "F": [6, 0]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "E" },
          { "from": "E", "to": "F" },
          { "from": "F", "to": "A" }
        ],
        "angles": [
          { "at": "A", "right": true },
          { "at": "B", "right": true },
          { "at": "C", "right": true },
          { "at": "D", "right": true },
          { "at": "E", "right": true },
          { "at": "F", "right": true }
        ],
        "sideLabels": [
          { "between": ["A", "B"], "text": "4 cm" },
          { "between": ["B", "C"], "text": "2p cm" },
          { "between": ["C", "D"], "text": "4 cm" },
          { "between": ["D", "E"], "text": "p cm" },
          { "between": ["E", "F"], "text": "8 cm" },
          { "between": ["F", "A"], "text": "3p cm" }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y7-3h-q4a",
        "type": "short_answer",
        "question": "a) Find the perimeter of the shaded region.",
        "a": "6p + 16",
        "solutionSteps": [
          { "explanation": "Add all 6 sides.", "workingOut": "4 + 2p + 4 + p + 8 + 3p = 6p + 16\\ \\text{cm}" }
        ]
      },
      {
        "id": "y7-3h-q4b",
        "type": "short_answer",
        "question": "b) Find the area of the shaded region.",
        "a": "16p",
        "solutionSteps": [
          { "explanation": "Split: left rectangle (2p × 4) + right column (p × 8).", "workingOut": "8p + 8p = 16p\\ \\text{cm}^2" }
        ]
      }
    ]
  },
  {
    "id": "y7-3h-q5",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "For the diagram below:\na) Find the areas of rectangle $ABCD$ and the shaded rectangle.\nb) Find the difference of the two areas found in part a.",
    "a": null,
    "t": "Chapter review",
    "hint": "$ABCD$ has dimensions $(m+4)$ cm by $(2m+4)$ cm. The shaded rectangle is $m$ cm by $2m$ cm.",
    "solutionSteps": [
      { "explanation": "Area of ABCD = (m+4)(2m+4).", "workingOut": "2m^2 + 4m + 8m + 16 = 2m^2 + 12m + 16" },
      { "explanation": "Area of shaded = m × 2m.", "workingOut": "2m^2" },
      { "explanation": "Difference.", "workingOut": "(2m^2 + 12m + 16) - 2m^2 = 12m + 16" }
    ],
    "graphData": {
      "geometry": {
        "width": 260,
        "points": {
          "A": [0, 0], "B": [0, 8], "C": [6, 8], "D": [6, 0],
          "E": [2, 8], "F": [2, 4], "G": [0, 4]
        },
        "segments": [
          { "from": "A", "to": "B" },
          { "from": "B", "to": "C" },
          { "from": "C", "to": "D" },
          { "from": "D", "to": "A" },
          { "from": "B", "to": "E" },
          { "from": "E", "to": "F" },
          { "from": "F", "to": "G" }
        ],
        "angles": [
          { "at": "A", "right": true },
          { "at": "B", "right": true },
          { "at": "C", "right": true },
          { "at": "D", "right": true },
          { "at": "E", "right": true },
          { "at": "F", "right": true },
          { "at": "G", "right": true }
        ],
        "sideLabels": [
          { "between": ["B", "E"], "text": "m cm" },
          { "between": ["E", "C"], "text": "4 cm" },
          { "between": ["G", "B"], "text": "2m cm" },
          { "between": ["A", "G"], "text": "4 cm" }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y7-3h-q5a",
        "type": "short_answer",
        "question": "a) Find the areas of rectangle $ABCD$ and the shaded rectangle.",
        "a": "ABCD: 2m² + 12m + 16; shaded: 2m²",
        "solutionSteps": [
          { "explanation": "Area of ABCD.", "workingOut": "(m+4)(2m+4) = 2m^2 + 12m + 16" },
          { "explanation": "Area of shaded.", "workingOut": "m \\times 2m = 2m^2" }
        ]
      },
      {
        "id": "y7-3h-q5b",
        "type": "short_answer",
        "question": "b) Find the difference of the two areas found in part a.",
        "a": "12m + 16",
        "solutionSteps": [
          { "explanation": "Subtract shaded area from ABCD area.", "workingOut": "(2m^2 + 12m + 16) - 2m^2 = 12m + 16\\ \\text{cm}^2" }
        ]
      }
    ]
  },
  {
    "id": "y7-3h-q6",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "Answer each part about last digits of squares.",
    "a": null,
    "t": "Chapter review",
    "hint": "The last digit of $p^2$ depends only on the last digit of $p$. Check digits 0–9.",
    "solutionSteps": [
      { "explanation": "Check squares of digits 0–9 for their last digits.", "workingOut": "0,1,4,9,6,5,6,9,4,1 \\Rightarrow \\{0,1,4,5,6,9\\}" }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y7-3h-q6a",
        "type": "short_answer",
        "question": "a) If $p$ is a whole number, what are the possible last digits of $p^2$? (For example, if $p = 83$, the last digit is 9.)",
        "a": "0, 1, 4, 5, 6, 9",
        "solutionSteps": [
          { "explanation": "Compute last digit of n² for n = 0 to 9.", "workingOut": "0\\to0,\\ 1\\to1,\\ 2\\to4,\\ 3\\to9,\\ 4\\to6,\\ 5\\to5,\\ 6\\to6,\\ 7\\to9,\\ 8\\to4,\\ 9\\to1" },
          { "explanation": "Collect distinct values.", "workingOut": "\\{0, 1, 4, 5, 6, 9\\}" }
        ]
      },
      {
        "id": "y7-3h-q6b",
        "type": "short_answer",
        "question": "b) If $p$ is an even number, what are the possible values of the last digit of $p^2 + 1$? (For example, if $p = 78$, the last digit of $p^2 + 1$ is 5.)",
        "a": "1, 5, 7",
        "solutionSteps": [
          { "explanation": "Even p ends in 0,2,4,6,8. Compute p²+1 last digit for each.", "workingOut": "0^2+1=1,\\ 2^2+1=5,\\ 4^2+1=17,\\ 6^2+1=37,\\ 8^2+1=65" },
          { "explanation": "Last digits are 1, 5, 7, 7, 5.", "workingOut": "\\text{Possible last digits: }\\{1, 5, 7\\}" }
        ]
      },
      {
        "id": "y7-3h-q6c",
        "type": "short_answer",
        "question": "c) If $q$ is an even whole number that is also divisible by 5, what are the possible last digits of $q$?",
        "a": "0",
        "solutionSteps": [
          { "explanation": "Even AND divisible by 5 → divisible by 10.", "workingOut": "q = 10, 20, 30, \\ldots \\Rightarrow \\text{last digit always } 0" }
        ]
      },
      {
        "id": "y7-3h-q6d",
        "type": "teacher_review",
        "question": "d) Is it true that for any even whole number $p$, $p^2 + 1$ is not divisible by 3?",
        "a": "Yes. From part b), p²+1 for even p always ends in 1, 5 or 7. More formally: for any integer p, either p ≡ 0, 1 or 2 (mod 3). Then p² ≡ 0, 1 or 1 (mod 3) respectively, so p²+1 ≡ 1, 2 or 2 (mod 3). In every case the remainder is not 0, so p²+1 is never divisible by 3.",
        "solutionSteps": [
          { "explanation": "p ≡ 0 (mod 3):", "workingOut": "p^2 + 1 \\equiv 0 + 1 = 1 \\pmod{3}" },
          { "explanation": "p ≡ 1 (mod 3):", "workingOut": "p^2 + 1 \\equiv 1 + 1 = 2 \\pmod{3}" },
          { "explanation": "p ≡ 2 (mod 3):", "workingOut": "p^2 + 1 \\equiv 4 + 1 = 5 \\equiv 2 \\pmod{3}" },
          { "explanation": "In all cases p²+1 is not divisible by 3.", "workingOut": "\\therefore p^2 + 1 \\not\\equiv 0 \\pmod{3}" }
        ]
      }
    ]
  },
  {
    "id": "y7-3h-q7",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In this question, explore the identity $(m+3)(m-3) = m^2 - 9$.",
    "a": null,
    "t": "Chapter review",
    "hint": "Fill each row of the table, then observe that $(m+3)(m-3)$ always equals $m^2 - 9$.",
    "solutionSteps": [
      { "explanation": "Expand (m+3)(m-3) algebraically.", "workingOut": "(m+3)(m-3) = m^2 - 3m + 3m - 9 = m^2 - 9" }
    ],
    "graphData": null,
    "subQuestions": [
      {
        "id": "y7-3h-q7a",
        "type": "teacher_review",
        "question": "a) Copy and fill in this table.\n\n$$\\begin{array}{|c|c|c|c|c|} \\hline m & m+3 & m-3 & (m+3)(m-3) & m^2 \\\\ \\hline 3 & 6 & 0 & 0 & 9 \\\\ \\hline 4 & & & & \\\\ \\hline 5 & & & & \\\\ \\hline 6 & & & & \\\\ \\hline 7 & & & & \\\\ \\hline 8 & & & & \\\\ \\hline \\end{array}$$",
        "a": "m=4: 7,1,7,16; m=5: 8,2,16,25; m=6: 9,3,27,36; m=7: 10,4,40,49; m=8: 11,5,55,64",
        "solutionSteps": [
          { "explanation": "m=4", "workingOut": "7,\\ 1,\\ 7,\\ 16" },
          { "explanation": "m=5", "workingOut": "8,\\ 2,\\ 16,\\ 25" },
          { "explanation": "m=6", "workingOut": "9,\\ 3,\\ 27,\\ 36" },
          { "explanation": "m=7", "workingOut": "10,\\ 4,\\ 40,\\ 49" },
          { "explanation": "m=8", "workingOut": "11,\\ 5,\\ 55,\\ 64" }
        ]
      },
      {
        "id": "y7-3h-q7b",
        "type": "teacher_review",
        "question": "b) Deduce that $(m+3)(m-3) = m^2 - 9$ for $m = 3, 4, 5, 6, 7$ and $8$.",
        "a": "From the table: m=3: 0=9-9=0 ✓; m=4: 7=16-9=7 ✓; m=5: 16=25-9=16 ✓; m=6: 27=36-9=27 ✓; m=7: 40=49-9=40 ✓; m=8: 55=64-9=55 ✓. The (m+3)(m-3) column matches m²-9 in every row.",
        "solutionSteps": [
          { "explanation": "m=3: (m+3)(m-3)=0, m²-9=0", "workingOut": "0 = 9-9 = 0\\ \\checkmark" },
          { "explanation": "m=4", "workingOut": "7 = 16-9 = 7\\ \\checkmark" },
          { "explanation": "m=5", "workingOut": "16 = 25-9 = 16\\ \\checkmark" },
          { "explanation": "m=6", "workingOut": "27 = 36-9 = 27\\ \\checkmark" },
          { "explanation": "m=7", "workingOut": "40 = 49-9 = 40\\ \\checkmark" },
          { "explanation": "m=8", "workingOut": "55 = 64-9 = 55\\ \\checkmark" }
        ]
      },
      {
        "id": "y7-3h-q7c",
        "type": "teacher_review",
        "question": "c) Why does $m^2 - 9 = (m+3)(m-3)$ for all whole numbers $m$?",
        "a": "Expand (m+3)(m-3) using the distributive law: (m+3)(m-3) = m²-3m+3m-9 = m²-9. The middle terms cancel, so the identity holds for every value of m.",
        "solutionSteps": [
          { "explanation": "Expand using distributive law.", "workingOut": "(m+3)(m-3) = m^2 - 3m + 3m - 9" },
          { "explanation": "The middle terms cancel.", "workingOut": "= m^2 - 9\\ \\checkmark" }
        ]
      }
    ]
  }
];