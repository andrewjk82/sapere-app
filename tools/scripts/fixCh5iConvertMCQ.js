import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Helper to shuffle options array and return new array with correct answer index
function shuffleOptions(options, correctValue) {
  const arr = [...options];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const correctIdx = arr.findIndex(opt => {
    const val = typeof opt === 'object' ? opt.text : opt;
    return val === correctValue;
  });
  return { options: arr, answer: String(correctIdx) };
}

function makeOptions(correctVal, wrong1, wrong2, wrong3) {
  return [correctVal, wrong1, wrong2, wrong3];
}

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  // Let's load all Chapter 5I questions
  const snap = await questionsCol.orderBy('__name__').startAt('y9-5i').endAt('y9-5i\uf8ff').get();
  console.log(`Loaded ${snap.size} Chapter 5I questions for processing...`);

  // Build a map of existing questions to update
  const dbMap = new Map();
  snap.forEach(d => {
    dbMap.set(d.id, d.data());
  });

  // Let's define the updated structures for all 17 questions in Chapter 5I
  const updates = {};

  // 1. y9-5i-q1 (Multi-part: Plane speeds)
  // Sub-questions: q1a, q1b
  {
    const q1Data = dbMap.get('y9-5i-q1');
    if (q1Data) {
      // Slower plane speed: correct = 200
      const aOpts = makeOptions('200', '100', '150', '250');
      const aShuffled = shuffleOptions(aOpts, '200');

      // Faster plane speed: correct = 400
      const bOpts = makeOptions('400', '200', '300', '500');
      const bShuffled = shuffleOptions(bOpts, '400');

      updates['y9-5i-q1'] = {
        type: 'short_answer',
        subQuestions: [
          {
            id: 'y9-5i-q1a',
            type: 'multiple_choice',
            question: 'a) Find the average speed of the slower plane in \\(\\text{km/h}\\).',
            options: aShuffled.options,
            answer: aShuffled.answer,
            solutionSteps: [
              {
                explanation: "Define the variables for the speed of each plane.",
                workingOut: "\\text{Let the speed of the slower plane be } v\\text{ km/h.}"
              },
              {
                explanation: "Express the speed of the faster plane, which is twice as fast as the slower plane.",
                workingOut: "\\text{Speed of the faster plane} = 2v\\text{ km/h}"
              },
              {
                explanation: "Calculate the time traveled by both planes from 1 p.m. to 5 p.m.",
                workingOut: "\\text{Time} = 5\\text{ p.m.} - 1\\text{ p.m.} = 4\\text{ hours}"
              },
              {
                explanation: "Write the sum of the distances traveled by both planes. Since they fly towards each other and start 2400 km apart, their total distance sum equals 2400 km.",
                workingOut: "4v + 4(2v) = 2400"
              },
              {
                explanation: "Simplify the equation and solve for \\(v\\).",
                workingOut: "4v + 8v = 2400 \\implies 12v = 2400 \\implies v = 200"
              }
            ]
          },
          {
            id: 'y9-5i-q1b',
            type: 'multiple_choice',
            question: 'b) Find the average speed of the faster plane in \\(\\text{km/h}\\).',
            options: bShuffled.options,
            answer: bShuffled.answer,
            solutionSteps: [
              {
                explanation: "Recall the average speed of the slower plane calculated in part a.",
                workingOut: "v = 200\\text{ km/h}"
              },
              {
                explanation: "Compute the speed of the faster plane, which is twice the speed of the slower plane.",
                workingOut: "2v = 2 \\times 200 = 400"
              }
            ]
          }
        ]
      };
    }
  }

  // 2. y9-5i-q2 (Mathematics teacher age)
  {
    const correct = '29';
    const opts = makeOptions(correct, '33', '25', '37');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q2'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      solutionSteps: [
        {
          explanation: "Let the teacher's current age be \\(x\\). Write expressions for her age at different times: five years ago, last year, and nine years ago.",
          workingOut: "\\text{Five years ago: } x - 5, \\quad \\text{Last year: } x - 1, \\quad \\text{Nine years ago: } x - 9"
        },
        {
          explanation: "Formulate the equation representing the statement: 'One-fourth of my age five years ago, when added to half my age last year, gives my age nine years ago.'",
          workingOut: "\\frac{x - 5}{4} + \frac{x - 1}{2} = x - 9"
        },
        {
          explanation: "Multiply all terms by the lowest common denominator 4 to eliminate the fractions.",
          workingOut: "(x - 5) + 2(x - 1) = 4(x - 9)"
        },
        {
          explanation: "Expand the brackets and collect like terms.",
          workingOut: "x - 5 + 2x - 2 = 4x - 36 \\implies 3x - 7 = 4x - 36"
        },
        {
          explanation: "Solve for \\(x\\) by isolating variables on one side.",
          workingOut: "4x - 3x = 36 - 7 \\implies x = 29"
        }
      ]
    };
  }

  // 3. y9-5i-q3 (Divide $600 between A, B, C)
  // Sub-questions: q3a (A's share: 215), q3b (B's share: 185), q3c (C's share: 200)
  {
    const q3Data = dbMap.get('y9-5i-q3');
    if (q3Data) {
      const aOpts = makeOptions('215', '200', '230', '185');
      const aShuffled = shuffleOptions(aOpts, '215');

      const bOpts = makeOptions('185', '170', '200', '155');
      const bShuffled = shuffleOptions(bOpts, '185');

      const cOpts = makeOptions('200', '150', '250', '180');
      const cShuffled = shuffleOptions(cOpts, '200');

      updates['y9-5i-q3'] = {
        type: 'short_answer',
        subQuestions: [
          {
            id: 'y9-5i-q3a',
            type: 'multiple_choice',
            question: 'a) How much does A receive in dollars?',
            options: aShuffled.options,
            answer: aShuffled.answer,
            solutionSteps: [
              {
                explanation: "Let A's share be \\(x\\). Express B's share, which is $30 less than A's share.",
                workingOut: "\\text{A} = x, \\quad \\text{B} = x - 30"
              },
              {
                explanation: "Express C's share, which is half of the combined share of A and B.",
                workingOut: "\\text{C} = \\frac{1}{2}(x + x - 30) = \\frac{1}{2}(2x - 30) = x - 15"
              },
              {
                explanation: "Set up the sum equation for all three shares equal to $600.",
                workingOut: "x + (x - 30) + (x - 15) = 600"
              },
              {
                explanation: "Simplify the equation and solve for \\(x\\).",
                workingOut: "3x - 45 = 600 \\implies 3x = 645 \\implies x = 215"
              }
            ]
          },
          {
            id: 'y9-5i-q3b',
            type: 'multiple_choice',
            question: 'b) How much does B receive in dollars?',
            options: bShuffled.options,
            answer: bShuffled.answer,
            solutionSteps: [
              {
                explanation: "Recall B's share in terms of A's share \\(x\\).",
                workingOut: "\\text{B} = x - 30"
              },
              {
                explanation: "Substitute \\(x = 215\\) into B's expression.",
                workingOut: "215 - 30 = 185"
              }
            ]
          },
          {
            id: 'y9-5i-q3c',
            type: 'multiple_choice',
            question: 'c) How much does C receive in dollars?',
            options: cShuffled.options,
            answer: cShuffled.answer,
            solutionSteps: [
              {
                explanation: "Recall C's share expression in terms of A's share \\(x\\).",
                workingOut: "\\text{C} = x - 15"
              },
              {
                explanation: "Substitute \\(x = 215\\) into C's expression.",
                workingOut: "215 - 15 = 200"
              }
            ]
          }
        ]
      };
    }
  }

  // 4. y9-5i-q4 (Printing press leaflets)
  // Sub-questions: q4a (slower: 2425), q4b (faster: 2575)
  {
    const q4Data = dbMap.get('y9-5i-q4');
    if (q4Data) {
      const aOpts = makeOptions('2425', '2350', '2500', '2250');
      const aShuffled = shuffleOptions(aOpts, '2425');

      const bOpts = makeOptions('2575', '2500', '2650', '2425');
      const bShuffled = shuffleOptions(bOpts, '2575');

      updates['y9-5i-q4'] = {
        type: 'short_answer',
        subQuestions: [
          {
            id: 'y9-5i-q4a',
            type: 'multiple_choice',
            question: 'a) Find the number of leaflets produced per hour by the slower press.',
            options: aShuffled.options,
            answer: aShuffled.answer,
            solutionSteps: [
              {
                explanation: "Let the rate of the slower press be \\(r\\) leaflets/hour. Express the rate of the faster press.",
                workingOut: "\\text{Slower rate} = r, \\quad \\text{Faster rate} = r + 150"
              },
              {
                explanation: "Write down the combined rate of both presses.",
                workingOut: "\\text{Combined rate} = r + (r + 150) = 2r + 150"
              },
              {
                explanation: "Set up the equation for 60,000 leaflets produced in 12 hours.",
                workingOut: "12(2r + 150) = 60000"
              },
              {
                explanation: "Divide both sides by 12.",
                workingOut: "2r + 150 = 5000"
              },
              {
                explanation: "Solve for \\(r\\).",
                workingOut: "2r = 4850 \\implies r = 2425"
              }
            ]
          },
          {
            id: 'y9-5i-q4b',
            type: 'multiple_choice',
            question: 'b) Find the number of leaflets produced per hour by the faster press.',
            options: bShuffled.options,
            answer: bShuffled.answer,
            solutionSteps: [
              {
                explanation: "Recall the rate of the slower press from part a.",
                workingOut: "r = 2425\\text{ leaflets/hour}"
              },
              {
                explanation: "Calculate the rate of the faster press by adding 150 to the slower rate.",
                workingOut: "r + 150 = 2425 + 150 = 2575"
              }
            ]
          }
        ]
      };
    }
  }

  // 5. y9-5i-q5 (Metal alloys weights)
  // Sub-questions: q5a (Metal B unit weight: 6), q5b (Metal A unit weight: 9)
  {
    const q5Data = dbMap.get('y9-5i-q5');
    if (q5Data) {
      const aOpts = makeOptions('6', '4', '8', '5');
      const aShuffled = shuffleOptions(aOpts, '6');

      const bOpts = makeOptions('9', '6', '12', '7.5');
      const bShuffled = shuffleOptions(bOpts, '9');

      updates['y9-5i-q5'] = {
        type: 'short_answer',
        subQuestions: [
          {
            id: 'y9-5i-q5a',
            type: 'multiple_choice',
            question: 'a) Find the weight of \\(1\\text{ cm}^3\\) of metal B in grams.',
            options: aShuffled.options,
            answer: aShuffled.answer,
            solutionSteps: [
              {
                explanation: "Let the weight of 1 cm^3 of metal B be \\(y\\) grams. Express the unit weight of metal A.",
                workingOut: "\\text{B} = y, \\quad \\text{A} = 1.5y"
              },
              {
                explanation: "Formulate the total weight equation for 10 cm^3 of A and 5 cm^3 of B weighing 120 g.",
                workingOut: "10(1.5y) + 5y = 120"
              },
              {
                explanation: "Simplify the expression.",
                workingOut: "15y + 5y = 120 \\implies 20y = 120"
              },
              {
                explanation: "Solve for \\(y\\).",
                workingOut: "y = 6"
              }
            ]
          },
          {
            id: 'y9-5i-q5b',
            type: 'multiple_choice',
            question: 'b) Find the weight of \\(1\\text{ cm}^3\\) of metal A in grams.',
            options: bShuffled.options,
            answer: bShuffled.answer,
            solutionSteps: [
              {
                explanation: "Recall the unit weight of metal B.",
                workingOut: "y = 6\\text{ g}"
              },
              {
                explanation: "Calculate the unit weight of metal A, which is 1.5 times that of metal B.",
                workingOut: "1.5y = 1.5 \\times 6 = 9"
              }
            ]
          }
        ]
      };
    }
  }

  // 6. y9-5i-q6 (River flow boat speed in still water: 16)
  {
    const correct = '16';
    const opts = makeOptions(correct, '12', '20', '15');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q6'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      question: "A river flows at \\(4\\text{ km/h}\\). A boat goes upstream \\(\\frac{3}{5}\\) as fast as downstream. What is the speed of the boat in still water in \\(\\text{km/h}\\)?",
      solutionSteps: [
        {
          explanation: "Let the speed of the boat in still water be \\(v\\) km/h. Express upstream and downstream speeds with a river speed of 4 km/h.",
          workingOut: "\\text{Upstream Speed} = v - 4, \\quad \\text{Downstream Speed} = v + 4"
        },
        {
          explanation: "Write the equation: upstream speed is 3/5 of downstream speed.",
          workingOut: "v - 4 = \\frac{3}{5}(v + 4)"
        },
        {
          explanation: "Multiply both sides by 5 to clear the fraction.",
          workingOut: "5(v - 4) = 3(v + 4)"
        },
        {
          explanation: "Expand both sides.",
          workingOut: "5v - 20 = 3v + 12"
        },
        {
          explanation: "Subtract 3v and add 20 to both sides to solve for \\(v\\).",
          workingOut: "2v = 32 \\implies v = 16"
        }
      ]
    };
  }

  // 7. y9-5i-q7 (Butter-fat content mixture: 5%)
  {
    const correct = '5';
    const opts = makeOptions(correct, '4', '6', '3');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q7'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      question: "\\(30\\text{ litres}\\) of milk with unknown butter-fat content from Vat A is mixed with \\(15\\text{ litres}\\) of milk with \\(2\\%\\) butter-fat from Vat B to produce milk with \\(4\\%\\) butter-fat content. Find the percentage of butter-fat in Vat A.",
      solutionSteps: [
        {
          explanation: "Let the percentage of butter-fat in Vat A be \\(p\\%\\). Write expressions for butter-fat volumes in Vat A and Vat B.",
          workingOut: "\\text{Butter-fat A} = 30 \\times \\frac{p}{100} = 0.3p\\text{ litres}, \\quad \\text{Butter-fat B} = 15 \\times 0.02 = 0.3\\text{ litres}"
        },
        {
          explanation: "Calculate the total volume of milk and the target butter-fat volume in the final mixture.",
          workingOut: "\\text{Total Milk} = 30 + 15 = 45\\text{ litres}, \\quad \\text{Final Butter-fat} = 45 \\times 0.04 = 1.8\\text{ litres}"
        },
        {
          explanation: "Write the sum equation for butter-fat and solve for \\(p\\).",
          workingOut: "0.3p + 0.3 = 1.8 \\implies 0.3p = 1.5 \\implies p = 5"
        }
      ]
    };
  }

  // 8. y9-5i-q8 (Machined bar length)
  // Sub-questions: q8a (Stage 1 removal: 20), q8b (Stage 2 removal: 9), q8c (Original length: 200)
  {
    const q8Data = dbMap.get('y9-5i-q8');
    if (q8Data) {
      const aOpts = makeOptions('20', '10', '15', '25');
      const aShuffled = shuffleOptions(aOpts, '20');

      const bOpts = makeOptions('9', '10', '8', '11');
      const bShuffled = shuffleOptions(bOpts, '9');

      const cOpts = makeOptions('200', '190', '210', '180');
      const cShuffled = shuffleOptions(cOpts, '200');

      updates['y9-5i-q8'] = {
        type: 'short_answer',
        subQuestions: [
          {
            id: 'y9-5i-q8a',
            type: 'multiple_choice',
            question: 'a) Find the length removed at the first machining stage in \\(\\text{cm}\\).',
            options: aShuffled.options,
            answer: aShuffled.answer,
            solutionSteps: [
              {
                explanation: "Let the original length of the bar be \\(L\\) cm. Express the remaining length after removing 10%.",
                workingOut: "\\text{Remaining length after first stage} = 0.9L"
              },
              {
                explanation: "Subtract another 5% of the remaining length in the second stage.",
                workingOut: "\\text{Remaining length after second stage} = 0.9L - 0.05(0.9L) = 0.95 \\times 0.9L = 0.855L"
              },
              {
                explanation: "Equate the remaining length after both stages to 171 cm and solve for original length \\(L\\).",
                workingOut: "0.855L = 171 \\implies L = 200\\text{ cm}"
              },
              {
                explanation: "Compute the first stage removal (10% of L).",
                workingOut: "0.10 \\times 200 = 20\\text{ cm}"
              }
            ]
          },
          {
            id: 'y9-5i-q8b',
            type: 'multiple_choice',
            question: 'b) Find the length removed at the second machining stage in \\(\\text{cm}\\).',
            options: bShuffled.options,
            answer: bShuffled.answer,
            solutionSteps: [
              {
                explanation: "Recall the original length \\(L = 200\\text{ cm}\\) and first removal of 20 cm.",
                workingOut: "\\text{Remaining length before second stage} = 200 - 20 = 180\\text{ cm}"
              },
              {
                explanation: "Calculate the second removal which is 5% of the remaining length.",
                workingOut: "0.05 \\times 180 = 9\\text{ cm}"
              }
            ]
          },
          {
            id: 'y9-5i-q8c',
            type: 'multiple_choice',
            question: 'c) Find the original length of the bar in \\(\\text{cm}\\).',
            options: cShuffled.options,
            answer: cShuffled.answer,
            solutionSteps: [
              {
                explanation: "Recall the calculations from part a.",
                workingOut: "L = 200\\text{ cm}"
              }
            ]
          }
        ]
      };
    }
  }

  // 9. y9-5i-q9 (Salesman journey: 70)
  {
    const correct = '70';
    const opts = makeOptions(correct, '60', '80', '90');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q9'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      solutionSteps: [
        {
          explanation: "Let the outward distance be \\(d\\) km. Write expressions for return distance and the time taken for both ways.",
          workingOut: "\\text{Outward: } \\text{Distance}=d, \\; \\text{Speed}=60 \\implies \\text{Time} = \\frac{d}{60}"
        },
        {
          explanation: "Write time expression for the return trip which is 10 km longer at 80 km/h.",
          workingOut: "\\text{Return: } \\text{Distance}=d+10, \\; \\text{Speed}=80 \\implies \\text{Time} = \\frac{d+10}{80}"
        },
        {
          explanation: "Set the two times equal and solve for \\(d\\).",
          workingOut: "\\frac{d}{60} = \\frac{d+10}{80} \\implies 80d = 60(d+10) \\implies 20d = 600 \\implies d = 30"
        },
        {
          explanation: "Calculate the total journey distance (outward + return).",
          workingOut: "\\text{Total Distance} = d + (d + 10) = 30 + 40 = 70"
        }
      ]
    };
  }

  // 10. y9-5i-q10c (20c and 10c coins: 50)
  {
    const correct = '50';
    const opts = makeOptions(correct, '100', '25', '75');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q10c'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      solutionSteps: [
        {
          explanation: "Let the number of 10-cent coins be \\(x\\). Express the number of 20-cent coins, which is twice as many.",
          workingOut: "\\text{10c coins} = x, \\quad \\text{20c coins} = 2x"
        },
        {
          explanation: "Convert the total value of $25 into cents.",
          workingOut: "\\$25 = 2500\\text{ cents}"
        },
        {
          explanation: "Write the sum equation representing the total value in cents.",
          workingOut: "10(x) + 20(2x) = 2500 \\implies 10x + 40x = 2500"
        },
        {
          explanation: "Solve for \\(x\\) to find the number of 10-cent coins.",
          workingOut: "50x = 2500 \\implies x = 50"
        }
      ]
    };
  }

  // 11. y9-5i-q13a (Solve literal equation: x = \frac{bc-q}{p})
  {
    const correct = 'x = \\frac{bc-q}{p}';
    const opts = makeOptions(correct, 'x = \\frac{bc+q}{p}', 'x = bc-q-p', 'x = \\frac{c-q}{bp}');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q13a'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      solutionSteps: [
        {
          explanation: "Write the given equation.",
          workingOut: "\\frac{px + q}{b} = c"
        },
        {
          explanation: "Multiply both sides by \\(b\\) to clear the denominator.",
          workingOut: "px + q = bc"
        },
        {
          explanation: "Subtract \\(q\\) from both sides to isolate the term with \\(x\\).",
          workingOut: "px = bc - q"
        },
        {
          explanation: "Divide both sides by \\(p\\) to solve for \\(x\\).",
          workingOut: "x = \\frac{bc - q}{p}"
        }
      ]
    };
  }

  // 12. y9-5i-q16c (Set notation interval: x >= 5/2)
  {
    const correct = 'x \\ge \\frac{5}{2}';
    const opts = makeOptions(correct, 'x > \\frac{5}{2}', 'x \\le \\frac{5}{2}', 'x \\ge 2');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q16c'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      solutionSteps: [
        {
          explanation: "Identify the coordinate of the point on the number line.",
          workingOut: "\\text{The circle is at } 2.5 = \\frac{5}{2}."
        },
        {
          explanation: "Examine the circle type (solid/closed circle means it includes the boundary point, i.e., \\(\\ge\\) or \\(\\le\\)).",
          workingOut: "\\text{Closed circle} \\implies \\ge \\text{ or } \\le"
        },
        {
          explanation: "Observe the direction of the arrow (pointing right means greater than or equal to).",
          workingOut: "\\text{Arrow points right} \\implies x \\ge \\frac{5}{2}"
        }
      ]
    };
  }

  // 13. y9-5i-q17g (Solve inequality: x >= 14)
  // Wait, let's look at the database: its current answer is "3". Let's check what correct option corresponds to "3" (maybe index 3 or x >= 14)
  // Let's resolve the inequality first:
  // x/4 - 1/2 >= 3  =>  x/4 >= 3.5  =>  x >= 14
  // Let's check if there's any typo. The correct solution is x >= 14. We will make options:
  // x >= 14, x <= 14, x >= 8, x > 14
  {
    const correct = 'x \\ge 14';
    const opts = makeOptions(correct, 'x \\le 14', 'x \\ge 8', 'x > 14');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q17g'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      question: "Solve the inequality:\n\\(\\frac{x}{4} - \\frac{1}{2} \\ge 3\\)",
      solutionSteps: [
        {
          explanation: "Write down the inequality.",
          workingOut: "\\frac{x}{4} - \\frac{1}{2} \\ge 3"
        },
        {
          explanation: "Add \\(\\frac{1}{2}\\) to both sides.",
          workingOut: "\\frac{x}{4} \\ge 3 + \\frac{1}{2} \\implies \\frac{x}{4} \\ge 3.5"
        },
        {
          explanation: "Multiply both sides by 4 to solve for \\(x\\).",
          workingOut: "x \\ge 3.5 \\times 4 \\implies x \\ge 14"
        }
      ]
    };
  }

  // 14. y9-5i-q18j (Solve inequality: x > 29/8)
  {
    const correct = 'x > \\frac{29}{8}';
    const opts = makeOptions(correct, 'x < \\frac{29}{8}', 'x > \\frac{25}{8}', 'x \\ge \\frac{29}{8}');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q18j'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      question: "Solve the inequality:\n\\(\\frac{8x + 1}{4} > \\frac{4x - 1}{3} + 3\\)",
      solutionSteps: [
        {
          explanation: "Write the inequality.",
          workingOut: "\\frac{8x + 1}{4} > \\frac{4x - 1}{3} + 3"
        },
        {
          explanation: "Multiply every term by the common denominator 12 to eliminate fractions.",
          workingOut: "3(8x + 1) > 4(4x - 1) + 36"
        },
        {
          explanation: "Expand the expressions.",
          workingOut: "24x + 3 > 16x - 4 + 36"
        },
        {
          explanation: "Simplify the right side.",
          workingOut: "24x + 3 > 16x + 32"
        },
        {
          explanation: "Subtract 16x from both sides.",
          workingOut: "8x + 3 > 32"
        },
        {
          explanation: "Subtract 3 and divide by 8.",
          workingOut: "8x > 29 \\implies x > \\frac{29}{8}"
        }
      ]
    };
  }

  // 15. y9-5i-q4c (Solve equation: -4m = 20)
  {
    const correct = 'm = -5';
    const opts = makeOptions(correct, 'm = 5', 'm = -24', 'm = -16');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q4c'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      solutionSteps: [
        {
          explanation: "Write down the given equation.",
          workingOut: "-4m = 20"
        },
        {
          explanation: "Divide both sides by \\(-4\\) to isolate \\(m\\).",
          workingOut: "m = \\frac{20}{-4} \\implies m = -5"
        }
      ]
    };
  }

  // 16. y9-5i-q4o (Solve equation: 5x - 3 = 9 - 3x)
  {
    const correct = 'x = 1.5';
    const opts = makeOptions(correct, 'x = 3', 'x = -1.5', 'x = 1.2');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q4o'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      solutionSteps: [
        {
          explanation: "Write the equation.",
          workingOut: "5x - 3 = 9 - 3x"
        },
        {
          explanation: "Add \\(3x\\) to both sides to collect variable terms.",
          workingOut: "8x - 3 = 9"
        },
        {
          explanation: "Add 3 to both sides.",
          workingOut: "8x = 12"
        },
        {
          explanation: "Divide both sides by 8.",
          workingOut: "x = \\frac{12}{8} \\implies x = 1.5"
        }
      ]
    };
  }

  // 17. y9-5i-q5e (Solve equation: 8(x+4) = 18)
  {
    const correct = 'x = -1.75';
    const opts = makeOptions(correct, 'x = -1.25', 'x = 1.75', 'x = 6.25');
    const shuffled = shuffleOptions(opts, correct);
    updates['y9-5i-q5e'] = {
      type: 'multiple_choice',
      options: shuffled.options,
      answer: shuffled.answer,
      solutionSteps: [
        {
          explanation: "Write down the equation.",
          workingOut: "8(x + 4) = 18"
        },
        {
          explanation: "Divide both sides by 8.",
          workingOut: "x + 4 = \\frac{18}{8} \\implies x + 4 = 2.25"
        },
        {
          explanation: "Subtract 4 from both sides to solve for \\(x\\).",
          workingOut: "x = 2.25 - 4 \\implies x = -1.75"
        }
      ]
    };
  }

  // Commit updates in batch
  for (const [id, fields] of Object.entries(updates)) {
    console.log(`Directly updating y9-5i question ${id} on Firestore...`);
    batch.update(questionsCol.doc(id), {
      ...fields,
      requiresManualGrading: false
    });
  }

  // Bump sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed Chapter 5I direct database updates!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
