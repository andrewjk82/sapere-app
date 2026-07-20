import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const questionsToUpdate = [
  {
    "id": "asc2020-q28",
    "type": "multiple_choice",
    "question": "Kelly has been offered two part-time jobs at local furniture shops. At shop \\\\(X\\\\) she receives a retainer of \\\\(\\$300\\\\) per week plus \\\\(\\$200\\\\) for each lounge suite sold. At shop \\\\(Y\\\\) she receives \\\\(\\$450\\\\) per week plus \\\\(\\$100\\\\) per suite sold.\\\\n\\\\nPast weekly sales follow this probability distribution:\\\\n\\\\n| Suites sold | 0 | 1 | 2 | 3 | 4 | 5 |\\\\n|---|---|---|---|---|---|---|\\\\n| Probability | 0.1 | 0.2 | 0.5 | 0.15 | 0.04 | 0.01 |\\\\n\\\\nFind the expected number of lounge suites sold per week, rounded to the nearest whole number.",
    "opts": [
      "\\\\(2\\\\text{ suites per week}\\\\)",
      "\\\\(1\\\\text{ suite per week}\\\\)",
      "\\\\(3\\\\text{ suites per week}\\\\)",
      "\\\\(4\\\\text{ suites per week}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the expected value summation using the given probability distribution values.",
        "workingOut": "E(X) = \\\\sum x_i \\\\cdot P(X = x_i)",
        "graphData": null
      },
      {
        "explanation": "Next, we calculate the sum by multiplying each possible number of suites sold by its corresponding probability.",
        "workingOut": "= 0(0.1) + 1(0.2) + 2(0.5) + 3(0.15) + 4(0.04) + 5(0.01)",
        "graphData": null
      },
      {
        "explanation": "We evaluate the sum of each individual term to find the exact expected value.",
        "workingOut": "= 0 + 0.2 + 1.0 + 0.45 + 0.16 + 0.05 = 1.86",
        "graphData": null
      },
      {
        "explanation": "Finally, we round the decimal expectation value to the nearest whole number as requested.",
        "workingOut": "E(X) \\\\approx 2\\\\text{ suites per week}",
        "graphData": null
      }
    ],
    "subQuestions": [
      {
        "id": "asc2020-q28-a",
        "type": "multiple_choice",
        "question": "(a) Find the expected number of lounge suites sold per week. Give your answer to the nearest whole number.",
        "options": [
          "\\\\(2\\\\text{ suites per week}\\\\)",
          "\\\\(1\\\\text{ suite per week}\\\\)",
          "\\\\(3\\\\text{ suites per week}\\\\)",
          "\\\\(4\\\\text{ suites per week}\\\\)"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "Apply the expected value formula by multiplying each outcome by its probability.",
            "workingOut": "E(X) = 0(0.1)+1(0.2)+2(0.5)+3(0.15)+4(0.04)+5(0.01) = 1.86"
          },
          {
            "explanation": "Round the resulting value to the nearest integer.",
            "workingOut": "1.86 \\\\approx 2"
          }
        ],
        "graphData": null
      },
      {
        "id": "asc2020-q28-b",
        "type": "multiple_choice",
        "question": "(b) Find the variance for this data.",
        "options": [
          "\\\\(\\\\text{Var}(X) \\\\approx 1.2504\\\\)",
          "\\\\(\\\\text{Var}(X) \\\\approx 0.8804\\\\)",
          "\\\\(\\\\text{Var}(X) \\\\approx 0.9804\\\\)",
          "\\\\(\\\\text{Var}(X) \\\\approx 1.0804\\\\)"
        ],
        "answer": "2",
        "solutionSteps": [
          {
            "explanation": "First, we calculate the expected value of X squared by squaring each variable value and multiplying it by its probability.",
            "workingOut": "E(X^2) = 0^2(0.1) + 1^2(0.2) + 2^2(0.5) + 3^2(0.15) + 4^2(0.04) + 5^2(0.01) = 4.44"
          },
          {
            "explanation": "Next, we calculate the variance by subtracting the square of the expected value from the expectation of X squared.",
            "workingOut": "\\\\text{Var}(X) = E(X^2) - [E(X)]^2 = 4.44 - (1.86)^2 = 0.9804"
          }
        ],
        "graphData": null
      },
      {
        "id": "asc2020-q28-c",
        "type": "multiple_choice",
        "question": "(c) Which furniture shop job should Kelly take? Justify your answer by referring to the expected weekly pay based on your result from part (a).",
        "options": [
          "Kelly should take Shop \\\\(X\\\\) (expected pay of \\\\(\\$700\\\\) vs \\\\(\\$650\\\\) at Shop \\\\(Y\\\\))",
          "Kelly should take Shop \\\\(Y\\\\) (expected pay of \\\\(\\$650\\\\) vs \\\\(\\$500\\\\) at Shop \\\\(X\\\\))",
          "Kelly should take Shop \\\\(X\\\\) (expected pay of \\\\(\\$800\\\\) vs \\\\(\\$750\\\\) at Shop \\\\(Y\\\\))",
          "Kelly should take Shop \\\\(Y\\\\) (expected pay of \\\\(\\$650\\\\) vs \\\\(\\$600\\\\) at Shop \\\\(X\\\\))"
        ],
        "answer": "0",
        "solutionSteps": [
          {
            "explanation": "Calculate Shop X expected pay using E(X) = 2.",
            "workingOut": "300 + 200 \\\\times 2 = \\\\$700"
          },
          {
            "explanation": "Calculate Shop Y expected pay.",
            "workingOut": "450 + 100 \\\\times 2 = \\\\$650"
          },
          {
            "explanation": "Compare the two values and select the job that offers higher expected weekly earnings.",
            "workingOut": "\\\\$700 > \\\\$650 \\\\implies \\\\text{Shop } X"
          }
        ],
        "graphData": null
      }
    ]
  },
  {
    "id": "asc2020-q28a",
    "type": "multiple_choice",
    "question": "Kelly has been offered two part-time jobs at local furniture shops. At shop \\\\(X\\\\) she receives a retainer of \\\\(\\$300\\\\) per week plus \\\\(\\$200\\\\) for each lounge suite sold. At shop \\\\(Y\\\\) she receives \\\\(\\$450\\\\) per week plus \\\\(\\$100\\\\) per suite sold.\\\\n\\\\nPast weekly sales follow this probability distribution:\\\\n\\\\n| Suites sold | 0 | 1 | 2 | 3 | 4 | 5 |\\\\n|---|---|---|---|---|---|---|\\\\n| Probability | 0.1 | 0.2 | 0.5 | 0.15 | 0.04 | 0.01 |\\\\n\\\\nFind the expected number of lounge suites sold per week, rounded to the nearest whole number.",
    "opts": [
      "\\\\(2\\\\text{ suites per week}\\\\)",
      "\\\\(1\\\\text{ suite per week}\\\\)",
      "\\\\(3\\\\text{ suites per week}\\\\)",
      "\\\\(4\\\\text{ suites per week}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by setting up the expected value summation using the given probability distribution values.",
        "workingOut": "E(X) = \\\\sum x_i \\\\cdot P(X = x_i)",
        "graphData": null
      },
      {
        "explanation": "Next, we calculate the sum by multiplying each possible number of suites sold by its corresponding probability.",
        "workingOut": "= 0(0.1) + 1(0.2) + 2(0.5) + 3(0.15) + 4(0.04) + 5(0.01)",
        "graphData": null
      },
      {
        "explanation": "We evaluate the sum of each individual term to find the exact expected value.",
        "workingOut": "= 0 + 0.2 + 1.0 + 0.45 + 0.16 + 0.05 = 1.86",
        "graphData": null
      },
      {
        "explanation": "Finally, we round the decimal expectation value to the nearest whole number as requested.",
        "workingOut": "E(X) \\\\approx 2\\\\text{ suites per week}",
        "graphData": null
      }
    ]
  },
  {
    "id": "asc2020-q28b",
    "type": "multiple_choice",
    "question": "Using the probability distribution from the previous part (Kelly's sales probability distribution), find the variance for this data.",
    "opts": [
      "\\\\(\\\\text{Var}(X) \\\\approx 1.2504\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 0.8804\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 0.9804\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 1.0804\\\\)"
    ],
    "a": 2,
    "solutionSteps": [
      {
        "explanation": "First, we calculate the expected value of X squared by squaring each variable value and multiplying it by its probability.",
        "workingOut": "E(X^2) = 0^2(0.1) + 1^2(0.2) + 2^2(0.5) + 3^2(0.15) + 4^2(0.04) + 5^2(0.01)",
        "graphData": null
      },
      {
        "explanation": "We expand and sum the squared value terms to find the expectation of X squared.",
        "workingOut": "= 0 + 0.2 + 2.0 + 1.35 + 0.64 + 0.25 = 4.44",
        "graphData": null
      },
      {
        "explanation": "Next, we calculate the variance by subtracting the square of the expected value from the expectation of X squared.",
        "workingOut": "\\\\text{Var}(X) = E(X^2) - [E(X)]^2 = 4.44 - (1.86)^2",
        "graphData": null
      },
      {
        "explanation": "We calculate the final numerical value to find the exact variance of the distribution.",
        "workingOut": "= 4.44 - 3.4596 = 0.9804",
        "graphData": null
      }
    ]
  },
  {
    "id": "asc2020-q28c",
    "type": "multiple_choice",
    "question": "Using the expected value result \\\\(E(X) \\\\approx 2\\\\): which furniture shop job should Kelly take? Justify your answer by referring to her expected weekly pay.",
    "opts": [
      "Kelly should take Shop \\\\(X\\\\) (expected weekly pay of \\\\(\\$700\\\\) vs \\\\(\\$650\\\\) at Shop \\\\(Y\\\\))",
      "Kelly should take Shop \\\\(Y\\\\) (expected weekly pay of \\\\(\\$650\\\\) vs \\\\(\\$500\\\\) at Shop \\\\(X\\\\))",
      "Kelly should take Shop \\\\(X\\\\) (expected weekly pay of \\\\(\\$800\\\\) vs \\\\(\\$750\\\\) at Shop \\\\(Y\\\\))",
      "Kelly should take Shop \\\\(Y\\\\) (expected weekly pay of \\\\(\\$650\\\\) vs \\\\(\\$600\\\\) at Shop \\\\(X\\\\))"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by calculating the expected weekly pay at Shop X using the retainer and commission structure.",
        "workingOut": "E(\\\\text{pay}_X) = 300 + 200 \\\\times 2 = 300 + 400 = \\\\$700",
        "graphData": null
      },
      {
        "explanation": "Next, we calculate the expected weekly pay at Shop Y using its corresponding retainer and commission structure.",
        "workingOut": "E(\\\\text{pay}_Y) = 450 + 100 \\\\times 2 = 450 + 200 = \\\\$650",
        "graphData": null
      },
      {
        "explanation": "Finally, we compare the two values and select the job that offers higher expected weekly earnings.",
        "workingOut": "\\\\$700 > \\\\$650 \\\\implies \\\\text{Shop } X",
        "graphData": null
      }
    ]
  },
  {
    "id": "asc2020-q28v",
    "type": "multiple_choice",
    "question": "A random variable \\\\(X\\\\) has the following probability distribution:\\\\n\\\\n| \\\\(x\\\\) | 0 | 1 | 2 | 3 |\\\\n|---|---|---|---|---|\\\\n| \\\\(P(X=x)\\\\) | 0.2 | 0.3 | 0.4 | 0.1 |\\\\n\\\\n(a) Find \\\\(E(X)\\\\) and \\\\(\\\\text{Var}(X)\\\\).\\\\n(b) If an employee earns a base salary of \\\\(\\$500\\\\) plus \\\\(\\$80\\\\) per unit of \\\\(X\\\\), find the expected weekly salary.",
    "opts": [
      "\\\\(E(X) = 1.4\\\\), \\\\(\\\\text{Var}(X) = 0.84\\\\), Expected salary = \\\\(\\$612\\\\)",
      "\\\\(E(X) = 1.4\\\\), \\\\(\\\\text{Var}(X) = 0.96\\\\), Expected salary = \\\\(\\$612\\\\)",
      "\\\\(E(X) = 1.5\\\\), \\\\(\\\\text{Var}(X) = 0.84\\\\), Expected salary = \\\\(\\$620\\\\)",
      "\\\\(E(X) = 1.2\\\\), \\\\(\\\\text{Var}(X) = 0.84\\\\), Expected salary = \\\\(\\$596\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by calculating the expected value E(X) by summing the products of the variable values and their probabilities.",
        "workingOut": "E(X) = 0(0.2) + 1(0.3) + 2(0.4) + 3(0.1) = 1.4",
        "graphData": null
      },
      {
        "explanation": "Next, we calculate the expected value of X squared to prepare for calculating the variance.",
        "workingOut": "E(X^2) = 0^2(0.2) + 1^2(0.3) + 2^2(0.4) + 3^2(0.1) = 2.8",
        "graphData": null
      },
      {
        "explanation": "We apply the variance formula to compute the variance of the distribution.",
        "workingOut": "\\\\text{Var}(X) = E(X^2) - [E(X)]^2 = 2.8 - (1.4)^2 = 0.84",
        "graphData": null
      },
      {
        "explanation": "Finally, we calculate the expected salary using the linear properties of expectation.",
        "workingOut": "E(500 + 80X) = 500 + 80 \\\\times 1.4 = 500 + 112 = \\\\$612",
        "graphData": null
      }
    ]
  },
  {
    "id": "bar2020-q15bii",
    "type": "multiple_choice",
    "question": "A discrete distribution has values \\\\(x \\\\in \\\\{1, 3, 5, 6\\\\}\\\\), corresponding probabilities \\\\(p(x) \\\\in \\\\{0.4, 0.12, 0.3, 0.18\\\\}\\\\), and expected value \\\\(E(X) = 3.34\\\\). Find the variance for this data.",
    "opts": [
      "\\\\(\\\\text{Var}(X) \\\\approx 3.34\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 4.30\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 4.60\\\\)",
      "\\\\(\\\\text{Var}(X) \\\\approx 2.96\\\\)"
    ],
    "a": 1,
    "solutionSteps": [
      {
        "explanation": "We begin by calculating the expected value of X squared using the definition of expectation for discrete distributions.",
        "workingOut": "E(X^2) = 1^2(0.4) + 3^2(0.12) + 5^2(0.3) + 6^2(0.18)",
        "graphData": null
      },
      {
        "explanation": "We expand and sum each individual squared product term.",
        "workingOut": "= 0.4 + 1.08 + 7.5 + 6.48 = 15.46",
        "graphData": null
      },
      {
        "explanation": "Finally, we apply the variance formula to calculate the variance by subtracting the squared expectation from the expectation of X squared.",
        "workingOut": "\\\\text{Var}(X) = 15.46 - (3.34)^2 = 15.46 - 11.1556 = 4.3044 \\\\approx 4.30",
        "graphData": null
      }
    ]
  },
  {
    "id": "bar2020-q15biiv",
    "type": "multiple_choice",
    "question": "A discrete random variable \\\\(X\\\\) has the probability distribution \\\\(P(X=1)=0.3\\\\), \\\\(P(X=2)=0.4\\\\), \\\\(P(X=4)=0.2\\\\), and \\\\(P(X=6)=0.1\\\\). Find the variance of \\\\(X\\\\).",
    "opts": [
      "\\\\(\\\\text{Var}(X) = 2.45\\\\)",
      "\\\\(\\\\text{Var}(X) = 1.95\\\\)",
      "\\\\(\\\\text{Var}(X) = 2.25\\\\)",
      "\\\\(\\\\text{Var}(X) = 2.85\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by calculating the expected value E(X) by summing the products of the outcomes and their probabilities.",
        "workingOut": "E(X) = 1(0.3) + 2(0.4) + 4(0.2) + 6(0.1) = 2.5",
        "graphData": null
      },
      {
        "explanation": "Next, we calculate the expected value of X squared to prepare for calculating the variance.",
        "workingOut": "E(X^2) = 1^2(0.3) + 2^2(0.4) + 4^2(0.2) + 6^2(0.1) = 8.7",
        "graphData": null
      },
      {
        "explanation": "Finally, we subtract the squared expectation from the expectation of X squared to find the variance.",
        "workingOut": "\\\\text{Var}(X) = 8.7 - (2.5)^2 = 8.7 - 6.25 = 2.45",
        "graphData": null
      }
    ]
  },
  {
    "id": "baulko2020-q14cii",
    "type": "multiple_choice",
    "question": "For a probability distribution defined by \\\\(P(X=0)=\\\\dfrac{1}{7}\\\\), \\\\(P(X=1)=\\\\dfrac{4}{7}\\\\), \\\\(P(X=2)=\\\\dfrac{2}{7}\\\\), and expected value \\\\(E(X)=\\\\dfrac{8}{7}\\\\), find \\\\(E(X^2)\\\\), \\\\(\\\\text{Var}(X)\\\\), and the standard deviation \\\\(\\\\sigma\\\\).",
    "opts": [
      "\\\\(E(X^2)=\\\\dfrac{12}{7}\\\\), \\\\(\\\\text{Var}(X)=\\\\dfrac{20}{49}\\\\), \\\\(\\\\sigma \\\\approx 0.638\\\\)",
      "\\\\(E(X^2)=\\\\dfrac{10}{7}\\\\), \\\\(\\\\text{Var}(X)=\\\\dfrac{20}{49}\\\\), \\\\(\\\\sigma \\\\approx 0.638\\\\)",
      "\\\\(E(X^2)=\\\\dfrac{12}{7}\\\\), \\\\(\\\\text{Var}(X)=\\\\dfrac{16}{49}\\\\), \\\\(\\\\sigma \\\\approx 0.571\\\\)",
      "\\\\(E(X^2)=\\\\dfrac{10}{7}\\\\), \\\\(\\\\text{Var}(X)=\\\\dfrac{16}{49}\\\\), \\\\(\\\\sigma \\\\approx 0.571\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by calculating the expected value of X squared using the definition of expectation.",
        "workingOut": "E(X^2) = 0^2\\\\left(\\\\dfrac{1}{7}\\\\right) + 1^2\\\\left(\\\\dfrac{4}{7}\\\\right) + 2^2\\\\left(\\\\dfrac{2}{7}\\\\right) = \\\\dfrac{12}{7}",
        "graphData": null
      },
      {
        "explanation": "Next, we calculate the variance using the expectation of X squared and the squared expectation value.",
        "workingOut": "\\\\text{Var}(X) = \\\\dfrac{12}{7} - \\\\left(\\\\dfrac{8}{7}\\\\right)^2 = \\\\dfrac{84 - 64}{49} = \\\\dfrac{20}{49}",
        "graphData": null
      },
      {
        "explanation": "Finally, we take the square root of the variance to determine the standard deviation, rounding to 3 decimal places.",
        "workingOut": "\\\\sigma = \\\\sqrt{\\\\dfrac{20}{49}} \\\\approx 0.638",
        "graphData": null
      }
    ]
  },
  {
    "id": "baulko2020-q14ciiv",
    "type": "multiple_choice",
    "question": "A bag contains 2 red and 3 blue balls. Two balls are drawn at random without replacement. Let \\\\(X\\\\) represent the number of blue balls drawn. Find \\\\(E(X)\\\\) and \\\\(\\\\text{Var}(X)\\\\).",
    "opts": [
      "\\\\(E(X) = \\\\dfrac{6}{5}\\\\), \\\\(\\\\text{Var}(X) = \\\\dfrac{9}{25}\\\\)",
      "\\\\(E(X) = \\\\dfrac{6}{5}\\\\), \\\\(\\\\text{Var}(X) = \\\\dfrac{12}{25}\\\\)",
      "\\\\(E(X) = \\\\dfrac{5}{4}\\\\), \\\\(\\\\text{Var}(X) = \\\\dfrac{9}{25}\\\\)",
      "\\\\(E(X) = \\\\dfrac{4}{5}\\\\), \\\\(\\\\text{Var}(X) = \\\\dfrac{16}{25}\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by determining the probability distribution of X. The possible values are 0, 1, or 2 blue balls.",
        "workingOut": "P(X=0) = \\\\dfrac{2 \\\\times 1}{5 \\\\times 4} = \\\\dfrac{1}{10}, \\\\; P(X=1) = \\\\dfrac{2(3) + 3(2)}{5 \\\\times 4} = \\\\dfrac{3}{5}, \\\\; P(X=2) = \\\\dfrac{3 \\\\times 2}{5 \\\\times 4} = \\\\dfrac{3}{10}",
        "graphData": null
      },
      {
        "explanation": "Next, we calculate the expected value E(X) using the probabilities we found.",
        "workingOut": "E(X) = 0\\\\left(\\\\dfrac{1}{10}\\\\right) + 1\\\\left(\\\\dfrac{3}{5}\\\\right) + 2\\\\left(\\\\dfrac{3}{10}\\\\right) = \\\\dfrac{6}{5}",
        "graphData": null
      },
      {
        "explanation": "We compute the expected value of X squared to prepare for the variance calculation.",
        "workingOut": "E(X^2) = 0^2\\\\left(\\\\dfrac{1}{10}\\\\right) + 1^2\\\\left(\\\\dfrac{3}{5}\\\\right) + 2^2\\\\left(\\\\dfrac{3}{10}\\\\right) = \\\\dfrac{9}{5}",
        "graphData": null
      },
      {
        "explanation": "Finally, we calculate the variance by subtracting the square of the expectation from the expectation of X squared.",
        "workingOut": "\\\\text{Var}(X) = E(X^2) - [E(X)]^2 = \\\\dfrac{9}{5} - \\\\left(\\\\dfrac{6}{5}\\\\right)^2 = \\\\dfrac{45 - 36}{25} = \\\\dfrac{9}{25}",
        "graphData": null
      }
    ]
  },
  {
    "id": "bbhs2020-23",
    "type": "multiple_choice",
    "question": "A discrete random variable \\\\(X\\\\) has the probability distribution:\\\\n\\\\n| \\\\(X = x\\\\) | 20 | 21 | 22 | 23 |\\\\n|---|---|---|---|---|\\\\n| \\\\(P(x)\\\\) | 0.24 | 0.2 | \\\\(m\\\\) | 0.4 |\\\\n\\\\nFind \\\\(m\\\\), the expected value \\\\(E(X)\\\\), and the variance \\\\(\\\\text{Var}(X)\\\\).",
    "opts": [
      "\\\\(m = 0.16\\\\), \\\\(E(X) = 21.72\\\\), \\\\(\\\\text{Var}(X) = 1.4816\\\\)",
      "\\\\(m = 0.16\\\\), \\\\(E(X) = 21.72\\\\), \\\\(\\\\text{Var}(X) = 1.6216\\\\)",
      "\\\\(m = 0.20\\\\), \\\\(E(X) = 21.80\\\\), \\\\(\\\\text{Var}(X) = 1.4816\\\\)",
      "\\\\(m = 0.16\\\\), \\\\(E(X) = 21.50\\\\), \\\\(\\\\text{Var}(X) = 1.3524\\\\)"
    ],
    "a": 0,
    "solutionSteps": [
      {
        "explanation": "We begin by finding the missing probability value m. Since the sum of all probabilities in a valid distribution must equal exactly one, we set up an addition equation.",
        "workingOut": "0.24 + 0.2 + m + 0.4 = 1 \\\\;\\\\Rightarrow\\\\; m = 0.16",
        "graphData": null
      },
      {
        "explanation": "Next, we calculate the expected value E(X) by summing the products of the variable outcomes and their probabilities.",
        "workingOut": "E(X) = 20(0.24) + 21(0.2) + 22(0.16) + 23(0.4) = 21.72",
        "graphData": null
      },
      {
        "explanation": "We compute the expected value of X squared to prepare for calculating the variance.",
        "workingOut": "E(X^2) = 400(0.24) + 441(0.2) + 484(0.16) + 529(0.4) = 473.24",
        "graphData": null
      },
      {
        "explanation": "Finally, we compute the variance using the expectation of X squared and the squared expectation value.",
        "workingOut": "\\\\text{Var}(X) = E(X^2) - [E(X)]^2 = 473.24 - (21.72)^2 = 1.4816",
        "graphData": null
      }
    ]
  }
];

async function main() {
  console.log('Starting Firestore update for Year12 Advanced Ch10C Q1-Q10...');
  for (const q of questionsToUpdate) {
    const docRef = db.doc(`questions/${q.id}`);
    await docRef.update({
      type: q.type,
      question: q.question,
      opts: q.opts,
      options: q.opts,
      a: q.a,
      answer: String(q.a),
      solutionSteps: q.solutionSteps,
      isNew: true,
      subQuestions: q.subQuestions || []
    });
    console.log(`Successfully updated ${q.id}`);
  }
  console.log('Update complete!');
  process.exit(0);
}

main().catch(err => {
  console.error('Update failed:', err);
  process.exit(1);
});
