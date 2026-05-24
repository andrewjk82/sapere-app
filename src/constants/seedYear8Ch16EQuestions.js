export const Y8_CH16E_QUESTIONS = [
  // --- Question 1a ---
  {
    "id": "y8-16e-q1a",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "A bag contains $4$ red beads, $3$ blue beads and $5$ yellow beads. If one bead is drawn at random from the bag, find the probability that the bead is red.",
    "a": "1/3",
    "solution": "1. Find the total number of beads:\n   $$4 + 3 + 5 = 12$$\n2. The number of red beads is $4$.\n3. The probability of drawing a red bead is:\n   $$P(\\text{red}) = \\frac{4}{12} = \\frac{1}{3}$$",
    "t": "Review",
    "hint": "Divide the number of red beads by the total number of beads, then simplify.",
    "solutionSteps": [
      {
        "explanation": "Calculate the total number of beads.",
        "workingOut": "4 + 3 + 5 = 12"
      },
      {
        "explanation": "Find the probability of drawing a red bead and simplify.",
        "workingOut": "P(\\text{red}) = \\frac{4}{12} = \\frac{1}{3}"
      }
    ],
    "graphData": null
  },
  // --- Question 1b ---
  {
    "id": "y8-16e-q1b",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "A bag contains $4$ red beads, $3$ blue beads and $5$ yellow beads. If one bead is drawn at random from the bag, find the probability that the bead is red or blue.",
    "a": "7/12",
    "solution": "1. Find the total number of beads:\n   $$4 + 3 + 5 = 12$$\n2. The number of red or blue beads is $4 + 3 = 7$.\n3. The probability of drawing a red or blue bead is:\n   $$P(\\text{red or blue}) = \\frac{7}{12}$$",
    "t": "Review",
    "hint": "Add the number of red and blue beads together, then divide by the total.",
    "solutionSteps": [
      {
        "explanation": "Calculate the total number of beads.",
        "workingOut": "4 + 3 + 5 = 12"
      },
      {
        "explanation": "Add the number of red and blue beads.",
        "workingOut": "4 + 3 = 7"
      },
      {
        "explanation": "Find the probability of drawing a red or blue bead.",
        "workingOut": "P(\\text{red or blue}) = \\frac{7}{12}"
      }
    ],
    "graphData": null
  },
  // --- Question 1c ---
  {
    "id": "y8-16e-q1c",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "A bag contains $4$ red beads, $3$ blue beads and $5$ yellow beads. If one bead is drawn at random from the bag, find the probability that the bead is red or yellow or blue.",
    "a": "1",
    "solution": "1. Find the total number of beads:\n   $$4 + 3 + 5 = 12$$\n2. The number of red, yellow, or blue beads is the total number of beads: $4 + 5 + 3 = 12$.\n3. The probability is:\n   $$P(\\text{red or yellow or blue}) = \\frac{12}{12} = 1$$",
    "t": "Review",
    "hint": "Since all beads in the bag are either red, yellow, or blue, consider what the probability of an always-true event is.",
    "solutionSteps": [
      {
        "explanation": "Identify that the chosen colours cover all possible beads.",
        "workingOut": "4 + 3 + 5 = 12"
      },
      {
        "explanation": "Calculate the probability.",
        "workingOut": "P = \\frac{12}{12} = 1"
      }
    ],
    "graphData": null
  },
  // --- Question 2a ---
  {
    "id": "y8-16e-q2a",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "A two-digit number - that is, a number from 10 to 99 - is chosen at random. Find the probability that the number is greater than 75.",
    "a": "4/15",
    "solution": "1. Find the total number of two-digit numbers (from 10 to 99):\n   $$99 - 10 + 1 = 90$$\n2. Find the numbers greater than 75 (i.e. from 76 to 99):\n   $$99 - 76 + 1 = 24$$\n3. The probability is:\n   $$P(>75) = \\frac{24}{90}$$\n4. Simplify the fraction by dividing numerator and denominator by 6:\n   $$P(>75) = \\frac{4}{15}$$",
    "t": "Review",
    "hint": "Calculate how many two-digit numbers are greater than 75, then divide by the total number of two-digit numbers (90).",
    "solutionSteps": [
      {
        "explanation": "Find the total number of possible two-digit numbers.",
        "workingOut": "99 - 10 + 1 = 90"
      },
      {
        "explanation": "Count the favourable outcomes (numbers greater than 75).",
        "workingOut": "99 - 76 + 1 = 24"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P(>75) = \\frac{24}{90} = \\frac{4}{15}"
      }
    ],
    "graphData": null
  },
  // --- Question 2b ---
  {
    "id": "y8-16e-q2b",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "A two-digit number - that is, a number from 10 to 99 - is chosen at random. Find the probability that the number contains the digit 5 at least once (that is, a number such as 54, or 15 or 55).",
    "a": "1/5",
    "solution": "1. Find the total number of two-digit numbers:\n   $$99 - 10 + 1 = 90$$\n2. List the numbers containing a 5 in the ones column:\n   15, 25, 35, 45, 55, 65, 75, 85, 95 (9 numbers)\n3. List the numbers containing a 5 in the tens column:\n   50, 51, 52, 53, 54, 55, 56, 57, 58, 59 (10 numbers)\n4. Notice that 55 is in both lists. So the total distinct numbers containing at least one 5 is:\n   $$9 + 10 - 1 = 18$$\n5. The probability is:\n   $$P(\\text{contains 5}) = \\frac{18}{90} = \\frac{1}{5}$$",
    "t": "Review",
    "hint": "Count how many two-digit numbers end in 5, and how many begin with 5. Make sure not to count 55 twice!",
    "solutionSteps": [
      {
        "explanation": "Determine the total number of two-digit numbers.",
        "workingOut": "90"
      },
      {
        "explanation": "Count numbers with 5 in the tens place.",
        "workingOut": "10 \\text{ numbers (50 to 59)}"
      },
      {
        "explanation": "Count numbers with 5 in the ones place.",
        "workingOut": "9 \\text{ numbers (15, 25, ..., 95)}"
      },
      {
        "explanation": "Find total distinct numbers containing a 5.",
        "workingOut": "10 + 9 - 1 \\text{ (for 55)} = 18"
      },
      {
        "explanation": "Calculate the probability and simplify.",
        "workingOut": "P = \\frac{18}{90} = \\frac{1}{5}"
      }
    ],
    "graphData": null
  },
  // --- Question 3a ---
  {
    "id": "y8-16e-q3a",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "A letter is chosen at random from the word PLANET.\n\nList the sample space for this experiment.",
    "solution": "The sample space is the set of all possible outcomes. The letters in PLANET are all distinct.\n\n**Answer:** S = {P, L, A, N, E, T}",
    "t": "Review",
    "hint": "The sample space is simply a list of every individual letter that can be chosen from the word.",
    "graphData": null
  },
  // --- Question 3b(i) ---
  {
    "id": "y8-16e-q3b-i",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "A letter is chosen at random from the word PLANET.\n\nIf $E$ is the event 'the letter chosen is a vowel', write down the outcomes that satisfy $E$.",
    "solution": "The vowels in the word PLANET are A and E.\n\n**Answer:** A, E",
    "t": "Review",
    "hint": "Identify which letters in PLANET are vowels (A, E, I, O, U).",
    "graphData": null
  },
  // --- Question 3b(ii) ---
  {
    "id": "y8-16e-q3b-ii",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "A letter is chosen at random from the word PLANET. If $E$ is the event 'the letter chosen is a vowel', what is the probability of $E$ occurring?",
    "a": "1/3",
    "solution": "1. Find the total number of letters in PLANET: $6$.\n2. The number of vowels (A, E) is $2$.\n3. The probability of $E$ is:\n   $$P(E) = \\frac{2}{6} = \\frac{1}{3}$$",
    "t": "Review",
    "hint": "Divide the number of vowels by the total number of letters in the word.",
    "solutionSteps": [
      {
        "explanation": "State the total number of letters.",
        "workingOut": "6"
      },
      {
        "explanation": "State the number of vowels.",
        "workingOut": "2 \\text{ (A, E)}"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P(E) = \\frac{2}{6} = \\frac{1}{3}"
      }
    ],
    "graphData": null
  },
  // --- Question 4a ---
  {
    "id": "y8-16e-q4a",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "The numbers 1 to 30 are written on 30 cards. If a card is selected at random, find the probability that the number on the card is 14.",
    "a": "1/30",
    "solution": "There is only one card with the number 14 out of 30 cards.\n$$P(14) = \\frac{1}{30}$$",
    "t": "Review",
    "hint": "How many cards have the number 14 on them?",
    "solutionSteps": [
      {
        "explanation": "Identify the number of favourable outcomes.",
        "workingOut": "1"
      },
      {
        "explanation": "Calculate the probability.",
        "workingOut": "P(14) = \\frac{1}{30}"
      }
    ],
    "graphData": null
  },
  // --- Question 4b ---
  {
    "id": "y8-16e-q4b",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "The numbers 1 to 30 are written on 30 cards. If a card is selected at random, find the probability that the number on the card is greater than 20.",
    "a": "1/3",
    "solution": "1. The numbers greater than 20 are 21, 22, 23, 24, 25, 26, 27, 28, 29, 30.\n2. There are 10 such numbers.\n3. The probability is:\n   $$P(>20) = \\frac{10}{30} = \\frac{1}{3}$$",
    "t": "Review",
    "hint": "Count how many numbers from 1 to 30 are greater than 20.",
    "solutionSteps": [
      {
        "explanation": "Count the numbers greater than 20.",
        "workingOut": "30 - 20 = 10"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P(>20) = \\frac{10}{30} = \\frac{1}{3}"
      }
    ],
    "graphData": null
  },
  // --- Question 4c ---
  {
    "id": "y8-16e-q4c",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "The numbers 1 to 30 are written on 30 cards. If a card is selected at random, find the probability that the number on the card is even.",
    "a": "1/2",
    "solution": "1. Exactly half of the numbers from 1 to 30 are even.\n2. Number of even cards = 15.\n3. The probability is:\n   $$P(\\text{even}) = \\frac{15}{30} = \\frac{1}{2}$$",
    "t": "Review",
    "hint": "Half of the numbers in this range are even.",
    "solutionSteps": [
      {
        "explanation": "Count the even numbers from 1 to 30.",
        "workingOut": "15"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P(\\text{even}) = \\frac{15}{30} = \\frac{1}{2}"
      }
    ],
    "graphData": null
  },
  // --- Question 4d ---
  {
    "id": "y8-16e-q4d",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "The numbers 1 to 30 are written on 30 cards. If a card is selected at random, find the probability that the number on the card is a multiple of 5.",
    "a": "1/5",
    "solution": "1. List the multiples of 5 from 1 to 30: 5, 10, 15, 20, 25, 30.\n2. There are 6 multiples.\n3. The probability is:\n   $$P(\\text{multiple of 5}) = \\frac{6}{30} = \\frac{1}{5}$$",
    "t": "Review",
    "hint": "Count the multiples of 5 up to 30.",
    "solutionSteps": [
      {
        "explanation": "Identify the multiples of 5.",
        "workingOut": "5, 10, 15, 20, 25, 30 \\text{ (6 numbers)}"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{6}{30} = \\frac{1}{5}"
      }
    ],
    "graphData": null
  },
  // --- Question 4e ---
  {
    "id": "y8-16e-q4e",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "The numbers 1 to 30 are written on 30 cards. If a card is selected at random, find the probability that the number on the card is odd and a multiple of 3.",
    "a": "1/6",
    "solution": "1. List the multiples of 3 up to 30:\n   3, 6, 9, 12, 15, 18, 21, 24, 27, 30.\n2. From this list, pick only the odd numbers:\n   3, 9, 15, 21, 27.\n3. There are 5 such numbers.\n4. The probability is:\n   $$P(\\text{odd and multiple of 3}) = \\frac{5}{30} = \\frac{1}{6}$$",
    "t": "Review",
    "hint": "List the multiples of 3 first, then count only the odd ones.",
    "solutionSteps": [
      {
        "explanation": "List all multiples of 3 from 1 to 30.",
        "workingOut": "3, 6, 9, 12, 15, 18, 21, 24, 27, 30"
      },
      {
        "explanation": "Select the odd multiples.",
        "workingOut": "3, 9, 15, 21, 27 \\text{ (5 numbers)}"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{5}{30} = \\frac{1}{6}"
      }
    ],
    "graphData": null
  },
  // --- Question 4f ---
  {
    "id": "y8-16e-q4f",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "The numbers 1 to 30 are written on 30 cards. If a card is selected at random, find the probability that the number on the card is neither even nor a multiple of 5.",
    "a": "2/5",
    "solution": "1. We need numbers that are NOT even and NOT a multiple of 5. This means we are looking for odd numbers that don't end in 5.\n2. The odd numbers from 1 to 30 are 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29 (15 numbers).\n3. Remove the odd multiples of 5 (which end in 5): 5, 15, 25.\n4. The remaining numbers are: 1, 3, 7, 9, 11, 13, 17, 19, 21, 23, 27, 29.\n5. There are 12 such numbers.\n6. The probability is:\n   $$P(\\text{neither}) = \\frac{12}{30} = \\frac{2}{5}$$",
    "t": "Review",
    "hint": "Think of this as finding all odd numbers, then crossing out the ones that end in 5.",
    "solutionSteps": [
      {
        "explanation": "Recognise the condition means odd numbers excluding multiples of 5.",
        "workingOut": "\\text{Odd numbers total = 15}"
      },
      {
        "explanation": "Identify odd multiples of 5 to exclude.",
        "workingOut": "5, 15, 25 \\text{ (3 numbers)}"
      },
      {
        "explanation": "Count the valid numbers.",
        "workingOut": "15 - 3 = 12"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{12}{30} = \\frac{2}{5}"
      }
    ],
    "graphData": null
  },
  // --- Question 5a ---
  {
    "id": "y8-16e-q5a",
    "type": "teacher_review",
    "difficulty": "medium",
    "question": "In a group of 300 students, 90 study geography, 120 study economics and 110 study neither.\n\nRepresent this information on a Venn diagram.",
    "solution": "1. Find the number of students studying at least one subject:\n   $$300 - 110 = 190$$\n2. The sum of the students in the individual subjects is:\n   $$90 + 120 = 210$$\n3. The intersection (students studying both) is the difference:\n   $$210 - 190 = 20$$\n4. Fill in the Venn diagram:\n   - Both Geography and Economics = $20$\n   - Geography only = $90 - 20 = 70$\n   - Economics only = $120 - 20 = 100$\n   - Outside the circles = $110$\n\n*(Teacher to check student's drawn diagram)*",
    "t": "Review",
    "hint": "Start by finding out how many students study at least one subject, and use that to find the overlap.",
    "graphData": null
  },
  // --- Question 5b(i) ---
  {
    "id": "y8-16e-q5b-i",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In a group of 300 students, 90 study geography, 120 study economics and 110 study neither.\n\nIf a student is selected at random from the group, what is the probability that the student studies geography?",
    "a": "3/10",
    "solution": "The number of students studying geography is given as 90 out of a total of 300.\n$$P(\\text{geography}) = \\frac{90}{300} = \\frac{3}{10}$$",
    "t": "Review",
    "hint": "You are given the total number of students studying geography.",
    "solutionSteps": [
      {
        "explanation": "State the number of geography students and total students.",
        "workingOut": "90 \\text{ out of } 300"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{90}{300} = \\frac{3}{10}"
      }
    ],
    "graphData": null
  },
  // --- Question 5b(ii) ---
  {
    "id": "y8-16e-q5b-ii",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In a group of 300 students, 90 study geography, 120 study economics and 110 study neither.\n\nIf a student is selected at random from the group, what is the probability that the student studies geography and economics?",
    "a": "1/15",
    "solution": "1. Find how many students study at least one subject:\n   $$300 - 110 = 190$$\n2. The sum of Geography and Economics students is $90 + 120 = 210$.\n3. The overlap (studying both) is:\n   $$210 - 190 = 20$$\n4. The probability is:\n   $$P(\\text{both}) = \\frac{20}{300} = \\frac{1}{15}$$",
    "t": "Review",
    "hint": "Use the formula: $n(G \\text{ and } E) = n(G) + n(E) - n(G \\text{ or } E)$.",
    "solutionSteps": [
      {
        "explanation": "Find the number of students studying at least one subject.",
        "workingOut": "300 - 110 = 190"
      },
      {
        "explanation": "Find the intersection by adding the subjects and subtracting the union.",
        "workingOut": "90 + 120 - 190 = 20"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{20}{300} = \\frac{1}{15}"
      }
    ],
    "graphData": null
  },
  // --- Question 5b(iii) ---
  {
    "id": "y8-16e-q5b-iii",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "In a group of 300 students, 90 study geography, 120 study economics and 110 study neither.\n\nIf a student is selected at random from the group, what is the probability that the student studies at least one of these subjects?",
    "a": "19/30",
    "solution": "1. Total students = 300.\n2. Students who study neither = 110.\n3. Students studying at least one = $300 - 110 = 190$.\n4. The probability is:\n   $$P(\\text{at least one}) = \\frac{190}{300} = \\frac{19}{30}$$",
    "t": "Review",
    "hint": "Subtract the 'neither' group from the total to find those who study at least one subject.",
    "solutionSteps": [
      {
        "explanation": "Find the number of students studying at least one subject.",
        "workingOut": "300 - 110 = 190"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{190}{300} = \\frac{19}{30}"
      }
    ],
    "graphData": null
  },
  // --- Question 6a ---
  {
    "id": "y8-16e-q6a",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "The table shows the type of accommodation and car ownership status of 200 university students.\n\n$$\\begin{array}{|l|c|c|c|} \\hline \\text{Accommodation} & \\text{Car} & \\text{No car} & \\text{Total} \\\\\\\\ \\hline \\text{Residential college} & 20 & 60 & 80 \\\\\\\\ \\text{Apartment off campus} & 40 & 50 & 90 \\\\\\\\ \\text{Living at home} & 25 & 5 & 30 \\\\\\\\ \\hline \\mathbf{Total} & \\mathbf{85} & \\mathbf{115} & \\mathbf{200} \\\\\\\\ \\hline \\end{array}$$\n\nFor a randomly selected student from this university, what is the probability that the student lives in a residential college and has a car?",
    "a": "1/10",
    "solution": "1. Locate the intersection of 'Residential college' and 'Car' in the table. The value is 20.\n2. The total number of students is 200.\n3. The probability is:\n   $$P(\\text{residential college and car}) = \\frac{20}{200} = \\frac{1}{10}$$",
    "t": "Review",
    "hint": "Find the specific cell in the table that matches both conditions.",
    "solutionSteps": [
      {
        "explanation": "Find the number of students meeting the criteria from the table.",
        "workingOut": "20"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{20}{200} = \\frac{1}{10}"
      }
    ],
    "graphData": null
  },
  // --- Question 6b ---
  {
    "id": "y8-16e-q6b",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "The table shows the type of accommodation and car ownership status of 200 university students.\n\n$$\\begin{array}{|l|c|c|c|} \\hline \\text{Accommodation} & \\text{Car} & \\text{No car} & \\text{Total} \\\\\\\\ \\hline \\text{Residential college} & 20 & 60 & 80 \\\\\\\\ \\text{Apartment off campus} & 40 & 50 & 90 \\\\\\\\ \\text{Living at home} & 25 & 5 & 30 \\\\\\\\ \\hline \\mathbf{Total} & \\mathbf{85} & \\mathbf{115} & \\mathbf{200} \\\\\\\\ \\hline \\end{array}$$\n\nFor a randomly selected student from this university, what is the probability that the student has a car?",
    "a": "17/40",
    "solution": "1. Look at the 'Total' row under the 'Car' column. The value is 85.\n2. The total number of students is 200.\n3. The probability is:\n   $$P(\\text{car}) = \\frac{85}{200}$$\n4. Simplify the fraction by dividing by 5:\n   $$P(\\text{car}) = \\frac{17}{40}$$",
    "t": "Review",
    "hint": "Look for the total number of students who own a car.",
    "solutionSteps": [
      {
        "explanation": "Find the total number of students with a car.",
        "workingOut": "85"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{85}{200} = \\frac{17}{40}"
      }
    ],
    "graphData": null
  },
  // --- Question 6c ---
  {
    "id": "y8-16e-q6c",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "The table shows the type of accommodation and car ownership status of 200 university students.\n\n$$\\begin{array}{|l|c|c|c|} \\hline \\text{Accommodation} & \\text{Car} & \\text{No car} & \\text{Total} \\\\\\\\ \\hline \\text{Residential college} & 20 & 60 & 80 \\\\\\\\ \\text{Apartment off campus} & 40 & 50 & 90 \\\\\\\\ \\text{Living at home} & 25 & 5 & 30 \\\\\\\\ \\hline \\mathbf{Total} & \\mathbf{85} & \\mathbf{115} & \\mathbf{200} \\\\\\\\ \\hline \\end{array}$$\n\nFor a randomly selected student from this university, what is the probability that the student lives at home and has a car?",
    "a": "1/8",
    "solution": "1. Locate the cell for 'Living at home' and 'Car'. The value is 25.\n2. The total number of students is 200.\n3. The probability is:\n   $$P(\\text{home and car}) = \\frac{25}{200} = \\frac{1}{8}$$",
    "t": "Review",
    "hint": "Read the intersection of the 'Living at home' row and the 'Car' column.",
    "solutionSteps": [
      {
        "explanation": "Find the number of students meeting the criteria from the table.",
        "workingOut": "25"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{25}{200} = \\frac{1}{8}"
      }
    ],
    "graphData": null
  },
  // --- Question 6d ---
  {
    "id": "y8-16e-q6d",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "The table shows the type of accommodation and car ownership status of 200 university students.\n\n$$\\begin{array}{|l|c|c|c|} \\hline \\text{Accommodation} & \\text{Car} & \\text{No car} & \\text{Total} \\\\\\\\ \\hline \\text{Residential college} & 20 & 60 & 80 \\\\\\\\ \\text{Apartment off campus} & 40 & 50 & 90 \\\\\\\\ \\text{Living at home} & 25 & 5 & 30 \\\\\\\\ \\hline \\mathbf{Total} & \\mathbf{85} & \\mathbf{115} & \\mathbf{200} \\\\\\\\ \\hline \\end{array}$$\n\nFor a randomly selected student from this university, what is the probability that the student has no car?",
    "a": "23/40",
    "solution": "1. Look at the 'Total' row under the 'No car' column. The value is 115.\n2. The total number of students is 200.\n3. The probability is:\n   $$P(\\text{no car}) = \\frac{115}{200}$$\n4. Simplify the fraction by dividing by 5:\n   $$P(\\text{no car}) = \\frac{23}{40}$$",
    "t": "Review",
    "hint": "Use the overall total for students without a car.",
    "solutionSteps": [
      {
        "explanation": "Find the total number of students without a car.",
        "workingOut": "115"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{115}{200} = \\frac{23}{40}"
      }
    ],
    "graphData": null
  },
  // --- Question 6e ---
  {
    "id": "y8-16e-q6e",
    "type": "short_answer",
    "difficulty": "medium",
    "question": "The table shows the type of accommodation and car ownership status of 200 university students.\n\n$$\\begin{array}{|l|c|c|c|} \\hline \\text{Accommodation} & \\text{Car} & \\text{No car} & \\text{Total} \\\\\\\\ \\hline \\text{Residential college} & 20 & 60 & 80 \\\\\\\\ \\text{Apartment off campus} & 40 & 50 & 90 \\\\\\\\ \\text{Living at home} & 25 & 5 & 30 \\\\\\\\ \\hline \\mathbf{Total} & \\mathbf{85} & \\mathbf{115} & \\mathbf{200} \\\\\\\\ \\hline \\end{array}$$\n\nFor a randomly selected student from this university, what is the probability that the student lives in an apartment off campus and does not have a car?",
    "a": "1/4",
    "solution": "1. Locate the cell for 'Apartment off campus' and 'No car'. The value is 50.\n2. The total number of students is 200.\n3. The probability is:\n   $$P(\\text{apartment and no car}) = \\frac{50}{200} = \\frac{1}{4}$$",
    "t": "Review",
    "hint": "Find the intersection of 'Apartment off campus' and 'No car'.",
    "solutionSteps": [
      {
        "explanation": "Find the number of students meeting the criteria from the table.",
        "workingOut": "50"
      },
      {
        "explanation": "Calculate and simplify the probability.",
        "workingOut": "P = \\frac{50}{200} = \\frac{1}{4}"
      }
    ],
    "graphData": null
  }
];
