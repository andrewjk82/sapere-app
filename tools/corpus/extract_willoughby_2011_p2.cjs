const questions = [
  {
    id: "wghs-2011-y8-t1-q4",
    type: "teacher_review",
    difficulty: "easy",
    chapterId: "y8-ch16",
    topicId: "y8-16a",
    topicCode: "16A",
    timeLimit: 120,
    question: "Describe the likelihood of each of the following events occurring as either: **Impossible**, **unlikely**, **even chance**, **likely** or **certain**.",
    subQuestions: [
      {
        id: "wghs-2011-y8-t1-q4a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 30,
        question: "An odd number shows when a normal die is rolled.",
        a: "even chance",
        solutionSteps: []
      },
      {
        id: "wghs-2011-y8-t1-q4b",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 30,
        question: "A blue marble is picked out of a bag only containing red marbles.",
        a: "impossible",
        solutionSteps: []
      },
      {
        id: "wghs-2011-y8-t1-q4c",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 30,
        question: "You will eventually become Prime Minister.",
        a: "unlikely",
        solutionSteps: []
      },
      {
        id: "wghs-2011-y8-t1-q4d",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 30,
        question: "Year 8 students at WGHS have a computer at home.",
        a: "likely",
        solutionSteps: []
      }
    ]
  },
  {
    id: "wghs-2011-y8-t1-q5",
    type: "teacher_review",
    difficulty: "easy",
    chapterId: "y8-ch16",
    topicId: "y8-16a",
    topicCode: "16A",
    timeLimit: 120,
    question: "A bag contains 5 green, 10 red and 3 blue marbles. If one marble is drawn at random, **find the probability (in simplest form)** that it is:",
    subQuestions: [
      {
        id: "wghs-2011-y8-t1-q5a",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "red.",
        a: "\\frac{5}{9}",
        solutionSteps: [
          { explanation: "Total number of marbles is 5 + 10 + 3 = 18. There are 10 red marbles.", workingOut: "P(\\text{red}) = \\frac{10}{18}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{red}) = \\frac{5}{9}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q5b",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "not red.",
        a: "\\frac{4}{9}",
        solutionSteps: [
          { explanation: "There are 5 green and 3 blue marbles, making 8 that are not red.", workingOut: "P(\\text{not red}) = \\frac{8}{18}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{not red}) = \\frac{4}{9}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q5c",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "red or green.",
        a: "\\frac{5}{6}",
        solutionSteps: [
          { explanation: "There are 10 red and 5 green marbles, making 15 in total.", workingOut: "P(\\text{red or green}) = \\frac{15}{18}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{red or green}) = \\frac{5}{6}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q5d",
        type: "short_answer",
        difficulty: "easy",
        timeLimit: 60,
        question: "yellow.",
        a: "0",
        solutionSteps: [
          { explanation: "There are no yellow marbles in the bag.", workingOut: "P(\\text{yellow}) = \\frac{0}{18} = 0", graphData: null }
        ]
      }
    ]
  },
  {
    id: "wghs-2011-y8-t1-q6",
    type: "teacher_review",
    difficulty: "medium",
    chapterId: "y8-ch16",
    topicId: "y8-16a",
    topicCode: "16A",
    timeLimit: 120,
    question: "The letters of the word PROBABILITY are placed in a bag. A letter is drawn at random. **Find the probability** of:",
    subQuestions: [
      {
        id: "wghs-2011-y8-t1-q6a",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "drawing the letter B.",
        a: "\\frac{2}{11}",
        solutionSteps: [
          { explanation: "There are 11 letters in PROBABILITY, and the letter B appears 2 times.", workingOut: "P(B) = \\frac{2}{11}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q6b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "drawing the letter B or I.",
        a: "\\frac{4}{11}",
        solutionSteps: [
          { explanation: "There are 2 B's and 2 I's, giving 4 favorable outcomes out of 11.", workingOut: "P(\\text{B or I}) = \\frac{4}{11}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q6c",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "not drawing the letter B.",
        a: "\\frac{9}{11}",
        solutionSteps: [
          { explanation: "There are 11 letters and 2 are B's, leaving 9 letters that are not B.", workingOut: "P(\\text{not B}) = \\frac{9}{11}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q6d",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "drawing a vowel.",
        a: "\\frac{4}{11}",
        solutionSteps: [
          { explanation: "The vowels in PROBABILITY are O, A, I, I (4 vowels in total).", workingOut: "P(\\text{vowel}) = \\frac{4}{11}", graphData: null }
        ]
      }
    ]
  },
  {
    id: "wghs-2011-y8-t1-q7",
    type: "teacher_review",
    difficulty: "medium",
    chapterId: "y8-ch16",
    topicId: "y8-16a",
    topicCode: "16A",
    timeLimit: 120,
    question: "Traffic lights at a certain intersection show red 35% of the time, amber 15% of the time and green the rest of the time. If you drive through this intersection, what is the probability that it is:",
    subQuestions: [
      {
        id: "wghs-2011-y8-t1-q7a",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "red.",
        a: "\\frac{7}{20}",
        solutionSteps: [
          { explanation: "The probability is given as 35%. Convert this to a fraction.", workingOut: "35\\% = \\frac{35}{100}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{red}) = \\frac{7}{20}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q7b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "not green.",
        a: "\\frac{1}{2}",
        solutionSteps: [
          { explanation: "Green time is 100% - 35% - 15% = 50%. Not green is red or amber, which is 50%.", workingOut: "50\\% = \\frac{50}{100}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{not green}) = \\frac{1}{2}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q7c",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "green or amber.",
        a: "\\frac{13}{20}",
        solutionSteps: [
          { explanation: "Green is 50% and amber is 15%, so green or amber is 65%.", workingOut: "65\\% = \\frac{65}{100}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{green or amber}) = \\frac{13}{20}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q7d",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "neither green nor red.",
        a: "\\frac{3}{20}",
        solutionSteps: [
          { explanation: "Neither green nor red means amber, which is 15%.", workingOut: "15\\% = \\frac{15}{100}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{neither green nor red}) = \\frac{3}{20}", graphData: null }
        ]
      }
    ]
  },
  {
    id: "wghs-2011-y8-t1-q8",
    type: "teacher_review",
    difficulty: "medium",
    chapterId: "y8-ch16",
    topicId: "y8-16a",
    topicCode: "16A",
    timeLimit: 120,
    question: "A card is drawn at random from a regular pack of playing cards. **Find the probability (in simplest form)** that the card is:",
    subQuestions: [
      {
        id: "wghs-2011-y8-t1-q8a",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "the six of spades.",
        a: "\\frac{1}{52}",
        solutionSteps: [
          { explanation: "There is only one six of spades in a standard deck of 52 cards.", workingOut: "P(\\text{six of spades}) = \\frac{1}{52}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q8b",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "a diamond.",
        a: "\\frac{1}{4}",
        solutionSteps: [
          { explanation: "There are 13 diamonds in a deck of 52 cards.", workingOut: "P(\\text{diamond}) = \\frac{13}{52}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{diamond}) = \\frac{1}{4}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q8c",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "black.",
        a: "\\frac{1}{2}",
        solutionSteps: [
          { explanation: "Half the cards (spades and clubs) are black, making 26 cards.", workingOut: "P(\\text{black}) = \\frac{26}{52}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{black}) = \\frac{1}{2}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q8d",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "an ace.",
        a: "\\frac{1}{13}",
        solutionSteps: [
          { explanation: "There are 4 aces in a deck of 52 cards.", workingOut: "P(\\text{ace}) = \\frac{4}{52}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{ace}) = \\frac{1}{13}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q8e",
        type: "short_answer",
        difficulty: "medium",
        timeLimit: 60,
        question: "a black ace.",
        a: "\\frac{1}{26}",
        solutionSteps: [
          { explanation: "There are 2 black aces (spades and clubs) in the deck.", workingOut: "P(\\text{black ace}) = \\frac{2}{52}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{black ace}) = \\frac{1}{26}", graphData: null }
        ]
      },
      {
        id: "wghs-2011-y8-t1-q8f",
        type: "short_answer",
        difficulty: "hard",
        timeLimit: 60,
        question: "a red card or a queen.",
        a: "\\frac{7}{13}",
        solutionSteps: [
          { explanation: "There are 26 red cards and 4 queens. However, 2 queens are red, so we must subtract them to avoid double counting.", workingOut: "26 + 4 - 2 = 28", graphData: null },
          { explanation: "Calculate the probability.", workingOut: "P(\\text{red or queen}) = \\frac{28}{52}", graphData: null },
          { explanation: "Simplify the fraction.", workingOut: "P(\\text{red or queen}) = \\frac{7}{13}", graphData: null }
        ]
      }
    ]
  }
];

module.exports = questions;
