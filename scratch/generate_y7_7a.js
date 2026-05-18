const fs = require('fs');
const path = require('path');

const allQuestions = [
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Write this division as an algebraic fraction: A number, $y$, is divided by 7.`,
    options: ['$\\frac{y}{7}$', '$\\frac{7}{y}$', '$7y$', '$y - 7$'],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p>To write any division expression $a \\div b$ as a fraction, we place the first quantity (the dividend, $a$) in the numerator and the second quantity (the divisor, $b$) in the denominator.</p>
    <p>Following this rule, dividing a number $y$ by $7$ gives:</p>
    <p>$$\\frac{y}{7}$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Write this division as an algebraic fraction: A number, $a$, is divided by 6, and 5 is added to the result.`,
    options: ['$\\frac{a}{6} + 5$', '$\\frac{a+5}{6}$', '$\\frac{6}{a} + 5$', '$6a + 5$'],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p>Let's construct the algebraic expression step-by-step:</p>
    <p>1. "A number, $a$, is divided by 6" becomes: $\\frac{a}{6}$</p>
    <p>2. "and 5 is added to the result" means we add 5 to the term we just wrote: $\\frac{a}{6} + 5$</p>
    <p>Therefore, the complete expression is $\\frac{a}{6} + 5$.</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write this division as an algebraic fraction: 9 is added to a number, $x$, and the result is divided by 4.`,
    options: ['$\\frac{x+9}{4}$', '$\\frac{x}{4} + 9$', '$\\frac{4}{x+9}$', '$\\frac{x-9}{4}$'],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p>Let's follow the mathematical order of operations described in the word problem:</p>
    <p>1. "9 is added to a number, $x$" forms the complete quantity: $x + 9$</p>
    <p>2. "and the result is divided by 4" means we must divide the <em>entire</em> sum $(x + 9)$ by 4. Written as a fraction, we draw a fraction bar under $(x + 9)$ and place 4 in the denominator: $\\frac{x+9}{4}$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write this division as an algebraic fraction: 8 is subtracted from a number, $k$, and the result is divided by 5.`,
    options: ['$\\frac{k-8}{5}$', '$\\frac{k}{5} - 8$', '$\\frac{8-k}{5}$', '$\\frac{5}{k-8}$'],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p>Let's construct the algebraic term based on the sequence of operations:</p>
    <p>1. "8 is subtracted from a number, $k$" gives the initial difference: $k - 8$</p>
    <p>2. "and the result is divided by 5" means the <em>whole</em> difference $(k - 8)$ is divided by 5: $\\frac{k-8}{5}$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Write this division as an algebraic fraction: A number, $z$, is divided by 9, 4 is subtracted from the result, and this final result is multiplied by 5.`,
    options: ['$5\\left(\\frac{z}{9} - 4\\right)$', '$\\frac{5z}{9} - 4$', '$\\frac{5(z-4)}{9}$', '$\\frac{z-4}{9} \\times 5$'],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p>Let's build the expression step-by-step:</p>
    <p>1. "A number, $z$, is divided by 9" $\\rightarrow \\frac{z}{9}$</p>
    <p>2. "4 is subtracted from the result" $\\rightarrow \\frac{z}{9} - 4$</p>
    <p>3. "and this final result is multiplied by 5" $\\rightarrow$ We must wrap the entire expression in parentheses before multiplying by 5: $5\\left(\\frac{z}{9} - 4\\right)$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Write this division as an algebraic fraction: $(a + 5) \\div 5$`,
    options: ['$\\frac{a+5}{5}$', '$\\frac{a}{5} + 5$', '$\\frac{5}{a+5}$', '$a + 1$'],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p>To convert $(a + 5) \\div 5$ into a fraction, we divide the entire grouped term in parentheses, $(a + 5)$, by $5$:</p>
    <p>$$\\frac{a+5}{5}$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Write this division as an algebraic fraction: $(y - 7) \\div 6$`,
    options: ['$\\frac{y-7}{6}$', '$\\frac{y}{6} - 7$', '$\\frac{6}{y-7}$', '$y - \\frac{7}{6}$'],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p>Dividing the entire term $(y - 7)$ by $6$ translates directly to a fraction where $(y - 7)$ is the numerator and $6$ is the denominator:</p>
    <p>$$\\frac{y-7}{6}$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write this division as an algebraic fraction: $(m + 13) \\div 8$`,
    options: ['$\\frac{m+13}{8}$', '$\\frac{m}{8} + 13$', '$\\frac{8}{m+13}$', '$m + \\frac{13}{8}$'],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p>The brackets indicate that the sum $(m + 13)$ is treated as a single unified quantity. Dividing it by 8 gives:</p>
    <p>$$\\frac{m+13}{8}$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Write this division as an algebraic fraction: $(31 - z) \\div 9$`,
    options: ['$\\frac{31-z}{9}$', '$\\frac{z-31}{9}$', '$\\frac{9}{31-z}$', '$31 - \\frac{z}{9}$'],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p>The quantity $(31 - z)$ is the dividend, and $9$ is the divisor. Written as a fraction, this is:</p>
    <p>$$\\frac{31-z}{9}$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: false,
    isActive: true,
    question: `Evaluate this algebraic expression for $y = 24$: $\\frac{y}{3}$`,
    options: [],
    answer: '8',
    solution: `<div style="text-align: left;">
    <p>Substitute $y = 24$ directly into the algebraic expression:</p>
    <p>$$\\frac{y}{3} = \\frac{24}{3} = 8$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'easy',
    isManual: false,
    isActive: true,
    question: `Evaluate this algebraic expression for $y = 24$: $\\frac{y}{6} + 9$`,
    options: [],
    answer: '13',
    solution: `<div style="text-align: left;">
    <p>Substitute $y = 24$ directly into the expression:</p>
    <p>$$\\frac{y}{6} + 9 = \\frac{24}{6} + 9$$</p>
    <p>Evaluate the division first:</p>
    <p>$$4 + 9 = 13$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: false,
    isActive: true,
    question: `Evaluate this algebraic expression for $y = 24$: $\\frac{y+12}{9}$`,
    options: [],
    answer: '4',
    solution: `<div style="text-align: left;">
    <p>Substitute $y = 24$ into the numerator of the fraction:</p>
    <p>$$\\frac{24+12}{9}$$</p>
    <p>Simplify the numerator first:</p>
    <p>$$\\frac{36}{9} = 4$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: false,
    isActive: true,
    question: `Evaluate this algebraic expression for $y = 24$: $\\frac{50-y}{13}$`,
    options: [],
    answer: '2',
    solution: `<div style="text-align: left;">
    <p>Substitute $y = 24$ directly into the expression:</p>
    <p>$$\\frac{50-24}{13}$$</p>
    <p>Evaluate the subtraction inside the numerator first:</p>
    <p>$$\\frac{26}{13} = 2$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'easy',
    isManual: true,
    isActive: true,
    question: `Evaluate this algebraic expression for $a = 6$ and $b = 8$: $\\frac{a}{b}$`,
    options: ['$\\frac{3}{4}$', '$\\frac{4}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p>Substitute $a = 6$ and $b = 8$ directly into the fraction:</p>
    <p>$$\\frac{a}{b} = \\frac{6}{8}$$</p>
    <p>Simplify the fraction by dividing both numerator and denominator by their greatest common divisor, which is 2:</p>
    <p>$$\\frac{6 \\div 2}{8 \\div 2} = \\frac{3}{4}$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `Evaluate this algebraic expression for $a = 6$ and $b = 8$: $\\frac{b-a}{4}$`,
    options: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$2$', '$1$'],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p>Substitute $a = 6$ and $b = 8$ directly into the expression:</p>
    <p>$$\\frac{b-a}{4} = \\frac{8-6}{4}$$</p>
    <p>Simplify the subtraction in the numerator:</p>
    <p>$$\\frac{2}{4}$$</p>
    <p>Reduce the fraction to its simplest form by dividing both parts by 2:</p>
    <p>$$\\frac{2 \\div 2}{4 \\div 2} = \\frac{1}{2}$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'medium',
    isManual: false,
    isActive: true,
    question: `Evaluate this algebraic expression for $a = 6$ and $b = 8$: $\\frac{24}{a} + 5$`,
    options: [],
    answer: '9',
    solution: `<div style="text-align: left;">
    <p>Substitute $a = 6$ directly into the expression:</p>
    <p>$$\\frac{24}{6} + 5$$</p>
    <p>Evaluate the fraction first:</p>
    <p>$$4 + 5 = 9$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'short_answer',
    difficulty: 'hard',
    isManual: false,
    isActive: true,
    question: `Evaluate this algebraic expression for $a = 6$ and $b = 8$: $\\frac{5a-b}{b-a}$`,
    options: [],
    answer: '11',
    solution: `<div style="text-align: left;">
    <p>Substitute $a = 6$ and $b = 8$ into the expression:</p>
    <p>$$\\frac{5a-b}{b-a} = \\frac{5(6) - 8}{8-6}$$</p>
    <p>Simplify the numerator and the denominator separately:</p>
    <p>$$\\text{Numerator: } 30 - 8 = 22$$</p>
    <p>$$\\text{Denominator: } 8 - 6 = 2$$</p>
    <p>Now perform the final division:</p>
    <p>$$\\frac{22}{2} = 11$$</p>
  </div>`,
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `A basket containing $x$ peaches is divided into 6 equal bags. Answer the following questions.`,
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a): Peaches in each bag</strong><br>Since a total of $x$ peaches is shared equally among 6 bags, the quantity in each bag is obtained by division: $\\frac{x}{6}$.</p>
    <p><strong>Part (b): Adding peaches to each bag</strong><br>If we add 4 peaches to each individual bag, we add 4 directly to the algebraic expression representing one bag: $\\frac{x}{6} + 4$.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q5a',
        question: `How many peaches are there in each bag?`,
        type: 'multiple_choice',
        isManual: true,
        options: ['$\\frac{x}{6}$', '$6x$', '$x - 6$', '$\\frac{6}{x}$'],
        answer: 0
      },
      {
        id: 'q5b',
        question: `Four peaches are added to each bag. How many peaches are there in each bag now?`,
        type: 'multiple_choice',
        isManual: true,
        options: ['$\\frac{x}{6} + 4$', '$\\frac{x+4}{6}$', '$6x + 4$', '$\\frac{x}{10}$'],
        answer: 0
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'medium',
    isManual: true,
    isActive: true,
    question: `$p$ tonnes of iron ore are stored in a warehouse. An extra 2000 tonnes are then added. Answer the questions below.`,
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a): Total iron ore in the warehouse</strong><br>The original storage was $p$ tonnes. Adding 2000 tonnes means the total quantity is now: $p + 2000$ tonnes.</p>
    <p><strong>Part (b): Dividing into equal loads</strong><br>The total iron ore $(p + 2000)$ is split equally into 8 loads. Thus, we divide the entire quantity by 8: $\\frac{p+2000}{8}$ tonnes.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q6a',
        question: `How many tonnes of iron ore are there in the warehouse now?`,
        type: 'multiple_choice',
        isManual: true,
        options: ['$p + 2000$', '$p - 2000$', '$2000p$', '$\\frac{p}{2000}$'],
        answer: 0
      },
      {
        id: 'q6b',
        question: `It is decided to ship the entire amount of iron ore in 8 equal loads. How many tonnes of iron ore are there in each load?`,
        type: 'multiple_choice',
        isManual: true,
        options: ['$\\frac{p+2000}{8}$', '$\\frac{p}{8} + 2000$', '$\\frac{p-2000}{8}$', '$8(p+2000)$'],
        answer: 0
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `On a competitive science exam paper, there are $w$ questions. Before the test starts, it is announced that the last 3 questions are misprinted and should be completely ignored.`,
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a): Questions to complete</strong><br>There were $w$ questions originally. Since the last 3 questions are ignored, the valid number of questions to complete is: $w - 3$.</p>
    <p><strong>Part (b): Average time per question</strong><br>The total time given is exactly one hour, which is $60$ minutes. To find the average time spent per question, we divide the total time ($60$) by the number of valid questions $(w - 3)$: $\\frac{60}{w-3}$ minutes.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q7a',
        question: `How many questions must the students complete now?`,
        type: 'multiple_choice',
        isManual: true,
        options: ['$w - 3$', '$w + 3$', '$\\frac{w}{3}$', '$3w$'],
        answer: 0
      },
      {
        id: 'q7b',
        question: `The students are given exactly one hour (60 minutes) to complete the exam. How many minutes should they spend on each question, on average?`,
        type: 'multiple_choice',
        isManual: true,
        options: ['$\\frac{60}{w-3}$', '$\\frac{w-3}{60}$', '$\\frac{60}{w}$', '$60(w-3)$'],
        answer: 0
      }
    ],
    createdAt: new Date().toISOString()
  },
  {
    chapterId: 'y7-7',
    topicId: 'y7-7a',
    topicCode: '7A',
    topicTitle: 'Algebra with Fractions',
    year: 'Year 7',
    type: 'multiple_choice',
    difficulty: 'hard',
    isManual: true,
    isActive: true,
    question: `Sophia joined four of her friends for lunch. They decided to share the total food bill of \\$z equally.`,
    options: [],
    answer: 0,
    solution: `<div style="text-align: left;">
    <p><strong>Part (a): Sophia's payment share</strong><br>Sophia and her four friends make a total of $1 + 4 = 5$ people. Splitting the bill of \\$z equally means Sophia pays: $\\frac{z}{5}$ dollars.</p>
    <p><strong>Part (b): Remaining change</strong><br>Sophia pays with a \\$100 note. The amount of money she has left is the change, which is the original value minus her split meal cost: $100 - \\frac{z}{5}$ dollars.</p>
  </div>`,
    subQuestions: [
      {
        id: 'q8a',
        question: `How much did Sophia have to pay?`,
        type: 'multiple_choice',
        isManual: true,
        options: ['$\\frac{z}{5}$', '$\\frac{z}{4}$', '$5z$', '$z - 5$'],
        answer: 0
      },
      {
        id: 'q8b',
        question: `Sophia had a 100-dollar note in her purse. How much change did she have left after paying for her share of the meal?`,
        type: 'multiple_choice',
        isManual: true,
        options: ['$100 - \\frac{z}{5}$', '$100 - \\frac{z}{4}$', '$\\frac{100-z}{5}$', '$\\frac{z}{5} - 100$'],
        answer: 0
      }
    ],
    createdAt: new Date().toISOString()
  }
];

const outputFile = path.join(__dirname, '../src/scripts/importYear7Ch7A.js');

const codeContent = `import { db } from '../firebase/config.js';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';

export const allQuestions = ${JSON.stringify(allQuestions, null, 2)};

export const importYear7Ch7A = async (forceReset = false) => {
  console.log('[Ch7A Year 7 Import] STARTING PHYSICAL SYNC...');
  let importedCount = 0;
  try {
    const qRef = collection(db, 'questions');
    
    if (forceReset) {
      console.log('Force reset enabled. Deleting existing Y7 Ch7A questions...');
      const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-7a')));
      for (const doc of existingSnap.docs) {
        await deleteDoc(doc.ref);
      }
      console.log(\`Deleted \${existingSnap.size} existing questions.\`);
    }

    const existingSnap = await getDocs(query(qRef, where('topicId', '==', 'y7-7a')));
    const existingQuestions = new Set(existingSnap.docs.map(doc => doc.data().question.trim()));
    
    for (const q of allQuestions) {
      if (!existingQuestions.has(q.question.trim())) {
        await addDoc(collection(db, 'questions'), q);
        importedCount++;
      }
    }
    console.log(\`[Ch7A Year 7 Import] SUCCESS! \${importedCount} new questions imported.\`);
    return importedCount;
  } catch (error) {
    console.error('[Ch7A Year 7 Import] ERROR:', error);
    return 0;
  }
};
`;

fs.writeFileSync(outputFile, codeContent, 'utf8');
console.log('Successfully generated ' + outputFile + ' with ' + allQuestions.length + ' questions.');
