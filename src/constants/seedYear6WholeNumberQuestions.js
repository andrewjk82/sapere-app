export const WHOLE_NUMBER_QUESTIONS_Y6 = [
  {
    "id": "y6-wn-q1",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Convert the Roman numeral $CLXXIV$ to a Hindu-Arabic numeral (our standard number system).",
    "a": 0,
    "opts": [
      "174",
      "191",
      "157",
      "183"
    ],
    "h": "Break the Roman numeral down from left to right: $C = 100$, $L = 50$, $X = 10$, and look out for subtractive pairs like $IV$.",
    "s": "To convert $CLXXIV$:\n1. $C = 100$\n2. $L = 50$\n3. $XX = 10 + 10 = 20$\n4. $IV = 5 - 1 = 4$\n\nAdding these together: $100 + 50 + 20 + 4 = 174$.",
    "solutionSteps": [
      {
        "explanation": "Identify the value of each individual Roman numeral symbol in the expression.",
        "workingOut": "\\begin{aligned} C &= 100 \\\\ L &= 50 \\\\ X &= 10 \\\\ V &= 5 \\\\ I &= 1 \\end{aligned}"
      },
      {
        "explanation": "Group the symbols and check for subtractive patterns. Since $I$ (1) is placed before $V$ (5), it represents subtraction: $5 - 1 = 4$.",
        "workingOut": "\\begin{aligned} CLXXIV &= C + L + X + X + (V - I) \\\\ &= 100 + 50 + 10 + 10 + (5 - 1) \\end{aligned}"
      },
      {
        "explanation": "Sum the values to find the final Hindu-Arabic numeral.",
        "workingOut": "100 + 50 + 20 + 4 = 174"
      }
    ]
  },
  {
    "id": "y6-wn-q2",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Convert the Roman numeral $CDLVI$ to a Hindu-Arabic numeral.",
    "a": 0,
    "opts": [
      "456",
      "502",
      "410",
      "479"
    ],
    "h": "Note that $C$ (100) comes before $D$ (500), which forms the subtractive pair $CD = 400$.",
    "s": "To convert $CDLVI$:\n1. $CD = 500 - 100 = 400$\n2. $L = 50$\n3. $V = 5$\n4. $I = 1$\n\nSumming the values: $400 + 50 + 5 + 1 = 456$.",
    "solutionSteps": [
      {
        "explanation": "Identify standard values and detect the subtractive pair $CD$.",
        "workingOut": "\\begin{aligned} CD &= 500 - 100 = 400 \\\\ L &= 50 \\\\ V &= 5 \\\\ I &= 1 \\end{aligned}"
      },
      {
        "explanation": "Sum the values of the grouped segments.",
        "workingOut": "\\begin{aligned} CDLVI &= CD + L + V + I \\\\ &= 400 + 50 + 5 + 1 \\\\ &= 456 \\end{aligned}"
      }
    ]
  },
  {
    "id": "y6-wn-q3",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Convert the Roman numeral $CMXCVIII$ to a Hindu-Arabic numeral.",
    "a": 0,
    "opts": [
      "998",
      "1098",
      "898",
      "1048"
    ],
    "h": "Look for subtractive pairs: $CM$ (100 before 1000) and $XC$ (10 before 100).",
    "s": "To convert $CMXCVIII$:\n1. $CM = 1000 - 100 = 900$\n2. $XC = 100 - 10 = 90$\n3. $VIII = 5 + 3 = 8$\n\nSumming the values: $900 + 90 + 8 = 998$.",
    "solutionSteps": [
      {
        "explanation": "Identify the subtractive pairs $CM$ and $XC$ along with the basic numerals.",
        "workingOut": "\\begin{aligned} CM &= 1000 - 100 = 900 \\\\ XC &= 100 - 10 = 90 \\\\ VIII &= 5 + 3 = 8 \\end{aligned}"
      },
      {
        "explanation": "Sum the values of the segments together.",
        "workingOut": "\\begin{aligned} CMXCVIII &= 900 + 90 + 8 \\\\ &= 998 \\end{aligned}"
      }
    ]
  },
  {
    "id": "y6-wn-q4",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Convert the Roman numeral $CCLXIX$ to a Hindu-Arabic numeral.",
    "a": 0,
    "opts": [
      "269",
      "296",
      "242",
      "282"
    ],
    "h": "Break down the parts: $CC = 200$, $LX = 60$, and $IX$ is a subtractive pair.",
    "s": "To convert $CCLXIX$:\n1. $CC = 200$\n2. $L = 50$\n3. $X = 10$\n4. $IX = 10 - 1 = 9$\n\nSumming the values: $200 + 50 + 10 + 9 = 269$.",
    "solutionSteps": [
      {
        "explanation": "Group the numeral symbols into hundreds, tens, and units.",
        "workingOut": "\\begin{aligned} CC &= 200 \\\\ LX &= 50 + 10 = 60 \\\\ IX &= 10 - 1 = 9 \\end{aligned}"
      },
      {
        "explanation": "Sum the grouped values.",
        "workingOut": "200 + 60 + 9 = 269"
      }
    ]
  },
  {
    "id": "y6-wn-q5",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Convert the Roman numeral $DCCLX$ to a Hindu-Arabic numeral.",
    "a": 0,
    "opts": [
      "760",
      "836",
      "684",
      "798"
    ],
    "h": "Break down the parts: $D = 500$, $CC = 200$, $L = 50$, and $X = 10$.",
    "s": "To convert $DCCLX$:\n- $DCC = 500 + 200 = 700$\n- $L = 50$\n- $X = 10$\n\nSumming these: $700 + 50 + 10 = 760$.",
    "solutionSteps": [
      {
        "explanation": "Group the numerals into their components.",
        "workingOut": "\\begin{aligned} DCC &= 500 + 100 + 100 = 700 \\\\ LX &= 50 + 10 = 60 \\end{aligned}"
      },
      {
        "explanation": "Add the components together.",
        "workingOut": "700 + 60 = 760"
      }
    ]
  },
  {
    "id": "y6-wn-q6",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Express the number $840$ in Roman numerals.",
    "a": 0,
    "opts": [
      "DCCCXL",
      "DCCCXC",
      "DCCXL",
      "CMXL"
    ],
    "h": "Write the number by breaking it down into hundreds and tens: $800 + 40$. Remember $800 = 500 + 300$ and $40$ is written by subtracting $10$ from $50$.",
    "s": "To express $840$ in Roman numerals:\n1. Break it down: $800 + 40$\n2. $800 = DCCC$ (500 + 100 + 100 + 100)\n3. $40 = XL$ (10 subtracted from 50)\n\nCombine the parts: $DCCCXL$.",
    "solutionSteps": [
      {
        "explanation": "Separate the number into place value components.",
        "workingOut": "840 = 800 + 40"
      },
      {
        "explanation": "Find the Roman numeral representations for each part.",
        "workingOut": "\\begin{aligned} 800 &= DCCC \\\\ 40 &= XL \\quad (10 \\text{ before } 50) \\end{aligned}"
      },
      {
        "explanation": "Combine the components together.",
        "workingOut": "DCCC + XL = DCCCXL"
      }
    ]
  },
  {
    "id": "y6-wn-q7",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Express the number $946$ in Roman numerals.",
    "a": 0,
    "opts": [
      "CMXLVI",
      "CMXVI",
      "DCCCCXLVI",
      "CMLXVI"
    ],
    "h": "Break the number into $900 + 40 + 6$. Note that $900$ is written as $100$ subtracted from $1000$, and $40$ is $10$ subtracted from $50$.",
    "s": "To express $946$ in Roman numerals:\n1. Break it down: $900 + 40 + 6$\n2. $900 = CM$ (1000 - 100)\n3. $40 = XL$ (50 - 10)\n4. $6 = VI$ (5 + 1)\n\nCombine the parts: $CMXLVI$.",
    "solutionSteps": [
      {
        "explanation": "Separate the number into hundreds, tens, and units.",
        "workingOut": "946 = 900 + 40 + 6"
      },
      {
        "explanation": "Find the Roman numeral equivalents for each place value.",
        "workingOut": "\\begin{aligned} 900 &= CM \\quad (1000 - 100) \\\\ 40 &= XL \\quad (50 - 10) \\\\ 6 &= VI \\quad (5 + 1) \\end{aligned}"
      },
      {
        "explanation": "Combine the parts in order.",
        "workingOut": "CM + XL + VI = CMXLVI"
      }
    ]
  },
  {
    "id": "y6-wn-q8",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Express the number $1996$ in Roman numerals.",
    "a": 0,
    "opts": [
      "MCMXCVI",
      "MCMLXXXXVI",
      "MCMXCIV",
      "MXMXCVI"
    ],
    "h": "Break down into thousands, hundreds, tens, and units: $1000 + 900 + 90 + 6$. Check the subtractive notations for $900$ and $90$.",
    "s": "To express $1996$:\n1. $1000 = M$\n2. $900 = CM$ (1000 - 100)\n3. $90 = XC$ (100 - 10)\n4. $6 = VI$ (5 + 1)\n\nCombine: $MCMXCVI$.",
    "solutionSteps": [
      {
        "explanation": "Separate the number into its place value components.",
        "workingOut": "1996 = 1000 + 900 + 90 + 6"
      },
      {
        "explanation": "Translate each section into Roman numerals.",
        "workingOut": "\\begin{aligned} 1000 &= M \\\\ 900 &= CM \\\\ 90 &= XC \\\\ 6 &= VI \\end{aligned}"
      },
      {
        "explanation": "Combine all parts together.",
        "workingOut": "M + CM + XC + VI = MCMXCVI"
      }
    ]
  },
  {
    "id": "y6-wn-q9",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Express the number $439$ in Roman numerals.",
    "a": 0,
    "opts": [
      "CDXXXIX",
      "CCCCXXXIX",
      "CMXXXIX",
      "CDXLIX"
    ],
    "h": "Break down the number into $400 + 30 + 9$. Remember that $400$ is $CD$ and $9$ is $IX$.",
    "s": "To express $439$:\n1. $400 = CD$\n2. $30 = XXX$\n3. $9 = IX$\n\nCombine: $CDXXXIX$.",
    "solutionSteps": [
      {
        "explanation": "Decompose the number into hundreds, tens, and units.",
        "workingOut": "439 = 400 + 30 + 9"
      },
      {
        "explanation": "Express each value using Roman numerals.",
        "workingOut": "\\begin{aligned} 400 &= CD \\\\ 30 &= XXX \\\\ 9 &= IX \\end{aligned}"
      },
      {
        "explanation": "Combine the symbols.",
        "workingOut": "CD + XXX + IX = CDXXXIX"
      }
    ]
  },
  {
    "id": "y6-wn-q10",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Express the number $88$ in Roman numerals.",
    "a": 0,
    "opts": [
      "LXXXVIII",
      "XXVIII",
      "LXXXVII",
      "XCIII"
    ],
    "h": "Break down into $80 + 8$. $80$ is $L$ (50) plus three $X$'s, and $8$ is $V$ (5) plus three $I$'s.",
    "s": "To express $88$:\n1. $80 = LXXX$\n2. $8 = VIII$\n\nCombine: $LXXXVIII$.",
    "solutionSteps": [
      {
        "explanation": "Break the number into tens and units.",
        "workingOut": "88 = 80 + 8"
      },
      {
        "explanation": "Convert each part into Roman numerals.",
        "workingOut": "\\begin{aligned} 80 &= LXXX \\\\ 8 &= VIII \\end{aligned}"
      },
      {
        "explanation": "Add the numerals together.",
        "workingOut": "LXXX + VIII = LXXXVIII"
      }
    ]
  },
  {
    "id": "y6-wn-q11",
    "c": "WN2",
    "t": "Place Value and Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Write the number $3\\,482\\,905$ in words.",
    "a": 0,
    "opts": [
      "Three million, four hundred and eighty-two thousand, nine hundred and five",
      "Three million, forty-eight thousand, nine hundred and five",
      "Three hundred and forty-eight thousand, nine hundred and five",
      "Thirty-four million, eighty-two thousand, nine hundred and five"
    ],
    "h": "Read the number in periods of three digits: Millions, Thousands, and Units. $3$ is in the millions period, $482$ is in the thousands, and $905$ is in the units.",
    "s": "The number $3\\,482\\,905$ is grouped as:\n- $3$: Three million\n- $482$: four hundred and eighty-two thousand\n- $905$: nine hundred and five.\n\nCombined: 'Three million, four hundred and eighty-two thousand, nine hundred and five'.",
    "solutionSteps": [
      {
        "explanation": "Group the digits by standard three-digit periods (Millions, Thousands, Units).",
        "workingOut": "\\text{Periods: } \\underbrace{3}_{\\text{Millions}} \\, \\underbrace{482}_{\\text{Thousands}} \\, \\underbrace{905}_{\\text{Units}}"
      },
      {
        "explanation": "Write out the value of each period in words.",
        "workingOut": "\\begin{aligned} 3 &\\rightarrow \\text{Three million} \\\\ 482 &\\rightarrow \\text{four hundred and eighty-two thousand} \\\\ 905 &\\rightarrow \\text{nine hundred and five} \\end{aligned}"
      },
      {
        "explanation": "Combine all parts with appropriate commas.",
        "workingOut": "\\text{Three million, four hundred and eighty-two thousand, nine hundred and five}"
      }
    ]
  },
  {
    "id": "y6-wn-q12",
    "c": "WN2",
    "t": "Place Value and Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Write the number $97\\,003\\,002$ in words.",
    "a": 0,
    "opts": [
      "Ninety-seven million, three thousand and two",
      "Ninety-seven million, three hundred thousand and two",
      "Nine million, seven hundred and three thousand and two",
      "Ninety-seven million, thirty thousand and two"
    ],
    "h": "Look at the periods of three. $97$ is in the millions period. In the thousands period, we have only $003$. In the units period, we have $002$.",
    "s": "The number $97\\,003\\,002$ is read as:\n- Millions period: $97 \\rightarrow$ Ninety-seven million\n- Thousands period: $003 \\rightarrow$ three thousand\n- Units period: $002 \\rightarrow$ two (and two).\n\nCombined: 'Ninety-seven million, three thousand and two'.",
    "solutionSteps": [
      {
        "explanation": "Group the number into three-digit periods.",
        "workingOut": "\\text{Periods: } \\underbrace{97}_{\\text{Millions}} \\, \\underbrace{003}_{\\text{Thousands}} \\, \\underbrace{002}_{\\text{Units}}"
      },
      {
        "explanation": "Convert each period to words. Note that empty placeholders (zeros) are skipped.",
        "workingOut": "\\begin{aligned} 97 &\\rightarrow \\text{Ninety-seven million} \\\\ 3 &\\rightarrow \\text{three thousand} \\\\ 2 &\\rightarrow \\text{two} \\end{aligned}"
      },
      {
        "explanation": "Combine into a single phrase.",
        "workingOut": "\\text{Ninety-seven million, three thousand and two}"
      }
    ]
  },
  {
    "id": "y6-wn-q13",
    "c": "WN2",
    "t": "Place Value and Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "What is the place value of the digit $7$ in the number $547\\,210$?",
    "a": 0,
    "opts": [
      "7,000",
      "70,000",
      "700",
      "7"
    ],
    "h": "Identify which column the digit $7$ sits in (Units, Tens, Hundreds, Thousands, Ten Thousands, or Hundred Thousands).",
    "s": "In the number $547\\,210$, the digit $7$ is in the thousands place. Therefore, its place value is $7 \\times 1000 = 7,000$.",
    "solutionSteps": [
      {
        "explanation": "Assign place values to each digit of the number $547\\,210$ from right to left.",
        "workingOut": "\\begin{aligned} 0 &\\rightarrow \\text{Units} \\\\ 1 &\\rightarrow \\text{Tens} \\\\ 2 &\\rightarrow \\text{Hundreds} \\\\ 7 &\\rightarrow \\text{Thousands} \\\\ 4 &\\rightarrow \\text{Ten Thousands} \\\\ 5 &\\rightarrow \\text{Hundred Thousands} \\end{aligned}"
      },
      {
        "explanation": "Multiply the digit $7$ by its place value ($1000$).",
        "workingOut": "7 \\times 1000 = 7,000"
      }
    ]
  },
  {
    "id": "y6-wn-q14",
    "c": "WN2",
    "t": "Place Value and Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Write the following expanded expression as an ordinary numeral:\n$(7 \\times 10^4) + (4 \\times 10^3) + (0 \\times 10^2) + (9 \\times 10^1) + (3 \\times 1)$",
    "a": 0,
    "opts": [
      "74093",
      "81502",
      "66684",
      "77798"
    ],
    "h": "Calculate the value of each term ($10^4 = 10\\,000$, $10^3 = 1\\,000$, etc.) and add them together.",
    "s": "Calculating the terms:\n- $7 \\times 10^4 = 70\\,000$\n- $4 \\times 10^3 = 4\\,000$\n- $0 \\times 10^2 = 0$\n- $9 \\times 10^1 = 90$\n- $3 \\times 1 = 3$\n\nSumming these up: $70\\,000 + 4\\,000 + 0 + 90 + 3 = 74\\,093$.",
    "solutionSteps": [
      {
        "explanation": "Expand the powers of 10 into standard numerical values.",
        "workingOut": "\\begin{aligned} 10^4 &= 10,000 \\\\ 10^3 &= 1,000 \\\\ 10^2 &= 100 \\\\ 10^1 &= 10 \\end{aligned}"
      },
      {
        "explanation": "Multiply each digit by its place value.",
        "workingOut": "\\begin{aligned} 7 \\times 10,000 &= 70,000 \\\\ 4 \\times 1,000 &= 4,000 \\\\ 0 \\times 100 &= 0 \\\\ 9 \\times 10 &= 90 \\\\ 3 \\times 1 &= 3 \\end{aligned}"
      },
      {
        "explanation": "Sum all the expanded parts.",
        "workingOut": "70,000 + 4,000 + 0 + 90 + 3 = 74,093"
      }
    ]
  },
  {
    "id": "y6-wn-q15",
    "c": "WN2",
    "t": "Place Value and Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Write the number $8\\,352$ in expanded exponential notation.",
    "a": 0,
    "opts": [
      "\\((8 \\times 10^3) + (3 \\times 10^2) + (5 \\times 10^1) + (2 \\times 1)\\)",
      "\\((8 \\times 10^4) + (3 \\times 10^3) + (5 \\times 10^2) + (2 \\times 10)\\)",
      "\\((8 \\times 1000) + (3 \\times 100) + (5 \\times 10) + 2\\)",
      "\\((8 \\times 10^3) + (3 \\times 10^2) + (5 \\times 10^2) + (2 \\times 1)\\)"
    ],
    "h": "Write the place value of each digit using powers of $10$. E.g. Thousands place is $10^3$, Hundreds is $10^2$, Tens is $10^1$, and Units is $1$.",
    "s": "To express $8\\,352$:\n- $8$ is in Thousands ($8 \\times 10^3$)\n- $3$ is in Hundreds ($3 \\times 10^2$)\n- $5$ is in Tens ($5 \\times 10^1$)\n- $2$ is in Units ($2 \\times 1$)\n\nCombining these: $(8 \\times 10^3) + (3 \\times 10^2) + (5 \\times 10^1) + (2 \\times 1)$.",
    "solutionSteps": [
      {
        "explanation": "Determine the place value of each digit in $8,352$.",
        "workingOut": "\\begin{aligned} 8 &\\rightarrow 8,000 \\\\ 3 &\\rightarrow 300 \\\\ 5 &\\rightarrow 50 \\\\ 2 &\\rightarrow 2 \\end{aligned}"
      },
      {
        "explanation": "Represent each place value as a power of 10.",
        "workingOut": "\\begin{aligned} 8,000 &= 8 \\times 10^3 \\\\ 300 &= 3 \\times 10^2 \\\\ 50 &= 5 \\times 10^1 \\\\ 2 &= 2 \\times 1 \\end{aligned}"
      },
      {
        "explanation": "Combine the terms using addition.",
        "workingOut": "(8 \\times 10^3) + (3 \\times 10^2) + (5 \\times 10^1) + (2 \\times 1)"
      }
    ]
  },
  {
    "id": "y6-wn-q16",
    "c": "WN2",
    "t": "Place Value and Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "What is the numerical place value of the digit $3$ in the number $27\\,318$?",
    "a": 0,
    "opts": [
      "300",
      "330",
      "270",
      "315"
    ],
    "h": "Identify which column the digit $3$ sits in.",
    "s": "In the number $27\\,318$, the digit $3$ is in the hundreds place. Thus, its place value is $3 \\times 100 = 300$.",
    "solutionSteps": [
      {
        "explanation": "Locate the digit $3$ in the place value chart.",
        "workingOut": "\\begin{array}{c|c|c|c|c} \\text{T.Th} & \\text{Th} & \\text{H} & \\text{T} & \\text{U} \\\\ \\hline 2 & 7 & \\mathbf{3} & 1 & 8 \\end{array}"
      },
      {
        "explanation": "Since $3$ is in the Hundreds column, multiply the digit by 100.",
        "workingOut": "3 \\times 100 = 300"
      }
    ]
  },
  {
    "id": "y6-wn-q17",
    "c": "WN2",
    "t": "Place Value and Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Write the number **four hundred and five thousand, two hundred and twelve** in ordinary numerals.",
    "a": 0,
    "opts": [
      "405212",
      "445733",
      "364691",
      "425473"
    ],
    "h": "Write the thousands period first (four hundred and five -> 405), then write the units period (two hundred and twelve -> 212). Join them.",
    "s": "1. The thousands period is 'four hundred and five thousand' $= 405\\,000$.\n2. The units period is 'two hundred and twelve' $= 212$.\n\nCombining these gives $405\\,212$.",
    "solutionSteps": [
      {
        "explanation": "Identify the number in two separate parts: thousands period and units period.",
        "workingOut": "\\begin{aligned} \\text{Thousands part} &= 405 \\\\ \\text{Units part} &= 212 \\end{aligned}"
      },
      {
        "explanation": "Combine these parts into a single numeric value.",
        "workingOut": "405,212"
      }
    ]
  },
  {
    "id": "y6-wn-q18",
    "c": "WN2",
    "t": "Place Value and Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Write the number **six million, seventy-two thousand and five** in ordinary numerals.",
    "a": 0,
    "opts": [
      "6072005",
      "6679206",
      "5464805",
      "6375605"
    ],
    "h": "Break it down: Six million ($6\\,000\\,000$), seventy-two thousand ($72\\,000$), and five ($5$). Use placeholder zeros for columns with no values (like hundred thousands and hundreds/tens).",
    "s": "To write six million, seventy-two thousand and five:\n- Millions column: $6$\n- Hundreds thousands column: $0$ (no hundred thousands mentioned)\n- Ten thousands column: $7$\n- Thousands column: $2$\n- Hundreds column: $0$\n- Tens column: $0$\n- Units column: $5$\n\nCombined: $6\\,072\\,005$.",
    "solutionSteps": [
      {
        "explanation": "Write out the value of each period component.",
        "workingOut": "\\begin{aligned} \\text{Six million} &= 6,000,000 \\\\ \\text{Seventy-two thousand} &= 72,000 \\\\ \\text{Five} &= 5 \\end{aligned}"
      },
      {
        "explanation": "Add these numbers together, noting the zero placeholders.",
        "workingOut": "\\begin{array}{r l} 6,000,000 & \\\\ 72,000 & \\\\ + \\quad \\quad \\quad 5 & \\\\ \\hline \\mathbf{6,072,005} & \\end{array}"
      }
    ]
  },
  {
    "id": "y6-wn-q19",
    "c": "WN2",
    "t": "Place Value and Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Convert the following expanded notation to an ordinary numeral:\n$(9 \\times 10^5) + (8 \\times 10^3) + (2 \\times 10^2) + (6 \\times 1)$",
    "a": 0,
    "opts": [
      "908206",
      "999027",
      "817385",
      "953616"
    ],
    "h": "Note that there is no $10^4$ (ten thousands) or $10^1$ (tens) term. Use $0$ as a placeholder for these positions.",
    "s": "Expand the terms:\n- $9 \\times 10^5 = 900\\,000$\n- No $10^4$ term $= 0$\n- $8 \\times 10^3 = 8\\,000$\n- $2 \\times 10^2 = 200$\n- No $10^1$ term $= 0$\n- $6 \\times 1 = 6$\n\nSum: $900\\,000 + 8\\,000 + 200 + 6 = 908\\,206$.",
    "solutionSteps": [
      {
        "explanation": "Identify the digit for each place value power from $10^5$ down to $10^0$.",
        "workingOut": "\\begin{aligned} 10^5 &\\rightarrow 9 \\\\ 10^4 &\\rightarrow 0 \\quad (\\text{missing}) \\\\ 10^3 &\\rightarrow 8 \\\\ 10^2 &\\rightarrow 2 \\\\ 10^1 &\\rightarrow 0 \\quad (\\text{missing}) \\\\ 10^0 &\\rightarrow 6 \\end{aligned}"
      },
      {
        "explanation": "Assemble the digits in order of their place value columns.",
        "workingOut": "\\text{Result: } 908,206"
      }
    ]
  },
  {
    "id": "y6-wn-q20",
    "c": "WN2",
    "t": "Place Value and Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the numerical place value of the digit $9$ in the number $395\\,072$?",
    "a": 0,
    "opts": [
      "90000",
      "99000",
      "81000",
      "94500"
    ],
    "h": "Find which position the digit $9$ holds. It is to the left of the thousands column.",
    "s": "In the number $395\\,072$, the digit $9$ is in the ten thousands place. Its value is $9 \\times 10\\,000 = 90\\,000$.",
    "solutionSteps": [
      {
        "explanation": "Align digits to their corresponding columns.",
        "workingOut": "\\begin{array}{c|c|c|c|c|c} \\text{H.Th} & \\text{T.Th} & \\text{Th} & \\text{H} & \\text{T} & \\text{U} \\\\ \\hline 3 & \\mathbf{9} & 5 & 0 & 7 & 2 \\end{array}"
      },
      {
        "explanation": "Multiply the digit $9$ by its place value factor ($10,000$).",
        "workingOut": "9 \\times 10,000 = 90,000"
      }
    ]
  },
  {
    "id": "y6-wn-q21",
    "c": "WN3",
    "t": "Rounding and Estimation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Round off the number $83\\,642$ to the nearest $10\\,000$.",
    "a": 0,
    "opts": [
      "80000",
      "88000",
      "72000",
      "84000"
    ],
    "h": "Look at the digit in the thousands place (which is $3$). If it is less than $5$, round down.",
    "s": "1. The digit in the ten-thousands place is $8$.\n2. The digit to its right (thousands place) is $3$.\n3. Since $3 < 5$, we round down. The $8$ remains, and all digits to the right become zero.\n\nResult: $80\\,000$.",
    "solutionSteps": [
      {
        "explanation": "Identify the digit in the rounding place (ten-thousands) and the digit immediately to its right (thousands).",
        "workingOut": "\\mathbf{8}\\underline{3},642"
      },
      {
        "explanation": "Compare the check digit (thousands place) to 5. Since $3 < 5$, round down (keep the 8 and replace subsequent numbers with zeros).",
        "workingOut": "3 < 5 \\rightarrow 80,000"
      }
    ]
  },
  {
    "id": "y6-wn-q22",
    "c": "WN3",
    "t": "Rounding and Estimation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Round off the number $4\\,517\\,380$ to the nearest $10\\,000$.",
    "a": 0,
    "opts": [
      "4520000",
      "4972000",
      "4068000",
      "4746000"
    ],
    "h": "Identify the ten-thousands place (which has a $1$). Look at the digit to its right ($7$) to decide whether to round up or down.",
    "s": "1. The ten-thousands place is $1$.\n2. The digit to its right is $7$.\n3. Since $7 \\ge 5$, round up. Add $1$ to the ten-thousands place ($1 + 1 = 2$) and change all digits to the right to zero.\n\nResult: $4\\,520\\,000$.",
    "solutionSteps": [
      {
        "explanation": "Locate the ten-thousands digit and the indicator digit.",
        "workingOut": "4,5\\mathbf{1}\\underline{7},380"
      },
      {
        "explanation": "Since the indicator digit is $7$, which is $5$ or greater, round up by adding 1 to the ten-thousands place.",
        "workingOut": "7 \\ge 5 \\rightarrow 4,5(1+1)0,000 = 4,520,000"
      }
    ]
  },
  {
    "id": "y6-wn-q23",
    "c": "WN3",
    "t": "Rounding and Estimation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Round off the number $849$ to the nearest $100$.",
    "a": 0,
    "opts": [
      "800",
      "880",
      "720",
      "840"
    ],
    "h": "Look at the tens place digit ($4$) to decide whether to round the hundreds digit up or down.",
    "s": "1. Rounding place (hundreds): $8$\n2. Deciding digit (tens): $4$\n3. Since $4 < 5$, round down.\n\nResult: $800$.",
    "solutionSteps": [
      {
        "explanation": "Underline the hundreds place and check the tens digit.",
        "workingOut": "\\mathbf{8}\\underline{4}9"
      },
      {
        "explanation": "Because the tens digit is $4$ (less than 5), round down.",
        "workingOut": "4 < 5 \\rightarrow 800"
      }
    ]
  },
  {
    "id": "y6-wn-q24",
    "c": "WN3",
    "t": "Rounding and Estimation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Round off the number $750$ to the nearest $100$.",
    "a": 0,
    "opts": [
      "800",
      "880",
      "720",
      "840"
    ],
    "h": "Look at the tens place digit ($5$). When the digit is exactly $5$, we round up.",
    "s": "1. Rounding place (hundreds): $7$\n2. Deciding digit (tens): $5$\n3. Since the tens digit is $5$, we round up. Add $1$ to $7$ to get $8$, and write zeros.\n\nResult: $800$.",
    "solutionSteps": [
      {
        "explanation": "Identify the digit to check.",
        "workingOut": "\\mathbf{7}\\underline{5}0"
      },
      {
        "explanation": "Since the deciding digit is exactly $5$, round up by adding 1 to the hundreds place.",
        "workingOut": "5 \\ge 5 \\rightarrow 800"
      }
    ]
  },
  {
    "id": "y6-wn-q25",
    "c": "WN3",
    "t": "Rounding and Estimation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Is the number $86$ closer to $80$ or to $90$? Choose the correct statement.",
    "a": 0,
    "opts": [
      "Closer to 90; rounds to 90",
      "Closer to 80; rounds to 80",
      "Closer to 90; rounds to 80",
      "Closer to 80; rounds to 90"
    ],
    "h": "Find the distance from $86$ to $80$ and to $90$. The midpoint is $85$.",
    "s": "Distance to $80$: $86 - 80 = 6$\nDistance to $90$: $90 - 86 = 4$\n\nSince $4 < 6$, it is closer to $90$. Rounding $86$ to the nearest $10$ yields $90$.",
    "solutionSteps": [
      {
        "explanation": "Calculate the distance from $86$ to the two boundary tens ($80$ and $90$).",
        "workingOut": "\\begin{aligned} \\text{Distance to } 80 &= |86 - 80| = 6 \\\\ \\text{Distance to } 90 &= |86 - 90| = 4 \\end{aligned}"
      },
      {
        "explanation": "Compare the distances. The smaller distance indicates which number it is closer to.",
        "workingOut": "4 < 6 \\rightarrow \\text{Closer to } 90"
      }
    ]
  },
  {
    "id": "y6-wn-q26",
    "c": "WN3",
    "t": "Rounding and Estimation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Compare $8^2$ and $60$ using the correct inequality symbol.",
    "a": 0,
    "opts": [
      "8^2 > 60",
      "8^2 < 60",
      "8^2 = 60",
      "None of the above"
    ],
    "h": "First calculate the value of $8^2$ (which is $8 \\times 8$) and then compare it to $60$.",
    "s": "1. Calculate exponent: $8^2 = 8 \\times 8 = 64$\n2. Compare values: Since $64$ is greater than $60$, we write: $8^2 > 60$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the exponent $8^2$.",
        "workingOut": "8^2 = 8 \\times 8 = 64"
      },
      {
        "explanation": "Compare the result with $60$.",
        "workingOut": "64 > 60"
      },
      {
        "explanation": "Substitute the original expression back into the inequality.",
        "workingOut": "8^2 > 60"
      }
    ]
  },
  {
    "id": "y6-wn-q27",
    "c": "WN3",
    "t": "Rounding and Estimation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Compare $3 \\times (4 + 2)$ and $20 - 2$ with the correct symbol.",
    "a": 0,
    "opts": [
      "\\(3 \\times (4 + 2) = 20 - 2\\)",
      "\\(3 \\times (4 + 2) > 20 - 2\\)",
      "\\(3 \\times (4 + 2) < 20 - 2\\)",
      "None of the above"
    ],
    "h": "Evaluate both sides of the expression first. Follow the order of operations (BODMAS) for the left side.",
    "s": "Left Side: $3 \\times (4 + 2) = 3 \\times 6 = 18$\nRight Side: $20 - 2 = 18$\n\nSince both sides equal $18$, the correct symbol is $=$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the left side, starting with the addition inside the brackets.",
        "workingOut": "\\begin{aligned} 3 \\times (4 + 2) &= 3 \\times 6 \\\\ &= 18 \\end{aligned}"
      },
      {
        "explanation": "Evaluate the right side.",
        "workingOut": "20 - 2 = 18"
      },
      {
        "explanation": "Compare the two final values.",
        "workingOut": "18 = 18 \\rightarrow 3 \\times (4 + 2) = 20 - 2"
      }
    ]
  },
  {
    "id": "y6-wn-q28",
    "c": "WN3",
    "t": "Rounding and Estimation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Round off $14\\,376$ to the nearest thousand ($1\\,000$).",
    "a": 0,
    "opts": [
      "14000",
      "15400",
      "12600",
      "14700"
    ],
    "h": "Find the thousands digit ($4$) and check the hundreds digit ($3$) to its right.",
    "s": "1. Rounding place (thousands): $4$\n2. Checking digit (hundreds): $3$\n3. Since $3 < 5$, round down.\n\nResult: $14\\,000$.",
    "solutionSteps": [
      {
        "explanation": "Identify the digits.",
        "workingOut": "1\\mathbf{4},\\underline{3}76"
      },
      {
        "explanation": "Because the hundreds digit is $3$ (less than 5), round down.",
        "workingOut": "3 < 5 \\rightarrow 14,000"
      }
    ]
  },
  {
    "id": "y6-wn-q29",
    "c": "WN3",
    "t": "Rounding and Estimation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Compare $2^4$ and $4^2$ with the correct symbol.",
    "a": 0,
    "opts": [
      "2^4 = 4^2",
      "2^4 > 4^2",
      "2^4 < 4^2",
      "None of the above"
    ],
    "h": "Calculate $2^4$ ($2 \\times 2 \\times 2 \\times 2$) and $4^2$ ($4 \\times 4$) separately, then compare.",
    "s": "1. $2^4 = 2 \\times 2 \\times 2 \\times 2 = 16$\n2. $4^2 = 4 \\times 4 = 16$\n\nBoth values are equal, so $2^4 = 4^2$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the first power ($2^4$).",
        "workingOut": "2^4 = 2 \\times 2 \\times 2 \\times 2 = 16"
      },
      {
        "explanation": "Evaluate the second power ($4^2$).",
        "workingOut": "4^2 = 4 \\times 4 = 16"
      },
      {
        "explanation": "Compare the calculated values.",
        "workingOut": "16 = 16 \\rightarrow 2^4 = 4^2"
      }
    ]
  },
  {
    "id": "y6-wn-q30",
    "c": "WN3",
    "t": "Rounding and Estimation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Round off the number $899\\,950$ to the nearest hundred ($100$).",
    "a": 0,
    "opts": [
      "900000",
      "990000",
      "810000",
      "945000"
    ],
    "h": "Find the hundreds digit ($9$). Look at the tens digit ($5$). Notice how rounding up triggers a chain of carrying over.",
    "s": "1. Hundreds digit is $9$. Deciding digit (tens) is $5$, so round up.\n2. Add $1$ to the hundreds place: $9 + 1 = 10$ (write $0$, carry over $1$ to the thousands place).\n3. Thousands place: $9 + 1 = 10$ (write $0$, carry over $1$ to ten-thousands).\n4. Ten-thousands place: $9 + 1 = 10$ (write $0$, carry over $1$ to hundred-thousands).\n5. Hundred-thousands place: $8 + 1 = 9$.\n\nResult: $900\\,000$.",
    "solutionSteps": [
      {
        "explanation": "Identify the digit to round and the deciding digit.",
        "workingOut": "899,\\mathbf{9}\\underline{5}0"
      },
      {
        "explanation": "Since the deciding digit is $5$, we round up. Add 1 to the hundreds place, which carries over repeatedly to the left.",
        "workingOut": "\\begin{aligned} 899,900 + 100 &= 900,000 \\end{aligned}"
      }
    ]
  },
  {
    "id": "y6-wn-q31",
    "c": "WN4",
    "t": "Basic Operations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Calculate: $85\\,314 - 67\\,429$",
    "a": 0,
    "opts": [
      "17885",
      "19674",
      "16097",
      "18779"
    ],
    "h": "Set up the subtraction vertically. You will need to borrow from left columns because several digits on top are smaller than those on the bottom.",
    "s": "Performing vertical subtraction:\n  $85\\,314 - 67\\,429 = 17\\,885$.",
    "solutionSteps": [
      {
        "explanation": "Align numbers vertically by place value.",
        "workingOut": "\\begin{array}{r l} 85,314 & \\\\ - \\quad 67,429 & \\\\ \\hline \\end{array}"
      },
      {
        "explanation": "Subtract column-by-column starting from units, borrowing from the next left columns where necessary.",
        "workingOut": "\\begin{array}{rccccc} & 7 & 14 & 12 & 10 & 14 \\\\ & \\cancel{8} & \\cancel{5} & \\cancel{3} & \\cancel{1} & \\cancel{4} \\\\ - & 6 & 7 & 4 & 2 & 9 \\\\ \\hline & 1 & 7 & 8 & 8 & 5 \\end{array}"
      }
    ]
  },
  {
    "id": "y6-wn-q32",
    "c": "WN4",
    "t": "Basic Operations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Calculate: $2345 \\times 168$",
    "a": 0,
    "opts": [
      "393960",
      "433356",
      "354564",
      "413658"
    ],
    "h": "Multiply $2345$ by each digit of $168$ ($8$, then $60$, then $100$) and add the partial products.",
    "s": "Partial products:\n- $2345 \\times 8 = 18\\,760$\n- $2345 \\times 60 = 140\\,700$\n- $2345 \\times 100 = 234\\,500$\n\nSum of partial products: $18\\,760 + 140\\,700 + 234\\,500 = 393\\,960$.",
    "solutionSteps": [
      {
        "explanation": "Multiply $2345$ by the units digit ($8$).",
        "workingOut": "2345 \\times 8 = 18,760"
      },
      {
        "explanation": "Multiply $2345$ by the tens digit ($6$), adding a zero placeholder.",
        "workingOut": "2345 \\times 60 = 140,700"
      },
      {
        "explanation": "Multiply $2345$ by the hundreds digit ($1$), adding two zero placeholders.",
        "workingOut": "2345 \\times 100 = 234,500"
      },
      {
        "explanation": "Sum the three partial products.",
        "workingOut": "\\begin{array}{r l} 18,760 & \\\\ 140,700 & \\\\ + \\quad 234,500 & \\\\ \\hline \\mathbf{393,960} & \\end{array}"
      }
    ]
  },
  {
    "id": "y6-wn-q33",
    "c": "WN4",
    "t": "Basic Operations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Find the quotient and remainder of the division: $17\\,459 \\div 25$",
    "a": 0,
    "opts": [
      "Quotient: 698, Remainder: 9",
      "Quotient: 698, Remainder: 19",
      "Quotient: 697, Remainder: 34",
      "Quotient: 699, Remainder: 4"
    ],
    "h": "Use long division. Find how many times $25$ goes into $174$, then pull down digits step by step.",
    "s": "1. $174 \\div 25 = 6$ remainder $24$\n2. Pull down $5 \\rightarrow 245 \\div 25 = 9$ remainder $20$\n3. Pull down $9 \\rightarrow 209 \\div 25 = 8$ remainder $9$\n\nThus, the quotient is $698$ and remainder is $9$. Check: $698 \\times 25 + 9 = 17\\,450 + 9 = 17\\,459$.",
    "solutionSteps": [
      {
        "explanation": "Perform long division step-by-step.",
        "workingOut": "\\begin{array}{r|l} \\mathbf{698} & \\text{quotient} \\\\ 25 \\overline{) 17,459} & \\\\ -150 & (25 \\times 6) \\\\ \\hline 245 & \\\\ -225 & (25 \\times 9) \\\\ \\hline 209 & \\\\ -200 & (25 \\times 8) \\\\ \\hline \\mathbf{9} & \\text{remainder} \\end{array}"
      }
    ]
  },
  {
    "id": "y6-wn-q34",
    "c": "WN4",
    "t": "Basic Operations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find the sum: $824 + 27 + 513 + 9 + 2146$",
    "a": 0,
    "opts": [
      "3519",
      "3871",
      "3167",
      "3695"
    ],
    "h": "Align all numbers vertically by their units column, then add them column by column from right to left, carrying over numbers as needed.",
    "s": "Adding the numbers vertically:\n$824 + 27 + 513 + 9 + 2146 = 3\\,519$.",
    "solutionSteps": [
      {
        "explanation": "Align the digits vertically.",
        "workingOut": "\\begin{array}{r l} 2146 & \\\\ 824 & \\\\ 513 & \\\\ 27 & \\\\ + \\quad \\quad 9 & \\\\ \\hline \\end{array}"
      },
      {
        "explanation": "Add the units column ($6+4+3+7+9 = 29$), write $9$, carry $2$. Add the tens column ($2 \\text{ carried} + 4 + 2 + 1 + 2 = 11$), write $1$, carry $1$. Add the hundreds column ($1 \\text{ carried} + 1 + 8 + 5 = 15$), write $5$, carry $1$. Add the thousands column ($1 \\text{ carried} + 2 = 3$).",
        "workingOut": "3,519"
      }
    ]
  },
  {
    "id": "y6-wn-q35",
    "c": "WN4",
    "t": "Basic Operations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Calculate: $8000 - 2478$",
    "a": 0,
    "opts": [
      "5522",
      "6074",
      "4970",
      "5798"
    ],
    "h": "Since $8000$ has consecutive zeros, you must borrow starting all the way from the thousands place ($8$).",
    "s": "Borrowing steps:\n- Borrow from thousands place: $8000$ becomes $7$ thousands, $9$ hundreds, $9$ tens, and $10$ units.\n- Subtract: $10-8=2$, $9-7=2$, $9-4=5$, $7-2=5$.\n\nResult: $5\\,522$.",
    "solutionSteps": [
      {
        "explanation": "Show the regrouping (borrowing) of $8,000$.",
        "workingOut": "\\begin{array}{rccc} 7 & 9 & 9 & 10 \\\\ \\cancel{8} & \\cancel{0} & \\cancel{0} & \\cancel{0} \\\\ - \\quad 2 & 4 & 7 & 8 \\\\ hline \\end{array}"
      },
      {
        "explanation": "Perform the column subtractions.",
        "workingOut": "5,522"
      }
    ]
  },
  {
    "id": "y6-wn-q36",
    "c": "WN4",
    "t": "Basic Operations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Multiply: $234 \\times 16$",
    "a": 0,
    "opts": [
      "3744",
      "4118",
      "3370",
      "3931"
    ],
    "h": "Multiply $234$ by $6$, then multiply $234$ by $10$, and add the results.",
    "s": "1. $234 \\times 6 = 1\\,404$\n2. $234 \\times 10 = 2\\,340$\n\nSum: $1\\,404 + 2\\,340 = 3\\,744$.",
    "solutionSteps": [
      {
        "explanation": "Calculate the first partial product ($234 \\times 6$).",
        "workingOut": "234 \\times 6 = 1,404"
      },
      {
        "explanation": "Calculate the second partial product ($234 \\times 10$).",
        "workingOut": "234 \\times 10 = 2,340"
      },
      {
        "explanation": "Sum the two partial products.",
        "workingOut": "\\begin{array}{r l} 1,404 & \\\\ + \\quad 2,340 & \\\\ \\hline \\mathbf{3,744} & \\end{array}"
      }
    ]
  },
  {
    "id": "y6-wn-q37",
    "c": "WN4",
    "t": "Basic Operations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the remainder when $586$ is divided by $15$?",
    "a": 0,
    "opts": [
      "1",
      "2",
      "3",
      "4"
    ],
    "h": "Find how many times $15$ goes into $586$ by performing division. The amount left over is the remainder.",
    "s": "1. $58 \\div 15 = 3$ remainder $13$\n2. Bring down $6 \\rightarrow 136 \\div 15 = 9$ remainder $1$\n\nSo $586 = 39 \\times 15 + 1$. The remainder is $1$.",
    "solutionSteps": [
      {
        "explanation": "Divide $586$ by $15$ using long or short division.",
        "workingOut": "586 \\div 15 = 39 \\quad \\text{with a remainder}"
      },
      {
        "explanation": "Find the remainder by calculating the difference from the nearest multiple of 15.",
        "workingOut": "\\begin{aligned} 15 \\times 39 &= 585 \\\\ \\text{Remainder} &= 586 - 585 = 1 \\end{aligned}"
      }
    ]
  },
  {
    "id": "y6-wn-q38",
    "c": "WN4",
    "t": "Basic Operations",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Divide $149$ by $6$ and find the quotient and remainder.",
    "a": 0,
    "opts": [
      "Quotient: 24, Remainder: 5",
      "Quotient: 24, Remainder: 1",
      "Quotient: 25, Remainder: 0",
      "Quotient: 23, Remainder: 11"
    ],
    "h": "Calculate how many times $6$ goes into $149$ (look at $14 \\div 6$, then the remaining units).",
    "s": "1. $14 \\div 6 = 2$ remainder $2$\n2. Bring down $9 \\rightarrow 29 \\div 6 = 4$ remainder $5$\n\nQuotient is $24$, remainder is $5$.",
    "solutionSteps": [
      {
        "explanation": "Divide $149$ by $6$ step-by-step.",
        "workingOut": "\\begin{aligned} 14 \\div 6 &= 2 \\text{ r } 2 \\\\ 29 \\div 6 &= 4 \\text{ r } 5 \\end{aligned}"
      },
      {
        "explanation": "State the quotient and remainder.",
        "workingOut": "\\text{Quotient} = 24, \\quad \\text{Remainder} = 5"
      }
    ]
  },
  {
    "id": "y6-wn-q39",
    "c": "WN4",
    "t": "Basic Operations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Calculate: $385 + 748 + 196$",
    "a": 0,
    "opts": [
      "1329",
      "1462",
      "1196",
      "1395"
    ],
    "h": "Add vertically: start with units ($5+8+6$), then tens, then hundreds, carrying numbers over appropriately.",
    "s": "Performing addition:\n$385 + 748 + 196 = 1\\,329$.",
    "solutionSteps": [
      {
        "explanation": "Sum the units column ($5 + 8 + 6 = 19$). Write $9$, carry $1$.",
        "workingOut": "\\begin{aligned} \\text{Units: } 5+8+6 &= 19 \\end{aligned}"
      },
      {
        "explanation": "Sum the tens column ($1 \\text{ carried} + 8 + 4 + 9 = 22$). Write $2$, carry $2$.",
        "workingOut": "\\begin{aligned} \\text{Tens: } 1+8+4+9 &= 22 \\end{aligned}"
      },
      {
        "explanation": "Sum the hundreds column ($2 \\text{ carried} + 3 + 7 + 1 = 13$).",
        "workingOut": "\\begin{aligned} \\text{Hundreds: } 2+3+7+1 &= 13 \\end{aligned}"
      },
      {
        "explanation": "Assemble the sum.",
        "workingOut": "1,329"
      }
    ]
  },
  {
    "id": "y6-wn-q40",
    "c": "WN4",
    "t": "Basic Operations",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Multiply: $84 \\times 13$",
    "a": 0,
    "opts": [
      "1092",
      "1201",
      "983",
      "1147"
    ],
    "h": "You can multiply $84 \\times 10$ and $84 \\times 3$, then add them.",
    "s": "1. $84 \\times 10 = 840$\n2. $84 \\times 3 = 252$\n\nSum: $840 + 252 = 1\\,092$.",
    "solutionSteps": [
      {
        "explanation": "Multiply by the units digit ($84 \\times 3$).",
        "workingOut": "84 \\times 3 = 252"
      },
      {
        "explanation": "Multiply by the tens digit ($84 \\times 10$).",
        "workingOut": "84 \\times 10 = 840"
      },
      {
        "explanation": "Add the partial products.",
        "workingOut": "252 + 840 = 1,092"
      }
    ]
  },
  {
    "id": "y6-wn-q41",
    "c": "WN5",
    "t": "Powers and Exponential Notation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Evaluate using the order of operations (BODMAS):\n$8 \\times 9 - (18 - 8 \\div 2)$",
    "a": 0,
    "opts": [
      "58",
      "64",
      "52",
      "61"
    ],
    "h": "Always compute terms inside brackets first. Within brackets, division ($\\div$) takes priority over subtraction ($-$).",
    "s": "1. Brackets first: $18 - 8 \\div 2$\n   - Divide first: $8 \\div 2 = 4$\n   - Subtract: $18 - 4 = 14$\n2. Replace brackets: $8 \\times 9 - 14$\n3. Multiply: $8 \\times 9 = 72$\n4. Subtract: $72 - 14 = 58$.",
    "solutionSteps": [
      {
        "explanation": "Start inside the brackets and apply division priority.",
        "workingOut": "18 - (8 \\div 2) = 18 - 4"
      },
      {
        "explanation": "Complete the operation inside the brackets.",
        "workingOut": "18 - 4 = 14"
      },
      {
        "explanation": "Substitute this value back into the original expression: $8 \\times 9 - 14$. Perform multiplication.",
        "workingOut": "8 \\times 9 = 72"
      },
      {
        "explanation": "Subtract to find the final result.",
        "workingOut": "72 - 14 = 58"
      }
    ]
  },
  {
    "id": "y6-wn-q42",
    "c": "WN5",
    "t": "Powers and Exponential Notation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Evaluate using the order of operations:\n$85 - [(18 \\div 3) - (32 \\div 16)] \\times 12 + 6$",
    "a": 0,
    "opts": [
      "43",
      "47",
      "39",
      "45"
    ],
    "h": "Work from the innermost brackets outward. Calculate $(18 \\div 3)$ and $(32 \\div 16)$ first.",
    "s": "1. Inner brackets:\n   - $18 \\div 3 = 6$\n   - $32 \\div 16 = 2$\n2. Outer square brackets: $[6 - 2] = 4$\n3. Expression becomes: $85 - 4 \\times 12 + 6$\n4. Multiplication next: $4 \\times 12 = 48$\n5. Perform addition/subtraction from left to right:\n   - $85 - 48 = 37$\n   - $37 + 6 = 43$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the innermost divisions inside the brackets.",
        "workingOut": "\\begin{aligned} 18 \\div 3 &= 6 \\\\ 32 \\div 16 &= 2 \\end{aligned}"
      },
      {
        "explanation": "Evaluate the subtraction within the square brackets.",
        "workingOut": "[6 - 2] = 4"
      },
      {
        "explanation": "Substitute the brackets value back into the expression: $85 - 4 \\times 12 + 6$. Perform multiplication.",
        "workingOut": "4 \\times 12 = 48"
      },
      {
        "explanation": "Solve the remaining addition and subtraction from left to right.",
        "workingOut": "\\begin{aligned} 85 - 48 + 6 &= 37 + 6 \\\\ &= 43 \\end{aligned}"
      }
    ]
  },
  {
    "id": "y6-wn-q43",
    "c": "WN5",
    "t": "Powers and Exponential Notation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Evaluate: $(24 + 12) \\div 3 + 2$",
    "a": 0,
    "opts": [
      "14",
      "15",
      "13",
      "17"
    ],
    "h": "Brackets are computed first, then division, and finally addition.",
    "s": "1. Brackets: $24 + 12 = 36$\n2. Division: $36 \\div 3 = 12$\n3. Addition: $12 + 2 = 14$.",
    "solutionSteps": [
      {
        "explanation": "Add inside the brackets first.",
        "workingOut": "(24 + 12) = 36"
      },
      {
        "explanation": "Perform the division ($36 \\div 3$).",
        "workingOut": "36 \\div 3 = 12"
      },
      {
        "explanation": "Add 2 to the result.",
        "workingOut": "12 + 2 = 14"
      }
    ]
  },
  {
    "id": "y6-wn-q44",
    "c": "WN5",
    "t": "Powers and Exponential Notation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Evaluate: $30 - 10 \\div (3 + 2)$",
    "a": 0,
    "opts": [
      "28",
      "31",
      "25",
      "29"
    ],
    "h": "BODMAS order: Brackets first, then Division, then Subtraction.",
    "s": "1. Brackets: $3 + 2 = 5$\n2. Division: $10 \\div 5 = 2$\n3. Subtraction: $30 - 2 = 28$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the addition within brackets first.",
        "workingOut": "(3 + 2) = 5"
      },
      {
        "explanation": "Perform the division next.",
        "workingOut": "10 \\div 5 = 2"
      },
      {
        "explanation": "Perform the subtraction.",
        "workingOut": "30 - 2 = 28"
      }
    ]
  },
  {
    "id": "y6-wn-q45",
    "c": "WN5",
    "t": "Powers and Exponential Notation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Find the value of $3^4$.",
    "a": 0,
    "opts": [
      "81",
      "89",
      "73",
      "85"
    ],
    "h": "An exponent tells you how many times to multiply the base by itself: $3^4 = 3 \\times 3 \\times 3 \\times 3$.",
    "s": "$3^4 = 3 \\times 3 \\times 3 \\times 3 = 9 \\times 9 = 81$.",
    "solutionSteps": [
      {
        "explanation": "Write out the power as a repeated multiplication.",
        "workingOut": "3^4 = 3 \\times 3 \\times 3 \\times 3"
      },
      {
        "explanation": "Multiply step-by-step.",
        "workingOut": "\\begin{aligned} 3 \\times 3 &= 9 \\\\ 9 \\times 3 &= 27 \\\\ 27 \\times 3 &= 81 \\end{aligned}"
      }
    ]
  },
  {
    "id": "y6-wn-q46",
    "c": "WN5",
    "t": "Powers and Exponential Notation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find the value of $3 \\times 4^3$.",
    "a": 0,
    "opts": [
      "192",
      "211",
      "173",
      "202"
    ],
    "h": "According to BODMAS, exponents (orders) must be calculated before multiplication: calculate $4^3$ first.",
    "s": "1. Exponent: $4^3 = 4 \\times 4 \\times 4 = 64$\n2. Multiplication: $3 \\times 64 = 192$.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the exponent $4^3$ first.",
        "workingOut": "4^3 = 4 \\times 4 \\times 4 = 64"
      },
      {
        "explanation": "Multiply the result by $3$.",
        "workingOut": "3 \\times 64 = 192"
      }
    ]
  },
  {
    "id": "y6-wn-q47",
    "c": "WN5",
    "t": "Powers and Exponential Notation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Write the expression $5 \\times 5 \\times 5 \\times 5$ in exponential notation.",
    "a": 0,
    "opts": [
      "\\(5^4\\)",
      "\\(5 \\times 4\\)",
      "\\(4^5\\)",
      "\\(20^1\\)"
    ],
    "h": "Count how many times $5$ is multiplied by itself. This count is the exponent (power).",
    "s": "The number $5$ is multiplied by itself $4$ times. In exponential notation, this is written as $5^4$.",
    "solutionSteps": [
      {
        "explanation": "Count the number of times the base ($5$) appears in the product.",
        "workingOut": "\\underbrace{5 \\times 5 \\times 5 \\times 5}_{4 \\text{ times}}"
      },
      {
        "explanation": "Write the base with the count as the exponent.",
        "workingOut": "5^4"
      }
    ]
  },
  {
    "id": "y6-wn-q48",
    "c": "WN5",
    "t": "Powers and Exponential Notation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Evaluate: $2^6$",
    "a": 0,
    "opts": [
      "64",
      "70",
      "58",
      "67"
    ],
    "h": "Multiply $2$ by itself $6$ times: $2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2$.",
    "s": "$2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 64$.",
    "solutionSteps": [
      {
        "explanation": "Expand the exponential expression.",
        "workingOut": "2^6 = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2"
      },
      {
        "explanation": "Perform the repeated multiplication.",
        "workingOut": "\\begin{aligned} 2 \\times 2 &= 4 \\\\ 4 \\times 2 &= 8 \\\\ 8 \\times 2 &= 16 \\\\ 16 \\times 2 &= 32 \\\\ 32 \\times 2 &= 64 \\end{aligned}"
      }
    ]
  },
  {
    "id": "y6-wn-q49",
    "c": "WN5",
    "t": "Powers and Exponential Notation",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Evaluate: $18 - 8 \\div 2 + 3$",
    "a": 0,
    "opts": [
      "17",
      "19",
      "15",
      "18"
    ],
    "h": "BODMAS rule: Division comes before addition and subtraction. Subtraction and addition are then done from left to right.",
    "s": "1. Division: $8 \\div 2 = 4$\n2. Substitute back: $18 - 4 + 3$\n3. Left-to-right:\n   - $18 - 4 = 14$\n   - $14 + 3 = 17$.",
    "solutionSteps": [
      {
        "explanation": "Perform the division first.",
        "workingOut": "8 \\div 2 = 4"
      },
      {
        "explanation": "Substitute back and perform operations from left to right.",
        "workingOut": "\\begin{aligned} 18 - 4 + 3 &= 14 + 3 \\\\ &= 17 \\end{aligned}"
      }
    ]
  },
  {
    "id": "y6-wn-q50",
    "c": "WN5",
    "t": "Powers and Exponential Notation",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Write the equation $8000 = 8 \\times 1000$ in exponential notation.",
    "a": 0,
    "opts": [
      "\\(8 \\times 10^3\\)",
      "\\(8 \\times 10^2\\)",
      "\\(80^3\\)",
      "\\(8 \\times 10^4\\)"
    ],
    "h": "Convert $1000$ into a power of $10$. Count the number of zeros in $1000$.",
    "s": "1. $1000 = 10 \\times 10 \\times 10 = 10^3$\n2. Therefore, $8 \\times 1000 = 8 \\times 10^3$.",
    "solutionSteps": [
      {
        "explanation": "Express $1000$ as a product of tens.",
        "workingOut": "1000 = 10 \\times 10 \\times 10"
      },
      {
        "explanation": "Write the product of tens in exponential form.",
        "workingOut": "1000 = 10^3"
      },
      {
        "explanation": "Substitute $10^3$ back into the original multiplication.",
        "workingOut": "8 \\times 1000 = 8 \\times 10^3"
      }
    ]
  },
  {
    "id": "y6-wn-q51",
    "c": "WN6",
    "t": "Word Problems and Averages",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "The average of $4$ numbers is $8$. A fifth number is added, and the new average of all five numbers is $10$. What is the fifth number?",
    "a": 0,
    "opts": [
      "18",
      "20",
      "16",
      "19"
    ],
    "h": "First find the total sum of the first 4 numbers ($4 \\times \\text{average}$). Then find the total sum of the 5 numbers ($5 \\times \\text{new average}$). The difference is the fifth number.",
    "s": "1. Sum of first 4 numbers: $4 \\times 8 = 32$\n2. Sum of 5 numbers: $5 \\times 10 = 50$\n3. The fifth number is the difference: $50 - 32 = 18$.",
    "solutionSteps": [
      {
        "explanation": "Calculate the sum of the original 4 numbers.",
        "workingOut": "\\text{Sum of 4 numbers} = 4 \\times 8 = 32"
      },
      {
        "explanation": "Calculate the sum of the 5 numbers after the new number is added.",
        "workingOut": "\\text{Sum of 5 numbers} = 5 \\times 10 = 50"
      },
      {
        "explanation": "Subtract the original sum from the new sum to find the value of the added number.",
        "workingOut": "\\text{Fifth number} = 50 - 32 = 18"
      }
    ]
  },
  {
    "id": "y6-wn-q52",
    "c": "WN6",
    "t": "Word Problems and Averages",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "A cricket player's batting average is $24$ runs across $6$ matches. If they score $108$ runs in their $7\\text{th}$ match, what is their new batting average?",
    "a": 0,
    "opts": [
      "36",
      "40",
      "32",
      "38"
    ],
    "h": "Find the total runs scored in the first $6$ matches. Add the $108$ runs from the $7\\text{th}$ match to get the new total. Divide by $7$.",
    "s": "1. Runs in first 6 matches: $6 \\times 24 = 144$\n2. New total runs: $144 + 108 = 252$\n3. Divide by total matches (7): $252 \\div 7 = 36$.\n\nNew average is $36$.",
    "solutionSteps": [
      {
        "explanation": "Find the total runs scored in the first 6 matches.",
        "workingOut": "\\text{Total runs (6 matches)} = 6 \\times 24 = 144"
      },
      {
        "explanation": "Add the runs from the 7th match to find the new total runs.",
        "workingOut": "\\text{New total runs} = 144 + 108 = 252"
      },
      {
        "explanation": "Divide the new total runs by 7 matches to find the new average.",
        "workingOut": "\\text{New average} = \\frac{252}{7} = 36"
      }
    ]
  },
  {
    "id": "y6-wn-q53",
    "c": "WN6",
    "t": "Word Problems and Averages",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Translate the following statement into a mathematical expression and evaluate:\n'The product of $8$ and $7$ is decreased by the quotient of $12$ and $4$.'",
    "a": 0,
    "opts": [
      "53",
      "58",
      "48",
      "56"
    ],
    "h": "'Product' means multiply ($\\times$). 'Decreased by' means subtract ($-$). 'Quotient' means divide ($\\div$). Write it as $(8 \\times 7) - (12 \\div 4)$.",
    "s": "1. Translate: $(8 \\times 7) - (12 \\div 4)$\n2. Product: $8 \\times 7 = 56$\n3. Quotient: $12 \\div 4 = 3$\n4. Evaluate: $56 - 3 = 53$.",
    "solutionSteps": [
      {
        "explanation": "Translate verbal phrases to operations: 'product of 8 and 7' is $8 \\times 7$, 'quotient of 12 and 4' is $12 \\div 4$.",
        "workingOut": "(8 \\times 7) - (12 \\div 4)"
      },
      {
        "explanation": "Calculate the multiplication and division.",
        "workingOut": "\\begin{aligned} 8 \\times 7 &= 56 \\\\ 12 \\div 4 &= 3 \\end{aligned}"
      },
      {
        "explanation": "Subtract the quotient from the product.",
        "workingOut": "56 - 3 = 53"
      }
    ]
  },
  {
    "id": "y6-wn-q54",
    "c": "WN6",
    "t": "Word Problems and Averages",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Translate the following statement into a mathematical expression and evaluate:\n'$3$ times the square of $4$ is increased by the difference between $15$ and $6$.'",
    "a": 0,
    "opts": [
      "57",
      "63",
      "51",
      "60"
    ],
    "h": "Write '3 times the square of 4' as $3 \\times 4^2$. 'Difference between 15 and 6' is $(15 - 6)$. 'Increased by' means add ($+$).",
    "s": "1. Translate: $3 \\times 4^2 + (15 - 6)$\n2. Exponent: $4^2 = 16$\n3. Multiplication: $3 \\times 16 = 48$\n4. Brackets: $15 - 6 = 9$\n5. Sum: $48 + 9 = 57$.",
    "solutionSteps": [
      {
        "explanation": "Write the verbal equation as a mathematical expression.",
        "workingOut": "3 \\times 4^2 + (15 - 6)"
      },
      {
        "explanation": "Compute the exponent first ($4^2 = 16$) and perform the multiplication.",
        "workingOut": "3 \\times 16 = 48"
      },
      {
        "explanation": "Calculate the difference inside the brackets.",
        "workingOut": "15 - 6 = 9"
      },
      {
        "explanation": "Add the two parts.",
        "workingOut": "48 + 9 = 57"
      }
    ]
  },
  {
    "id": "y6-wn-q55",
    "c": "WN6",
    "t": "Word Problems and Averages",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Evaluate: **Decrease the quotient of $36$ and $4$ by $3$.**",
    "a": 0,
    "opts": [
      "6",
      "7",
      "5",
      "8"
    ],
    "h": "First find the quotient of $36$ and $4$ (which is $36 \\div 4$). Then decrease (subtract) that value by $3$.",
    "s": "1. Quotient: $36 \\div 4 = 9$\n2. Decrease by 3: $9 - 3 = 6$.",
    "solutionSteps": [
      {
        "explanation": "Set up the math expression.",
        "workingOut": "(36 \\div 4) - 3"
      },
      {
        "explanation": "Find the quotient first.",
        "workingOut": "36 \\div 4 = 9"
      },
      {
        "explanation": "Subtract 3.",
        "workingOut": "9 - 3 = 6"
      }
    ]
  },
  {
    "id": "y6-wn-q56",
    "c": "WN6",
    "t": "Word Problems and Averages",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "What is the difference between $12$ and the square of $4$?",
    "a": 0,
    "opts": [
      "4",
      "5",
      "3",
      "6"
    ],
    "h": "First find the square of $4$ ($4^2 = 4 \\times 4$). Then find the positive difference between that result and $12$.",
    "s": "1. Square of 4: $4^2 = 16$\n2. Difference between 16 and 12: $16 - 12 = 4$.",
    "solutionSteps": [
      {
        "explanation": "Calculate the square of 4.",
        "workingOut": "4^2 = 16"
      },
      {
        "explanation": "Subtract 12 from 16 to find the difference.",
        "workingOut": "16 - 12 = 4"
      }
    ]
  },
  {
    "id": "y6-wn-q57",
    "c": "WN6",
    "t": "Word Problems and Averages",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Calculate the average of the following numbers: $4$, $8$, $9$, $13$, and $16$.",
    "a": 0,
    "opts": [
      "10",
      "11",
      "9",
      "12"
    ],
    "h": "To find the average, add all the numbers together, then divide by the total count of numbers (which is $5$).",
    "s": "1. Sum: $4 + 8 + 9 + 13 + 16 = 50$\n2. Count: $5$\n3. Average: $50 \\div 5 = 10$.",
    "solutionSteps": [
      {
        "explanation": "Find the sum of all five numbers.",
        "workingOut": "4 + 8 + 9 + 13 + 16 = 50"
      },
      {
        "explanation": "Divide the sum by the count of numbers (5).",
        "workingOut": "\\text{Average} = \\frac{50}{5} = 10"
      }
    ]
  },
  {
    "id": "y6-wn-q58",
    "c": "WN6",
    "t": "Word Problems and Averages",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Calculate the average of the following numbers: $8$, $12$, $15$, and $21$.",
    "a": 0,
    "opts": [
      "14",
      "15",
      "13",
      "17"
    ],
    "h": "Add the four numbers together, then divide by the count of numbers ($4$).",
    "s": "1. Sum: $8 + 12 + 15 + 21 = 56$\n2. Count: $4$\n3. Average: $56 \\div 4 = 14$.",
    "solutionSteps": [
      {
        "explanation": "Calculate the total sum.",
        "workingOut": "8 + 12 + 15 + 21 = 56"
      },
      {
        "explanation": "Divide by the count of numbers (4).",
        "workingOut": "\\text{Average} = \\frac{56}{4} = 14"
      }
    ]
  },
  {
    "id": "y6-wn-q59",
    "c": "WN6",
    "t": "Word Problems and Averages",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Evaluate: **Increase the product of $12$ and $4$ by $9$.**",
    "a": 0,
    "opts": [
      "57",
      "63",
      "51",
      "60"
    ],
    "h": "First find the product (multiplication) of $12$ and $4$. Then increase (add) the result by $9$.",
    "s": "1. Product: $12 \\times 4 = 48$\n2. Increase by 9: $48 + 9 = 57$.",
    "solutionSteps": [
      {
        "explanation": "Write the expression mathematically.",
        "workingOut": "(12 \\times 4) + 9"
      },
      {
        "explanation": "Calculate the multiplication first.",
        "workingOut": "12 \\times 4 = 48"
      },
      {
        "explanation": "Add 9 to find the total.",
        "workingOut": "48 + 9 = 57"
      }
    ]
  },
  {
    "id": "y6-wn-q60",
    "c": "WN6",
    "t": "Word Problems and Averages",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "A school has $6$ classes in Year 6. The number of students in each class is $28$, $30$, $29$, $31$, $28$, and $34$. What is the average number of students per class?",
    "a": 0,
    "opts": [
      "30",
      "33",
      "27",
      "32"
    ],
    "h": "Find the total number of students in Year 6 by adding all class sizes, then divide by the number of classes ($6$).",
    "s": "1. Total students: $28 + 30 + 29 + 31 + 28 + 34 = 180$\n2. Classes count: $6$\n3. Average students per class: $180 \\div 6 = 30$.",
    "solutionSteps": [
      {
        "explanation": "Sum the sizes of all 6 classes to find the total number of students.",
        "workingOut": "28 + 30 + 29 + 31 + 28 + 34 = 180"
      },
      {
        "explanation": "Divide the total students by the number of classes (6).",
        "workingOut": "\\text{Average} = \\frac{180}{6} = 30"
      }
    ]
  },
  {
    "id": "y6-wn-q1a_p16",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\(XII\\)",
    "a": 0,
    "opts": [
      "\\(12\\)",
      "\\(11\\)",
      "\\(13\\)",
      "\\(15\\)"
    ],
    "h": "Add the values of the symbols together: X = 10, I = 1.",
    "s": "X = 10, II = 2. Adding them together gives: 10 + 2 = 12.",
    "solutionSteps": [
      {
        "explanation": "Identify the values of individual Roman symbols.",
        "workingOut": "\\(X = 10\\), \\(I = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Sum the values from left to right.",
        "workingOut": "\\(10 + 1 + 1 = 12\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q1b_p16",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\(XV\\)",
    "a": 0,
    "opts": [
      "\\(15\\)",
      "\\(14\\)",
      "\\(16\\)",
      "\\(20\\)"
    ],
    "h": "Add the values of the symbols: X = 10, V = 5.",
    "s": "X = 10, V = 5. Adding them together gives: 10 + 5 = 15.",
    "solutionSteps": [
      {
        "explanation": "Identify the values of individual Roman symbols.",
        "workingOut": "\\(X = 10\\), \\(V = 5\\)",
        "graphData": null
      },
      {
        "explanation": "Sum the values from left to right.",
        "workingOut": "\\(10 + 5 = 15\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q1c_p16",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\(XXVII\\)",
    "a": 0,
    "opts": [
      "\\(27\\)",
      "\\(26\\)",
      "\\(28\\)",
      "\\(37\\)"
    ],
    "h": "Add the values of the symbols: X = 10, V = 5, I = 1.",
    "s": "XX = 20, V = 5, II = 2. Adding them together gives: 20 + 5 + 2 = 27.",
    "solutionSteps": [
      {
        "explanation": "Identify the values of individual Roman symbols.",
        "workingOut": "\\(X = 10\\), \\(V = 5\\), \\(I = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Sum the values from left to right.",
        "workingOut": "\\(10 + 10 + 5 + 1 + 1 = 27\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q1d_p16",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\(LIV\\)",
    "a": 0,
    "opts": [
      "\\(54\\)",
      "\\(56\\)",
      "\\(64\\)",
      "\\(44\\)"
    ],
    "h": "Note that L = 50 and IV is a subtractive pair (5 - 1 = 4).",
    "s": "L = 50, IV = 5 - 1 = 4. Adding them together gives: 50 + 4 = 54.",
    "solutionSteps": [
      {
        "explanation": "Identify L and the subtractive pair IV.",
        "workingOut": "\\(L = 50\\), \\(IV = 5 - 1 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Sum the values.",
        "workingOut": "\\(50 + 4 = 54\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q2a_p16",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Convert the following number to Roman numerals:\n\\(14\\)",
    "a": 0,
    "opts": [
      "\\(XIV\\)",
      "\\(XIIII\\)",
      "\\(XVI\\)",
      "\\(IXV\\)"
    ],
    "h": "Break the number into tens (10) and units (4). 10 is X, 4 is IV.",
    "s": "14 = 10 + 4. 10 is represented as X, and 4 is IV. Combined, they form XIV.",
    "solutionSteps": [
      {
        "explanation": "Decompose 14 into tens and units.",
        "workingOut": "\\(14 = 10 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Find the Roman numeral representations for 10 and 4.",
        "workingOut": "\\(10 = X\\), \\(4 = IV\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the representations.",
        "workingOut": "\\text{XIV}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q2b_p16",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Convert the following number to Roman numerals:\n\\(17\\)",
    "a": 0,
    "opts": [
      "\\(XVII\\)",
      "\\(XVV\\)",
      "\\(XIIV\\)",
      "\\(XIVII\\)"
    ],
    "h": "Break the number into 10 + 5 + 2. 10 is X, 5 is V, 2 is II.",
    "s": "17 = 10 + 5 + 2. 10 is X, 5 is V, 2 is II. Combined, they form XVII.",
    "solutionSteps": [
      {
        "explanation": "Decompose 17 into standard Roman place values.",
        "workingOut": "\\(17 = 10 + 5 + 2\\)",
        "graphData": null
      },
      {
        "explanation": "Convert each part to Roman symbols.",
        "workingOut": "\\(10 = X\\), \\(5 = V\\), \\(2 = II\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the symbols.",
        "workingOut": "\\text{XVII}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q2c_p16",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Convert the following number to Roman numerals:\n\\(21\\)",
    "a": 0,
    "opts": [
      "\\(XXI\\)",
      "\\(XIX\\)",
      "\\(XIXI\\)",
      "\\(LXXI\\)"
    ],
    "h": "Break 21 into 20 (XX) and 1 (I).",
    "s": "21 = 20 + 1. 20 is XX, 1 is I. Combined, they form XXI.",
    "solutionSteps": [
      {
        "explanation": "Decompose 21 into tens and units.",
        "workingOut": "\\(21 = 20 + 1\\)",
        "graphData": null
      },
      {
        "explanation": "Convert each part to Roman symbols.",
        "workingOut": "\\(20 = XX\\), \\(1 = I\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the symbols.",
        "workingOut": "\\text{XXI}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q2d_p16",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Convert the following number to Roman numerals:\n\\(44\\)",
    "a": 0,
    "opts": [
      "\\(XLIV\\)",
      "\\(XXXXIV\\)",
      "\\(LXIV\\)",
      "\\(XLVI\\)"
    ],
    "h": "Break 44 into 40 (XL) and 4 (IV).",
    "s": "44 = 40 + 4. 40 is represented as XL (10 before 50) and 4 as IV. Combined, they form XLIV.",
    "solutionSteps": [
      {
        "explanation": "Decompose 44 into tens and units.",
        "workingOut": "\\(44 = 40 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Represent 40 and 4 using subtractive Roman notation.",
        "workingOut": "\\(40 = XL\\), \\(4 = IV\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the symbols.",
        "workingOut": "\\text{XLIV}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q3a_p16",
    "c": "WN2",
    "t": "Writing numbers in words",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following number in words:\n\\(143\\)",
    "a": 0,
    "opts": [
      "One hundred and forty-three",
      "One hundred and thirty-four",
      "One hundred and forty-two",
      "One hundred and thirty-three"
    ],
    "h": "Break the number into hundreds, tens, and units.",
    "s": "143 consists of 1 hundred, 4 tens (forty), and 3 units (three).",
    "solutionSteps": [
      {
        "explanation": "Identify the place values of 143.",
        "workingOut": "100 \\implies \\text{One hundred}, \\quad 40 \\implies \\text{forty}, \\quad 3 \\implies \\text{three}",
        "graphData": null
      },
      {
        "explanation": "Combine the parts with 'and'.",
        "workingOut": "\\text{One hundred and forty-three}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q3b_p16",
    "c": "WN2",
    "t": "Writing numbers in words",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following number in words:\n\\(807\\)",
    "a": 0,
    "opts": [
      "Eight hundred and seven",
      "Eight hundred and seventy",
      "Eight hundred and seventeen",
      "Eighty-seven"
    ],
    "h": "Break the number into hundreds and units, noting there are zero tens.",
    "s": "807 consists of 8 hundreds and 7 units. Written as: Eight hundred and seven.",
    "solutionSteps": [
      {
        "explanation": "Identify the place values of 807.",
        "workingOut": "800 \\implies \\text{Eight hundred}, \\quad 0 \\implies \\text{tens}, \\quad 7 \\implies \\text{seven}",
        "graphData": null
      },
      {
        "explanation": "Combine the parts with 'and'.",
        "workingOut": "\\text{Eight hundred and seven}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q3c_p16",
    "c": "WN2",
    "t": "Writing numbers in words",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following number in words:\n\\(650\\)",
    "a": 0,
    "opts": [
      "Six hundred and fifty",
      "Six hundred and fifteen",
      "Six hundred and five",
      "Six hundred and fifty-five"
    ],
    "h": "Break the number into hundreds and tens, noting there are zero units.",
    "s": "650 consists of 6 hundreds and 5 tens. Written as: Six hundred and fifty.",
    "solutionSteps": [
      {
        "explanation": "Identify the place values of 650.",
        "workingOut": "600 \\implies \\text{Six hundred}, \\quad 50 \\implies \\text{fifty}",
        "graphData": null
      },
      {
        "explanation": "Combine the parts with 'and'.",
        "workingOut": "\\text{Six hundred and fifty}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q3d_p16",
    "c": "WN2",
    "t": "Writing numbers in words",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following number in words:\n\\(1\\ 634\\)",
    "a": 0,
    "opts": [
      "One thousand, six hundred and thirty-four",
      "One thousand, six hundred and forty-three",
      "One thousand, six hundred and thirty-six",
      "One thousand, six hundred and thirty"
    ],
    "h": "Break the number into thousands, hundreds, tens, and units.",
    "s": "1 634 consists of 1 thousand, 6 hundreds, 3 tens (thirty), and 4 units (four).",
    "solutionSteps": [
      {
        "explanation": "Identify the place values of 1 634.",
        "workingOut": "1\\,000 \\implies \\text{One thousand}, \\quad 600 \\implies \\text{six hundred}, \\quad 34 \\implies \\text{thirty-four}",
        "graphData": null
      },
      {
        "explanation": "Combine the parts with proper commas and 'and'.",
        "workingOut": "\\text{One thousand, six hundred and thirty-four}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q4a_p16",
    "c": "WN2",
    "t": "Place Value",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following word number as an ordinary numeral:\nFour hundred and eighty-seven",
    "a": 0,
    "opts": [
      "\\(487\\)",
      "\\(478\\)",
      "\\(400\\ 87\\)",
      "\\(4870\\)"
    ],
    "h": "Identify the value of each part: four hundred (400), eighty-seven (87).",
    "s": "Four hundred is 400. Eighty-seven is 87. Combining them gives 487.",
    "solutionSteps": [
      {
        "explanation": "Identify the numbers representing each word part.",
        "workingOut": "\\text{Four hundred} = 400, \\quad \\text{eighty-seven} = 87",
        "graphData": null
      },
      {
        "explanation": "Sum the values to find the standard numeral.",
        "workingOut": "\\(400 + 87 = 487\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q4b_p16",
    "c": "WN2",
    "t": "Place Value",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following word number as an ordinary numeral:\nSix hundred and three",
    "a": 0,
    "opts": [
      "\\(603\\)",
      "\\(630\\)",
      "\\(6003\\)",
      "\\(633\\)"
    ],
    "h": "Identify the value of each part: six hundred (600), three (3). Use a zero in the tens place.",
    "s": "Six hundred is 600. Three is 3. Combining them gives 603.",
    "solutionSteps": [
      {
        "explanation": "Identify the numbers representing each word part.",
        "workingOut": "\\text{Six hundred} = 600, \\quad \\text{three} = 3",
        "graphData": null
      },
      {
        "explanation": "Sum the values to find the standard numeral.",
        "workingOut": "\\(600 + 3 = 603\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q5a_p16",
    "c": "WN3",
    "t": "Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the expanded expression to find the ordinary numeral:\n\\((8 \\times 100) + (6 \\times 10) + (3 \\times 1)\\)",
    "a": 0,
    "opts": [
      "\\(863\\)",
      "\\(836\\)",
      "\\(800\\ 63\\)",
      "\\(860\\)"
    ],
    "h": "Evaluate the multiplication inside each set of parentheses first, then add them.",
    "s": "(8 x 100) = 800. (6 x 10) = 60. (3 x 1) = 3. Adding them gives: 800 + 60 + 3 = 863.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the products within parentheses.",
        "workingOut": "\\(8 \\times 100 = 800\\), \\quad \\(6 \\times 10 = 60\\), \\quad \\(3 \\times 1 = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Add the terms together.",
        "workingOut": "\\(800 + 60 + 3 = 863\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q5b_p16",
    "c": "WN3",
    "t": "Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the expanded expression to find the ordinary numeral:\n\\((4 \\times 100) + (0 \\times 10) + (9 \\times 1)\\)",
    "a": 0,
    "opts": [
      "\\(409\\)",
      "\\(490\\)",
      "\\(49\\)",
      "\\(4009\\)"
    ],
    "h": "Multiply within the parentheses first, then add the results.",
    "s": "(4 x 100) = 400. (0 x 10) = 0. (9 x 1) = 9. Adding them gives: 400 + 0 + 9 = 409.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the products within parentheses.",
        "workingOut": "\\(4 \\times 100 = 400\\), \\quad \\(0 \\times 10 = 0\\), \\quad \\(9 \\times 1 = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Add the terms together.",
        "workingOut": "\\(400 + 0 + 9 = 409\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q6a_p16",
    "c": "WN3",
    "t": "Rounding",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Determine the closer multiple of 10:\nIs \\(84\\) closer to \\(80\\) or \\(90\\)?",
    "a": 0,
    "opts": [
      "\\(80\\)",
      "\\(90\\)",
      "It is exactly halfway between them",
      "\\(85\\)"
    ],
    "h": "Look at the units digit. If it is less than 5, it is closer to the lower multiple.",
    "s": "84 is 4 units away from 80 and 6 units away from 90. Therefore, it is closer to 80.",
    "solutionSteps": [
      {
        "explanation": "Find the distance from 84 to 80.",
        "workingOut": "\\(84 - 80 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Find the distance from 84 to 90.",
        "workingOut": "\\(90 - 84 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Compare the distances. Since 4 is less than 6, 84 is closer to 80.",
        "workingOut": "\\(4 < 6 \\implies 80\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q6b_p16",
    "c": "WN3",
    "t": "Rounding",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Round off the following number to the nearest ten:\n\\(84\\)",
    "a": 0,
    "opts": [
      "\\(80\\)",
      "\\(90\\)",
      "\\(85\\)",
      "\\(84\\)"
    ],
    "h": "Look at the units digit. If the units digit is less than 5, round down.",
    "s": "In 84, the units digit is 4. Since 4 is less than 5, we round down to 80.",
    "solutionSteps": [
      {
        "explanation": "Identify the units digit of 84.",
        "workingOut": "\\text{Units digit} = 4",
        "graphData": null
      },
      {
        "explanation": "Compare the units digit to 5. Since 4 is less than 5, round down.",
        "workingOut": "\\(4 < 5 \\implies\\text{round down}\\)",
        "graphData": null
      },
      {
        "explanation": "Change the units digit to zero.",
        "workingOut": "\\(84 \\approx 80\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q7a_p16",
    "c": "WN3",
    "t": "Addition",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the sum:\n\\(46 + 33\\)",
    "a": 0,
    "opts": [
      "\\(79\\)",
      "\\(78\\)",
      "\\(89\\)",
      "\\(73\\)"
    ],
    "h": "Add the units digits first, then add the tens digits.",
    "s": "Units: 6 + 3 = 9. Tens: 4 + 3 = 7. Combining them gives 79.",
    "solutionSteps": [
      {
        "explanation": "Set up the addition by aligning the place values.",
        "workingOut": "\\begin{array}{r@{\\quad}l} 46 \\\\ +\\quad 33 \\\\ \\hline \\end{array}",
        "graphData": null
      },
      {
        "explanation": "Add the units column.",
        "workingOut": "\\(6 + 3 = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Add the tens column.",
        "workingOut": "\\(4 + 3 = 7\\)",
        "graphData": null
      },
      {
        "explanation": "State the final sum.",
        "workingOut": "\\(79\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q7b_p16",
    "c": "WN3",
    "t": "Addition",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the sum:\n\\(68 + 25\\)",
    "a": 0,
    "opts": [
      "\\(93\\)",
      "\\(83\\)",
      "\\(95\\)",
      "\\(98\\)"
    ],
    "h": "Add the units digits first. If the sum is 10 or more, carry over to the tens place.",
    "s": "Units: 8 + 5 = 13 (write 3, carry 1). Tens: 6 + 2 + 1 (carry) = 9. Sum is 93.",
    "solutionSteps": [
      {
        "explanation": "Set up the vertical column addition.",
        "workingOut": "\\begin{array}{r@{\\quad}l} 68 \\\\ +\\quad 25 \\\\ \\hline \\end{array}",
        "graphData": null
      },
      {
        "explanation": "Add the units place and carry over 1 to the tens place.",
        "workingOut": "\\(8 + 5 = 13 \\implies 3\\text{ with carry of } 1\\)",
        "graphData": null
      },
      {
        "explanation": "Add the tens place including the carried value.",
        "workingOut": "\\(6 + 2 + 1\\text{ (carry)} = 9\\)",
        "graphData": null
      },
      {
        "explanation": "State the final sum.",
        "workingOut": "\\(93\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q7c_p16",
    "c": "WN3",
    "t": "Addition",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the sum:\n\\(83 + 54\\)",
    "a": 0,
    "opts": [
      "\\(137\\)",
      "\\(127\\)",
      "\\(133\\)",
      "\\(147\\)"
    ],
    "h": "Add the units digits, then add the tens digits.",
    "s": "Units: 3 + 4 = 7. Tens: 8 + 5 = 13. Combined sum is 137.",
    "solutionSteps": [
      {
        "explanation": "Set up the vertical column addition.",
        "workingOut": "\\begin{array}{r@{\\quad}l} 83 \\\\ +\\quad 54 \\\\ \\hline \\end{array}",
        "graphData": null
      },
      {
        "explanation": "Add the units place.",
        "workingOut": "\\(3 + 4 = 7\\)",
        "graphData": null
      },
      {
        "explanation": "Add the tens place.",
        "workingOut": "\\(8 + 5 = 13\\)",
        "graphData": null
      },
      {
        "explanation": "State the final sum.",
        "workingOut": "\\(137\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q8a_p16",
    "c": "WN3",
    "t": "Subtraction",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the difference:\n\\(47 - 24\\)",
    "a": 0,
    "opts": [
      "\\(23\\)",
      "\\(21\\)",
      "\\(27\\)",
      "\\(13\\)"
    ],
    "h": "Subtract the units column first, then the tens column.",
    "s": "Units: 7 - 4 = 3. Tens: 4 - 2 = 2. Combined difference is 23.",
    "solutionSteps": [
      {
        "explanation": "Set up the vertical column subtraction.",
        "workingOut": "\\begin{array}{r@{\\quad}l} 47 \\\\ -\\quad 24 \\\\ \\hline \\end{array}",
        "graphData": null
      },
      {
        "explanation": "Subtract the units place.",
        "workingOut": "\\(7 - 4 = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the tens place.",
        "workingOut": "\\(4 - 2 = 2\\)",
        "graphData": null
      },
      {
        "explanation": "State the final difference.",
        "workingOut": "\\(23\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q8b_p16",
    "c": "WN3",
    "t": "Subtraction",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the difference:\n\\(58 - 15\\)",
    "a": 0,
    "opts": [
      "\\(43\\)",
      "\\(33\\)",
      "\\(45\\)",
      "\\(53\\)"
    ],
    "h": "Subtract the units column first, then the tens column.",
    "s": "Units: 8 - 5 = 3. Tens: 5 - 1 = 4. Combined difference is 43.",
    "solutionSteps": [
      {
        "explanation": "Set up the vertical column subtraction.",
        "workingOut": "\\begin{array}{r@{\\quad}l} 58 \\\\ -\\quad 15 \\\\ \\hline \\end{array}",
        "graphData": null
      },
      {
        "explanation": "Subtract the units place.",
        "workingOut": "\\(8 - 5 = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the tens place.",
        "workingOut": "\\(5 - 1 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "State the final difference.",
        "workingOut": "\\(43\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q8c_p16",
    "c": "WN3",
    "t": "Subtraction",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the difference:\n\\(64 - 18\\)",
    "a": 0,
    "opts": [
      "\\(46\\)",
      "\\(56\\)",
      "\\(48\\)",
      "\\(36\\)"
    ],
    "h": "Borrow 1 ten from the tens place to subtract 8 from 4 in the units place.",
    "s": "Borrowing makes units 14 - 8 = 6. Tens place becomes 5 - 1 = 4. Difference is 46.",
    "solutionSteps": [
      {
        "explanation": "Set up the vertical column subtraction.",
        "workingOut": "\\begin{array}{r@{\\quad}l} 64 \\\\ -\\quad 18 \\\\ \\hline \\end{array}",
        "graphData": null
      },
      {
        "explanation": "Borrow 1 ten from the tens column to make 14 in the units column.",
        "workingOut": "\\(14 - 8 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the remaining tens place (which is now 5).",
        "workingOut": "\\(5 - 1 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "State the final difference.",
        "workingOut": "\\(46\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q9a_p16",
    "c": "WN3",
    "t": "Multiplication",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the product:\n\\(13 \\times 5\\)",
    "a": 0,
    "opts": [
      "\\(65\\)",
      "\\(55\\)",
      "\\(75\\)",
      "\\(60\\)"
    ],
    "h": "Multiply 3 by 5, then multiply 10 by 5, and add the results.",
    "s": "13 x 5 = (10 + 3) x 5 = 50 + 15 = 65.",
    "solutionSteps": [
      {
        "explanation": "Decompose 13 into tens and units.",
        "workingOut": "\\(13 = 10 + 3\\)",
        "graphData": null
      },
      {
        "explanation": "Distribute the multiplication by 5.",
        "workingOut": "\\((10 \\times 5) + (3 \\times 5)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the products and add them together.",
        "workingOut": "\\(50 + 15 = 65\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q9b_p16",
    "c": "WN3",
    "t": "Multiplication",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the product:\n\\(16 \\times 7\\)",
    "a": 0,
    "opts": [
      "\\(112\\)",
      "\\(102\\)",
      "\\(116\\)",
      "\\(122\\)"
    ],
    "h": "Multiply 6 by 7 (42, carry 4), then multiply 1 by 7 and add the carry.",
    "s": "16 x 7 = (10 + 6) x 7 = 70 + 42 = 112.",
    "solutionSteps": [
      {
        "explanation": "Decompose 16 into tens and units.",
        "workingOut": "\\(16 = 10 + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Distribute the multiplication by 7.",
        "workingOut": "\\((10 \\times 7) + (6 \\times 7)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the products and add them together.",
        "workingOut": "\\(70 + 42 = 112\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q9c_p16",
    "c": "WN3",
    "t": "Multiplication",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the product:\n\\(15 \\times 8\\)",
    "a": 0,
    "opts": [
      "\\(120\\)",
      "\\(110\\)",
      "\\(130\\)",
      "\\(100\\)"
    ],
    "h": "Multiply 15 by 8, or use doubling/halving: 15 x 8 = 30 x 4.",
    "s": "15 x 8 = (10 + 5) x 8 = 80 + 40 = 120.",
    "solutionSteps": [
      {
        "explanation": "Apply doubling and halving to simplify the multiplication.",
        "workingOut": "\\(15 \\times 8 = (15 \\times 2) \\times (8 \\div 2)\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the simplified expression.",
        "workingOut": "\\(30 \\times 4 = 120\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q10a_p16",
    "c": "WN3",
    "t": "Division",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the quotient:\n\\(48 \\div 8\\)",
    "a": 0,
    "opts": [
      "\\(6\\)",
      "\\(8\\)",
      "\\(7\\)",
      "\\(5\\)"
    ],
    "h": "Recall the multiplication facts for 8: what number multiplied by 8 equals 48?",
    "s": "8 x 6 = 48. Therefore, 48 / 8 = 6.",
    "solutionSteps": [
      {
        "explanation": "Recall related multiplication facts.",
        "workingOut": "\\(8 \\times 6 = 48\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the division.",
        "workingOut": "\\(48 \\div 8 = 6\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q10b_p16",
    "c": "WN3",
    "t": "Division",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the quotient:\n\\(54 \\div 3\\)",
    "a": 0,
    "opts": [
      "\\(18\\)",
      "\\(16\\)",
      "\\(17\\)",
      "\\(21\\)"
    ],
    "h": "Divide 50 by 3 (gives 10 with remainder 2) and combine with the remaining units.",
    "s": "54 / 3 = (30 + 24) / 3 = 10 + 8 = 18.",
    "solutionSteps": [
      {
        "explanation": "Decompose 54 into multiples of 3.",
        "workingOut": "\\(54 = 30 + 24\\)",
        "graphData": null
      },
      {
        "explanation": "Divide each part by 3.",
        "workingOut": "\\((30 \\div 3) + (24 \\div 3)\\)",
        "graphData": null
      },
      {
        "explanation": "Sum the quotients.",
        "workingOut": "\\(10 + 8 = 18\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q10c_p16",
    "c": "WN3",
    "t": "Division",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the quotient:\n\\(78 \\div 6\\)",
    "a": 0,
    "opts": [
      "\\(13\\)",
      "\\(12\\)",
      "\\(14\\)",
      "\\(16\\)"
    ],
    "h": "Decompose 78 into 60 and 18, and divide both parts by 6.",
    "s": "78 / 6 = (60 + 18) / 6 = 10 + 3 = 13.",
    "solutionSteps": [
      {
        "explanation": "Decompose 78 into parts that are multiples of 6.",
        "workingOut": "\\(78 = 60 + 18\\)",
        "graphData": null
      },
      {
        "explanation": "Divide each part by 6.",
        "workingOut": "\\((60 \\div 6) + (18 \\div 6)\\)",
        "graphData": null
      },
      {
        "explanation": "Sum the quotients.",
        "workingOut": "\\(10 + 3 = 13\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q11a_p16",
    "c": "WN3",
    "t": "Order of Operations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the expression:\n\\(6 \\times 3 + 4\\)",
    "a": 0,
    "opts": [
      "\\(22\\)",
      "\\(42\\)",
      "\\(18\\)",
      "\\(24\\)"
    ],
    "h": "Evaluate the multiplication first, then perform the addition.",
    "s": "According to BODMAS/BOMDAS, multiplication is done first: 6 x 3 = 18. Then add 4: 18 + 4 = 22.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the multiplication first.",
        "workingOut": "\\(6 \\times 3 = 18\\)",
        "graphData": null
      },
      {
        "explanation": "Add 4 to the product.",
        "workingOut": "\\(18 + 4 = 22\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q11b_p16",
    "c": "WN3",
    "t": "Order of Operations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the expression:\n\\(7 + 3 \\times 4\\)",
    "a": 0,
    "opts": [
      "\\(19\\)",
      "\\(40\\)",
      "\\(14\\)",
      "\\(17\\)"
    ],
    "h": "Evaluate the multiplication first, then perform the addition.",
    "s": "Perform multiplication first: 3 x 4 = 12. Then perform addition: 7 + 12 = 19.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the multiplication first.",
        "workingOut": "\\(3 \\times 4 = 12\\)",
        "graphData": null
      },
      {
        "explanation": "Add 7 to the product.",
        "workingOut": "\\(7 + 12 = 19\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q11c_p16",
    "c": "WN3",
    "t": "Order of Operations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the expression:\n\\(12 + 8 \\div 2\\)",
    "a": 0,
    "opts": [
      "\\(16\\)",
      "\\(10\\)",
      "\\(14\\)",
      "\\(18\\)"
    ],
    "h": "Evaluate the division first, then perform the addition.",
    "s": "Perform division first: 8 / 2 = 4. Then perform addition: 12 + 4 = 16.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the division first.",
        "workingOut": "\\(8 \\div 2 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Add 12 to the quotient.",
        "workingOut": "\\(12 + 4 = 16\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q12a_p16",
    "c": "WN3",
    "t": "Mathematical Terminology",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the following terminology problem:\nWhat is the product of \\(4\\) and \\(5\\)?",
    "a": 0,
    "opts": [
      "\\(20\\)",
      "\\(9\\)",
      "\\(1\\)",
      "\\(25\\)"
    ],
    "h": "The term 'product' means to multiply the two numbers.",
    "s": "The product of 4 and 5 is 4 x 5 = 20.",
    "solutionSteps": [
      {
        "explanation": "Understand that 'product' refers to multiplication.",
        "workingOut": "\\(4 \\times 5\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the product.",
        "workingOut": "\\(20\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q12b_p16",
    "c": "WN3",
    "t": "Mathematical Terminology",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the following terminology problem:\nWhat is the sum of \\(9\\) and \\(4\\)?",
    "a": 0,
    "opts": [
      "\\(13\\)",
      "\\(36\\)",
      "\\(5\\)",
      "\\(12\\)"
    ],
    "h": "The term 'sum' means to add the two numbers.",
    "s": "The sum of 9 and 4 is 9 + 4 = 13.",
    "solutionSteps": [
      {
        "explanation": "Understand that 'sum' refers to addition.",
        "workingOut": "\\(9 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the sum.",
        "workingOut": "\\(13\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q12c_p16",
    "c": "WN3",
    "t": "Mathematical Terminology",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the following terminology problem:\nWhat is the difference between \\(11\\) and \\(4\\)?",
    "a": 0,
    "opts": [
      "\\(7\\)",
      "\\(15\\)",
      "\\(44\\)",
      "\\(8\\)"
    ],
    "h": "The term 'difference' means to subtract the smaller number from the larger number.",
    "s": "The difference between 11 and 4 is 11 - 4 = 7.",
    "solutionSteps": [
      {
        "explanation": "Understand that 'difference' refers to subtraction.",
        "workingOut": "\\(11 - 4\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the subtraction.",
        "workingOut": "\\(7\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q12d_p16",
    "c": "WN3",
    "t": "Mathematical Terminology",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the following terminology problem:\nWhat is the quotient of \\(8\\) and \\(2\\)?",
    "a": 0,
    "opts": [
      "\\(4\\)",
      "\\(16\\)",
      "\\(6\\)",
      "\\(10\\)"
    ],
    "h": "The term 'quotient' means the result of dividing the first number by the second.",
    "s": "The quotient of 8 and 2 is 8 / 2 = 4.",
    "solutionSteps": [
      {
        "explanation": "Understand that 'quotient' refers to division.",
        "workingOut": "\\(8 \\div 2\\)",
        "graphData": null
      },
      {
        "explanation": "Evaluate the division.",
        "workingOut": "\\(4\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q12e_p16",
    "c": "WN3",
    "t": "Mathematical Terminology",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the following terminology problem:\nWhat is the average of \\(8\\) and \\(12\\)?",
    "a": 0,
    "opts": [
      "\\(10\\)",
      "\\(8\\)",
      "\\(12\\)",
      "\\(20\\)"
    ],
    "h": "To find the average of two numbers, add them together and divide by 2.",
    "s": "Sum of 8 and 12 is 20. Divide by 2: 20 / 2 = 10.",
    "solutionSteps": [
      {
        "explanation": "Find the sum of the two numbers.",
        "workingOut": "\\(8 + 12 = 20\\)",
        "graphData": null
      },
      {
        "explanation": "Divide the sum by the count of numbers (2).",
        "workingOut": "\\(20 \\div 2 = 10\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q1a_p17",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\(XVIII\\)",
    "a": 0,
    "opts": [
      "\\(18\\)",
      "\\(17\\)",
      "\\(19\\)",
      "\\(23\\)"
    ],
    "h": "Add the values of the symbols: X = 10, V = 5, I = 1.",
    "s": "X = 10, V = 5, III = 3. 10 + 5 + 3 = 18.",
    "solutionSteps": [
      {
        "explanation": "Identify the values of individual Roman symbols.",
        "workingOut": "\\(X = 10\\), \\(V = 5\\), \\(I = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Sum the values from left to right.",
        "workingOut": "\\(10 + 5 + 1 + 1 + 1 = 18\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q1b_p17",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\(XXIX\\)",
    "a": 0,
    "opts": [
      "\\(29\\)",
      "\\(31\\)",
      "\\(28\\)",
      "\\(39\\)"
    ],
    "h": "X = 10. IX is a subtractive pair (10 - 1 = 9).",
    "s": "XX = 20. IX = 9. 20 + 9 = 29.",
    "solutionSteps": [
      {
        "explanation": "Identify individual symbols and subtractive pairs.",
        "workingOut": "\\(X = 10\\), \\(IX = 10 - 1 = 9\\)",
        "graphData": null
      },
      {
        "explanation": "Add the values.",
        "workingOut": "\\(10 + 10 + 9 = 29\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q1c_p17",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\(XLII\\)",
    "a": 0,
    "opts": [
      "\\(42\\)",
      "\\(62\\)",
      "\\(43\\)",
      "\\(52\\)"
    ],
    "h": "XL is a subtractive pair (50 - 10 = 40).",
    "s": "XL = 40. II = 2. 40 + 2 = 42.",
    "solutionSteps": [
      {
        "explanation": "Identify individual symbols and subtractive pairs.",
        "workingOut": "\\(XL = 50 - 10 = 40\\), \\(I = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Sum the values.",
        "workingOut": "\\(40 + 1 + 1 = 42\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q1d_p17",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\(LXXII\\)",
    "a": 0,
    "opts": [
      "\\(72\\)",
      "\\(62\\)",
      "\\(82\\)",
      "\\(73\\)"
    ],
    "h": "L = 50, X = 10, I = 1.",
    "s": "L = 50, XX = 20, II = 2. 50 + 20 + 2 = 72.",
    "solutionSteps": [
      {
        "explanation": "Identify the values of individual symbols.",
        "workingOut": "\\(L = 50\\), \\(X = 10\\), \\(I = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Sum the values from left to right.",
        "workingOut": "\\(50 + 10 + 10 + 1 + 1 = 72\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q2a_p17",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Convert the following number to Roman numerals:\n\\(24\\)",
    "a": 0,
    "opts": [
      "\\(XXIV\\)",
      "\\(XXVI\\)",
      "\\(XXIIII\\)",
      "\\(XIV\\)"
    ],
    "h": "Break 24 into 20 (XX) and 4 (IV).",
    "s": "24 = 20 + 4. 20 is XX, 4 is IV. Combined: XXIV.",
    "solutionSteps": [
      {
        "explanation": "Decompose 24 into tens and units.",
        "workingOut": "\\(24 = 20 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Find the Roman numeral representation for each part.",
        "workingOut": "\\(20 = XX\\), \\(4 = IV\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the representations.",
        "workingOut": "\\text{XXIV}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q2b_p17",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Convert the following number to Roman numerals:\n\\(39\\)",
    "a": 0,
    "opts": [
      "\\(XXXIX\\)",
      "\\(XXXVII\\)",
      "\\(XXIX\\)",
      "\\(XLIX\\)"
    ],
    "h": "Break 39 into 30 (XXX) and 9 (IX).",
    "s": "39 = 30 + 9. 30 is XXX, 9 is IX. Combined: XXXIX.",
    "solutionSteps": [
      {
        "explanation": "Decompose 39 into tens and units.",
        "workingOut": "\\(39 = 30 + 9\\)",
        "graphData": null
      },
      {
        "explanation": "Convert each part to Roman symbols.",
        "workingOut": "\\(30 = XXX\\), \\(9 = IX\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the symbols.",
        "workingOut": "\\text{XXXIX}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q2c_p17",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Convert the following number to Roman numerals:\n\\(64\\)",
    "a": 0,
    "opts": [
      "\\(LXIV\\)",
      "\\(LXVI\\)",
      "\\(XLIV\\)",
      "\\(LXXIV\\)"
    ],
    "h": "Break 64 into 60 (LX) and 4 (IV).",
    "s": "64 = 60 + 4. 60 is LX, 4 is IV. Combined: LXIV.",
    "solutionSteps": [
      {
        "explanation": "Decompose 64 into tens and units.",
        "workingOut": "\\(64 = 60 + 4\\)",
        "graphData": null
      },
      {
        "explanation": "Convert each part to Roman symbols.",
        "workingOut": "\\(60 = LX\\), \\(4 = IV\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the symbols.",
        "workingOut": "\\text{LXIV}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q2d_p17",
    "c": "WN1",
    "t": "Roman Numerals",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Convert the following number to Roman numerals:\n\\(95\\)",
    "a": 0,
    "opts": [
      "\\(XCV\\)",
      "\\(LXXXXV\\)",
      "\\(CXV\\)",
      "\\(CXCV\\)"
    ],
    "h": "90 is represented as XC (10 before 100).",
    "s": "95 = 90 + 5. 90 is XC, 5 is V. Combined: XCV.",
    "solutionSteps": [
      {
        "explanation": "Decompose 95 into tens and units.",
        "workingOut": "\\(95 = 90 + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Represent 90 using subtractive notation.",
        "workingOut": "\\(90 = XC\\), \\(5 = V\\)",
        "graphData": null
      },
      {
        "explanation": "Combine the symbols.",
        "workingOut": "\\text{XCV}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q3a_p17",
    "c": "WN2",
    "t": "Place Value",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "What is the place value of the digit \\(7\\) in the following number:\n\\(72\\)",
    "a": 0,
    "opts": [
      "\\(70\\)",
      "\\(7\\)",
      "\\(700\\)",
      "\\(7000\\)"
    ],
    "h": "Identify the place value column of the digit 7.",
    "s": "In 72, the digit 7 is in the tens position, so its value is 70.",
    "solutionSteps": [
      {
        "explanation": "Identify the position of 7 in 72.",
        "workingOut": "\\text{7 is in the tens column.}",
        "graphData": null
      },
      {
        "explanation": "Calculate the numerical place value.",
        "workingOut": "\\(7 \\times 10 = 70\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q3b_p17",
    "c": "WN2",
    "t": "Place Value",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "What is the place value of the digit \\(7\\) in the following number:\n\\(537\\)",
    "a": 0,
    "opts": [
      "\\(7\\)",
      "\\(70\\)",
      "\\(700\\)",
      "\\(7000\\)"
    ],
    "h": "Identify the place value column of the digit 7.",
    "s": "In 537, the digit 7 is in the units position, so its value is 7.",
    "solutionSteps": [
      {
        "explanation": "Identify the position of 7 in 537.",
        "workingOut": "\\text{7 is in the units column.}",
        "graphData": null
      },
      {
        "explanation": "Calculate the numerical place value.",
        "workingOut": "\\(7 \\times 1 = 7\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q3c_p17",
    "c": "WN2",
    "t": "Place Value",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "What is the place value of the digit \\(7\\) in the following number:\n\\(702\\)",
    "a": 0,
    "opts": [
      "\\(700\\)",
      "\\(70\\)",
      "\\(7\\)",
      "\\(7000\\)"
    ],
    "h": "Identify the place value column of the digit 7.",
    "s": "In 702, the digit 7 is in the hundreds position, so its value is 700.",
    "solutionSteps": [
      {
        "explanation": "Identify the position of 7 in 702.",
        "workingOut": "\\text{7 is in the hundreds column.}",
        "graphData": null
      },
      {
        "explanation": "Calculate the numerical place value.",
        "workingOut": "\\(7 \\times 100 = 700\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q3d_p17",
    "c": "WN2",
    "t": "Place Value",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "What is the place value of the digit \\(7\\) in the following number:\n\\(4\\ 672\\)",
    "a": 0,
    "opts": [
      "\\(70\\)",
      "\\(7\\)",
      "\\(700\\)",
      "\\(7000\\)"
    ],
    "h": "Identify the place value column of the digit 7.",
    "s": "In 4 672, the digit 7 is in the tens position, so its value is 70.",
    "solutionSteps": [
      {
        "explanation": "Identify the position of 7 in 4 672.",
        "workingOut": "\\text{7 is in the tens column.}",
        "graphData": null
      },
      {
        "explanation": "Calculate the numerical place value.",
        "workingOut": "\\(7 \\times 10 = 70\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q4a_p17",
    "c": "WN2",
    "t": "Writing numbers in words",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following number in words:\n\\(683\\)",
    "a": 0,
    "opts": [
      "Six hundred and eighty-three",
      "Six hundred and thirty-eight",
      "Six hundred and eighty",
      "Six hundred and eighty-five"
    ],
    "h": "Identify place values: 6 hundreds, 8 tens, 3 units.",
    "s": "683 consists of 6 hundreds and 83. Written as: Six hundred and eighty-three.",
    "solutionSteps": [
      {
        "explanation": "Identify place values.",
        "workingOut": "600 \\implies \\text{Six hundred}, \\quad 80 \\implies \\text{eighty}, \\quad 3 \\implies \\text{three}",
        "graphData": null
      },
      {
        "explanation": "Combine with 'and'.",
        "workingOut": "\\text{Six hundred and eighty-three}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q4b_p17",
    "c": "WN2",
    "t": "Writing numbers in words",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following number in words:\n\\(4\\ 312\\)",
    "a": 0,
    "opts": [
      "Four thousand, three hundred and twelve",
      "Four thousand, three hundred and twenty",
      "Four thousand, two hundred and twelve",
      "Four thousand, three hundred and two"
    ],
    "h": "Identify place values: 4 thousands, 3 hundreds, 12.",
    "s": "4 312 consists of 4 thousands, 3 hundreds, and 12. Written as: Four thousand, three hundred and twelve.",
    "solutionSteps": [
      {
        "explanation": "Identify place values.",
        "workingOut": "4\\,000 \\implies \\text{Four thousand}, \\quad 300 \\implies \\text{three hundred}, \\quad 12 \\implies \\text{twelve}",
        "graphData": null
      },
      {
        "explanation": "Combine with proper formatting.",
        "workingOut": "\\text{Four thousand, three hundred and twelve}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q4c_p17",
    "c": "WN2",
    "t": "Writing numbers in words",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Write the following number in words:\n\\(5\\ 072\\)",
    "a": 0,
    "opts": [
      "Five thousand and seventy-two",
      "Five thousand and twenty-seven",
      "Five thousand, seven hundred and two",
      "Five thousand and seventy"
    ],
    "h": "Identify place values: 5 thousands, 0 hundreds, 72.",
    "s": "5 072 consists of 5 thousands and 72. Written as: Five thousand and seventy-two.",
    "solutionSteps": [
      {
        "explanation": "Identify place values.",
        "workingOut": "5\\,000 \\implies \\text{Five thousand}, \\quad 72 \\implies \\text{seventy-two}",
        "graphData": null
      },
      {
        "explanation": "Combine with 'and'.",
        "workingOut": "\\text{Five thousand and seventy-two}",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q5a_p17",
    "c": "WN2",
    "t": "Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the expanded expression to find the ordinary numeral:\n\\((5 \\times 100) + (0 \\times 10) + (3 \\times 1)\\)",
    "a": 0,
    "opts": [
      "\\(503\\)",
      "\\(530\\)",
      "\\(53\\)",
      "\\(5003\\)"
    ],
    "h": "Multiply terms in parentheses first.",
    "s": "(5 x 100) = 500. (0 x 10) = 0. (3 x 1) = 3. 500 + 0 + 3 = 503.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the products.",
        "workingOut": "\\(5 \\times 100 = 500\\), \\quad \\(0 \\times 10 = 0\\), \\quad \\(3 \\times 1 = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Sum the components.",
        "workingOut": "\\(500 + 0 + 3 = 503\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q5b_p17",
    "c": "WN2",
    "t": "Expanded Notation",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the expanded expression to find the ordinary numeral:\n\\((7 \\times 1000) + (0 \\times 100) + (8 \\times 10) + (6 \\times 1)\\)",
    "a": 0,
    "opts": [
      "\\(7086\\)",
      "\\(786\\)",
      "\\(7860\\)",
      "\\(70860\\)"
    ],
    "h": "Multiply terms inside parentheses first.",
    "s": "7000 + 0 + 80 + 6 = 7086.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the products.",
        "workingOut": "\\(7000 + 0 + 80 + 6\\)",
        "graphData": null
      },
      {
        "explanation": "Sum the values.",
        "workingOut": "\\(7086\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q6a_p17",
    "c": "WN3",
    "t": "Rounding",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Round off the following number to the nearest hundred:\n\\(749\\)",
    "a": 0,
    "opts": [
      "\\(700\\)",
      "\\(800\\)",
      "\\(750\\)",
      "\\(740\\)"
    ],
    "h": "Look at the tens digit. If it is less than 5, round down.",
    "s": "The tens digit in 749 is 4. Since 4 is less than 5, we round down to 700.",
    "solutionSteps": [
      {
        "explanation": "Identify the tens digit of 749.",
        "workingOut": "\\text{Tens digit} = 4",
        "graphData": null
      },
      {
        "explanation": "Since 4 < 5, round down.",
        "workingOut": "\\(749 \\approx 700\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q6b_p17",
    "c": "WN3",
    "t": "Rounding",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Round off the following number to the nearest hundred:\n\\(751\\)",
    "a": 0,
    "opts": [
      "\\(800\\)",
      "\\(700\\)",
      "\\(750\\)",
      "\\(760\\)"
    ],
    "h": "Look at the tens digit. If it is 5 or more, round up.",
    "s": "The tens digit in 751 is 5. Since it is 5 or more, we round up to 800.",
    "solutionSteps": [
      {
        "explanation": "Identify the tens digit of 751.",
        "workingOut": "\\text{Tens digit} = 5",
        "graphData": null
      },
      {
        "explanation": "Since 5 \\ge 5, round up.",
        "workingOut": "\\(751 \\approx 800\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q6c_p17",
    "c": "WN3",
    "t": "Rounding",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Round off the following number to the nearest hundred:\n\\(750\\)",
    "a": 0,
    "opts": [
      "\\(800\\)",
      "\\(700\\)",
      "\\(750\\)",
      "\\(760\\)"
    ],
    "h": "Look at the tens digit. If it is 5 or more, round up.",
    "s": "The tens digit in 750 is 5. We round up to 800.",
    "solutionSteps": [
      {
        "explanation": "Identify the tens digit.",
        "workingOut": "\\text{Tens digit} = 5",
        "graphData": null
      },
      {
        "explanation": "Since 5 \\ge 5, round up.",
        "workingOut": "\\(750 \\approx 800\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q6d_p17",
    "c": "WN3",
    "t": "Rounding",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Round off the following number to the nearest hundred:\n\\(1\\ 432\\)",
    "a": 0,
    "opts": [
      "\\(1\\ 400\\)",
      "\\(1\\ 500\\)",
      "\\(1\\ 430\\)",
      "\\(1\\ 000\\)"
    ],
    "h": "Look at the tens digit. If it is less than 5, round down.",
    "s": "The tens digit in 1 432 is 3. Since 3 is less than 5, we round down to 1 400.",
    "solutionSteps": [
      {
        "explanation": "Identify the tens digit of 1 432.",
        "workingOut": "\\text{Tens digit} = 3",
        "graphData": null
      },
      {
        "explanation": "Since 3 < 5, round down.",
        "workingOut": "\\(1432 \\approx 1400\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q7a_p17",
    "c": "WN3",
    "t": "Addition",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the sum:\n\\(349 + 62\\)",
    "a": 0,
    "opts": [
      "\\(411\\)",
      "\\(401\\)",
      "\\(412\\)",
      "\\(311\\)"
    ],
    "h": "Add units, tens, and hundreds.",
    "s": "349 + 62 = 411.",
    "solutionSteps": [
      {
        "explanation": "Set up column addition.",
        "workingOut": "\\begin{array}{r@{\\quad}l} 349 \\\\ +\\quad 62 \\\\ \\hline \\end{array}",
        "graphData": null
      },
      {
        "explanation": "Add the units: 9 + 2 = 11 (write 1, carry 1).",
        "workingOut": "\\(9 + 2 = 11\\)",
        "graphData": null
      },
      {
        "explanation": "Add the tens: 4 + 6 + 1 (carry) = 11 (write 1, carry 1).",
        "workingOut": "\\(4 + 6 + 1 = 11\\)",
        "graphData": null
      },
      {
        "explanation": "Add the hundreds: 3 + 1 (carry) = 4.",
        "workingOut": "\\(3 + 1 = 4\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q7b_p17",
    "c": "WN3",
    "t": "Addition",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the sum:\n\\(423 + 54\\)",
    "a": 0,
    "opts": [
      "\\(477\\)",
      "\\(467\\)",
      "\\(478\\)",
      "\\(577\\)"
    ],
    "h": "Perform column addition.",
    "s": "423 + 54 = 477.",
    "solutionSteps": [
      {
        "explanation": "Set up column addition.",
        "workingOut": "\\begin{array}{r@{\\quad}l} 423 \\\\ +\\quad 54 \\\\ \\hline \\end{array}",
        "graphData": null
      },
      {
        "explanation": "Add place values.",
        "workingOut": "\\(3+4=7\\), \\quad \\(2+5=7\\), \\quad \\(4+0=4\\)",
        "graphData": null
      },
      {
        "explanation": "State final sum.",
        "workingOut": "\\(477\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q7c_p17",
    "c": "WN3",
    "t": "Addition",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the sum:\n\\(742 + 339\\)",
    "a": 0,
    "opts": [
      "\\(1\\ 081\\)",
      "\\(1\\ 071\\)",
      "\\(1\\ 082\\)",
      "\\(981\\)"
    ],
    "h": "Set up column addition and carry over values.",
    "s": "742 + 339 = 1081.",
    "solutionSteps": [
      {
        "explanation": "Set up column addition.",
        "workingOut": "\\begin{array}{r@{\\quad}l} 742 \\\\ +\\quad 339 \\\\ \\hline \\end{array}",
        "graphData": null
      },
      {
        "explanation": "Add the units: 2 + 9 = 11 (carry 1).",
        "workingOut": "\\(2 + 9 = 11\\)",
        "graphData": null
      },
      {
        "explanation": "Add the tens: 4 + 3 + 1 = 8.",
        "workingOut": "\\(4 + 3 + 1 = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Add the hundreds: 7 + 3 = 10.",
        "workingOut": "\\(7 + 3 = 10\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q8a_p17",
    "c": "WN3",
    "t": "Subtraction",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the difference:\n\\(79 - 25\\)",
    "a": 0,
    "opts": [
      "\\(54\\)",
      "\\(44\\)",
      "\\(55\\)",
      "\\(53\\)"
    ],
    "h": "Subtract place values.",
    "s": "79 - 25 = 54.",
    "solutionSteps": [
      {
        "explanation": "Subtract the units.",
        "workingOut": "\\(9 - 5 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the tens.",
        "workingOut": "\\(7 - 2 = 5\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q8b_p17",
    "c": "WN3",
    "t": "Subtraction",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the difference:\n\\(74 - 36\\)",
    "a": 0,
    "opts": [
      "\\(38\\)",
      "\\(48\\)",
      "\\(37\\)",
      "\\(42\\)"
    ],
    "h": "Borrow 1 ten to subtract in the units place.",
    "s": "74 - 36 = 38.",
    "solutionSteps": [
      {
        "explanation": "Set up column subtraction and borrow from tens.",
        "workingOut": "\\(14 - 6 = 8\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract remaining tens.",
        "workingOut": "\\(6 - 3 = 3\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q8c_p17",
    "c": "WN3",
    "t": "Subtraction",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the difference:\n\\(327 - 51\\)",
    "a": 0,
    "opts": [
      "\\(276\\)",
      "\\(266\\)",
      "\\(275\\)",
      "\\(286\\)"
    ],
    "h": "Perform column subtraction.",
    "s": "327 - 51 = 276.",
    "solutionSteps": [
      {
        "explanation": "Subtract units.",
        "workingOut": "\\(7 - 1 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract tens by borrowing 1 hundred.",
        "workingOut": "\\(12 - 5 = 7\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract hundreds.",
        "workingOut": "\\(2 - 0 = 2\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q9a_p17",
    "c": "WN3",
    "t": "Multiplication",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the product:\n\\(37 \\times 6\\)",
    "a": 0,
    "opts": [
      "\\(222\\)",
      "\\(212\\)",
      "\\(226\\)",
      "\\(182\\)"
    ],
    "h": "Multiply 7 by 6, then multiply 30 by 6.",
    "s": "37 x 6 = 222.",
    "solutionSteps": [
      {
        "explanation": "Multiply units: 7 x 6 = 42 (carry 4).",
        "workingOut": "\\(7 \\times 6 = 42\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply tens and add carry: (3 x 6) + 4 = 22.",
        "workingOut": "\\((3 \\times 6) + 4 = 22\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q9b_p17",
    "c": "WN3",
    "t": "Multiplication",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the product:\n\\(48 \\times 10\\)",
    "a": 0,
    "opts": [
      "\\(480\\)",
      "\\(4800\\)",
      "\\(408\\)",
      "\\(48\\)"
    ],
    "h": "To multiply by 10, append a zero to the end of the number.",
    "s": "48 x 10 = 480.",
    "solutionSteps": [
      {
        "explanation": "Multiply by 10 by shifting decimal place.",
        "workingOut": "\\(48 \\times 10 = 480\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q9c_p17",
    "c": "WN3",
    "t": "Multiplication",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the product:\n\\(59 \\times 13\\)",
    "a": 0,
    "opts": [
      "\\(767\\)",
      "\\(757\\)",
      "\\(763\\)",
      "\\(667\\)"
    ],
    "h": "Set up long multiplication.",
    "s": "59 x 13 = 767.",
    "solutionSteps": [
      {
        "explanation": "Multiply 59 by 3.",
        "workingOut": "\\(59 \\times 3 = 177\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply 59 by 10.",
        "workingOut": "\\(59 \\times 10 = 590\\)",
        "graphData": null
      },
      {
        "explanation": "Add the two partial products.",
        "workingOut": "\\(177 + 590 = 767\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q10a_p17",
    "c": "WN3",
    "t": "Division",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the quotient:\n\\(51 \\div 3\\)",
    "a": 0,
    "opts": [
      "\\(17\\)",
      "\\(16\\)",
      "\\(18\\)",
      "\\(21\\)"
    ],
    "h": "Use short division.",
    "s": "51 / 3 = 17.",
    "solutionSteps": [
      {
        "explanation": "Divide the tens: 5 / 3 = 1 with remainder 2.",
        "workingOut": "\\(5 \\div 3 = 1 \\text{ r } 2\\)",
        "graphData": null
      },
      {
        "explanation": "Divide the remaining units: 21 / 3 = 7.",
        "workingOut": "\\(21 \\div 3 = 7\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q10b_p17",
    "c": "WN3",
    "t": "Division",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the quotient:\n\\(84 \\div 7\\)",
    "a": 0,
    "opts": [
      "\\(12\\)",
      "\\(11\\)",
      "\\(13\\)",
      "\\(14\\)"
    ],
    "h": "Use standard division tables.",
    "s": "84 / 7 = 12.",
    "solutionSteps": [
      {
        "explanation": "Divide the tens: 8 / 7 = 1 with remainder 1.",
        "workingOut": "\\(8 \\div 7 = 1 \\text{ r } 1\\)",
        "graphData": null
      },
      {
        "explanation": "Divide the remaining units: 14 / 7 = 2.",
        "workingOut": "\\(14 \\div 7 = 2\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q10c_p17",
    "c": "WN3",
    "t": "Division",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Calculate the division including remainder:\n\\(53 \\div 4\\)",
    "a": 0,
    "opts": [
      "\\(13 \\text{ remainder } 1\\)",
      "\\(13 \\text{ remainder } 2\\)",
      "\\(12 \\text{ remainder } 1\\)",
      "\\(14 \\text{ remainder } 1\\)"
    ],
    "h": "Divide 53 by 4 and find the integer quotient and remainder.",
    "s": "53 / 4 = 13 with remainder 1.",
    "solutionSteps": [
      {
        "explanation": "Determine the highest multiple of 4 less than or equal to 53.",
        "workingOut": "\\(4 \\times 13 = 52\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the remainder.",
        "workingOut": "\\(53 - 52 = 1\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q11a_p17",
    "c": "WN3",
    "t": "Order of Operations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the expression:\n\\(8 + 7 \\times 2\\)",
    "a": 0,
    "opts": [
      "\\(22\\)",
      "\\(30\\)",
      "\\(17\\)",
      "\\(24\\)"
    ],
    "h": "Multiply before adding.",
    "s": "7 x 2 = 14. 8 + 14 = 22.",
    "solutionSteps": [
      {
        "explanation": "Perform the multiplication first.",
        "workingOut": "\\(7 \\times 2 = 14\\)",
        "graphData": null
      },
      {
        "explanation": "Add 8 to the product.",
        "workingOut": "\\(8 + 14 = 22\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q11b_p17",
    "c": "WN3",
    "t": "Order of Operations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the expression:\n\\(12 \\div (3 + 1)\\)",
    "a": 0,
    "opts": [
      "\\(3\\)",
      "\\(5\\)",
      "\\(4\\)",
      "\\(2\\)"
    ],
    "h": "Calculate terms inside parentheses first.",
    "s": "(3 + 1) = 4. 12 / 4 = 3.",
    "solutionSteps": [
      {
        "explanation": "Evaluate the addition inside parentheses.",
        "workingOut": "\\(3 + 1 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Divide 12 by the sum.",
        "workingOut": "\\(12 \\div 4 = 3\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q11c_p17",
    "c": "WN3",
    "t": "Order of Operations",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Evaluate the expression:\n\\(10 - 3 \\times 2 + 1\\)",
    "a": 0,
    "opts": [
      "\\(5\\)",
      "\\(15\\)",
      "\\(4\\)",
      "\\(6\\)"
    ],
    "h": "Multiply first, then perform addition and subtraction from left to right.",
    "s": "3 x 2 = 6. 10 - 6 = 4. 4 + 1 = 5.",
    "solutionSteps": [
      {
        "explanation": "Multiply first.",
        "workingOut": "\\(3 \\times 2 = 6\\)",
        "graphData": null
      },
      {
        "explanation": "Perform subtraction.",
        "workingOut": "\\(10 - 6 = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Perform addition.",
        "workingOut": "\\(4 + 1 = 5\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q12a_p17",
    "c": "WN3",
    "t": "Mathematical Terminology",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Find the average of the following numbers:\n\\(3\\), \\(7\\) and \\(8\\)",
    "a": 0,
    "opts": [
      "\\(6\\)",
      "\\(7\\)",
      "\\(8\\)",
      "\\(18\\)"
    ],
    "h": "Add the numbers and divide by 3.",
    "s": "(3 + 7 + 8)/3 = 18/3 = 6.",
    "solutionSteps": [
      {
        "explanation": "Find the sum of the numbers.",
        "workingOut": "\\(3 + 7 + 8 = 18\\)",
        "graphData": null
      },
      {
        "explanation": "Divide the sum by 3.",
        "workingOut": "\\(18 \\div 3 = 6\\)",
        "graphData": null
      }
    ],
    "graphData": null
  },
  {
    "id": "y6-wn-q12b_p17",
    "c": "WN3",
    "t": "Mathematical Terminology",
    "type": "multiple_choice",
    "difficulty": "hard",
    "timeLimit": 120,
    "q": "Find the average of the following numbers:\n\\(4\\), \\(7\\), \\(10\\), \\(13\\) and \\(11\\)",
    "a": 0,
    "opts": [
      "\\(9\\)",
      "\\(10\\)",
      "\\(8\\)",
      "\\(11\\)"
    ],
    "h": "Add the numbers and divide by 5.",
    "s": "(4 + 7 + 10 + 13 + 11)/5 = 45/5 = 9.",
    "solutionSteps": [
      {
        "explanation": "Find the sum of the numbers.",
        "workingOut": "\\(4 + 7 + 10 + 13 + 11 = 45\\)",
        "graphData": null
      },
      {
        "explanation": "Divide the sum by 5.",
        "workingOut": "\\(45 \\div 5 = 9\\)",
        "graphData": null
      }
    ],
    "graphData": null
  }
,
{
  "id": "y6-wn-q1a_p18",
  "c": "WN1",
  "t": "Roman Numerals",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\\\(CLII\\\\)",
  "a": 0,
  "opts": [
    "\\\\(152\\\\)",
    "\\\\(102\\\\)",
    "\\\\(162\\\\)",
    "\\\\(142\\\\)"
  ],
  "h": "Identify the value of each symbol: \\\\(C = 100\\\\), \\\\(L = 50\\\\), and \\\\(II = 2\\\\).",
  "s": "Add the values of the symbols:\n1. \\\\(C = 100\\\\)\n2. \\\\(L = 50\\\\)\n3. \\\\(II = 2\\\\)\n\n\\\\(100 + 50 + 2 = 152\\\\).",
  "solutionSteps": [
    {
      "explanation": "Identify the values of the individual Roman numeral symbols.",
      "workingOut": "\\\\(C = 100,\\\\ L = 50,\\\\ I = 1\\\\)",
      "graphData": null
    },
    {
      "explanation": "Sum the values from left to right as there are no subtractive pairs.",
      "workingOut": "\\\\(CLII = 100 + 50 + 1 + 1 = 152\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q1b_p18",
  "c": "WN1",
  "t": "Roman Numerals",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\\\(CCXXV\\\\)",
  "a": 0,
  "opts": [
    "\\\\(225\\\\)",
    "\\\\(205\\\\)",
    "\\\\(215\\\\)",
    "\\\\(235\\\\)"
  ],
  "h": "Identify the value of each symbol: \\\\(C = 100\\\\), \\\\(X = 10\\\\), and \\\\(V = 5\\\\).",
  "s": "Add the values of the symbols:\n1. \\\\(CC = 100 + 100 = 200\\\\)\n2. \\\\(XX = 10 + 10 = 20\\\\)\n3. \\\\(V = 5\\\\)\n\n\\\\(200 + 20 + 5 = 225\\\\).",
  "solutionSteps": [
    {
      "explanation": "Identify the values of the individual Roman numeral symbols.",
      "workingOut": "\\\\(C = 100,\\\\ X = 10,\\\\ V = 5\\\\)",
      "graphData": null
    },
    {
      "explanation": "Sum the values from left to right.",
      "workingOut": "\\\\(CCXXV = 100 + 100 + 10 + 10 + 5 = 225\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q1c_p18",
  "c": "WN1",
  "t": "Roman Numerals",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\\\(XCIX\\\\)",
  "a": 0,
  "opts": [
    "\\\\(99\\\\)",
    "\\\\(111\\\\)",
    "\\\\(91\\\\)",
    "\\\\(109\\\\)"
  ],
  "h": "Look for subtractive pairs: \\\\(XC\\\\) (10 before 100) and \\\\(IX\\\\) (1 before 10).",
  "s": "Identify subtractive pairs:\n1. \\\\(XC = 100 - 10 = 90\\\\)\n2. \\\\(IX = 10 - 1 = 9\\\\)\n\n\\\\(90 + 9 = 99\\\\).",
  "solutionSteps": [
    {
      "explanation": "Identify the values of the symbols and locate any subtractive pairs where a smaller symbol precedes a larger one.",
      "workingOut": "\\\\(XC = 100 - 10 = 90,\\\\ IX = 10 - 1 = 9\\\\)",
      "graphData": null
    },
    {
      "explanation": "Sum the grouped values.",
      "workingOut": "\\\\(XCIX = 90 + 9 = 99\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q1d_p18",
  "c": "WN1",
  "t": "Roman Numerals",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Write the following Roman numeral in Hindu-Arabic numerals:\n\\\\(DLV\\\\)",
  "a": 0,
  "opts": [
    "\\\\(555\\\\)",
    "\\\\(505\\\\)",
    "\\\\(605\\\\)",
    "\\\\(515\\\\)"
  ],
  "h": "Identify the value of each symbol: \\\\(D = 500\\\\), \\\\(L = 50\\\\), and \\\\(V = 5\\\\).",
  "s": "Add the values of the symbols:\n1. \\\\(D = 500\\\\)\n2. \\\\(L = 50\\\\)\n3. \\\\(V = 5\\\\)\n\n\\\\(500 + 50 + 5 = 555\\\\).",
  "solutionSteps": [
    {
      "explanation": "Identify the values of the individual Roman numeral symbols.",
      "workingOut": "\\\\(D = 500,\\\\ L = 50,\\\\ V = 5\\\\)",
      "graphData": null
    },
    {
      "explanation": "Sum the values from left to right.",
      "workingOut": "\\\\(DLV = 500 + 50 + 5 = 555\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q2a_p18",
  "c": "WN1",
  "t": "Roman Numerals",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Write the following number in Roman numerals:\n\\\\(123\\\\)",
  "a": 0,
  "opts": [
    "\\\\(CXXIII\\\\)",
    "\\\\(CIII\\\\)",
    "\\\\(CXXXIII\\\\)",
    "\\\\(CLXXIII\\\\)"
  ],
  "h": "Break the number down into hundreds, tens, and units: \\\\(123 = 100 + 20 + 3\\\\).",
  "s": "Convert each part:\n1. \\\\(100 = C\\\\)\n2. \\\\(20 = XX\\\\)\n3. \\\\(3 = III\\\\)\n\nCombine: \\\\(CXXIII\\\\).",
  "solutionSteps": [
    {
      "explanation": "Break the number into place values.",
      "workingOut": "\\\\(123 = 100 + 20 + 3\\\\)",
      "graphData": null
    },
    {
      "explanation": "Convert each place value component into Roman numerals.",
      "workingOut": "\\\\(100 = C,\\\\ 20 = XX,\\\\ 3 = III\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine the Roman numeral symbols in order.",
      "workingOut": "\\\\(123 = CXXIII\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q2b_p18",
  "c": "WN1",
  "t": "Roman Numerals",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Write the following number in Roman numerals:\n\\\\(79\\\\)",
  "a": 0,
  "opts": [
    "\\\\(LXXIX\\\\)",
    "\\\\(LXXI\\\\)",
    "\\\\(LXIX\\\\)",
    "\\\\(LXXXIX\\\\)"
  ],
  "h": "Break the number down into tens and units: \\\\(79 = 70 + 9\\\\). Note that \\\\(9\\\\) is written as a subtractive pair \\\\(IX\\\\).",
  "s": "Convert each part:\n1. \\\\(70 = LXX\\\\)\n2. \\\\(9 = IX\\\\)\n\nCombine: \\\\(LXXIX\\\\).",
  "solutionSteps": [
    {
      "explanation": "Break the number into tens and units.",
      "workingOut": "\\\\(79 = 70 + 9\\\\)",
      "graphData": null
    },
    {
      "explanation": "Convert 70 into Roman numerals \\\\(LXX\\\\) (50 + 10 + 10) and 9 into subtractive pair \\\\(IX\\\\) (10 - 1).",
      "workingOut": "\\\\(70 = LXX,\\\\ 9 = IX\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine the components.",
      "workingOut": "\\\\(79 = LXXIX\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q2c_p18",
  "c": "WN1",
  "t": "Roman Numerals",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Write the following number in Roman numerals:\n\\\\(327\\\\)",
  "a": 0,
  "opts": [
    "\\\\(CCCXXVII\\\\)",
    "\\\\(CCXXVII\\\\)",
    "\\\\(CCCXVIII\\\\)",
    "\\\\(CCCXXII\\\\)"
  ],
  "h": "Break \\\\(327\\\\) into place values: \\\\(300 + 20 + 7\\\\).",
  "s": "Convert each part:\n1. \\\\(300 = CCC\\\\)\n2. \\\\(20 = XX\\\\)\n3. \\\\(7 = VII\\\\)\n\nCombine: \\\\(CCCXXVII\\\\).",
  "solutionSteps": [
    {
      "explanation": "Break the number into hundreds, tens, and units.",
      "workingOut": "\\\\(327 = 300 + 20 + 7\\\\)",
      "graphData": null
    },
    {
      "explanation": "Convert each part into Roman numerals.",
      "workingOut": "\\\\(300 = CCC,\\\\ 20 = XX,\\\\ 7 = VII\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine the parts.",
      "workingOut": "\\\\(327 = CCCXXVII\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q2d_p18",
  "c": "WN1",
  "t": "Roman Numerals",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Write the following number in Roman numerals:\n\\\\(530\\\\)",
  "a": 0,
  "opts": [
    "\\\\(DXXX\\\\)",
    "\\\\(DXX\\\\)",
    "\\\\(DLXXX\\\\)",
    "\\\\(CXXX\\\\)"
  ],
  "h": "Break \\\\(530\\\\) into place values: \\\\(500 + 30\\\\).",
  "s": "Convert each part:\n1. \\\\(500 = D\\\\)\n2. \\\\(30 = XXX\\\\)\n\nCombine: \\\\(DXXX\\\\).",
  "solutionSteps": [
    {
      "explanation": "Break the number into place values.",
      "workingOut": "\\\\(530 = 500 + 30\\\\)",
      "graphData": null
    },
    {
      "explanation": "Convert 500 to \\\\(D\\\\) and 30 to \\\\(XXX\\\\).",
      "workingOut": "\\\\(500 = D,\\\\ 30 = XXX\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine the components.",
      "workingOut": "\\\\(530 = DXXX\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q3a_p18",
  "c": "WN2",
  "t": "Place Value",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Determine the place value of the digit \\\\(3\\\\) in the following number:\n\\\\(4307\\\\)",
  "a": 0,
  "opts": [
    "\\\\(300\\\\)",
    "\\\\(3000\\\\)",
    "\\\\(30\\\\)",
    "\\\\(3\\\\)"
  ],
  "h": "Determine the position of the digit \\\\(3\\\\) starting from the right (ones, tens, hundreds, thousands).",
  "s": "In \\\\(4307\\\\), the digit \\\\(3\\\\) is in the hundreds place. Thus, its place value is \\\\(3 \\\\times 100 = 300\\\\).",
  "solutionSteps": [
    {
      "explanation": "Identify the columns for each digit in the number \\\\(4307\\\\).",
      "workingOut": "4 \\\\text{ (thousands)},\\\\ 3 \\\\text{ (hundreds)},\\\\ 0 \\\\text{ (tens)},\\\\ 7 \\\\text{ (ones)}",
      "graphData": null
    },
    {
      "explanation": "Calculate the value of the digit \\\\(3\\\\) in the hundreds place.",
      "workingOut": "\\\\(3 \\\\times 100 = 300\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q3b_p18",
  "c": "WN2",
  "t": "Place Value",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Determine the place value of the digit \\\\(3\\\\) in the following number:\n\\\\(2731\\\\)",
  "a": 0,
  "opts": [
    "\\\\(30\\\\)",
    "\\\\(3\\\\)",
    "\\\\(300\\\\)",
    "\\\\(3000\\\\)"
  ],
  "h": "Identify the position of the digit \\\\(3\\\\) (ones, tens, hundreds, thousands).",
  "s": "In \\\\(2731\\\\), the digit \\\\(3\\\\) is in the tens place. Its place value is \\\\(3 \\\\times 10 = 30\\\\).",
  "solutionSteps": [
    {
      "explanation": "Identify the columns for each digit in the number \\\\(2731\\\\).",
      "workingOut": "2 \\\\text{ (thousands)},\\\\ 7 \\\\text{ (hundreds)},\\\\ 3 \\\\text{ (tens)},\\\\ 1 \\\\text{ (ones)}",
      "graphData": null
    },
    {
      "explanation": "Calculate the value of the digit \\\\(3\\\\) in the tens place.",
      "workingOut": "\\\\(3 \\\\times 10 = 30\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q3c_p18",
  "c": "WN2",
  "t": "Place Value",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Determine the place value of the digit \\\\(3\\\\) in the following number:\n\\\\(3914\\\\)",
  "a": 0,
  "opts": [
    "\\\\(3000\\\\)",
    "\\\\(300\\\\)",
    "\\\\(30\\\\)",
    "\\\\(3\\\\)"
  ],
  "h": "Identify the position of the digit \\\\(3\\\\) (ones, tens, hundreds, thousands).",
  "s": "In \\\\(3914\\\\), the digit \\\\(3\\\\) is in the thousands place. Its place value is \\\\(3 \\\\times 1000 = 3000\\\\).",
  "solutionSteps": [
    {
      "explanation": "Identify the columns for each digit in the number \\\\(3914\\\\).",
      "workingOut": "3 \\\\text{ (thousands)},\\\\ 9 \\\\text{ (hundreds)},\\\\ 1 \\\\text{ (tens)},\\\\ 4 \\\\text{ (ones)}",
      "graphData": null
    },
    {
      "explanation": "Calculate the value of the digit \\\\(3\\\\) in the thousands place.",
      "workingOut": "\\\\(3 \\\\times 1000 = 3000\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q3d_p18",
  "c": "WN2",
  "t": "Place Value",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Determine the place value of the digit \\\\(3\\\\) in the following number:\n\\\\(6743\\\\)",
  "a": 0,
  "opts": [
    "\\\\(3\\\\)",
    "\\\\(30\\\\)",
    "\\\\(300\\\\)",
    "\\\\(3000\\\\)"
  ],
  "h": "Identify the position of the digit \\\\(3\\\\) (ones, tens, hundreds, thousands).",
  "s": "In \\\\(6743\\\\), the digit \\\\(3\\\\) is in the ones place. Its place value is \\\\(3 \\\\times 1 = 3\\\\).",
  "solutionSteps": [
    {
      "explanation": "Identify the columns for each digit in the number \\\\(6743\\\\).",
      "workingOut": "6 \\\\text{ (thousands)},\\\\ 7 \\\\text{ (hundreds)},\\\\ 4 \\\\text{ (tens)},\\\\ 3 \\\\text{ (ones)}",
      "graphData": null
    },
    {
      "explanation": "Calculate the value of the digit \\\\(3\\\\) in the ones place.",
      "workingOut": "\\\\(3 \\\\times 1 = 3\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q4a_p18",
  "c": "WN2",
  "t": "Expanded Notation",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Write the following number in expanded notation:\n\\\\(731\\\\)",
  "a": 0,
  "opts": [
    "\\\\((7 \\\\times 10^2) + (3 \\\\times 10^1) + (1 \\\\times 1)\\\\)",
    "\\\\((7 \\\\times 10^3) + (3 \\\\times 10^2) + (1 \\\\times 10)\\\\)",
    "\\\\((7 \\\\times 100) + (3 \\\\times 100) + (1 \\\\times 1)\\\\)",
    "\\\\((7 \\\\times 10^1) + (3 \\\\times 10^2) + (1 \\\\times 1)\\\\)"
  ],
  "h": "Find the place value of each digit and write the number as their sum: \\\\(731 = 700 + 30 + 1\\\\).",
  "s": "Multiply each digit by its power of 10:\n\\\\(731 = (7 \\\\times 100) + (3 \\\\times 10) + 1 = (7 \\\\times 10^2) + (3 \\\\times 10^1) + (1 \\\\times 1)\\\\).",
  "solutionSteps": [
    {
      "explanation": "Break the number into its place value components.",
      "workingOut": "\\\\(731 = 700 + 30 + 1\\\\)",
      "graphData": null
    },
    {
      "explanation": "Express the place values using powers of 10.",
      "workingOut": "\\\\(700 = 7 \\\\times 10^2,\\\\ 30 = 3 \\\\times 10^1,\\\\ 1 = 1 \\\\times 1\\\\)",
      "graphData": null
    },
    {
      "explanation": "Write the full expression as a sum of these parts.",
      "workingOut": "\\\\((7 \\\\times 10^2) + (3 \\\\times 10^1) + (1 \\\\times 1)\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q4b_p18",
  "c": "WN2",
  "t": "Expanded Notation",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Write the following number in expanded notation:\n\\\\(5713\\\\)",
  "a": 0,
  "opts": [
    "\\\\((5 \\\\times 10^3) + (7 \\\\times 10^2) + (1 \\\\times 10^1) + (3 \\\\times 1)\\\\)",
    "\\\\((5 \\\\times 10^4) + (7 \\\\times 10^3) + (1 \\\\times 10^2) + (3 \\\\times 10)\\\\)",
    "\\\\((5 \\\\times 1000) + (7 \\\\times 10) + (1 \\\\times 10) + 3\\\\)",
    "\\\\((5 \\\\times 10^2) + (7 \\\\times 10^3) + (1 \\\\times 10^1) + (3 \\\\times 1)\\\\)"
  ],
  "h": "Write the number as the sum of its place values: \\\\(5000 + 700 + 10 + 3\\\\).",
  "s": "Express each component using powers of 10:\n\\\\(5000 = 5 \\\\times 10^3\\\\)\n\\\\(700 = 7 \\\\times 10^2\\\\)\n\\\\(10 = 1 \\\\times 10^1\\\\)\n\\\\(3 = 3 \\\\times 1\\\\)\n\nCombine: \\\\((5 \\\\times 10^3) + (7 \\\\times 10^2) + (1 \\\\times 10^1) + (3 \\\\times 1)\\\\).",
  "solutionSteps": [
    {
      "explanation": "Decompose the number into the sum of its place values.",
      "workingOut": "\\\\(5713 = 5000 + 700 + 10 + 3\\\\)",
      "graphData": null
    },
    {
      "explanation": "Represent each place value as a digit multiplied by a power of 10.",
      "workingOut": "\\\\(5000 = 5 \\\\times 10^3,\\\\ 700 = 7 \\\\times 10^2,\\\\ 10 = 1 \\\\times 10^1,\\\\ 3 = 3 \\\\times 1\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine into the final expanded sum.",
      "workingOut": "\\\\((5 \\\\times 10^3) + (7 \\\\times 10^2) + (1 \\\\times 10^1) + (3 \\\\times 1)\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q4c_p18",
  "c": "WN2",
  "t": "Expanded Notation",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Write the following number in expanded notation:\n\\\\(95072\\\\)",
  "a": 0,
  "opts": [
    "\\\\((9 \\\\times 10^4) + (5 \\\\times 10^3) + (7 \\\\times 10^1) + (2 \\\\times 1)\\\\)",
    "\\\\((9 \\\\times 10^4) + (5 \\\\times 10^3) + (0 \\\\times 10^2) + (7 \\\\times 10^2) + (2 \\\\times 1)\\\\)",
    "\\\\((9 \\\\times 10^3) + (5 \\\\times 10^2) + (7 \\\\times 10^1) + (2 \\\\times 1)\\\\)",
    "\\\\((9 \\\\times 10^5) + (5 \\\\times 10^4) + (7 \\\\times 10^2) + (2 \\\\times 10)\\\\)"
  ],
  "h": "Decompose into place values: \\\\(90000 + 5000 + 70 + 2\\\\) (note that the hundreds digit is 0).",
  "s": "Express using powers of 10:\n\\\\(90000 = 9 \\\\times 10^4\\\\)\n\\\\(5000 = 5 \\\\times 10^3\\\\)\n\\\\(70 = 7 \\\\times 10^1\\\\)\n\\\\(2 = 2 \\\\times 1\\\\)\n\nCombine (ignoring the 0 term): \\\\((9 \\\\times 10^4) + (5 \\\\times 10^3) + (7 \\\\times 10^1) + (2 \\\\times 1)\\\\).",
  "solutionSteps": [
    {
      "explanation": "Break the number into its place value components, noting the 0 in the hundreds place.",
      "workingOut": "\\\\(95072 = 90000 + 5000 + 0 + 70 + 2\\\\)",
      "graphData": null
    },
    {
      "explanation": "Represent each non-zero place value as a product with a power of 10.",
      "workingOut": "\\\\(90000 = 9 \\\\times 10^4,\\\\ 5000 = 5 \\\\times 10^3,\\\\ 70 = 7 \\\\times 10^1,\\\\ 2 = 2 \\\\times 1\\\\)",
      "graphData": null
    },
    {
      "explanation": "Sum the components together.",
      "workingOut": "\\\\((9 \\\\times 10^4) + (5 \\\\times 10^3) + (7 \\\\times 10^1) + (2 \\\\times 1)\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q5a_p18",
  "c": "WN3",
  "t": "Addition",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Calculate the sum of the following numbers:\n\\\\(472 + 629 + 254\\\\)",
  "a": 0,
  "opts": [
    "\\\\(1355\\\\)",
    "\\\\(1345\\\\)",
    "\\\\(1255\\\\)",
    "\\\\(1365\\\\)"
  ],
  "h": "Line up the digits by place value and add them column by column from right to left.",
  "s": "Add the numbers:\n\\\\(472 + 629 = 1101\\\\)\n\\\\(1101 + 254 = 1355\\\\).",
  "solutionSteps": [
    {
      "explanation": "Add the ones digits: \\\\(2 + 9 + 4 = 15\\\\). Write down 5 and carry over 1 to the tens column.",
      "workingOut": "\\\\(2 + 9 + 4 = 15\\\\)",
      "graphData": null
    },
    {
      "explanation": "Add the tens digits, including the carryover: \\\\(7 + 2 + 5 + 1 = 15\\\\). Write down 5 and carry over 1 to the hundreds column.",
      "workingOut": "\\\\(7 + 2 + 5 + 1 = 15\\\\)",
      "graphData": null
    },
    {
      "explanation": "Add the hundreds digits, including the carryover: \\\\(4 + 6 + 2 + 1 = 13\\\\). Write down 13.",
      "workingOut": "\\\\(4 + 6 + 2 + 1 = 13\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine the results to get the total sum.",
      "workingOut": "\\\\(472 + 629 + 254 = 1355\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q5b_p18",
  "c": "WN3",
  "t": "Addition",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Calculate the sum of the following numbers:\n\\\\(645 + 438 + 294\\\\)",
  "a": 0,
  "opts": [
    "\\\\(1377\\\\)",
    "\\\\(1367\\\\)",
    "\\\\(1277\\\\)",
    "\\\\(1387\\\\)"
  ],
  "h": "Line up the place values and add from right to left, carrying over when a column sum exceeds 9.",
  "s": "Calculate the sum:\n\\\\(645 + 438 = 1083\\\\)\n\\\\(1083 + 294 = 1377\\\\).",
  "solutionSteps": [
    {
      "explanation": "Add the ones digits: \\\\(5 + 8 + 4 = 17\\\\). Write 7 and carry 1 to the tens column.",
      "workingOut": "\\\\(5 + 8 + 4 = 17\\\\)",
      "graphData": null
    },
    {
      "explanation": "Add the tens digits and the carryover: \\\\(4 + 3 + 9 + 1 = 17\\\\). Write 7 and carry 1 to the hundreds column.",
      "workingOut": "\\\\(4 + 3 + 9 + 1 = 17\\\\)",
      "graphData": null
    },
    {
      "explanation": "Add the hundreds digits and the carryover: \\\\(6 + 4 + 2 + 1 = 13\\\\). Write 13.",
      "workingOut": "\\\\(6 + 4 + 2 + 1 = 13\\\\)",
      "graphData": null
    },
    {
      "explanation": "State the final sum.",
      "workingOut": "\\\\(645 + 438 + 294 = 1377\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q5c_p18",
  "c": "WN3",
  "t": "Addition",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Calculate the sum of the following numbers:\n\\\\(1594 + 685 + 473\\\\)",
  "a": 0,
  "opts": [
    "\\\\(2752\\\\)",
    "\\\\(2652\\\\)",
    "\\\\(2742\\\\)",
    "\\\\(2852\\\\)"
  ],
  "h": "Align the numbers by place values. Add the ones column, then tens, hundreds, and thousands, carrying values as needed.",
  "s": "Add the numbers:\n\\\\(1594 + 685 = 2279\\\\)\n\\\\(2279 + 473 = 2752\\\\).",
  "solutionSteps": [
    {
      "explanation": "Add the ones digits: \\\\(4 + 5 + 3 = 12\\\\). Write 2 and carry 1.",
      "workingOut": "\\\\(4 + 5 + 3 = 12\\\\)",
      "graphData": null
    },
    {
      "explanation": "Add the tens digits with carryover: \\\\(9 + 8 + 7 + 1 = 25\\\\). Write 5 and carry 2.",
      "workingOut": "\\\\(9 + 8 + 7 + 1 = 25\\\\)",
      "graphData": null
    },
    {
      "explanation": "Add the hundreds digits with carryover: \\\\(5 + 6 + 4 + 2 = 17\\\\). Write 7 and carry 1.",
      "workingOut": "\\\\(5 + 6 + 4 + 2 = 17\\\\)",
      "graphData": null
    },
    {
      "explanation": "Add the thousands digit with carryover: \\\\(1 + 1 = 2\\\\). Write 2.",
      "workingOut": "\\\\(1 + 1 = 2\\\\)",
      "graphData": null
    },
    {
      "explanation": "Give the final accumulated sum.",
      "workingOut": "\\\\(1594 + 685 + 473 = 2752\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q6a_p18",
  "c": "WN3",
  "t": "Subtraction",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Find the difference:\n\\\\(73 - 48\\\\)",
  "a": 0,
  "opts": [
    "\\\\(25\\\\)",
    "\\\\(35\\\\)",
    "\\\\(27\\\\)",
    "\\\\(33\\\\)"
  ],
  "h": "Since \\\\(3\\\\) is less than \\\\(8\\\\) in the ones column, borrow \\\\(1\\\\) ten from the tens column.",
  "s": "Borrow from tens column:\n\\\\(13 - 8 = 5\\\\) (ones column)\n\\\\(6 - 4 = 2\\\\) (tens column)\n\n\\\\(73 - 48 = 25\\\\).",
  "solutionSteps": [
    {
      "explanation": "Regroup the numbers: borrow 1 ten from 7 tens (making it 6 tens) to convert 3 ones into 13 ones.",
      "workingOut": "\\\\(73 = 60 + 13\\\\)",
      "graphData": null
    },
    {
      "explanation": "Subtract the ones column: \\\\(13 - 8 = 5\\\\).",
      "workingOut": "\\\\(13 - 8 = 5\\\\)",
      "graphData": null
    },
    {
      "explanation": "Subtract the remaining tens column: \\\\(6 - 4 = 2\\\\).",
      "workingOut": "\\\\(60 - 40 = 20\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine columns to find the final difference.",
      "workingOut": "\\\\(20 + 5 = 25\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q6b_p18",
  "c": "WN3",
  "t": "Subtraction",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Find the difference:\n\\\\(359 - 64\\\\)",
  "a": 0,
  "opts": [
    "\\\\(295\\\\)",
    "\\\\(285\\\\)",
    "\\\\(291\\\\)",
    "\\\\(305\\\\)"
  ],
  "h": "Subtract the ones column first, then borrow from the hundreds column to subtract the tens column.",
  "s": "Subtract: \n1. Ones column: \\\\(9 - 4 = 5\\\\)\n2. Tens column: borrow from hundreds column to get \\\\(15 - 6 = 9\\\\)\n3. Hundreds column: \\\\(2 - 0 = 2\\\\)\n\n\\\\(359 - 64 = 295\\\\).",
  "solutionSteps": [
    {
      "explanation": "Subtract the ones column: \\\\(9 - 4 = 5\\\\).",
      "workingOut": "\\\\(9 - 4 = 5\\\\)",
      "graphData": null
    },
    {
      "explanation": "Regroup the tens: borrow 1 hundred from 3 hundreds (leaving 2) to change 5 tens into 15 tens, then subtract: \\\\(15 - 6 = 9\\\\).",
      "workingOut": "\\\\(15 - 6 = 9\\\\)",
      "graphData": null
    },
    {
      "explanation": "Subtract the hundreds column: \\\\(2 - 0 = 2\\\\).",
      "workingOut": "\\\\(200 - 0 = 200\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine column calculations to write the final result.",
      "workingOut": "\\\\(359 - 64 = 295\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q6c_p18",
  "c": "WN3",
  "t": "Subtraction",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Find the difference:\n\\\\(743 - 358\\\\)",
  "a": 0,
  "opts": [
    "\\\\(385\\\\)",
    "\\\\(395\\\\)",
    "\\\\(375\\\\)",
    "\\\\(383\\\\)"
  ],
  "h": "Borrow from the tens column to subtract the ones, and borrow from the hundreds column to subtract the tens.",
  "s": "Subtract:\n1. Ones column: borrow from tens column to make \\\\(13 - 8 = 5\\\\)\n2. Tens column: borrow from hundreds column to make \\\\(13 - 5 = 8\\\\)\n3. Hundreds column: \\\\(6 - 3 = 3\\\\)\n\n\\\\(743 - 358 = 385\\\\).",
  "solutionSteps": [
    {
      "explanation": "Regroup the tens and ones: borrow 1 ten from 4 tens (leaving 3) to make 3 ones into 13 ones. Subtract ones: \\\\(13 - 8 = 5\\\\).",
      "workingOut": "\\\\(13 - 8 = 5\\\\)",
      "graphData": null
    },
    {
      "explanation": "Regroup the hundreds and tens: borrow 1 hundred from 7 hundreds (leaving 6) to make 3 tens into 13 tens. Subtract tens: \\\\(13 - 5 = 8\\\\).",
      "workingOut": "\\\\(13 - 5 = 8\\\\)",
      "graphData": null
    },
    {
      "explanation": "Subtract the remaining hundreds column: \\\\(6 - 3 = 3\\\\).",
      "workingOut": "\\\\(6 - 3 = 3\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine results to get the total difference.",
      "workingOut": "\\\\(743 - 358 = 385\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q7a_p18",
  "c": "WN3",
  "t": "Multiplication",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Calculate the product:\n\\\\(73 \\\\times 14\\\\)",
  "a": 0,
  "opts": [
    "\\\\(1022\\\\)",
    "\\\\(1012\\\\)",
    "\\\\(922\\\\)",
    "\\\\(1032\\\\)"
  ],
  "h": "Multiply \\\\(73\\\\) by \\\\(4\\\\), then multiply \\\\(73\\\\) by \\\\(10\\\\), and add the results.",
  "s": "Multiply: \n\\\\(73 \\\\times 4 = 292\\\\)\n\\\\(73 \\\\times 10 = 730\\\\)\n\\\\(292 + 730 = 1022\\\\).",
  "solutionSteps": [
    {
      "explanation": "Multiply the units digit of the multiplier: \\\\(73 \\\\times 4\\\\).",
      "workingOut": "\\\\(73 \\\\times 4 = 292\\\\)",
      "graphData": null
    },
    {
      "explanation": "Multiply by the tens digit of the multiplier (adding a trailing zero): \\\\(73 \\\\times 10\\\\).",
      "workingOut": "\\\\(73 \\\\times 10 = 730\\\\)",
      "graphData": null
    },
    {
      "explanation": "Sum the two partial products.",
      "workingOut": "\\\\(292 + 730 = 1022\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q7b_p18",
  "c": "WN3",
  "t": "Multiplication",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Calculate the product:\n\\\\(67 \\\\times 18\\\\)",
  "a": 0,
  "opts": [
    "\\\\(1206\\\\)",
    "\\\\(1216\\\\)",
    "\\\\(1196\\\\)",
    "\\\\(1226\\\\)"
  ],
  "h": "Multiply \\\\(67\\\\) by \\\\(8\\\\) first, then multiply \\\\(67\\\\) by \\\\(10\\\\), and add the two sums.",
  "s": "Multiply:\n\\\\(67 \\\\times 8 = 536\\\\)\n\\\\(67 \\\\times 10 = 670\\\\)\n\\\\(536 + 670 = 1206\\\\).",
  "solutionSteps": [
    {
      "explanation": "Calculate the first partial product: \\\\(67 \\\\times 8\\\\).",
      "workingOut": "\\\\(67 \\\\times 8 = 536\\\\)",
      "graphData": null
    },
    {
      "explanation": "Calculate the second partial product: \\\\(67 \\\\times 10\\\\).",
      "workingOut": "\\\\(67 \\\\times 10 = 670\\\\)",
      "graphData": null
    },
    {
      "explanation": "Add the partial products to find the final result.",
      "workingOut": "\\\\(536 + 670 = 1206\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q7c_p18",
  "c": "WN3",
  "t": "Multiplication",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Calculate the product:\n\\\\(45 \\\\times 23\\\\)",
  "a": 0,
  "opts": [
    "\\\\(1035\\\\)",
    "\\\\(1045\\\\)",
    "\\\\(935\\\\)",
    "\\\\(1025\\\\)"
  ],
  "h": "Multiply \\\\(45\\\\) by \\\\(3\\\\), then multiply \\\\(45\\\\) by \\\\(20\\\\), and add the results.",
  "s": "Multiply:\n\\\\(45 \\\\times 3 = 135\\\\)\n\\\\(45 \\\\times 20 = 900\\\\)\n\\\\(135 + 900 = 1035\\\\).",
  "solutionSteps": [
    {
      "explanation": "Multiply \\\\(45\\\\) by the units value \\\\(3\\\\).",
      "workingOut": "\\\\(45 \\\\times 3 = 135\\\\)",
      "graphData": null
    },
    {
      "explanation": "Multiply \\\\(45\\\\) by the tens value \\\\(20\\\\).",
      "workingOut": "\\\\(45 \\\\times 20 = 900\\\\)",
      "graphData": null
    },
    {
      "explanation": "Sum the two values to get the final product.",
      "workingOut": "\\\\(135 + 900 = 1035\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q8a_p18",
  "c": "WN3",
  "t": "Division",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Find the quotient:\n\\\\(68 \\\\div 4\\\\)",
  "a": 0,
  "opts": [
    "\\\\(17\\\\)",
    "\\\\(16\\\\)",
    "\\\\(18\\\\)",
    "\\\\(15\\\\)"
  ],
  "h": "Divide the tens column first: \\\\(6 \\\\div 4 = 1\\\\) remainder \\\\(2\\\\). Carry over the remainder to make \\\\(28\\\\).",
  "s": "Perform short division:\n1. Tens: \\\\(6 \\\\div 4 = 1\\\\) with remainder \\\\(2\\\\)\n2. Ones: \\\\(28 \\\\div 4 = 7\\\\)\n\n\\\\(68 \\\\div 4 = 17\\\\).",
  "solutionSteps": [
    {
      "explanation": "Divide the tens digit by 4. \\\\(6 \\\\div 4 = 1\\\\) with a remainder of 2.",
      "workingOut": "\\\\(6 \\\\div 4 = 1 \\\\text{ R } 2\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine the remainder 2 (which is 2 tens) with the units digit 8 to get 28, then divide by 4.",
      "workingOut": "\\\\(28 \\\\div 4 = 7\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine the quotient values.",
      "workingOut": "\\\\(68 \\\\div 4 = 17\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q8b_p18",
  "c": "WN3",
  "t": "Division",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Find the quotient:\n\\\\(91 \\\\div 7\\\\)",
  "a": 0,
  "opts": [
    "\\\\(13\\\\)",
    "\\\\(14\\\\)",
    "\\\\(12\\\\)",
    "\\\\(15\\\\)"
  ],
  "h": "Divide the tens digit first: \\\\(9 \\\\div 7 = 1\\\\) remainder \\\\(2\\\\). Carry the remainder to the units column to make \\\\(21\\\\).",
  "s": "Divide:\n1. Tens: \\\\(9 \\\\div 7 = 1\\\\) with remainder \\\\(2\\\\)\n2. Ones: \\\\(21 \\\\div 7 = 3\\\\)\n\n\\\\(91 \\\\div 7 = 13\\\\).",
  "solutionSteps": [
    {
      "explanation": "Divide the tens digit 9 by 7. This goes 1 time with a remainder of 2.",
      "workingOut": "\\\\(9 \\\\div 7 = 1 \\\\text{ R } 2\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine the remainder 2 with the units digit 1 to get 21. Divide 21 by 7.",
      "workingOut": "\\\\(21 \\\\div 7 = 3\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine the values to state the final quotient.",
      "workingOut": "\\\\(91 \\\\div 7 = 13\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q8c_p18",
  "c": "WN3",
  "t": "Division",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Perform the division and find the quotient and remainder:\n\\\\(139 \\\\div 6\\\\)",
  "a": 0,
  "opts": [
    "\\\\(23 \\\\text{ remainder } 1\\\\)",
    "\\\\(23 \\\\text{ remainder } 3\\\\)",
    "\\\\(24 \\\\text{ remainder } 1\\\\)",
    "\\\\(22 \\\\text{ remainder } 5\\\\)"
  ],
  "h": "Divide \\\\(13\\\\) by \\\\(6\\\\) first to get \\\\(2\\\\) remainder \\\\(1\\\\). Carry this over to make \\\\(19\\\\) in the ones place.",
  "s": "Divide:\n1. Hundreds/Tens: \\\\(13 \\\\div 6 = 2\\\\) with remainder \\\\(1\\\\)\n2. Ones: \\\\(19 \\\\div 6 = 3\\\\) with remainder \\\\(1\\\\)\n\n\\\\(139 \\\\div 6 = 23 \\\\text{ remainder } 1\\\\).",
  "solutionSteps": [
    {
      "explanation": "Divide the first two digits 13 by 6. This goes 2 times with a remainder of 1.",
      "workingOut": "\\\\(13 \\\\div 6 = 2 \\\\text{ R } 1\\\\)",
      "graphData": null
    },
    {
      "explanation": "Combine the remainder 1 with the units digit 9 to get 19. Divide 19 by 6.",
      "workingOut": "\\\\(19 \\\\div 6 = 3 \\\\text{ R } 1\\\\)",
      "graphData": null
    },
    {
      "explanation": "State the final quotient and remainder.",
      "workingOut": "\\\\(139 \\\\div 6 = 23 \\\\text{ remainder } 1\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q9a_p18",
  "c": "WN2",
  "t": "Comparing Numbers",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 30,
  "q": "Choose the correct comparison symbol to place in the box:\n\\\\(7 \\\\quad \\\\square \\\\quad 6\\\\)",
  "a": 0,
  "opts": [
    "\\\\(>\\\\)",
    "\\\\(<\\\\)",
    "\\\\(=\\\\)",
    "\\\\(\\le\\\\)"
  ],
  "h": "Recall the meaning of the symbols: \\\\(>\\\\) means greater than, \\\\(<\\\\) means less than, and \\\\(=\\\\) means equal to.",
  "s": "Since \\\\(7\\\\) is larger than \\\\(6\\\\), the correct symbol is \\\\(>\\\\).",
  "solutionSteps": [
    {
      "explanation": "Compare the values of the two numbers on the number line.",
      "workingOut": "\\\\(7 > 6\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q9b_p18",
  "c": "WN2",
  "t": "Comparing Numbers",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Choose the correct comparison symbol to place in the box:\n\\\\(5^2 \\\\quad \\\\square \\\\quad 25\\\\)",
  "a": 0,
  "opts": [
    "\\\\(=\\\\)",
    "\\\\(>\\\\)",
    "\\\\(<\\\\)",
    "\\\\(\\ne\\\\)"
  ],
  "h": "First evaluate the exponent: \\\\(5^2 = 5 \\\\times 5\\\\).",
  "s": "Evaluate and compare:\n\\\\(5^2 = 5 \\\\times 5 = 25\\\\)\nSince \\\\(25 = 25\\\\), the correct symbol is \\\\(=\\\\).",
  "solutionSteps": [
    {
      "explanation": "Evaluate the exponential term on the left side.",
      "workingOut": "\\\\(5^2 = 5 \\\\times 5 = 25\\\\)",
      "graphData": null
    },
    {
      "explanation": "Compare the evaluated left side with the right side.",
      "workingOut": "\\\\(25 = 25\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q9c_p18",
  "c": "WN2",
  "t": "Comparing Numbers",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 30,
  "q": "Choose the correct comparison symbol to place in the box:\n\\\\(3 \\\\quad \\\\square \\\\quad 10\\\\)",
  "a": 0,
  "opts": [
    "\\\\(<\\\\)",
    "\\\\(>\\\\)",
    "\\\\(=\\\\)",
    "\\\\(\\ge\\\\)"
  ],
  "h": "Compare the relative size of \\\\(3\\\\) and \\\\(10\\\\).",
  "s": "Since \\\\(3\\\\) is smaller than \\\\(10\\\\), the correct symbol is \\\\(<\\\\).",
  "solutionSteps": [
    {
      "explanation": "Compare the values of the two numbers.",
      "workingOut": "\\\\(3 < 10\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q10a_p18",
  "c": "WN3",
  "t": "Mathematical Terminology",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Calculate the value based on the terminology:\nFind the product of \\\\(8\\\\) and \\\\(9\\\\).",
  "a": 0,
  "opts": [
    "\\\\(72\\\\)",
    "\\\\(17\\\\)",
    "\\\\(89\\\\)",
    "\\\\(73\\\\)"
  ],
  "h": "The term 'product' means the result of multiplying the two numbers.",
  "s": "Multiply: \\\\(8 \\\\times 9 = 72\\\\).",
  "solutionSteps": [
    {
      "explanation": "Recall that 'product' refers to multiplication.",
      "workingOut": "\\\\(\\text{Product} = 8 \\\\times 9\\\\)",
      "graphData": null
    },
    {
      "explanation": "Perform the multiplication.",
      "workingOut": "\\\\(8 \\\\times 9 = 72\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q10b_p18",
  "c": "WN3",
  "t": "Mathematical Terminology",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Calculate the value based on the terminology:\nFind the sum of \\\\(36\\\\) and \\\\(47\\\\).",
  "a": 0,
  "opts": [
    "\\\\(83\\\\)",
    "\\\\(73\\\\)",
    "\\\\(81\\\\)",
    "\\\\(11\\\\)"
  ],
  "h": "The term 'sum' means the result of adding the two numbers.",
  "s": "Add: \\\\(36 + 47 = 83\\\\).",
  "solutionSteps": [
    {
      "explanation": "Recall that 'sum' refers to addition.",
      "workingOut": "\\\\(\\text{Sum} = 36 + 47\\\\)",
      "graphData": null
    },
    {
      "explanation": "Perform the addition.",
      "workingOut": "\\\\(36 + 47 = 83\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q10c_p18",
  "c": "WN3",
  "t": "Mathematical Terminology",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Calculate the value based on the terminology:\nFind the quotient of \\\\(45\\\\) and \\\\(9\\\\).",
  "a": 0,
  "opts": [
    "\\\\(5\\\\)",
    "\\\\(405\\\\)",
    "\\\\(36\\\\)",
    "\\\\(54\\\\)"
  ],
  "h": "The term 'quotient' means the result of dividing the first number by the second.",
  "s": "Divide: \\\\(45 \\\\div 9 = 5\\\\).",
  "solutionSteps": [
    {
      "explanation": "Recall that 'quotient' refers to division.",
      "workingOut": "\\\\(\\text{Quotient} = 45 \\\\div 9\\\\)",
      "graphData": null
    },
    {
      "explanation": "Perform the division.",
      "workingOut": "\\\\(45 \\\\div 9 = 5\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q10d_p18",
  "c": "WN3",
  "t": "Mathematical Terminology",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Calculate the value based on the terminology:\nFind the difference between \\\\(73\\\\) and \\\\(14\\\\).",
  "a": 0,
  "opts": [
    "\\\\(59\\\\)",
    "\\\\(87\\\\)",
    "\\\\(69\\\\)",
    "\\\\(49\\\\)"
  ],
  "h": "The term 'difference' means subtracting the smaller number from the larger number.",
  "s": "Subtract: \\\\(73 - 14 = 59\\\\).",
  "solutionSteps": [
    {
      "explanation": "Recall that 'difference' refers to subtraction.",
      "workingOut": "\\\\(\\text{Difference} = 73 - 14\\\\)",
      "graphData": null
    },
    {
      "explanation": "Perform the subtraction.",
      "workingOut": "\\\\(73 - 14 = 59\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q10e_p18",
  "c": "WN3",
  "t": "Mathematical Terminology",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Calculate the value based on the terminology:\nEvaluate \\\\(9\\\\) squared.",
  "a": 0,
  "opts": [
    "\\\\(81\\\\)",
    "\\\\(18\\\\)",
    "\\\\(27\\\\)",
    "\\\\(90\\\\)"
  ],
  "h": "A number 'squared' is multiplied by itself: \\\\(9 \\\\times 9\\\\).",
  "s": "Multiply: \\\\(9 \\\\times 9 = 81\\\\).",
  "solutionSteps": [
    {
      "explanation": "Express the squaring operation.",
      "workingOut": "\\\\(9^2 = 9 \\\\times 9\\\\)",
      "graphData": null
    },
    {
      "explanation": "Calculate the product.",
      "workingOut": "\\\\(9 \\\\times 9 = 81\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q10f_p18",
  "c": "WN3",
  "t": "Mathematical Terminology",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Calculate the value based on the terminology:\nEvaluate \\\\(2\\\\) cubed.",
  "a": 0,
  "opts": [
    "\\\\(8\\\\)",
    "\\\\(6\\\\)",
    "\\\\(16\\\\)",
    "\\\\(4\\\\)"
  ],
  "h": "A number 'cubed' is multiplied by itself three times: \\\\(2 \\\\times 2 \\\\times 2\\\\).",
  "s": "Multiply: \\\\(2 \\\\times 2 \\\\times 2 = 8\\\\).",
  "solutionSteps": [
    {
      "explanation": "Express the cubing operation.",
      "workingOut": "\\\\(2^3 = 2 \\\\times 2 \\\\times 2\\\\)",
      "graphData": null
    },
    {
      "explanation": "Calculate the product.",
      "workingOut": "\\\\(2 \\\\times 2 \\\\times 2 = 8\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q10g_p18",
  "c": "WN3",
  "t": "Mathematical Terminology",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Calculate the value:\n\\\\(7^2\\\\)",
  "a": 0,
  "opts": [
    "\\\\(49\\\\)",
    "\\\\(14\\\\)",
    "\\\\(21\\\\)",
    "\\\\(35\\\\)"
  ],
  "h": "The notation \\\\(7^2\\\\) represents \\\\(7\\\\) raised to the power of 2, which means \\\\(7 \\\\times 7\\\\).",
  "s": "Multiply: \\\\(7 \\\\times 7 = 49\\\\).",
  "solutionSteps": [
    {
      "explanation": "Express the exponentiation as repeated multiplication.",
      "workingOut": "\\\\(7^2 = 7 \\\\times 7\\\\)",
      "graphData": null
    },
    {
      "explanation": "Calculate the product.",
      "workingOut": "\\\\(7 \\\\times 7 = 49\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q11a_p18",
  "c": "WN3",
  "t": "Exponential Notation",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Write the following repeated multiplication expression in exponential notation:\n\\\\(7 \\\\times 7 \\\\times 7\\\\)",
  "a": 0,
  "opts": [
    "\\\\(7^3\\\\)",
    "\\\\(7^2\\\\)",
    "\\\\(3^7\\\\)",
    "\\\\(7 \\\\times 3\\\\)"
  ],
  "h": "Count how many times \\\\(7\\\\) is multiplied by itself. This count is the exponent (power).",
  "s": "Since \\\\(7\\\\) is multiplied by itself 3 times, it is written as \\\\(7^3\\\\).",
  "solutionSteps": [
    {
      "explanation": "Identify the base and count the number of factors.",
      "workingOut": "\\\\(\\text{Base} = 7,\\\\ \\text{Count of factors} = 3\\\\)",
      "graphData": null
    },
    {
      "explanation": "Write the expression with the base raised to the power of the count.",
      "workingOut": "\\\\(7^3\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q11b_p18",
  "c": "WN3",
  "t": "Exponential Notation",
  "type": "multiple_choice",
  "difficulty": "easy",
  "timeLimit": 60,
  "q": "Write the following repeated multiplication expression in exponential notation:\n\\\\(4 \\\\times 4 \\\\times 4 \\\\times 4 \\\\times 4\\\\)",
  "a": 0,
  "opts": [
    "\\\\(4^5\\\\)",
    "\\\\(4^4\\\\)",
    "\\\\(5^4\\\\)",
    "\\\\(4 \\\\times 5\\\\)"
  ],
  "h": "Count the number of times \\\\(4\\\\) is multiplied by itself.",
  "s": "Since \\\\(4\\\\) is multiplied by itself 5 times, it is written as \\\\(4^5\\\\).",
  "solutionSteps": [
    {
      "explanation": "Identify the base and count the number of factors.",
      "workingOut": "\\\\(\\text{Base} = 4,\\\\ \\text{Count of factors} = 5\\\\)",
      "graphData": null
    },
    {
      "explanation": "Write the base raised to the power of the factor count.",
      "workingOut": "\\\\(4^5\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
},
{
  "id": "y6-wn-q11c_p18",
  "c": "WN3",
  "t": "Exponential Notation",
  "type": "multiple_choice",
  "difficulty": "medium",
  "timeLimit": 90,
  "q": "Write the equation \\\\(5000 = 5 \\\\times 1000\\\\) in exponential notation.",
  "a": 0,
  "opts": [
    "\\\\(5 \\\\times 10^3\\\\)",
    "\\\\(5 \\\\times 10^2\\\\)",
    "\\\\(50^3\\\\)",
    "\\\\(5 \\\\times 10^4\\\\)"
  ],
  "h": "Convert the value \\\\(1000\\\\) to a power of 10. Check the number of zeros in \\\\(1000\\\\).",
  "s": "Calculate the exponential form:\n\\\\(1000 = 10 \\\\times 10 \\\\times 10 = 10^3\\\\)\nTherefore, \\\\(5 \\\\times 1000 = 5 \\\\times 10^3\\\\).",
  "solutionSteps": [
    {
      "explanation": "Express the value 1000 as a power of 10.",
      "workingOut": "\\\\(1000 = 10^3\\\\)",
      "graphData": null
    },
    {
      "explanation": "Substitute \\\\(10^3\\\\) back into the product expression.",
      "workingOut": "\\\\(5 \\\\times 10^3\\\\)",
      "graphData": null
    }
  ],
  "graphData": null
}
];
