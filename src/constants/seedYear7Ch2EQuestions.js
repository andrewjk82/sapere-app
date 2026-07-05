export const Y7_CH2E_QUESTIONS = [
  // ── QUESTION 1a ──
  {
    id: "y7-2e-q1a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally by doubling and halving or using factors:\n\\( 15 \\times 14 \\)",
    opts: [
      { text: "\\(190\\)", imageUrl: "" },
      { text: "\\(210\\)", imageUrl: "" },
      { text: "\\(225\\)", imageUrl: "" },
      { text: "\\(150\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Factorise 14 into 2 * 7, then multiply 15 by 2 first to get a neat multiple of 10.",
    solution: "We can mentally compute this by splitting 14 into factors: \\(15 \\times 14 = 15 \\times 2 \\times 7\\). Since \\(15 \\times 2 = 30\\), the problem simplifies to: \\(30 \\times 7 = 210\\).",
    solutionSteps: [
      {
        explanation: "Factorise the number 14 into smaller numbers (2 and 7).",
        workingOut: "15 \\times 14 = 15 \\times 2 \\times 7",
        graphData: null
      },
      {
        explanation: "Multiply 15 by 2 first to make a round number.",
        workingOut: "15 \\times 2 = 30",
        graphData: null
      },
      {
        explanation: "Multiply the result by the remaining factor 7.",
        workingOut: "30 \\times 7 = 210",
        graphData: null
      }
    ]
  },

  // ── QUESTION 1b ──
  {
    id: "y7-2e-q1b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 5 \\times 16 \\)",
    opts: [
      { text: "\\(80\\)", imageUrl: "" },
      { text: "\\(90\\)", imageUrl: "" },
      { text: "\\(75\\)", imageUrl: "" },
      { text: "\\(60\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Halve 16 and double 5 to make the multiplication simple.",
    solution: "Use the doubling and halving mental strategy: double 5 to get 10, and halve 16 to get 8. The calculation becomes: \\( (5 \\times 2) \\times (16 \\div 2) = 10 \\times 8 = 80\\).",
    solutionSteps: [
      {
        explanation: "Apply the doubling and halving strategy. Double 5 and halve 16.",
        workingOut: "\\text{Double } 5 = 10, \\quad \\text{Halve } 16 = 8",
        graphData: null
      },
      {
        explanation: "Multiply the simplified numbers.",
        workingOut: "10 \\times 8 = 80",
        graphData: null
      }
    ]
  },

  // ── QUESTION 1e ──
  {
    id: "y7-2e-q1e",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 15 \\times 24 \\)",
    opts: [
      { text: "\\(300\\)", imageUrl: "" },
      { text: "\\(330\\)", imageUrl: "" },
      { text: "\\(360\\)", imageUrl: "" },
      { text: "\\(390\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Double 15 to get 30, and halve 24 to get 12.",
    solution: "Using the doubling and halving strategy: double 15 to get 30, and halve 24 to get 12. This simplifies the multiplication to: \\(30 \\times 12 = 360\\).",
    solutionSteps: [
      {
        explanation: "Double 15 and halve 24 to create a multiple of 10.",
        workingOut: "\\text{Double } 15 = 30, \\quad \\text{Halve } 24 = 12",
        graphData: null
      },
      {
        explanation: "Multiply the new terms.",
        workingOut: "30 \\times 12 = 360",
        graphData: null
      }
    ]
  },

  // ── QUESTION 1f ──
  {
    id: "y7-2e-q1f",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 15 \\times 36 \\)",
    opts: [
      { text: "\\(450\\)", imageUrl: "" },
      { text: "\\(540\\)", imageUrl: "" },
      { text: "\\(480\\)", imageUrl: "" },
      { text: "\\(510\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Double 15 to get 30, and halve 36 to get 18.",
    solution: "Using doubling and halving: double 15 to get 30, and halve 36 to get 18. The expression becomes: \\(30 \\times 18 = 540\\).",
    solutionSteps: [
      {
        explanation: "Double 15 to make it 30, and halve 36 to make it 18.",
        workingOut: "\\text{Double } 15 = 30, \\quad \\text{Halve } 36 = 18",
        graphData: null
      },
      {
        explanation: "Perform the final multiplication.",
        workingOut: "30 \\times 18 = 540",
        graphData: null
      }
    ]
  },

  // ── QUESTION 2a ──
  {
    id: "y7-2e-q2a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally by doubling twice:\n\\( 24 \\times 4 \\)",
    opts: [
      { text: "\\(96\\)", imageUrl: "" },
      { text: "\\(88\\)", imageUrl: "" },
      { text: "\\(92\\)", imageUrl: "" },
      { text: "\\(104\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "To multiply by 4, double the number (24), then double that result again.",
    solution: "Multiplying by 4 is the same as doubling twice:\n- First double: \\(24 \\times 2 = 48\\).\n- Second double: \\(48 \\times 2 = 96\\).",
    solutionSteps: [
      {
        explanation: "Double 24 the first time.",
        workingOut: "24 \\times 2 = 48",
        graphData: null
      },
      {
        explanation: "Double 48 the second time to complete multiplying by 4.",
        workingOut: "48 \\times 2 = 96",
        graphData: null
      }
    ]
  },

  // ── QUESTION 2b ──
  {
    id: "y7-2e-q2b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally by doubling twice:\n\\( 112 \\times 4 \\)",
    opts: [
      { text: "\\(424\\)", imageUrl: "" },
      { text: "\\(448\\)", imageUrl: "" },
      { text: "\\(456\\)", imageUrl: "" },
      { text: "\\(438\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Double 112 once, then double the result to finish multiplying by 4.",
    solution: "Multiplying by 4 is equivalent to doubling twice:\n- First double: \\(112 \\times 2 = 224\\).\n- Second double: \\(224 \\times 2 = 448\\).",
    solutionSteps: [
      {
        explanation: "Double 112 the first time.",
        workingOut: "112 \\times 2 = 224",
        graphData: null
      },
      {
        explanation: "Double 224 the second time.",
        workingOut: "224 \\times 2 = 448",
        graphData: null
      }
    ]
  },

  // ── QUESTION 2d ──
  {
    id: "y7-2e-q2d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally by doubling three times:\n\\( 42 \\times 8 \\)",
    opts: [
      { text: "\\(326\\)", imageUrl: "" },
      { text: "\\(336\\)", imageUrl: "" },
      { text: "\\(346\\)", imageUrl: "" },
      { text: "\\(316\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "To multiply by 8, double the number three times: first double gives 84, second double gives 168...",
    solution: "Multiplying by 8 is the same as doubling three times:\n- First double: \\(42 \\times 2 = 84\\).\n- Second double: \\(84 \\times 2 = 168\\).\n- Third double: \\(168 \\times 2 = 336\\).",
    solutionSteps: [
      {
        explanation: "Double 42 the first time (equivalent to multiplying by 2).",
        workingOut: "42 \\times 2 = 84",
        graphData: null
      },
      {
        explanation: "Double 84 the second time (equivalent to multiplying by 4).",
        workingOut: "84 \\times 2 = 168",
        graphData: null
      },
      {
        explanation: "Double 168 the third time (equivalent to multiplying by 8).",
        workingOut: "168 \\times 2 = 336",
        graphData: null
      }
    ]
  },

  // ── QUESTION 2f ──
  {
    id: "y7-2e-q2f",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 504 \\times 8 \\)",
    opts: [
      { text: "\\(4032\\)", imageUrl: "" },
      { text: "\\(4024\\)", imageUrl: "" },
      { text: "\\(4008\\)", imageUrl: "" },
      { text: "\\(4040\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Separate 504 into 500 + 4, then multiply both parts by 8 and add them.",
    solution: "Partition the calculation into simpler parts: \\( (500 + 4) \\times 8 = (500 \\times 8) + (4 \\times 8) = 4000 + 32 = 4032\\).",
    solutionSteps: [
      {
        explanation: "Partition 504 into a sum of 500 and 4.",
        workingOut: "(500 + 4) \\times 8",
        graphData: null
      },
      {
        explanation: "Distribute the multiplication by 8 to both terms.",
        workingOut: "(500 \\times 8) + (4 \\times 8) = 4000 + 32",
        graphData: null
      },
      {
        explanation: "Add the two products.",
        workingOut: "4000 + 32 = 4032",
        graphData: null
      }
    ]
  },

  // ── QUESTION 3a ──
  {
    id: "y7-2e-q3a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 125 \\times 6 \\)",
    opts: [
      { text: "\\(700\\)", imageUrl: "" },
      { text: "\\(720\\)", imageUrl: "" },
      { text: "\\(750\\)", imageUrl: "" },
      { text: "\\(800\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Double 125 to get 250, and halve 6 to get 3.",
    solution: "Use the doubling and halving strategy: double 125 to get 250, and halve 6 to get 3. The calculation becomes: \\( (125 \\times 2) \\times (6 \\div 2) = 250 \\times 3 = 750\\).",
    solutionSteps: [
      {
        explanation: "Apply doubling and halving. Double 125 and halve 6.",
        workingOut: "\\text{Double } 125 = 250, \\quad \\text{Halve } 6 = 3",
        graphData: null
      },
      {
        explanation: "Multiply the simplified values.",
        workingOut: "250 \\times 3 = 750",
        graphData: null
      }
    ]
  },

  // ── QUESTION 3b ──
  {
    id: "y7-2e-q3b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 19 \\times 6 \\)",
    opts: [
      { text: "\\(104\\)", imageUrl: "" },
      { text: "\\(114\\)", imageUrl: "" },
      { text: "\\(120\\)", imageUrl: "" },
      { text: "\\(116\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Think of 19 as 20 - 1. Multiply 20 by 6, then subtract 6.",
    solution: "Use rounding and adjusting: write 19 as \\((20 - 1)\\). Multiply both by 6: \\( (20 - 1) \\times 6 = (20 \\times 6) - (1 \\times 6) = 120 - 6 = 114\\).",
    solutionSteps: [
      {
        explanation: "Rewrite 19 as \\(20 - 1\\).",
        workingOut: "(20 - 1) \\times 6",
        graphData: null
      },
      {
        explanation: "Distribute the multiplication by 6.",
        workingOut: "(20 \\times 6) - (1 \\times 6) = 120 - 6",
        graphData: null
      },
      {
        explanation: "Calculate the final difference.",
        workingOut: "120 - 6 = 114",
        graphData: null
      }
    ]
  },

  // ── QUESTION 3d ──
  {
    id: "y7-2e-q3d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 25 \\times 24 \\)",
    opts: [
      { text: "\\(550\\)", imageUrl: "" },
      { text: "\\(500\\)", imageUrl: "" },
      { text: "\\(600\\)", imageUrl: "" },
      { text: "\\(650\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Multiply 25 by 4 to get a round 100, and divide 24 by 4 to get 6.",
    solution: "Double 25 twice (which is multiplying by 4) to get 100, and halve 24 twice (which is dividing by 4) to get 6. The product becomes: \\(100 \\times 6 = 600\\).",
    solutionSteps: [
      {
        explanation: "Scale the factors: multiply 25 by 4 and divide 24 by 4.",
        workingOut: "(25 \\times 4) \\times (24 \\div 4)",
        graphData: null
      },
      {
        explanation: "Perform the simplified calculation.",
        workingOut: "100 \\times 6 = 600",
        graphData: null
      }
    ]
  },

  // ── QUESTION 3f ──
  {
    id: "y7-2e-q3f",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 32 \\times 32 \\)",
    opts: [
      { text: "\\(1024\\)", imageUrl: "" },
      { text: "\\(964\\)", imageUrl: "" },
      { text: "\\(1064\\)", imageUrl: "" },
      { text: "\\(992\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Partition 32 into 30 + 2. Multiply 32 by 30 and 32 by 2, then add the results.",
    solution: "Using the distributive law: \\( 32 \\times 32 = 32 \\times (30 + 2) = (32 \\times 30) + (32 \\times 2) = 960 + 64 = 1024\\).",
    solutionSteps: [
      {
        explanation: "Partition one of the 32 factors into 30 + 2.",
        workingOut: "32 \\times (30 + 2)",
        graphData: null
      },
      {
        explanation: "Distribute the multiplication.",
        workingOut: "(32 \\times 30) + (32 \\times 2)",
        graphData: null
      },
      {
        explanation: "Calculate the products and add them together.",
        workingOut: "960 + 64 = 1024",
        graphData: null
      }
    ]
  },

  // ── QUESTION 3h ──
  {
    id: "y7-2e-q3h",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 37 \\times 8 \\)",
    opts: [
      { text: "\\(286\\)", imageUrl: "" },
      { text: "\\(296\\)", imageUrl: "" },
      { text: "\\(306\\)", imageUrl: "" },
      { text: "\\(276\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Double 37 three times: first double is 74, second double is 148...",
    solution: "Multiplying by 8 is the same as doubling three times:\n- First double: \\(37 \\times 2 = 74\\).\n- Second double: \\(74 \\times 2 = 148\\).\n- Third double: \\(148 \\times 2 = 296\\).",
    solutionSteps: [
      {
        explanation: "Double 37 once.",
        workingOut: "37 \\times 2 = 74",
        graphData: null
      },
      {
        explanation: "Double 74.",
        workingOut: "74 \\times 2 = 148",
        graphData: null
      },
      {
        explanation: "Double 148.",
        workingOut: "148 \\times 2 = 296",
        graphData: null
      }
    ]
  },

  // ── QUESTION 4a ──
  {
    id: "y7-2e-q4a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 62 \\times 11 \\)",
    opts: [
      { text: "\\(620\\)", imageUrl: "" },
      { text: "\\(662\\)", imageUrl: "" },
      { text: "\\(682\\)", imageUrl: "" },
      { text: "\\(702\\)", imageUrl: "" }
    ],
    answer: 2,
    hint: "Think of 11 as 10 + 1. Multiply 62 by 10, then add 62.",
    solution: "Use the distributive law by splitting 11 into \\((10 + 1)\\): \\( 62 \\times (10 + 1) = (62 \\times 10) + (62 \\times 1) = 620 + 62 = 682\\).",
    solutionSteps: [
      {
        explanation: "Express 11 as \\(10 + 1\\).",
        workingOut: "62 \\times (10 + 1)",
        graphData: null
      },
      {
        explanation: "Distribute the multiplication.",
        workingOut: "(62 \\times 10) + (62 \\times 1) = 620 + 62",
        graphData: null
      },
      {
        explanation: "Add the results.",
        workingOut: "620 + 62 = 682",
        graphData: null
      }
    ]
  },

  // ── QUESTION 4b ──
  {
    id: "y7-2e-q4b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 48 \\times 11 \\)",
    opts: [
      { text: "\\(528\\)", imageUrl: "" },
      { text: "\\(480\\)", imageUrl: "" },
      { text: "\\(518\\)", imageUrl: "" },
      { text: "\\(538\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Think of 11 as 10 + 1. Multiply 48 by 10 and add 48.",
    solution: "Use the distributive law: \\( 48 \\times 11 = 48 \\times (10 + 1) = (48 \\times 10) + 48 = 480 + 48 = 528\\).",
    solutionSteps: [
      {
        explanation: "Split 11 into 10 and 1.",
        workingOut: "48 \\times (10 + 1)",
        graphData: null
      },
      {
        explanation: "Add 480 and 48.",
        workingOut: "480 + 48 = 528",
        graphData: null
      }
    ]
  },

  // ── QUESTION 4d ──
  {
    id: "y7-2e-q4d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 87 \\times 9 \\)",
    opts: [
      { text: "\\(870\\)", imageUrl: "" },
      { text: "\\(783\\)", imageUrl: "" },
      { text: "\\(793\\)", imageUrl: "" },
      { text: "\\(773\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Think of 9 as 10 - 1. Multiply 87 by 10, then subtract 87.",
    solution: "Using rounding and adjusting: \\( 87 \\times 9 = 87 \\times (10 - 1) = (87 \\times 10) - (87 \\times 1) = 870 - 87 = 783\\).",
    solutionSteps: [
      {
        explanation: "Rewrite 9 as \\(10 - 1\\).",
        workingOut: "87 \\times (10 - 1)",
        graphData: null
      },
      {
        explanation: "Distribute the multiplication and compute the terms.",
        workingOut: "870 - 87",
        graphData: null
      },
      {
        explanation: "Perform the subtraction.",
        workingOut: "870 - 87 = 783",
        graphData: null
      }
    ]
  },

  // ── QUESTION 4e ──
  {
    id: "y7-2e-q4e",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 421 \\times 9 \\)",
    opts: [
      { text: "\\(3789\\)", imageUrl: "" },
      { text: "\\(4210\\)", imageUrl: "" },
      { text: "\\(3799\\)", imageUrl: "" },
      { text: "\\(3779\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Think of 9 as 10 - 1. Multiply 421 by 10, then subtract 421.",
    solution: "Use rounding and adjusting: \\( 421 \\times 9 = 421 \\times (10 - 1) = 4210 - 421 = 3789\\).",
    solutionSteps: [
      {
        explanation: "Rewrite the problem using \\(10 - 1\\) instead of 9.",
        workingOut: "421 \\times (10 - 1)",
        graphData: null
      },
      {
        explanation: "Subtract 421 from 4210.",
        workingOut: "4210 - 421 = 3789",
        graphData: null
      }
    ]
  },

  // ── QUESTION 5a ──
  {
    id: "y7-2e-q5a",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 430 \\div 5 \\)",
    opts: [
      { text: "\\(85\\)", imageUrl: "" },
      { text: "\\(86\\)", imageUrl: "" },
      { text: "\\(96\\)", imageUrl: "" },
      { text: "\\(84\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "To divide by 5, double the number (430) and then divide that result by 10.",
    solution: "A helpful mental strategy for dividing by 5 is to double the numerator and denominator: \\( \\frac{430 \\times 2}{5 \\times 2} = \\frac{860}{10} = 86\\).",
    solutionSteps: [
      {
        explanation: "Double 430 to get 860.",
        workingOut: "430 \\times 2 = 860",
        graphData: null
      },
      {
        explanation: "Divide 860 by 10 (which is equivalent to dividing by 5 after doubling).",
        workingOut: "860 \\div 10 = 86",
        graphData: null
      }
    ]
  },

  // ── QUESTION 5b ──
  {
    id: "y7-2e-q5b",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 870 \\div 5 \\)",
    opts: [
      { text: "\\(164\\)", imageUrl: "" },
      { text: "\\(174\\)", imageUrl: "" },
      { text: "\\(184\\)", imageUrl: "" },
      { text: "\\(170\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Double 870 first (1740), then divide by 10.",
    solution: "To divide 870 by 5, double the number to get 1740, then divide by 10 to get 174.",
    solutionSteps: [
      {
        explanation: "Double 870.",
        workingOut: "870 \\times 2 = 1740",
        graphData: null
      },
      {
        explanation: "Divide the result by 10.",
        workingOut: "1740 \\div 10 = 174",
        graphData: null
      }
    ]
  },

  // ── QUESTION 5d ──
  {
    id: "y7-2e-q5d",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 136 \\div 4 \\)",
    opts: [
      { text: "\\(38\\)", imageUrl: "" },
      { text: "\\(34\\)", imageUrl: "" },
      { text: "\\(28\\)", imageUrl: "" },
      { text: "\\(44\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "To divide by 4, halve the number twice: first half of 136 is 68...",
    solution: "Dividing by 4 is the same as halving twice:\n- First half: \\(136 \\div 2 = 68\\).\n- Second half: \\(68 \\div 2 = 34\\).",
    solutionSteps: [
      {
        explanation: "Halve 136 the first time.",
        workingOut: "136 \\div 2 = 68",
        graphData: null
      },
      {
        explanation: "Halve 68 the second time.",
        workingOut: "68 \\div 2 = 34",
        graphData: null
      }
    ]
  },

  // ── QUESTION 5f ──
  {
    id: "y7-2e-q5f",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 408 \\div 8 \\)",
    opts: [
      { text: "\\(51\\)", imageUrl: "" },
      { text: "\\(54\\)", imageUrl: "" },
      { text: "\\(48\\)", imageUrl: "" },
      { text: "\\(61\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "To divide by 8, halve the number three times: 408 -> 204 -> 102...",
    solution: "Dividing by 8 is the same as halving three times:\n- First half: \\(408 \\div 2 = 204\\).\n- Second half: \\(204 \\div 2 = 102\\).\n- Third half: \\(102 \\div 2 = 51\\).",
    solutionSteps: [
      {
        explanation: "Halve 408 once.",
        workingOut: "408 \\div 2 = 204",
        graphData: null
      },
      {
        explanation: "Halve 204 a second time.",
        workingOut: "204 \\div 2 = 102",
        graphData: null
      },
      {
        explanation: "Halve 102 a third time to complete the division.",
        workingOut: "102 \\div 2 = 51",
        graphData: null
      }
    ]
  },

  // ── QUESTION 5j ──
  {
    id: "y7-2e-q5j",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 762 \\div 6 \\)",
    opts: [
      { text: "\\(122\\)", imageUrl: "" },
      { text: "\\(127\\)", imageUrl: "" },
      { text: "\\(132\\)", imageUrl: "" },
      { text: "\\(117\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Halve the number first to get 381, then divide 381 by 3.",
    solution: "Since \\(6 = 2 \\times 3\\), we can divide by 2 first and then by 3:\n- First divide by 2: \\(762 \\div 2 = 381\\).\n- Next divide by 3: \\(381 \\div 3 = 127\\).",
    solutionSteps: [
      {
        explanation: "Divide 762 by 2.",
        workingOut: "762 \\div 2 = 381",
        graphData: null
      },
      {
        explanation: "Divide the result 381 by 3.",
        workingOut: "381 \\div 3 = 127",
        graphData: null
      }
    ]
  },

  // ── QUESTION 5l ──
  {
    id: "y7-2e-q5l",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 1512 \\div 27 \\)",
    opts: [
      { text: "\\(52\\)", imageUrl: "" },
      { text: "\\(56\\)", imageUrl: "" },
      { text: "\\(48\\)", imageUrl: "" },
      { text: "\\(64\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Divide both 1512 and 27 by 9 first to simplify the fraction to 168 / 3.",
    solution: "Simplify the fraction by dividing both numbers by their common factor, 9:\n- \\(1512 \\div 9 = 168\\)\n- \\(27 \\div 9 = 3\\)\nNow, perform the simpler division: \\(168 \\div 3 = 56\\).",
    solutionSteps: [
      {
        explanation: "Divide both the numerator and denominator by 9 to simplify.",
        workingOut: "\\frac{1512 \\div 9}{27 \\div 9} = \\frac{168}{3}",
        graphData: null
      },
      {
        explanation: "Divide 168 by 3.",
        workingOut: "168 \\div 3 = 56",
        graphData: null
      }
    ]
  },

  // ── QUESTION 6a ──
  {
    id: "y7-2e-q6a",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 125 \\times 32 \\)",
    opts: [
      { text: "\\(3600\\)", imageUrl: "" },
      { text: "\\(4000\\)", imageUrl: "" },
      { text: "\\(4500\\)", imageUrl: "" },
      { text: "\\(5000\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Factorise 32 as 8 * 4. Recall that 125 * 8 = 1000, which makes multiplication easy.",
    solution: "Factorise 32 into \\(8 \\times 4\\). The expression becomes: \\(125 \\times 8 \\times 4\\). Since \\(125 \\times 8 = 1000\\), we calculate: \\(1000 \\times 4 = 4000\\).",
    solutionSteps: [
      {
        explanation: "Split 32 into factors of 8 and 4.",
        workingOut: "125 \\times 32 = 125 \\times 8 \\times 4",
        graphData: null
      },
      {
        explanation: "Multiply 125 by 8 to get 1000.",
        workingOut: "125 \\times 8 = 1000",
        graphData: null
      },
      {
        explanation: "Multiply by the remaining factor 4.",
        workingOut: "1000 \\times 4 = 4000",
        graphData: null
      }
    ]
  },

  // ── QUESTION 6b ──
  {
    id: "y7-2e-q6b",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 135 \\times 22 \\)",
    opts: [
      { text: "\\(2970\\)", imageUrl: "" },
      { text: "\\(2700\\)", imageUrl: "" },
      { text: "\\(2870\\)", imageUrl: "" },
      { text: "\\(3070\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Double 135 to get 270, and halve 22 to get 11. Then multiply 270 by 11.",
    solution: "Apply doubling and halving: double 135 to get 270, and halve 22 to get 11. Now, multiply by 11: \\(270 \\times 11 = 270 \\times (10 + 1) = 2700 + 270 = 2970\\).",
    solutionSteps: [
      {
        explanation: "Double 135 and halve 22.",
        workingOut: "\\text{Double } 135 = 270, \\quad \\text{Halve } 22 = 11 \\implies 270 \\times 11",
        graphData: null
      },
      {
        explanation: "Multiply 270 by 11 using the distributive law \\(10 + 1\\).",
        workingOut: "270 \\times (10 + 1) = 2700 + 270",
        graphData: null
      },
      {
        explanation: "Add the terms together.",
        workingOut: "2700 + 270 = 2970",
        graphData: null
      }
    ]
  },

  // ── QUESTION 6c ──
  {
    id: "y7-2e-q6c",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 2750 \\div 50 \\)",
    opts: [
      { text: "\\(45\\)", imageUrl: "" },
      { text: "\\(55\\)", imageUrl: "" },
      { text: "\\(65\\)", imageUrl: "" },
      { text: "\\(50\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Divide both numbers by 10 first to get 275 / 5. Then divide 275 by 5.",
    solution: "Simplify by dividing both numbers by 10 to get \\(275 \\div 5\\). To divide by 5 mentally, double 275 to get 550, then divide by 10 to get 55.",
    solutionSteps: [
      {
        explanation: "Divide both numerator and denominator by 10.",
        workingOut: "\\frac{2750}{50} = \\frac{275}{5}",
        graphData: null
      },
      {
        explanation: "Double 275 and divide by 10 to find the final division value.",
        workingOut: "550 \\div 10 = 55",
        graphData: null
      }
    ]
  },

  // ── QUESTION 6d ──
  {
    id: "y7-2e-q6d",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 1344 \\div 16 \\)",
    opts: [
      { text: "\\(82\\)", imageUrl: "" },
      { text: "\\(84\\)", imageUrl: "" },
      { text: "\\(78\\)", imageUrl: "" },
      { text: "\\(88\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Halve both numbers repeatedly to make the division simpler: 1344/16 -> 672/8 -> 336/4...",
    solution: "Simplify by halving both numbers repeatedly:\n\\(1344 \\div 16 = 672 \\div 8 = 336 \\div 4 = 168 \\div 2 = 84\\).",
    solutionSteps: [
      {
        explanation: "Halve both terms.",
        workingOut: "1344 \\div 16 = 672 \\div 8",
        graphData: null
      },
      {
        explanation: "Halve both terms again.",
        workingOut: "672 \\div 8 = 336 \\div 4",
        graphData: null
      },
      {
        explanation: "Halve both terms once more.",
        workingOut: "336 \\div 4 = 168 \\div 2",
        graphData: null
      },
      {
        explanation: "Perform the final division.",
        workingOut: "168 \\div 2 = 84",
        graphData: null
      }
    ]
  },

  // ── QUESTION 6e ──
  {
    id: "y7-2e-q6e",
    type: "multiple_choice",
    difficulty: "medium",
    timeLimit: 90,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 367 \\times 9 \\)",
    opts: [
      { text: "\\(3303\\)", imageUrl: "" },
      { text: "\\(3670\\)", imageUrl: "" },
      { text: "\\(3293\\)", imageUrl: "" },
      { text: "\\(3313\\)", imageUrl: "" }
    ],
    answer: 0,
    hint: "Multiply by 10 to get 3670, then subtract 367.",
    solution: "Use rounding and adjusting: multiply 367 by \\((10 - 1)\\). This gives: \\(3670 - 367 = 3303\\).",
    solutionSteps: [
      {
        explanation: "Rewrite 9 as \\(10 - 1\\).",
        workingOut: "367 \\times (10 - 1)",
        graphData: null
      },
      {
        explanation: "Distribute the multiplication.",
        workingOut: "3670 - 367",
        graphData: null
      },
      {
        explanation: "Subtract to find the final value.",
        workingOut: "3670 - 367 = 3303",
        graphData: null
      }
    ]
  },

  // ── QUESTION 6f ──
  {
    id: "y7-2e-q6f",
    type: "multiple_choice",
    difficulty: "easy",
    timeLimit: 60,
    t: "Using mental strategies to multiply and divide",
    question: "Evaluate mentally:\n\\( 48 \\times 5 \\)",
    opts: [
      { text: "\\(220\\)", imageUrl: "" },
      { text: "\\(240\\)", imageUrl: "" },
      { text: "\\(250\\)", imageUrl: "" },
      { text: "\\(200\\)", imageUrl: "" }
    ],
    answer: 1,
    hint: "Halve 48 to get 24, and multiply by 10.",
    solution: "Using the doubling and halving strategy: halve 48 to get 24, and double 5 to get 10. The calculation becomes: \\(24 \\times 10 = 240\\).",
    solutionSteps: [
      {
        explanation: "Apply doubling and halving. Halve 48 and double 5.",
        workingOut: "\\text{Halve } 48 = 24, \\quad \\text{Double } 5 = 10",
        graphData: null
      },
      {
        explanation: "Multiply the simplified terms.",
        workingOut: "24 \\times 10 = 240",
        graphData: null
      }
    ]
  }
];
