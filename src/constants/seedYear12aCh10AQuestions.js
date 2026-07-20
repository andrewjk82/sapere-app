export const Y12A_CH10A_QUESTIONS = [
  {
    "id": "asc2020-mc6",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Which of the following is a discrete probability distribution?",
    "opts": [
      "\\(P(X=x) = \\{0.23, 0.16, 0.35, 0.25\\}\\)",
      "\\(P(X=x) = \\{0.27, 0.61, -0.31, 0.43\\}\\)",
      "\\(P(X=x) = \\{0.14, 0.32, 0.48, 0.07\\}\\)",
      "\\(P(X=x) = \\{0.19, 0.29, 0.25, 0.27\\}\\)"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is \\(P(X=x) = \\{0.19, 0.29, 0.25, 0.27\\}\\).",
    "solutionSteps": [
      {
        "explanation": "We begin by recalling the two requirements for a set of numbers to form a valid discrete probability distribution. First, each probability must be non-negative, meaning greater than or equal to zero. Second, the sum of all probabilities in the distribution must equal exactly one.",
        "workingOut": "\\(\\text{Given options to evaluate.}\\)",
        "graphData": null
      },
      {
        "explanation": "Let us inspect the second option where one of the probabilities is negative. Since a probability cannot be negative, we can immediately identify this option as invalid without summing the values.",
        "workingOut": "\\(P(X=3) = -0.31 < 0 \\implies \\text{Invalid}\\)",
        "graphData": null
      },
      {
        "explanation": "Now let us compute the sum of the probabilities for the first option. Adding these values together gives zero point nine nine, which is not equal to one. Hence, this set of values is not a valid distribution.",
        "workingOut": "\\(0.23 + 0.16 + 0.35 + 0.25 = 0.99 \\neq 1\\)",
        "graphData": null
      },
      {
        "explanation": "Next, we calculate the sum of the probabilities for the third option. Adding these numbers gives one point zero seven, which exceeds the required sum of one. Therefore, this option is also invalid.",
        "workingOut": "\\(0.14 + 0.32 + 0.48 + 0.07 = 1.01 \\neq 1\\)",
        "graphData": null
      },
      {
        "explanation": "Finally, we evaluate the fourth option. All values are non-negative, and summing them yields exactly one. This confirms that the fourth option is the only valid discrete probability distribution.",
        "workingOut": "\\(0.19 + 0.29 + 0.25 + 0.27 = 1.00\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "asc2020-mc6v",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Which of the following tables represents a valid discrete probability distribution for a random variable \\(X\\)?",
    "opts": [
      "\\(P(X=x) = \\{0.3, 0.3, 0.3, 0.3\\}\\)",
      "\\(P(X=x) = \\{0.1, 0.4, 0.3, 0.2\\}\\)",
      "\\(P(X=x) = \\{0.5, 0.5, 0.5, 0.5\\}\\)",
      "\\(P(X=x) = \\{0.2, 0.3, -0.1, 0.6\\}\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(P(X=x) = \\{0.1, 0.4, 0.3, 0.2\\}\\).",
    "solutionSteps": [
      {
        "explanation": "To determine which set of probabilities constitutes a valid discrete probability distribution, we must verify that no probability is negative and that all probabilities sum to exactly one.",
        "workingOut": "\\(\\text{Check conditions: } P(X=x) \\ge 0 \\text{ and } \\sum P(X=x) = 1\\)",
        "graphData": null
      },
      {
        "explanation": "We examine the fourth option. It contains a probability of negative zero point one, which violates the requirement that all probabilities must be greater than or equal to zero. Thus, we exclude this option.",
        "workingOut": "\\(-0.1 < 0 \\implies \\text{Invalid}\\)",
        "graphData": null
      },
      {
        "explanation": "Let us calculate the sum for the first option. Since there are four values of zero point three, their sum is one point two, which is not equal to one. Therefore, the first option is invalid.",
        "workingOut": "\\(4 \\times 0.3 = 1.2 \\neq 1\\)",
        "graphData": null
      },
      {
        "explanation": "Let us sum the values for the third option. Adding the four values of zero point five results in two point zero, which is not equal to one. This option is also invalid.",
        "workingOut": "\\(4 \\times 0.5 = 2.0 \\neq 1\\)",
        "graphData": null
      },
      {
        "explanation": "Lastly, we compute the sum for the second option. All values are non-negative, and their sum equals exactly one. Consequently, the second option represents a valid discrete probability distribution.",
        "workingOut": "\\(0.1 + 0.4 + 0.3 + 0.2 = 1.0\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q15bi",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the probability distribution below where the expected value is \\(E(X) = 3.34\\):\n\n| \\(x\\) | 1 | 3 | \\(a\\) | 6 |\n|---|---|---|---|---|\n| \\(p(x)\\) | 0.4 | 0.12 | 0.3 | \\(b\\) |\n\nEvaluate the values of \\(a\\) and \\(b\\).",
    "opts": [
      "\\(a = 5, b = 0.18\\)",
      "\\(a = 4, b = 0.18\\)",
      "\\(a = 5, b = 0.28\\)",
      "\\(a = 6, b = 0.18\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(a = 5, b = 0.18\\).",
    "solutionSteps": [
      {
        "explanation": "We start by identifying the given parameters: the expected value \\(E(X) = 3.34\\) and the probability distribution table. Our strategy is to use the sum of probabilities to solve for \\(b\\), and then the expectation formula to solve for \\(a\\).",
        "workingOut": "\\(\\text{Given: } E(X) = 3.34, \\sum p(x) = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Since the sum of all probabilities in a discrete distribution must equal one, we can set up an equation to find the value of \\(b\\) by subtracting the other probabilities from one.",
        "workingOut": "\\(0.4 + 0.12 + 0.3 + b = 1 \\implies 0.82 + b = 1 \\implies b = 0.18\\)",
        "graphData": null
      },
      {
        "explanation": "Now we use the formula for the expected value of a discrete random variable, which is the sum of each value multiplied by its corresponding probability, and set it equal to three point three four.",
        "workingOut": "\\(E(X) = 1(0.4) + 3(0.12) + a(0.3) + 6(b) = 3.34\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the calculated value of \\(b = 0.18\\) into the expected value equation and simplify the arithmetic expressions.",
        "workingOut": "\\(0.4 + 0.36 + 0.3a + 1.08 = 3.34 \\implies 1.84 + 0.3a = 3.34\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract one point eight four from both sides of the equation to isolate the term with \\(a\\), and then divide by zero point three to find the final value.",
        "workingOut": "\\(0.3a = 1.50 \\implies a = 5\\)",
        "graphData": null
      },
      {
        "explanation": "We conclude that \\(a = 5\\) and \\(b = 0.18\\). We can check this by recalculating \\(E(X)\\) with these values to confirm it matches the given mean of three point three four.",
        "workingOut": "\\(\\text{Final Answer: } a = 5, b = 0.18\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "bar2020-q15biv",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "For the probability distribution below where the expected value is \\(E(X) = 2.5\\):\n\n| \\(x\\) | 1 | \\(a\\) | 4 | 6 |\n|---|---|---|---|---|\n| \\(p(x)\\) | 0.3 | 0.4 | 0.2 | \\(b\\) |\n\nEvaluate the values of \\(a\\) and \\(b\\).",
    "opts": [
      "\\(a = 3, b = 0.1\\)",
      "\\(a = 2, b = 0.2\\)",
      "\\(a = 2, b = 0.1\\)",
      "\\(a = 4, b = 0.1\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(a = 2, b = 0.1\\).",
    "solutionSteps": [
      {
        "explanation": "We are given the probability distribution table and the expected value \\(E(X) = 2.5\\). We will first determine \\(b\\) using the sum of probabilities, and then find \\(a\\) using the expectation formula.",
        "workingOut": "\\(\\text{Given: } E(X) = 2.5, \\sum p(x) = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Using the fact that all probabilities in the distribution must sum to exactly one, we write an equation for the unknown probability \\(b\\) and solve it.",
        "workingOut": "\\(0.3 + 0.4 + 0.2 + b = 1 \\implies 0.9 + b = 1 \\implies b = 0.1\\)",
        "graphData": null
      },
      {
        "explanation": "Next, we set up the expected value equation using the formula \\(E(X) = \\sum x \\cdot p(x)\\), substituting the values of \\(x\\) and their respective probabilities.",
        "workingOut": "\\(E(X) = 1(0.3) + a(0.4) + 4(0.2) + 6(b) = 2.5\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the solved value of \\(b = 0.1\\) into this equation and combine the constant numerical terms.",
        "workingOut": "\\(0.3 + 0.4a + 0.8 + 6(0.1) = 2.5 \\implies 1.7 + 0.4a = 2.5\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract one point seven from both sides of the equation to isolate \\(0.4a\\), and then divide both sides by zero point four to obtain the value of \\(a\\).",
        "workingOut": "\\(0.4a = 0.8 \\implies a = 2\\)",
        "graphData": null
      },
      {
        "explanation": "The final values are \\(a = 2\\) and \\(b = 0.1\\). We can substitute these back into the original expectation formula to confirm they yield exactly two point five.",
        "workingOut": "\\(\\text{Final Answer: } a = 2, b = 0.1\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "baulko2020-q14ci",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A bag contains 3 red and 4 black balls. Two balls are drawn at random without replacement. Let \\(X\\) represent the number of black balls drawn. Find the expected value \\(E(X)\\) of the distribution.",
    "opts": [
      "\\(\\dfrac{8}{7}\\)",
      "\\(\\dfrac{6}{7}\\)",
      "\\(\\dfrac{9}{7}\\)",
      "\\(\\dfrac{4}{3}\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(\\dfrac{8}{7}\\).",
    "solutionSteps": [
      {
        "explanation": "We are drawing two balls without replacement from a bag of 7 balls (3 red, 4 black). The random variable \\(X\\) represents the number of black balls drawn, which can be 0, 1, or 2. We will find the probability for each value of \\(X\\) and then calculate the expected value.",
        "workingOut": "\\(\\text{Total balls } = 7, \\text{ Red } = 3, \\text{ Black } = 4\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the probability that zero black balls are drawn, which means drawing two red balls in succession without replacement.",
        "workingOut": "\\(P(X=0) = \\dfrac{3}{7} \\times \\dfrac{2}{6} = \\dfrac{6}{42} = \\dfrac{1}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the probability of drawing exactly one black ball. This can occur in two ways: drawing a Red then Black, or drawing a Black then Red.",
        "workingOut": "\\(P(X=1) = \\left(\\dfrac{3}{7} \\times \\dfrac{4}{6}\\right) + \\left(\\dfrac{4}{7} \\times \\dfrac{3}{6}\\right) = \\dfrac{12}{42} + \\dfrac{12}{42} = \\dfrac{24}{42} = \\dfrac{4}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the probability of drawing two black balls in succession without replacement. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(P(X=2) = \\dfrac{4}{7} \\times \\dfrac{3}{6} = \\dfrac{12}{42} = \\dfrac{2}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "Compute the expected value \\(E(X)\\) by summing the products of each value of \\(X\\) and its corresponding probability.",
        "workingOut": "\\(E(X) = 0\\left(\\dfrac{1}{7}\\right) + 1\\left(\\dfrac{4}{7}\\right) + 2\\left(\\dfrac{2}{7}\\right) = 0 + \\dfrac{4}{7} + \\dfrac{4}{7} = \\dfrac{8}{7}\\)",
        "graphData": null
      },
      {
        "explanation": "The expected number of black balls drawn is eight sevenths. This value is mathematically sound since drawing from a pool that is four-sevenths black twice should yield an expected value of two times four-sevenths.",
        "workingOut": "\\(\\text{Expected Value } E(X) = \\dfrac{8}{7}\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023-q17a",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Jason buys a ticket in a lottery, where the first prize is 10000 dollars. Tickets cost 20 dollars each, and the prize distribution is:\n\n| \\(x\\) | 0 | 20 | 100 | 500 | 5000 | 10000 |\n|---|---|---|---|---|---|---|\n| \\(P(X=x)\\) | 0.75 | \\(m\\) | 0.03 | 0.002 | 0.001 | 0.0001 |\n\nFind the value of \\(m\\).",
    "opts": [
      "\\(0.2469\\)",
      "\\(0.2169\\)",
      "\\(0.2179\\)",
      "\\(0.2159\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(0.2169\\).",
    "solutionSteps": [
      {
        "explanation": "We are given the probability distribution for the lottery prize variable \\(X\\). The sum of all probabilities in this distribution must equal exactly one. We will set up an equation summing all probabilities to solve for the unknown parameter \\(m\\).",
        "workingOut": "\\(\\sum P(X=x) = 1\\)",
        "graphData": null
      },
      {
        "explanation": "We write out the equation by summing the known probability values and the variable \\(m\\), setting the entire expression equal to one.",
        "workingOut": "\\(0.75 + m + 0.03 + 0.002 + 0.001 + 0.0001 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Next, we add all the known decimal probabilities together to simplify the left-hand side of our equation.",
        "workingOut": "\\(0.75 + 0.03 + 0.002 + 0.001 + 0.0001 = 0.7831\\)",
        "graphData": null
      },
      {
        "explanation": "Now we isolate \\(m\\) by subtracting the sum of the known probabilities from one, which yields the final value.",
        "workingOut": "\\(m = 1 - 0.7831 = 0.2169\\)",
        "graphData": null
      },
      {
        "explanation": "We conclude that \\(m = 0.2169\\). This represents a probability of twenty-one point sixty-nine percent for winning a twenty dollar prize, making the entire probability distribution valid.",
        "workingOut": "\\(\\text{Final Answer: } m = 0.2169\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "cra2023s-q17a",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "multiple_choice",
    "difficulty": "easy",
    "timeLimit": 120,
    "question": "Mia buys a ticket in a raffle, where the first prize is 20000 dollars. Tickets cost 25 dollars each, and the prize distribution is:\n\n| \\(x\\) | 0 | 25 | 100 | 500 | 5000 | 20000 |\n|---|---|---|---|---|---|---|\n| \\(P(X=x)\\) | 0.7 | \\(m\\) | 0.03 | 0.002 | 0.0005 | 0.0001 |\n\nFind the value of \\(m\\).",
    "opts": [
      "\\(0.2974\\)",
      "\\(0.2684\\)",
      "\\(0.2674\\)",
      "\\(0.2664\\)"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is \\(0.2674\\).",
    "solutionSteps": [
      {
        "explanation": "We are given the probability distribution for the raffle prizes. Our strategy is to use the property that all probabilities in a discrete probability distribution must sum to exactly one to write a linear equation for \\(m\\).",
        "workingOut": "\\(\\sum P(X=x) = 1\\)",
        "graphData": null
      },
      {
        "explanation": "We write down the equation containing the sum of the known probabilities and the unknown variable \\(m\\).",
        "workingOut": "\\(0.7 + m + 0.03 + 0.002 + 0.0005 + 0.0001 = 1\\)",
        "graphData": null
      },
      {
        "explanation": "We simplify the equation by adding all the known decimal numbers together on the left-hand side. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(0.7 + 0.03 + 0.002 + 0.0005 + 0.0001 = 0.7326\\)",
        "graphData": null
      },
      {
        "explanation": "Finally, we isolate \\(m\\) by subtracting zero point seven three two six from one to obtain the required probability value.",
        "workingOut": "\\(m = 1 - 0.7326 = 0.2674\\)",
        "graphData": null
      },
      {
        "explanation": "The value of \\(m\\) is zero point two six seven four. We can verify this by checking that the sum of all elements in the distribution is exactly one.",
        "workingOut": "\\(\\text{Final Answer: } m = 0.2674\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "dane2020-q22a",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A discrete random variable \\(X\\) has the probability distribution shown below, and a mean of \\(2\\):\n\n| \\(x\\) | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| \\(P(X=x)\\) | 0.3 | 0.45 | \\(a\\) | \\(b\\) |\n\nFind two equations in terms of \\(a\\) and \\(b\\).",
    "opts": [
      "a + b = 0.25\\) and \\(3a + 4b = 2.0",
      "a + b = 0.75\\) and \\(3a + 4b = 0.8",
      "a + b = 0.25\\) and \\(a + b = 0.8",
      "a + b = 0.25\\) and \\(3a + 4b = 0.8"
    ],
    "a": 3,
    "answer": "3",
    "hint": "",
    "solution": "The correct answer is a + b = 0.25\\) and \\(3a + 4b = 0.8.",
    "solutionSteps": [
      {
        "explanation": "We are given the partial probability distribution of a random variable \\(X\\) and its mean. We will formulate two linear equations using the sum of probabilities rule and the definition of the expected value.",
        "workingOut": "\\(\\text{Given: } P(X=1)=0.3, P(X=2)=0.45, P(X=3)=a, P(X=4)=b, \\text{ Mean } = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Since the sum of all probabilities in any valid distribution must equal one, we sum the four probabilities and simplify the equation.",
        "workingOut": "\\(0.3 + 0.45 + a + b = 1 \\implies 0.75 + a + b = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract zero point seven five from both sides to obtain our first equation in terms of \\(a\\) and \\(b\\).",
        "workingOut": "\\(a + b = 0.25\\)",
        "graphData": null
      },
      {
        "explanation": "Next, we apply the definition of the mean, which is the sum of each value of \\(X\\) multiplied by its probability, and set it equal to two.",
        "workingOut": "\\(E(X) = 1(0.3) + 2(0.45) + 3(a) + 4(b) = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the known numerical products, combine them, and subtract the sum from both sides to yield our second equation.",
        "workingOut": "\\(0.3 + 0.9 + 3a + 4b = 2 \\implies 1.2 + 3a + 4b = 2 \\implies 3a + 4b = 0.8\\)",
        "graphData": null
      },
      {
        "explanation": "We have successfully derived the two simultaneous linear equations, which are \\(a + b = 0.25\\) and \\(3a + 4b = 0.8\\).",
        "workingOut": "\\(\\text{Equations: } a + b = 0.25, \\; 3a + 4b = 0.8\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "dane2020-q22b",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Given the equations \\(a + b = 0.25\\) and \\(3a + 4b = 0.8\\) for the probability distribution of \\(X\\), find the values of \\(a\\) and \\(b\\).",
    "opts": [
      "\\(a = 0.05, b = 0.2\\)",
      "\\(a = 0.2, b = 0.05\\)",
      "\\(a = 0.15, b = 0.1\\)",
      "\\(a = 0.1, b = 0.15\\)"
    ],
    "a": 1,
    "answer": "1",
    "hint": "",
    "solution": "The correct answer is \\(a = 0.2, b = 0.05\\).",
    "solutionSteps": [
      {
        "explanation": "We are given a system of two linear simultaneous equations. Our strategy is to use the elimination method by multiplying the first equation by three to match the coefficients of \\(a\\).",
        "workingOut": "\\(\\text{Equations: } (1) \\; a + b = 0.25, \\quad (2) \\; 3a + 4b = 0.8\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the first equation by three. This transforms the equation so that we can easily eliminate \\(a\\) by subtraction.",
        "workingOut": "\\(3(a + b) = 3(0.25) \\implies 3a + 3b = 0.75\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the newly scaled equation from the second equation to eliminate the term with \\(a\\) and solve directly for \\(b\\).",
        "workingOut": "\\((3a + 4b) - (3a + 3b) = 0.8 - 0.75 \\implies b = 0.05\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute this value of \\(b = 0.05\\) back into the first equation to solve for \\(a\\). Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(a + 0.05 = 0.25 \\implies a = 0.20\\)",
        "graphData": null
      },
      {
        "explanation": "We have found the values to be \\(a = 0.2\\) and \\(b = 0.05\\). We can verify this solution by checking that these values satisfy both original equations.",
        "workingOut": "\\(\\text{Final Answer: } a = 0.2, b = 0.05\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "dane2020s-q22a",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "A discrete random variable \\(X\\) has the probability distribution shown below, and a mean of \\(2.2\\):\n\n| \\(x\\) | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| \\(P(X=x)\\) | 0.25 | 0.4 | \\(a\\) | \\(b\\) |\n\nFind two equations in terms of \\(a\\) and \\(b\\).",
    "opts": [
      "a + b = 0.35\\) and \\(3a + 4b = 2.2",
      "a + b = 0.65\\) and \\(3a + 4b = 1.15",
      "a + b = 0.35\\) and \\(3a + 4b = 1.15",
      "a + b = 0.35\\) and \\(3a + 4b = 1.25"
    ],
    "a": 2,
    "answer": "2",
    "hint": "",
    "solution": "The correct answer is a + b = 0.35\\) and \\(3a + 4b = 1.15.",
    "solutionSteps": [
      {
        "explanation": "We are given the probabilities for some values of the random variable \\(X\\) and its expected value. We will construct two equations using the sum of probabilities property and the expected value formula.",
        "workingOut": "\\(\\text{Given: } P(X=1)=0.25, P(X=2)=0.4, P(X=3)=a, P(X=4)=b, \\text{ Mean } = 2.2\\)",
        "graphData": null
      },
      {
        "explanation": "First, we sum all the probabilities and set the sum equal to one, then simplify the constants. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(0.25 + 0.4 + a + b = 1 \\implies 0.65 + a + b = 1\\)",
        "graphData": null
      },
      {
        "explanation": "Isolate the variables by subtracting zero point six five from both sides of the equation. Why this step? It isolates one clear idea so the next calculation is reliable. What rule applies is shown in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.",
        "workingOut": "\\(a + b = 0.35\\)",
        "graphData": null
      },
      {
        "explanation": "Next, we set up the mean equation using the expectation formula, substituting the known values and probabilities.",
        "workingOut": "\\(E(X) = 1(0.25) + 2(0.4) + 3(a) + 4(b) = 2.2\\)",
        "graphData": null
      },
      {
        "explanation": "Calculate the constant products, add them together, and subtract the result from two point two to get the second simplified equation.",
        "workingOut": "\\(0.25 + 0.8 + 3a + 4b = 2.2 \\implies 1.05 + 3a + 4b = 2.2 \\implies 3a + 4b = 1.15\\)",
        "graphData": null
      },
      {
        "explanation": "Thus, the two equations that describe the probability distribution are \\(a + b = 0.35\\) and \\(3a + 4b = 1.15\\).",
        "workingOut": "\\(\\text{Equations: } a + b = 0.35, \\; 3a + 4b = 1.15\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "dane2020s-q22b",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "multiple_choice",
    "difficulty": "medium",
    "timeLimit": 120,
    "question": "Given the equations \\(a + b = 0.35\\) and \\(3a + 4b = 1.15\\) for the probability distribution of \\(X\\), find the values of \\(a\\) and \\(b\\).",
    "opts": [
      "\\(a = 0.25, b = 0.10\\)",
      "\\(a = 0.20, b = 0.15\\)",
      "\\(a = 0.15, b = 0.20\\)",
      "\\(a = 0.10, b = 0.25\\)"
    ],
    "a": 0,
    "answer": "0",
    "hint": "",
    "solution": "The correct answer is \\(a = 0.25, b = 0.10\\).",
    "solutionSteps": [
      {
        "explanation": "We are given a system of two simultaneous equations. Our strategy is to use the method of elimination by scaling the first equation so that the coefficient of \\(a\\) matches the second equation.",
        "workingOut": "\\(\\text{Equations: } (1) \\; a + b = 0.35, \\quad (2) \\; 3a + 4b = 1.15\\)",
        "graphData": null
      },
      {
        "explanation": "Multiply the first equation by three. This will allow us to eliminate \\(a\\) when we subtract this equation from equation two.",
        "workingOut": "\\(3(a + b) = 3(0.35) \\implies 3a + 3b = 1.05\\)",
        "graphData": null
      },
      {
        "explanation": "The final values are \\(a = 0.25\\) and \\(b = 0.10\\). We can confirm this is correct by substituting them back into both original equations to verify.",
        "workingOut": "\\(\\text{Final Answer: } a = 0.25, b = 0.10\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": false
  },
  {
    "id": "car2020-q23",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "The discrete random variable \\(X\\) has a mean of \\(2\\) and probability distribution:\n\n| \\(x\\) | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| \\(p(x)\\) | \\(0.3\\) | \\(0.45\\) | \\(a\\) | \\(b\\) |\n\n(a) Show that the two equations in terms of \\(a\\) and \\(b\\) are \\(a + b = 0.25\\) and \\(3a + 4b = 0.8\\).\n\n(b) Hence find the values of \\(a\\) and \\(b\\).",
    "answer": "(a) By using the sum of probabilities rule:\\n0.3 + 0.45 + a + b = 1 \\implies a + b = 0.25.\\nBy using the expectation formula:\\n1(0.3) + 2(0.45) + 3a + 4b = 2 \\implies 1.2 + 3a + 4b = 2 \\implies 3a + 4b = 0.8.\\n\\n(b) Solving the simultaneous equations:\\nMultiply the first equation by 4 to get:\\n4a + 4b = 1.0.\\nSubtract the second equation to get:\\na = 0.2.\\nSubstitute back to find b:\\n0.2 + b = 0.25 \\implies b = 0.05.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "(a) By using the sum of probabilities rule:\\n0.3 + 0.45 + a + b = 1 \\implies a + b = 0.25.\\nBy using the expectation formula:\\n1(0.3) + 2(0.45) + 3a + 4b = 2 \\implies 1.2 + 3a + 4b = 2 \\implies 3a + 4b = 0.8.\\n\\n(b) Solving the simultaneous equations:\\nMultiply the first equation by 4 to get:\\n4a + 4b = 1.0.\\nSubtract the second equation to get:\\na = 0.2.\\nSubstitute back to find b:\\n0.2 + b = 0.25 \\implies b = 0.05.",
    "solutionSteps": [
      {
        "explanation": "For part (a), we sum all the probabilities from the distribution table and equate the sum to one.\\nThis is a requirement that holds true for any discrete probability distribution.",
        "workingOut": "\\(0.3 + 0.45 + a + b = 1 \\implies a + b = 0.25\\)",
        "graphData": null
      },
      {
        "explanation": "We set up the expected value equation using the given mean of two.\\nWe apply the formula for expectation by summing the products of each variable outcome and its corresponding probability.",
        "workingOut": "\\(1(0.3) + 2(0.45) + 3a + 4b = 2\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expectation equation by combining the constant values and subtracting them from both sides of the equation.",
        "workingOut": "\\(0.3 + 0.9 + 3a + 4b = 2 \\implies 1.2 + 3a + 4b = 2 \\implies 3a + 4b = 0.8\\)",
        "graphData": null
      },
      {
        "explanation": "For part (b), we solve the system of simultaneous equations.\\nWe scale the first equation by multiplying it by four to match the coefficient of \\(b\\) in the second equation.",
        "workingOut": "\\(4(a + b) = 4(0.25) \\implies 4a + 4b = 1.0\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract the second equation from this scaled equation to eliminate \\(b\\) and calculate the value of \\(a\\).",
        "workingOut": "\\((4a + 4b) - (3a + 4b) = 1.0 - 0.8 \\implies a = 0.2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute the value of \\(a = 0.2\\) back into the equation \\(a + b = 0.25\\) to find \\(b\\).\\nWe conclude that the values are \\(a = 0.2\\) and \\(b = 0.05\\).",
        "workingOut": "\\(0.2 + b = 0.25 \\implies b = 0.05\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  },
  {
    "id": "car2020s-q23",
    "topicId": "y12a-10A",
    "c": "10A",
    "t": "Relative frequency",
    "type": "teacher_review",
    "difficulty": "hard",
    "timeLimit": 180,
    "question": "The discrete random variable \\(Y\\) has a mean of \\(3\\) and probability distribution:\n\n| \\(y\\) | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n| \\(p(y)\\) | \\(0.1\\) | \\(0.2\\) | \\(c\\) | \\(d\\) | \\(0.1\\) |\n\n(a) Show that the two equations in terms of \\(c\\) and \\(d\\) are \\(c + d = 0.6\\) and \\(3c + 4d = 2\\).\n\n(b) Hence find the values of \\(c\\) and \\(d\\).",
    "answer": "(a) By using the sum of probabilities rule:\\n0.1 + 0.2 + c + d + 0.1 = 1 \\implies c + d = 0.6.\\nBy using the expectation formula:\\n1(0.1) + 2(0.2) + 3c + 4d + 5(0.1) = 3 \\implies 1.0 + 3c + 4d = 3 \\implies 3c + 4d = 2.\\n\\n(b) Solving the simultaneous equations:\\nMultiply the first equation by 3 to get:\\n3c + 3d = 1.8.\\nSubtract this from the second equation to get:\\nd = 0.2.\\nSubstitute back to find c:\\nc + 0.2 = 0.6 \\implies c = 0.4.",
    "hint": "Write a full structured solution for the teacher to mark.",
    "solution": "(a) By using the sum of probabilities rule:\\n0.1 + 0.2 + c + d + 0.1 = 1 \\implies c + d = 0.6.\\nBy using the expectation formula:\\n1(0.1) + 2(0.2) + 3c + 4d + 5(0.1) = 3 \\implies 1.0 + 3c + 4d = 3 \\implies 3c + 4d = 2.\\n\\n(b) Solving the simultaneous equations:\\nMultiply the first equation by 3 to get:\\n3c + 3d = 1.8.\\nSubtract this from the second equation to get:\\nd = 0.2.\\nSubstitute back to find c:\\nc + 0.2 = 0.6 \\implies c = 0.4.",
    "solutionSteps": [
      {
        "explanation": "For part (a), we set up the equation for the sum of all probabilities in the table, setting it equal to one.\\nThis serves to establish our first relationship between the unknowns.",
        "workingOut": "\\(0.1 + 0.2 + c + d + 0.1 = 1 \\implies c + d = 0.6\\)",
        "graphData": null
      },
      {
        "explanation": "Next, we set up the expected value equation using the given mean value of three.\\nWe sum the products of each variable outcome and its probability.",
        "workingOut": "\\(1(0.1) + 2(0.2) + 3c + 4d + 5(0.1) = 3\\)",
        "graphData": null
      },
      {
        "explanation": "Simplify the expectation equation by adding all the numerical coefficients together and subtracting the sum from both sides.",
        "workingOut": "\\(0.1 + 0.4 + 3c + 4d + 0.5 = 3 \\implies 1.0 + 3c + 4d = 3 \\implies 3c + 4d = 2\\)",
        "graphData": null
      },
      {
        "explanation": "For part (b), we solve the system of simultaneous equations by elimination.\\nWe multiply the first equation by three so that the coefficient of \\(c\\) aligns with that in the second equation.",
        "workingOut": "\\(3(c + d) = 3(0.6) \\implies 3c + 3d = 1.8\\)",
        "graphData": null
      },
      {
        "explanation": "Subtract this scaled equation from the second equation to eliminate \\(c\\) and find the value of \\(d\\).",
        "workingOut": "\\((3c + 4d) - (3c + 3d) = 2.0 - 1.8 \\implies d = 0.2\\)",
        "graphData": null
      },
      {
        "explanation": "Substitute \\(d = 0.2\\) back into the first equation to solve for \\(c\\).\\nThis gives \\(c = 0.4\\) and \\(d = 0.2\\) as the final values.",
        "workingOut": "\\(c + 0.2 = 0.6 \\implies c = 0.4\\)",
        "graphData": null
      }
    ],
    "graphData": null,
    "isNew": true,
    "requiresManualGrading": true
  }
];
