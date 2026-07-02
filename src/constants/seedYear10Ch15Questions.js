export const Y10_CH15_QUESTIONS = [
  {
    "id": "y10-15a-q1",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "David has 15 marbles. Six of them are pink, four are blue, three are green, and two are black. If he chooses a marble at random, what is the probability that it is blue?",
    "a": "4/15",
    "solutionSteps": [
      {
        "explanation": "Identify the number of favourable outcomes (blue marbles) and the total number of marbles.",
        "workingOut": "\\text{Number of blue marbles} = 4, quad \\text{Total marbles} = 15"
      },
      {
        "explanation": "Apply the probability formula: \\(P(\\text{event}) = \\frac{\\text{Number of favourable outcomes}}{\\text{Total number of outcomes}}\\).",
        "workingOut": "P(\\text{blue}) = \\frac{4}{15}"
      }
    ],
    "t": "Review of probability"
  },
  {
    "id": "y10-15a-q2",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A debating team consists of six boys and nine girls. If one of the team is chosen at random to be the leader, what is the probability that the leader is a boy?",
    "a": "2/5",
    "solutionSteps": [
      {
        "explanation": "Find the total number of team members by adding the number of boys and girls.",
        "workingOut": "\\text{Total members} = 6 + 9 = 15"
      },
      {
        "explanation": "Identify the number of boys, which is the number of favourable outcomes.",
        "workingOut": "\\text{Number of boys} = 6"
      },
      {
        "explanation": "Calculate the probability and simplify the fraction.",
        "workingOut": "P(\\text{boy}) = \\frac{6}{15} = \\frac{2}{5}"
      }
    ],
    "t": "Review of probability"
  },
  {
    "id": "y10-15a-q3",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A basketball team consists of six players: Evans, Harrison, Jenkins, Miller, Owen, and Smith. If a player is chosen at random, what is the probability that their name starts with a vowel?",
    "a": "1/3",
    "solutionSteps": [
      {
        "explanation": "Count the total number of players on the team.",
        "workingOut": "\\text{Total players} = 6"
      },
      {
        "explanation": "Identify the names that start with a vowel (A, E, I, O, U). In this list, Evans and Owen start with vowels.",
        "workingOut": "\\text{Vowel starting names} = \\text{Evans, Owen} \\implies 2 \\; \\text{players}"
      },
      {
        "explanation": "Calculate the probability and write it in simplest form.",
        "workingOut": "P(\\text{starts with vowel}) = \\frac{2}{6} = \\frac{1}{3}"
      }
    ],
    "t": "Review of probability"
  },
  {
    "id": "y10-15a-q4",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Slips of paper numbered 1, 2, 3, ..., 12 are placed in a hat and one is drawn at random. What is the probability that the number on the slip of paper is not a multiple of three?",
    "a": "2/3",
    "solutionSteps": [
      {
        "explanation": "List all numbers from 1 to 12 and count how many are multiples of three.",
        "workingOut": "\\text{Multiples of three} = {3, 6, 9, 12} \\implies 4 \\; \\text{numbers}"
      },
      {
        "explanation": "Subtract the multiples of three from the total count to find the number of slips that are not multiples of three.",
        "workingOut": "\\text{Not multiples of three} = 12 - 4 = 8 \\; \\text{numbers}"
      },
      {
        "explanation": "Calculate the probability and simplify the fraction.",
        "workingOut": "P(\\text{not a multiple of 3}) = \\frac{8}{12} = \\frac{2}{3}"
      }
    ],
    "t": "Review of probability"
  },
  {
    "id": "y10-15a-q5",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A bag contains 13 balls. Five of these are red and eight are yellow. A ball is taken from the bag at random. What is the probability that it is red?",
    "a": "5/13",
    "solutionSteps": [
      {
        "explanation": "Determine the number of red balls (favourable outcomes) and the total number of balls in the bag.",
        "workingOut": "\\text{Number of red balls} = 5, quad \\text{Total balls} = 13"
      },
      {
        "explanation": "Compute the probability.",
        "workingOut": "P(\\text{red}) = \\frac{5}{13}"
      }
    ],
    "t": "Review of probability"
  },
  {
    "id": "y10-15a-q6",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "One box contains 4 discs labelled 3, 4, 8, and 9. A second box contains 5 discs labelled 4, 5, 6, 7, and 8. A disc is taken from each of the boxes and the larger of the two numbers is recorded. Find the probability that the number obtained is greater than 7.",
    "a": "3/5",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 200,
        "boundingbox": [
          -1,
          6,
          9,
          0
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "text",
            "coords": [
              0,
              4.8
            ],
            "content": "Box 1:"
          },
          {
            "type": "circle",
            "id": "b1c1",
            "center": [
              1.5,
              4
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              1.4,
              4
            ],
            "content": "3"
          },
          {
            "type": "circle",
            "id": "b1c2",
            "center": [
              3,
              4
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              2.9,
              4
            ],
            "content": "4"
          },
          {
            "type": "circle",
            "id": "b1c3",
            "center": [
              4.5,
              4
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              4.4,
              4
            ],
            "content": "8"
          },
          {
            "type": "circle",
            "id": "b1c4",
            "center": [
              6,
              4
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              5.9,
              4
            ],
            "content": "9"
          },
          {
            "type": "text",
            "coords": [
              0,
              1.8
            ],
            "content": "Box 2:"
          },
          {
            "type": "circle",
            "id": "b2c1",
            "center": [
              1.5,
              1
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              1.4,
              1
            ],
            "content": "4"
          },
          {
            "type": "circle",
            "id": "b2c2",
            "center": [
              3,
              1
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              2.9,
              1
            ],
            "content": "5"
          },
          {
            "type": "circle",
            "id": "b2c3",
            "center": [
              4.5,
              1
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              4.4,
              1
            ],
            "content": "6"
          },
          {
            "type": "circle",
            "id": "b2c4",
            "center": [
              6,
              1
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              5.9,
              1
            ],
            "content": "7"
          },
          {
            "type": "circle",
            "id": "b2c5",
            "center": [
              7.5,
              1
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              7.4,
              1
            ],
            "content": "8"
          }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y10-15a-q6a",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "List the sample space for the experiment as a set of outcomes.",
        "a": "{4, 5, 6, 7, 8, 9}",
        "solutionSteps": [
          {
            "explanation": "Construct a table or grid pairing each element of Box 1 with Box 2 and record the maximum number in each pair.",
            "workingOut": "\\begin{array}{c|ccccc} \\text{Box 1} \\backslash \\text{Box 2} & 4 & 5 & 6 & 7 & 8 \\\\ \\hline 3 & 4 & 5 & 6 & 7 & 8 \\\\ 4 & 4 & 5 & 6 & 7 & 8 \\\\ 8 & 8 & 8 & 8 & 8 & 8 \\\\ 9 & 9 & 9 & 9 & 9 & 9 \\end{array}"
          },
          {
            "explanation": "List all unique values obtained from this table.",
            "workingOut": "\\text{Sample Space} = {4, 5, 6, 7, 8, 9}"
          }
        ]
      },
      {
        "id": "y10-15a-q6b",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability of each outcome in the sample space.",
        "a": "P(4)=1/10, P(5)=1/10, P(6)=1/10, P(7)=1/10, P(8)=7/20, P(9)=1/4",
        "solutionSteps": [
          {
            "explanation": "Count the number of times each maximum outcome occurs out of the 20 total possible pairs.",
            "workingOut": "\\text{Total pairs} = 4 \\times 5 = 20"
          },
          {
            "explanation": "Calculate the occurrences and probabilities for each outcome.",
            "workingOut": "\\begin{aligned} \\text{Outcome 4}: &\\quad 2 \\; \\text{times} \\implies P(4) = \\frac{2}{20} = \\frac{1}{10} \\\\ \\text{Outcome 5}: &\\quad 2 \\; \\text{times} \\implies P(5) = \\frac{2}{20} = \\frac{1}{10} \\\\ \\text{Outcome 6}: &\\quad 2 \\; \\text{times} \\implies P(6) = \\frac{2}{20} = \\frac{1}{10} \\\\ \\text{Outcome 7}: &\\quad 2 \\; \\text{times} \\implies P(7) = \\frac{2}{20} = \\frac{1}{10} \\\\ \\text{Outcome 8}: &\\quad 7 \\; \\text{times} \\implies P(8) = \\frac{7}{20} \\\\ \\text{Outcome 9}: &\\quad 5 \\; \\text{times} \\implies P(9) = \\frac{5}{20} = \\frac{1}{4} \\end{aligned}"
          }
        ]
      },
      {
        "id": "y10-15a-q6c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that the number obtained is greater than 7.",
        "a": "3/5",
        "solutionSteps": [
          {
            "explanation": "Identify the outcomes in the sample space that are greater than 7, which are 8 and 9.",
            "workingOut": "\\text{Favourable outcomes} = {8, 9}"
          },
          {
            "explanation": "Sum the probabilities of these two outcomes.",
            "workingOut": "P(>7) = P(8) + P(9) = \\frac{7}{20} + \\frac{5}{20} = \\frac{12}{20}"
          },
          {
            "explanation": "Simplify the fraction.",
            "workingOut": "\\frac{12}{20} = \\frac{3}{5}"
          }
        ]
      }
    ],
    "t": "Review of probability"
  },
  {
    "id": "y10-15a-q7",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A box contains 3 discs labelled 2, 3, and 4. A second box contains 3 discs labelled 3, 5, and 8. A disc is taken randomly from each box and the result is recorded as an ordered pair.",
    "a": "2/9",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 180,
        "boundingbox": [
          -1,
          5,
          7,
          0
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "text",
            "coords": [
              0,
              3.8
            ],
            "content": "Box 1:"
          },
          {
            "type": "circle",
            "id": "b1c1",
            "center": [
              1.5,
              3
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              1.4,
              3
            ],
            "content": "2"
          },
          {
            "type": "circle",
            "id": "b1c2",
            "center": [
              3,
              3
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              2.9,
              3
            ],
            "content": "3"
          },
          {
            "type": "circle",
            "id": "b1c3",
            "center": [
              4.5,
              3
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              4.4,
              3
            ],
            "content": "4"
          },
          {
            "type": "text",
            "coords": [
              0,
              1.8
            ],
            "content": "Box 2:"
          },
          {
            "type": "circle",
            "id": "b2c1",
            "center": [
              1.5,
              1
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              1.4,
              1
            ],
            "content": "3"
          },
          {
            "type": "circle",
            "id": "b2c2",
            "center": [
              3,
              1
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              2.9,
              1
            ],
            "content": "5"
          },
          {
            "type": "circle",
            "id": "b2c3",
            "center": [
              4.5,
              1
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              4.4,
              1
            ],
            "content": "8"
          }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y10-15a-q7a",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "List the sample space for the experiment as a set of ordered pairs.",
        "a": "{(2,3), (2,5), (2,8), (3,3), (3,5), (3,8), (4,3), (4,5), (4,8)}",
        "solutionSteps": [
          {
            "explanation": "List all possible ordered pairs by combining each number from Box 1 with each number from Box 2.",
            "workingOut": "\\text{Sample Space} = {(2,3), (2,5), (2,8), (3,3), (3,5), (3,8), (4,3), (4,5), (4,8)}"
          }
        ]
      },
      {
        "id": "y10-15a-q7b",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability of each outcome.",
        "a": "1/9",
        "solutionSteps": [
          {
            "explanation": "Count the total number of outcomes in the sample space.",
            "workingOut": "\\text{Total outcomes} = 3 \\times 3 = 9"
          },
          {
            "explanation": "Since all selections are equally likely, each outcome has the same probability.",
            "workingOut": "\\text{Probability} = \\frac{1}{9}"
          }
        ]
      },
      {
        "id": "y10-15a-q7c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that there is an odd number on both of the selected discs.",
        "a": "2/9",
        "solutionSteps": [
          {
            "explanation": "Identify the outcomes where both numbers in the pair are odd.",
            "workingOut": "\\text{Odd pairs} = {(3,3), (3,5)}"
          },
          {
            "explanation": "Count these outcomes (2) and divide by the total number of outcomes (9).",
            "workingOut": "P(\\text{both odd}) = \\frac{2}{9}"
          }
        ]
      }
    ],
    "t": "Review of probability"
  },
  {
    "id": "y10-15a-q8",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A box contains 4 discs labelled 2, 3, 4, and 5. A second box contains 3 discs labelled 2, 3, and 4. A disc is taken randomly from each box and the sum of the numbers on the two discs is recorded.",
    "a": "1/4",
    "graphData": {
      "jsxGraph": {
        "width": 300,
        "height": 180,
        "boundingbox": [
          -1,
          5,
          7,
          0
        ],
        "boardOptions": {
          "keepaspectratio": true
        },
        "elements": [
          {
            "type": "text",
            "coords": [
              0,
              3.8
            ],
            "content": "Box 1:"
          },
          {
            "type": "circle",
            "id": "b1c1",
            "center": [
              1.5,
              3
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              1.4,
              3
            ],
            "content": "2"
          },
          {
            "type": "circle",
            "id": "b1c2",
            "center": [
              3,
              3
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              2.9,
              3
            ],
            "content": "3"
          },
          {
            "type": "circle",
            "id": "b1c3",
            "center": [
              4.5,
              3
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              4.4,
              3
            ],
            "content": "4"
          },
          {
            "type": "circle",
            "id": "b1c4",
            "center": [
              6,
              3
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              5.9,
              3
            ],
            "content": "5"
          },
          {
            "type": "text",
            "coords": [
              0,
              1.8
            ],
            "content": "Box 2:"
          },
          {
            "type": "circle",
            "id": "b2c1",
            "center": [
              1.5,
              1
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              1.4,
              1
            ],
            "content": "2"
          },
          {
            "type": "circle",
            "id": "b2c2",
            "center": [
              3,
              1
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              2.9,
              1
            ],
            "content": "3"
          },
          {
            "type": "circle",
            "id": "b2c3",
            "center": [
              4.5,
              1
            ],
            "radius": 0.6,
            "color": "slate"
          },
          {
            "type": "text",
            "coords": [
              4.4,
              1
            ],
            "content": "4"
          }
        ]
      }
    },
    "subQuestions": [
      {
        "id": "y10-15a-q8a",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "List the sample space for the experiment as a set of sums.",
        "a": "{4, 5, 6, 7, 8, 9}",
        "solutionSteps": [
          {
            "explanation": "Create an addition table combining the two boxes to find all possible sum outcomes.",
            "workingOut": "\\begin{array}{c|ccc} \\text{Box 1} \\backslash \\text{Box 2} & 2 & 3 & 4 \\\\ \\hline 2 & 4 & 5 & 6 \\\\ 3 & 5 & 6 & 7 \\\\ 4 & 6 & 7 & 8 \\\\ 5 & 7 & 8 & 9 \\end{array}"
          },
          {
            "explanation": "Extract the unique sums from the grid table.",
            "workingOut": "\\text{Sample Space} = {4, 5, 6, 7, 8, 9}"
          }
        ]
      },
      {
        "id": "y10-15a-q8b",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability of each sum outcome.",
        "a": "P(4)=1/12, P(5)=1/6, P(6)=1/4, P(7)=1/4, P(8)=1/6, P(9)=1/12",
        "solutionSteps": [
          {
            "explanation": "Count the number of pairs that yield each sum value out of the 12 total outcomes.",
            "workingOut": "\\text{Total pairs} = 4 \\times 3 = 12"
          },
          {
            "explanation": "Find counts and calculate probabilities for each sum:",
            "workingOut": "\\begin{aligned} \\text{Sum 4}: &\\quad 1 \\; \\text{time} \\implies P(4) = \\frac{1}{12} \\\\ \\text{Sum 5}: &\\quad 2 \\; \\text{times} \\implies P(5) = \\frac{2}{12} = \\frac{1}{6} \\\\ \\text{Sum 6}: &\\quad 3 \\; \\text{times} \\implies P(6) = \\frac{3}{12} = \\frac{1}{4} \\\\ \\text{Sum 7}: &\\quad 3 \\; \\text{times} \\implies P(7) = \\frac{3}{12} = \\frac{1}{4} \\\\ \\text{Sum 8}: &\\quad 2 \\; \\text{times} \\implies P(8) = \\frac{2}{12} = \\frac{1}{6} \\\\ \\text{Sum 9}: &\\quad 1 \\; \\text{time} \\implies P(9) = \\frac{1}{12} \\end{aligned}"
          }
        ]
      },
      {
        "id": "y10-15a-q8c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that the sum is less than 6.",
        "a": "1/4",
        "solutionSteps": [
          {
            "explanation": "Identify the sums in the sample space that are less than 6, which are 4 and 5.",
            "workingOut": "\\text{Favourable sums} = {4, 5}"
          },
          {
            "explanation": "Add the probabilities of obtaining 4 and 5.",
            "workingOut": "P(<6) = P(4) + P(5) = \\frac{1}{12} + \\frac{2}{12} = \\frac{3}{12}"
          },
          {
            "explanation": "Simplify the fraction to its lowest terms.",
            "workingOut": "\\frac{3}{12} = \\frac{1}{4}"
          }
        ]
      }
    ],
    "t": "Review of probability"
  },
  {
    "id": "y10-15a-q9",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Two standard six-sided dice are thrown and the values on the uppermost faces are recorded.",
    "a": "1/4",
    "subQuestions": [
      {
        "id": "y10-15a-q9a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the probability of obtaining an odd number on both dice.",
        "a": "1/4",
        "solutionSteps": [
          {
            "explanation": "Recall the numbers on a die that are odd.",
            "workingOut": "\\text{Odd numbers} = {1, 3, 5} \\implies 3 \\; \\text{numbers}"
          },
          {
            "explanation": "Determine the number of outcomes where both dice show odd numbers. Since each die has 3 odd numbers, there are \\(3 \\times 3\\) combinations.",
            "workingOut": "\\text{Favourable pairs} = 3 \\times 3 = 9"
          },
          {
            "explanation": "Divide by the total possible outcomes (36) and simplify.",
            "workingOut": "P(\\text{both odd}) = \\frac{9}{36} = \\frac{1}{4}"
          }
        ]
      },
      {
        "id": "y10-15a-q9b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the probability of obtaining exactly one 5.",
        "a": "5/18",
        "solutionSteps": [
          {
            "explanation": "Identify the pairs where exactly one die is 5. This includes the cases (5, non-5) and (non-5, 5).",
            "workingOut": "\\begin{aligned} \\text{Case 1 (5 first)}: &\\quad (5, x) \\; \\text{where} \\; x \\ne 5 \\implies 5 \\; \\text{outcomes} \\\\ \\text{Case 2 (5 second)}: &\\quad (y, 5) \\; \\text{where} \\; y \\ne 5 \\implies 5 \\; \\text{outcomes} \\end{aligned}"
          },
          {
            "explanation": "Sum the number of outcomes from both cases.",
            "workingOut": "\\text{Total outcomes} = 5 + 5 = 10"
          },
          {
            "explanation": "Divide by the total outcomes of rolling two dice and simplify.",
            "workingOut": "P(\\text{exactly one 5}) = \\frac{10}{36} = \\frac{5}{18}"
          }
        ]
      },
      {
        "id": "y10-15a-q9c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the probability of obtaining a 4 on one die and an odd number on the other.",
        "a": "1/6",
        "solutionSteps": [
          {
            "explanation": "Identify the pairs where one die shows a 4 and the other die shows an odd number (1, 3, or 5). The two cases are (4, odd) and (odd, 4).",
            "workingOut": "\\begin{aligned} \\text{Case 1}: &\\quad {(4,1), (4,3), (4,5)} \\implies 3 \\; \\text{outcomes} \\\\ \\text{Case 2}: &\\quad {(1,4), (3,4), (5,4)} \\implies 3 \\; \\text{outcomes} \\end{aligned}"
          },
          {
            "explanation": "Sum the total number of favourable outcomes.",
            "workingOut": "\\text{Favourable outcomes} = 3 + 3 = 6"
          },
          {
            "explanation": "Divide by the total outcomes (36) and write in simplest form.",
            "workingOut": "P = \\frac{6}{36} = \\frac{1}{6}"
          }
        ]
      }
    ],
    "t": "Review of probability"
  },
  {
    "id": "y10-15a-q10",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Two standard dice are thrown and the difference of the values on the uppermost faces is recorded as: \\(\\text{outcome} = \\text{value on die 1} - \\text{value on die 2}\\).",
    "a": "1/6",
    "subQuestions": [
      {
        "id": "y10-15a-q10a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "List the sample space for this experiment.",
        "a": "{-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5}",
        "solutionSteps": [
          {
            "explanation": "Determine the minimum and maximum possible differences. The minimum is 1 - 6 = -5, and the maximum is 6 - 1 = 5.",
            "workingOut": "\\text{Minimum difference} = -5, \\quad \\text{Maximum difference} = 5"
          },
          {
            "explanation": "List all integer values from the minimum to the maximum.",
            "workingOut": "\\text{Sample Space} = {-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5}"
          }
        ]
      },
      {
        "id": "y10-15a-q10b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability of obtaining a positive number?",
        "a": "5/12",
        "solutionSteps": [
          {
            "explanation": "Count the number of outcomes that yield a positive difference (where die 1 value > die 2 value). Out of 36 pairs, 6 have a difference of 0, and the remaining 30 are equally split between positive and negative.",
            "workingOut": "\\text{Positive outcomes} = \\frac{36 - 6}{2} = 15"
          },
          {
            "explanation": "Divide by the total outcomes and simplify.",
            "workingOut": "P(\\text{positive}) = \\frac{15}{36} = \\frac{5}{12}"
          }
        ]
      },
      {
        "id": "y10-15a-q10c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability of obtaining a difference of 0?",
        "a": "1/6",
        "solutionSteps": [
          {
            "explanation": "Identify the pairs where both dice show the same number.",
            "workingOut": "\\text{Pairs} = {(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)} \\implies 6 \\; \\text{outcomes}"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P(0) = \\frac{6}{36} = \\frac{1}{6}"
          }
        ]
      },
      {
        "id": "y10-15a-q10d",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability of obtaining a difference of 2?",
        "a": "1/9",
        "solutionSteps": [
          {
            "explanation": "Identify the pairs where \\(\\text{die 1} - \\text{die 2} = 2\\).",
            "workingOut": "\\text{Pairs} = {(3,1), (4,2), (5,3), (6,4)} \\implies 4 \\; \\text{outcomes}"
          },
          {
            "explanation": "Calculate and simplify the probability.",
            "workingOut": "P(2) = \\frac{4}{36} = \\frac{1}{9}"
          }
        ]
      },
      {
        "id": "y10-15a-q10e",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability of obtaining a difference whose absolute value is exactly divisible by 2?",
        "a": "1/2",
        "solutionSteps": [
          {
            "explanation": "Identify the differences divisible by 2: -4, -2, 0, 2, and 4. Count the corresponding pairs for each of these differences.",
            "workingOut": "\\begin{aligned} \\text{Diff 0}: &\\quad 6 \\; \\text{outcomes} \\\\ \\text{Diff } \\pm 2: &\\quad 4 + 4 = 8 \\; \\text{outcomes} \\\\ \\text{Diff } \\pm 4: &\\quad 2 + 2 = 4 \\; \\text{outcomes} \\end{aligned}"
          },
          {
            "explanation": "Sum the favourable outcomes.",
            "workingOut": "\\text{Total favourable outcomes} = 6 + 8 + 4 = 18"
          },
          {
            "explanation": "Divide by the total outcomes.",
            "workingOut": "P(\\text{divisible by 2}) = \\frac{18}{36} = \\frac{1}{2}"
          }
        ]
      }
    ],
    "t": "Review of probability"
  },
  {
    "id": "y10-15a-q11",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A bag contains six balls: three blue balls numbered 1 to 3, two green balls numbered 1 and 2, and one red ball. Two balls are selected one after the other, at random, and the first is replaced before the second is withdrawn.",
    "a": "7/18",
    "subQuestions": [
      {
        "id": "y10-15a-q11a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "List the sample space as a set of ordered pairs representing the selection.",
        "a": "{(B1,B1), (B1,B2), ..., (R,R)}",
        "solutionSteps": [
          {
            "explanation": "Write out the 36 possible outcomes based on the 6 balls with replacement. Let \\(B_1, B_2, B_3\\) represent the blue balls, \\(G_1, G_2\\) represent the green balls, and \\(R\\) represent the red ball.",
            "workingOut": "\\text{Sample Space} = {(B_1, B_1), (B_1, B_2), \\dots, (R, R)} \\quad (36 \\; \\text{outcomes})"
          }
        ]
      },
      {
        "id": "y10-15a-q11bi",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the probability that both balls are the same colour.",
        "a": "7/18",
        "solutionSteps": [
          {
            "explanation": "Calculate the probability of drawing two balls of each color, then sum them. The first ball is replaced, so the probabilities remain constant.",
            "workingOut": "\\begin{aligned} P(\\text{both blue}) &= \\frac{3}{6} \\times \\frac{3}{6} = \\frac{9}{36} \\\\ P(\\text{both green}) &= \\frac{2}{6} \\times \\frac{2}{6} = \\frac{4}{36} \\\\ P(\\text{both red}) &= \\frac{1}{6} \\times \\frac{1}{6} = \\frac{1}{36} \\end{aligned}"
          },
          {
            "explanation": "Sum the probabilities.",
            "workingOut": "P(\\text{same colour}) = \\frac{9 + 4 + 1}{36} = \\frac{14}{36}"
          },
          {
            "explanation": "Simplify the fraction.",
            "workingOut": "\\frac{14}{36} = \\frac{7}{18}"
          }
        ]
      },
      {
        "id": "y10-15a-q11bii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the probability that the two balls selected are different colours.",
        "a": "11/18",
        "solutionSteps": [
          {
            "explanation": "Use the complement rule: the probability of selecting different colors is 1 minus the probability of selecting the same color.",
            "workingOut": "P(\\text{different colours}) = 1 - P(\\text{same colour})"
          },
          {
            "explanation": "Subtract the probability calculated in the previous step.",
            "workingOut": "= 1 - \\frac{7}{18} = \\frac{11}{18}"
          }
        ]
      }
    ],
    "t": "Review of probability"
  },
  {
    "id": "y10-15a-q12",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "The surnames of 600 male students on a school roll vary in length from 3 letters to 11 letters as follows:\n\\(\\begin{array}{c|ccccccccc} \\text{Number of letters} & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 \\\\ \\hline \\text{Number of boys} & 12 & 75 & 130 & 165 & 108 & 72 & 30 & 8 & 0 \\end{array}\\)\nIf a boy is selected at random from those in this school, find the probability that his surname contains at least 8 letters.",
    "a": "11/60",
    "subQuestions": [
      {
        "id": "y10-15a-q12a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the probability that his surname contains at least 8 letters.",
        "a": "11/60",
        "solutionSteps": [
          {
            "explanation": "Add the number of boys whose surnames have 8, 9, 10, or 11 letters.",
            "workingOut": "\\text{Boys} = 72 + 30 + 8 + 0 = 110"
          },
          {
            "explanation": "Divide by the total number of boys (600) and simplify.",
            "workingOut": "P(\\ge 8 \\; \\text{letters}) = \\frac{110}{600} = \\frac{11}{60}"
          }
        ]
      },
      {
        "id": "y10-15a-q12b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the probability that his surname contains fewer than 6 letters.",
        "a": "217/600",
        "solutionSteps": [
          {
            "explanation": "Add the number of boys whose surnames have 3, 4, or 5 letters.",
            "workingOut": "\\text{Boys} = 12 + 75 + 130 = 217"
          },
          {
            "explanation": "Divide by the total number of boys.",
            "workingOut": "P(< 6 \\; \\text{letters}) = \\frac{217}{600}"
          }
        ]
      },
      {
        "id": "y10-15a-q12c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the probability that his surname contains between 5 and 8 letters inclusive.",
        "a": "19/24",
        "solutionSteps": [
          {
            "explanation": "Add the number of boys whose surnames have 5, 6, 7, or 8 letters.",
            "workingOut": "\\text{Boys} = 130 + 165 + 108 + 72 = 475"
          },
          {
            "explanation": "Divide by the total number of boys and simplify the fraction.",
            "workingOut": "P(5 \\le \\text{letters} \\le 8) = \\frac{475}{600} = \\frac{19}{24}"
          }
        ]
      }
    ],
    "t": "Review of probability"
  }
];
