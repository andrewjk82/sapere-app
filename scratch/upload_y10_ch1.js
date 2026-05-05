import admin from 'firebase-admin';
import { readFileSync } from 'fs';

// Load service account key (moved to project root)
const serviceAccount = JSON.parse(readFileSync('./serviceAccountKey.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const db = admin.firestore();

const questions = [
  // Question 1: Find simple interest
  { id: 'q1a', q: "Find the simple interest payable on $10,000 borrowed for six years at 9% p.a.", a: "$5400", opts: ["$5400", "$6400", "$4500", "$5000"], h: "Use the simple interest formula: I = PRN", s: "$I = 10000 \\times 0.09 \\times 6 = 5400$", t: "Simple interest", c: "1A" },
  { id: 'q1b', q: "Find the simple interest payable on $3000 borrowed for 15 years at 6% p.a.", a: "$2700", opts: ["$2700", "$1800", "$4500", "$3000"], h: "Use the simple interest formula: I = PRN", s: "$I = 3000 \\times 0.06 \\times 15 = 2700$", t: "Simple interest", c: "1A" },
  { id: 'q1c', q: "Find the simple interest payable on $1500 borrowed for 40 years at 2.5% p.a.", a: "$1500", opts: ["$1500", "$3000", "$1200", "$1000"], h: "Use the simple interest formula: I = PRN", s: "$I = 1500 \\times 0.025 \\times 40 = 1500$", t: "Simple interest", c: "1A" },

  // Question 2: Find principal
  { id: 'q2a', q: "What principal will earn $1000 simple interest at 4% p.a. over five years?", a: "$5000", opts: ["$5000", "$4000", "$6000", "$2000"], h: "Rearrange the simple interest formula: P = I / (RN)", s: "$P = \\frac{1000}{0.04 \\times 5} = \\frac{1000}{0.2} = 5000$", t: "Simple interest", c: "1A" },
  { id: 'q2b', q: "What principal will earn $1000 simple interest at 10% p.a. over three years?", a: "$3333.33", opts: ["$3333.33", "$3000.00", "$3500.00", "$4000.00"], h: "Rearrange the simple interest formula: P = I / (RN)", s: "$P = \\frac{1000}{0.10 \\times 3} = \\frac{1000}{0.3} \\approx 3333.33$", t: "Simple interest", c: "1A" },
  { id: 'q2c', q: "What principal will earn $1000 simple interest at 6% p.a. over eight years?", a: "$2083.33", opts: ["$2083.33", "$2500.00", "$1800.00", "$2400.00"], h: "Rearrange the simple interest formula: P = I / (RN)", s: "$P = \\frac{1000}{0.06 \\times 8} = \\frac{1000}{0.48} = 2083.33$", t: "Simple interest", c: "1A" },
  { id: 'q2d', q: "What principal will earn $1000 simple interest at 2.5% p.a. over 10 years?", a: "$4000", opts: ["$4000", "$2500", "$5000", "$3000"], h: "Rearrange the simple interest formula: P = I / (RN)", s: "$P = \\frac{1000}{0.025 \\times 10} = \\frac{1000}{0.25} = 4000$", t: "Simple interest", c: "1A" },

  // Question 3: Find rate
  { id: 'q3a', q: "At what rate of simple interest will $10,000 grow to $14,000 over a five-year period?", a: "8%", opts: ["8%", "6%", "10%", "5%"], h: "First find the interest earned (I = A - P), then rearrange the formula: R = I / (PN)", s: "$I = 14000 - 10000 = 4000$. $R = \\frac{4000}{10000 \\times 5} = \\frac{4000}{50000} = 0.08 = 8\\%$", t: "Simple interest", c: "1A" },
  { id: 'q3b', q: "At what rate of simple interest will $8000 grow to $10,000 over a two-year period?", a: "12.5%", opts: ["12.5%", "10%", "15%", "8%"], h: "First find the interest earned (I = A - P), then rearrange the formula: R = I / (PN)", s: "$I = 10000 - 8000 = 2000$. $R = \\frac{2000}{8000 \\times 2} = \\frac{2000}{16000} = 0.125 = 12.5\\%$", t: "Simple interest", c: "1A" },
  { id: 'q3c', q: "At what rate of simple interest will $1500 grow to $2000 over a three-year period?", a: "11.11%", opts: ["11.11%", "9%", "12.5%", "15%"], h: "First find the interest earned (I = A - P), then rearrange the formula: R = I / (PN)", s: "$I = 2000 - 1500 = 500$. $R = \\frac{500}{1500 \\times 3} = \\frac{500}{4500} = \\frac{1}{9} \\approx 11.11\\%$", t: "Simple interest", c: "1A" },

  // Question 4: Word problem - rate
  { id: 'q4', q: "If a woman borrows $750 to buy a television and agrees to pay back $870 in one year's time, what annual rate of simple interest is she being charged?", a: "16%", opts: ["16%", "12%", "14%", "18%"], h: "Find the interest paid (870 - 750), then find the rate for 1 year.", s: "$I = 870 - 750 = 120$. $R = \\frac{120}{750 \\times 1} = 0.16 = 16\\%$", t: "Simple interest", c: "1A" },

  // Question 5: Word problem - monthly interest
  { id: 'q5', q: "An investor bought an antique table for $6000. He paid 5% as a deposit and borrowed the remainder from a bank for two years at 18% p.a. simple interest, payable monthly. How much interest does he have to pay each month?", a: "$85.50", opts: ["$85.50", "$90.00", "$80.00", "$102.60"], h: "Calculate the deposit, subtract it from the total to find the principal. Calculate total interest for 2 years, then divide by 24 for monthly payment.", s: "Deposit = $0.05 \\times 6000 = 300$. Principal = $6000 - 300 = 5700$. Total Interest = $5700 \\times 0.18 \\times 2 = 2052$. Monthly Interest = $\\frac{2052}{24} = 85.50$", t: "Simple interest", c: "1A" },

  // Question 6: Percentage changes
  { id: 'q6a', q: "Find the new value if 60 is increased by 10%.", a: "66", opts: ["66", "70", "60", "54"], h: "Multiply the original value by 1 + percentage/100.", s: "$60 \\times 1.10 = 66$", t: "Percentage increase and decrease", c: "1B" },
  { id: 'q6b', q: "Find the new value if 50 is increased by 150%.", a: "125", opts: ["125", "75", "100", "150"], h: "An increase of 150% means the new value is 250% of the original.", s: "$50 \\times 2.50 = 125$", t: "Percentage increase and decrease", c: "1B" },
  { id: 'q6c', q: "Find the new value if 80 is decreased by 20%.", a: "64", opts: ["64", "60", "72", "80"], h: "Multiply the original value by 1 - percentage/100.", s: "$80 \\times 0.80 = 64$", t: "Percentage increase and decrease", c: "1B" },
  { id: 'q6d', q: "Find the new value if 200 is increased by 12.5%.", a: "225", opts: ["225", "250", "212.5", "220"], h: "Multiply the original value by 1.125.", s: "$200 \\times 1.125 = 225$", t: "Percentage increase and decrease", c: "1B" },
  { id: 'q6e', q: "Find the new value if 400 is decreased by 2.5%.", a: "390", opts: ["390", "380", "395", "410"], h: "Multiply the original value by 1 - 0.025.", s: "$400 \\times (1 - 0.025) = 400 \\times 0.975 = 390$", t: "Percentage increase and decrease", c: "1B" },
  { id: 'q6f', q: "Find the new value if 312 is decreased by 5.25%.", a: "295.62", opts: ["295.62", "290.00", "296.40", "300.50"], h: "Multiply the original value by 1 - 0.0525.", s: "$312 \\times (1 - 0.0525) = 312 \\times 0.9475 = 295.62$", t: "Percentage increase and decrease", c: "1B" },

  // Question 7: Word problem - discount
  { id: 'q7', q: "A clothing store offers a 15% discount on all its summer stock. How much will I need to pay in total if I buy a shirt with a marked price of $35, a pair of shorts with a marked price of $25, and a cotton sweater with a marked price of $50?", a: "$93.50", opts: ["$93.50", "$110.00", "$95.00", "$85.50"], h: "Find the total marked price, then apply a 15% discount.", s: "Total marked price = $35 + 25 + 50 = 110$. Total after 15% discount = $110 \\times (1 - 0.15) = 110 \\times 0.85 = 93.50$", t: "Percentage increase and decrease", c: "1B" },

  // Question 8: Word problem - mark up
  { id: 'q8', q: "A general store adds 8% to the recommended retail price of all its stock due to transport costs. What will be the total charge if I buy a torch for $9.50, a tin of coffee for $11.30, and a hat for $42.00?", a: "$67.82", opts: ["$67.82", "$62.80", "$68.00", "$65.50"], h: "Find the total recommended retail price, then apply an 8% increase.", s: "Total retail price = $9.50 + 11.30 + 42.00 = 62.80$. Total after 8% increase = $62.80 \\times 1.08 = 67.824$. Rounded to the nearest cent, this is $67.82$", t: "Percentage increase and decrease", c: "1B" }
];

async function seed() {
  const collRef = db.collection('questions');
  
  // Only delete questions from these specific topics if they exist (optional cleanup, avoiding it to be safe)
  // Instead we just add them. We will add a 'batchId' to make it easy to track
  const batchId = 'y10-ch1-upload-' + Date.now();
  
  console.log(`Seeding ${questions.length} Year 10 Chapter 1 questions...`);
  const batchAdd = db.batch();
  
  questions.forEach((qData, index) => {
    const docRef = collRef.doc();
    
    // Create options with shuffling
    const shuffledOpts = qData.opts
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    
    const correctIndex = shuffledOpts.indexOf(qData.a);

    // Using topicCode to map to correct y10 topic ID
    const topicId = qData.c === '1A' ? 'y10-1a' : 'y10-1b';

    batchAdd.set(docRef, {
      chapterId: 'y10-1',
      chapterTitle: 'Chapter 1: Consumer arithmetic',
      topicId: topicId,
      topicCode: qData.c,
      topicTitle: qData.t,
      isManual: true,
      title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
      question: qData.q,
      difficulty: 'medium',
      timeLimit: 120,
      type: 'multiple_choice',
      options: shuffledOpts.map(o => ({ text: o, imageUrl: "" })),
      answer: correctIndex.toString(),
      hint: qData.h,
      solution: qData.s,
      batchId: batchId,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
  });

  await batchAdd.commit();
  console.log(`Successfully added ${questions.length} Year 10 Chapter 1 questions!`);
  process.exit();
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
