export const Y10_CH15C_QUESTIONS = [
  // Q1
  {
    "id": "y10-15c-q1",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A bowl contains green and red normal jelly beans and green and red double-flavoured jelly beans. The number of each type is given in the following table:\n\\(\\begin{array}{c|cc} & \\text{Green} & \\text{Red} \\\\ \\hline \\text{Normal jelly bean} & 15 & 12 \\\\ \\text{Double-flavoured jelly bean} & 10 & 8 \\end{array}\\)\nFind the probability that a randomly chosen jelly bean is a green jelly bean given that it is a normal jelly bean.",
    "a": "5/9",
    "subQuestions": [
      {
        "id": "y10-15c-q1a",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that it is a double-flavoured jelly bean.",
        "a": "2/5",
        "solutionSteps": [
          {
            "explanation": "Calculate the total number of jelly beans in the bowl.",
            "workingOut": "\\text{Total} = 15 + 12 + 10 + 8 = 45"
          },
          {
            "explanation": "Count the number of double-flavoured jelly beans.",
            "workingOut": "\\text{Double-flavoured} = 10 + 8 = 18"
          },
          {
            "explanation": "Calculate and simplify the probability.",
            "workingOut": "P = \\frac{18}{45} = \\frac{2}{5}"
          }
        ]
      },
      {
        "id": "y10-15c-q1b",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that it is a green jelly bean.",
        "a": "5/9",
        "solutionSteps": [
          {
            "explanation": "Find the total number of green jelly beans.",
            "workingOut": "\\text{Green} = 15 + 10 = 25"
          },
          {
            "explanation": "Compute the probability and simplify.",
            "workingOut": "P = \\frac{25}{45} = \\frac{5}{9}"
          }
        ]
      },
      {
        "id": "y10-15c-q1c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that it is a green normal jelly bean.",
        "a": "1/3",
        "solutionSteps": [
          {
            "explanation": "Identify the number of green normal jelly beans.",
            "workingOut": "\\text{Green normal} = 15"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P = \\frac{15}{45} = \\frac{1}{3}"
          }
        ]
      },
      {
        "id": "y10-15c-q1d",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that it is a green jelly bean given that it is a normal jelly bean.",
        "a": "5/9",
        "solutionSteps": [
          {
            "explanation": "Determine the total number of normal jelly beans (this becomes the new sample space).",
            "workingOut": "\\text{Total normal} = 15 + 12 = 27"
          },
          {
            "explanation": "Find the number of green jelly beans within this group.",
            "workingOut": "\\text{Green and normal} = 15"
          },
          {
            "explanation": "Calculate the conditional probability.",
            "workingOut": "P = \\frac{15}{27} = \\frac{5}{9}"
          }
        ]
      },
      {
        "id": "y10-15c-q1e",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that it is a double-flavoured jelly bean given that it is a red jelly bean.",
        "a": "2/5",
        "solutionSteps": [
          {
            "explanation": "Find the total number of red jelly beans.",
            "workingOut": "\\text{Total red} = 12 + 8 = 20"
          },
          {
            "explanation": "Find the number of double-flavoured jelly beans in the red category.",
            "workingOut": "\\text{Red and double-flavoured} = 8"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P = \\frac{8}{20} = \\frac{2}{5}"
          }
        ]
      },
      {
        "id": "y10-15c-q1f",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that it is a double-flavoured jelly bean given that it is a green jelly bean.",
        "a": "2/5",
        "solutionSteps": [
          {
            "explanation": "Find the total number of green jelly beans.",
            "workingOut": "\\text{Total green} = 15 + 10 = 25"
          },
          {
            "explanation": "Find the green double-flavoured jelly beans.",
            "workingOut": "\\text{Green and double-flavoured} = 10"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P = \\frac{10}{25} = \\frac{2}{5}"
          }
        ]
      }
    ],
    "t": "Conditional probability"
  },
  // Q2
  {
    "id": "y10-15c-q2",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A standard six-sided die is rolled. What is the probability that an outcome greater than 3 is obtained, given that:",
    "a": "1/3",
    "subQuestions": [
      {
        "id": "y10-15c-q2a",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "an odd number is obtained?",
        "a": "1/3",
        "solutionSteps": [
          {
            "explanation": "Identify the set of odd numbers (the given condition).",
            "workingOut": "\\text{Odd numbers} = \\{1, 3, 5\\} \\implies 3 \\; \\text{outcomes}"
          },
          {
            "explanation": "Find the outcomes in this set that are greater than 3.",
            "workingOut": "\\text{Favourable outcome} = \\{5\\} \\implies 1 \\; \\text{outcome}"
          },
          {
            "explanation": "Calculate the conditional probability.",
            "workingOut": "P = \\frac{1}{3}"
          }
        ]
      },
      {
        "id": "y10-15c-q2b",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "a number greater than 1 is obtained?",
        "a": "3/5",
        "solutionSteps": [
          {
            "explanation": "Identify the outcomes that are greater than 1.",
            "workingOut": "\\text{Condition set} = \\{2, 3, 4, 5, 6\\} \\implies 5 \\; \\text{outcomes}"
          },
          {
            "explanation": "Identify the outcomes in this set that are greater than 3.",
            "workingOut": "\\text{Favourable outcomes} = \\{4, 5, 6\\} \\implies 3 \\; \\text{outcomes}"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P = \\frac{3}{5}"
          }
        ]
      }
    ],
    "t": "Conditional probability"
  },
  // Q3
  {
    "id": "y10-15c-q3",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Three coins are tossed. What is the probability of obtaining exactly two heads given that at least one head is obtained?",
    "a": "3/7",
    "solutionSteps": [
      {
        "explanation": "List all 8 outcomes of tossing three coins and filter for the condition 'at least one head'.",
        "workingOut": "\\text{At least one head} = \\{HHH, HHT, HTH, HTT, THH, THT, TTH\\} \\implies 7 \\; \\text{outcomes}"
      },
      {
        "explanation": "Find the outcomes in this group that have exactly two heads.",
        "workingOut": "\\text{Exactly two heads} = \\{HHT, HTH, THH\\} \\implies 3 \\; \\text{outcomes}"
      },
      {
        "explanation": "Calculate the conditional probability.",
        "workingOut": "P = \\frac{3}{7}"
      }
    ],
    "t": "Conditional probability"
  },
  // Q4
  {
    "id": "y10-15c-q4",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn from a standard pack of 52 cards.",
    "a": "4/13",
    "subQuestions": [
      {
        "id": "y10-15c-q4a",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "What is the probability that a court card (i.e. Ace, King, Queen or Jack) is drawn given that it is known that the card is a Spade?",
        "a": "4/13",
        "solutionSteps": [
          {
            "explanation": "Identify the number of Spades in a standard deck.",
            "workingOut": "\\text{Spades} = 13"
          },
          {
            "explanation": "Count how many Spades are court cards (Ace, King, Queen, Jack of Spades).",
            "workingOut": "\\text{Court Spades} = 4"
          },
          {
            "explanation": "Calculate the conditional probability.",
            "workingOut": "P = \\frac{4}{13}"
          }
        ]
      },
      {
        "id": "y10-15c-q4b",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "What is the probability that the 7 or 8 of Hearts is drawn given that it is known that a red card is drawn?",
        "a": "1/13",
        "solutionSteps": [
          {
            "explanation": "Determine the number of red cards in a deck (Hearts and Diamonds).",
            "workingOut": "\\text{Red cards} = 26"
          },
          {
            "explanation": "Identify the number of favourable cards (7 of Hearts, 8 of Hearts).",
            "workingOut": "\\text{Favourable cards} = 2"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P = \\frac{2}{26} = \\frac{1}{13}"
          }
        ]
      }
    ],
    "t": "Conditional probability"
  },
  // Q5
  {
    "id": "y10-15c-q5",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a traffic survey, the number of people in each passing car was tabulated: 1 person (40 cars), 2 people (30 cars), 3 people (20 cars), 4 people (8 cars), 5 people (2 cars). Total cars is 100.",
    "a": "2/5",
    "subQuestions": [
      {
        "id": "y10-15c-q5a",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "What is the probability that there was 1 person in a car?",
        "a": "2/5",
        "solutionSteps": [
          {
            "explanation": "Find the number of cars containing 1 person and the total number of cars.",
            "workingOut": "\\text{1-person cars} = 40, \\quad \\text{Total} = 100"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P = \\frac{40}{100} = \\frac{2}{5}"
          }
        ]
      },
      {
        "id": "y10-15c-q5b",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "What is the probability that there was more than 2 people in a car?",
        "a": "3/10",
        "solutionSteps": [
          {
            "explanation": "Sum the number of cars containing 3, 4, or 5 people.",
            "workingOut": "\\text{Cars} = 20 + 8 + 2 = 30"
          },
          {
            "explanation": "Divide by the total and simplify.",
            "workingOut": "P = \\frac{30}{100} = \\frac{3}{10}"
          }
        ]
      },
      {
        "id": "y10-15c-q5c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "What is the probability that there were less than 2 people in a car given that there were less than 4 people in the car?",
        "a": "4/9",
        "solutionSteps": [
          {
            "explanation": "Count the number of cars containing less than 4 people (1, 2, or 3 people).",
            "workingOut": "\\text{Cars} = 40 + 30 + 20 = 90"
          },
          {
            "explanation": "Within this group, count the number of cars with less than 2 people (1 person).",
            "workingOut": "\\text{Favourable cars} = 40"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P = \\frac{40}{90} = \\frac{4}{9}"
          }
        ]
      },
      {
        "id": "y10-15c-q5d",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "What is the probability that there were 4 people in a car given that there were more than 2 people in the car?",
        "a": "4/15",
        "solutionSteps": [
          {
            "explanation": "Count the number of cars with more than 2 people (3, 4, or 5 people).",
            "workingOut": "\\text{Cars} = 20 + 8 + 2 = 30"
          },
          {
            "explanation": "Find the number of cars in this subset that contain exactly 4 people.",
            "workingOut": "\\text{Favourable} = 8"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P = \\frac{8}{30} = \\frac{4}{15}"
          }
        ]
      }
    ],
    "t": "Conditional probability"
  },
  // Q6
  {
    "id": "y10-15c-q6",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A group of 1000 people were surveyed about candidate preferences:\n18-25 yrs: Candidate A (200), Candidate B (250), No pref (50)\n26-40 yrs: Candidate A (100), Candidate B (220), No pref (30)\nOver 40 yrs: Candidate A (90), Candidate B (40), No pref (20)\nFind the probability that a person chosen at random prefers Candidate B given that they are in the 26-40 age group.",
    "a": "22/51",
    "subQuestions": [
      {
        "id": "y10-15c-q6a",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "is from the 26-40 age group?",
        "a": "7/20",
        "solutionSteps": [
          {
            "explanation": "Find the total number of people in the 26-40 age group.",
            "workingOut": "\\text{Age 26-40} = 100 + 220 + 30 = 350"
          },
          {
            "explanation": "Divide by the total number of surveyed voters (1000).",
            "workingOut": "P = \\frac{350}{1000} = \\frac{7}{20}"
          }
        ]
      },
      {
        "id": "y10-15c-q6b",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "prefers Candidate A?",
        "a": "39/100",
        "solutionSteps": [
          {
            "explanation": "Sum the preferences for Candidate A across all age groups.",
            "workingOut": "\\text{Candidate A total} = 200 + 100 + 90 = 390"
          },
          {
            "explanation": "Divide by 1000.",
            "workingOut": "P = \\frac{390}{1000} = \\frac{39}{100}"
          }
        ]
      },
      {
        "id": "y10-15c-q6c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "is from 26-40 age group given that they prefer Candidate B?",
        "a": "22/51",
        "solutionSteps": [
          {
            "explanation": "Sum the total preferences for Candidate B.",
            "workingOut": "\\text{Candidate B total} = 250 + 220 + 40 = 510"
          },
          {
            "explanation": "Identify the number of Candidate B supporters in the 26-40 group.",
            "workingOut": "\\text{Count} = 220"
          },
          {
            "explanation": "Find the probability.",
            "workingOut": "P = \\frac{220}{510} = \\frac{22}{51}"
          }
        ]
      },
      {
        "id": "y10-15c-q6d",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "prefers Candidate A given that they are in the 18-25 years age group?",
        "a": "2/5",
        "solutionSteps": [
          {
            "explanation": "Determine the total count in the 18-25 age group.",
            "workingOut": "\\text{Total 18-25} = 500"
          },
          {
            "explanation": "Find how many in this group prefer Candidate A.",
            "workingOut": "\\text{Count} = 200"
          },
          {
            "explanation": "Find the conditional probability.",
            "workingOut": "P = \\frac{200}{500} = \\frac{2}{5}"
          }
        ]
      }
    ],
    "t": "Conditional probability"
  },
  // Q7
  {
    "id": "y10-15c-q7",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "At a concert, a prize winner is chosen randomly from different age groups: 0-5 (20 people), 6-11 (130 people), 12-18 (300 people), 19-29 (400 people), 30-40 (100 people), Older than 40 (50 people). Total is 1000.",
    "a": "19/20",
    "subQuestions": [
      {
        "id": "y10-15c-q7a",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "What is the probability that the winner is 40 or less?",
        "a": "19/20",
        "solutionSteps": [
          {
            "explanation": "Sum the number of people in the age groups up to 40.",
            "workingOut": "\\text{People} = 20 + 130 + 300 + 400 + 100 = 950"
          },
          {
            "explanation": "Divide by the total population (1000) and simplify.",
            "workingOut": "P = \\frac{950}{1000} = \\frac{19}{20}"
          }
        ]
      },
      {
        "id": "y10-15c-q7b",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "What is the probability that the winner is between 12 and 29?",
        "a": "7/10",
        "solutionSteps": [
          {
            "explanation": "Sum the population of age groups 12-18 and 19-29.",
            "workingOut": "\\text{People} = 300 + 400 = 700"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P = \\frac{700}{1000} = \\frac{7}{10}"
          }
        ]
      },
      {
        "id": "y10-15c-q7c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "What is the probability that the winner is older than 11?",
        "a": "17/20",
        "solutionSteps": [
          {
            "explanation": "Sum all groups except 0-5 and 6-11.",
            "workingOut": "\\text{People} = 300 + 400 + 100 + 50 = 850"
          },
          {
            "explanation": "Calculate probability.",
            "workingOut": "P = \\frac{850}{1000} = \\frac{17}{20}"
          }
        ]
      },
      {
        "id": "y10-15c-q7d",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "What is the probability that the winner is older than 18 given they are older than 11?",
        "a": "11/17",
        "solutionSteps": [
          {
            "explanation": "Identify the total population older than 11.",
            "workingOut": "\\text{Older than 11} = 850"
          },
          {
            "explanation": "Count how many in this group are older than 18 (groups 19-29, 30-40, and older than 40).",
            "workingOut": "\\text{Older than 18} = 400 + 100 + 50 = 550"
          },
          {
            "explanation": "Calculate the conditional probability.",
            "workingOut": "P = \\frac{550}{850} = \\frac{11}{17}"
          }
        ]
      },
      {
        "id": "y10-15c-q7e",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "What is the probability that the winner is 29 or less given they are 40 or less?",
        "a": "17/19",
        "solutionSteps": [
          {
            "explanation": "Determine the population size of the group 40 or less.",
            "workingOut": "\\text{40 or less} = 950"
          },
          {
            "explanation": "Identify how many of those are 29 or less (groups 0-5, 6-11, 12-18, 19-29).",
            "workingOut": "\\text{29 or less} = 20 + 130 + 300 + 400 = 850"
          },
          {
            "explanation": "Find the conditional probability.",
            "workingOut": "P = \\frac{850}{950} = \\frac{17}{19}"
          }
        ]
      }
    ],
    "t": "Conditional probability"
  },
  // Q8
  {
    "id": "y10-15c-q8",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Two friends roll two dice and record: outcome = absolute difference (or 0 if equal). Chloe wins if difference is less than 4.",
    "a": "5/6",
    "subQuestions": [
      {
        "id": "y10-15c-q8a",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Complete the table of differences.",
        "a": "Grid: Row 1 is 0,1,2,3,4,5. Row 2 is 1,0,1,2,3,4. Row 3 is 2,1,0,1,2,3. Row 4 is 3,2,1,0,1,2. Row 5 is 4,3,2,1,0,1. Row 6 is 5,4,3,2,1,0.",
        "solution": "The subtraction difference grid is symmetric with 0 on the main diagonal:\n\\(\\begin{array}{c|cccccc} & 1 & 2 & 3 & 4 & 5 & 6 \\\\ \\hline 1 & 0 & 1 & 2 & 3 & 4 & 5 \\\\ 2 & 1 & 0 & 1 & 2 & 3 & 4 \\\\ 3 & 2 & 1 & 0 & 1 & 2 & 3 \\\\ 4 & 3 & 2 & 1 & 0 & 1 & 2 \\\\ 5 & 4 & 3 & 2 & 1 & 0 & 1 \\\\ 6 & 5 & 4 & 3 & 2 & 1 & 0 \\end{array}\\)",
        "solutionSteps": [
          {
            "explanation": "Calculate the absolute difference between the numbers on the two dice.",
            "workingOut": "\\text{difference} = |\\text{Die 1} - \\text{Die 2}|"
          }
        ]
      },
      {
        "id": "y10-15c-q8b",
        "type": "teacher_review",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Draw up a table giving the outcomes of the experiment and their probabilities.",
        "a": "Diff 0: 1/6, Diff 1: 5/18, Diff 2: 2/9, Diff 3: 1/6, Diff 4: 1/9, Diff 5: 1/18",
        "solution": "Outcomes and probabilities:\n- Difference 0: 6/36 = 1/6\n- Difference 1: 10/36 = 5/18\n- Difference 2: 8/36 = 2/9\n- Difference 3: 6/36 = 1/6\n- Difference 4: 4/36 = 1/9\n- Difference 5: 2/36 = 1/18",
        "solutionSteps": [
          {
            "explanation": "Count occurrences of each difference value in the 6 by 6 grid.",
            "workingOut": "\\begin{aligned} 0: &\\quad 6 \\; \\text{times} \\\\ 1: &\\quad 10 \\; \\text{times} \\\\ 2: &\\quad 8 \\; \\text{times} \\\\ 3: &\\quad 6 \\; \\text{times} \\\\ 4: &\\quad 4 \\; \\text{times} \\\\ 5: &\\quad 2 \\; \\text{times} \\end{aligned}"
          }
        ]
      },
      {
        "id": "y10-15c-q8c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that Chloe wins.",
        "a": "5/6",
        "solutionSteps": [
          {
            "explanation": "Chloe wins if the difference is less than 4 (0, 1, 2, or 3).",
            "workingOut": "\\text{Count} = 6 + 10 + 8 + 6 = 30"
          },
          {
            "explanation": "Divide by 36.",
            "workingOut": "P = \\frac{30}{36} = \\frac{5}{6}"
          }
        ]
      },
      {
        "id": "y10-15c-q8d",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that Zoe wins.",
        "a": "1/6",
        "solutionSteps": [
          {
            "explanation": "Zoe wins if Chloe loses, which is the complement event.",
            "workingOut": "P = 1 - P(\\text{Chloe}) = 1 - \\frac{5}{6} = \\frac{1}{6}"
          }
        ]
      },
      {
        "id": "y10-15c-q8e",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that Chloe wins given that the difference is less than 5.",
        "a": "15/17",
        "solutionSteps": [
          {
            "explanation": "Identify the count of outcomes where the difference is less than 5.",
            "workingOut": "\\text{Count} = 36 - 2\\;\\text{(difference of 5)} = 34"
          },
          {
            "explanation": "Find the number of winning outcomes within this subset.",
            "workingOut": "\\text{Favourable} = 30"
          },
          {
            "explanation": "Find probability.",
            "workingOut": "P = \\frac{30}{34} = \\frac{15}{17}"
          }
        ]
      },
      {
        "id": "y10-15c-q8f",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability of Zoe winning given that the difference is less than 5.",
        "a": "2/17",
        "solutionSteps": [
          {
            "explanation": "Determine the conditional probability. Given space is 34. Zoe wins only on difference of 4.",
            "workingOut": "\\text{Favourable} = 4"
          },
          {
            "explanation": "Calculate probability.",
            "workingOut": "P = \\frac{4}{34} = \\frac{2}{17}"
          }
        ]
      }
    ],
    "t": "Conditional probability"
  },
  // Q9
  {
    "id": "y10-15c-q9",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "An urn contains 30 marbles numbered from 1 to 30. A marble is drawn from the urn.",
    "a": "1/15",
    "subQuestions": [
      {
        "id": "y10-15c-q9a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability that the marble numbered 5 is drawn given that it is odd?",
        "a": "1/15",
        "solutionSteps": [
          {
            "explanation": "List all odd numbers in the range 1 to 30.",
            "workingOut": "\\text{Odd numbers} = \\{1, 3, 5, \\dots, 29\\} \\implies 15 \\; \\text{numbers}"
          },
          {
            "explanation": "Identify the number of favourable outcomes (the number 5).",
            "workingOut": "\\text{Favourable} = \\{5\\} \\implies 1 \\; \\text{number}"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P = \\frac{1}{15}"
          }
        ]
      },
      {
        "id": "y10-15c-q9b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability that a marble with a number less than 12 is drawn given that it is less than 24?",
        "a": "11/23",
        "solutionSteps": [
          {
            "explanation": "Identify the given condition: numbers less than 24.",
            "workingOut": "\\text{Condition set} = \\{1, 2, \\dots, 23\\} \\implies 23 \\; \\text{numbers}"
          },
          {
            "explanation": "Identify which of these are less than 12.",
            "workingOut": "\\text{Favourable} = \\{1, 2, \\dots, 11\\} \\implies 11 \\; \\text{numbers}"
          },
          {
            "explanation": "Calculate the conditional probability.",
            "workingOut": "P = \\frac{11}{23}"
          }
        ]
      },
      {
        "id": "y10-15c-q9c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability that a marble with a number greater than 12 is drawn given that it is greater than 6?",
        "a": "3/4",
        "solutionSteps": [
          {
            "explanation": "Count how many numbers are greater than 6.",
            "workingOut": "\\text{Condition set} = \\{7, 8, \\dots, 30\\} \\implies 24 \\; \\text{numbers}"
          },
          {
            "explanation": "Identify numbers in this set that are greater than 12.",
            "workingOut": "\\text{Favourable} = \\{13, 14, \\dots, 30\\} \\implies 18 \\; \\text{numbers}"
          },
          {
            "explanation": "Calculate and simplify.",
            "workingOut": "P = \\frac{18}{24} = \\frac{3}{4}"
          }
        ]
      },
      {
        "id": "y10-15c-q9d",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability that a marble with a number greater than 12 is drawn given that it is less than 24?",
        "a": "11/23",
        "solutionSteps": [
          {
            "explanation": "Determine the condition set: numbers less than 24.",
            "workingOut": "\\text{Condition set} = 23 \\; \\text{numbers}"
          },
          {
            "explanation": "Find numbers in this group that are greater than 12.",
            "workingOut": "\\text{Favourable} = \\{13, 14, \\dots, 23\\} \\implies 11 \\; \\text{numbers}"
          },
          {
            "explanation": "Calculate.",
            "workingOut": "P = \\frac{11}{23}"
          }
        ]
      },
      {
        "id": "y10-15c-q9e",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability that a marble with a number divisible by 8 is drawn given that it is divisible by 4?",
        "a": "3/7",
        "solutionSteps": [
          {
            "explanation": "List all numbers from 1 to 30 that are divisible by 4.",
            "workingOut": "\\text{Divisible by 4} = \\{4, 8, 12, 16, 20, 24, 28\\} \\implies 7 \\; \\text{numbers}"
          },
          {
            "explanation": "Identify which of these numbers are also divisible by 8.",
            "workingOut": "\\text{Divisible by 8} = \\{8, 16, 24\\} \\implies 3 \\; \\text{numbers}"
          },
          {
            "explanation": "Calculate.",
            "workingOut": "P = \\frac{3}{7}"
          }
        ]
      }
    ],
    "t": "Conditional probability"
  },
  // Q10
  {
    "id": "y10-15c-q10",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a group of 90 people, 40 own a laptop, 35 own a tablet, and 30 own a console. In addition, 8 own both a laptop and a tablet, 10 own both a tablet and a console, 7 own both a console and a laptop, and 3 own all three items.",
    "a": "8/35",
    "subQuestions": [
      {
        "id": "y10-15c-q10a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability that a person selected at random owns a laptop given that they own a tablet?",
        "a": "8/35",
        "solutionSteps": [
          {
            "explanation": "Determine the number of people who own a tablet (this is the given set).",
            "workingOut": "\\text{Tablet owners} = 35"
          },
          {
            "explanation": "Find the number of tablet owners who also own a laptop.",
            "workingOut": "\\text{Laptop and Tablet} = 8"
          },
          {
            "explanation": "Find the probability.",
            "workingOut": "P = \\frac{8}{35}"
          }
        ]
      },
      {
        "id": "y10-15c-q10b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability that a person selected at random owns a console given that they own a tablet?",
        "a": "2/7",
        "solutionSteps": [
          {
            "explanation": "Determine the number of people who own a tablet.",
            "workingOut": "\\text{Tablet owners} = 35"
          },
          {
            "explanation": "Identify the number of tablet owners who also own a console.",
            "workingOut": "\\text{Console and Tablet} = 10"
          },
          {
            "explanation": "Calculate and simplify.",
            "workingOut": "P = \\frac{10}{35} = \\frac{2}{7}"
          }
        ]
      },
      {
        "id": "y10-15c-q10c",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "What is the probability that a person selected at random owns a console given that they own a tablet and a laptop?",
        "a": "3/8",
        "solutionSteps": [
          {
            "explanation": "Determine the number of people who own both a tablet and a laptop.",
            "workingOut": "\\text{Tablet and Laptop} = 8"
          },
          {
            "explanation": "Find how many of these people also own a console (ownership of all three).",
            "workingOut": "\\text{All three} = 3"
          },
          {
            "explanation": "Calculate the conditional probability.",
            "workingOut": "P = \\frac{3}{8}"
          }
        ]
      }
    ],
    "t": "Conditional probability"
  },
  // Q11
  {
    "id": "y10-15c-q11",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given that for two events \\(A\\) and \\(B\\), \\(P(A) = 0.4\\), \\(P(B) = 0.5\\), and \\(P(A \\cup B) = 0.7\\).",
    "a": "0.4",
    "subQuestions": [
      {
        "id": "y10-15c-q11a",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find \\(P(A \\mid B)\\).",
        "a": "0.4",
        "solutionSteps": [
          {
            "explanation": "Use the addition rule to find the probability of the intersection \\(P(A \\cap B)\\).",
            "workingOut": "P(A \\cap B) = P(A) + P(B) - P(A \\cup B)"
          },
          {
            "explanation": "Substitute the given values into the formula.",
            "workingOut": "P(A \\cap B) = 0.4 + 0.5 - 0.7 = 0.2"
          },
          {
            "explanation": "Apply the conditional probability formula \\(P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}\\).",
            "workingOut": "P(A \\mid B) = \\frac{0.2}{0.5} = 0.4"
          }
        ]
      },
      {
        "id": "y10-15c-q11b",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find \\(P(B \\mid A)\\).",
        "a": "0.5",
        "solutionSteps": [
          {
            "explanation": "Apply the conditional probability formula \\(P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)}\\).",
            "workingOut": "P(B \\mid A) = \\frac{0.2}{0.4} = 0.5"
          }
        ]
      }
    ],
    "t": "Conditional probability"
  },
  // Q12
  {
    "id": "y10-15c-q12",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "Given that for two events \\(A\\) and \\(B\\), \\(P(B) = 0.6\\), \\(P(A \\mid B) = 0.3\\), and \\(P(A \\cup B) = 0.8\\). Find \\(P(A)\\).",
    "a": "0.38",
    "solutionSteps": [
      {
        "explanation": "Use the conditional probability formula to find the intersection \\(P(A \\cap B)\\).",
        "workingOut": "P(A \\cap B) = P(A \\mid B) \\times P(B)"
      },
      {
        "explanation": "Substitute the values.",
        "workingOut": "P(A \\cap B) = 0.3 \\times 0.6 = 0.18"
      },
      {
        "explanation": "Apply the addition rule of probability: \\(P(A \\cup B) = P(A) + P(B) - P(A \\cap B)\\).",
        "workingOut": "0.8 = P(A) + 0.6 - 0.18"
      },
      {
        "explanation": "Solve for \\(P(A)\\).",
        "workingOut": "0.8 = P(A) + 0.42 \\implies P(A) = 0.8 - 0.42 = 0.38"
      }
    ],
    "t": "Conditional probability"
  }
];
