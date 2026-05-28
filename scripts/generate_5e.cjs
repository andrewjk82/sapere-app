const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/constants/seedYear9Ch5EQuestions.js');

const questions = [];

// Helper to push a question
function addQuestion(id, difficulty, timeLimit, question, a, solution, hint, steps, graphData = null) {
  questions.push({
    id,
    type: "short_answer",
    difficulty,
    timeLimit,
    question,
    a,
    solution,
    t: "Using linear equations to solve problems",
    hint,
    solutionSteps: steps,
    graphData
  });
}

// Q1 (easy, 30s)
addQuestion(
  "y9-5e-q1", "easy", 30,
  "A boy thinks of a number \\(x\\). When he adds 13 to his number, the result is 29. What is the value of \\(x\\)?",
  "16",
  "Let the number be \\(x\\).\n\\(x + 13 = 29\\)\n\\(x = 16\\)",
  "Form the equation \\(x + 13 = 29\\) and solve for \\(x\\).",
  [
    { explanation: "Write down the equation based on the description.", workingOut: "x + 13 = 29" },
    { explanation: "Subtract 13 from both sides.", workingOut: "x = 16" }
  ]
);

// Q2 (easy, 30s)
addQuestion(
  "y9-5e-q2", "easy", 30,
  "When 12 is added to twice Leo's age, the answer is 38. How old is Leo?",
  "13",
  "Let Leo's age be \\(x\\).\n\\(2x + 12 = 38\\)\n\\(2x = 26 \\implies x = 13\\)",
  "Form the equation \\(2x + 12 = 38\\).",
  [
    { explanation: "Let Leo's age be x. Twice his age is 2x. Add 12 to write the equation.", workingOut: "2x + 12 = 38" },
    { explanation: "Subtract 12 from both sides.", workingOut: "2x = 26" },
    { explanation: "Divide both sides by 2.", workingOut: "x = 13" }
  ]
);

// Q3 (easy, 30s)
addQuestion(
  "y9-5e-q3", "easy", 30,
  "When 18 is added to half of Mark's weight in kilograms, the result is 52. How much does Mark weigh?",
  "68",
  "Let Mark's weight be \\(x\\) kg.\n\\(\\frac{x}{2} + 18 = 52\\)\n\\(\\frac{x}{2} = 34 \\implies x = 68\\)",
  "Form the equation \\(\\frac{x}{2} + 18 = 52\\).",
  [
    { explanation: "Let Mark's weight be x. Half his weight is x/2. Add 18 to write the equation.", workingOut: "\\frac{x}{2} + 18 = 52" },
    { explanation: "Subtract 18 from both sides.", workingOut: "\\frac{x}{2} = 34" },
    { explanation: "Multiply both sides by 2.", workingOut: "x = 68" }
  ]
);

// Q4 (easy, 30s)
addQuestion(
  "y9-5e-q4", "easy", 30,
  "Anna buys 6 notebooks and receives \\(\\$1.20\\) change from a \\(\\$15.00\\) note. How much does a notebook cost in dollars?",
  "2.3",
  "Let the cost of a notebook be \\(x\\) dollars.\n\\(6x + 1.20 = 15.00\\)\n\\(6x = 13.80 \\implies x = 2.30\\)",
  "The cost of 6 notebooks plus the change equals the total money paid.",
  [
    { explanation: "Formulate the equation representing the total amount paid.", workingOut: "6x + 1.20 = 15.00" },
    { explanation: "Subtract the change from the total amount.", workingOut: "6x = 13.80" },
    { explanation: "Divide by 6 to find the price per notebook.", workingOut: "x = 2.30" }
  ]
);

// Q5 (easy, 30s)
addQuestion(
  "y9-5e-q5", "easy", 30,
  "If the sum of \\(3p\\) and 15 is the same as the sum of \\(5p\\) and 9, find the value of \\(p\\).",
  "3",
  "\\(3p + 15 = 5p + 9\\)\n\\(2p = 6 \\implies p = 3\\)",
  "Set the two expressions equal to each other: \\(3p + 15 = 5p + 9\\).",
  [
    { explanation: "Equate the two sums.", workingOut: "3p + 15 = 5p + 9" },
    { explanation: "Subtract 3p and 9 from both sides.", workingOut: "2p = 6" },
    { explanation: "Divide by 2.", workingOut: "p = 3" }
  ]
);

// Q6 (easy, 30s)
addQuestion(
  "y9-5e-q6", "easy", 30,
  "If the sum of half of \\(q\\) and 8 is equal to the sum of one quarter of \\(q\\) and 5, find the value of \\(q\\).",
  "-12",
  "\\(\\frac{q}{2} + 8 = \\frac{q}{4} + 5\\)\n\\(\\frac{q}{4} = -3 \\implies q = -12\\)",
  "Form the equation \\(\\frac{q}{2} + 8 = \\frac{q}{4} + 5\\).",
  [
    { explanation: "Write the equation.", workingOut: "\\frac{q}{2} + 8 = \\frac{q}{4} + 5" },
    { explanation: "Subtract q/4 and 8 from both sides.", workingOut: "\\frac{q}{4} = -3" },
    { explanation: "Multiply both sides by 4.", workingOut: "q = -12" }
  ]
);

// Q7 (easy, 30s)
addQuestion(
  "y9-5e-q7ai", "easy", 30,
  "Jack is presently 24 years older than his daughter, Amy. If \\(x\\) represents Amy's present age, express Jack's present age in terms of \\(x\\).",
  "x+24",
  "Amy is \\(x\\) years old. Jack is 24 years older, so Jack's age is \\(x + 24\\).",
  "Add 24 to Amy's age.",
  [{ explanation: "Jack's age is Amy's age plus 24.", workingOut: "x + 24" }]
);

addQuestion(
  "y9-5e-q7aii", "easy", 30,
  "Jack is presently 24 years older than his daughter, Amy. If \\(x\\) represents Amy's present age, express Amy's age in 10 years time in terms of \\(x\\).",
  "x+10",
  "Amy's age in 10 years will be her current age plus 10: \\(x + 10\\).",
  "Add 10 to Amy's present age \\(x\\).",
  [{ explanation: "Amy's age in 10 years.", workingOut: "x + 10" }]
);

addQuestion(
  "y9-5e-q7aiii", "easy", 30,
  "Jack is presently 24 years older than his daughter, Amy. If \\(x\\) represents Amy's present age, express Jack's age in 10 years time in terms of \\(x\\).",
  "x+34",
  "Jack's current age is \\(x + 24\\). In 10 years, his age will be \\((x + 24) + 10 = x + 34\\).",
  "Add 10 to Jack's present age expression \\(x + 24\\).",
  [{ explanation: "Jack's age in 10 years.", workingOut: "x + 34" }]
);

addQuestion(
  "y9-5e-q7b", "easy", 30,
  "Jack is presently 24 years older than his daughter, Amy. If Jack's age in 10 years is twice Amy's age in 10 years, find Amy's present age.",
  "14",
  "\\(x + 34 = 2(x + 10)\\)\n\\(x + 34 = 2x + 20\\)\n\\(x = 14\\)",
  "Set Jack's age in 10 years equal to twice Amy's age in 10 years.",
  [
    { explanation: "Equate Jack's age in 10 years to twice Amy's age in 10 years.", workingOut: "x + 34 = 2(x + 10)" },
    { explanation: "Expand the bracket.", workingOut: "x + 34 = 2x + 20" },
    { explanation: "Solve for x.", workingOut: "x = 14" }
  ]
);

// Q8 (easy, 30s)
addQuestion(
  "y9-5e-q8ai", "easy", 30,
  "Tim, Ben and Chris each have a number of stamps. Ben has 8 more stamps than Tim, and Chris has three times as many stamps as Tim. If \\(x\\) represents the number of stamps Tim has, express the number of stamps Ben has in terms of \\(x\\).",
  "x+8",
  "Tim has \\(x\\) stamps. Ben has 8 more, so Ben has \\(x + 8\\) stamps.",
  "Add 8 to Tim's stamps.",
  [{ explanation: "Ben's stamps.", workingOut: "x + 8" }]
);

addQuestion(
  "y9-5e-q8aii", "easy", 30,
  "Tim, Ben and Chris each have a number of stamps. Ben has 8 more stamps than Tim, and Chris has three times as many stamps as Tim. If \\(x\\) represents the number of stamps Tim has, express the number of stamps Chris has in terms of \\(x\\).",
  "3x",
  "Tim has \\(x\\) stamps. Chris has three times as many, so Chris has \\(3x\\) stamps.",
  "Multiply Tim's stamps by 3.",
  [{ explanation: "Chris's stamps.", workingOut: "3x" }]
);

addQuestion(
  "y9-5e-q8aiii", "easy", 30,
  "Tim, Ben and Chris each have a number of stamps. Ben has 8 more stamps than Tim, and Chris has three times as many stamps as Tim. If \\(x\\) represents the number of stamps Tim has, express the total number of stamps the three boys have in terms of \\(x\\).",
  "5x+8",
  "Total stamps = \\(x + (x + 8) + 3x = 5x + 8\\).",
  "Add the expressions for all three boys' stamps together.",
  [{ explanation: "Sum the individual expressions.", workingOut: "x + (x + 8) + 3x = 5x + 8" }]
);

addQuestion(
  "y9-5e-q8b", "easy", 30,
  "Tim, Ben and Chris each have a number of stamps. Ben has 8 more stamps than Tim, and Chris has three times as many stamps as Tim. If the boys have 58 stamps in total, determine how many stamps Tim has.",
  "10",
  "\\(5x + 8 = 58\\)\n\\(5x = 50 \\implies x = 10\\)",
  "Set the total stamps expression equal to 58.",
  [
    { explanation: "Set the total expression equal to 58.", workingOut: "5x + 8 = 58" },
    { explanation: "Subtract 8 and divide by 5.", workingOut: "x = 10" }
  ]
);

// Q9 (easy, 30s)
addQuestion(
  "y9-5e-q9a", "easy", 30,
  "The length of a garden bed is \\(3\\text{ m}\\) more than three times its width. If \\(x\\text{ metres}\\) represents the width of the garden bed, express the length in terms of \\(x\\).",
  "3x+3",
  "The width is \\(x\\). The length is 3 more than 3 times the width, which is \\(3x + 3\\).",
  "Multiply the width by 3 and add 3.",
  [{ explanation: "Express the length in terms of width x.", workingOut: "3x + 3" }]
);

addQuestion(
  "y9-5e-q9b", "easy", 30,
  "The length of a garden bed is \\(3\\text{ m}\\) more than three times its width. If the perimeter of the garden bed is \\(54\\text{ m}\\), find its width in metres.",
  "6",
  "Perimeter = \\(2(\\text{width} + \\text{length}) = 54\\)\n\\(2(x + 3x + 3) = 54\\)\n\\(2(4x + 3) = 54 \\implies 8x + 6 = 54 \\implies 8x = 48 \\implies x = 6\\)",
  "Use the perimeter formula: \\(P = 2(w + l)\\).",
  [
    { explanation: "Set up the perimeter equation.", workingOut: "2(x + 3x + 3) = 54" },
    { explanation: "Simplify the expression inside the brackets.", workingOut: "2(4x + 3) = 54" },
    { explanation: "Expand and solve for x.", workingOut: "8x + 6 = 54 \\implies 8x = 48 \\implies x = 6" }
  ]
);

// Q10 (easy, 30s)
addQuestion(
  "y9-5e-q10ai", "easy", 30,
  "Sarah earns \\(\\$4500\\) more than David, and John earns \\(\\$1500\\) less than David. If David's salary is \\(\\$x\\), express Sarah's salary in terms of \\(x\\).",
  "x+4500",
  "David earns \\(\\$x\\). Sarah earns \\(\\$4500\\) more, so Sarah earns \\(x + 4500\\).",
  "Add 4500 to David's salary \\(x\\).",
  [{ explanation: "Sarah's salary.", workingOut: "x + 4500" }]
);

addQuestion(
  "y9-5e-q10aii", "easy", 30,
  "Sarah earns \\(\\$4500\\) more than David, and John earns \\(\\$1500\\) less than David. If David's salary is \\(\\$x\\), express John's salary in terms of \\(x\\).",
  "x-1500",
  "David earns \\(\\$x\\). John earns \\(\\$1500\\) less, so John earns \\(x - 1500\\).",
  "Subtract 1500 from David's salary \\(x\\).",
  [{ explanation: "John's salary.", workingOut: "x - 1500" }]
);

addQuestion(
  "y9-5e-q10b", "easy", 30,
  "Sarah earns \\(\\$4500\\) more than David, and John earns \\(\\$1500\\) less than David. If the total of the three incomes is \\(\\$147\\,000\\), find David's salary in dollars.",
  "48000",
  "Total = \\(x + (x + 4500) + (x - 1500) = 147\\,000\\)\n\\(3x + 3000 = 147\\,000\\)\n\\(3x = 144\\,000 \\implies x = 48\\,000\\)",
  "Sum the three salaries and set it equal to 147,000.",
  [
    { explanation: "Sum the three salary expressions.", workingOut: "x + (x + 4500) + (x - 1500) = 147000" },
    { explanation: "Combine like terms.", workingOut: "3x + 3000 = 147000" },
    { explanation: "Solve for David's salary x.", workingOut: "3x = 144000 \\implies x = 48000" }
  ]
);

// Q11 (medium, 90s)
addQuestion(
  "y9-5e-q11a", "medium", 90,
  "Leo has a number of 10-cent and 20-cent coins. If their total value is \\(\\$9\\), how many of each coin are there if there are equal numbers of each coin?",
  "30",
  "Let \\(x\\) be the number of each coin.\n\\(0.10x + 0.20x = 9\\)\n\\(0.30x = 9 \\implies x = 30\\)",
  "Let the number of coins of each type be \\(x\\). Write their values in dollars.",
  [
    { explanation: "Let x be the number of each coin. The total value is $9.", workingOut: "0.10x + 0.20x = 9" },
    { explanation: "Combine terms and solve.", workingOut: "0.30x = 9 \\implies x = 30" }
  ]
);

addQuestion(
  "y9-5e-q11b", "medium", 90,
  "Leo has a number of 10-cent and 20-cent coins. If their total value is \\(\\$8\\), and there are twice as many 10-cent coins as 20-cent coins, how many 20-cent coins are there?",
  "20",
  "Let \\(y\\) be the number of 20-cent coins. Then the number of 10-cent coins is \\(2y\\).\n\\(0.20y + 0.10(2y) = 8\\)\n\\(0.20y + 0.20y = 8 \\implies 0.40y = 8 \\implies y = 20\\)",
  "Express the number of 10-cent coins in terms of 20-cent coins.",
  [
    { explanation: "Let y be the number of 20-cent coins.", workingOut: "0.20y + 0.10(2y) = 8" },
    { explanation: "Simplify and solve for y.", workingOut: "0.40y = 8 \\implies y = 20" }
  ]
);

addQuestion(
  "y9-5e-q11c", "medium", 90,
  "Leo has a number of 10-cent and 20-cent coins. If their total value is \\(\\$10\\), and there are twice as many 20-cent coins as 10-cent coins, how many 10-cent coins are there?",
  "20",
  "Let \\(z\\) be the number of 10-cent coins. The number of 20-cent coins is \\(2z\\).\n\\(0.10z + 0.20(2z) = 10\\)\n\\(0.10z + 0.40z = 10 \\implies 0.50z = 10 \\implies z = 20\\)",
  "Express the number of 20-cent coins in terms of 10-cent coins.",
  [
    { explanation: "Let z be the number of 10-cent coins.", workingOut: "0.10z + 0.20(2z) = 10" },
    { explanation: "Simplify and solve for z.", workingOut: "0.50z = 10 \\implies z = 20" }
  ]
);

// Q12 (medium, 90s)
addQuestion(
  "y9-5e-q12a", "medium", 90,
  "The distance between two towns is \\(480\\text{ km}\\). Find \\(x\\) if the trip takes \\(x\\) hours at an average speed of \\(60\\text{ km/h}\\).",
  "8",
  "\\(60x = 480 \\implies x = 8\\)",
  "Use the formula: \\(\\text{Distance} = \\text{Speed} \\times \\text{Time}\\).",
  [{ explanation: "Set up the relation.", workingOut: "60x = 480 \\implies x = 8" }]
);

addQuestion(
  "y9-5e-q12b", "medium", 90,
  "The distance between two towns is \\(320\\text{ km}\\). Find \\(x\\) if the trip takes \\(4\\text{ hours}\\) at an average speed of \\(x\\text{ km/h}\\).",
  "80",
  "\\(4x = 320 \\implies x = 80\\)",
  "Use the formula: \\(\\text{Distance} = \\text{Speed} \\times \\text{Time}\\).",
  [{ explanation: "Set up the relation.", workingOut: "4x = 320 \\implies x = 80" }]
);

addQuestion(
  "y9-5e-q12c", "medium", 90,
  "The distance between two towns is \\(360\\text{ km}\\). Find \\(x\\) if the trip takes \\(4\\text{ hours}\\), travelling \\(x\\text{ hours}\\) at \\(100\\text{ km/h}\\) and the remaining time at \\(60\\text{ km/h}\\).",
  "3",
  "\\(100x + 60(4 - x) = 360\\)\n\\(100x + 240 - 60x = 360\\)\n\\(40x = 120 \\implies x = 3\\)",
  "Total distance is the sum of distance in the first part and distance in the second part.",
  [
    { explanation: "Write the equation for total distance.", workingOut: "100x + 60(4 - x) = 360" },
    { explanation: "Expand and simplify.", workingOut: "40x + 240 = 360" },
    { explanation: "Solve for x.", workingOut: "40x = 120 \\implies x = 3" }
  ]
);

// Q13 (medium, 90s)
addQuestion(
  "y9-5e-q13", "medium", 90,
  "A rectangular room has a length \\(4\\text{ m}\\) shorter than its width and a perimeter of \\(36\\text{ m}\\). Find the width of the room in metres.",
  "11",
  "Let width be \\(w\\). Length is \\(w - 4\\).\n\\(2(w + w - 4) = 36\\)\n\\(2(2w - 4) = 36 \\implies 4w - 8 = 36 \\implies 4w = 44 \\implies w = 11\\)",
  "Let width be \\(w\\) and write the expression for perimeter.",
  [
    { explanation: "Write the perimeter equation.", workingOut: "2(w + w - 4) = 36" },
    { explanation: "Simplify and solve for w.", workingOut: "4w - 8 = 36 \\implies 4w = 44 \\implies w = 11" }
  ]
);

// Q14 (medium, 90s)
addQuestion(
  "y9-5e-q14", "medium", 90,
  "A woman gave one-third of her savings to her daughter and one-fifth to her son. After this, she had \\(\\$560\\) left. How much savings did she originally have in dollars?",
  "1200",
  "Let original savings be \\(x\\).\n\\(x - \\frac{1}{3}x - \\frac{1}{5}x = 560\\)\n\\(\\frac{7}{15}x = 560 \\implies x = 1200\\)",
  "The original savings minus the fractions given away equals the remaining amount.",
  [
    { explanation: "Write the equation for the remaining money.", workingOut: "x - \\frac{1}{3}x - \\frac{1}{5}x = 560" },
    { explanation: "Combine fractions.", workingOut: "\\frac{7}{15}x = 560" },
    { explanation: "Solve for x.", workingOut: "x = 560 \\times \\frac{15}{7} = 1200" }
  ]
);

// Q15 (medium, 90s)
addQuestion(
  "y9-5e-q15", "medium", 90,
  "A student has an average mark of 72 from 8 tests. What mark must be gained in the next test to raise the average to 75?",
  "99",
  "Total score so far = \\(8 \\times 72 = 576\\).\nLet \\(x\\) be the 9th test score.\n\\(\\frac{576 + x}{9} = 75 \\implies 576 + x = 675 \\implies x = 99\\)",
  "The sum of all 9 test scores divided by 9 must equal 75.",
  [
    { explanation: "Find the current sum of scores and set up the average equation.", workingOut: "\\frac{576 + x}{9} = 75" },
    { explanation: "Multiply by 9.", workingOut: "576 + x = 675" },
    { explanation: "Solve for x.", workingOut: "x = 99" }
  ]
);

// Q17 (medium, 90s)
addQuestion(
  "y9-5e-q17", "medium", 90,
  "A mother is three times as old as her daughter. In twelve years she will be only twice as old as her daughter. What is the mother's present age?",
  "36",
  "Let daughter's present age be \\(x\\). Mother is \\(3x\\).\nIn 12 years:\n\\(3x + 12 = 2(x + 12)\\)\n\\(3x + 12 = 2x + 24 \\implies x = 12\\)\nMother's present age = \\(3 \\times 12 = 36\\).",
  "Write their ages in 12 years and form the equation.",
  [
    { explanation: "Set up the equation for ages in 12 years.", workingOut: "3x + 12 = 2(x + 12)" },
    { explanation: "Solve for the daughter's age x.", workingOut: "3x + 12 = 2x + 24 \\implies x = 12" },
    { explanation: "Find the mother's age (3x).", workingOut: "3 \\times 12 = 36" }
  ]
);

// Q18 (medium, 90s)
addQuestion(
  "y9-5e-q18", "medium", 90,
  "A container holds 8 litres of a juice drink, of which 15% is pure fruit juice. How many litres of water must be added to dilute it to 10% fruit juice?",
  "4",
  "Pure juice volume = \\(8 \\times 0.15 = 1.2\\text{ L}\\).\nLet \\(x\\) litres of water be added.\n\\(\\frac{1.2}{8 + x} = 0.10 \\implies 1.2 = 0.8 + 0.10x \\implies 0.10x = 0.4 \\implies x = 4\\)",
  "The amount of pure fruit juice remains constant after adding water.",
  [
    { explanation: "Find the pure juice volume.", workingOut: "8 \\times 0.15 = 1.2" },
    { explanation: "Set up the dilution equation.", workingOut: "\\frac{1.2}{8 + x} = 0.10" },
    { explanation: "Solve for x.", workingOut: "1.2 = 0.8 + 0.10x \\implies 0.4 = 0.10x \\implies x = 4" }
  ]
);

// Q19 (medium, 90s)
addQuestion(
  "y9-5e-q19", "medium", 90,
  "A merchant mixes nuts. Peanuts cost \\(\\$10\\) per kg and cashews cost \\(\\$15\\) per kg. How many grams of peanuts should be used to make a \\(1\\text{ kg}\\) mixture that costs \\(\\$12\\)?",
  "600",
  "Let \\(x\\) kg be the mass of peanuts. The mass of cashews is \\(1 - x\\) kg.\n\\(10x + 15(1 - x) = 12\\)\n\\(10x + 15 - 15x = 12\\)\n\\(-5x = -3 \\implies x = 0.6\\text{ kg} = 600\\text{ g}\\).",
  "Find the mass in kg first, then convert it to grams.",
  [
    { explanation: "Write the cost equation for the 1 kg mixture.", workingOut: "10x + 15(1 - x) = 12" },
    { explanation: "Solve for the mass of peanuts in kg.", workingOut: "-5x = -3 \\implies x = 0.6" },
    { explanation: "Convert to grams.", workingOut: "0.6 \\times 1000 = 600" }
  ]
);

// Q20 (medium, 90s)
addQuestion(
  "y9-5e-q20", "medium", 90,
  "A collection of 10-cent, 20-cent and 50-cent coins has a total value of \\(\\$8.00\\). The number of 20-cent coins is three times the number of 10-cent coins. The number of 50-cent coins is 1 less than twice the number of 10-cent coins. How many 10-cent coins are there?",
  "5",
  "Let \\(x\\) be the number of 10-cent coins. 20-cent coins = \\(3x\\). 50-cent coins = \\(2x - 1\\).\n\\(0.10x + 0.20(3x) + 0.50(2x - 1) = 8.00\\)\n\\(0.10x + 0.60x + 1.00x - 0.50 = 8.00\\)\n\\(1.70x = 8.50 \\implies x = 5\\)",
  "Express all coin counts in terms of the number of 10-cent coins \\(x\\).",
  [
    { explanation: "Write the equation for the total value.", workingOut: "0.10x + 0.20(3x) + 0.50(2x - 1) = 8.00" },
    { explanation: "Simplify and combine like terms.", workingOut: "1.70x - 0.50 = 8.00" },
    { explanation: "Solve for x.", workingOut: "1.70x = 8.50 \\implies x = 5" }
  ]
);

// Q21 (hard, 120s)
addQuestion(
  "y9-5e-q21", "hard", 120,
  "If 3 litres of a chemical mixture contains 70% acid, how many litres of water must be added so that the resulting mixture contains 30% acid?",
  "4",
  "Pure acid = \\(3 \\times 0.70 = 2.1\\text{ L}\\).\nLet \\(x\\) litres of water be added.\n\\(\\frac{2.1}{3 + x} = 0.30 \\implies 2.1 = 0.9 + 0.30x \\implies 0.30x = 1.2 \\implies x = 4\\)",
  "The amount of pure acid remains unchanged.",
  [
    { explanation: "Find the volume of pure acid.", workingOut: "3 \\times 0.70 = 2.1" },
    { explanation: "Set up the equation for the new concentration.", workingOut: "\\frac{2.1}{3 + x} = 0.30" },
    { explanation: "Solve for the added water volume x.", workingOut: "2.1 = 0.9 + 0.30x \\implies 0.30x = 1.2 \\implies x = 4" }
  ]
);

// Q22 (hard, 120s)
const q22Geometry1 = {
  "geometry": {
    "width": 300,
    "points": {
      "A": [0, 0],
      "B": [4, 0],
      "C": [4, 2],
      "D": [0, 2]
    },
    "segments": [
      { "from": "A", "to": "B" },
      { "from": "B", "to": "C" },
      { "from": "C", "to": "D" },
      { "from": "D", "to": "A" }
    ],
    "sideLabels": [
      { "between": ["A", "B"], "text": "w + 40" },
      { "between": ["A", "D"], "text": "w" }
    ]
  }
};

addQuestion(
  "y9-5e-q22a", "hard", 120,
  "A rectangular pond has a length 40 cm more than its width \\(w\\text{ cm}\\). Find the length of the pond in terms of \\(w\\).",
  "w+40",
  "The width is \\(w\\). The length is 40 cm more, so length is \\(w + 40\\).",
  "Add 40 to the width \\(w\\).",
  [{ explanation: "Length expression.", workingOut: "w + 40" }],
  q22Geometry1
);

addQuestion(
  "y9-5e-q22b", "hard", 120,
  "A rectangular pond has a length 40 cm more than its width \\(w\\text{ cm}\\). If the length of the pond is 120 cm, find the width of the pond in cm.",
  "80",
  "\\(w + 40 = 120 \\implies w = 80\\text{ cm}\\).",
  "Set the length expression equal to 120.",
  [{ explanation: "Solve the linear equation.", workingOut: "w + 40 = 120 \\implies w = 80" }],
  q22Geometry1
);

addQuestion(
  "y9-5e-q22c", "hard", 120,
  "A rectangular pond has a length 40 cm more than its width \\(w\\text{ cm}\\). If the perimeter of the pond is 480 cm, find the width of the pond in cm.",
  "100",
  "Perimeter = \\(2(w + w + 40) = 480\\)\n\\(2(2w + 40) = 480 \\implies 4w + 80 = 480 \\implies 4w = 400 \\implies w = 100\\)",
  "Use the perimeter formula \\(P = 2(\\text{width} + \\text{length})\\).",
  [
    { explanation: "Form the perimeter equation.", workingOut: "2(w + w + 40) = 480" },
    { explanation: "Solve for the width w.", workingOut: "4w + 80 = 480 \\implies 4w = 400 \\implies w = 100" }
  ],
  q22Geometry1
);

const q22Geometry2 = {
  "geometry": {
    "width": 300,
    "points": {
      "A": [0.6, 0.6],
      "B": [4.4, 0.6],
      "C": [4.4, 2.4],
      "D": [0.6, 2.4],
      "P1": [0, 0],
      "P2": [5, 0],
      "P3": [5, 3],
      "P4": [0, 3]
    },
    "segments": [
      { "from": "A", "to": "B" },
      { "from": "B", "to": "C" },
      { "from": "C", "to": "D" },
      { "from": "D", "to": "A" },
      { "from": "P1", "to": "P2" },
      { "from": "P2", "to": "P3" },
      { "from": "P3", "to": "P4" },
      { "from": "P4", "to": "P1" }
    ],
    "sideLabels": [
      { "between": ["A", "B"], "text": "w + 40" },
      { "between": ["A", "D"], "text": "w" }
    ]
  }
};

addQuestion(
  "y9-5e-q22di", "hard", 120,
  "A rectangular pond of width \\(w\\text{ cm}\\) and length \\(w + 40\\text{ cm}\\) has a 30 cm wide path around its perimeter. Express the length of the outer rectangle formed by the path in terms of \\(w\\).",
  "w+100",
  "The path adds 30 cm on both sides of the pond's length. Length = \\(w + 40 + 30 + 30 = w + 100\\).",
  "Add twice the path width to the pond's length.",
  [{ explanation: "Calculate the outer length.", workingOut: "w + 40 + 2(30) = w + 100" }],
  q22Geometry2
);

addQuestion(
  "y9-5e-q22dii", "hard", 120,
  "A rectangular pond of width \\(w\\text{ cm}\\) and length \\(w + 40\\text{ cm}\\) has a 30 cm wide path around its perimeter. Express the width of the outer rectangle formed by the path in terms of \\(w\\).",
  "w+60",
  "The path adds 30 cm on both sides of the pond's width. Width = \\(w + 30 + 30 = w + 60\\).",
  "Add twice the path width to the pond's width.",
  [{ explanation: "Calculate the outer width.", workingOut: "w + 2(30) = w + 60" }],
  q22Geometry2
);

addQuestion(
  "y9-5e-q22e", "hard", 120,
  "A rectangular pond of width \\(w\\text{ cm}\\) and length \\(w + 40\\text{ cm}\\) has a 30 cm wide path around its perimeter. Express the area of the path in terms of \\(w\\).",
  "120w+6000",
  "Area of path = \\(\\text{Outer Area} - \\text{Pond Area}\\)\n\\(= (w + 100)(w + 60) - w(w + 40)\\)\n\\(= (w^2 + 160w + 6000) - (w^2 + 40w)\\)\n\\(= 120w + 6000\\)",
  "Subtract the pond area from the outer rectangle area.",
  [
    { explanation: "Write the area subtraction formula.", workingOut: "(w + 100)(w + 60) - w(w + 40)" },
    { explanation: "Expand both terms.", workingOut: "(w^2 + 160w + 6000) - (w^2 + 40w)" },
    { explanation: "Simplify the final expression.", workingOut: "120w + 6000" }
  ],
  q22Geometry2
);

addQuestion(
  "y9-5e-q22f", "hard", 120,
  "A rectangular pond of width \\(w\\text{ cm}\\) and length \\(w + 40\\text{ cm}\\) has a 30 cm wide path around its perimeter. If the width of the pond is 80 cm, find the area of the path in \\(\\text{cm}^2\\).",
  "15600",
  "Substitute \\(w = 80\\) into the path area expression:\n\\(120(80) + 6000 = 9600 + 6000 = 15600\\text{ cm}^2\\).",
  "Substitute \\(w = 80\\) into the formula \\(120w + 6000\\).",
  [{ explanation: "Evaluate the expression.", workingOut: "120(80) + 6000 = 15600" }],
  q22Geometry2
);

addQuestion(
  "y9-5e-q22g", "hard", 120,
  "A rectangular pond of width \\(w\\text{ cm}\\) and length \\(w + 40\\text{ cm}\\) has a 30 cm wide path around its perimeter. If the area of the path is \\(2.4\\text{ m}^2\\) (which is \\(24\\,000\\text{ cm}^2\\)), find the width of the pond in cm.",
  "150",
  "\\(120w + 6000 = 24\\,000\\)\n\\(120w = 18\\,000 \\implies w = 150\\text{ cm}\\).",
  "Set the path area expression equal to 24000.",
  [
    { explanation: "Set up the equation.", workingOut: "120w + 6000 = 24000" },
    { explanation: "Solve for w.", workingOut: "120w = 18000 \\implies w = 150" }
  ],
  q22Geometry2
);

// Q23 (hard, 120s)
addQuestion(
  "y9-5e-q23a", "hard", 120,
  "A mother gives her son 20 cents for every correct math problem and penalises him 10 cents for every incorrect one. The boy completed 30 problems. If he got 20 problems correct, how many did he get incorrect?",
  "10",
  "Total problems = 30. Incorrect = \\(30 - 20 = 10\\).",
  "Subtract the correct problems from the total.",
  [{ explanation: "Simple subtraction.", workingOut: "30 - 20 = 10" }]
);

addQuestion(
  "y9-5e-q23b", "hard", 120,
  "A mother gives her son 20 cents for every correct math problem and penalises him 10 cents for every incorrect one. The boy completed 30 problems. If he got \\(x\\) problems correct, express the number of incorrect problems in terms of \\(x\\).",
  "30-x",
  "Total problems = 30. Incorrect = \\(30 - x\\).",
  "Subtract \\(x\\) from the total count.",
  [{ explanation: "Incorrect count.", workingOut: "30 - x" }]
);

addQuestion(
  "y9-5e-q23c", "hard", 120,
  "A mother gives her son 20 cents for every correct math problem and penalises him 10 cents for every incorrect one. The boy completed 30 problems. If he got \\(x\\) problems correct, express the amount of money he receives for correct questions in cents.",
  "20x",
  "Correct questions = \\(x\\). Each correct gets 20 cents, so total = \\(20x\\) cents.",
  "Multiply \\(x\\) by 20.",
  [{ explanation: "Earnings from correct answers.", workingOut: "20x" }]
);

addQuestion(
  "y9-5e-q23d", "hard", 120,
  "A mother gives her son 20 cents for every correct math problem and penalises him 10 cents for every incorrect one. The boy completed 30 problems. If he got \\(x\\) problems correct, express the total penalties for incorrect questions in cents.",
  "10(30-x)",
  "Incorrect questions = \\(30 - x\\). Each incorrect penalises 10 cents, so total penalty = \\(10(30 - x)\\) cents.",
  "Multiply the incorrect count expression by 10.",
  [{ explanation: "Total penalty.", workingOut: "10(30 - x)" }]
);

addQuestion(
  "y9-5e-q23e", "hard", 120,
  "A mother gives her son 20 cents for every correct math problem and penalises him 10 cents for every incorrect one. The boy completed 30 problems. If the boy made a net profit of \\(\\$3.00\\) (300 cents), write down an equation involving \\(x\\).",
  "20x-10(30-x)=300",
  "Net profit = Earnings - Penalties = 300 cents.\n\\(20x - 10(30 - x) = 300\\)",
  "Set correct earnings minus penalties equal to 300.",
  [{ explanation: "Profit equation.", workingOut: "20x - 10(30 - x) = 300" }]
);

addQuestion(
  "y9-5e-q23f", "hard", 120,
  "A mother gives her son 20 cents for every correct math problem and penalises him 10 cents for every incorrect one. The boy completed 30 problems. If the boy made a net profit of \\(\\$3.00\\) (300 cents), how many problems did he get correct?",
  "20",
  "\\(20x - 10(30 - x) = 300\\)\n\\(20x - 300 + 10x = 300\\)\n\\(30x = 600 \\implies x = 20\\)",
  "Solve the profit equation for \\(x\\).",
  [
    { explanation: "Set up the equation.", workingOut: "20x - 10(30 - x) = 300" },
    { explanation: "Expand and collect like terms.", workingOut: "30x - 300 = 300" },
    { explanation: "Solve for x.", workingOut: "30x = 600 \\implies x = 20" }
  ]
);

// Q24 (hard, 120s)
addQuestion(
  "y9-5e-q24a", "hard", 120,
  "Two identical candles of length 12 cm are lit at 6 p.m. One candle burns out by 10 p.m. and the other by 12 midnight. Assume constant burning rates. How high in cm is the faster-burning candle at 7 p.m.?",
  "9",
  "The faster-burning candle burns 12 cm in 4 hours, which is 3 cm/h.\nAt 7 p.m. (1 hour after 6 p.m.), height = \\(12 - 3(1) = 9\\text{ cm}\\).",
  "Determine the rate of the faster candle first.",
  [
    { explanation: "Calculate rate for the faster candle.", workingOut: "12 / 4 = 3\\text{ cm/h}" },
    { explanation: "Calculate height after 1 hour.", workingOut: "12 - 3 \\times 1 = 9" }
  ]
);

addQuestion(
  "y9-5e-q24b", "hard", 120,
  "Two identical candles of length 12 cm are lit at 6 p.m. One candle burns out by 10 p.m. and the other by 12 midnight. Assume constant burning rates. How high in cm is the slower-burning candle at 8 p.m.?",
  "8",
  "The slower-burning candle burns 12 cm in 6 hours, which is 2 cm/h.\nAt 8 p.m. (2 hours after 6 p.m.), height = \\(12 - 2(2) = 8\\text{ cm}\\).",
  "Determine the rate of the slower candle first.",
  [
    { explanation: "Calculate rate for the slower candle.", workingOut: "12 / 6 = 2\\text{ cm/h}" },
    { explanation: "Calculate height after 2 hours.", workingOut: "12 - 2 \\times 2 = 8" }
  ]
);

addQuestion(
  "y9-5e-q24c", "hard", 120,
  "Two identical candles of length 12 cm are lit at 6 p.m. One candle burns out by 10 p.m. and the other by 12 midnight. Assume constant burning rates. Express the height of the slower-burning candle in terms of time \\(t\\) hours after 6 p.m.",
  "12-2t",
  "The slower-burning candle burns at 2 cm/h. In \\(t\\) hours, it loses \\(2t\\) cm.\nHeight = \\(12 - 2t\\).",
  "Subtract the burned portion from the initial height.",
  [{ explanation: "Height after t hours.", workingOut: "12 - 2t" }]
);

addQuestion(
  "y9-5e-q24d", "hard", 120,
  "Two identical candles of length 12 cm are lit at 6 p.m. One candle burns out by 10 p.m. and the other by 12 midnight. Assume constant burning rates. At what time (in p.m., just write the hour number) is one candle twice as high as the other?",
  "9",
  "The slower candle height: \\(12 - 2t\\). The faster candle height: \\(12 - 3t\\).\n\\(12 - 2t = 2(12 - 3t)\\)\n\\(12 - 2t = 24 - 6t\\)\n\\(4t = 12 \\implies t = 3\\text{ hours}\\).\nTime is 6 p.m. + 3 hours = 9 p.m.",
  "Set the slower candle's height equal to twice the faster candle's height.",
  [
    { explanation: "Set up the equation.", workingOut: "12 - 2t = 2(12 - 3t)" },
    { explanation: "Expand and rearrange.", workingOut: "4t = 12" },
    { explanation: "Calculate clock time.", workingOut: "t = 3 \\implies 6\\text{ p.m.} + 3\\text{ hours} = 9\\text{ p.m.}" }
  ]
);

// Write to file
const fileContent = `export const Y9_CH5E_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
fs.writeFileSync(targetFile, fileContent, 'utf-8');
console.log("Successfully generated seedYear9Ch5EQuestions.js!");
