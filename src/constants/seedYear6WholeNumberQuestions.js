export const WHOLE_NUMBER_QUESTIONS_Y6 = [
  // ==========================================
  // SUBTOPIC 1: Roman Numerals (WN1)
  // ==========================================
  {
    id: "y6-wn-q1",
    c: "WN1",
    t: "Roman Numerals",
    type: "short_answer",
    difficulty: "easy",
    q: "Convert the Roman numeral $CLXXIV$ to a Hindu-Arabic numeral (our standard number system).",
    a: "174",
    opts: [],
    h: "Break the Roman numeral down from left to right: $C = 100$, $L = 50$, $X = 10$, and look out for subtractive pairs like $IV$.",
    s: "To convert $CLXXIV$:\n1. $C = 100$\n2. $L = 50$\n3. $XX = 10 + 10 = 20$\n4. $IV = 5 - 1 = 4$\n\nAdding these together: $100 + 50 + 20 + 4 = 174$.",
    solutionSteps: [
      {
        explanation: "Identify the value of each individual Roman numeral symbol in the expression.",
        workingOut: "\\begin{aligned} C &= 100 \\\\ L &= 50 \\\\ X &= 10 \\\\ V &= 5 \\\\ I &= 1 \\end{aligned}"
      },
      {
        explanation: "Group the symbols and check for subtractive patterns. Since $I$ (1) is placed before $V$ (5), it represents subtraction: $5 - 1 = 4$.",
        workingOut: "\\begin{aligned} CLXXIV &= C + L + X + X + (V - I) \\\\ &= 100 + 50 + 10 + 10 + (5 - 1) \\end{aligned}"
      },
      {
        explanation: "Sum the values to find the final Hindu-Arabic numeral.",
        workingOut: "100 + 50 + 20 + 4 = 174"
      }
    ]
  },
  {
    id: "y6-wn-q2",
    c: "WN1",
    t: "Roman Numerals",
    type: "short_answer",
    difficulty: "easy",
    q: "Convert the Roman numeral $CDLVI$ to a Hindu-Arabic numeral.",
    a: "456",
    opts: [],
    h: "Note that $C$ (100) comes before $D$ (500), which forms the subtractive pair $CD = 400$.",
    s: "To convert $CDLVI$:\n1. $CD = 500 - 100 = 400$\n2. $L = 50$\n3. $V = 5$\n4. $I = 1$\n\nSumming the values: $400 + 50 + 5 + 1 = 456$.",
    solutionSteps: [
      {
        explanation: "Identify standard values and detect the subtractive pair $CD$.",
        workingOut: "\\begin{aligned} CD &= 500 - 100 = 400 \\\\ L &= 50 \\\\ V &= 5 \\\\ I &= 1 \\end{aligned}"
      },
      {
        explanation: "Sum the values of the grouped segments.",
        workingOut: "\\begin{aligned} CDLVI &= CD + L + V + I \\\\ &= 400 + 50 + 5 + 1 \\\\ &= 456 \\end{aligned}"
      }
    ]
  },
  {
    id: "y6-wn-q3",
    c: "WN1",
    t: "Roman Numerals",
    type: "short_answer",
    difficulty: "medium",
    q: "Convert the Roman numeral $CMXCVIII$ to a Hindu-Arabic numeral.",
    a: "998",
    opts: [],
    h: "Look for subtractive pairs: $CM$ (100 before 1000) and $XC$ (10 before 100).",
    s: "To convert $CMXCVIII$:\n1. $CM = 1000 - 100 = 900$\n2. $XC = 100 - 10 = 90$\n3. $VIII = 5 + 3 = 8$\n\nSumming the values: $900 + 90 + 8 = 998$.",
    solutionSteps: [
      {
        explanation: "Identify the subtractive pairs $CM$ and $XC$ along with the basic numerals.",
        workingOut: "\\begin{aligned} CM &= 1000 - 100 = 900 \\\\ XC &= 100 - 10 = 90 \\\\ VIII &= 5 + 3 = 8 \\end{aligned}"
      },
      {
        explanation: "Sum the values of the segments together.",
        workingOut: "\\begin{aligned} CMXCVIII &= 900 + 90 + 8 \\\\ &= 998 \\end{aligned}"
      }
    ]
  },
  {
    id: "y6-wn-q4",
    c: "WN1",
    t: "Roman Numerals",
    type: "short_answer",
    difficulty: "medium",
    q: "Convert the Roman numeral $CCLXIX$ to a Hindu-Arabic numeral.",
    a: "269",
    opts: [],
    h: "Break down the parts: $CC = 200$, $LX = 60$, and $IX$ is a subtractive pair.",
    s: "To convert $CCLXIX$:\n1. $CC = 200$\n2. $L = 50$\n3. $X = 10$\n4. $IX = 10 - 1 = 9$\n\nSumming the values: $200 + 50 + 10 + 9 = 269$.",
    solutionSteps: [
      {
        explanation: "Group the numeral symbols into hundreds, tens, and units.",
        workingOut: "\\begin{aligned} CC &= 200 \\\\ LX &= 50 + 10 = 60 \\\\ IX &= 10 - 1 = 9 \\end{aligned}"
      },
      {
        explanation: "Sum the grouped values.",
        workingOut: "200 + 60 + 9 = 269"
      }
    ]
  },
  {
    id: "y6-wn-q5",
    c: "WN1",
    t: "Roman Numerals",
    type: "short_answer",
    difficulty: "medium",
    q: "Convert the Roman numeral $DCCLX$ to a Hindu-Arabic numeral.",
    a: "760",
    opts: [],
    h: "Break down the parts: $D = 500$, $CC = 200$, $L = 50$, and $X = 10$.",
    s: "To convert $DCCLX$:\n- $DCC = 500 + 200 = 700$\n- $L = 50$\n- $X = 10$\n\nSumming these: $700 + 50 + 10 = 760$.",
    solutionSteps: [
      {
        explanation: "Group the numerals into their components.",
        workingOut: "\\begin{aligned} DCC &= 500 + 100 + 100 = 700 \\\\ LX &= 50 + 10 = 60 \\end{aligned}"
      },
      {
        explanation: "Add the components together.",
        workingOut: "700 + 60 = 760"
      }
    ]
  },
  {
    id: "y6-wn-q6",
    c: "WN1",
    t: "Roman Numerals",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Express the number $840$ in Roman numerals.",
    a: "DCCCXL",
    opts: ["DCCCXL", "DCCCXC", "DCCXL", "CMXL"],
    h: "Write the number by breaking it down into hundreds and tens: $800 + 40$. Remember $800 = 500 + 300$ and $40$ is written by subtracting $10$ from $50$.",
    s: "To express $840$ in Roman numerals:\n1. Break it down: $800 + 40$\n2. $800 = DCCC$ (500 + 100 + 100 + 100)\n3. $40 = XL$ (10 subtracted from 50)\n\nCombine the parts: $DCCCXL$.",
    solutionSteps: [
      {
        explanation: "Separate the number into place value components.",
        workingOut: "840 = 800 + 40"
      },
      {
        explanation: "Find the Roman numeral representations for each part.",
        workingOut: "\\begin{aligned} 800 &= DCCC \\\\ 40 &= XL \\quad (10 \\text{ before } 50) \\end{aligned}"
      },
      {
        explanation: "Combine the components together.",
        workingOut: "DCCC + XL = DCCCXL"
      }
    ]
  },
  {
    id: "y6-wn-q7",
    c: "WN1",
    t: "Roman Numerals",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Express the number $946$ in Roman numerals.",
    a: "CMXLVI",
    opts: ["CMXLVI", "CMXVI", "DCCCCXLVI", "CMLXVI"],
    h: "Break the number into $900 + 40 + 6$. Note that $900$ is written as $100$ subtracted from $1000$, and $40$ is $10$ subtracted from $50$.",
    s: "To express $946$ in Roman numerals:\n1. Break it down: $900 + 40 + 6$\n2. $900 = CM$ (1000 - 100)\n3. $40 = XL$ (50 - 10)\n4. $6 = VI$ (5 + 1)\n\nCombine the parts: $CMXLVI$.",
    solutionSteps: [
      {
        explanation: "Separate the number into hundreds, tens, and units.",
        workingOut: "946 = 900 + 40 + 6"
      },
      {
        explanation: "Find the Roman numeral equivalents for each place value.",
        workingOut: "\\begin{aligned} 900 &= CM \\quad (1000 - 100) \\\\ 40 &= XL \\quad (50 - 10) \\\\ 6 &= VI \\quad (5 + 1) \\end{aligned}"
      },
      {
        explanation: "Combine the parts in order.",
        workingOut: "CM + XL + VI = CMXLVI"
      }
    ]
  },
  {
    id: "y6-wn-q8",
    c: "WN1",
    t: "Roman Numerals",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Express the number $1996$ in Roman numerals.",
    a: "MCMXCVI",
    opts: ["MCMXCVI", "MCMLXXXXVI", "MCMXCIV", "MXMXCVI"],
    h: "Break down into thousands, hundreds, tens, and units: $1000 + 900 + 90 + 6$. Check the subtractive notations for $900$ and $90$.",
    s: "To express $1996$:\n1. $1000 = M$\n2. $900 = CM$ (1000 - 100)\n3. $90 = XC$ (100 - 10)\n4. $6 = VI$ (5 + 1)\n\nCombine: $MCMXCVI$.",
    solutionSteps: [
      {
        explanation: "Separate the number into its place value components.",
        workingOut: "1996 = 1000 + 900 + 90 + 6"
      },
      {
        explanation: "Translate each section into Roman numerals.",
        workingOut: "\\begin{aligned} 1000 &= M \\\\ 900 &= CM \\\\ 90 &= XC \\\\ 6 &= VI \\end{aligned}"
      },
      {
        explanation: "Combine all parts together.",
        workingOut: "M + CM + XC + VI = MCMXCVI"
      }
    ]
  },
  {
    id: "y6-wn-q9",
    c: "WN1",
    t: "Roman Numerals",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Express the number $439$ in Roman numerals.",
    a: "CDXXXIX",
    opts: ["CDXXXIX", "CCCCXXXIX", "CMXXXIX", "CDXLIX"],
    h: "Break down the number into $400 + 30 + 9$. Remember that $400$ is $CD$ and $9$ is $IX$.",
    s: "To express $439$:\n1. $400 = CD$\n2. $30 = XXX$\n3. $9 = IX$\n\nCombine: $CDXXXIX$.",
    solutionSteps: [
      {
        explanation: "Decompose the number into hundreds, tens, and units.",
        workingOut: "439 = 400 + 30 + 9"
      },
      {
        explanation: "Express each value using Roman numerals.",
        workingOut: "\\begin{aligned} 400 &= CD \\\\ 30 &= XXX \\\\ 9 &= IX \\end{aligned}"
      },
      {
        explanation: "Combine the symbols.",
        workingOut: "CD + XXX + IX = CDXXXIX"
      }
    ]
  },
  {
    id: "y6-wn-q10",
    c: "WN1",
    t: "Roman Numerals",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Express the number $88$ in Roman numerals.",
    a: "LXXXVIII",
    opts: ["LXXXVIII", "XXVIII", "LXXXVII", "XCIII"],
    h: "Break down into $80 + 8$. $80$ is $L$ (50) plus three $X$'s, and $8$ is $V$ (5) plus three $I$'s.",
    s: "To express $88$:\n1. $80 = LXXX$\n2. $8 = VIII$\n\nCombine: $LXXXVIII$.",
    solutionSteps: [
      {
        explanation: "Break the number into tens and units.",
        workingOut: "88 = 80 + 8"
      },
      {
        explanation: "Convert each part into Roman numerals.",
        workingOut: "\\begin{aligned} 80 &= LXXX \\\\ 8 &= VIII \\end{aligned}"
      },
      {
        explanation: "Add the numerals together.",
        workingOut: "LXXX + VIII = LXXXVIII"
      }
    ]
  },

  // ==========================================
  // SUBTOPIC 2: Place Value & Expanded Notation (WN2)
  // ==========================================
  {
    id: "y6-wn-q11",
    c: "WN2",
    t: "Place Value and Expanded Notation",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Write the number $3\\,482\\,905$ in words.",
    a: "Three million, four hundred and eighty-two thousand, nine hundred and five",
    opts: [
      "Three million, four hundred and eighty-two thousand, nine hundred and five",
      "Three million, forty-eight thousand, nine hundred and five",
      "Three hundred and forty-eight thousand, nine hundred and five",
      "Thirty-four million, eighty-two thousand, nine hundred and five"
    ],
    h: "Read the number in periods of three digits: Millions, Thousands, and Units. $3$ is in the millions period, $482$ is in the thousands, and $905$ is in the units.",
    s: "The number $3\\,482\\,905$ is grouped as:\n- $3$: Three million\n- $482$: four hundred and eighty-two thousand\n- $905$: nine hundred and five.\n\nCombined: 'Three million, four hundred and eighty-two thousand, nine hundred and five'.",
    solutionSteps: [
      {
        explanation: "Group the digits by standard three-digit periods (Millions, Thousands, Units).",
        workingOut: "\\text{Periods: } \\underbrace{3}_{\\text{Millions}} \\, \\underbrace{482}_{\\text{Thousands}} \\, \\underbrace{905}_{\\text{Units}}"
      },
      {
        explanation: "Write out the value of each period in words.",
        workingOut: "\\begin{aligned} 3 &\\rightarrow \\text{Three million} \\\\ 482 &\\rightarrow \\text{four hundred and eighty-two thousand} \\\\ 905 &\\rightarrow \\text{nine hundred and five} \\end{aligned}"
      },
      {
        explanation: "Combine all parts with appropriate commas.",
        workingOut: "\\text{Three million, four hundred and eighty-two thousand, nine hundred and five}"
      }
    ]
  },
  {
    id: "y6-wn-q12",
    c: "WN2",
    t: "Place Value and Expanded Notation",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Write the number $97\\,003\\,002$ in words.",
    a: "Ninety-seven million, three thousand and two",
    opts: [
      "Ninety-seven million, three thousand and two",
      "Ninety-seven million, three hundred thousand and two",
      "Nine million, seven hundred and three thousand and two",
      "Ninety-seven million, thirty thousand and two"
    ],
    h: "Look at the periods of three. $97$ is in the millions period. In the thousands period, we have only $003$. In the units period, we have $002$.",
    s: "The number $97\\,003\\,002$ is read as:\n- Millions period: $97 \\rightarrow$ Ninety-seven million\n- Thousands period: $003 \\rightarrow$ three thousand\n- Units period: $002 \\rightarrow$ two (and two).\n\nCombined: 'Ninety-seven million, three thousand and two'.",
    solutionSteps: [
      {
        explanation: "Group the number into three-digit periods.",
        workingOut: "\\text{Periods: } \\underbrace{97}_{\\text{Millions}} \\, \\underbrace{003}_{\\text{Thousands}} \\, \\underbrace{002}_{\\text{Units}}"
      },
      {
        explanation: "Convert each period to words. Note that empty placeholders (zeros) are skipped.",
        workingOut: "\\begin{aligned} 97 &\\rightarrow \\text{Ninety-seven million} \\\\ 3 &\\rightarrow \\text{three thousand} \\\\ 2 &\\rightarrow \\text{two} \\end{aligned}"
      },
      {
        explanation: "Combine into a single phrase.",
        workingOut: "\\text{Ninety-seven million, three thousand and two}"
      }
    ]
  },
  {
    id: "y6-wn-q13",
    c: "WN2",
    t: "Place Value and Expanded Notation",
    type: "multiple_choice",
    difficulty: "easy",
    q: "What is the place value of the digit $7$ in the number $547\\,210$?",
    a: "7,000",
    opts: ["7,000", "70,000", "700", "7"],
    h: "Identify which column the digit $7$ sits in (Units, Tens, Hundreds, Thousands, Ten Thousands, or Hundred Thousands).",
    s: "In the number $547\\,210$, the digit $7$ is in the thousands place. Therefore, its place value is $7 \\times 1000 = 7,000$.",
    solutionSteps: [
      {
        explanation: "Assign place values to each digit of the number $547\\,210$ from right to left.",
        workingOut: "\\begin{aligned} 0 &\\rightarrow \\text{Units} \\\\ 1 &\\rightarrow \\text{Tens} \\\\ 2 &\\rightarrow \\text{Hundreds} \\\\ 7 &\\rightarrow \\text{Thousands} \\\\ 4 &\\rightarrow \\text{Ten Thousands} \\\\ 5 &\\rightarrow \\text{Hundred Thousands} \\end{aligned}"
      },
      {
        explanation: "Multiply the digit $7$ by its place value ($1000$).",
        workingOut: "7 \\times 1000 = 7,000"
      }
    ]
  },
  {
    id: "y6-wn-q14",
    c: "WN2",
    t: "Place Value and Expanded Notation",
    type: "short_answer",
    difficulty: "medium",
    q: "Write the following expanded expression as an ordinary numeral:\n$(7 \\times 10^4) + (4 \\times 10^3) + (0 \\times 10^2) + (9 \\times 10^1) + (3 \\times 1)$",
    a: "74093",
    opts: [],
    h: "Calculate the value of each term ($10^4 = 10\\,000$, $10^3 = 1\\,000$, etc.) and add them together.",
    s: "Calculating the terms:\n- $7 \\times 10^4 = 70\\,000$\n- $4 \\times 10^3 = 4\\,000$\n- $0 \\times 10^2 = 0$\n- $9 \\times 10^1 = 90$\n- $3 \\times 1 = 3$\n\nSumming these up: $70\\,000 + 4\\,000 + 0 + 90 + 3 = 74\\,093$.",
    solutionSteps: [
      {
        explanation: "Expand the powers of 10 into standard numerical values.",
        workingOut: "\\begin{aligned} 10^4 &= 10,000 \\\\ 10^3 &= 1,000 \\\\ 10^2 &= 100 \\\\ 10^1 &= 10 \\end{aligned}"
      },
      {
        explanation: "Multiply each digit by its place value.",
        workingOut: "\\begin{aligned} 7 \\times 10,000 &= 70,000 \\\\ 4 \\times 1,000 &= 4,000 \\\\ 0 \\times 100 &= 0 \\\\ 9 \\times 10 &= 90 \\\\ 3 \\times 1 &= 3 \\end{aligned}"
      },
      {
        explanation: "Sum all the expanded parts.",
        workingOut: "70,000 + 4,000 + 0 + 90 + 3 = 74,093"
      }
    ]
  },
  {
    id: "y6-wn-q15",
    c: "WN2",
    t: "Place Value and Expanded Notation",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Write the number $8\\,352$ in expanded exponential notation.",
    a: "(8 * 10^3) + (3 * 10^2) + (5 * 10^1) + (2 * 1)",
    opts: [
      "(8 * 10^3) + (3 * 10^2) + (5 * 10^1) + (2 * 1)",
      "(8 * 10^4) + (3 * 10^3) + (5 * 10^2) + (2 * 10)",
      "(8 * 1000) + (3 * 100) + (5 * 10) + 2",
      "(8 * 10^3) + (3 * 10^2) + (5 * 10^2) + (2 * 1)"
    ],
    h: "Write the place value of each digit using powers of $10$. E.g. Thousands place is $10^3$, Hundreds is $10^2$, Tens is $10^1$, and Units is $1$.",
    s: "To express $8\\,352$:\n- $8$ is in Thousands ($8 \\times 10^3$)\n- $3$ is in Hundreds ($3 \\times 10^2$)\n- $5$ is in Tens ($5 \\times 10^1$)\n- $2$ is in Units ($2 \\times 1$)\n\nCombining these: $(8 \\times 10^3) + (3 \\times 10^2) + (5 \\times 10^1) + (2 \\times 1)$.",
    solutionSteps: [
      {
        explanation: "Determine the place value of each digit in $8,352$.",
        workingOut: "\\begin{aligned} 8 &\\rightarrow 8,000 \\\\ 3 &\\rightarrow 300 \\\\ 5 &\\rightarrow 50 \\\\ 2 &\\rightarrow 2 \\end{aligned}"
      },
      {
        explanation: "Represent each place value as a power of 10.",
        workingOut: "\\begin{aligned} 8,000 &= 8 \\times 10^3 \\\\ 300 &= 3 \\times 10^2 \\\\ 50 &= 5 \\times 10^1 \\\\ 2 &= 2 \\times 1 \\end{aligned}"
      },
      {
        explanation: "Combine the terms using addition.",
        workingOut: "(8 \\times 10^3) + (3 \\times 10^2) + (5 \\times 10^1) + (2 \\times 1)"
      }
    ]
  },
  {
    id: "y6-wn-q16",
    c: "WN2",
    t: "Place Value and Expanded Notation",
    type: "short_answer",
    difficulty: "easy",
    q: "What is the numerical place value of the digit $3$ in the number $27\\,318$?",
    a: "300",
    opts: [],
    h: "Identify which column the digit $3$ sits in.",
    s: "In the number $27\\,318$, the digit $3$ is in the hundreds place. Thus, its place value is $3 \\times 100 = 300$.",
    solutionSteps: [
      {
        explanation: "Locate the digit $3$ in the place value chart.",
        workingOut: "\\begin{array}{c|c|c|c|c} \\text{T.Th} & \\text{Th} & \\text{H} & \\text{T} & \\text{U} \\\\ \\hline 2 & 7 & \\mathbf{3} & 1 & 8 \\end{array}"
      },
      {
        explanation: "Since $3$ is in the Hundreds column, multiply the digit by 100.",
        workingOut: "3 \\times 100 = 300"
      }
    ]
  },
  {
    id: "y6-wn-q17",
    c: "WN2",
    t: "Place Value and Expanded Notation",
    type: "short_answer",
    difficulty: "medium",
    q: "Write the number **four hundred and five thousand, two hundred and twelve** in ordinary numerals.",
    a: "405212",
    opts: [],
    h: "Write the thousands period first (four hundred and five -> 405), then write the units period (two hundred and twelve -> 212). Join them.",
    s: "1. The thousands period is 'four hundred and five thousand' $= 405\\,000$.\n2. The units period is 'two hundred and twelve' $= 212$.\n\nCombining these gives $405\\,212$.",
    solutionSteps: [
      {
        explanation: "Identify the number in two separate parts: thousands period and units period.",
        workingOut: "\\begin{aligned} \\text{Thousands part} &= 405 \\\\ \\text{Units part} &= 212 \\end{aligned}"
      },
      {
        explanation: "Combine these parts into a single numeric value.",
        workingOut: "405,212"
      }
    ]
  },
  {
    id: "y6-wn-q18",
    c: "WN2",
    t: "Place Value and Expanded Notation",
    type: "short_answer",
    difficulty: "hard",
    q: "Write the number **six million, seventy-two thousand and five** in ordinary numerals.",
    a: "6072005",
    opts: [],
    h: "Break it down: Six million ($6\\,000\\,000$), seventy-two thousand ($72\\,000$), and five ($5$). Use placeholder zeros for columns with no values (like hundred thousands and hundreds/tens).",
    s: "To write six million, seventy-two thousand and five:\n- Millions column: $6$\n- Hundreds thousands column: $0$ (no hundred thousands mentioned)\n- Ten thousands column: $7$\n- Thousands column: $2$\n- Hundreds column: $0$\n- Tens column: $0$\n- Units column: $5$\n\nCombined: $6\\,072\\,005$.",
    solutionSteps: [
      {
        explanation: "Write out the value of each period component.",
        workingOut: "\\begin{aligned} \\text{Six million} &= 6,000,000 \\\\ \\text{Seventy-two thousand} &= 72,000 \\\\ \\text{Five} &= 5 \\end{aligned}"
      },
      {
        explanation: "Add these numbers together, noting the zero placeholders.",
        workingOut: "\\begin{array}{r@{\\quad}l} 6,000,000 & \\\\ 72,000 & \\\\ + \\quad \\quad \\quad 5 & \\\\ \\hline \\mathbf{6,072,005} & \\end{array}"
      }
    ]
  },
  {
    id: "y6-wn-q19",
    c: "WN2",
    t: "Place Value and Expanded Notation",
    type: "short_answer",
    difficulty: "medium",
    q: "Convert the following expanded notation to an ordinary numeral:\n$(9 \\times 10^5) + (8 \\times 10^3) + (2 \\times 10^2) + (6 \\times 1)$",
    a: "908206",
    opts: [],
    h: "Note that there is no $10^4$ (ten thousands) or $10^1$ (tens) term. Use $0$ as a placeholder for these positions.",
    s: "Expand the terms:\n- $9 \\times 10^5 = 900\\,000$\n- No $10^4$ term $= 0$\n- $8 \\times 10^3 = 8\\,000$\n- $2 \\times 10^2 = 200$\n- No $10^1$ term $= 0$\n- $6 \\times 1 = 6$\n\nSum: $900\\,000 + 8\\,000 + 200 + 6 = 908\\,206$.",
    solutionSteps: [
      {
        explanation: "Identify the digit for each place value power from $10^5$ down to $10^0$.",
        workingOut: "\\begin{aligned} 10^5 &\\rightarrow 9 \\\\ 10^4 &\\rightarrow 0 \\quad (\\text{missing}) \\\\ 10^3 &\\rightarrow 8 \\\\ 10^2 &\\rightarrow 2 \\\\ 10^1 &\\rightarrow 0 \\quad (\\text{missing}) \\\\ 10^0 &\\rightarrow 6 \\end{aligned}"
      },
      {
        explanation: "Assemble the digits in order of their place value columns.",
        workingOut: "\\text{Result: } 908,206"
      }
    ]
  },
  {
    id: "y6-wn-q20",
    c: "WN2",
    t: "Place Value and Expanded Notation",
    type: "short_answer",
    difficulty: "medium",
    q: "What is the numerical place value of the digit $9$ in the number $395\\,072$?",
    a: "90000",
    opts: [],
    h: "Find which position the digit $9$ holds. It is to the left of the thousands column.",
    s: "In the number $395\\,072$, the digit $9$ is in the ten thousands place. Its value is $9 \\times 10\\,000 = 90\\,000$.",
    solutionSteps: [
      {
        explanation: "Align digits to their corresponding columns.",
        workingOut: "\\begin{array}{c|c|c|c|c|c} \\text{H.Th} & \\text{T.Th} & \\text{Th} & \\text{H} & \\text{T} & \\text{U} \\\\ \\hline 3 & \\mathbf{9} & 5 & 0 & 7 & 2 \\end{array}"
      },
      {
        explanation: "Multiply the digit $9$ by its place value factor ($10,000$).",
        workingOut: "9 \\times 10,000 = 90,000"
      }
    ]
  },

  // ==========================================
  // SUBTOPIC 3: Rounding and Ordering (WN3)
  // ==========================================
  {
    id: "y6-wn-q21",
    c: "WN3",
    t: "Rounding and Estimation",
    type: "short_answer",
    difficulty: "easy",
    q: "Round off the number $83\\,642$ to the nearest $10\\,000$.",
    a: "80000",
    opts: [],
    h: "Look at the digit in the thousands place (which is $3$). If it is less than $5$, round down.",
    s: "1. The digit in the ten-thousands place is $8$.\n2. The digit to its right (thousands place) is $3$.\n3. Since $3 < 5$, we round down. The $8$ remains, and all digits to the right become zero.\n\nResult: $80\\,000$.",
    solutionSteps: [
      {
        explanation: "Identify the digit in the rounding place (ten-thousands) and the digit immediately to its right (thousands).",
        workingOut: "\\mathbf{8}\\underline{3},642"
      },
      {
        explanation: "Compare the check digit (thousands place) to 5. Since $3 < 5$, round down (keep the 8 and replace subsequent numbers with zeros).",
        workingOut: "3 < 5 \\rightarrow 80,000"
      }
    ]
  },
  {
    id: "y6-wn-q22",
    c: "WN3",
    t: "Rounding and Estimation",
    type: "short_answer",
    difficulty: "medium",
    q: "Round off the number $4\\,517\\,380$ to the nearest $10\\,000$.",
    a: "4520000",
    opts: [],
    h: "Identify the ten-thousands place (which has a $1$). Look at the digit to its right ($7$) to decide whether to round up or down.",
    s: "1. The ten-thousands place is $1$.\n2. The digit to its right is $7$.\n3. Since $7 \\ge 5$, round up. Add $1$ to the ten-thousands place ($1 + 1 = 2$) and change all digits to the right to zero.\n\nResult: $4\\,520\\,000$.",
    solutionSteps: [
      {
        explanation: "Locate the ten-thousands digit and the indicator digit.",
        workingOut: "4,5\\mathbf{1}\\underline{7},380"
      },
      {
        explanation: "Since the indicator digit is $7$, which is $5$ or greater, round up by adding 1 to the ten-thousands place.",
        workingOut: "7 \\ge 5 \\rightarrow 4,5(1+1)0,000 = 4,520,000"
      }
    ]
  },
  {
    id: "y6-wn-q23",
    c: "WN3",
    t: "Rounding and Estimation",
    type: "short_answer",
    difficulty: "easy",
    q: "Round off the number $849$ to the nearest $100$.",
    a: "800",
    opts: [],
    h: "Look at the tens place digit ($4$) to decide whether to round the hundreds digit up or down.",
    s: "1. Rounding place (hundreds): $8$\n2. Deciding digit (tens): $4$\n3. Since $4 < 5$, round down.\n\nResult: $800$.",
    solutionSteps: [
      {
        explanation: "Underline the hundreds place and check the tens digit.",
        workingOut: "\\mathbf{8}\\underline{4}9"
      },
      {
        explanation: "Because the tens digit is $4$ (less than 5), round down.",
        workingOut: "4 < 5 \\rightarrow 800"
      }
    ]
  },
  {
    id: "y6-wn-q24",
    c: "WN3",
    t: "Rounding and Estimation",
    type: "short_answer",
    difficulty: "easy",
    q: "Round off the number $750$ to the nearest $100$.",
    a: "800",
    opts: [],
    h: "Look at the tens place digit ($5$). When the digit is exactly $5$, we round up.",
    s: "1. Rounding place (hundreds): $7$\n2. Deciding digit (tens): $5$\n3. Since the tens digit is $5$, we round up. Add $1$ to $7$ to get $8$, and write zeros.\n\nResult: $800$.",
    solutionSteps: [
      {
        explanation: "Identify the digit to check.",
        workingOut: "\\mathbf{7}\\underline{5}0"
      },
      {
        explanation: "Since the deciding digit is exactly $5$, round up by adding 1 to the hundreds place.",
        workingOut: "5 \\ge 5 \\rightarrow 800"
      }
    ]
  },
  {
    id: "y6-wn-q25",
    c: "WN3",
    t: "Rounding and Estimation",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Is the number $86$ closer to $80$ or to $90$? Choose the correct statement.",
    a: "Closer to 90; rounds to 90",
    opts: [
      "Closer to 90; rounds to 90",
      "Closer to 80; rounds to 80",
      "Closer to 90; rounds to 80",
      "Closer to 80; rounds to 90"
    ],
    h: "Find the distance from $86$ to $80$ and to $90$. The midpoint is $85$.",
    s: "Distance to $80$: $86 - 80 = 6$\nDistance to $90$: $90 - 86 = 4$\n\nSince $4 < 6$, it is closer to $90$. Rounding $86$ to the nearest $10$ yields $90$.",
    solutionSteps: [
      {
        explanation: "Calculate the distance from $86$ to the two boundary tens ($80$ and $90$).",
        workingOut: "\\begin{aligned} \\text{Distance to } 80 &= |86 - 80| = 6 \\\\ \\text{Distance to } 90 &= |86 - 90| = 4 \\end{aligned}"
      },
      {
        explanation: "Compare the distances. The smaller distance indicates which number it is closer to.",
        workingOut: "4 < 6 \\rightarrow \\text{Closer to } 90"
      }
    ]
  },
  {
    id: "y6-wn-q26",
    c: "WN3",
    t: "Rounding and Estimation",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Compare $8^2$ and $60$ using the correct inequality symbol.",
    a: "8^2 > 60",
    opts: ["8^2 > 60", "8^2 < 60", "8^2 = 60", "None of the above"],
    h: "First calculate the value of $8^2$ (which is $8 \\times 8$) and then compare it to $60$.",
    s: "1. Calculate exponent: $8^2 = 8 \\times 8 = 64$\n2. Compare values: Since $64$ is greater than $60$, we write: $8^2 > 60$.",
    solutionSteps: [
      {
        explanation: "Evaluate the exponent $8^2$.",
        workingOut: "8^2 = 8 \\times 8 = 64"
      },
      {
        explanation: "Compare the result with $60$.",
        workingOut: "64 > 60"
      },
      {
        explanation: "Substitute the original expression back into the inequality.",
        workingOut: "8^2 > 60"
      }
    ]
  },
  {
    id: "y6-wn-q27",
    c: "WN3",
    t: "Rounding and Estimation",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Compare $3 \\times (4 + 2)$ and $20 - 2$ with the correct symbol.",
    a: "3 * (4 + 2) = 20 - 2",
    opts: [
      "3 * (4 + 2) = 20 - 2",
      "3 * (4 + 2) > 20 - 2",
      "3 * (4 + 2) < 20 - 2",
      "None of the above"
    ],
    h: "Evaluate both sides of the expression first. Follow the order of operations (BODMAS) for the left side.",
    s: "Left Side: $3 \\times (4 + 2) = 3 \\times 6 = 18$\nRight Side: $20 - 2 = 18$\n\nSince both sides equal $18$, the correct symbol is $=$.",
    solutionSteps: [
      {
        explanation: "Evaluate the left side, starting with the addition inside the brackets.",
        workingOut: "\\begin{aligned} 3 \\times (4 + 2) &= 3 \\times 6 \\\\ &= 18 \\end{aligned}"
      },
      {
        explanation: "Evaluate the right side.",
        workingOut: "20 - 2 = 18"
      },
      {
        explanation: "Compare the two final values.",
        workingOut: "18 = 18 \\rightarrow 3 \\times (4 + 2) = 20 - 2"
      }
    ]
  },
  {
    id: "y6-wn-q28",
    c: "WN3",
    t: "Rounding and Estimation",
    type: "short_answer",
    difficulty: "easy",
    q: "Round off $14\\,376$ to the nearest thousand ($1\\,000$).",
    a: "14000",
    opts: [],
    h: "Find the thousands digit ($4$) and check the hundreds digit ($3$) to its right.",
    s: "1. Rounding place (thousands): $4$\n2. Checking digit (hundreds): $3$\n3. Since $3 < 5$, round down.\n\nResult: $14\\,000$.",
    solutionSteps: [
      {
        explanation: "Identify the digits.",
        workingOut: "1\\mathbf{4},\\underline{3}76"
      },
      {
        explanation: "Because the hundreds digit is $3$ (less than 5), round down.",
        workingOut: "3 < 5 \\rightarrow 14,000"
      }
    ]
  },
  {
    id: "y6-wn-q29",
    c: "WN3",
    t: "Rounding and Estimation",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Compare $2^4$ and $4^2$ with the correct symbol.",
    a: "2^4 = 4^2",
    opts: ["2^4 = 4^2", "2^4 > 4^2", "2^4 < 4^2", "None of the above"],
    h: "Calculate $2^4$ ($2 \\times 2 \\times 2 \\times 2$) and $4^2$ ($4 \\times 4$) separately, then compare.",
    s: "1. $2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$\n2. $4^2 = 4 \\times 4 = 16$\n\nBoth values are equal, so $2^4 = 4^2$.",
    solutionSteps: [
      {
        explanation: "Evaluate the first power ($2^4$).",
        workingOut: "2^4 = 2 \\times 2 \\times 2 \\times 2 = 16"
      },
      {
        explanation: "Evaluate the second power ($4^2$).",
        workingOut: "4^2 = 4 \\times 4 = 16"
      },
      {
        explanation: "Compare the calculated values.",
        workingOut: "16 = 16 \\rightarrow 2^4 = 4^2"
      }
    ]
  },
  {
    id: "y6-wn-q30",
    c: "WN3",
    t: "Rounding and Estimation",
    type: "short_answer",
    difficulty: "hard",
    q: "Round off the number $899\\,950$ to the nearest hundred ($100$).",
    a: "900000",
    opts: [],
    h: "Find the hundreds digit ($9$). Look at the tens digit ($5$). Notice how rounding up triggers a chain of carrying over.",
    s: "1. Hundreds digit is $9$. Deciding digit (tens) is $5$, so round up.\n2. Add $1$ to the hundreds place: $9 + 1 = 10$ (write $0$, carry over $1$ to the thousands place).\n3. Thousands place: $9 + 1 = 10$ (write $0$, carry over $1$ to ten-thousands).\n4. Ten-thousands place: $9 + 1 = 10$ (write $0$, carry over $1$ to hundred-thousands).\n5. Hundred-thousands place: $8 + 1 = 9$.\n\nResult: $900\\,000$.",
    solutionSteps: [
      {
        explanation: "Identify the digit to round and the deciding digit.",
        workingOut: "899,\\mathbf{9}\\underline{5}0"
      },
      {
        explanation: "Since the deciding digit is $5$, we round up. Add 1 to the hundreds place, which carries over repeatedly to the left.",
        workingOut: "\\begin{aligned} 899,900 + 100 &= 900,000 \\end{aligned}"
      }
    ]
  },

  // ==========================================
  // SUBTOPIC 4: Basic Operations (WN4)
  // ==========================================
  {
    id: "y6-wn-q31",
    c: "WN4",
    t: "Basic Operations",
    type: "short_answer",
    difficulty: "medium",
    q: "Calculate: $85\\,314 - 67\\,429$",
    a: "17885",
    opts: [],
    h: "Set up the subtraction vertically. You will need to borrow from left columns because several digits on top are smaller than those on the bottom.",
    s: "Performing vertical subtraction:\n  $85\\,314 - 67\\,429 = 17\\,885$.",
    solutionSteps: [
      {
        explanation: "Align numbers vertically by place value.",
        workingOut: "\\begin{array}{r@{\\quad}l} 85,314 & \\\\ - \\quad 67,429 & \\\\ \\hline \\end{array}"
      },
      {
        explanation: "Subtract column-by-column starting from units, borrowing from the next left columns where necessary.",
        workingOut: "\\begin{array}{rccccc} & 7 & 14 & 12 & 10 & 14 \\\\ & \\cancel{8} & \\cancel{5} & \\cancel{3} & \\cancel{1} & \\cancel{4} \\\\ - & 6 & 7 & 4 & 2 & 9 \\\\ \\hline & 1 & 7 & 8 & 8 & 5 \\end{array}"
      }
    ]
  },
  {
    id: "y6-wn-q32",
    c: "WN4",
    t: "Basic Operations",
    type: "short_answer",
    difficulty: "hard",
    q: "Calculate: $2345 \\times 168$",
    a: "393960",
    opts: [],
    h: "Multiply $2345$ by each digit of $168$ ($8$, then $60$, then $100$) and add the partial products.",
    s: "Partial products:\n- $2345 \\times 8 = 18\\,760$\n- $2345 \\times 60 = 140\\,700$\n- $2345 \\times 100 = 234\\,500$\n\nSum of partial products: $18\\,760 + 140\\,700 + 234\\,500 = 393\\,960$.",
    solutionSteps: [
      {
        explanation: "Multiply $2345$ by the units digit ($8$).",
        workingOut: "2345 \\times 8 = 18,760"
      },
      {
        explanation: "Multiply $2345$ by the tens digit ($6$), adding a zero placeholder.",
        workingOut: "2345 \\times 60 = 140,700"
      },
      {
        explanation: "Multiply $2345$ by the hundreds digit ($1$), adding two zero placeholders.",
        workingOut: "2345 \\times 100 = 234,500"
      },
      {
        explanation: "Sum the three partial products.",
        workingOut: "\\begin{array}{r@{\\quad}l} 18,760 & \\\\ 140,700 & \\\\ + \\quad 234,500 & \\\\ \\hline \\mathbf{393,960} & \\end{array}"
      }
    ]
  },
  {
    id: "y6-wn-q33",
    c: "WN4",
    t: "Basic Operations",
    type: "multiple_choice",
    difficulty: "hard",
    q: "Find the quotient and remainder of the division: $17\\,459 \\div 25$",
    a: "Quotient: 698, Remainder: 9",
    opts: [
      "Quotient: 698, Remainder: 9",
      "Quotient: 698, Remainder: 19",
      "Quotient: 697, Remainder: 34",
      "Quotient: 699, Remainder: 4"
    ],
    h: "Use long division. Find how many times $25$ goes into $174$, then pull down digits step by step.",
    s: "1. $174 \\div 25 = 6$ remainder $24$\n2. Pull down $5 \\rightarrow 245 \\div 25 = 9$ remainder $20$\n3. Pull down $9 \\rightarrow 209 \\div 25 = 8$ remainder $9$\n\nThus, the quotient is $698$ and remainder is $9$. Check: $698 \\times 25 + 9 = 17\\,450 + 9 = 17\\,459$.",
    solutionSteps: [
      {
        explanation: "Perform long division step-by-step.",
        workingOut: "\\begin{array}{r|l} \\mathbf{698} & \\text{quotient} \\\\ 25 \\overline{) 17,459} & \\\\ -150 & (25 \\times 6) \\\\ \\hline 245 & \\\\ -225 & (25 \\times 9) \\\\ \\hline 209 & \\\\ -200 & (25 \\times 8) \\\\ \\hline \\mathbf{9} & \\text{remainder} \\end{array}"
      }
    ]
  },
  {
    id: "y6-wn-q34",
    c: "WN4",
    t: "Basic Operations",
    type: "short_answer",
    difficulty: "medium",
    q: "Find the sum: $824 + 27 + 513 + 9 + 2146$",
    a: "3519",
    opts: [],
    h: "Align all numbers vertically by their units column, then add them column by column from right to left, carrying over numbers as needed.",
    s: "Adding the numbers vertically:\n$824 + 27 + 513 + 9 + 2146 = 3\\,519$.",
    solutionSteps: [
      {
        explanation: "Align the digits vertically.",
        workingOut: "\\begin{array}{r@{\\quad}l} 2146 & \\\\ 824 & \\\\ 513 & \\\\ 27 & \\\\ + \\quad \\quad 9 & \\\\ \\hline \\end{array}"
      },
      {
        explanation: "Add the units column ($6+4+3+7+9 = 29$), write $9$, carry $2$. Add the tens column ($2 \\text{ carried} + 4 + 2 + 1 + 2 = 11$), write $1$, carry $1$. Add the hundreds column ($1 \\text{ carried} + 1 + 8 + 5 = 15$), write $5$, carry $1$. Add the thousands column ($1 \\text{ carried} + 2 = 3$).",
        workingOut: "3,519"
      }
    ]
  },
  {
    id: "y6-wn-q35",
    c: "WN4",
    t: "Basic Operations",
    type: "short_answer",
    difficulty: "medium",
    q: "Calculate: $8000 - 2478$",
    a: "5522",
    opts: [],
    h: "Since $8000$ has consecutive zeros, you must borrow starting all the way from the thousands place ($8$).",
    s: "Borrowing steps:\n- Borrow from thousands place: $8000$ becomes $7$ thousands, $9$ hundreds, $9$ tens, and $10$ units.\n- Subtract: $10-8=2$, $9-7=2$, $9-4=5$, $7-2=5$.\n\nResult: $5\\,522$.",
    solutionSteps: [
      {
        explanation: "Show the regrouping (borrowing) of $8,000$.",
        workingOut: "\\begin{array}{rccc} 7 & 9 & 9 & 10 \\\\ \\cancel{8} & \\cancel{0} & \\cancel{0} & \\cancel{0} \\\\ - \\quad 2 & 4 & 7 & 8 \\\\ \hline \\end{array}"
      },
      {
        explanation: "Perform the column subtractions.",
        workingOut: "5,522"
      }
    ]
  },
  {
    id: "y6-wn-q36",
    c: "WN4",
    t: "Basic Operations",
    type: "short_answer",
    difficulty: "easy",
    q: "Multiply: $234 \\times 16$",
    a: "3744",
    opts: [],
    h: "Multiply $234$ by $6$, then multiply $234$ by $10$, and add the results.",
    s: "1. $234 \\times 6 = 1\\,404$\n2. $234 \\times 10 = 2\\,340$\n\nSum: $1\\,404 + 2\\,340 = 3\\,744$.",
    solutionSteps: [
      {
        explanation: "Calculate the first partial product ($234 \\times 6$).",
        workingOut: "234 \\times 6 = 1,404"
      },
      {
        explanation: "Calculate the second partial product ($234 \\times 10$).",
        workingOut: "234 \\times 10 = 2,340"
      },
      {
        explanation: "Sum the two partial products.",
        workingOut: "\\begin{array}{r@{\\quad}l} 1,404 & \\\\ + \\quad 2,340 & \\\\ \\hline \\mathbf{3,744} & \\end{array}"
      }
    ]
  },
  {
    id: "y6-wn-q37",
    c: "WN4",
    t: "Basic Operations",
    type: "short_answer",
    difficulty: "medium",
    q: "What is the remainder when $586$ is divided by $15$?",
    a: "1",
    opts: [],
    h: "Find how many times $15$ goes into $586$ by performing division. The amount left over is the remainder.",
    s: "1. $58 \\div 15 = 3$ remainder $13$\n2. Bring down $6 \\rightarrow 136 \\div 15 = 9$ remainder $1$\n\nSo $586 = 39 \\times 15 + 1$. The remainder is $1$.",
    solutionSteps: [
      {
        explanation: "Divide $586$ by $15$ using long or short division.",
        workingOut: "586 \\div 15 = 39 \\quad \\text{with a remainder}"
      },
      {
        explanation: "Find the remainder by calculating the difference from the nearest multiple of 15.",
        workingOut: "\\begin{aligned} 15 \\times 39 &= 585 \\\\ \\text{Remainder} &= 586 - 585 = 1 \\end{aligned}"
      }
    ]
  },
  {
    id: "y6-wn-q38",
    c: "WN4",
    t: "Basic Operations",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Divide $149$ by $6$ and find the quotient and remainder.",
    a: "Quotient: 24, Remainder: 5",
    opts: [
      "Quotient: 24, Remainder: 5",
      "Quotient: 24, Remainder: 1",
      "Quotient: 25, Remainder: 0",
      "Quotient: 23, Remainder: 11"
    ],
    h: "Calculate how many times $6$ goes into $149$ (look at $14 \\div 6$, then the remaining units).",
    s: "1. $14 \\div 6 = 2$ remainder $2$\n2. Bring down $9 \\rightarrow 29 \\div 6 = 4$ remainder $5$\n\nQuotient is $24$, remainder is $5$.",
    solutionSteps: [
      {
        explanation: "Divide $149$ by $6$ step-by-step.",
        workingOut: "\\begin{aligned} 14 \\div 6 &= 2 \\text{ r } 2 \\\\ 29 \\div 6 &= 4 \\text{ r } 5 \\end{aligned}"
      },
      {
        explanation: "State the quotient and remainder.",
        workingOut: "\\text{Quotient} = 24, \\quad \\text{Remainder} = 5"
      }
    ]
  },
  {
    id: "y6-wn-q39",
    c: "WN4",
    t: "Basic Operations",
    type: "short_answer",
    difficulty: "easy",
    q: "Calculate: $385 + 748 + 196$",
    a: "1329",
    opts: [],
    h: "Add vertically: start with units ($5+8+6$), then tens, then hundreds, carrying numbers over appropriately.",
    s: "Performing addition:\n$385 + 748 + 196 = 1\\,329$.",
    solutionSteps: [
      {
        explanation: "Sum the units column ($5 + 8 + 6 = 19$). Write $9$, carry $1$.",
        workingOut: "\\begin{aligned} \\text{Units: } 5+8+6 &= 19 \\end{aligned}"
      },
      {
        explanation: "Sum the tens column ($1 \\text{ carried} + 8 + 4 + 9 = 22$). Write $2$, carry $2$.",
        workingOut: "\\begin{aligned} \\text{Tens: } 1+8+4+9 &= 22 \\end{aligned}"
      },
      {
        explanation: "Sum the hundreds column ($2 \\text{ carried} + 3 + 7 + 1 = 13$).",
        workingOut: "\\begin{aligned} \\text{Hundreds: } 2+3+7+1 &= 13 \\end{aligned}"
      },
      {
        explanation: "Assemble the sum.",
        workingOut: "1,329"
      }
    ]
  },
  {
    id: "y6-wn-q40",
    c: "WN4",
    t: "Basic Operations",
    type: "short_answer",
    difficulty: "easy",
    q: "Multiply: $84 \\times 13$",
    a: "1092",
    opts: [],
    h: "You can multiply $84 \\times 10$ and $84 \\times 3$, then add them.",
    s: "1. $84 \\times 10 = 840$\n2. $84 \\times 3 = 252$\n\nSum: $840 + 252 = 1\\,092$.",
    solutionSteps: [
      {
        explanation: "Multiply by the units digit ($84 \\times 3$).",
        workingOut: "84 \\times 3 = 252"
      },
      {
        explanation: "Multiply by the tens digit ($84 \\times 10$).",
        workingOut: "84 \\times 10 = 840"
      },
      {
        explanation: "Add the partial products.",
        workingOut: "252 + 840 = 1,092"
      }
    ]
  },

  // ==========================================
  // SUBTOPIC 5: Exponents & Order of Operations (WN5)
  // ==========================================
  {
    id: "y6-wn-q41",
    c: "WN5",
    t: "Powers and Exponential Notation",
    type: "short_answer",
    difficulty: "medium",
    q: "Evaluate using the order of operations (BODMAS):\n$8 \\times 9 - (18 - 8 \\div 2)$",
    a: "58",
    opts: [],
    h: "Always compute terms inside brackets first. Within brackets, division ($\\div$) takes priority over subtraction ($-$).",
    s: "1. Brackets first: $18 - 8 \\div 2$\n   - Divide first: $8 \\div 2 = 4$\n   - Subtract: $18 - 4 = 14$\n2. Replace brackets: $8 \\times 9 - 14$\n3. Multiply: $8 \\times 9 = 72$\n4. Subtract: $72 - 14 = 58$.",
    solutionSteps: [
      {
        explanation: "Start inside the brackets and apply division priority.",
        workingOut: "18 - (8 \\div 2) = 18 - 4"
      },
      {
        explanation: "Complete the operation inside the brackets.",
        workingOut: "18 - 4 = 14"
      },
      {
        explanation: "Substitute this value back into the original expression: $8 \\times 9 - 14$. Perform multiplication.",
        workingOut: "8 \\times 9 = 72"
      },
      {
        explanation: "Subtract to find the final result.",
        workingOut: "72 - 14 = 58"
      }
    ]
  },
  {
    id: "y6-wn-q42",
    c: "WN5",
    t: "Powers and Exponential Notation",
    type: "short_answer",
    difficulty: "hard",
    q: "Evaluate using the order of operations:\n$85 - [(18 \\div 3) - (32 \\div 16)] \\times 12 + 6$",
    a: "43",
    opts: [],
    h: "Work from the innermost brackets outward. Calculate $(18 \\div 3)$ and $(32 \\div 16)$ first.",
    s: "1. Inner brackets:\n   - $18 \\div 3 = 6$\n   - $32 \\div 16 = 2$\n2. Outer square brackets: $[6 - 2] = 4$\n3. Expression becomes: $85 - 4 \\times 12 + 6$\n4. Multiplication next: $4 \\times 12 = 48$\n5. Perform addition/subtraction from left to right:\n   - $85 - 48 = 37$\n   - $37 + 6 = 43$.",
    solutionSteps: [
      {
        explanation: "Evaluate the innermost divisions inside the brackets.",
        workingOut: "\\begin{aligned} 18 \\div 3 &= 6 \\\\ 32 \\div 16 &= 2 \\end{aligned}"
      },
      {
        explanation: "Evaluate the subtraction within the square brackets.",
        workingOut: "[6 - 2] = 4"
      },
      {
        explanation: "Substitute the brackets value back into the expression: $85 - 4 \\times 12 + 6$. Perform multiplication.",
        workingOut: "4 \\times 12 = 48"
      },
      {
        explanation: "Solve the remaining addition and subtraction from left to right.",
        workingOut: "\\begin{aligned} 85 - 48 + 6 &= 37 + 6 \\\\ &= 43 \\end{aligned}"
      }
    ]
  },
  {
    id: "y6-wn-q43",
    c: "WN5",
    t: "Powers and Exponential Notation",
    type: "short_answer",
    difficulty: "easy",
    q: "Evaluate: $(24 + 12) \\div 3 + 2$",
    a: "14",
    opts: [],
    h: "Brackets are computed first, then division, and finally addition.",
    s: "1. Brackets: $24 + 12 = 36$\n2. Division: $36 \\div 3 = 12$\n3. Addition: $12 + 2 = 14$.",
    solutionSteps: [
      {
        explanation: "Add inside the brackets first.",
        workingOut: "(24 + 12) = 36"
      },
      {
        explanation: "Perform the division ($36 \\div 3$).",
        workingOut: "36 \\div 3 = 12"
      },
      {
        explanation: "Add 2 to the result.",
        workingOut: "12 + 2 = 14"
      }
    ]
  },
  {
    id: "y6-wn-q44",
    c: "WN5",
    t: "Powers and Exponential Notation",
    type: "short_answer",
    difficulty: "medium",
    q: "Evaluate: $30 - 10 \\div (3 + 2)$",
    a: "28",
    opts: [],
    h: "BODMAS order: Brackets first, then Division, then Subtraction.",
    s: "1. Brackets: $3 + 2 = 5$\n2. Division: $10 \\div 5 = 2$\n3. Subtraction: $30 - 2 = 28$.",
    solutionSteps: [
      {
        explanation: "Evaluate the addition within brackets first.",
        workingOut: "(3 + 2) = 5"
      },
      {
        explanation: "Perform the division next.",
        workingOut: "10 \\div 5 = 2"
      },
      {
        explanation: "Perform the subtraction.",
        workingOut: "30 - 2 = 28"
      }
    ]
  },
  {
    id: "y6-wn-q45",
    c: "WN5",
    t: "Powers and Exponential Notation",
    type: "short_answer",
    difficulty: "easy",
    q: "Find the value of $3^4$.",
    a: "81",
    opts: [],
    h: "An exponent tells you how many times to multiply the base by itself: $3^4 = 3 \\times 3 \\times 3 \\times 3$.",
    s: "$3^4 = 3 \\times 3 \\times 3 \\times 3 = 9 \\times 9 = 81$.",
    solutionSteps: [
      {
        explanation: "Write out the power as a repeated multiplication.",
        workingOut: "3^4 = 3 \\times 3 \\times 3 \\times 3"
      },
      {
        explanation: "Multiply step-by-step.",
        workingOut: "\\begin{aligned} 3 \\times 3 &= 9 \\\\ 9 \\times 3 &= 27 \\\\ 27 \\times 3 &= 81 \\end{aligned}"
      }
    ]
  },
  {
    id: "y6-wn-q46",
    c: "WN5",
    t: "Powers and Exponential Notation",
    type: "short_answer",
    difficulty: "medium",
    q: "Find the value of $3 \\times 4^3$.",
    a: "192",
    opts: [],
    h: "According to BODMAS, exponents (orders) must be calculated before multiplication: calculate $4^3$ first.",
    s: "1. Exponent: $4^3 = 4 \\times 4 \\times 4 = 64$\n2. Multiplication: $3 \\times 64 = 192$.",
    solutionSteps: [
      {
        explanation: "Evaluate the exponent $4^3$ first.",
        workingOut: "4^3 = 4 \\times 4 \\times 4 = 64"
      },
      {
        explanation: "Multiply the result by $3$.",
        workingOut: "3 \\times 64 = 192"
      }
    ]
  },
  {
    id: "y6-wn-q47",
    c: "WN5",
    t: "Powers and Exponential Notation",
    type: "multiple_choice",
    difficulty: "easy",
    q: "Write the expression $5 \\times 5 \\times 5 \\times 5$ in exponential notation.",
    a: "5^4",
    opts: ["5^4", "5 * 4", "4^5", "20^1"],
    h: "Count how many times $5$ is multiplied by itself. This count is the exponent (power).",
    s: "The number $5$ is multiplied by itself $4$ times. In exponential notation, this is written as $5^4$.",
    solutionSteps: [
      {
        explanation: "Count the number of times the base ($5$) appears in the product.",
        workingOut: "\\underbrace{5 \\times 5 \\times 5 \\times 5}_{4 \\text{ times}}"
      },
      {
        explanation: "Write the base with the count as the exponent.",
        workingOut: "5^4"
      }
    ]
  },
  {
    id: "y6-wn-q48",
    c: "WN5",
    t: "Powers and Exponential Notation",
    type: "short_answer",
    difficulty: "easy",
    q: "Evaluate: $2^6$",
    a: "64",
    opts: [],
    h: "Multiply $2$ by itself $6$ times: $2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2$.",
    s: "$2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 64$.",
    solutionSteps: [
      {
        explanation: "Expand the exponential expression.",
        workingOut: "2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2"
      },
      {
        explanation: "Perform the repeated multiplication.",
        workingOut: "\\begin{aligned} 2 \\times 2 &= 4 \\\\ 4 \\times 2 &= 8 \\\\ 8 \\times 2 &= 16 \\\\ 16 \\times 2 &= 32 \\\\ 32 \\times 2 &= 64 \\end{aligned}"
      }
    ]
  },
  {
    id: "y6-wn-q49",
    c: "WN5",
    t: "Powers and Exponential Notation",
    type: "short_answer",
    difficulty: "easy",
    q: "Evaluate: $18 - 8 \\div 2 + 3$",
    a: "17",
    opts: [],
    h: "BODMAS rule: Division comes before addition and subtraction. Subtraction and addition are then done from left to right.",
    s: "1. Division: $8 \\div 2 = 4$\n2. Substitute back: $18 - 4 + 3$\n3. Left-to-right:\n   - $18 - 4 = 14$\n   - $14 + 3 = 17$.",
    solutionSteps: [
      {
        explanation: "Perform the division first.",
        workingOut: "8 \\div 2 = 4"
      },
      {
        explanation: "Substitute back and perform operations from left to right.",
        workingOut: "\\begin{aligned} 18 - 4 + 3 &= 14 + 3 \\\\ &= 17 \\end{aligned}"
      }
    ]
  },
  {
    id: "y6-wn-q50",
    c: "WN5",
    t: "Powers and Exponential Notation",
    type: "multiple_choice",
    difficulty: "medium",
    q: "Write the equation $8000 = 8 \\times 1000$ in exponential notation.",
    a: "8 * 10^3",
    opts: ["8 * 10^3", "8 * 10^2", "80^3", "8 * 10^4"],
    h: "Convert $1000$ into a power of $10$. Count the number of zeros in $1000$.",
    s: "1. $1000 = 10 \\times 10 \\times 10 = 10^3$\n2. Therefore, $8 \\times 1000 = 8 \\times 10^3$.",
    solutionSteps: [
      {
        explanation: "Express $1000$ as a product of tens.",
        workingOut: "1000 = 10 \\times 10 \\times 10"
      },
      {
        explanation: "Write the product of tens in exponential form.",
        workingOut: "1000 = 10^3"
      },
      {
        explanation: "Substitute $10^3$ back into the original multiplication.",
        workingOut: "8 \\times 1000 = 8 \\times 10^3"
      }
    ]
  },

  // ==========================================
  // SUBTOPIC 6: Word Problems and Averages (WN6)
  // ==========================================
  {
    id: "y6-wn-q51",
    c: "WN6",
    t: "Word Problems and Averages",
    type: "short_answer",
    difficulty: "medium",
    q: "The average of $4$ numbers is $8$. A fifth number is added, and the new average of all five numbers is $10$. What is the fifth number?",
    a: "18",
    opts: [],
    h: "First find the total sum of the first 4 numbers ($4 \\times \\text{average}$). Then find the total sum of the 5 numbers ($5 \\times \\text{new average}$). The difference is the fifth number.",
    s: "1. Sum of first 4 numbers: $4 \\times 8 = 32$\n2. Sum of 5 numbers: $5 \\times 10 = 50$\n3. The fifth number is the difference: $50 - 32 = 18$.",
    solutionSteps: [
      {
        explanation: "Calculate the sum of the original 4 numbers.",
        workingOut: "\\text{Sum of 4 numbers} = 4 \\times 8 = 32"
      },
      {
        explanation: "Calculate the sum of the 5 numbers after the new number is added.",
        workingOut: "\\text{Sum of 5 numbers} = 5 \\times 10 = 50"
      },
      {
        explanation: "Subtract the original sum from the new sum to find the value of the added number.",
        workingOut: "\\text{Fifth number} = 50 - 32 = 18"
      }
    ]
  },
  {
    id: "y6-wn-q52",
    c: "WN6",
    t: "Word Problems and Averages",
    type: "short_answer",
    difficulty: "hard",
    q: "A cricket player's batting average is $24$ runs across $6$ matches. If they score $108$ runs in their $7\\text{th}$ match, what is their new batting average?",
    a: "36",
    opts: [],
    h: "Find the total runs scored in the first $6$ matches. Add the $108$ runs from the $7\\text{th}$ match to get the new total. Divide by $7$.",
    s: "1. Runs in first 6 matches: $6 \\times 24 = 144$\n2. New total runs: $144 + 108 = 252$\n3. Divide by total matches (7): $252 \\div 7 = 36$.\n\nNew average is $36$.",
    solutionSteps: [
      {
        explanation: "Find the total runs scored in the first 6 matches.",
        workingOut: "\\text{Total runs (6 matches)} = 6 \\times 24 = 144"
      },
      {
        explanation: "Add the runs from the 7th match to find the new total runs.",
        workingOut: "\\text{New total runs} = 144 + 108 = 252"
      },
      {
        explanation: "Divide the new total runs by 7 matches to find the new average.",
        workingOut: "\\text{New average} = \\frac{252}{7} = 36"
      }
    ]
  },
  {
    id: "y6-wn-q53",
    c: "WN6",
    t: "Word Problems and Averages",
    type: "short_answer",
    difficulty: "medium",
    q: "Translate the following statement into a mathematical expression and evaluate:\n'The product of $8$ and $7$ is decreased by the quotient of $12$ and $4$.'",
    a: "53",
    opts: [],
    h: "'Product' means multiply ($\\times$). 'Decreased by' means subtract ($-$). 'Quotient' means divide ($\\div$). Write it as $(8 \\times 7) - (12 \\div 4)$.",
    s: "1. Translate: $(8 \\times 7) - (12 \\div 4)$\n2. Product: $8 \\times 7 = 56$\n3. Quotient: $12 \\div 4 = 3$\n4. Evaluate: $56 - 3 = 53$.",
    solutionSteps: [
      {
        explanation: "Translate verbal phrases to operations: 'product of 8 and 7' is $8 \\times 7$, 'quotient of 12 and 4' is $12 \\div 4$.",
        workingOut: "(8 \\times 7) - (12 \\div 4)"
      },
      {
        explanation: "Calculate the multiplication and division.",
        workingOut: "\\begin{aligned} 8 \\times 7 &= 56 \\\\ 12 \\div 4 &= 3 \\end{aligned}"
      },
      {
        explanation: "Subtract the quotient from the product.",
        workingOut: "56 - 3 = 53"
      }
    ]
  },
  {
    id: "y6-wn-q54",
    c: "WN6",
    t: "Word Problems and Averages",
    type: "short_answer",
    difficulty: "hard",
    q: "Translate the following statement into a mathematical expression and evaluate:\n'$3$ times the square of $4$ is increased by the difference between $15$ and $6$.'",
    a: "57",
    opts: [],
    h: "Write '3 times the square of 4' as $3 \\times 4^2$. 'Difference between 15 and 6' is $(15 - 6)$. 'Increased by' means add ($+$).",
    s: "1. Translate: $3 \\times 4^2 + (15 - 6)$\n2. Exponent: $4^2 = 16$\n3. Multiplication: $3 \\times 16 = 48$\n4. Brackets: $15 - 6 = 9$\n5. Sum: $48 + 9 = 57$.",
    solutionSteps: [
      {
        explanation: "Write the verbal equation as a mathematical expression.",
        workingOut: "3 \\times 4^2 + (15 - 6)"
      },
      {
        explanation: "Compute the exponent first ($4^2 = 16$) and perform the multiplication.",
        workingOut: "3 \\times 16 = 48"
      },
      {
        explanation: "Calculate the difference inside the brackets.",
        workingOut: "15 - 6 = 9"
      },
      {
        explanation: "Add the two parts.",
        workingOut: "48 + 9 = 57"
      }
    ]
  },
  {
    id: "y6-wn-q55",
    c: "WN6",
    t: "Word Problems and Averages",
    type: "short_answer",
    difficulty: "easy",
    q: "Evaluate: **Decrease the quotient of $36$ and $4$ by $3$.**",
    a: "6",
    opts: [],
    h: "First find the quotient of $36$ and $4$ (which is $36 \\div 4$). Then decrease (subtract) that value by $3$.",
    s: "1. Quotient: $36 \\div 4 = 9$\n2. Decrease by 3: $9 - 3 = 6$.",
    solutionSteps: [
      {
        explanation: "Set up the math expression.",
        workingOut: "(36 \\div 4) - 3"
      },
      {
        explanation: "Find the quotient first.",
        workingOut: "36 \\div 4 = 9"
      },
      {
        explanation: "Subtract 3.",
        workingOut: "9 - 3 = 6"
      }
    ]
  },
  {
    id: "y6-wn-q56",
    c: "WN6",
    t: "Word Problems and Averages",
    type: "short_answer",
    difficulty: "medium",
    q: "What is the difference between $12$ and the square of $4$?",
    a: "4",
    opts: [],
    h: "First find the square of $4$ ($4^2 = 4 \\times 4$). Then find the positive difference between that result and $12$.",
    s: "1. Square of 4: $4^2 = 16$\n2. Difference between 16 and 12: $16 - 12 = 4$.",
    solutionSteps: [
      {
        explanation: "Calculate the square of 4.",
        workingOut: "4^2 = 16"
      },
      {
        explanation: "Subtract 12 from 16 to find the difference.",
        workingOut: "16 - 12 = 4"
      }
    ]
  },
  {
    id: "y6-wn-q57",
    c: "WN6",
    t: "Word Problems and Averages",
    type: "short_answer",
    difficulty: "easy",
    q: "Calculate the average of the following numbers: $4$, $8$, $9$, $13$, and $16$.",
    a: "10",
    opts: [],
    h: "To find the average, add all the numbers together, then divide by the total count of numbers (which is $5$).",
    s: "1. Sum: $4 + 8 + 9 + 13 + 16 = 50$\n2. Count: $5$\n3. Average: $50 \\div 5 = 10$.",
    solutionSteps: [
      {
        explanation: "Find the sum of all five numbers.",
        workingOut: "4 + 8 + 9 + 13 + 16 = 50"
      },
      {
        explanation: "Divide the sum by the count of numbers (5).",
        workingOut: "\\text{Average} = \\frac{50}{5} = 10"
      }
    ]
  },
  {
    id: "y6-wn-q58",
    c: "WN6",
    t: "Word Problems and Averages",
    type: "short_answer",
    difficulty: "easy",
    q: "Calculate the average of the following numbers: $8$, $12$, $15$, and $21$.",
    a: "14",
    opts: [],
    h: "Add the four numbers together, then divide by the count of numbers ($4$).",
    s: "1. Sum: $8 + 12 + 15 + 21 = 56$\n2. Count: $4$\n3. Average: $56 \\div 4 = 14$.",
    solutionSteps: [
      {
        explanation: "Calculate the total sum.",
        workingOut: "8 + 12 + 15 + 21 = 56"
      },
      {
        explanation: "Divide by the count of numbers (4).",
        workingOut: "\\text{Average} = \\frac{56}{4} = 14"
      }
    ]
  },
  {
    id: "y6-wn-q59",
    c: "WN6",
    t: "Word Problems and Averages",
    type: "short_answer",
    difficulty: "easy",
    q: "Evaluate: **Increase the product of $12$ and $4$ by $9$.**",
    a: "57",
    opts: [],
    h: "First find the product (multiplication) of $12$ and $4$. Then increase (add) the result by $9$.",
    s: "1. Product: $12 \\times 4 = 48$\n2. Increase by 9: $48 + 9 = 57$.",
    solutionSteps: [
      {
        explanation: "Write the expression mathematically.",
        workingOut: "(12 \\times 4) + 9"
      },
      {
        explanation: "Calculate the multiplication first.",
        workingOut: "12 \\times 4 = 48"
      },
      {
        explanation: "Add 9 to find the total.",
        workingOut: "48 + 9 = 57"
      }
    ]
  },
  {
    id: "y6-wn-q60",
    c: "WN6",
    t: "Word Problems and Averages",
    type: "short_answer",
    difficulty: "medium",
    q: "A school has $6$ classes in Year 6. The number of students in each class is $28$, $30$, $29$, $31$, $28$, and $34$. What is the average number of students per class?",
    a: "30",
    opts: [],
    h: "Find the total number of students in Year 6 by adding all class sizes, then divide by the number of classes ($6$).",
    s: "1. Total students: $28 + 30 + 29 + 31 + 28 + 34 = 180$\n2. Classes count: $6$\n3. Average students per class: $180 \\div 6 = 30$.",
    solutionSteps: [
      {
        explanation: "Sum the sizes of all 6 classes to find the total number of students.",
        workingOut: "28 + 30 + 29 + 31 + 28 + 34 = 180"
      },
      {
        explanation: "Divide the total students by the number of classes (6).",
        workingOut: "\\text{Average} = \\frac{180}{6} = 30"
      }
    ]
  }
];
