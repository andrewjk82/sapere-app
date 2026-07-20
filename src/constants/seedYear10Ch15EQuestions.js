export const Y10_CH15E_QUESTIONS = [
  {
    "id": "y10-15e-q1a",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that both cards are Spades.",
    "opts": [
      "\\(-0.0625\\)",
      "\\(-0.9375\\)",
      "\\(1/16\\)",
      "\\(1.0625\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Think about whether the draws are independent, and find the probability of drawing a Spade on each turn.",
    "solution": "Since the first card is replaced before drawing the second card, the two events are independent. The probability of drawing a Spade is \\(\\frac{13}{52} = \\frac{1}{4}\\). Thus, the probability of drawing two Spades is \\(\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{Spade}) = \\frac{13}{52} = \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{both\\ Spades}) = \\frac{1}{4} \\times \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{1}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/16. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q1b",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that neither card is a Spade.",
    "opts": [
      "\\(-0.4375\\)",
      "\\(-0.5625\\)",
      "\\(9/16\\)",
      "\\(1.5625\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "First find the probability of drawing a card that is not a Spade.",
    "solution": "The probability of not drawing a Spade is \\(1 - \\frac{1}{4} = \\frac{3}{4}\\). Since the card is replaced, the two draws are independent. The probability that neither card is a Spade is \\(\\frac{3}{4} \\times \\frac{3}{4} = \\frac{9}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{not\\ Spade}) = 1 - \\frac{1}{4} = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{neither\\ Spade}) = \\frac{3}{4} \\times \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{9}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 9/16. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(9/16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q1c",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that only one of the cards is a Spade.",
    "opts": [
      "\\(-0.375\\)",
      "\\(-0.625\\)",
      "\\(3/8\\)",
      "\\(1.375\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Identify the different orders in which you can draw exactly one Spade.",
    "solution": "The probability of drawing only one Spade can occur in two mutually exclusive ways: drawing a Spade then a non-Spade, or drawing a non-Spade then a Spade. The probability is \\(\\left(\\frac{1}{4} \\times \\frac{3}{4}\\right) + \\left(\\frac{3}{4} \\times \\frac{1}{4}\\right) = \\frac{3}{16} + \\frac{3}{16} = \\frac{6}{16} = \\frac{3}{8}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{Spade},\\; \\mathrm{non\\text{-}Spade}) = \\frac{1}{4} \\times \\frac{3}{4} = \\frac{3}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{non\\text{-}Spade},\\; \\mathrm{Spade}) = \\frac{3}{4} \\times \\frac{1}{4} = \\frac{3}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{only\\ one}) = \\frac{3}{16} + \\frac{3}{16} = \\frac{6}{16} = \\frac{3}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3/8. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(3/8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q1d",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that only the first card is a Spade.",
    "opts": [
      "\\(-0.1875\\)",
      "\\(-0.8125\\)",
      "\\(3/16\\)",
      "\\(1.1875\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The first card must be a Spade, and the second card must not be a Spade.",
    "solution": "This requires the first card to be a Spade and the second card to be a non-Spade. The probability is \\(\\frac{1}{4} \\times \\frac{3}{4} = \\frac{3}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{first\\ Spade}) = \\frac{1}{4}, quad P(\\mathrm{second\\ non\\text{-}Spade}) = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{only\\ first\\ Spade}) = \\frac{1}{4} \\times \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{3}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3/16. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(3/16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q1e",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that only the second card is a Spade.",
    "opts": [
      "\\(-0.1875\\)",
      "\\(-0.8125\\)",
      "\\(3/16\\)",
      "\\(1.1875\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "The first card must not be a Spade, and the second card must be a Spade.",
    "solution": "This requires the first card to be a non-Spade and the second card to be a Spade. The probability is \\(\\frac{3}{4} \\times \\frac{1}{4} = \\frac{3}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{first\\ non\\text{-}Spade}) = \\frac{3}{4}, quad P(\\mathrm{second\\ Spade}) = \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{only\\ second\\ Spade}) = \\frac{3}{4} \\times \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{3}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3/16. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(3/16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q1f",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A card is drawn at random from a standard deck of 52 playing cards. It is replaced and the deck is shuffled. A second card is then drawn. Find the probability that at least one of the cards is a Spade.",
    "opts": [
      "\\(-0.4375\\)",
      "\\(-0.5625\\)",
      "\\(7/16\\)",
      "\\(1.4375\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the complement rule: subtract the probability of getting no Spades from 1.",
    "solution": "The probability of at least one Spade is the complement of drawing no Spades: \\(1 - P(\\text{neither is a Spade}) = 1 - \\frac{9}{16} = \\frac{7}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{neither\\ Spade}) = \\frac{3}{4} \\times \\frac{3}{4} = \\frac{9}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{at\\ least\\ one\\ Spade}) = 1 - P(\\mathrm{neither\\ Spade})\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; 1 - \\frac{9}{16} = \\frac{7}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 7/16. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(7/16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q2a",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that both cards are Clubs.",
    "opts": [
      "\\(-0.058823529411764705\\)",
      "\\(-0.9411764705882353\\)",
      "\\(1/17\\)",
      "\\(1.0588235294117647\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Without replacement, the total number of cards and the number of Clubs both decrease by 1 for the second draw.",
    "solution": "For the first draw, the probability of drawing a Club is \\(\\frac{13}{52} = \\frac{1}{4}\\). Since the card is not replaced, 51 cards remain, of which 12 are Clubs. The probability that both are Clubs is \\(\\frac{13}{52} \\times \\frac{12}{51} = \\frac{1}{4} \\times \\frac{4}{17} = \\frac{1}{17}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(C_1) = \\frac{13}{52} = \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(C_2 \\mid C_1) = \\frac{12}{51} = \\frac{4}{17}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(C_1 \\cap C_2) = \\frac{1}{4} \\times \\frac{4}{17} = \\frac{1}{17}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/17. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/17\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q2b",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that neither card is a Club.",
    "opts": [
      "\\(-0.4411764705882353\\)",
      "\\(-0.5588235294117647\\)",
      "\\(19/34\\)",
      "\\(1.5588235294117647\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the probability of drawing two consecutive cards that are not Clubs, keeping in mind the deck is not replaced.",
    "solution": "There are 39 non-Clubs initially. The probability of drawing a non-Club first is \\(\\frac{39}{52} = \\frac{3}{4}\\). After drawing one non-Club, 38 non-Clubs remain out of 51 cards. The probability that neither is a Club is \\(\\frac{39}{52} \\times \\frac{38}{51} = \\frac{3}{4} \\times \\frac{38}{51} = \\frac{19}{34}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(C_1') = \\frac{39}{52} = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(C_2' \\mid C_1') = \\frac{38}{51}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{neither\\ Club}) = \\frac{3}{4} \\times \\frac{38}{51} = \\frac{114}{204} = \\frac{19}{34}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 19/34. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(19/34\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q2c",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that only one of the cards is a Club.",
    "opts": [
      "\\(-0.38235294117647056\\)",
      "\\(-0.6176470588235294\\)",
      "\\(13/34\\)",
      "\\(1.3823529411764706\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Sum the probabilities of (Club, non-Club) and (non-Club, Club).",
    "solution": "This can happen in two ways: Club then non-Club, or non-Club then Club. The probability is \\(\\left(\\frac{13}{52} \\times \\frac{39}{51}\\right) + \\left(\\frac{39}{52} \\times \\frac{13}{51}\\right) = \\left(\\frac{1}{4} \\times \\frac{39}{51}\\right) + \\left(\\frac{3}{4} \\times \\frac{13}{51}\\right) = \\frac{39}{204} + \\frac{39}{204} = \\frac{78}{204} = \\frac{13}{34}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(C \\cap C') = \\frac{13}{52} \\times \\frac{39}{51} = \\frac{1}{4} \\times \\frac{13}{17} = \\frac{13}{68}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(C' \\cap C) = \\frac{39}{52} \\times \\frac{13}{51} = \\frac{3}{4} \\times \\frac{13}{51} = \\frac{13}{68}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{only\\ one\\ Club}) = \\frac{13}{68} + \\frac{13}{68} = \\frac{26}{68} = \\frac{13}{34}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 13/34. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(13/34\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q2d",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that only the first card is a Club.",
    "opts": [
      "\\(-0.19117647058823528\\)",
      "\\(-0.8088235294117647\\)",
      "\\(13/68\\)",
      "\\(1.1911764705882353\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Calculate the probability of drawing a Club, then a non-Club without replacing the first.",
    "solution": "This requires the first card to be a Club and the second card to be a non-Club. The probability is \\(\\frac{13}{52} \\times \\frac{39}{51} = \\frac{1}{4} \\times \\frac{39}{51} = \\frac{39}{204} = \\frac{13}{68}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(C_1) = \\frac{13}{52} = \\frac{1}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(C_2' \\mid C_1) = \\frac{39}{51}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(C_1 \\cap C_2') = \\frac{1}{4} \\times \\frac{39}{51} = \\frac{39}{204} = \\frac{13}{68}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 13/68. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(13/68\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q2e",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that only the second card is a Club.",
    "opts": [
      "\\(-0.19117647058823528\\)",
      "\\(-0.8088235294117647\\)",
      "\\(13/68\\)",
      "\\(1.1911764705882353\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Calculate the probability of drawing a non-Club, then a Club without replacing the first.",
    "solution": "This requires the first card to be a non-Club and the second card to be a Club. The probability is \\(\\frac{39}{52} \\times \\frac{13}{51} = \\frac{3}{4} \\times \\frac{13}{51} = \\frac{39}{204} = \\frac{13}{68}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(C_1') = \\frac{39}{52} = \\frac{3}{4}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(C_2 \\mid C_1') = \\frac{13}{51}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(C_1' \\cap C_2) = \\frac{3}{4} \\times \\frac{13}{51} = \\frac{39}{204} = \\frac{13}{68}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 13/68. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(13/68\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q2f",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "One card is drawn at random from a standard deck of 52 playing cards. It is not replaced. A second card is then drawn. Find the probability that at least one of the cards is a Club.",
    "opts": [
      "\\(-0.4411764705882353\\)",
      "\\(-0.5588235294117647\\)",
      "\\(15/34\\)",
      "\\(1.4411764705882353\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Calculate the complement of drawing no Club cards.",
    "solution": "The probability of at least one Club is the complement of neither being a Club: \\(1 - P(\\text{neither is a Club}) = 1 - \\frac{19}{34} = \\frac{15}{34}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{neither\\ Club}) = \\frac{19}{34}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{at\\ least\\ one\\ Club}) = 1 - P(\\mathrm{neither\\ Club})\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; 1 - \\frac{19}{34} = \\frac{15}{34}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 15/34. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(15/34\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q3a",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A bag contains 7 blue balls and 6 yellow balls. A ball is drawn and its colour noted. It is not replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining a blue ball followed by a yellow ball.",
    "opts": [
      "\\(-0.2692307692307692\\)",
      "\\(-0.7307692307692308\\)",
      "\\(7/26\\)",
      "\\(1.2692307692307692\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the probability of blue first, then multiply by the probability of yellow given one blue ball is gone.",
    "solution": "The probability of drawing a blue ball first is \\(\\frac{7}{13}\\). Since it is not replaced, 12 balls remain, of which 6 are yellow. The probability of obtaining blue then yellow is \\(\\frac{7}{13} \\times \\frac{6}{12} = \\frac{7}{13} \\times \\frac{1}{2} = \\frac{7}{26}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(B_1) = \\frac{7}{13}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(Y_2 \\mid B_1) = \\frac{6}{12} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(B_1 \\cap Y_2) = \\frac{7}{13} \\times \\frac{1}{2} = \\frac{7}{26}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 7/26. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(7/26\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q3b",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A bag contains 7 blue balls and 6 yellow balls. A ball is drawn and its colour noted. It is not replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining a blue and a yellow ball in any order.",
    "opts": [
      "\\(-0.46153846153846156\\)",
      "\\(-0.5384615384615384\\)",
      "\\(7/13\\)",
      "\\(1.5384615384615383\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Add the probability of (blue, yellow) to the probability of (yellow, blue).",
    "solution": "This can occur as blue then yellow, or yellow then blue. The probability is \\(P(B_1 \\cap Y_2) + P(Y_1 \\cap B_2) = \\left(\\frac{7}{13} \\times \\frac{6}{12}\\right) + \\left(\\frac{6}{13} \\times \\frac{7}{12}\\right) = \\frac{42}{156} + \\frac{42}{156} = \\frac{84}{156} = \\frac{7}{13}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(B_1 \\cap Y_2) = \\frac{7}{13} \\times \\frac{6}{12} = \\frac{7}{26}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(Y_1 \\cap B_2) = \\frac{6}{13} \\times \\frac{7}{12} = \\frac{7}{26}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{one\\ of\\ each}) = \\frac{7}{26} + \\frac{7}{26} = \\frac{14}{26} = \\frac{7}{13}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 7/13. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(7/13\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q3c",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A bag contains 7 blue balls and 6 yellow balls. A ball is drawn and its colour noted. It is not replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining two blue balls.",
    "opts": [
      "\\(-0.2692307692307692\\)",
      "\\(-0.7307692307692308\\)",
      "\\(7/26\\)",
      "\\(1.2692307692307692\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the probability of drawing blue on both trials without replacement.",
    "solution": "The probability of drawing a blue ball first is \\(\\frac{7}{13}\\). Since it is not replaced, 6 blue balls remain out of 12 total. The probability of two blue balls is \\(\\frac{7}{13} \\times \\frac{6}{12} = \\frac{7}{26}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(B_1) = \\frac{7}{13}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(B_2 \\mid B_1) = \\frac{6}{12} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(B_1 \\cap B_2) = \\frac{7}{13} \\times \\frac{1}{2} = \\frac{7}{26}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 7/26. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(7/26\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q3d",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A bag contains 7 blue balls and 6 yellow balls. A ball is drawn and its colour noted. It is not replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining two yellow balls.",
    "opts": [
      "\\(-0.19230769230769232\\)",
      "\\(-0.8076923076923077\\)",
      "\\(5/26\\)",
      "\\(1.1923076923076923\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Calculate the probability of drawing two yellow balls in a row without replacement.",
    "solution": "The probability of drawing a yellow ball first is \\(\\frac{6}{13}\\). Since it is not replaced, 5 yellow balls remain out of 12. The probability of two yellow balls is \\(\\frac{6}{13} \\times \\frac{5}{12} = \\frac{30}{156} = \\frac{5}{26}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(Y_1) = \\frac{6}{13}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(Y_2 \\mid Y_1) = \\frac{5}{12}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(Y_1 \\cap Y_2) = \\frac{6}{13} \\times \\frac{5}{12} = \\frac{30}{156} = \\frac{5}{26}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5/26. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(5/26\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q4a",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Chloe has 6 yellow beads, 4 pink beads and 5 green beads in a jar. Chloe randomly takes one bead out and then a second (no replacement). Find the probability that she obtains 2 yellow beads.",
    "opts": [
      "\\(-0.14285714285714285\\)",
      "\\(-0.8571428571428572\\)",
      "\\(1/7\\)",
      "\\(1.1428571428571428\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Work out the total number of beads first, then apply the multiplication rule without replacement.",
    "solution": "The total number of beads is \\(6 + 4 + 5 = 15\\). The probability of drawing a yellow bead first is \\(\\frac{6}{15}\\). Since the bead is not replaced, 5 yellow beads remain out of 14. The probability of drawing 2 yellow beads is \\(\\frac{6}{15} \\times \\frac{5}{14} = \\frac{2}{5} \\times \\frac{5}{14} = \\frac{2}{14} = \\frac{1}{7}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\mathrm{Total} = 6 + 4 + 5 = 15\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(Y_1) = \\frac{6}{15} = \\frac{2}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(Y_2 \\mid Y_1) = \\frac{5}{14}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/7. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q4b",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Chloe has 6 yellow beads, 4 pink beads and 5 green beads in a jar. Chloe randomly takes one bead out and then a second (no replacement). Find the probability that she obtains a yellow and a pink bead in any order.",
    "opts": [
      "\\(-0.22857142857142856\\)",
      "\\(-0.7714285714285715\\)",
      "\\(8/35\\)",
      "\\(1.2285714285714286\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the probabilities of yellow then pink and pink then yellow, then add them.",
    "solution": "This can happen as yellow then pink, or pink then yellow. The probability is \\(P(Y_1 \\cap P_2) + P(P_1 \\cap Y_2) = \\left(\\frac{6}{15} \\times \\frac{4}{14}\\right) + \\left(\\frac{4}{15} \\times \\frac{6}{14}\\right) = \\frac{24}{210} + \\frac{24}{210} = \\frac{48}{210} = \\frac{8}{35}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(Y_1 \\cap P_2) = \\frac{6}{15} \\times \\frac{4}{14} = \\frac{24}{210}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(P_1 \\cap Y_2) = \\frac{4}{15} \\times \\frac{6}{14} = \\frac{24}{210}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{yellow\\ and\\ pink}) = \\frac{24}{210} + \\frac{24}{210} = \\frac{48}{210} = \\frac{8}{35}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 8/35. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(8/35\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q4c",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Chloe has 6 yellow beads, 4 pink beads and 5 green beads in a jar. Chloe randomly takes one bead out and then a second (no replacement). Find the probability that she obtains a green and a yellow bead in any order.",
    "opts": [
      "\\(-0.2857142857142857\\)",
      "\\(-0.7142857142857143\\)",
      "\\(2/7\\)",
      "\\(1.2857142857142856\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Add the probability of (green, yellow) to the probability of (yellow, green).",
    "solution": "This can happen as green then yellow, or yellow then green. The probability is \\(P(G_1 \\cap Y_2) + P(Y_1 \\cap G_2) = \\left(\\frac{5}{15} \\times \\frac{6}{14}\\right) + \\left(\\frac{6}{15} \\times \\frac{5}{14}\\right) = \\frac{30}{210} + \\frac{30}{210} = \\frac{60}{210} = \\frac{2}{7}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(G_1 \\cap Y_2) = \\frac{5}{15} \\times \\frac{6}{14} = \\frac{30}{210}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(Y_1 \\cap G_2) = \\frac{6}{15} \\times \\frac{5}{14} = \\frac{30}{210}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{green\\ and\\ yellow}) = \\frac{30}{210} + \\frac{30}{210} = \\frac{60}{210} = \\frac{2}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2/7. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(2/7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q4d",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Chloe has 6 yellow beads, 4 pink beads and 5 green beads in a jar. Chloe randomly takes one bead out and then a second (no replacement). Find the probability that she obtains 2 pink beads.",
    "opts": [
      "\\(-0.05714285714285714\\)",
      "\\(-0.9428571428571428\\)",
      "\\(2/35\\)",
      "\\(1.0571428571428572\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the product of drawing a pink bead on the first and second draws without replacement.",
    "solution": "The probability of drawing a pink bead first is \\(\\frac{4}{15}\\). Since it is not replaced, 3 pink beads remain out of 14. The probability of drawing 2 pink beads is \\(\\frac{4}{15} \\times \\frac{3}{14} = \\frac{12}{210} = \\frac{2}{35}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(P_1) = \\frac{4}{15}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(P_2 \\mid P_1) = \\frac{3}{14}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(P_1 \\cap P_2) = \\frac{4}{15} \\times \\frac{3}{14} = \\frac{12}{210} = \\frac{2}{35}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 2/35. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(2/35\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q5a",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Cube A has 4 green faces and 2 yellow faces, cube B has 5 green faces and 1 yellow face, and cube C has 3 green faces and 3 yellow faces. The 3 cubes are tossed. Find the probability of getting 3 green faces uppermost.",
    "opts": [
      "\\(-0.2777777777777778\\)",
      "\\(-0.7222222222222222\\)",
      "\\(5/18\\)",
      "\\(1.2777777777777777\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the probability of green for each cube individually, then multiply them.",
    "solution": "The probability of green for Cube A is \\(\\frac{4}{6} = \\frac{2}{3}\\), for Cube B is \\(\\frac{5}{6}\\), and for Cube C is \\(\\frac{3}{6} = \\frac{1}{2}\\). The probability of all 3 being green is \\(\\frac{2}{3} \\times \\frac{5}{6} \\times \\frac{1}{2} = \\frac{10}{36} = \\frac{5}{18}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(G_A) = \\frac{2}{3}, quad P(G_B) = \\frac{5}{6}, quad P(G_C) = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{all\\ green}) = \\frac{2}{3} \\times \\frac{5}{6} \\times \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{10}{36} = \\frac{5}{18}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5/18. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(5/18\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q5b",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Cube A has 4 green faces and 2 yellow faces, cube B has 5 green faces and 1 yellow face, and cube C has 3 green faces and 3 yellow faces. The 3 cubes are tossed. Find the probability of getting 3 yellow faces uppermost.",
    "opts": [
      "\\(-0.027777777777777776\\)",
      "\\(-0.9722222222222222\\)",
      "\\(1/36\\)",
      "\\(1.0277777777777777\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Determine the probability of yellow for each cube, and multiply the values.",
    "solution": "The probability of yellow for Cube A is \\(\\frac{2}{6} = \\frac{1}{3}\\), for Cube B is \\(\\frac{1}{6}\\), and for Cube C is \\(\\frac{3}{6} = \\frac{1}{2}\\). The probability of all 3 being yellow is \\(\\frac{1}{3} \\times \\frac{1}{6} \\times \\frac{1}{2} = \\frac{1}{36}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(Y_A) = \\frac{1}{3}, quad P(Y_B) = \\frac{1}{6}, quad P(Y_C) = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{all\\ yellow}) = \\frac{1}{3} \\times \\frac{1}{6} \\times \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{1}{36}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/36. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/36\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q5c",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Cube A has 4 green faces and 2 yellow faces, cube B has 5 green faces and 1 yellow face, and cube C has 3 green faces and 3 yellow faces. The 3 cubes are tossed. Find the probability of getting green with A and B, and yellow with C.",
    "opts": [
      "\\(-0.2777777777777778\\)",
      "\\(-0.7222222222222222\\)",
      "\\(5/18\\)",
      "\\(1.2777777777777777\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Multiply the probability of green for A and B, and yellow for C.",
    "solution": "We need green on A, green on B, and yellow on C. The probability is \\(\\frac{2}{3} \\times \\frac{5}{6} \\times \\frac{1}{2} = \\frac{10}{36} = \\frac{5}{18}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(G_A) = \\frac{2}{3}, quad P(G_B) = \\frac{5}{6}, quad P(Y_C) = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(G_A \\cap G_B \\cap Y_C) = \\frac{2}{3} \\times \\frac{5}{6} \\times \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{10}{36} = \\frac{5}{18}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5/18. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(5/18\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q5d",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Cube A has 4 green faces and 2 yellow faces, cube B has 5 green faces and 1 yellow face, and cube C has 3 green faces and 3 yellow faces. The 3 cubes are tossed. Find the probability of getting green with A, and yellow with B and C.",
    "opts": [
      "\\(-0.05555555555555555\\)",
      "\\(-0.9444444444444444\\)",
      "\\(1/18\\)",
      "\\(1.0555555555555556\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Multiply the probability of green for A, and yellow for B and C.",
    "solution": "We need green on A, yellow on B, and yellow on C. The probability is \\(\\frac{2}{3} \\times \\frac{1}{6} \\times \\frac{1}{2} = \\frac{2}{36} = \\frac{1}{18}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(G_A) = \\frac{2}{3}, quad P(Y_B) = \\frac{1}{6}, quad P(Y_C) = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(G_A \\cap Y_B \\cap Y_C) = \\frac{2}{3} \\times \\frac{1}{6} \\times \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{2}{36} = \\frac{1}{18}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/18. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/18\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q5e",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Cube A has 4 green faces and 2 yellow faces, cube B has 5 green faces and 1 yellow face, and cube C has 3 green faces and 3 yellow faces. The 3 cubes are tossed. Find the probability of getting at least 1 green face uppermost.",
    "opts": [
      "\\(-0.02777777777777779\\)",
      "\\(-0.9722222222222222\\)",
      "\\(35/36\\)",
      "\\(1.9722222222222223\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the complement rule by subtracting the probability of getting all yellow faces from 1.",
    "solution": "Using the complement rule, the probability of getting at least one green face is \\(1 - P(\\text{all yellow}) = 1 - \\frac{1}{36} = \\frac{35}{36}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{all\\ yellow}) = \\frac{1}{36}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{at\\ least\\ 1\\ green}) = 1 - P(\\mathrm{all\\ yellow})\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; 1 - \\frac{1}{36} = \\frac{35}{36}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 35/36. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(35/36\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q6a",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Leo has a container with 24 mints and 36 caramels. Leo takes out one item from the container and then a second without replacement. Find the probability of obtaining two mints.",
    "opts": [
      "\\(-0.15593220338983052\\)",
      "\\(-0.8440677966101695\\)",
      "\\(46/295\\)",
      "\\(1.1559322033898305\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the total number of items, then calculate the probability of two consecutive mint draws without replacement.",
    "solution": "The total number of items is \\(24 + 36 = 60\\). The probability of drawing a mint first is \\(\\frac{24}{60} = \\frac{2}{5}\\). Since there is no replacement, 23 mints remain out of 59 total items. The probability of obtaining two mints is \\(\\frac{2}{5} \\times \\frac{23}{59} = \\frac{46}{295}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\mathrm{Total} = 24 + 36 = 60\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(M_1) = \\frac{24}{60} = \\frac{2}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(M_2 \\mid M_1) = \\frac{23}{59}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 46/295. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(46/295\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q6b",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Leo has a container with 24 mints and 36 caramels. Leo takes out one item from the container and then a second without replacement. Find the probability of obtaining two caramels.",
    "opts": [
      "\\(-0.3559322033898305\\)",
      "\\(-0.6440677966101696\\)",
      "\\(21/59\\)",
      "\\(1.3559322033898304\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Multiply the probability of drawing a caramel first by the probability of drawing another caramel from the remaining items.",
    "solution": "The total number of items is 60. The probability of drawing a caramel first is \\(\\frac{36}{60} = \\frac{3}{5}\\). Without replacement, 35 caramels remain out of 59. The probability of obtaining two caramels is \\(\\frac{3}{5} \\times \\frac{35}{59} = \\frac{3 \\times 7}{59} = \\frac{21}{59}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(C_1) = \\frac{36}{60} = \\frac{3}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(C_2 \\mid C_1) = \\frac{35}{59}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(C_1 \\cap C_2) = \\frac{3}{5} \\times \\frac{35}{59} = \\frac{105}{295} = \\frac{21}{59}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 21/59. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(21/59\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q6c",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "Leo has a container with 24 mints and 36 caramels. Leo takes out one item from the container and then a second without replacement. Find the probability of obtaining a mint and a caramel in any order.",
    "opts": [
      "\\(-0.488135593220339\\)",
      "\\(-0.5118644067796609\\)",
      "\\(144/295\\)",
      "\\(1.488135593220339\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the sum of the probabilities for both combinations: (mint, caramel) and (caramel, mint).",
    "solution": "This can happen as mint then caramel, or caramel then mint. The probability is \\(P(M_1 \\cap C_2) + P(C_1 \\cap M_2) = \\left(\\frac{24}{60} \\times \\frac{36}{59}\\right) + \\left(\\frac{36}{60} \\times \\frac{24}{59}\\right) = \\left(\\frac{2}{5} \\times \\frac{36}{59}\\right) + \\left(\\frac{3}{5} \\times \\frac{24}{59}\\right) = \\frac{72}{295} + \\frac{72}{295} = \\frac{144}{295}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(M_1 \\cap C_2) = \\frac{24}{60} \\times \\frac{36}{59} = \\frac{2}{5} \\times \\frac{36}{59} = \\frac{72}{295}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(C_1 \\cap M_2) = \\frac{36}{60} \\times \\frac{24}{59} = \\frac{3}{5} \\times \\frac{24}{59} = \\frac{72}{295}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{one\\ of\\ each}) = \\frac{72}{295} + \\frac{72}{295} = \\frac{144}{295}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 144/295. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(144/295\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q7a",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A bag contains 12 purple balls and 8 orange balls. A ball is drawn and its colour noted. It is replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining an orange ball followed by a purple ball.",
    "opts": [
      "\\(-0.24\\)",
      "\\(-0.76\\)",
      "\\(6/25\\)",
      "\\(1.24\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Since the draws are with replacement, the probabilities remain the same for each draw.",
    "solution": "The probability of orange is \\(\\frac{8}{20} = \\frac{2}{5}\\) and purple is \\(\\frac{12}{20} = \\frac{3}{5}\\). Since the ball is replaced, the events are independent. The probability of orange followed by purple is \\(\\frac{2}{5} \\times \\frac{3}{5} = \\frac{6}{25}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{Orange}) = \\frac{8}{20} = \\frac{2}{5}, quad P(\\mathrm{Purple}) = \\frac{12}{20} = \\frac{3}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{Orange},\\; \\mathrm{Purple}) = \\frac{2}{5} \\times \\frac{3}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{6}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 6/25. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(6/25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q7b",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A bag contains 12 purple balls and 8 orange balls. A ball is drawn and its colour noted. It is replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining an orange and a purple ball in any order.",
    "opts": [
      "\\(-0.48\\)",
      "\\(-0.52\\)",
      "\\(12/25\\)",
      "\\(1.48\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Add the probability of (orange, purple) to the probability of (purple, orange).",
    "solution": "This can happen as orange then purple, or purple then orange. The probability is \\(P(O_1 \\cap P_2) + P(P_1 \\cap O_2) = \\left(\\frac{2}{5} \\times \\frac{3}{5}\\right) + \\left(\\frac{3}{5} \\times \\frac{2}{5}\\right) = \\frac{6}{25} + \\frac{6}{25} = \\frac{12}{25}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(O_1 \\cap P_2) = \\frac{2}{5} \\times \\frac{3}{5} = \\frac{6}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(P_1 \\cap O_2) = \\frac{3}{5} \\times \\frac{2}{5} = \\frac{6}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{one\\ of\\ each}) = \\frac{6}{25} + \\frac{6}{25} = \\frac{12}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 12/25. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(12/25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q7c",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A bag contains 12 purple balls and 8 orange balls. A ball is drawn and its colour noted. It is replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining two orange balls.",
    "opts": [
      "\\(-0.16\\)",
      "\\(-0.84\\)",
      "\\(4/25\\)",
      "\\(1.16\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Multiply the probability of drawing an orange ball by itself since the ball is replaced.",
    "solution": "The probability of orange on any draw is \\(\\frac{2}{5}\\). Since there is replacement, the probability of drawing two orange balls is \\(\\frac{2}{5} \\times \\frac{2}{5} = \\frac{4}{25}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{Orange}) = \\frac{2}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{two\\ Orange}) = \\frac{2}{5} \\times \\frac{2}{5}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{4}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 4/25. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(4/25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q7d",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A bag contains 12 purple balls and 8 orange balls. A ball is drawn and its colour noted. It is replaced. A second ball is then drawn and its colour noted. Find the probability of obtaining two balls of the same colour.",
    "opts": [
      "\\(-0.48\\)",
      "\\(-0.52\\)",
      "\\(13/25\\)",
      "\\(1.52\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the probability of two purple balls and two orange balls, then add them together.",
    "solution": "This requires either two purple balls or two orange balls. The probability is \\(P(P_1 \\cap P_2) + P(O_1 \\cap O_2) = \\left(\\frac{3}{5} \\times \\frac{3}{5}\\right) + \\left(\\frac{2}{5} \\times \\frac{2}{5}\\right) = \\frac{9}{25} + \\frac{4}{25} = \\frac{13}{25}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{two\\ Purple}) = \\frac{3}{5} \\times \\frac{3}{5} = \\frac{9}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{two\\ Orange}) = \\frac{2}{5} \\times \\frac{2}{5} = \\frac{4}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{same\\ colour}) = \\frac{9}{25} + \\frac{4}{25} = \\frac{13}{25}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 13/25. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(13/25\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q8a",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A coin is tossed four times. Find the probability of obtaining four heads.",
    "opts": [
      "\\(-0.0625\\)",
      "\\(-0.9375\\)",
      "\\(1/16\\)",
      "\\(1.0625\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Each toss is independent and has a probability of 1/2 for heads.",
    "solution": "The probability of getting a head on a single toss is \\(\\frac{1}{2}\\). The tosses are independent, so the probability of four heads is \\(\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(H) = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(HHHH) = \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{1}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/16. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q8b",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A coin is tossed four times. Find the probability of obtaining four tails.",
    "opts": [
      "\\(-0.0625\\)",
      "\\(-0.9375\\)",
      "\\(1/16\\)",
      "\\(1.0625\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Each toss has a probability of 1/2 for tails.",
    "solution": "The probability of getting a tail on a single toss is \\(\\frac{1}{2}\\). The probability of four tails is \\(\\left(\\frac{1}{2}\\right)^4 = \\frac{1}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(T) = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(TTTT) = \\left(\\frac{1}{2}\\right)^4\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{1}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/16. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q8c",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A coin is tossed four times. Find the probability of obtaining head, tail, head, tail, in that order.",
    "opts": [
      "\\(-0.0625\\)",
      "\\(-0.9375\\)",
      "\\(1/16\\)",
      "\\(1.0625\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Determine the probability of this specific sequence of independent outcomes.",
    "solution": "The specified sequence is \\(HTHT\\). Each position has a probability of \\(\\frac{1}{2}\\). The probability of this exact sequence is \\(\\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(H) = \\frac{1}{2}, quad P(T) = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(HTHT) = \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{1}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/16. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q8d",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A coin is tossed four times. Find the probability of obtaining heads in the first three tosses but not in the fourth.",
    "opts": [
      "\\(-0.0625\\)",
      "\\(-0.9375\\)",
      "\\(1/16\\)",
      "\\(1.0625\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "This represents one specific outcome: H on the first three tosses, and T on the fourth.",
    "solution": "This requires the sequence \\(HHHT\\). The probability of this exact sequence is \\(\\left(\\frac{1}{2}\\right)^3 \\times \\frac{1}{2} = \\frac{1}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\mathrm{Sequence} = (H,\\; H,\\; H,\\; T)\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(HHHT) = \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2} \\times \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{1}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/16. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q8e",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A coin is tossed four times. Find the probability of obtaining a head in at least one of the four tosses.",
    "opts": [
      "\\(-0.0625\\)",
      "\\(-0.9375\\)",
      "\\(15/16\\)",
      "\\(1.9375\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use the complement rule: subtract the probability of getting all tails from 1.",
    "solution": "Using the complement rule, the probability of at least one head is \\(1 - P(\\text{no heads}) = 1 - P(\\text{four tails}) = 1 - \\frac{1}{16} = \\frac{15}{16}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(TTTT) = \\frac{1}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{at\\ least\\ one\\ H}) = 1 - P(TTTT)\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; 1 - \\frac{1}{16} = \\frac{15}{16}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 15/16. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(15/16\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q9a",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A fair six-sided die is rolled three times. Find the probability of obtaining three 5s.",
    "opts": [
      "\\(-0.004629629629629629\\)",
      "\\(-0.9953703703703703\\)",
      "\\(1/216\\)",
      "\\(1.0046296296296295\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Determine the probability of rolling a 5 on a single die, and multiply it by itself three times.",
    "solution": "The probability of rolling a 5 on one roll is \\(\\frac{1}{6}\\). Since the rolls are independent, the probability of rolling three 5s is \\(\\left(\\frac{1}{6}\\right)^3 = \\frac{1}{216}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(5) = \\frac{1}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(5,\\; 5,\\; 5) = \\frac{1}{6} \\times \\frac{1}{6} \\times \\frac{1}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{1}{216}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/216. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/216\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q9b",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A fair six-sided die is rolled three times. Find the probability of obtaining no 5s.",
    "opts": [
      "\\(-0.4212962962962963\\)",
      "\\(-0.5787037037037037\\)",
      "\\(125/216\\)",
      "\\(1.5787037037037037\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the probability of rolling any number other than 5 on each roll, then multiply the three independent probabilities.",
    "solution": "The probability of not rolling a 5 is \\(\\frac{5}{6}\\). The rolls are independent, so the probability of no 5s is \\(\\left(\\frac{5}{6}\\right)^3 = \\frac{125}{216}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{not\\ 5}) = \\frac{5}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{no\\ 5s}) = \\left(\\frac{5}{6}\\right)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{125}{216}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 125/216. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(125/216\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q9c",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A fair six-sided die is rolled three times. Find the probability of obtaining three odd numbers.",
    "opts": [
      "\\(-0.125\\)",
      "\\(-0.875\\)",
      "\\(1/8\\)",
      "\\(1.125\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Determine the probability of rolling an odd number on one roll, and raise it to the power of 3.",
    "solution": "The odd numbers on a die are 1, 3, and 5. The probability of an odd number on a single roll is \\(\\frac{3}{6} = \\frac{1}{2}\\). The probability of three odd numbers is \\(\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{Odd}) = \\frac{3}{6} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{three\\ Odds}) = \\left(\\frac{1}{2}\\right)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{1}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/8. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q9d",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A fair six-sided die is rolled three times. Find the probability of obtaining three even numbers.",
    "opts": [
      "\\(-0.125\\)",
      "\\(-0.875\\)",
      "\\(1/8\\)",
      "\\(1.125\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Determine the probability of rolling an even number on one roll, and multiply it for three independent rolls.",
    "solution": "The even numbers on a die are 2, 4, and 6. The probability of an even number on a single roll is \\(\\frac{3}{6} = \\frac{1}{2}\\). The probability of three even numbers is \\(\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(\\mathrm{Even}) = \\frac{3}{6} = \\frac{1}{2}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(\\mathrm{three\\ Evens}) = \\left(\\frac{1}{2}\\right)^3\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{1}{8}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 1/8. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(1/8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q9e",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A fair six-sided die is rolled three times. Find the probability of obtaining a 5 in the first two rolls only.",
    "opts": [
      "\\(-0.023148148148148147\\)",
      "\\(-0.9768518518518519\\)",
      "\\(5/216\\)",
      "\\(1.0231481481481481\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Determine the probability of the sequence (5, 5, non-5).",
    "solution": "This requires a 5 on the first two rolls and not a 5 on the third roll. The probability is \\(\\frac{1}{6} \\times \\frac{1}{6} \\times \\frac{5}{6} = \\frac{5}{216}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(5_1) = \\frac{1}{6}, quad P(5_2) = \\frac{1}{6}, quad P(5_3') = \\frac{5}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(5,\\; 5,\\; \\mathrm{non\\text{-}5}) = \\frac{1}{6} \\times \\frac{1}{6} \\times \\frac{5}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{5}{216}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5/216. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(5/216\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q9f",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A fair six-sided die is rolled three times. Find the probability of obtaining a 5, not a 5, and a 5 in that order.",
    "opts": [
      "\\(-0.023148148148148147\\)",
      "\\(-0.9768518518518519\\)",
      "\\(5/216\\)",
      "\\(1.0231481481481481\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Determine the probability of the sequence (5, non-5, 5).",
    "solution": "This requires the specific sequence \\(5, \\text{not } 5, 5\\). The probability is \\(\\frac{1}{6} \\times \\frac{5}{6} \\times \\frac{1}{6} = \\frac{5}{216}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(P(5_1) = \\frac{1}{6}, quad P(5_2') = \\frac{5}{6}, quad P(5_3) = \\frac{1}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(P(5,\\; \\mathrm{non\\text{-}5},\\; 5) = \\frac{1}{6} \\times \\frac{5}{6} \\times \\frac{1}{6}\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(\\therefore\\; \\frac{5}{216}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 5/216. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(5/216\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q10a",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A box contains chocolates and toffees with green and red wrapping. The number of each type of confectionary and its wrapping colour is given in the table below. One item is removed from the box. Find the probability of obtaining an item with green wrapping.\n\n\\(\\begin{array}{c|cc} & \\mathrm{Green\\ wrapping} & \\mathrm{Red\\ wrapping} \\\\ \\hline \\mathrm{Chocolate} & 36 & 48 \\\\ \\mathrm{Toffee} & 15 & 20 \\end{array}\\)",
    "opts": [
      "\\(-0.42857142857142855\\)",
      "\\(-0.5714285714285714\\)",
      "\\(3/7\\)",
      "\\(1.4285714285714286\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Find the total number of green items and divide by the grand total of all items in the box.",
    "solution": "First, find the total number of items with green wrapping: \\(36 + 15 = 51\\). Next, calculate the grand total of all items: \\(36 + 48 + 15 + 20 = 119\\). The probability of obtaining a green wrapped item is \\(\\frac{51}{119} = \\frac{3}{7}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\mathrm{Green\\ wrapped} = 36 + 15 = 51\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\mathrm{Grand\\ Total} = 36 + 48 + 15 + 20 = 119\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{Green}) = \\frac{51}{119} = \\frac{3}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3/7. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(3/7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "y10-15e-q10b",
    "topicId": "y10-15e",
    "c": "15E",
    "t": "Sampling with replacement and without replacement",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 60,
    "question": "A box contains chocolates and toffees with green and red wrapping. The number of each type of confectionary and its wrapping colour is given in the table below. One item is removed from the box. Find the probability of obtaining an item with green wrapping given that it is a chocolate.\n\n\\(\\begin{array}{c|cc} & \\mathrm{Green\\ wrapping} & \\mathrm{Red\\ wrapping} \\\\ \\hline \\mathrm{Chocolate} & 36 & 48 \\\\ \\mathrm{Toffee} & 15 & 20 \\end{array}\\)",
    "opts": [
      "\\(-0.42857142857142855\\)",
      "\\(-0.5714285714285714\\)",
      "\\(3/7\\)",
      "\\(1.4285714285714286\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "Use conditional probability: restrict the sample space to chocolates only, and find the fraction that are green.",
    "solution": "Since we are given that the item is a chocolate, the sample space is restricted to chocolates only. The total number of chocolates is \\(36 + 48 = 84\\). The number of chocolates with green wrapping is 36. The probability is \\(\\frac{36}{84} = \\frac{3}{7}\\).",
    "solutionSteps": [
      {
        "explanation": "Given: read the full stem carefully and list the known values, the unknown, and any units or constraints. Strategy for Sampling with replacement and without replacement: choose the matching formula or geometric fact first so every later calculation has a clear purpose.",
        "workingOut": "\\(\\mathrm{Total\\ Chocolate} = 36 + 48 = 84\\)",
        "graphData": null
      },
      {
        "explanation": "What rule or formula applies? Name it and write it in symbols. Why apply it now? It turns the worded request into an equation you can solve. A common mistake is using a related but wrong formula (for example sine rule instead of cosine rule, or simple interest instead of compound).",
        "workingOut": "\\(\\mathrm{Green\\ Chocolate} = 36\\)",
        "graphData": null
      },
      {
        "explanation": "Carry out the algebra carefully: substitute, rearrange, and simplify. Check signs, units, and whether the answer must be exact or rounded. This intermediate result feeds the final simplified answer.",
        "workingOut": "\\(P(\\mathrm{Green} \\mid \\mathrm{Chocolate}) = \\frac{36}{84} = \\frac{3}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Final answer: 3/7. Interpret it in context (length, angle, probability, money) and confirm it matches one option exactly. Discard any root or value that violates domain or diagram constraints.",
        "workingOut": "\\(3/7\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  }
];
