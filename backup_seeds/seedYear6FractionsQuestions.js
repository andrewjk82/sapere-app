export const FRACTION_QUESTIONS_Y6 = [
  // ==========================================
  // SUBTOPIC 1: Basic Fractions and Equivalent Fractions (FRAC1)
  // ==========================================
  {
    "id": "y6-frac-q1",
    "c": "FRAC1",
    "t": "Basic Fractions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A rectangle is divided into $8$ equal parts and $3$ parts are shaded. What fraction of the rectangle is shaded?",
    "a": "$\\frac{3}{8}$",
    "opts": ["$\\frac{3}{8}$", "$\\frac{5}{8}$", "$\\frac{1}{3}$", "$\\frac{3}{5}$"],
    "h": "The denominator is the total number of parts, and the numerator is the shaded parts.",
    "s": "There are $8$ equal parts in total, so the denominator is $8$. Since $3$ parts are shaded, the numerator is $3$. The fraction is $\\frac{3}{8}$.",
    "solutionSteps": [
      {
        "explanation": "Identify the total number of parts the shape is divided into.",
        "workingOut": "\\text{Total parts} = 8"
      },
      {
        "explanation": "Identify the number of shaded parts.",
        "workingOut": "\\text{Shaded parts} = 3"
      },
      {
        "explanation": "Write the fraction as Shaded parts / Total parts.",
        "workingOut": "\\frac{3}{8}"
      }
    ]
  },
  {
    "id": "y6-frac-q2",
    "c": "FRAC1",
    "t": "Basic Fractions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "A circle is divided into $6$ equal sectors and $5$ sectors are shaded. What fraction of the circle is shaded?",
    "a": "$\\frac{5}{6}$",
    "opts": ["$\\frac{5}{6}$", "$\\frac{1}{6}$", "$\\frac{6}{5}$", "$\\frac{1}{5}$"],
    "h": "The denominator is the total number of sectors, and the numerator is the shaded sectors.",
    "s": "There are $6$ equal sectors in total, so the denominator is $6$. Since $5$ sectors are shaded, the numerator is $5$. The fraction is $\\frac{5}{6}$.",
    "solutionSteps": [
      {
        "explanation": "Identify the total number of equal sectors.",
        "workingOut": "\\text{Total sectors} = 6"
      },
      {
        "explanation": "Identify the number of shaded sectors.",
        "workingOut": "\\text{Shaded sectors} = 5"
      },
      {
        "explanation": "Write the fraction as Shaded sectors / Total sectors.",
        "workingOut": "\\frac{5}{6}"
      }
    ]
  },
  {
    "id": "y6-frac-q3",
    "c": "FRAC1",
    "t": "Equivalent Fractions",
    "type": "short_answer",
    "difficulty": "easy",
    "q": "Find the missing number to make the fractions equivalent: $\\frac{1}{3} = \\frac{?}{15}$",
    "a": "5",
    "opts": [],
    "h": "What do you multiply $3$ by to get $15$? Multiply the numerator by the same amount.",
    "s": "To get from $3$ to $15$, multiply by $5$. Therefore, multiply the numerator by $5$: $1 \\times 5 = 5$. The missing number is $5$.",
    "solutionSteps": [
      {
        "explanation": "Determine the multiplier for the denominators.",
        "workingOut": "15 \\div 3 = 5"
      },
      {
        "explanation": "Multiply the numerator by the same multiplier.",
        "workingOut": "1 \\times 5 = 5"
      }
    ]
  },
  {
    "id": "y6-frac-q4",
    "c": "FRAC1",
    "t": "Equivalent Fractions",
    "type": "short_answer",
    "difficulty": "medium",
    "q": "Find the missing number to make the fractions equivalent: $\\frac{2}{5} = \\frac{6}{?}$",
    "a": "15",
    "opts": [],
    "h": "What do you multiply $2$ by to get $6$? Multiply the denominator by the same amount.",
    "s": "To get from $2$ to $6$, multiply by $3$. Therefore, multiply the denominator by $3$: $5 \\times 3 = 15$. The missing number is $15$.",
    "solutionSteps": [
      {
        "explanation": "Determine the multiplier for the numerators.",
        "workingOut": "6 \\div 2 = 3"
      },
      {
        "explanation": "Multiply the denominator by the same multiplier.",
        "workingOut": "5 \\times 3 = 15"
      }
    ]
  },
  {
    "id": "y6-frac-q5",
    "c": "FRAC1",
    "t": "Simplifying Fractions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Write the fraction $\\frac{18}{24}$ in its simplest form.",
    "a": "$\\frac{3}{4}$",
    "opts": ["$\\frac{3}{4}$", "$\\frac{9}{12}$", "$\\frac{6}{8}$", "$\\frac{2}{3}$"],
    "h": "Find the highest common factor (HCF) of $18$ and $24$ and divide both numbers by it.",
    "s": "The highest common factor of $18$ and $24$ is $6$. Dividing both the numerator and denominator by $6$ gives $\\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}$.",
    "solutionSteps": [
      {
        "explanation": "Find the Highest Common Factor (HCF) of the numerator and denominator.",
        "workingOut": "\\text{Factors of } 18: 1, 2, 3, 6, 9, 18 \\\\ \\text{Factors of } 24: 1, 2, 3, 4, 6, 8, 12, 24 \\\\ \\text{HCF} = 6"
      },
      {
        "explanation": "Divide both the top and bottom by the HCF.",
        "workingOut": "\\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}"
      }
    ]
  },

  // ==========================================
  // SUBTOPIC 2: Mixed Numerals and Improper Fractions (FRAC2)
  // ==========================================
  {
    "id": "y6-frac-q6",
    "c": "FRAC2",
    "t": "Mixed to Improper",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Change the mixed fraction $2\\frac{3}{4}$ to an improper fraction.",
    "a": "$\\frac{11}{4}$",
    "opts": ["$\\frac{11}{4}$", "$\\frac{9}{4}$", "$\\frac{10}{4}$", "$\\frac{5}{4}$"],
    "h": "Multiply the whole number by the denominator, then add the numerator.",
    "s": "Multiply $2 \\times 4 = 8$. Then add $3$ to get $11$. Keep the denominator the same. The answer is $\\frac{11}{4}$.",
    "solutionSteps": [
      {
        "explanation": "Multiply the whole number by the denominator.",
        "workingOut": "2 \\times 4 = 8"
      },
      {
        "explanation": "Add the numerator to this product.",
        "workingOut": "8 + 3 = 11"
      },
      {
        "explanation": "Write this result over the original denominator.",
        "workingOut": "\\frac{11}{4}"
      }
    ]
  },
  {
    "id": "y6-frac-q7",
    "c": "FRAC2",
    "t": "Improper to Mixed",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Change the improper fraction $\\frac{17}{5}$ to a mixed fraction.",
    "a": "$3\\frac{2}{5}$",
    "opts": ["$3\\frac{2}{5}$", "$3\\frac{3}{5}$", "$2\\frac{7}{5}$", "$4\\frac{2}{5}$"],
    "h": "Divide the numerator by the denominator to find the whole number and the remainder.",
    "s": "$17$ divided by $5$ is $3$ with a remainder of $2$. So, it is $3$ wholes and $\\frac{2}{5}$ left over.",
    "solutionSteps": [
      {
        "explanation": "Divide the numerator by the denominator to find the whole number.",
        "workingOut": "17 \\div 5 = 3 \\text{ remainder } 2"
      },
      {
        "explanation": "The quotient becomes the whole number, and the remainder becomes the new numerator.",
        "workingOut": "3\\frac{2}{5}"
      }
    ]
  },
  {
    "id": "y6-frac-q8",
    "c": "FRAC2",
    "t": "Comparing Fractions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Place the following fractions in order from least to greatest: $\\frac{3}{4}$, $\\frac{5}{8}$, $\\frac{1}{2}$",
    "a": "$\\frac{1}{2}, \\frac{5}{8}, \\frac{3}{4}$",
    "opts": ["$\\frac{1}{2}, \\frac{5}{8}, \\frac{3}{4}$", "$\\frac{5}{8}, \\frac{1}{2}, \\frac{3}{4}$", "$\\frac{3}{4}, \\frac{5}{8}, \\frac{1}{2}$", "$\\frac{1}{2}, \\frac{3}{4}, \\frac{5}{8}$"],
    "h": "Convert all fractions to a common denominator (e.g., $8$) to compare them easily.",
    "s": "Convert to denominator $8$: $\\frac{3}{4} = \\frac{6}{8}$, $\\frac{5}{8} = \\frac{5}{8}$, $\\frac{1}{2} = \\frac{4}{8}$. Now order the numerators: $4, 5, 6$. So, the order is $\\frac{1}{2}$, $\\frac{5}{8}$, $\\frac{3}{4}$.",
    "solutionSteps": [
      {
        "explanation": "Find a common denominator for $4, 8$, and $2$. The lowest common multiple is $8$.",
        "workingOut": "\\text{Common denominator} = 8"
      },
      {
        "explanation": "Convert each fraction to have a denominator of $8$.",
        "workingOut": "\\begin{aligned} \\frac{3}{4} &= \\frac{6}{8} \\\\ \\frac{5}{8} &= \\frac{5}{8} \\\\ \\frac{1}{2} &= \\frac{4}{8} \\end{aligned}"
      },
      {
        "explanation": "Compare the numerators to order them from least to greatest.",
        "workingOut": "\\frac{4}{8} < \\frac{5}{8} < \\frac{6}{8} \\implies \\frac{1}{2}, \\frac{5}{8}, \\frac{3}{4}"
      }
    ]
  },

  // ==========================================
  // SUBTOPIC 3: Fraction Operations (FRAC3)
  // ==========================================
  {
    "id": "y6-frac-q9",
    "c": "FRAC3",
    "t": "Adding Fractions",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "Find the sum: $\\frac{2}{9} + \\frac{5}{9}$",
    "a": "$\\frac{7}{9}$",
    "opts": ["$\\frac{7}{9}$", "$\\frac{7}{18}$", "$\\frac{10}{81}$", "$\\frac{3}{9}$"],
    "h": "When adding fractions with the same denominator, just add the numerators.",
    "s": "Since the denominators are the same, add the numerators: $2 + 5 = 7$. The denominator stays $9$. The sum is $\\frac{7}{9}$.",
    "solutionSteps": [
      {
        "explanation": "Check if the denominators are the same.",
        "workingOut": "\\text{Denominators are both } 9"
      },
      {
        "explanation": "Add the numerators and keep the denominator.",
        "workingOut": "\\frac{2 + 5}{9} = \\frac{7}{9}"
      }
    ]
  },
  {
    "id": "y6-frac-q10",
    "c": "FRAC3",
    "t": "Adding Mixed Fractions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Find the sum: $2\\frac{1}{3} + 1\\frac{1}{4}$",
    "a": "$3\\frac{7}{12}$",
    "opts": ["$3\\frac{7}{12}$", "$3\\frac{2}{7}$", "$4\\frac{1}{12}$", "$3\\frac{5}{12}$"],
    "h": "Add the whole numbers together, then add the fractions by finding a common denominator.",
    "s": "First, add the whole numbers: $2 + 1 = 3$. Next, add the fractions: $\\frac{1}{3} + \\frac{1}{4}$. The common denominator is $12$. $\\frac{1}{3} = \\frac{4}{12}$ and $\\frac{1}{4} = \\frac{3}{12}$. Add them: $\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$. Combine with the whole number: $3\\frac{7}{12}$.",
    "solutionSteps": [
      {
        "explanation": "Add the whole number parts.",
        "workingOut": "2 + 1 = 3"
      },
      {
        "explanation": "Find a common denominator for the fractional parts ($3$ and $4$).",
        "workingOut": "\\text{LCM of 3 and 4 is 12}"
      },
      {
        "explanation": "Convert the fractions to equivalent fractions with denominator 12.",
        "workingOut": "\\begin{aligned} \\frac{1}{3} &= \\frac{4}{12} \\\\ \\frac{1}{4} &= \\frac{3}{12} \\end{aligned}"
      },
      {
        "explanation": "Add the fractions and combine with the whole number.",
        "workingOut": "3 + \\left( \\frac{4}{12} + \\frac{3}{12} \\right) = 3\\frac{7}{12}"
      }
    ]
  },
  {
    "id": "y6-frac-q11",
    "c": "FRAC3",
    "t": "Subtracting Fractions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find the difference: $\\frac{7}{8} - \\frac{1}{4}$",
    "a": "$\\frac{5}{8}$",
    "opts": ["$\\frac{5}{8}$", "$\\frac{6}{4}$", "$\\frac{3}{8}$", "$\\frac{1}{2}$"],
    "h": "Find a common denominator before subtracting.",
    "s": "The lowest common denominator for $8$ and $4$ is $8$. Convert $\\frac{1}{4}$ to $\\frac{2}{8}$. Now subtract: $\\frac{7}{8} - \\frac{2}{8} = \\frac{5}{8}$.",
    "solutionSteps": [
      {
        "explanation": "Find a common denominator for $8$ and $4$.",
        "workingOut": "\\text{Common denominator is 8}"
      },
      {
        "explanation": "Convert $\\frac{1}{4}$ to an equivalent fraction with a denominator of $8$.",
        "workingOut": "\\frac{1}{4} = \\frac{2}{8}"
      },
      {
        "explanation": "Subtract the numerators.",
        "workingOut": "\\frac{7}{8} - \\frac{2}{8} = \\frac{5}{8}"
      }
    ]
  },
  {
    "id": "y6-frac-q12",
    "c": "FRAC3",
    "t": "Subtracting Mixed Fractions",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Find the difference: $4\\frac{1}{5} - 1\\frac{1}{2}$",
    "a": "$2\\frac{7}{10}$",
    "opts": ["$2\\frac{7}{10}$", "$3\\frac{3}{10}$", "$2\\frac{3}{10}$", "$3\\frac{7}{10}$"],
    "h": "Convert both mixed numbers to improper fractions, then find a common denominator.",
    "s": "Convert to improper fractions: $4\\frac{1}{5} = \\frac{21}{5}$ and $1\\frac{1}{2} = \\frac{3}{2}$. Common denominator is $10$. $\\frac{21}{5} = \\frac{42}{10}$ and $\\frac{3}{2} = \\frac{15}{10}$. Subtract: $\\frac{42}{10} - \\frac{15}{10} = \\frac{27}{10}$. Convert back to a mixed number: $2\\frac{7}{10}$.",
    "solutionSteps": [
      {
        "explanation": "Convert both mixed numbers to improper fractions.",
        "workingOut": "\\begin{aligned} 4\\frac{1}{5} &= \\frac{21}{5} \\\\ 1\\frac{1}{2} &= \\frac{3}{2} \\end{aligned}"
      },
      {
        "explanation": "Find a common denominator and convert.",
        "workingOut": "\\begin{aligned} \\frac{21}{5} &= \\frac{42}{10} \\\\ \\frac{3}{2} &= \\frac{15}{10} \\end{aligned}"
      },
      {
        "explanation": "Subtract the numerators.",
        "workingOut": "\\frac{42}{10} - \\frac{15}{10} = \\frac{27}{10}"
      },
      {
        "explanation": "Convert the resulting improper fraction back to a mixed number.",
        "workingOut": "\\frac{27}{10} = 2\\frac{7}{10}"
      }
    ]
  },
  {
    "id": "y6-frac-q13",
    "c": "FRAC3",
    "t": "Multiplying Fractions",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Do the multiplication and write the answer in simplest form: $\\frac{4}{5} \\times \\frac{3}{8}$",
    "a": "$\\frac{3}{10}$",
    "opts": ["$\\frac{3}{10}$", "$\\frac{12}{40}$", "$\\frac{7}{13}$", "$\\frac{3}{5}$"],
    "h": "Multiply the numerators together and the denominators together, then simplify.",
    "s": "Multiply numerators: $4 \\times 3 = 12$. Multiply denominators: $5 \\times 8 = 40$. The fraction is $\\frac{12}{40}$. Simplify by dividing top and bottom by $4$ to get $\\frac{3}{10}$.",
    "solutionSteps": [
      {
        "explanation": "Multiply the numerators together.",
        "workingOut": "4 \\times 3 = 12"
      },
      {
        "explanation": "Multiply the denominators together.",
        "workingOut": "5 \\times 8 = 40"
      },
      {
        "explanation": "Simplify the resulting fraction by dividing by the highest common factor.",
        "workingOut": "\\frac{12 \\div 4}{40 \\div 4} = \\frac{3}{10}"
      }
    ]
  },
  {
    "id": "y6-frac-q14",
    "c": "FRAC3",
    "t": "Multiplying by a Whole Number",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Find: $\\frac{2}{3} \\text{ of } 24$",
    "a": "16",
    "opts": ["16", "18", "8", "12"],
    "h": "Divide the whole number by the denominator, then multiply by the numerator.",
    "s": "First, find $\\frac{1}{3}$ of $24$ by dividing $24$ by $3$, which is $8$. Then multiply by $2$ to find $\\frac{2}{3}$: $8 \\times 2 = 16$.",
    "solutionSteps": [
      {
        "explanation": "Divide the whole number by the denominator to find one fractional part.",
        "workingOut": "24 \\div 3 = 8"
      },
      {
        "explanation": "Multiply the result by the numerator.",
        "workingOut": "8 \\times 2 = 16"
      }
    ]
  },

  // ==========================================
  // SUBTOPIC 4: Word Problems (FRAC4)
  // ==========================================
  {
    "id": "y6-frac-q15",
    "c": "FRAC4",
    "t": "Fraction Word Problems",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Lily has $\\$30$ and spends $\\frac{1}{3}$ of it on a movie and $\\frac{2}{5}$ of it on a t-shirt. How much money does she have left?",
    "a": "$\\$8$",
    "opts": ["$\\$8$", "$\\$10$", "$\\$12$", "$\\$18$"],
    "h": "Calculate how much she spent on the movie and t-shirt, then subtract the total spent from $\\$30$.",
    "s": "Movie: $\\frac{1}{3}$ of $\\$30 = \\$10$. T-shirt: $\\frac{2}{5}$ of $\\$30 = \\$30 \\div 5 \\times 2 = \\$12$. Total spent = $\\$10 + \\$12 = \\$22$. Money left = $\\$30 - \\$22 = \\$8$.",
    "solutionSteps": [
      {
        "explanation": "Calculate the amount spent on the movie.",
        "workingOut": "\\frac{1}{3} \\times 30 = \\$10"
      },
      {
        "explanation": "Calculate the amount spent on the t-shirt.",
        "workingOut": "\\frac{2}{5} \\times 30 = \\frac{60}{5} = \\$12"
      },
      {
        "explanation": "Add the expenses to find the total amount spent.",
        "workingOut": "10 + 12 = \\$22"
      },
      {
        "explanation": "Subtract the total spent from the original amount to find the money left.",
        "workingOut": "30 - 22 = \\$8"
      }
    ]
  },
  {
    "id": "y6-frac-q16",
    "c": "FRAC4",
    "t": "Fraction Word Problems",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "Mark spends $\\frac{2}{7}$ of his pocket money on food and $\\frac{1}{4}$ of it on a present for his brother. What fraction of his pocket money remains?",
    "a": "$\\frac{13}{28}$",
    "opts": ["$\\frac{13}{28}$", "$\\frac{15}{28}$", "$\\frac{3}{11}$", "$\\frac{11}{28}$"],
    "h": "Add the two fractions together to find the total fraction spent, then subtract from $1$ whole.",
    "s": "Add $\\frac{2}{7}$ and $\\frac{1}{4}$. Common denominator is $28$. $\\frac{2}{7} = \\frac{8}{28}$ and $\\frac{1}{4} = \\frac{7}{28}$. Total spent = $\\frac{8}{28} + \\frac{7}{28} = \\frac{15}{28}$. Fraction remaining = $1 - \\frac{15}{28} = \\frac{28}{28} - \\frac{15}{28} = \\frac{13}{28}$.",
    "solutionSteps": [
      {
        "explanation": "Find the total fraction spent by adding the two fractions. Convert them to a common denominator ($28$).",
        "workingOut": "\\begin{aligned} \\frac{2}{7} &= \\frac{8}{28} \\\\ \\frac{1}{4} &= \\frac{7}{28} \\end{aligned}"
      },
      {
        "explanation": "Add the converted fractions.",
        "workingOut": "\\frac{8}{28} + \\frac{7}{28} = \\frac{15}{28}"
      },
      {
        "explanation": "Subtract the total spent from the whole ($1$ or $\\frac{28}{28}$) to find the remaining fraction.",
        "workingOut": "\\frac{28}{28} - \\frac{15}{28} = \\frac{13}{28}"
      }
    ]
  },
  {
    "id": "y6-frac-q17",
    "c": "FRAC4",
    "t": "Fraction Word Problems",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "It takes $\\frac{2}{5}$ of a bottle of juice to fill a large glass. How many glasses can be filled from $10$ bottles?",
    "a": "25",
    "opts": ["25", "4", "20", "50"],
    "h": "Divide the total number of bottles ($10$) by the fraction it takes to fill one glass.",
    "s": "We need to find $10 \\div \\frac{2}{5}$. This is the same as $10 \\times \\frac{5}{2}$. Multiply: $\\frac{50}{2} = 25$. So, $25$ glasses can be filled.",
    "solutionSteps": [
      {
        "explanation": "Set up a division problem: Total bottles divided by the amount needed for one glass.",
        "workingOut": "10 \\div \\frac{2}{5}"
      },
      {
        "explanation": "To divide by a fraction, multiply by its reciprocal.",
        "workingOut": "10 \\times \\frac{5}{2}"
      },
      {
        "explanation": "Multiply and simplify.",
        "workingOut": "\\frac{50}{2} = 25"
      }
    ]
  },
  {
    "id": "y6-frac-q18",
    "c": "FRAC4",
    "t": "Fraction Word Problems",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "If $7$ pies are shared equally among $10$ people, what fraction of a pie does each person receive?",
    "a": "$\\frac{7}{10}$",
    "opts": ["$\\frac{7}{10}$", "$\\frac{10}{7}$", "$1\\frac{3}{7}$", "$\\frac{3}{10}$"],
    "h": "Divide the number of items being shared by the number of people sharing them.",
    "s": "You divide the $7$ pies by $10$ people. This can be written directly as the fraction $\\frac{7}{10}$. Each person gets $\\frac{7}{10}$ of a pie.",
    "solutionSteps": [
      {
        "explanation": "Identify the total amount to be shared and the number of groups.",
        "workingOut": "\\text{Total pies} = 7, \\text{ People} = 10"
      },
      {
        "explanation": "Divide the total pies by the number of people.",
        "workingOut": "7 \\div 10 = \\frac{7}{10}"
      }
    ]
  },
  {
    "id": "y6-frac-q19",
    "c": "FRAC4",
    "t": "Fraction Word Problems",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Sam takes $\\frac{2}{3}$ of an hour to write one page of an essay. How long will it take him to write $5$ pages?",
    "a": "$3\\frac{1}{3} \\text{ hours}$",
    "opts": ["$3\\frac{1}{3} \\text{ hours}$", "$3\\frac{2}{3} \\text{ hours}$", "$2\\frac{1}{3} \\text{ hours}$", "$1\\frac{2}{3} \\text{ hours}$"],
    "h": "Multiply the time taken for one page by the total number of pages.",
    "s": "Multiply $\\frac{2}{3} \\times 5$. This gives $\\frac{10}{3}$. Convert the improper fraction back to a mixed numeral: $10 \\div 3 = 3$ remainder $1$. So, it takes $3\\frac{1}{3}$ hours.",
    "solutionSteps": [
      {
        "explanation": "Set up a multiplication problem: time per page multiplied by number of pages.",
        "workingOut": "\\frac{2}{3} \\times 5"
      },
      {
        "explanation": "Multiply the whole number by the numerator.",
        "workingOut": "\\frac{2 \\times 5}{3} = \\frac{10}{3}"
      },
      {
        "explanation": "Convert the improper fraction to a mixed number.",
        "workingOut": "10 \\div 3 = 3 \\text{ remainder } 1 \\implies 3\\frac{1}{3}"
      }
    ]
  },
  {
    "id": "y6-frac-q20",
    "c": "FRAC4",
    "t": "Fraction Word Problems",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "Emma saves $\\frac{3}{5}$ of her weekly allowance. Of the remainder, she spends $\\frac{1}{3}$ on snacks. What fraction of her total weekly allowance does she spend on snacks?",
    "a": "$\\frac{2}{15}$",
    "opts": ["$\\frac{2}{15}$", "$\\frac{1}{5}$", "$\\frac{4}{15}$", "$\\frac{1}{3}$"],
    "h": "First, find the fraction that is the 'remainder'. Then multiply that remainder by the fraction she spends on snacks.",
    "s": "If she saves $\\frac{3}{5}$, the remainder is $1 - \\frac{3}{5} = \\frac{2}{5}$. She spends $\\frac{1}{3}$ of this remainder on snacks. Multiply: $\\frac{1}{3} \\times \\frac{2}{5} = \\frac{2}{15}$. She spends $\\frac{2}{15}$ of her total allowance on snacks.",
    "solutionSteps": [
      {
        "explanation": "Calculate the remaining fraction of her allowance after saving.",
        "workingOut": "1 - \\frac{3}{5} = \\frac{2}{5}"
      },
      {
        "explanation": "Calculate what fraction of the total allowance is spent on snacks by multiplying the spent fraction by the remainder.",
        "workingOut": "\\frac{1}{3} \\times \\frac{2}{5}"
      },
      {
        "explanation": "Multiply numerators and denominators.",
        "workingOut": "\\frac{1 \\times 2}{3 \\times 5} = \\frac{2}{15}"
      }
    ]
  },
  {
    "id": "y6-frac-q21",
    "c": "FRAC4",
    "t": "Fraction Word Problems",
    "type": "multiple_choice",
    "difficulty": "hard",
    "q": "David is taxed $\\frac{1}{4}$ of his weekly wages. He saves $\\frac{1}{5}$ of what is left over. If he saves $\\$60$ every week, how much does he earn each week before he is taxed?",
    "a": "$\\$400$",
    "opts": ["$\\$400$", "$\\$300$", "$\\$480$", "$\\$240$"],
    "h": "Work backwards. If $\\frac{1}{5}$ of his 'left over' money is $\\$60$, find the total 'left over' money. Then figure out his original wage.",
    "s": "Let his left over money be $L$. $\\frac{1}{5}$ of $L = \\$60$, so $L = \\$60 \\times 5 = \\$300$. This $\\$300$ is what remains after a $\\frac{1}{4}$ tax. So, $\\$300$ is $\\frac{3}{4}$ of his total wage. Let his total wage be $W$. $\\frac{3}{4}$ of $W = \\$300$. So, $W = \\$300 \\div 3 \\times 4 = \\$100 \\times 4 = \\$400$.",
    "solutionSteps": [
      {
        "explanation": "Find the amount of money left over after tax. The savings ($\\$60$) is $\\frac{1}{5}$ of this left over amount.",
        "workingOut": "\\text{Left over} = \\$60 \\times 5 = \\$300"
      },
      {
        "explanation": "Determine the fraction of the original wage that is left over. He is taxed $\\frac{1}{4}$, so $\\frac{3}{4}$ is left over.",
        "workingOut": "1 - \\frac{1}{4} = \\frac{3}{4}"
      },
      {
        "explanation": "Find the original wage. $\\frac{3}{4}$ of the wage is $\\$300$. Divide by 3 to find $\\frac{1}{4}$, then multiply by 4.",
        "workingOut": "\\begin{aligned} \\frac{1}{4} \\text{ of wage} &= 300 \\div 3 = 100 \\\\ \\text{Total wage} &= 100 \\times 4 = 400 \\end{aligned}"
      }
    ]
  },
  {
    "id": "y6-frac-q22",
    "c": "FRAC4",
    "t": "Fraction Units",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "What fraction is $15$ minutes of $1$ hour?",
    "a": "$\\frac{1}{4}$",
    "opts": ["$\\frac{1}{4}$", "$\\frac{1}{3}$", "$\\frac{15}{100}$", "$\\frac{3}{10}$"],
    "h": "There are $60$ minutes in $1$ hour. Put the minutes over $60$ and simplify.",
    "s": "$1$ hour $= 60$ minutes. The fraction is $\\frac{15}{60}$. Divide the numerator and denominator by $15$ to simplify: $\\frac{1}{4}$.",
    "solutionSteps": [
      {
        "explanation": "Convert the total time unit to the same smaller unit. (1 hour = 60 minutes).",
        "workingOut": "\\text{Total} = 60"
      },
      {
        "explanation": "Write the given amount over the total amount.",
        "workingOut": "\\frac{15}{60}"
      },
      {
        "explanation": "Simplify the fraction.",
        "workingOut": "\\frac{15 \\div 15}{60 \\div 15} = \\frac{1}{4}"
      }
    ]
  },
  {
    "id": "y6-frac-q23",
    "c": "FRAC4",
    "t": "Fraction Units",
    "type": "multiple_choice",
    "difficulty": "easy",
    "q": "What fraction is $4$ days of $1$ week?",
    "a": "$\\frac{4}{7}$",
    "opts": ["$\\frac{4}{7}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{4}{5}$"],
    "h": "How many days are in a week? Use that as the denominator.",
    "s": "There are $7$ days in a week. The fraction of the week is $\\frac{4}{7}$.",
    "solutionSteps": [
      {
        "explanation": "Identify the total number of days in one week.",
        "workingOut": "\\text{Total days} = 7"
      },
      {
        "explanation": "Write the given days over the total days.",
        "workingOut": "\\frac{4}{7}"
      }
    ]
  },
  {
    "id": "y6-frac-q24",
    "c": "FRAC4",
    "t": "Fraction Word Problems",
    "type": "multiple_choice",
    "difficulty": "medium",
    "q": "The Tigers basketball team won $16$ out of $24$ matches. If $\\frac{3}{4}$ of these wins were by more than $5$ points, what fraction of all the matches were won by more than $5$ points?",
    "a": "$\\frac{1}{2}$",
    "opts": ["$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{2}{3}$", "$\\frac{1}{3}$"],
    "h": "First, find the total fraction of games won. Then multiply it by the fraction of wins that were by more than 5 points.",
    "s": "The fraction of matches won is $\\frac{16}{24}$, which simplifies to $\\frac{2}{3}$. We are told $\\frac{3}{4}$ of these wins were by more than $5$ points. Multiply the two fractions: $\\frac{2}{3} \\times \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$. So, $\\frac{1}{2}$ of all matches were won by more than $5$ points.",
    "solutionSteps": [
      {
        "explanation": "Find the fraction of total matches won and simplify it.",
        "workingOut": "\\frac{16}{24} = \\frac{2}{3}"
      },
      {
        "explanation": "Multiply this fraction by the fraction of wins that were by >5 points.",
        "workingOut": "\\frac{2}{3} \\times \\frac{3}{4}"
      },
      {
        "explanation": "Multiply and simplify.",
        "workingOut": "\\frac{6}{12} = \\frac{1}{2}"
      }
    ]
  }
];
