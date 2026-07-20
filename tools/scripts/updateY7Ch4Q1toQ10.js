import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const targets = [
  // Q1
  {
    originalQuestion: "Consider the fractions $A = \\frac{2}{5}$, $B = 1\\frac{3}{5}$, and $C = \\frac{12}{5}$ on a number line marked with whole numbers $0, 1, 2, 3$. Which statement about their locations is true?",
    topic: "Fractions on a number line",
    question: "Consider the fractions \\(A = \\dfrac{2}{5}\\), \\(B = 1\\dfrac{3}{5}\\), and \\(C = \\dfrac{12}{5}\\) on a number line marked with whole numbers \\(0, 1, 2, 3\\). Which statement about their locations is true?",
    opts: [
      "\\(A\\) is between \\(1\\) and \\(2\\); \\(B\\) is between \\(2\\) and \\(3\\); \\(C\\) is exactly at \\(2\\).",
      "\\(A\\) is between \\(0\\) and \\(1\\); \\(B\\) is exactly at \\(1\\); \\(C\\) is between \\(1\\) and \\(2\\).",
      "\\(A\\) is between \\(0\\) and \\(1\\); \\(B\\) is between \\(1\\) and \\(2\\); \\(C\\) is between \\(2\\) and \\(3\\).",
      "\\(A\\) is between \\(2\\) and \\(3\\); \\(B\\) is between \\(0\\) and \\(1\\); \\(C\\) is between \\(1\\) and \\(2\\)."
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are given three fractions A, B, and C. To identify their positions relative to integers on the number line, our strategy is to convert each fraction into its decimal form or mixed number equivalent.",
        workingOut: "\\(\\text{Given fractions: } A = \\dfrac{2}{5},\\; B = 1\\dfrac{3}{5},\\; C = \\dfrac{12}{5}\\)",
        graphData: null
      },
      {
        explanation: "First, we evaluate fraction A. Since the numerator 2 is smaller than the denominator 5, it is a proper fraction. Converting to decimal yields 0.4, placing A strictly between the integers 0 and 1.",
        workingOut: "\\(A = \\dfrac{2}{5} = 0.4 \\;\\Rightarrow\\; 0 < A < 1\\)",
        graphData: null
      },
      {
        explanation: "Second, we evaluate point B. It is already written as a mixed number: 1 and 3/5. Since 3/5 is between 0 and 1, the entire value is strictly between 1 and 2 (equivalent to 1.6).",
        workingOut: "\\(B = 1\\dfrac{3}{5} = 1.6 \\;\\Rightarrow\\; 1 < B < 2\\)",
        graphData: null
      },
      {
        explanation: "Third, we evaluate fraction C. This is an improper fraction. Dividing 12 by 5 yields a quotient of 2 and a remainder of 2, representing the mixed number 2 and 2/5 (or 2.4), placing C between 2 and 3.",
        workingOut: "\\(C = \\dfrac{12}{5} = 2\\tfrac{2}{5} = 2.4 \\;\\Rightarrow\\; 2 < C < 3\\)",
        graphData: null
      },
      {
        explanation: "Combining these locations, A is between 0 and 1, B is between 1 and 2, and C is between 2 and 3. We compare this combination with our options and conclude that Option C (index 2) is the only true statement.",
        workingOut: "\\(A \\in (0,1),\\; B \\in (1,2),\\; C \\in (2,3) \\;\\Rightarrow\\; \\text{Correct Option: Index 2}\\)",
        graphData: null
      }
    ]
  },
  // Q2
  {
    originalQuestion: "Consider the fractions $P = \\frac{5}{6}$, $Q = 1\\frac{2}{3}$, and $R = \\frac{13}{6}$ on a number line. Which statement about their locations is true?",
    topic: "Fractions on a number line",
    question: "Consider the fractions \\(P = \\dfrac{5}{6}\\), \\(Q = 1\\dfrac{2}{3}\\), and \\(R = \\dfrac{13}{6}\\) on a number line. Which statement about their locations is true?",
    opts: [
      "\\(P\\) is between \\(1\\) and \\(2\\); \\(Q\\) is between \\(0\\) and \\(1\\); \\(R\\) is between \\(2\\) and \\(3\\).",
      "\\(P\\) is between \\(0\\) and \\(1\\); \\(Q\\) is between \\(1\\) and \\(2\\); \\(R\\) is between \\(2\\) and \\(3\\).",
      "\\(P\\) is between \\(0\\) and \\(1\\); \\(Q\\) is between \\(2\\) and \\(3\\); \\(R\\) is exactly at \\(2\\).",
      "\\(P\\) is exactly at \\(1\\); \\(Q\\) is between \\(1\\) and \\(2\\); \\(R\\) is between \\(0\\) and \\(1\\)."
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to determine the correct integer boundaries for three different fractions P, Q, and R. Our strategy is to convert each fraction to a mixed number or evaluate their division to locate them on the number line.",
        workingOut: "\\(\\text{Given: } P = \\dfrac{5}{6},\\; Q = 1\\dfrac{2}{3},\\; R = \\dfrac{13}{6}\\)",
        graphData: null
      },
      {
        explanation: "We analyze P = 5/6. Since 5 is less than 6, it is a proper fraction representing a portion of a single whole. Thus, P lies strictly between 0 and 1.",
        workingOut: "\\(P = \\dfrac{5}{6} \\;\\Rightarrow\\; 0 < P < 1\\)",
        graphData: null
      },
      {
        explanation: "Next, Q is given as 1 and 2/3. Because it consists of 1 whole plus a proper fraction (2/3), Q is strictly greater than 1 but less than 2, placing it between 1 and 2.",
        workingOut: "\\(Q = 1\\dfrac{2}{3} \\;\\Rightarrow\\; 1 < Q < 2\\)",
        graphData: null
      },
      {
        explanation: "For R = 13/6, we convert the improper fraction by dividing 13 by 6. This gives a quotient of 2 and a remainder of 1. Thus, R is equal to the mixed number 2 and 1/6, placing it between 2 and 3.",
        workingOut: "\\(R = \\dfrac{13}{6} = 2\\tfrac{1}{6} \\;\\Rightarrow\\; 2 < R < 3\\)",
        graphData: null
      },
      {
        explanation: "Summarizing our intervals: P is in (0,1), Q is in (1,2), and R is in (2,3). Comparing this summary with our options, we find it matches Option B (index 1) exactly.",
        workingOut: "\\(P \\in (0,1),\\; Q \\in (1,2),\\; R \\in (2,3) \\;\\Rightarrow\\; \\text{Correct Option: Index 1}\\)",
        graphData: null
      }
    ]
  },
  // Q3
  {
    originalQuestion: "Write the fraction that represents this situation: $9$ out of $13$ students in a class pass their music exam.",
    topic: "Fractions from situations",
    question: "Write the fraction that represents this situation: \\(9\\) out of \\(13\\) students in a class pass their music exam.",
    opts: [
      "\\(\\dfrac{9}{13}\\)",
      "\\(\\dfrac{13}{9}\\)",
      "\\(\\dfrac{4}{13}\\)",
      "\\(\\dfrac{9}{4}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We are asked to construct a fraction representing a specific real-world scenario. Our strategy is to identify the part being measured (numerator) and the total size of the group (denominator).",
        workingOut: "\\(\\text{Identify: Part of group } (9) \\text{ and Total group } (13)\\)",
        graphData: null
      },
      {
        explanation: "The denominator of a fraction represents the total number of equal parts or individuals in the whole group. In this class, there are 13 students in total, so the denominator is 13.",
        workingOut: "\\(\\text{Denominator} = 13\\)",
        graphData: null
      },
      {
        explanation: "The numerator represents the number of parts or individuals we are focusing on. Since 9 students passed the exam, our numerator is 9. A common mistake is subtracting 9 from 13 to get 4, but that would represent those who failed.",
        workingOut: "\\(\\text{Numerator} = 9\\)",
        graphData: null
      },
      {
        explanation: "Putting the numerator over the denominator, we get the fraction 9/13. Since 9 and 13 share no common factors other than 1, this fraction is already in its simplest form. This corresponds to Option A (index 0).",
        workingOut: "\\(\\text{Resulting Fraction} = \\dfrac{9}{13} \\;\\Rightarrow\\; \\text{Correct Option: Index 0}\\)",
        graphData: null
      }
    ]
  },
  // Q4
  {
    originalQuestion: "Which option lists two fractions that are BOTH equivalent to $\\frac{6}{12}$?",
    topic: "Equivalent fractions",
    question: "Which option lists two fractions that are BOTH equivalent to \\(\\dfrac{6}{12}\\)?",
    opts: [
      "\\(\\dfrac{1}{3}\\) and \\(\\dfrac{6}{18}\\)",
      "\\(\\dfrac{2}{3}\\) and \\(\\dfrac{4}{6}\\)",
      "\\(\\dfrac{1}{2}\\) and \\(\\dfrac{3}{4}\\)",
      "\\(\\dfrac{1}{2}\\) and \\(\\dfrac{5}{10}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find an option containing two fractions that are both equivalent to 6/12. Our strategy is to first simplify 6/12 to its simplest form to establish a baseline.",
        workingOut: "\\(\\text{Given fraction: } \\dfrac{6}{12}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 6/12 by dividing the numerator and denominator by their greatest common divisor, which is 6. This yields the simplest equivalent fraction, 1/2.",
        workingOut: "\\(\\dfrac{6 \\div 6}{12 \\div 6} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "Now we test the fractions in our options to see if they simplify to 1/2. In Option D, the first fraction is already 1/2. The second fraction is 5/10, which simplifies to 1/2 by dividing both parts by 5.",
        workingOut: "\\(\\text{Simplify: } \\dfrac{5 \\div 5}{10 \\div 5} = \\dfrac{1}{2}\\)",
        graphData: null
      },
      {
        explanation: "Since both 1/2 and 5/10 simplify to 1/2, they are both equivalent to 6/12. The other options simplify to different values (e.g., 1/3 or 2/3). Thus, Option D (index 3) is correct.",
        workingOut: "\\(\\dfrac{1}{2} = \\dfrac{5}{10} = \\dfrac{6}{12} \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // Q5
  {
    originalQuestion: "Find the value of $n$ that makes the statement true: $\\frac{n}{50} = \\frac{12}{20}$",
    topic: "Equivalent fractions",
    question: "Find the value of \\(n\\) that makes the statement true: \\(\\dfrac{n}{50} = \\dfrac{12}{20}\\)",
    opts: [
      "\\(25\\)",
      "\\(30\\)",
      "\\(15\\)",
      "\\(40\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We need to solve for the unknown variable n in the proportion. Our strategy is to first simplify the known fraction on the right side to make the numbers easier to work with.",
        workingOut: "\\(\\text{Equation: } \\dfrac{n}{50} = \\dfrac{12}{20}\\)",
        graphData: null
      },
      {
        explanation: "We simplify 12/20 by dividing both the numerator and the denominator by their greatest common divisor, which is 4. This reduces the fraction to 3/5.",
        workingOut: "\\(\\dfrac{12 \\div 4}{20 \\div 4} = \\dfrac{3}{5}\\)",
        graphData: null
      },
      {
        explanation: "Now we equate our original variable expression to this simplified fraction. To solve for n, we multiply both sides of the equation by 50 to isolate the variable.",
        workingOut: "\\(\\dfrac{n}{50} = \\dfrac{3}{5} \\;\\Rightarrow\\; n = \\dfrac{3}{5} \\times 50\\)",
        graphData: null
      },
      {
        explanation: "We compute the multiplication. Dividing 50 by 5 gives 10, and multiplying 10 by 3 gives 30. We check our answer: 30/50 indeed reduces to 3/5, which is equal to 12/20. The solution matches Option B (index 1).",
        workingOut: "n = 3 \\times 10 = 30 \\;\\Rightarrow\\; \\text{Correct Option: Index 1}",
        graphData: null
      }
    ]
  },
  // Q6
  {
    originalQuestion: "Reduce the fraction to its simplest form: $\\frac{6}{18}$",
    topic: "Simplifying fractions",
    question: "Reduce the fraction to its simplest form: \\(\\dfrac{6}{18}\\)",
    opts: [
      "\\(\\dfrac{2}{6}\\)",
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{1}{3}\\)",
      "\\(\\dfrac{3}{9}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We are asked to write the fraction 6/18 in its simplest form. Our strategy is to find the greatest common divisor (GCD) of the numerator 6 and the denominator 18, and then divide both parts by this number.",
        workingOut: "\\(\\text{Given: } \\dfrac{6}{18}\\)",
        graphData: null
      },
      {
        explanation: "We list the factors of 6: 1, 2, 3, 6. We notice that 18 is also divisible by 6 (6 x 3 = 18). Therefore, the greatest common divisor of 6 and 18 is 6.",
        workingOut: "\\(\\text{GCD}(6, 18) = 6\\)",
        graphData: null
      },
      {
        explanation: "We divide both the numerator and the denominator by their GCD of 6. A common error is dividing by a smaller factor like 2 or 3 and stopping, which leaves the fraction unsimplified (e.g., 3/9 or 2/6). Dividing by 6 directly gives the simplest form.",
        workingOut: "\\(\\dfrac{6 \\div 6}{18 \\div 6} = \\dfrac{1}{3}\\)",
        graphData: null
      },
      {
        explanation: "The simplified fraction is 1/3. We verify that 1 and 3 share no common factors other than 1, confirming it is in simplest form. This corresponds to Option C (index 2).",
        workingOut: "\\(\\dfrac{1}{3} \\text{ is in simplest form} \\;\\Rightarrow\\; \\text{Correct Option: Index 2}\\)",
        graphData: null
      }
    ]
  },
  // Q7
  {
    originalQuestion: "Convert the improper fraction $\\frac{11}{4}$ to a mixed numeral.",
    topic: "Improper fractions to mixed numerals",
    question: "Convert the improper fraction \\(\\dfrac{11}{4}\\) to a mixed numeral.",
    opts: [
      "\\(2\\dfrac{3}{4}\\)",
      "\\(2\\dfrac{1}{4}\\)",
      "\\(3\\dfrac{1}{4}\\)",
      "\\(2\\dfrac{1}{2}\\)"
    ],
    a: 0,
    solutionSteps: [
      {
        explanation: "We need to convert the improper fraction 11/4 into a mixed numeral. Our strategy is to perform integer division by dividing the numerator 11 by the denominator 4 to find the quotient and remainder.",
        workingOut: "\\(\\text{Perform: } 11 \\div 4\\)",
        graphData: null
      },
      {
        explanation: "Dividing 11 by 4, we find that 4 goes into 11 exactly 2 times (4 x 2 = 8), with a remainder of 3. The quotient (2) represents the whole number part of the mixed numeral.",
        workingOut: "\\(11 = 4 \\times 2 + 3 \\;\\Rightarrow\\; \\text{Quotient} = 2,\\; \\text{Remainder} = 3\\)",
        graphData: null
      },
      {
        explanation: "We write the mixed numeral by putting the remainder 3 over the original denominator 4, and combining it with the whole number 2. This gives us 2 and 3/4. A common mistake is using the remainder as the whole number, which we avoid here.",
        workingOut: "\\(\\text{Mixed Numeral} = 2\\dfrac{3}{4}\\)",
        graphData: null
      },
      {
        explanation: "We check our conversion: 2 and 3/4 equals (2 x 4 + 3)/4 = 11/4, which matches the original fraction. This corresponds to Option A (index 0).",
        workingOut: "\\(2\\tfrac{3}{4} = \\dfrac{11}{4} \\;\\checkmark \\;\\Rightarrow\\; \\text{Correct Option: Index 0}\\)",
        graphData: null
      }
    ]
  },
  // Q8
  {
    originalQuestion: "Find the next four terms in the sequence: $\\frac{3}{5}, 1\\frac{1}{5}, 1\\frac{4}{5}, 2\\frac{2}{5}, \\dots$",
    topic: "Fraction sequences",
    question: "Find the next four terms in the sequence: \\(\\dfrac{3}{5},\\; 1\\dfrac{1}{5},\\; 1\\dfrac{4}{5},\\; 2\\dfrac{2}{5},\\; \\dots\\)",
    opts: [
      "\\(2\\dfrac{4}{5},\\; 3,\\; 3\\dfrac{1}{5},\\; 3\\dfrac{2}{5}\\)",
      "\\(3,\\; 3.2,\\; 3.4,\\; 3.6\\)",
      "\\(3,\\; 3\\dfrac{2}{5},\\; 3\\dfrac{4}{5},\\; 4\\dfrac{1}{5}\\)",
      "\\(3,\\; 3\\dfrac{3}{5},\\; 4\\dfrac{1}{5},\\; 4\\dfrac{4}{5}\\)"
    ],
    a: 3,
    solutionSteps: [
      {
        explanation: "We need to find the next four terms of the given sequence. Our strategy is to determine the common difference between consecutive terms by subtracting the first term from the second.",
        workingOut: "\\(\\text{Sequence: } \\dfrac{3}{5},\\; 1\\dfrac{1}{5} = \\dfrac{6}{5},\\; 1\\dfrac{4}{5} = \\dfrac{9}{5},\\; 2\\dfrac{2}{5} = \\dfrac{12}{5}\\)",
        graphData: null
      },
      {
        explanation: "Subtracting the first term (3/5) from the second term (6/5) gives a common difference of 3/5. We verify this by checking that each subsequent term increases by exactly 3/5.",
        workingOut: "\\(\\text{Difference} = \\dfrac{6}{5} - \\dfrac{3}{5} = \\dfrac{3}{5}\\)",
        graphData: null
      },
      {
        explanation: "To find the next term (5th term), we add 3/5 to the 4th term (12/5). This yields 15/5, which simplifies to the whole number 3. We then add 3/5 to 3 to get the 6th term, which is 3 and 3/5.",
        workingOut: "\\(\\text{5th Term} = \\dfrac{12}{5} + \\dfrac{3}{5} = \\dfrac{15}{5} = 3\\); \\;\\text{6th Term} = 3 + \\dfrac{3}{5} = 3\\dfrac{3}{5}\\)",
        graphData: null
      },
      {
        explanation: "To find the 7th and 8th terms, we continue adding 3/5. Adding 3/5 to 3 and 3/5 gives 3 and 6/5, which we rewrite as the mixed number 4 and 1/5. Adding 3/5 to this gives 4 and 4/5.",
        workingOut: "\\(\\text{7th Term} = 3\\dfrac{3}{5} + \\dfrac{3}{5} = 3\\dfrac{6}{5} = 4\\dfrac{1}{5}\\); \\;\\text{8th Term} = 4\\dfrac{1}{5} + \\dfrac{3}{5} = 4\\dfrac{4}{5}\\)",
        graphData: null
      },
      {
        explanation: "The next four terms are 3, 3 and 3/5, 4 and 1/5, and 4 and 4/5. We locate the option containing these exact values, which is Option D (index 3).",
        workingOut: "\\(\\text{Terms: } 3,\\; 3\\dfrac{3}{5},\\; 4\\dfrac{1}{5},\\; 4\\dfrac{4}{5} \\;\\Rightarrow\\; \\text{Correct Option: Index 3}\\)",
        graphData: null
      }
    ]
  },
  // Q9
  {
    originalQuestion: "Find the next four terms in the sequence: $\\frac{4}{7}, 1\\frac{1}{7}, 1\\frac{5}{7}, 2\\frac{2}{7}, \\dots$",
    topic: "Fraction sequences",
    question: "Find the next four terms in the sequence: \\(\\dfrac{4}{7},\\; 1\\dfrac{1}{7},\\; 1\\dfrac{5}{7},\\; 2\\dfrac{2}{7},\\; \\dots\\)",
    opts: [
      "\\(2\\dfrac{6}{7},\\; 3\\dfrac{2}{7},\\; 3\\dfrac{6}{7},\\; 4\\dfrac{3}{7}\\)",
      "\\(2\\dfrac{6}{7},\\; 3\\dfrac{3}{7},\\; 4,\\; 4\\dfrac{4}{7}\\)",
      "\\(2\\dfrac{6}{7},\\; 3,\\; 3\\dfrac{1}{7},\\; 3\\dfrac{2}{7}\\)",
      "\\(2\\dfrac{6}{7},\\; 3.5,\\; 4.2,\\; 4.9\\)"
    ],
    a: 1,
    solutionSteps: [
      {
        explanation: "We are asked to find the next four terms in the fraction sequence. Our strategy is to determine the common difference by expressing all terms with a common denominator and subtracting consecutive terms.",
        workingOut: "\\(\\text{Sequence: } \\dfrac{4}{7},\\; 1\\dfrac{1}{7} = \\dfrac{8}{7},\\; 1\\dfrac{5}{7} = \\dfrac{12}{7},\\; 2\\dfrac{2}{7} = \\dfrac{16}{7}\\)",
        graphData: null
      },
      {
        explanation: "By subtracting the first term (4/7) from the second term (8/7), we find a common difference of 4/7. We confirm that adding 4/7 to each term correctly produces the next term in the sequence.",
        workingOut: "\\(\\text{Difference} = \\dfrac{8}{7} - \\dfrac{4}{7} = \\dfrac{4}{7}\\)",
        graphData: null
      },
      {
        explanation: "To find the next two terms (5th and 6th), we add 4/7 to the 4th term (16/7), giving 20/7, which we convert to the mixed number 2 and 6/7. Adding 4/7 to 20/7 gives 24/7, which is 3 and 3/7.",
        workingOut: "\\(\\text{5th Term} = \\dfrac{16}{7} + \\dfrac{4}{7} = \\dfrac{20}{7} = 2\\dfrac{6}{7}\\); \\;\\text{6th Term} = \\dfrac{20}{7} + \\dfrac{4}{7} = \\dfrac{24}{7} = 3\\dfrac{3}{7}\\)",
        graphData: null
      },
      {
        explanation: "To find the 7th and 8th terms, we add 4/7 to 24/7, which gives 28/7 (simplifying to the integer 4). Adding 4/7 to 4 yields the mixed number 4 and 4/7.",
        workingOut: "\\(\\text{7th Term} = \\dfrac{24}{7} + \\dfrac{4}{7} = \\dfrac{28}{7} = 4\\); \\;\\text{8th Term} = 4 + \\dfrac{4}{7} = 4\\dfrac{4}{7}\\)",
        graphData: null
      },
      {
        explanation: "The next four terms of the sequence are 2 and 6/7, 3 and 3/7, 4, and 4 and 4/7. This list of terms matches Option B (index 1).",
        workingOut: "\\(\\text{Terms: } 2\\dfrac{6}{7},\\; 3\\dfrac{3}{7},\\; 4,\\; 4\\dfrac{4}{7} \\;\\Rightarrow\\; \\text{Correct Option: Index 1}\\)",
        graphData: null
      }
    ]
  },
  // Q10
  {
    originalQuestion: "Which fraction is closer to $1$ than $\\frac{9}{10}$?",
    topic: "Comparison of fractions",
    question: "Which fraction is closer to \\(1\\) than \\(\\dfrac{9}{10}\\)?",
    opts: [
      "\\(\\dfrac{7}{8}\\)",
      "\\(\\dfrac{4}{5}\\)",
      "\\(\\dfrac{11}{12}\\)",
      "\\(\\dfrac{5}{6}\\)"
    ],
    a: 2,
    solutionSteps: [
      {
        explanation: "We need to find which fraction is closer to 1 than 9/10. Our strategy is to compute the absolute difference (distance) between each fraction and 1, then compare these distances.",
        workingOut: "\\(\\text{Base distance for } \\dfrac{9}{10} = 1 - \\dfrac{9}{10} = 0.10\\)",
        graphData: null
      },
      {
        explanation: "We calculate the distance to 1 for the first two options. For 7/8, the distance is 1 - 7/8 = 1/8 (which is 0.125). For 4/5, the distance is 1 - 4/5 = 1/5 (which is 0.20). Both are larger than 0.10, meaning they are farther from 1.",
        workingOut: "\\(\\text{Distance for } \\dfrac{7}{8} = 0.125\\); \\;\\text{Distance for } \\dfrac{4}{5} = 0.20\\)",
        graphData: null
      },
      {
        explanation: "Next, we calculate the distance to 1 for the remaining options. For 11/12, the distance is 1 - 11/12 = 1/12 (which is approximately 0.0833). For 5/6, the distance is 1 - 5/6 = 1/6 (which is approximately 0.1667).",
        workingOut: "\\(\\text{Distance for } \\dfrac{11}{12} \\approx 0.0833\\); \\;\\text{Distance for } \\dfrac{5}{6} \\approx 0.1667\\)",
        graphData: null
      },
      {
        explanation: "Comparing all distances, we see that 0.0833 is strictly less than 0.10, which means 11/12 is closer to 1 than 9/10. The other fractions are farther away. This confirms that the correct option is Option C (index 2).",
        workingOut: "\\(0.0833 < 0.10 \\;\\Rightarrow\\; \\dfrac{11}{12} \\text{ is closer to 1} \\;\\Rightarrow\\; \\text{Correct Option: Index 2}\\)",
        graphData: null
      }
    ]
  }
];

(async () => {
  try {
    console.log('[Y7 Ch4 Correct] Fetching questions in y7-4 from Firestore...');
    const snap = await db.collection('questions').where('chapterId', '==', 'y7-4').get();
    const existingDocs = snap.docs.map(d => ({ docId: d.id, data: d.data() }));
    console.log(`Found ${existingDocs.length} questions in chapter y7-4.`);

    let matchCount = 0;

    for (const target of targets) {
      const matched = existingDocs.find(item => {
        const dbQ = item.data.question ? item.data.question.trim() : '';
        const targetQ = target.originalQuestion.trim();
        return dbQ === targetQ;
      });

      if (matched) {
        const ref = db.collection('questions').doc(matched.docId);
        
        const updatedDoc = {
          ...matched.data,
          type: "multiple_choice",
          question: target.question,
          opts: target.opts,
          a: target.a,
          solutionSteps: target.solutionSteps,
          topic: target.topic,
          isNew: true,
          solution: null,
          answer: null
        };
        
        await ref.set(updatedDoc);
        console.log(`  [UPDATED] Match found: "${target.originalQuestion.substring(0, 50)}..." -> Doc ID: ${matched.docId}`);
        matchCount++;
      } else {
        console.log(`  [NOT FOUND] No matching document for: "${target.originalQuestion.substring(0, 50)}..."`);
      }
    }

    console.log(`\nSuccessfully matched and updated ${matchCount} of 10 target questions in Chapter 4.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during update:', err);
    process.exit(1);
  }
})();
//
