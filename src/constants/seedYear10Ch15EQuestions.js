export const Y10_CH15E_QUESTIONS = [
  // QUESTION 1
  {
    id: "y10-15e-q1a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that both cards are Spades.",
    a: "1/16",
    solution: "Since the first card is replaced before drawing the second card, the two events are independent. The probability of drawing a Spade is \\(\\frac{13}{52} = \\frac{1}{4}\\). Thus, the probability of drawing two Spades is \\(\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Think about whether the draws are independent, and find the probability of drawing a Spade on each turn.",
    solutionSteps: [
      {
        explanation: "Determine the probability of drawing a Spade from a standard deck of 52 cards.",
        workingOut: "P(\\mathrm{Spade}) = \\frac{13}{52} = \\frac{1}{4}"
      },
      {
        explanation: "Since the card is replaced, the second draw is independent. Multiply the probabilities of drawing a Spade in both draws.",
        workingOut: "P(\\mathrm{both\\ Spades}) = \\frac{1}{4} \\times \\frac{1}{4}"
      },
      {
        explanation: "Simplify the fraction to get the final probability.",
        workingOut: "\\therefore\\; \\frac{1}{16}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q1b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that neither card is a Spade.",
    a: "9/16",
    solution: "The probability of not drawing a Spade is \\(1 - \\frac{1}{4} = \\frac{3}{4}\\). Since the card is replaced, the two draws are independent. The probability that neither card is a Spade is \\(\\frac{3}{4} \\times \\frac{3}{4} = \\frac{9}{16}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "First find the probability of drawing a card that is not a Spade.",
    solutionSteps: [
      {
        explanation: "Calculate the probability of drawing a card that is not a Spade.",
        workingOut: "P(\\mathrm{not\\ Spade}) = 1 - \\frac{1}{4} = \\frac{3}{4}"
      },
      {
        explanation: "Multiply the probabilities for both draws since the first card was replaced.",
        workingOut: "P(\\mathrm{neither\\ Spade}) = \\frac{3}{4} \\times \\frac{3}{4}"
      },
      {
        explanation: "Calculate the final simplified product.",
        workingOut: "\\therefore\\; \\frac{9}{16}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q1c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that only one of the cards is a Spade.",
    a: "3/8",
    solution: "The probability of drawing only one Spade can occur in two mutually exclusive ways: drawing a Spade then a non-Spade, or drawing a non-Spade then a Spade. The probability is \\(\\left(\\frac{1}{4} \\times \\frac{3}{4}\\right) + \\left(\\frac{3}{4} \\times \\frac{1}{4}\\right) = \\frac{3}{16} + \\frac{3}{16} = \\frac{6}{16} = \\frac{3}{8}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Identify the different orders in which you can draw exactly one Spade.",
    solutionSteps: [
      {
        explanation: "Calculate the probability of drawing a Spade followed by a non-Spade.",
        workingOut: "P(\\mathrm{Spade},\\; \\mathrm{non\\text{-}Spade}) = \\frac{1}{4} \\times \\frac{3}{4} = \\frac{3}{16}"
      },
      {
        explanation: "Calculate the probability of drawing a non-Spade followed by a Spade.",
        workingOut: "P(\\mathrm{non\\text{-}Spade},\\; \\mathrm{Spade}) = \\frac{3}{4} \\times \\frac{1}{4} = \\frac{3}{16}"
      },
      {
        explanation: "Add these probabilities together to find the overall probability of drawing exactly one Spade.",
        workingOut: "P(\\mathrm{only\\ one}) = \\frac{3}{16} + \\frac{3}{16} = \\frac{6}{16} = \\frac{3}{8}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q1d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that only the first card is a Spade.",
    a: "3/16",
    solution: "This requires the first card to be a Spade and the second card to be a non-Spade. The probability is \\(\\frac{1}{4} \\times \\frac{3}{4} = \\frac{3}{16}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "The first card must be a Spade, and the second card must not be a Spade.",
    solutionSteps: [
      {
        explanation: "Identify the individual probabilities for the first card (Spade) and the second card (non-Spade).",
        workingOut: "P(\\mathrm{first\\ Spade}) = \\frac{1}{4},\\quad P(\\mathrm{second\\ non\\text{-}Spade}) = \\frac{3}{4}"
      },
      {
        explanation: "Multiply the two probabilities because the outcomes are independent.",
        workingOut: "P(\\mathrm{only\\ first\\ Spade}) = \\frac{1}{4} \\times \\frac{3}{4}"
      },
      {
        explanation: "Find the product.",
        workingOut: "\\therefore\\; \\frac{3}{16}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q1e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that only the second card is a Spade.",
    a: "3/16",
    solution: "This requires the first card to be a non-Spade and the second card to be a Spade. The probability is \\(\\frac{3}{4} \\times \\frac{1}{4} = \\frac{3}{16}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "The first card must not be a Spade, and the second card must be a Spade.",
    solutionSteps: [
      {
        explanation: "Identify the individual probabilities for the first card (non-Spade) and the second card (Spade).",
        workingOut: "P(\\mathrm{first\\ non\\text{-}Spade}) = \\frac{3}{4},\\quad P(\\mathrm{second\\ Spade}) = \\frac{1}{4}"
      },
      {
        explanation: "Multiply the two independent probabilities.",
        workingOut: "P(\\mathrm{only\\ second\\ Spade}) = \\frac{3}{4} \\times \\frac{1}{4}"
      },
      {
        explanation: "Find the product.",
        workingOut: "\\therefore\\; \\frac{3}{16}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q1f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that at least one of the cards is a Spade.",
    a: "7/16",
    solution: "The probability of at least one Spade is the complement of drawing no Spades: \\(1 - P(\\text{neither is a Spade}) = 1 - \\frac{9}{16} = \\frac{7}{16}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Use the complement rule: subtract the probability of getting no Spades from 1.",
    solutionSteps: [
      {
        explanation: "Find the probability that neither card is a Spade.",
        workingOut: "P(\\mathrm{neither\\ Spade}) = \\frac{3}{4} \\times \\frac{3}{4} = \\frac{9}{16}"
      },
      {
        explanation: "Apply the complement rule to find the probability of at least one Spade.",
        workingOut: "P(\\mathrm{at\\ least\\ one\\ Spade}) = 1 - P(\\mathrm{neither\\ Spade})"
      },
      {
        explanation: "Subtract the values to get the final answer.",
        workingOut: "\\therefore\\; 1 - \\frac{9}{16} = \\frac{7}{16}"
      }
    ],
    graphData: null
  },

  // QUESTION 2
  {
    id: "y10-15e-q2a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that both cards are Clubs.",
    a: "1/17",
    solution: "For the first draw, the probability of drawing a Club is \\(\\frac{13}{52} = \\frac{1}{4}\\). Since the card is not replaced, 51 cards remain, of which 12 are Clubs. The probability that both are Clubs is \\(\\frac{13}{52} \\times \\frac{12}{51} = \\frac{1}{4} \\times \\frac{4}{17} = \\frac{1}{17}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Without replacement, the total number of cards and the number of Clubs both decrease by 1 for the second draw.",
    solutionSteps: [
      {
        explanation: "Find the probability that the first card drawn is a Club.",
        workingOut: "P(C_1) = \\frac{13}{52} = \\frac{1}{4}"
      },
      {
        explanation: "Find the probability that the second card drawn is a Club given the first was a Club.",
        workingOut: "P(C_2 \\mid C_1) = \\frac{12}{51} = \\frac{4}{17}"
      },
      {
        explanation: "Multiply the probabilities to find the probability of both being Clubs.",
        workingOut: "P(C_1 \\cap C_2) = \\frac{1}{4} \\times \\frac{4}{17} = \\frac{1}{17}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q2b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that neither card is a Club.",
    a: "19/34",
    solution: "There are 39 non-Clubs initially. The probability of drawing a non-Club first is \\(\\frac{39}{52} = \\frac{3}{4}\\). After drawing one non-Club, 38 non-Clubs remain out of 51 cards. The probability that neither is a Club is \\(\\frac{39}{52} \\times \\frac{38}{51} = \\frac{3}{4} \\times \\frac{38}{51} = \\frac{19}{34}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Find the probability of drawing two consecutive cards that are not Clubs, keeping in mind the deck is not replaced.",
    solutionSteps: [
      {
        explanation: "Calculate the probability that the first card is not a Club.",
        workingOut: "P(C_1') = \\frac{39}{52} = \\frac{3}{4}"
      },
      {
        explanation: "Calculate the probability that the second card is not a Club given the first was not a Club.",
        workingOut: "P(C_2' \\mid C_1') = \\frac{38}{51}"
      },
      {
        explanation: "Multiply the two probabilities and simplify the result.",
        workingOut: "P(\\mathrm{neither\\ Club}) = \\frac{3}{4} \\times \\frac{38}{51} = \\frac{114}{204} = \\frac{19}{34}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q2c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that only one of the cards is a Club.",
    a: "13/34",
    solution: "This can happen in two ways: Club then non-Club, or non-Club then Club. The probability is \\(\\left(\\frac{13}{52} \\times \\frac{39}{51}\\right) + \\left(\\frac{39}{52} \\times \\frac{13}{51}\\right) = \\left(\\frac{1}{4} \\times \\frac{39}{51}\\right) + \\left(\\frac{3}{4} \\times \\frac{13}{51}\\right) = \\frac{39}{204} + \\frac{39}{204} = \\frac{78}{204} = \\frac{13}{34}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Sum the probabilities of (Club, non-Club) and (non-Club, Club).",
    solutionSteps: [
      {
        explanation: "Calculate the probability of drawing a Club followed by a non-Club.",
        workingOut: "P(C \\cap C') = \\frac{13}{52} \\times \\frac{39}{51} = \\frac{1}{4} \\times \\frac{13}{17} = \\frac{13}{68}"
      },
      {
        explanation: "Calculate the probability of drawing a non-Club followed by a Club.",
        workingOut: "P(C' \\cap C) = \\frac{39}{52} \\times \\frac{13}{51} = \\frac{3}{4} \\times \\frac{13}{51} = \\frac{13}{68}"
      },
      {
        explanation: "Add the two individual probabilities together.",
        workingOut: "P(\\mathrm{only\\ one\\ Club}) = \\frac{13}{68} + \\frac{13}{68} = \\frac{26}{68} = \\frac{13}{34}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q2d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that only the first card is a Club.",
    a: "13/68",
    solution: "This requires the first card to be a Club and the second card to be a non-Club. The probability is \\(\\frac{13}{52} \\times \\frac{39}{51} = \\frac{1}{4} \\times \\frac{39}{51} = \\frac{39}{204} = \\frac{13}{68}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Calculate the probability of drawing a Club, then a non-Club without replacing the first.",
    solutionSteps: [
      {
        explanation: "Determine the probability of the first card being a Club.",
        workingOut: "P(C_1) = \\frac{13}{52} = \\frac{1}{4}"
      },
      {
        explanation: "Determine the probability of the second card being a non-Club given that the first card was a Club.",
        workingOut: "P(C_2' \\mid C_1) = \\frac{39}{51}"
      },
      {
        explanation: "Multiply the two probabilities and simplify.",
        workingOut: "P(C_1 \\cap C_2') = \\frac{1}{4} \\times \\frac{39}{51} = \\frac{39}{204} = \\frac{13}{68}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q2e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that only the second card is a Club.",
    a: "13/68",
    solution: "This requires the first card to be a non-Club and the second card to be a Club. The probability is \\(\\frac{39}{52} \\times \\frac{13}{51} = \\frac{3}{4} \\times \\frac{13}{51} = \\frac{39}{204} = \\frac{13}{68}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Calculate the probability of drawing a non-Club, then a Club without replacing the first.",
    solutionSteps: [
      {
        explanation: "Determine the probability of the first card being a non-Club.",
        workingOut: "P(C_1') = \\frac{39}{52} = \\frac{3}{4}"
      },
      {
        explanation: "Determine the probability of the second card being a Club given that the first card was not a Club.",
        workingOut: "P(C_2 \\mid C_1') = \\frac{13}{51}"
      },
      {
        explanation: "Multiply the two probabilities and simplify.",
        workingOut: "P(C_1' \\cap C_2) = \\frac{3}{4} \\times \\frac{13}{51} = \\frac{39}{204} = \\frac{13}{68}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q2f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that at least one of the cards is a Club.",
    a: "15/34",
    solution: "The probability of at least one Club is the complement of neither being a Club: \\(1 - P(\\text{neither is a Club}) = 1 - \\frac{19}{34} = \\frac{15}{34}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Calculate the complement of drawing no Club cards.",
    solutionSteps: [
      {
        explanation: "Recall the probability of getting no Clubs in two draws without replacement.",
        workingOut: "P(\\mathrm{neither\\ Club}) = \\frac{19}{34}"
      },
      {
        explanation: "Use the complement rule to find the probability of getting at least one Club.",
        workingOut: "P(\\mathrm{at\\ least\\ one\\ Club}) = 1 - P(\\mathrm{neither\\ Club})"
      },
      {
        explanation: "Subtract the values.",
        workingOut: "\\therefore\\; 1 - \\frac{19}{34} = \\frac{15}{34}"
      }
    ],
    graphData: null
  },

  // QUESTION 3
  {
    id: "y10-15e-q3a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A bag contains 7 blue balls and 6 yellow balls. A ball is drawn and its colour noted. It is not replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining a blue ball followed by a yellow ball.",
    a: "7/26",
    solution: "The probability of drawing a blue ball first is \\(\\frac{7}{13}\\). Since it is not replaced, 12 balls remain, of which 6 are yellow. The probability of obtaining blue then yellow is \\(\\frac{7}{13} \\times \\frac{6}{12} = \\frac{7}{13} \\times \\frac{1}{2} = \\frac{7}{26}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Find the probability of blue first, then multiply by the probability of yellow given one blue ball is gone.",
    solutionSteps: [
      {
        explanation: "Calculate the probability that the first ball is blue.",
        workingOut: "P(B_1) = \\frac{7}{13}"
      },
      {
        explanation: "Calculate the probability that the second ball is yellow, given the first was blue.",
        workingOut: "P(Y_2 \\mid B_1) = \\frac{6}{12} = \\frac{1}{2}"
      },
      {
        explanation: "Multiply these probabilities.",
        workingOut: "P(B_1 \\cap Y_2) = \\frac{7}{13} \\times \\frac{1}{2} = \\frac{7}{26}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q3b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A bag contains 7 blue balls and 6 yellow balls. A ball is drawn and its colour noted. It is not replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining a blue and a yellow ball in any order.",
    a: "7/13",
    solution: "This can occur as blue then yellow, or yellow then blue. The probability is \\(P(B_1 \\cap Y_2) + P(Y_1 \\cap B_2) = \\left(\\frac{7}{13} \\times \\frac{6}{12}\\right) + \\left(\\frac{6}{13} \\times \\frac{7}{12}\\right) = \\frac{42}{156} + \\frac{42}{156} = \\frac{84}{156} = \\frac{7}{13}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Add the probability of (blue, yellow) to the probability of (yellow, blue).",
    solutionSteps: [
      {
        explanation: "Compute the probability of drawing a blue ball then a yellow ball.",
        workingOut: "P(B_1 \\cap Y_2) = \\frac{7}{13} \\times \\frac{6}{12} = \\frac{7}{26}"
      },
      {
        explanation: "Compute the probability of drawing a yellow ball then a blue ball.",
        workingOut: "P(Y_1 \\cap B_2) = \\frac{6}{13} \\times \\frac{7}{12} = \\frac{7}{26}"
      },
      {
        explanation: "Sum the two probabilities.",
        workingOut: "P(\\mathrm{one\\ of\\ each}) = \\frac{7}{26} + \\frac{7}{26} = \\frac{14}{26} = \\frac{7}{13}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q3c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A bag contains 7 blue balls and 6 yellow balls. A ball is drawn and its colour noted. It is not replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining two blue balls.",
    a: "7/26",
    solution: "The probability of drawing a blue ball first is \\(\\frac{7}{13}\\). Since it is not replaced, 6 blue balls remain out of 12 total. The probability of two blue balls is \\(\\frac{7}{13} \\times \\frac{6}{12} = \\frac{7}{26}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Find the probability of drawing blue on both trials without replacement.",
    solutionSteps: [
      {
        explanation: "Calculate the probability that the first ball is blue.",
        workingOut: "P(B_1) = \\frac{7}{13}"
      },
      {
        explanation: "Calculate the probability that the second ball is blue, given the first was blue.",
        workingOut: "P(B_2 \\mid B_1) = \\frac{6}{12} = \\frac{1}{2}"
      },
      {
        explanation: "Multiply the probabilities.",
        workingOut: "P(B_1 \\cap B_2) = \\frac{7}{13} \\times \\frac{1}{2} = \\frac{7}{26}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q3d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A bag contains 7 blue balls and 6 yellow balls. A ball is drawn and its colour noted. It is not replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining two yellow balls.",
    a: "5/26",
    solution: "The probability of drawing a yellow ball first is \\(\\frac{6}{13}\\). Since it is not replaced, 5 yellow balls remain out of 12. The probability of two yellow balls is \\(\\frac{6}{13} \\times \\frac{5}{12} = \\frac{30}{156} = \\frac{5}{26}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Calculate the probability of drawing two yellow balls in a row without replacement.",
    solutionSteps: [
      {
        explanation: "Calculate the probability that the first ball is yellow.",
        workingOut: "P(Y_1) = \\frac{6}{13}"
      },
      {
        explanation: "Calculate the probability that the second ball is yellow, given the first was yellow.",
        workingOut: "P(Y_2 \\mid Y_1) = \\frac{5}{12}"
      },
      {
        explanation: "Multiply the two probabilities and simplify.",
        workingOut: "P(Y_1 \\cap Y_2) = \\frac{6}{13} \\times \\frac{5}{12} = \\frac{30}{156} = \\frac{5}{26}"
      }
    ],
    graphData: null
  },

  // QUESTION 4
  {
    id: "y10-15e-q4a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Chloe has 6 yellow beads, 4 pink beads and 5 green beads in a jar. Chloe randomly takes one bead out and then a second (no replacement). Find the probability that she obtains 2 yellow beads.",
    a: "1/7",
    solution: "The total number of beads is \\(6 + 4 + 5 = 15\\). The probability of drawing a yellow bead first is \\(\\frac{6}{15}\\). Since the bead is not replaced, 5 yellow beads remain out of 14. The probability of drawing 2 yellow beads is \\(\\frac{6}{15} \\times \\frac{5}{14} = \\frac{2}{5} \\times \\frac{5}{14} = \\frac{2}{14} = \\frac{1}{7}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Work out the total number of beads first, then apply the multiplication rule without replacement.",
    solutionSteps: [
      {
        explanation: "Determine the total number of beads in the jar.",
        workingOut: "\\mathrm{Total} = 6 + 4 + 5 = 15"
      },
      {
        explanation: "Calculate the probability of drawing a yellow bead first.",
        workingOut: "P(Y_1) = \\frac{6}{15} = \\frac{2}{5}"
      },
      {
        explanation: "Calculate the probability of drawing a second yellow bead.",
        workingOut: "P(Y_2 \\mid Y_1) = \\frac{5}{14}"
      },
      {
        explanation: "Multiply the two probabilities to find the final result.",
        workingOut: "P(Y_1 \\cap Y_2) = \\frac{2}{5} \\times \\frac{5}{14} = \\frac{1}{7}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q4b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Chloe has 6 yellow beads, 4 pink beads and 5 green beads in a jar. Chloe randomly takes one bead out and then a second (no replacement). Find the probability that she obtains a yellow and a pink bead in any order.",
    a: "8/35",
    solution: "This can happen as yellow then pink, or pink then yellow. The probability is \\(P(Y_1 \\cap P_2) + P(P_1 \\cap Y_2) = \\left(\\frac{6}{15} \\times \\frac{4}{14}\\right) + \\left(\\frac{4}{15} \\times \\frac{6}{14}\\right) = \\frac{24}{210} + \\frac{24}{210} = \\frac{48}{210} = \\frac{8}{35}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Find the probabilities of yellow then pink and pink then yellow, then add them.",
    solutionSteps: [
      {
        explanation: "Calculate the probability of drawing a yellow bead first and a pink bead second.",
        workingOut: "P(Y_1 \\cap P_2) = \\frac{6}{15} \\times \\frac{4}{14} = \\frac{24}{210}"
      },
      {
        explanation: "Calculate the probability of drawing a pink bead first and a yellow bead second.",
        workingOut: "P(P_1 \\cap Y_2) = \\frac{4}{15} \\times \\frac{6}{14} = \\frac{24}{210}"
      },
      {
        explanation: "Sum the two cases and simplify the resulting fraction.",
        workingOut: "P(\\mathrm{yellow\\ and\\ pink}) = \\frac{24}{210} + \\frac{24}{210} = \\frac{48}{210} = \\frac{8}{35}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q4c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Chloe has 6 yellow beads, 4 pink beads and 5 green beads in a jar. Chloe randomly takes one bead out and then a second (no replacement). Find the probability that she obtains a green and a yellow bead in any order.",
    a: "2/7",
    solution: "This can happen as green then yellow, or yellow then green. The probability is \\(P(G_1 \\cap Y_2) + P(Y_1 \\cap G_2) = \\left(\\frac{5}{15} \\times \\frac{6}{14}\\right) + \\left(\\frac{6}{15} \\times \\frac{5}{14}\\right) = \\frac{30}{210} + \\frac{30}{210} = \\frac{60}{210} = \\frac{2}{7}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Add the probability of (green, yellow) to the probability of (yellow, green).",
    solutionSteps: [
      {
        explanation: "Calculate the probability of drawing green then yellow.",
        workingOut: "P(G_1 \\cap Y_2) = \\frac{5}{15} \\times \\frac{6}{14} = \\frac{30}{210}"
      },
      {
        explanation: "Calculate the probability of drawing yellow then green.",
        workingOut: "P(Y_1 \\cap G_2) = \\frac{6}{15} \\times \\frac{5}{14} = \\frac{30}{210}"
      },
      {
        explanation: "Combine the probabilities and simplify.",
        workingOut: "P(\\mathrm{green\\ and\\ yellow}) = \\frac{30}{210} + \\frac{30}{210} = \\frac{60}{210} = \\frac{2}{7}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q4d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Chloe has 6 yellow beads, 4 pink beads and 5 green beads in a jar. Chloe randomly takes one bead out and then a second (no replacement). Find the probability that she obtains 2 pink beads.",
    a: "2/35",
    solution: "The probability of drawing a pink bead first is \\(\\frac{4}{15}\\). Since it is not replaced, 3 pink beads remain out of 14. The probability of drawing 2 pink beads is \\(\\frac{4}{15} \\times \\frac{3}{14} = \\frac{12}{210} = \\frac{2}{35}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Use the product of drawing a pink bead on the first and second draws without replacement.",
    solutionSteps: [
      {
        explanation: "Find the probability of drawing the first pink bead.",
        workingOut: "P(P_1) = \\frac{4}{15}"
      },
      {
        explanation: "Find the probability of drawing the second pink bead.",
        workingOut: "P(P_2 \\mid P_1) = \\frac{3}{14}"
      },
      {
        explanation: "Multiply and simplify.",
        workingOut: "P(P_1 \\cap P_2) = \\frac{4}{15} \\times \\frac{3}{14} = \\frac{12}{210} = \\frac{2}{35}"
      }
    ],
    graphData: null
  },

  // QUESTION 5
  {
    id: "y10-15e-q5a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Cube A has 4 green faces and 2 yellow faces, cube B has 5 green faces and 1 yellow face, and cube C has 3 green faces and 3 yellow faces. The 3 cubes are tossed. Find the probability of getting 3 green faces uppermost.",
    a: "5/18",
    solution: "The probability of green for Cube A is \\(\\frac{4}{6} = \\frac{2}{3}\\), for Cube B is \\(\\frac{5}{6}\\), and for Cube C is \\(\\frac{3}{6} = \\frac{1}{2}\\). The probability of all 3 being green is \\(\\frac{2}{3} \\times \\frac{5}{6} \\times \\frac{1}{2} = \\frac{10}{36} = \\frac{5}{18}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Find the probability of green for each cube individually, then multiply them.",
    solutionSteps: [
      {
        explanation: "Calculate the probability of green for each cube.",
        workingOut: "P(G_A) = \\frac{2}{3},\\quad P(G_B) = \\frac{5}{6},\\quad P(G_C) = \\frac{1}{2}"
      },
      {
        explanation: "Multiply the three independent probabilities.",
        workingOut: "P(\\mathrm{all\\ green}) = \\frac{2}{3} \\times \\frac{5}{6} \\times \\frac{1}{2}"
      },
      {
        explanation: "Simplify the final fraction.",
        workingOut: "\\therefore\\; \\frac{10}{36} = \\frac{5}{18}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q5b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Cube A has 4 green faces and 2 yellow faces, cube B has 5 green faces and 1 yellow face, and cube C has 3 green faces and 3 yellow faces. The 3 cubes are tossed. Find the probability of getting 3 yellow faces uppermost.",
    a: "1/36",
    solution: "The probability of yellow for Cube A is \\(\\frac{2}{6} = \\frac{1}{3}\\), for Cube B is \\(\\frac{1}{6}\\), and for Cube C is \\(\\frac{3}{6} = \\frac{1}{2}\\). The probability of all 3 being yellow is \\(\\frac{1}{3} \\times \\frac{1}{6} \\times \\frac{1}{2} = \\frac{1}{36}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Determine the probability of yellow for each cube, and multiply the values.",
    solutionSteps: [
      {
        explanation: "Calculate the probability of yellow for each cube.",
        workingOut: "P(Y_A) = \\frac{1}{3},\\quad P(Y_B) = \\frac{1}{6},\\quad P(Y_C) = \\frac{1}{2}"
      },
      {
        explanation: "Multiply the probabilities.",
        workingOut: "P(\\mathrm{all\\ yellow}) = \\frac{1}{3} \\times \\frac{1}{6} \\times \\frac{1}{2}"
      },
      {
        explanation: "Calculate the product.",
        workingOut: "\\therefore\\; \\frac{1}{36}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q5c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Cube A has 4 green faces and 2 yellow faces, cube B has 5 green faces and 1 yellow face, and cube C has 3 green faces and 3 yellow faces. The 3 cubes are tossed. Find the probability of getting green with A and B, and yellow with C.",
    a: "5/18",
    solution: "We need green on A, green on B, and yellow on C. The probability is \\(\\frac{2}{3} \\times \\frac{5}{6} \\times \\frac{1}{2} = \\frac{10}{36} = \\frac{5}{18}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Multiply the probability of green for A and B, and yellow for C.",
    solutionSteps: [
      {
        explanation: "Identify the individual target probabilities for each cube.",
        workingOut: "P(G_A) = \\frac{2}{3},\\quad P(G_B) = \\frac{5}{6},\\quad P(Y_C) = \\frac{1}{2}"
      },
      {
        explanation: "Multiply the probabilities together.",
        workingOut: "P(G_A \\cap G_B \\cap Y_C) = \\frac{2}{3} \\times \\frac{5}{6} \\times \\frac{1}{2}"
      },
      {
        explanation: "Simplify the final result.",
        workingOut: "\\therefore\\; \\frac{10}{36} = \\frac{5}{18}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q5d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Cube A has 4 green faces and 2 yellow faces, cube B has 5 green faces and 1 yellow face, and cube C has 3 green faces and 3 yellow faces. The 3 cubes are tossed. Find the probability of getting green with A, and yellow with B and C.",
    a: "1/18",
    solution: "We need green on A, yellow on B, and yellow on C. The probability is \\(\\frac{2}{3} \\times \\frac{1}{6} \\times \\frac{1}{2} = \\frac{2}{36} = \\frac{1}{18}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Multiply the probability of green for A, and yellow for B and C.",
    solutionSteps: [
      {
        explanation: "Identify the individual target probabilities.",
        workingOut: "P(G_A) = \\frac{2}{3},\\quad P(Y_B) = \\frac{1}{6},\\quad P(Y_C) = \\frac{1}{2}"
      },
      {
        explanation: "Compute the product of these values.",
        workingOut: "P(G_A \\cap Y_B \\cap Y_C) = \\frac{2}{3} \\times \\frac{1}{6} \\times \\frac{1}{2}"
      },
      {
        explanation: "Simplify to get the final probability.",
        workingOut: "\\therefore\\; \\frac{2}{36} = \\frac{1}{18}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q5e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Cube A has 4 green faces and 2 yellow faces, cube B has 5 green faces and 1 yellow face, and cube C has 3 green faces and 3 yellow faces. The 3 cubes are tossed. Find the probability of getting at least 1 green face uppermost.",
    a: "35/36",
    solution: "Using the complement rule, the probability of getting at least one green face is \\(1 - P(\\text{all yellow}) = 1 - \\frac{1}{36} = \\frac{35}{36}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Use the complement rule by subtracting the probability of getting all yellow faces from 1.",
    solutionSteps: [
      {
        explanation: "Identify the probability of obtaining all yellow faces.",
        workingOut: "P(\\mathrm{all\\ yellow}) = \\frac{1}{36}"
      },
      {
        explanation: "Apply the complement rule.",
        workingOut: "P(\\mathrm{at\\ least\\ 1\\ green}) = 1 - P(\\mathrm{all\\ yellow})"
      },
      {
        explanation: "Perform the subtraction.",
        workingOut: "\\therefore\\; 1 - \\frac{1}{36} = \\frac{35}{36}"
      }
    ],
    graphData: null
  },

  // QUESTION 6
  {
    id: "y10-15e-q6a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Leo has a container with 24 mints and 36 caramels. Leo takes out one item from the container and then a second without replacement. Find the probability of obtaining two mints.",
    a: "46/295",
    solution: "The total number of items is \\(24 + 36 = 60\\). The probability of drawing a mint first is \\(\\frac{24}{60} = \\frac{2}{5}\\). Since there is no replacement, 23 mints remain out of 59 total items. The probability of obtaining two mints is \\(\\frac{2}{5} \\times \\frac{23}{59} = \\frac{46}{295}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Find the total number of items, then calculate the probability of two consecutive mint draws without replacement.",
    solutionSteps: [
      {
        explanation: "Calculate the total number of mints and caramels in the container.",
        workingOut: "\\mathrm{Total} = 24 + 36 = 60"
      },
      {
        explanation: "Calculate the probability that the first item is a mint.",
        workingOut: "P(M_1) = \\frac{24}{60} = \\frac{2}{5}"
      },
      {
        explanation: "Calculate the probability that the second item is a mint, given that the first was a mint.",
        workingOut: "P(M_2 \\mid M_1) = \\frac{23}{59}"
      },
      {
        explanation: "Multiply the probabilities to find the answer.",
        workingOut: "P(M_1 \\cap M_2) = \\frac{2}{5} \\times \\frac{23}{59} = \\frac{46}{295}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q6b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Leo has a container with 24 mints and 36 caramels. Leo takes out one item from the container and then a second without replacement. Find the probability of obtaining two caramels.",
    a: "21/59",
    solution: "The total number of items is 60. The probability of drawing a caramel first is \\(\\frac{36}{60} = \\frac{3}{5}\\). Without replacement, 35 caramels remain out of 59. The probability of obtaining two caramels is \\(\\frac{3}{5} \\times \\frac{35}{59} = \\frac{3 \\times 7}{59} = \\frac{21}{59}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Multiply the probability of drawing a caramel first by the probability of drawing another caramel from the remaining items.",
    solutionSteps: [
      {
        explanation: "Determine the probability of the first caramel.",
        workingOut: "P(C_1) = \\frac{36}{60} = \\frac{3}{5}"
      },
      {
        explanation: "Determine the probability of the second caramel given the first was a caramel.",
        workingOut: "P(C_2 \\mid C_1) = \\frac{35}{59}"
      },
      {
        explanation: "Multiply the two probabilities.",
        workingOut: "P(C_1 \\cap C_2) = \\frac{3}{5} \\times \\frac{35}{59} = \\frac{105}{295} = \\frac{21}{59}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q6c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "Leo has a container with 24 mints and 36 caramels. Leo takes out one item from the container and then a second without replacement. Find the probability of obtaining a mint and a caramel in any order.",
    a: "144/295",
    solution: "This can happen as mint then caramel, or caramel then mint. The probability is \\(P(M_1 \\cap C_2) + P(C_1 \\cap M_2) = \\left(\\frac{24}{60} \\times \\frac{36}{59}\\right) + \\left(\\frac{36}{60} \\times \\frac{24}{59}\\right) = \\left(\\frac{2}{5} \\times \\frac{36}{59}\\right) + \\left(\\frac{3}{5} \\times \\frac{24}{59}\\right) = \\frac{72}{295} + \\frac{72}{295} = \\frac{144}{295}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Find the sum of the probabilities for both combinations: (mint, caramel) and (caramel, mint).",
    solutionSteps: [
      {
        explanation: "Calculate the probability of drawing a mint then a caramel.",
        workingOut: "P(M_1 \\cap C_2) = \\frac{24}{60} \\times \\frac{36}{59} = \\frac{2}{5} \\times \\frac{36}{59} = \\frac{72}{295}"
      },
      {
        explanation: "Calculate the probability of drawing a caramel then a mint.",
        workingOut: "P(C_1 \\cap M_2) = \\frac{36}{60} \\times \\frac{24}{59} = \\frac{3}{5} \\times \\frac{24}{59} = \\frac{72}{295}"
      },
      {
        explanation: "Add the two probabilities.",
        workingOut: "P(\\mathrm{one\\ of\\ each}) = \\frac{72}{295} + \\frac{72}{295} = \\frac{144}{295}"
      }
    ],
    graphData: null
  },

  // QUESTION 7
  {
    id: "y10-15e-q7a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A bag contains 12 purple balls and 8 orange balls. A ball is drawn and its colour noted. It is replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining an orange ball followed by a purple ball.",
    a: "6/25",
    solution: "The probability of orange is \\(\\frac{8}{20} = \\frac{2}{5}\\) and purple is \\(\\frac{12}{20} = \\frac{3}{5}\\). Since the ball is replaced, the events are independent. The probability of orange followed by purple is \\(\\frac{2}{5} \\times \\frac{3}{5} = \\frac{6}{25}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Since the draws are with replacement, the probabilities remain the same for each draw.",
    solutionSteps: [
      {
        explanation: "Determine the probability of drawing each color.",
        workingOut: "P(\\mathrm{Orange}) = \\frac{8}{20} = \\frac{2}{5},\\quad P(\\mathrm{Purple}) = \\frac{12}{20} = \\frac{3}{5}"
      },
      {
        explanation: "Multiply the probabilities in the given order.",
        workingOut: "P(\\mathrm{Orange},\\; \\mathrm{Purple}) = \\frac{2}{5} \\times \\frac{3}{5}"
      },
      {
        explanation: "Calculate the final product.",
        workingOut: "\\therefore\\; \\frac{6}{25}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q7b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A bag contains 12 purple balls and 8 orange balls. A ball is drawn and its colour noted. It is replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining an orange and a purple ball in any order.",
    a: "12/25",
    solution: "This can happen as orange then purple, or purple then orange. The probability is \\(P(O_1 \\cap P_2) + P(P_1 \\cap O_2) = \\left(\\frac{2}{5} \\times \\frac{3}{5}\\right) + \\left(\\frac{3}{5} \\times \\frac{2}{5}\\right) = \\frac{6}{25} + \\frac{6}{25} = \\frac{12}{25}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Add the probability of (orange, purple) to the probability of (purple, orange).",
    solutionSteps: [
      {
        explanation: "Calculate the probability of drawing an orange ball then a purple ball.",
        workingOut: "P(O_1 \\cap P_2) = \\frac{2}{5} \\times \\frac{3}{5} = \\frac{6}{25}"
      },
      {
        explanation: "Calculate the probability of drawing a purple ball then an orange ball.",
        workingOut: "P(P_1 \\cap O_2) = \\frac{3}{5} \\times \\frac{2}{5} = \\frac{6}{25}"
      },
      {
        explanation: "Add these two probabilities.",
        workingOut: "P(\\mathrm{one\\ of\\ each}) = \\frac{6}{25} + \\frac{6}{25} = \\frac{12}{25}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q7c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A bag contains 12 purple balls and 8 orange balls. A ball is drawn and its colour noted. It is replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining two orange balls.",
    a: "4/25",
    solution: "The probability of orange on any draw is \\(\\frac{2}{5}\\). Since there is replacement, the probability of drawing two orange balls is \\(\\frac{2}{5} \\times \\frac{2}{5} = \\frac{4}{25}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Multiply the probability of drawing an orange ball by itself since the ball is replaced.",
    solutionSteps: [
      {
        explanation: "State the probability of drawing an orange ball.",
        workingOut: "P(\\mathrm{Orange}) = \\frac{2}{5}"
      },
      {
        explanation: "Multiply the probability of drawing an orange ball on the first and second draws.",
        workingOut: "P(\\mathrm{two\\ Orange}) = \\frac{2}{5} \\times \\frac{2}{5}"
      },
      {
        explanation: "Simplify the calculation.",
        workingOut: "\\therefore\\; \\frac{4}{25}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q7d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A bag contains 12 purple balls and 8 orange balls. A ball is drawn and its colour noted. It is replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining two balls of the same colour.",
    a: "13/25",
    solution: "This requires either two purple balls or two orange balls. The probability is \\(P(P_1 \\cap P_2) + P(O_1 \\cap O_2) = \\left(\\frac{3}{5} \\times \\frac{3}{5}\\right) + \\left(\\frac{2}{5} \\times \\frac{2}{5}\\right) = \\frac{9}{25} + \\frac{4}{25} = \\frac{13}{25}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Find the probability of two purple balls and two orange balls, then add them together.",
    solutionSteps: [
      {
        explanation: "Calculate the probability of drawing two purple balls.",
        workingOut: "P(\\mathrm{two\\ Purple}) = \\frac{3}{5} \\times \\frac{3}{5} = \\frac{9}{25}"
      },
      {
        explanation: "Calculate the probability of drawing two orange balls.",
        workingOut: "P(\\mathrm{two\\ Orange}) = \\frac{2}{5} \\times \\frac{2}{5} = \\frac{4}{25}"
      },
      {
        explanation: "Add the two probabilities to find the total probability of drawing two balls of the same color.",
        workingOut: "P(\\mathrm{same\\ colour}) = \\frac{9}{25} + \\frac{4}{25} = \\frac{13}{25}"
      }
    ],
    graphData: null
  },

  // QUESTION 8
  {
    id: "y10-15e-q8a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A coin is tossed four times. Find the probability of obtaining four heads.",
    a: "1/16",
    solution: "The probability of getting a head on a single toss is \\(\\frac{1}{2}\\). The tosses are independent, so the probability of four heads is \\(\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Each toss is independent and has a probability of 1/2 for heads.",
    solutionSteps: [
      {
        explanation: "Identify the probability of heads on one toss.",
        workingOut: "P(H) = \\frac{1}{2}"
      },
      {
        explanation: "Multiply the probability for four independent tosses.",
        workingOut: "P(HHHH) = \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2}"
      },
      {
        explanation: "Calculate the final product.",
        workingOut: "\\therefore\\; \\frac{1}{16}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q8b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A coin is tossed four times. Find the probability of obtaining four tails.",
    a: "1/16",
    solution: "The probability of getting a tail on a single toss is \\(\\frac{1}{2}\\). The probability of four tails is \\(\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Each toss has a probability of 1/2 for tails.",
    solutionSteps: [
      {
        explanation: "Identify the probability of tails on one toss.",
        workingOut: "P(T) = \\frac{1}{2}"
      },
      {
        explanation: "Multiply the probability for four independent tosses.",
        workingOut: "P(TTTT) = \\left(\\frac{1}{2}\\right)^4"
      },
      {
        explanation: "Simplify the calculation.",
        workingOut: "\\therefore\\; \\frac{1}{16}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q8c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A coin is tossed four times. Find the probability of obtaining head, tail, head, tail, in that order.",
    a: "1/16",
    solution: "The specified sequence is \\(HTHT\\). Each position has a probability of \\(\\frac{1}{2}\\). The probability of this exact sequence is \\(\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{16}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Determine the probability of this specific sequence of independent outcomes.",
    solutionSteps: [
      {
        explanation: "Identify the probability of each specific outcome in the sequence.",
        workingOut: "P(H) = \\frac{1}{2},\\quad P(T) = \\frac{1}{2}"
      },
      {
        explanation: "Multiply the probabilities in the exact order requested: H, T, H, T.",
        workingOut: "P(HTHT) = \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2}"
      },
      {
        explanation: "Determine the product.",
        workingOut: "\\therefore\\; \\frac{1}{16}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q8d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A coin is tossed four times. Find the probability of obtaining heads in the first three tosses but not in the fourth.",
    a: "1/16",
    solution: "This requires the sequence \\(HHHT\\). The probability of this exact sequence is \\(\\left(\\frac{1}{2}\\right)^3 \\times \\frac{1}{2} = \\frac{1}{16}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "This represents one specific outcome: H on the first three tosses, and T on the fourth.",
    solutionSteps: [
      {
        explanation: "Define the specific sequence of outcomes required.",
        workingOut: "\\mathrm{Sequence} = (H,\\; H,\\; H,\\; T)"
      },
      {
        explanation: "Multiply the probabilities of the independent events.",
        workingOut: "P(HHHT) = \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2}"
      },
      {
        explanation: "Calculate the final simplified fraction.",
        workingOut: "\\therefore\\; \\frac{1}{16}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q8e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A coin is tossed four times. Find the probability of obtaining a head in at least one of the four tosses.",
    a: "15/16",
    solution: "Using the complement rule, the probability of at least one head is \\(1 - P(\\text{no heads}) = 1 - P(\\text{four tails}) = 1 - \\frac{1}{16} = \\frac{15}{16}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Use the complement rule: subtract the probability of getting all tails from 1.",
    solutionSteps: [
      {
        explanation: "Find the probability of the complement event, which is getting all tails.",
        workingOut: "P(TTTT) = \\frac{1}{16}"
      },
      {
        explanation: "Subtract this probability from 1.",
        workingOut: "P(\\mathrm{at\\ least\\ one\\ H}) = 1 - P(TTTT)"
      },
      {
        explanation: "Calculate the difference.",
        workingOut: "\\therefore\\; 1 - \\frac{1}{16} = \\frac{15}{16}"
      }
    ],
    graphData: null
  },

  // QUESTION 9
  {
    id: "y10-15e-q9a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A fair six-sided die is rolled three times. Find the probability of obtaining three 5s.",
    a: "1/216",
    solution: "The probability of rolling a 5 on one roll is \\(\\frac{1}{6}\\). Since the rolls are independent, the probability of rolling three 5s is \\(\\left(\\frac{1}{6}\\right)^3 = \\frac{1}{216}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Determine the probability of rolling a 5 on a single die, and multiply it by itself three times.",
    solutionSteps: [
      {
        explanation: "Determine the probability of rolling a 5 on a single roll.",
        workingOut: "P(5) = \\frac{1}{6}"
      },
      {
        explanation: "Multiply this probability for three independent rolls.",
        workingOut: "P(5,\\; 5,\\; 5) = \\frac{1}{6} \\times \\frac{1}{6} \\times \\frac{1}{6}"
      },
      {
        explanation: "Find the product.",
        workingOut: "\\therefore\\; \\frac{1}{216}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q9b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A fair six-sided die is rolled three times. Find the probability of obtaining no 5s.",
    a: "125/216",
    solution: "The probability of not rolling a 5 is \\(\\frac{5}{6}\\). The rolls are independent, so the probability of no 5s is \\(\\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Find the probability of rolling any number other than 5 on each roll, then multiply the three independent probabilities.",
    solutionSteps: [
      {
        explanation: "Determine the probability of not rolling a 5 on a single roll.",
        workingOut: "P(\\mathrm{not\\ 5}) = \\frac{5}{6}"
      },
      {
        explanation: "Multiply the probability for three independent rolls.",
        workingOut: "P(\\mathrm{no\\ 5s}) = \\left(\\frac{5}{6}\\right)^3"
      },
      {
        explanation: "Find the product.",
        workingOut: "\\therefore\\; \\frac{125}{216}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q9c",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A fair six-sided die is rolled three times. Find the probability of obtaining three odd numbers.",
    a: "1/8",
    solution: "The odd numbers on a die are 1, 3, and 5. The probability of an odd number on a single roll is \\(\\frac{3}{6} = \\frac{1}{2}\\). The probability of three odd numbers is \\(\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Determine the probability of rolling an odd number on one roll, and raise it to the power of 3.",
    solutionSteps: [
      {
        explanation: "Find the probability of rolling an odd number (1, 3, or 5) on one roll.",
        workingOut: "P(\\mathrm{Odd}) = \\frac{3}{6} = \\frac{1}{2}"
      },
      {
        explanation: "Multiply the probability for three independent rolls.",
        workingOut: "P(\\mathrm{three\\ Odds}) = \\left(\\frac{1}{2}\\right)^3"
      },
      {
        explanation: "Simplify the fraction.",
        workingOut: "\\therefore\\; \\frac{1}{8}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q9d",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A fair six-sided die is rolled three times. Find the probability of obtaining three even numbers.",
    a: "1/8",
    solution: "The even numbers on a die are 2, 4, and 6. The probability of an even number on a single roll is \\(\\frac{3}{6} = \\frac{1}{2}\\). The probability of three even numbers is \\(\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Determine the probability of rolling an even number on one roll, and multiply it for three independent rolls.",
    solutionSteps: [
      {
        explanation: "Find the probability of rolling an even number (2, 4, or 6) on one roll.",
        workingOut: "P(\\mathrm{Even}) = \\frac{3}{6} = \\frac{1}{2}"
      },
      {
        explanation: "Multiply the probability for three independent rolls.",
        workingOut: "P(\\mathrm{three\\ Evens}) = \\left(\\frac{1}{2}\\right)^3"
      },
      {
        explanation: "Simplify the fraction.",
        workingOut: "\\therefore\\; \\frac{1}{8}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q9e",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A fair six-sided die is rolled three times. Find the probability of obtaining a 5 in the first two rolls only.",
    a: "5/216",
    solution: "This requires a 5 on the first two rolls and not a 5 on the third roll. The probability is \\(\\frac{1}{6} \\times \\frac{1}{6} \\times \\frac{5}{6} = \\frac{5}{216}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Determine the probability of the sequence (5, 5, non-5).",
    solutionSteps: [
      {
        explanation: "Determine the probabilities of getting a 5 on the first two rolls, and not a 5 on the third.",
        workingOut: "P(5_1) = \\frac{1}{6},\\quad P(5_2) = \\frac{1}{6},\\quad P(5_3') = \\frac{5}{6}"
      },
      {
        explanation: "Multiply these independent probabilities.",
        workingOut: "P(5,\\; 5,\\; \\mathrm{non\\text{-}5}) = \\frac{1}{6} \\times \\frac{1}{6} \\times \\frac{5}{6}"
      },
      {
        explanation: "Calculate the final product.",
        workingOut: "\\therefore\\; \\frac{5}{216}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q9f",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A fair six-sided die is rolled three times. Find the probability of obtaining a 5, not a 5, and a 5 in that order.",
    a: "5/216",
    solution: "This requires the specific sequence \\(5, \\text{not } 5, 5\\). The probability is \\(\\frac{1}{6} \\times \\frac{5}{6} \\times \\frac{1}{6} = \\frac{5}{216}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Determine the probability of the sequence (5, non-5, 5).",
    solutionSteps: [
      {
        explanation: "Determine the probabilities of rolling 5, not 5, and then 5.",
        workingOut: "P(5_1) = \\frac{1}{6},\\quad P(5_2') = \\frac{5}{6},\\quad P(5_3) = \\frac{1}{6}"
      },
      {
        explanation: "Multiply the independent probabilities.",
        workingOut: "P(5,\\; \\mathrm{non\\text{-}5},\\; 5) = \\frac{1}{6} \\times \\frac{5}{6} \\times \\frac{1}{6}"
      },
      {
        explanation: "Calculate the product.",
        workingOut: "\\therefore\\; \\frac{5}{216}"
      }
    ],
    graphData: null
  },

  // QUESTION 10
  {
    id: "y10-15e-q10a",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A box contains chocolates and toffees with green and red wrapping. The number of each type of confectionary and its wrapping colour is given in the table below. One item is removed from the box. Find the probability of obtaining an item with green wrapping.\n\n$$\\begin{array}{c|cc} & \\mathrm{Green\\ wrapping} & \\mathrm{Red\\ wrapping} \\\\ \\hline \\mathrm{Chocolate} & 36 & 48 \\\\ \\mathrm{Toffee} & 15 & 20 \\end{array}$$",
    a: "3/7",
    solution: "First, find the total number of items with green wrapping: \\(36 + 15 = 51\\). Next, calculate the grand total of all items: \\(36 + 48 + 15 + 20 = 119\\). The probability of obtaining a green wrapped item is \\(\\frac{51}{119} = \\frac{3}{7}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Find the total number of green items and divide by the grand total of all items in the box.",
    solutionSteps: [
      {
        explanation: "Sum the total number of green wrapped items.",
        workingOut: "\\mathrm{Green\\ wrapped} = 36 + 15 = 51"
      },
      {
        explanation: "Calculate the grand total of all items in the box.",
        workingOut: "\\mathrm{Grand\\ Total} = 36 + 48 + 15 + 20 = 119"
      },
      {
        explanation: "Find the probability by dividing the number of green items by the grand total.",
        workingOut: "P(\\mathrm{Green}) = \\frac{51}{119} = \\frac{3}{7}"
      }
    ],
    graphData: null
  },
  {
    id: "y10-15e-q10b",
    type: "short_answer",
    difficulty: "easy",
    timeLimit: 60,
    question: "A box contains chocolates and toffees with green and red wrapping. The number of each type of confectionary and its wrapping colour is given in the table below. One item is removed from the box. Find the probability of obtaining an item with green wrapping given that it is a chocolate.\n\n$$\\begin{array}{c|cc} & \\mathrm{Green\\ wrapping} & \\mathrm{Red\\ wrapping} \\\\ \\hline \\mathrm{Chocolate} & 36 & 48 \\\\ \\mathrm{Toffee} & 15 & 20 \\end{array}$$",
    a: "3/7",
    solution: "Since we are given that the item is a chocolate, the sample space is restricted to chocolates only. The total number of chocolates is \\(36 + 48 = 84\\). The number of chocolates with green wrapping is 36. The probability is \\(\\frac{36}{84} = \\frac{3}{7}\\).",
    t: "Sampling with replacement and without replacement",
    hint: "Use conditional probability: restrict the sample space to chocolates only, and find the fraction that are green.",
    solutionSteps: [
      {
        explanation: "Sum the total number of chocolates to find the new restricted sample space size.",
        workingOut: "\\mathrm{Total\\ Chocolate} = 36 + 48 = 84"
      },
      {
        explanation: "Identify the number of green chocolates.",
        workingOut: "\\mathrm{Green\\ Chocolate} = 36"
      },
      {
        explanation: "Divide the green chocolates by the total chocolates.",
        workingOut: "P(\\mathrm{Green} \\mid \\mathrm{Chocolate}) = \\frac{36}{84} = \\frac{3}{7}"
      }
    ],
    graphData: null
  }
];
