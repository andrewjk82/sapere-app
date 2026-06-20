export const Y10_CH15B_QUESTIONS = [
  // Q1
  {
    "id": "y10-15b-q1",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A number is chosen at random from the first 20 positive whole numbers. What is the probability that it is not a prime number?",
    "a": "3/5",
    "solutionSteps": [
      {
        "explanation": "List all the prime numbers up to 20.",
        "workingOut": "\\text{Prime numbers} = {2, 3, 5, 7, 11, 13, 17, 19} \\implies 8 \\; \\text{numbers}"
      },
      {
        "explanation": "Find the number of non-prime numbers by subtracting the count of primes from the total.",
        "workingOut": "\\text{Non-prime numbers} = 20 - 8 = 12 \\; \\text{numbers}"
      },
      {
        "explanation": "Calculate the probability and simplify the fraction.",
        "workingOut": "P(\\text{not prime}) = \\frac{12}{20} = \\frac{3}{5}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q2
  {
    "id": "y10-15b-q2",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from an ordinary pack of 52 playing cards. What is the probability that it is not an Ace?",
    "a": "12/13",
    "solutionSteps": [
      {
        "explanation": "Identify the number of Aces in a standard deck of 52 cards.",
        "workingOut": "\\text{Number of Aces} = 4"
      },
      {
        "explanation": "Find the number of cards that are not Aces.",
        "workingOut": "\\text{Non-Aces} = 52 - 4 = 48"
      },
      {
        "explanation": "Calculate the probability and simplify.",
        "workingOut": "P(\\text{not Ace}) = \\frac{48}{52} = \\frac{12}{13}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q3
  {
    "id": "y10-15b-q3",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A number is chosen at random from the first 40 positive whole numbers. What is the probability that it is not divisible by 6?",
    "a": "17/20",
    "solutionSteps": [
      {
        "explanation": "Count how many numbers up to 40 are divisible by 6.",
        "workingOut": "\\text{Divisible by 6} = {6, 12, 18, 24, 30, 36} \\implies 6 \\; \\text{numbers}"
      },
      {
        "explanation": "Determine the count of numbers that are not divisible by 6.",
        "workingOut": "\\text{Not divisible by 6} = 40 - 6 = 34 \\; \\text{numbers}"
      },
      {
        "explanation": "Compute the probability and write in simplest form.",
        "workingOut": "P = \\frac{34}{40} = \\frac{17}{20}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q4
  {
    "id": "y10-15b-q4",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "In a raffle, 500 tickets are sold. If you buy 15 tickets, what is the probability that you will not win first prize?",
    "a": "97/100",
    "solutionSteps": [
      {
        "explanation": "Identify the probability that one of your tickets wins the single first prize.",
        "workingOut": "P(\\text{win}) = \\frac{15}{500} = \\frac{3}{100}"
      },
      {
        "explanation": "Use the complement rule to find the probability of not winning.",
        "workingOut": "P(\\text{not win}) = 1 - P(\\text{win}) = 1 - \\frac{3}{100}"
      },
      {
        "explanation": "Evaluate the subtraction.",
        "workingOut": "= \\frac{97}{100}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q5
  {
    "id": "y10-15b-q5",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A letter is chosen at random from the 11 letters of the word PROBABILITY.",
    "a": "2/11",
    "subQuestions": [
      {
        "id": "y10-15b-q5a",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that the letter is B.",
        "a": "2/11",
        "solutionSteps": [
          {
            "explanation": "Count the occurrences of 'B' in 'PROBABILITY' and the total number of letters.",
            "workingOut": "\\text{Count of B} = 2, \\quad \\text{Total letters} = 11"
          },
          {
            "explanation": "Calculate probability.",
            "workingOut": "P(B) = \\frac{2}{11}"
          }
        ]
      },
      {
        "id": "y10-15b-q5b",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that the letter is I.",
        "a": "2/11",
        "solutionSteps": [
          {
            "explanation": "Count the occurrences of 'I' in 'PROBABILITY'.",
            "workingOut": "\\text{Count of I} = 2"
          },
          {
            "explanation": "Calculate probability.",
            "workingOut": "P(I) = \\frac{2}{11}"
          }
        ]
      },
      {
        "id": "y10-15b-q5c",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that the letter is a vowel.",
        "a": "4/11",
        "solutionSteps": [
          {
            "explanation": "Identify and count all vowels (O, A, I, I) in 'PROBABILITY'.",
            "workingOut": "\\text{Vowels} = {O, A, I, I} \\implies 4 \\; \\text{letters}"
          },
          {
            "explanation": "Find probability.",
            "workingOut": "P(\\text{vowel}) = \\frac{4}{11}"
          }
        ]
      },
      {
        "id": "y10-15b-q5d",
        "type": "short_answer",
        "difficulty": "easy",
        "timeLimit": 60,
        "question": "Find the probability that the letter is not B.",
        "a": "9/11",
        "solutionSteps": [
          {
            "explanation": "Use the complement rule to find the probability of not getting B.",
            "workingOut": "P(\\text{not B}) = 1 - P(B) = 1 - \\frac{2}{11}"
          },
          {
            "explanation": "Evaluate.",
            "workingOut": "= \\frac{9}{11}"
          }
        ]
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q6a
  {
    "id": "y10-15b-q6a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a pack of 52 playing cards. Find the probability that the card chosen is a Spade.",
    "a": "1/4",
    "solutionSteps": [
      {
        "explanation": "Determine the number of Spades in a standard deck of cards.",
        "workingOut": "\\text{Spades} = 13"
      },
      {
        "explanation": "Divide by the total number of cards and simplify.",
        "workingOut": "P(\\text{Spade}) = \\frac{13}{52} = \\frac{1}{4}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q6b
  {
    "id": "y10-15b-q6b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a pack of 52 playing cards. Find the probability that the card chosen is a court card (i.e. an Ace, King, Queen or Jack).",
    "a": "4/13",
    "solutionSteps": [
      {
        "explanation": "Calculate the total number of court cards. There are 4 court card ranks (Ace, King, Queen, Jack) and 4 suits.",
        "workingOut": "\\text{Court cards} = 4 \\times 4 = 16"
      },
      {
        "explanation": "Divide by the total cards and simplify.",
        "workingOut": "P(\\text{court card}) = \\frac{16}{52} = \\frac{4}{13}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q6c
  {
    "id": "y10-15b-q6c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a pack of 52 playing cards. Find the probability that the card chosen is a Spade and a court card.",
    "a": "1/13",
    "solutionSteps": [
      {
        "explanation": "Identify the cards that are both Spades and court cards (Ace of Spades, King of Spades, Queen of Spades, Jack of Spades).",
        "workingOut": "\\text{Favourable cards} = 4"
      },
      {
        "explanation": "Calculate probability.",
        "workingOut": "P = \\frac{4}{52} = \\frac{1}{13}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q6d
  {
    "id": "y10-15b-q6d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a pack of 52 playing cards. Find the probability that the card chosen is a Spade or a court card.",
    "a": "25/52",
    "solutionSteps": [
      {
        "explanation": "Apply the union probability formula: \\(P(S \\cup C) = P(S) + P(C) - P(S \\cap C)\\).",
        "workingOut": "P(\\text{Spade} \\cup \\text{court}) = \\frac{13}{52} + \\frac{16}{52} - \\frac{4}{52}"
      },
      {
        "explanation": "Combine the fractions.",
        "workingOut": "= \\frac{25}{52}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q6e
  {
    "id": "y10-15b-q6e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a pack of 52 playing cards. Find the probability that the card chosen has a face value between 3 and 6 inclusive and is a court card.",
    "a": "0",
    "solutionSteps": [
      {
        "explanation": "Check if any card can satisfy both conditions simultaneously. Cards with face values 3, 4, 5, or 6 are number cards, whereas court cards are Ace, King, Queen, or Jack. These sets are mutually exclusive.",
        "workingOut": "\\text{Intersection} = 0"
      },
      {
        "explanation": "State the probability.",
        "workingOut": "P = 0"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q6f
  {
    "id": "y10-15b-q6f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a pack of 52 playing cards. Find the probability that the card chosen has a face value between 3 and 6 inclusive or is a court card.",
    "a": "8/13",
    "solutionSteps": [
      {
        "explanation": "Find the size of each disjoint set. Number cards from 3 to 6: 4 ranks * 4 suits = 16 cards. Court cards: 16 cards.",
        "workingOut": "\\text{Total favourable cards} = 16 + 16 = 32"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{32}{52} = \\frac{8}{13}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q7a
  {
    "id": "y10-15b-q7a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A standard six-sided die is rolled. Find the probability that the number obtained is odd and a five.",
    "a": "1/6",
    "solutionSteps": [
      {
        "explanation": "Identify outcomes that are both odd and the number 5.",
        "workingOut": "\\text{Favourable outcome} = {5} \\implies 1 \\; \\text{outcome}"
      },
      {
        "explanation": "Calculate the probability.",
        "workingOut": "P = \\frac{1}{6}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q7b
  {
    "id": "y10-15b-q7b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A standard six-sided die is rolled. Find the probability that the number obtained is odd or a five.",
    "a": "1/2",
    "solutionSteps": [
      {
        "explanation": "Find the union of the set of odd numbers \\({1, 3, 5}\\) and the set containing five \\({5}\\).",
        "workingOut": "\\text{Union set} = {1, 3, 5}"
      },
      {
        "explanation": "Count outcomes and find the probability.",
        "workingOut": "P = \\frac{3}{6} = \\frac{1}{2}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q7c
  {
    "id": "y10-15b-q7c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A standard six-sided die is rolled. Find the probability that the number obtained is greater than or equal to three and a five.",
    "a": "1/6",
    "solutionSteps": [
      {
        "explanation": "Find the intersection of numbers greater than or equal to three \\({3, 4, 5, 6}\\) and the number five \\({5}\\).",
        "workingOut": "\\text{Intersection} = {5}"
      },
      {
        "explanation": "Compute probability.",
        "workingOut": "P = \\frac{1}{6}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q7d
  {
    "id": "y10-15b-q7d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A standard six-sided die is rolled. Find the probability that the number obtained is greater than or equal to four or a five.",
    "a": "1/2",
    "solutionSteps": [
      {
        "explanation": "Find the union of numbers greater than or equal to four \\({4, 5, 6}\\) and five \\({5}\\).",
        "workingOut": "\\text{Union} = {4, 5, 6}"
      },
      {
        "explanation": "Determine probability.",
        "workingOut": "P = \\frac{3}{6} = \\frac{1}{2}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q7e
  {
    "id": "y10-15b-q7e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A standard six-sided die is rolled. Find the probability that the number obtained is odd and greater than or equal to three.",
    "a": "1/3",
    "solutionSteps": [
      {
        "explanation": "Identify numbers that are odd \\({1, 3, 5}\\) and greater than or equal to three \\({3, 4, 5, 6}\\).",
        "workingOut": "\\text{Intersection} = {3, 5}"
      },
      {
        "explanation": "Calculate probability.",
        "workingOut": "P = \\frac{2}{6} = \\frac{1}{3}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q7f
  {
    "id": "y10-15b-q7f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A standard six-sided die is rolled. Find the probability that the number obtained is even or greater than or equal to four.",
    "a": "2/3",
    "solutionSteps": [
      {
        "explanation": "Identify numbers that are even \\({2, 4, 6}\\) or greater than or equal to four \\({4, 5, 6}\\).",
        "workingOut": "\\text{Union} = {2, 4, 5, 6}"
      },
      {
        "explanation": "Find the probability.",
        "workingOut": "P = \\frac{4}{6} = \\frac{2}{3}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q8a
  {
    "id": "y10-15b-q8a",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A survey of 200 people records hair and eye colour details: Blue eyes (Fair 20, Brown 12, Red 8, Black 20), Brown eyes (Fair 18, Brown 20, Red 15, Black 22), Green eyes (Fair 12, Brown 18, Red 20, Black 15). Find the probability that a person chosen at random has blue eyes.",
    "a": "3/10",
    "solutionSteps": [
      {
        "explanation": "Sum the number of people with blue eyes.",
        "workingOut": "\\text{Blue eyes} = 20 + 12 + 8 + 20 = 60"
      },
      {
        "explanation": "Divide by the total number of people in the survey.",
        "workingOut": "P(\\text{blue eyes}) = \\frac{60}{200} = \\frac{3}{10}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q8b
  {
    "id": "y10-15b-q8b",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "From the same group of 200 people, find the probability that a person chosen at random has red hair.",
    "a": "43/200",
    "solutionSteps": [
      {
        "explanation": "Sum the number of people across all eye colours who have red hair.",
        "workingOut": "\\text{Red hair} = 8 + 15 + 20 = 43"
      },
      {
        "explanation": "Divide by the total surveyed population.",
        "workingOut": "P(\\text{red hair}) = \\frac{43}{200}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q8c
  {
    "id": "y10-15b-q8c",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "From the same group of 200 people, find the probability that a person chosen at random has fair or brown hair.",
    "a": "1/2",
    "solutionSteps": [
      {
        "explanation": "Sum the total number of people with fair hair and the total with brown hair.",
        "workingOut": "\\text{Fair hair} = 20+18+12 = 50, \\quad \\text{Brown hair} = 12+20+18 = 50"
      },
      {
        "explanation": "Add the counts together.",
        "workingOut": "\\text{Total} = 50 + 50 = 100"
      },
      {
        "explanation": "Find the probability.",
        "workingOut": "P = \\frac{100}{200} = \\frac{1}{2}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q8d
  {
    "id": "y10-15b-q8d",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "From the same group of 200 people, find the probability that a person chosen at random has blue or brown eyes.",
    "a": "27/40",
    "solutionSteps": [
      {
        "explanation": "Sum the counts for blue eyes and brown eyes.",
        "workingOut": "\\text{Blue eyes} = 60, \\quad \\text{Brown eyes} = 18 + 20 + 15 + 22 = 75"
      },
      {
        "explanation": "Add the counts together.",
        "workingOut": "\\text{Total} = 60 + 75 = 135"
      },
      {
        "explanation": "Calculate and simplify.",
        "workingOut": "P = \\frac{135}{200} = \\frac{27}{40}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q8e
  {
    "id": "y10-15b-q8e",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "From the same group of 200 people, find the probability that a person chosen at random has red hair and green eyes.",
    "a": "1/10",
    "solutionSteps": [
      {
        "explanation": "Find the cell in the survey grid corresponding to red hair and green eyes.",
        "workingOut": "\\text{Red hair and Green eyes} = 20"
      },
      {
        "explanation": "Calculate and simplify.",
        "workingOut": "P = \\frac{20}{200} = \\frac{1}{10}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q8f
  {
    "id": "y10-15b-q8f",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "From the same group of 200 people, find the probability that a person chosen at random has eyes that are not green.",
    "a": "27/40",
    "solutionSteps": [
      {
        "explanation": "Find the number of people who do not have green eyes using the complement rule.",
        "workingOut": "\\text{Total green eyes} = 12 + 18 + 20 + 15 = 65"
      },
      {
        "explanation": "Subtract from the total.",
        "workingOut": "\\text{Not green eyes} = 200 - 65 = 135"
      },
      {
        "explanation": "Calculate the probability.",
        "workingOut": "P = \\frac{135}{200} = \\frac{27}{40}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q8g
  {
    "id": "y10-15b-q8g",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "From the same group of 200 people, find the probability that a person chosen at random has hair that is not red.",
    "a": "157/200",
    "solutionSteps": [
      {
        "explanation": "Calculate the total number of people who have red hair.",
        "workingOut": "\\text{Red hair} = 8 + 15 + 20 = 43"
      },
      {
        "explanation": "Apply the complement rule to find the number of people who do not have red hair.",
        "workingOut": "\\text{Not red hair} = 200 - 43 = 157"
      },
      {
        "explanation": "Compute the probability.",
        "workingOut": "P = \\frac{157}{200}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q8h
  {
    "id": "y10-15b-q8h",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "From the same group of 200 people, find the probability that a person chosen at random has fair hair and blue eyes.",
    "a": "1/10",
    "solutionSteps": [
      {
        "explanation": "Locate the intersection cell for fair hair and blue eyes in the survey table.",
        "workingOut": "\\text{Fair hair and blue eyes} = 20"
      },
      {
        "explanation": "Divide by the total and simplify.",
        "workingOut": "P = \\frac{20}{200} = \\frac{1}{10}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q8i
  {
    "id": "y10-15b-q8i",
    "type": "short_answer",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "From the same group of 200 people, find the probability that a person chosen at random has eyes that are not blue or hair that is not fair.",
    "a": "9/10",
    "solutionSteps": [
      {
        "explanation": "Recognise that the event 'not blue eyes or not fair hair' is the complement of the event 'blue eyes and fair hair'.",
        "workingOut": "P(\\text{not blue} \\cup \\text{not fair}) = 1 - P(\\text{blue} \\cap \\text{fair})"
      },
      {
        "explanation": "Use the value of \\(P(\\text{blue} \\cap \\text{fair})\\) which was found to be \\(\\frac{20}{200}\\).",
        "workingOut": "= 1 - \\frac{20}{200}"
      },
      {
        "explanation": "Evaluate the subtraction.",
        "workingOut": "= 1 - \\frac{1}{10} = \\frac{9}{10}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q9
  {
    "id": "y10-15b-q9",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a group of 120 students, 70 study Chemistry, 80 study Biology, and 40 study both Chemistry and Biology.",
    "a": "1/4",
    "subQuestions": [
      {
        "id": "y10-15b-q9a",
        "type": "teacher_review",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Draw a Venn diagram representing this information.",
        "a": "Venn: Chemistry only = 30, Biology only = 40, Both = 40, Neither = 10",
        "solution": "A Venn diagram with two overlapping circles labeled 'Chemistry' and 'Biology'. The intersection contains 40. The Chemistry-only region contains 30 (70 - 40). The Biology-only region contains 40 (80 - 40). The region outside both circles contains 10 (120 - 30 - 40 - 40).",
        "solutionSteps": [
          {
            "explanation": "Start by putting the number of students who study both subjects in the overlap region.",
            "workingOut": "\\text{Chemistry} \\cap \\text{Biology} = 40"
          },
          {
            "explanation": "Calculate those studying only Chemistry and only Biology.",
            "workingOut": "\\text{Chemistry only} = 70 - 40 = 30, \\quad \\text{Biology only} = 80 - 40 = 40"
          },
          {
            "explanation": "Calculate those studying neither by subtracting all other regions from the total of 120.",
            "workingOut": "\\text{Neither} = 120 - (30 + 40 + 40) = 10"
          }
        ]
      },
      {
        "id": "y10-15b-q9bi",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the probability that a student selected at random studies Chemistry but not Biology.",
        "a": "1/4",
        "solutionSteps": [
          {
            "explanation": "Identify the number of students in the 'Chemistry only' region of the Venn diagram.",
            "workingOut": "\\text{Chemistry but not Biology} = 30"
          },
          {
            "explanation": "Divide by the total number of students and simplify.",
            "workingOut": "P = \\frac{30}{120} = \\frac{1}{4}"
          }
        ]
      },
      {
        "id": "y10-15b-q9bii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the probability that a student selected at random studies Biology but not Chemistry.",
        "a": "1/3",
        "solutionSteps": [
          {
            "explanation": "Identify the number of students in the 'Biology only' region.",
            "workingOut": "\\text{Biology but not Chemistry} = 40"
          },
          {
            "explanation": "Divide by the total and simplify.",
            "workingOut": "P = \\frac{40}{120} = \\frac{1}{3}"
          }
        ]
      },
      {
        "id": "y10-15b-q9biii",
        "type": "short_answer",
        "difficulty": "medium",
        "timeLimit": 90,
        "question": "Find the probability that a student selected at random studies neither Biology nor Chemistry.",
        "a": "1/12",
        "solutionSteps": [
          {
            "explanation": "Identify the number of students in the outer region of the Venn diagram.",
            "workingOut": "\\text{Neither} = 10"
          },
          {
            "explanation": "Calculate the probability.",
            "workingOut": "P = \\frac{10}{120} = \\frac{1}{12}"
          }
        ]
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q10a
  {
    "id": "y10-15b-q10a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a group of 50 students, 35 play basketball and 25 play cricket. Assuming that each of the 50 students plays at least one of these sports, find the probability that a student chosen at random from this group plays both basketball and cricket.",
    "a": "1/5",
    "solutionSteps": [
      {
        "explanation": "Use the principle of inclusion-exclusion: \\(n(B \\cup C) = n(B) + n(C) - n(B \\cap C)\\). Since every student plays at least one sport, \\(n(B \\cup C) = 50\\).",
        "workingOut": "50 = 35 + 25 - n(B \\cap C)"
      },
      {
        "explanation": "Solve for the intersection count.",
        "workingOut": "n(B \\cap C) = 60 - 50 = 10"
      },
      {
        "explanation": "Find the probability.",
        "workingOut": "P = \\frac{10}{50} = \\frac{1}{5}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q10b
  {
    "id": "y10-15b-q10b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a group of 50 students, 35 play basketball and 25 play cricket. Assuming that each student plays at least one of these sports, find the probability that a student chosen at random plays only basketball.",
    "a": "1/2",
    "solutionSteps": [
      {
        "explanation": "Subtract the number of students who play both sports from the total who play basketball.",
        "workingOut": "\\text{Basketball only} = 35 - 10 = 25"
      },
      {
        "explanation": "Calculate the probability.",
        "workingOut": "P = \\frac{25}{50} = \\frac{1}{2}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q10c
  {
    "id": "y10-15b-q10c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a group of 50 students, 35 play basketball and 25 play cricket. Assuming that each student plays at least one of these sports, find the probability that a student chosen at random plays only one sport.",
    "a": "4/5",
    "solutionSteps": [
      {
        "explanation": "Find the number of students playing only one sport: those playing only basketball plus those playing only cricket.",
        "workingOut": "\\text{Cricket only} = 25 - 10 = 15 \\\\ \\text{Only one sport} = 25\\;\\text{(basketball only)} + 15\\;\\text{(cricket only)} = 40"
      },
      {
        "explanation": "Calculate the probability.",
        "workingOut": "P = \\frac{40}{50} = \\frac{4}{5}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q10d
  {
    "id": "y10-15b-q10d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a group of 50 students, 35 play basketball and 25 play cricket. Assuming that each student plays at least one of these sports, find the probability that a student chosen at random plays only cricket.",
    "a": "3/10",
    "solutionSteps": [
      {
        "explanation": "Find the number of students who play only cricket by subtracting the intersection from the total cricket players.",
        "workingOut": "\\text{Cricket only} = 25 - 10 = 15"
      },
      {
        "explanation": "Find the probability.",
        "workingOut": "P = \\frac{15}{50} = \\frac{3}{10}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q11a
  {
    "id": "y10-15b-q11a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a group of 80 students, 40 study French, 50 study German, and 25 study both French and German. Find the probability that a student chosen at random studies French or German.",
    "a": "13/16",
    "solutionSteps": [
      {
        "explanation": "Use the union formula: \\(n(F \\cup G) = n(F) + n(G) - n(F \\cap G)\\).",
        "workingOut": "n(F \\cup G) = 40 + 50 - 25 = 65"
      },
      {
        "explanation": "Find the probability by dividing by 80.",
        "workingOut": "P(F \\cup G) = \\frac{65}{80} = \\frac{13}{16}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q11b
  {
    "id": "y10-15b-q11b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a group of 80 students, 40 study French, 50 study German, and 25 study both. Find the probability that a student chosen at random studies neither French nor German.",
    "a": "3/16",
    "solutionSteps": [
      {
        "explanation": "Use the complement rule: the probability of neither is 1 minus the probability of the union.",
        "workingOut": "P(\\text{neither}) = 1 - P(F \\cup G)"
      },
      {
        "explanation": "Substitute \\(P(F \\cup G) = \\frac{13}{16}\\).",
        "workingOut": "= 1 - \\frac{13}{16} = \\frac{3}{16}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q11c
  {
    "id": "y10-15b-q11c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a group of 80 students, 40 study French, 50 study German, and 25 study both. Find the probability that a student chosen at random studies German but not French.",
    "a": "5/16",
    "solutionSteps": [
      {
        "explanation": "Subtract the intersection count from the total German students.",
        "workingOut": "\\text{German but not French} = 50 - 25 = 25"
      },
      {
        "explanation": "Divide by the total and simplify.",
        "workingOut": "P = \\frac{25}{80} = \\frac{5}{16}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q11d
  {
    "id": "y10-15b-q11d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "In a group of 80 students, 40 study French, 50 study German, and 25 study both. Find the probability that a student chosen at random studies exactly one of French or German.",
    "a": "1/2",
    "solutionSteps": [
      {
        "explanation": "Determine the number of students studying exactly one language.",
        "workingOut": "\\text{French only} = 40 - 25 = 15 \\\\ \\text{German only} = 50 - 25 = 25 \\\\ \\text{Exactly one} = 15 + 25 = 40"
      },
      {
        "explanation": "Divide by the total and simplify.",
        "workingOut": "P = \\frac{40}{80} = \\frac{1}{2}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q12a
  {
    "id": "y10-15b-q12a",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A number is selected at random from the integers 1 to 600 inclusive. Find the probability the number is divisible by 4.",
    "a": "1/4",
    "solutionSteps": [
      {
        "explanation": "Determine how many integers up to 600 are divisible by 4.",
        "workingOut": "\\text{Count} = \\lfloor \\frac{600}{4} \\rfloor = 150"
      },
      {
        "explanation": "Divide by the total integers (600) and simplify.",
        "workingOut": "P = \\frac{150}{600} = \\frac{1}{4}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q12b
  {
    "id": "y10-15b-q12b",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A number is selected at random from the integers 1 to 600 inclusive. Find the probability the number is divisible by 7.",
    "a": "17/120",
    "solutionSteps": [
      {
        "explanation": "Count how many integers are divisible by 7.",
        "workingOut": "\\text{Count} = \\lfloor \\frac{600}{7} \\rfloor = 85"
      },
      {
        "explanation": "Divide by 600 and simplify.",
        "workingOut": "P = \\frac{85}{600} = \\frac{17}{120}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q12c
  {
    "id": "y10-15b-q12c",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A number is selected at random from the integers 1 to 600 inclusive. Find the probability the number is divisible by 9.",
    "a": "11/100",
    "solutionSteps": [
      {
        "explanation": "Find how many integers are divisible by 9.",
        "workingOut": "\\text{Count} = \\lfloor \\frac{600}{9} \\rfloor = 66"
      },
      {
        "explanation": "Calculate probability.",
        "workingOut": "P = \\frac{66}{600} = \\frac{11}{100}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q12d
  {
    "id": "y10-15b-q12d",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A number is selected at random from the integers 1 to 600 inclusive. Find the probability the number is divisible by 4 and 7.",
    "a": "7/200",
    "solutionSteps": [
      {
        "explanation": "Numbers divisible by both 4 and 7 must be divisible by their lowest common multiple, which is 28.",
        "workingOut": "\\text{Count} = \\lfloor \\frac{600}{28} \\rfloor = 21"
      },
      {
        "explanation": "Calculate and simplify.",
        "workingOut": "P = \\frac{21}{600} = \\frac{7}{200}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q12e
  {
    "id": "y10-15b-q12e",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A number is selected at random from the integers 1 to 600 inclusive. Find the probability the number is divisible by 4 and 9.",
    "a": "2/75",
    "solutionSteps": [
      {
        "explanation": "Find integers divisible by the lowest common multiple of 4 and 9, which is 36.",
        "workingOut": "\\text{Count} = \\lfloor \\frac{600}{36} \\rfloor = 16"
      },
      {
        "explanation": "Compute probability.",
        "workingOut": "P = \\frac{16}{600} = \\frac{2}{75}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q12f
  {
    "id": "y10-15b-q12f",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A number is selected at random from the integers 1 to 600 inclusive. Find the probability the number is divisible by 9 and 11.",
    "a": "3/200",
    "solutionSteps": [
      {
        "explanation": "A number divisible by 9 and 11 must be divisible by their product, 99.",
        "workingOut": "\\text{Count} = \\lfloor \\frac{600}{99} \\rfloor = 9"
      },
      {
        "explanation": "Compute probability.",
        "workingOut": "P = \\frac{9}{600} = \\frac{3}{200}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q12g
  {
    "id": "y10-15b-q12g",
    "type": "short_answer",
    "difficulty": "medium",
    "timeLimit": 90,
    "question": "A number is selected at random from the integers 1 to 600 inclusive. Find the probability the number is divisible by 4, 7 and 9.",
    "a": "1/300",
    "solutionSteps": [
      {
        "explanation": "Find numbers divisible by the lowest common multiple of 4, 7, and 9. Since they share no common factors, \\(\\text{LCM} = 4 \\times 7 \\times 9 = 252\\).",
        "workingOut": "\\text{Count} = \\lfloor \\frac{600}{252} \\rfloor = 2"
      },
      {
        "explanation": "Calculate probability.",
        "workingOut": "P = \\frac{2}{600} = \\frac{1}{300}"
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q13
  {
    "id": "y10-15b-q13",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "In a group of 90 people, 40 own a laptop, 35 own a tablet, and 30 own a console. In addition, 8 own both a laptop and a tablet, 10 own both a tablet and a console, 7 own both a console and a laptop, and 3 own all three items. If a person is chosen at random, find the probability that the person does not own a laptop, a tablet, or a console.",
    "a": "7/90",
    "subQuestions": [
      {
        "id": "y10-15b-q13a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Find the probability that the person does not own a laptop, a tablet, or a console.",
        "a": "7/90",
        "solutionSteps": [
          {
            "explanation": "Draw a Venn diagram with three circles for Laptop (L), Tablet (T), and Console (C). Put 3 in the intersection of all three.",
            "workingOut": "n(L \\cap T \\cap C) = 3"
          },
          {
            "explanation": "Find the number of elements in the double-intersection regions by subtracting the central region (3) from each given pairwise value.",
            "workingOut": "\\begin{aligned} \\text{Laptop and Tablet only} &= 8 - 3 = 5 \\\\ \\text{Tablet and Console only} &= 10 - 3 = 7 \\\\ \\text{Console and Laptop only} &= 7 - 3 = 4 \\end{aligned}"
          },
          {
            "explanation": "Find the single-ownership regions by subtracting the intersection values from the totals.",
            "workingOut": "\\begin{aligned} \\text{Laptop only} &= 40 - (5 + 4 + 3) = 28 \\\\ \\text{Tablet only} &= 35 - (5 + 7 + 3) = 20 \\\\ \\text{Console only} &= 30 - (4 + 7 + 3) = 16 \\end{aligned}"
          },
          {
            "explanation": "Sum all these distinct regions to find the total number of people owning at least one device.",
            "workingOut": "\\text{Total owning at least one} = 28 + 20 + 16 + 5 + 7 + 4 + 3 = 83"
          },
          {
            "explanation": "Subtract from the group total (90) to find the number of people owning none.",
            "workingOut": "\\text{None} = 90 - 83 = 7"
          },
          {
            "explanation": "Find the probability.",
            "workingOut": "P = \\frac{7}{90}"
          }
        ]
      },
      {
        "id": "y10-15b-q13b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Find the probability that the person owns exactly one of the three items.",
        "a": "32/45",
        "solutionSteps": [
          {
            "explanation": "Sum the populations of the regions representing ownership of exactly one device (Laptop only, Tablet only, Console only).",
            "workingOut": "\\text{Exactly one} = 28 + 20 + 16 = 64"
          },
          {
            "explanation": "Divide by the group total and simplify.",
            "workingOut": "P = \\frac{64}{90} = \\frac{32}{45}"
          }
        ]
      },
      {
        "id": "y10-15b-q13c",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Find the probability that the person owns exactly two of the three items.",
        "a": "8/45",
        "solutionSteps": [
          {
            "explanation": "Sum the populations of the regions representing ownership of exactly two devices (Laptop & Tablet only, Tablet & Console only, Console & Laptop only).",
            "workingOut": "\\text{Exactly two} = 5 + 7 + 4 = 16"
          },
          {
            "explanation": "Divide by the group total and simplify.",
            "workingOut": "P = \\frac{16}{90} = \\frac{8}{45}"
          }
        ]
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q14
  {
    "id": "y10-15b-q14",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "If a card is drawn at random from a pack of 52 playing cards, what is the probability that it will be:",
    "a": "7/26",
    "subQuestions": [
      {
        "id": "y10-15b-q14a",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Find the probability of obtaining a Spade or the King of Diamonds.",
        "a": "7/26",
        "solutionSteps": [
          {
            "explanation": "Spades and the King of Diamonds are mutually exclusive. Add their individual card counts.",
            "workingOut": "\\text{Spades} = 13, \\quad \\text{King of Diamonds} = 1 \\implies 14 \\; \\text{cards}"
          },
          {
            "explanation": "Divide by 52 and simplify.",
            "workingOut": "P = \\frac{14}{52} = \\frac{7}{26}"
          }
        ]
      },
      {
        "id": "y10-15b-q14b",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Find the probability of obtaining a Spade or a King.",
        "a": "4/13",
        "solutionSteps": [
          {
            "explanation": "Use the addition rule: \\(P(S \\cup K) = P(S) + P(K) - P(S \\cap K)\\). Note that there is 1 King of Spades.",
            "workingOut": "P(\\text{Spade} \\cup \\text{King}) = \\frac{13}{52} + \\frac{4}{52} - \\frac{1}{52}"
          },
          {
            "explanation": "Simplify.",
            "workingOut": "= \\frac{16}{52} = \\frac{4}{13}"
          }
        ]
      },
      {
        "id": "y10-15b-q14c",
        "type": "short_answer",
        "difficulty": "hard",
        "timeLimit": 120,
        "question": "Find the probability of obtaining a Spade or a Club.",
        "a": "1/2",
        "solutionSteps": [
          {
            "explanation": "Spades and Clubs are disjoint sets. Add their probabilities.",
            "workingOut": "P(\\text{Spade} \\cup \\text{Club}) = \\frac{13}{52} + \\frac{13}{52} = \\frac{26}{52}"
          },
          {
            "explanation": "Simplify.",
            "workingOut": "= \\frac{1}{2}"
          }
        ]
      }
    ],
    "t": "The complement, union and intersection"
  },
  // Q15
  {
    "id": "y10-15b-q15",
    "type": "short_answer",
    "difficulty": "hard",
    "timeLimit": 120,
    "question": "From a set of 20 cards whose faces are numbered 1 to 20, one card is drawn at random. What is the probability that it is a multiple of 3 or 4?",
    "a": "1/2",
    "solutionSteps": [
      {
        "explanation": "List the multiples of 3 up to 20.",
        "workingOut": "\\text{Multiples of 3} = {3, 6, 9, 12, 15, 18} \\implies 6 \\; \\text{numbers}"
      },
      {
        "explanation": "List the multiples of 4 up to 20.",
        "workingOut": "\\text{Multiples of 4} = {4, 8, 12, 16, 20} \\implies 5 \\; \\text{numbers}"
      },
      {
        "explanation": "Identify the intersection: multiples of both 3 and 4 (multiples of 12).",
        "workingOut": "\\text{Multiples of 12} = {12} \\implies 1 \\; \\text{number}"
      },
      {
        "explanation": "Use the addition rule: \\(n(A \\cup B) = n(A) + n(B) - n(A \\cap B)\\).",
        "workingOut": "\\text{Favourable numbers} = 6 + 5 - 1 = 10"
      },
      {
        "explanation": "Divide by the total number of cards.",
        "workingOut": "P = \\frac{10}{20} = \\frac{1}{2}"
      }
    ],
    "t": "The complement, union and intersection"
  }
];
