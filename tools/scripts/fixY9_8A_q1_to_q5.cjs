const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  function getQ1(text) {
    const match = text.match(/\\\((.*?)\^\{(.*?)\}\\\)/);
    if (!match) return null;
    const base = match[1];
    const index = match[2];
    
    let rawOpts = [
      { text: `Base: ${base}, Index: ${index}`, isCorrect: true },
      { text: `Base: ${index}, Index: ${base}`, isCorrect: false },
      { text: `Base: ${base}, Index: ${parseInt(base)*parseInt(index)}`, isCorrect: false },
      { text: `Base: ${parseInt(base)*parseInt(index)}, Index: ${index}`, isCorrect: false }
    ];
    // filter duplicates by Set
    const seen = new Set();
    let opts = [];
    for (let o of rawOpts) {
      if (!seen.has(o.text)) {
        seen.add(o.text);
        opts.push(o);
      }
    }
    while (opts.length < 4) {
      opts.push({ text: `Base: ${base}, Index: ${opts.length + 10}`, isCorrect: false });
    }
    opts = opts.slice(0, 4);

    const steps = [
      {
        explanation: 'In an expression written as a power (like \\(a^n\\)), the bottom number is called the **base**, and the small raised number is called the **index** (or exponent).',
        workingOut: '',
        graphData: null
      },
      {
        explanation: `Looking at \\(${base}^{${index}}\\), the large number on the bottom is the base.`,
        workingOut: `Base: ${base}`,
        graphData: null
      },
      {
        explanation: `The small raised number is the index.`,
        workingOut: `Index: ${index}`,
        graphData: null
      }
    ];
    return { opts, steps };
  }

  function getQ2(text) {
    const match = text.match(/Express \\\((.*?)\\\)/);
    if (!match) return null;
    const num = parseInt(match[1]);
    
    let p = 2;
    while (num % p !== 0) p++;
    let power = 0;
    let n = num;
    while(n % p === 0) { power++; n /= p; }
    
    let rawOpts = [
      { text: `\\(${p}^{${power}}\\)`, isCorrect: true },
      { text: `\\(${p}^{${power + 1}}\\)`, isCorrect: false },
      { text: `\\(${p + 1}^{${power}}\\)`, isCorrect: false },
      { text: `\\(${p}^{${power - 1 === 0 ? 2 : power - 1}}\\)`, isCorrect: false }
    ];
    const seen = new Set();
    let opts = [];
    for (let o of rawOpts) {
      if (!seen.has(o.text) && opts.length < 4) { seen.add(o.text); opts.push(o); }
    }
    
    const steps = [
      {
        explanation: `We need to find a prime number that multiplies by itself to give ${num}. Start by checking small primes like 2, 3, 5, etc.`,
        workingOut: '',
        graphData: null
      },
      {
        explanation: `Divide ${num} by ${p} repeatedly until you reach 1:`,
        workingOut: Array.from({length: power}, (_, i) => `${num / Math.pow(p, i)} / ${p} = ${num / Math.pow(p, i+1)}`).join('\n'),
        graphData: null
      },
      {
        explanation: `Since we divided by ${p} exactly ${power} times, we can write this as a power.`,
        workingOut: `\\(${p}^{${power}}\\)`,
        graphData: null
      }
    ];
    return { opts, steps };
  }

  function getQ3(text) {
    // Two formats: Evaluate \(3^{3}\) OR Evaluate \(2^{3} \times 3^{3}\)
    const match1 = text.match(/Evaluate \\\((.*?)\^\{(.*?)\}\\\)/);
    const match2 = text.match(/Evaluate \\\((.*?)\^\{(.*?)\} \\times (.*?)\^\{(.*?)\}\\\)/);
    
    let val = 0;
    let steps = [];
    
    if (match2) {
      const b1 = parseInt(match2[1]), p1 = parseInt(match2[2]);
      const b2 = parseInt(match2[3]), p2 = parseInt(match2[4]);
      val = Math.pow(b1, p1) * Math.pow(b2, p2);
      steps = [
        {
          explanation: 'First, evaluate each power separately. Remember that an index tells you how many times to multiply the base by itself.',
          workingOut: `\\(${b1}^{${p1}}\\) = ${Array(p1).fill(b1).join(' \\times ')} = ${Math.pow(b1, p1)}\n\\(${b2}^{${p2}}\\) = ${Array(p2).fill(b2).join(' \\times ')} = ${Math.pow(b2, p2)}`,
          graphData: null
        },
        {
          explanation: 'Now, multiply the two results together.',
          workingOut: `\\(${Math.pow(b1, p1)} \\times ${Math.pow(b2, p2)} = ${val}\\)`,
          graphData: null
        }
      ];
    } else if (match1) {
      const b1 = parseInt(match1[1]), p1 = parseInt(match1[2]);
      val = Math.pow(b1, p1);
      steps = [
        {
          explanation: `The index ${p1} tells us to multiply the base ${b1} by itself ${p1} times.`,
          workingOut: `\\(${b1}^{${p1}}\\) = ${Array(p1).fill(b1).join(' \\times ')}`,
          graphData: null
        },
        {
          explanation: 'Calculate the final value.',
          workingOut: `\\(= ${val}\\)`,
          graphData: null
        }
      ];
    }
    
    let rawOpts = [
      { text: `\\(${val}\\)`, isCorrect: true },
      { text: `\\(${val + 10}\\)`, isCorrect: false },
      { text: `\\(${val * 2}\\)`, isCorrect: false },
      { text: `\\(${val - 5}\\)`, isCorrect: false } // naive distractors for now, they are unique
    ];
    // if b1^p1 was parsed, let's add b1*p1 as a distractor
    if (match1 && !match2) {
       rawOpts[1] = { text: `\\(${parseInt(match1[1]) * parseInt(match1[2])}\\)`, isCorrect: false };
    }
    
    const seen = new Set();
    let opts = [];
    for (let o of rawOpts) {
      if (!seen.has(o.text) && opts.length < 4) { seen.add(o.text); opts.push(o); }
    }
    while (opts.length < 4) {
      opts.push({ text: `\\(${Math.floor(Math.random() * 100)}\\)`, isCorrect: false });
    }
    
    return { opts, steps };
  }

  function getQ4(text) {
    const match = text.match(/Express \\\((.*?)\\\)/);
    if (!match) return null;
    const num = parseInt(match[1]);
    
    // factorize
    let n = num;
    const factors = {};
    for (let i = 2; i <= n; i++) {
      while (n % i === 0) {
        factors[i] = (factors[i] || 0) + 1;
        n /= i;
      }
    }
    
    const buildLatex = (f) => {
      let parts = [];
      for (const k in f) {
        if (f[k] === 1) parts.push(k);
        else parts.push(`${k}^{${f[k]}}`);
      }
      return '\\(' + parts.join(' \\times ') + '\\)';
    };
    
    const correct = buildLatex(factors);
    
    // fake distractors
    const f2 = {...factors};
    const firstKey = Object.keys(f2)[0];
    f2[firstKey] = (f2[firstKey] || 1) + 1;
    const f3 = {...factors};
    if (f3[firstKey] > 1) f3[firstKey]--; else f3[firstKey] = 2;
    
    let rawOpts = [
      { text: correct, isCorrect: true },
      { text: buildLatex(f2), isCorrect: false },
      { text: buildLatex(f3), isCorrect: false },
      { text: `\\(${num}\\text{ (already prime)}\\)`, isCorrect: false }
    ];
    
    const seen = new Set();
    let opts = [];
    for (let o of rawOpts) {
      if (!seen.has(o.text) && opts.length < 4) { seen.add(o.text); opts.push(o); }
    }

    const steps = [
      {
        explanation: `To express ${num} as a product of prime factors, we can use a factor tree or repeated division by prime numbers (2, 3, 5, etc.).`,
        workingOut: '',
        graphData: null
      },
      {
        explanation: 'Divide by the smallest prime number repeatedly.',
        workingOut: Object.keys(factors).map(k => `${k} divides it ${factors[k]} times.`).join('\n'),
        graphData: null
      },
      {
        explanation: 'Combine the prime factors using index notation.',
        workingOut: correct,
        graphData: null
      }
    ];
    
    return { opts, steps };
  }

  function getQ5(text) {
    // Simplify: \(5n^{2} \times 3n^{4}\) or \(n^{5} \times n^{2}\)
    const match = text.match(/\\\((.*?)\\\)/);
    if (!match) return null;
    const expr = match[1].replace(/\\times/g, '*').replace(/\s/g, '');
    // Regex to match ax^b * cx^d
    // It could be just x^b * x^d
    const termRegex = /(?:(\d+)?([a-zA-Z])\^\{(\d+)\}|(\d+)?([a-zA-Z])\^(\d+))/g;
    let coeff = 1;
    let p = 0;
    let v = 'x';
    
    let m;
    while ((m = termRegex.exec(expr)) !== null) {
      // either match group 1,2,3 or 4,5,6
      const cStr = m[1] || m[4];
      const varStr = m[2] || m[5];
      const pStr = m[3] || m[6];
      
      if (cStr) coeff *= parseInt(cStr);
      if (varStr) v = varStr;
      if (pStr) p += parseInt(pStr);
    }
    
    const correct = `\\(${coeff === 1 ? '' : coeff}${v}^{${p}}\\)`;
    
    // distractors: multiply powers instead of add, add coeffs instead of mult, etc.
    // let's do a basic one
    const coeff2 = coeff === 1 ? 1 : coeff + 2;
    const pMult = 15; // fallback
    
    let rawOpts = [
      { text: correct, isCorrect: true },
      { text: `\\(${coeff === 1 ? '' : coeff}${v}^{${p + 2}}\\)`, isCorrect: false },
      { text: `\\(${coeff2 === 1 ? '' : coeff2}${v}^{${p}}\\)`, isCorrect: false },
      { text: `\\(${coeff === 1 ? '' : coeff}${v}^{${pMult}}\\)`, isCorrect: false }
    ];
    const seen = new Set();
    let opts = [];
    for (let o of rawOpts) {
      if (!seen.has(o.text) && opts.length < 4) { seen.add(o.text); opts.push(o); }
    }
    while (opts.length < 4) {
       opts.push({ text: `\\(${coeff}${v}^{100}\\)`, isCorrect: false });
    }

    const steps = [
      {
        explanation: 'When multiplying terms with the same base, we **multiply the numbers (coefficients)** in front, and **add the indices (powers)**.',
        workingOut: '',
        graphData: null
      },
      {
        explanation: 'Group the coefficients and the bases separately.',
        workingOut: 'Multiply the coefficients, and add the powers of ' + v + '.',
        graphData: null
      },
      {
        explanation: 'Write the final simplified term.',
        workingOut: correct,
        graphData: null
      }
    ];

    return { opts, steps };
  }

  const generators = {
    '1': getQ1,
    '2': getQ2,
    '3': getQ3,
    '4': getQ4,
    '5': getQ5
  };

  const idsToProcess = [];
  for (let i = 1; i <= 5; i++) {
    const letters = i === 5 ? 'abcdefghijkl' : 'abcdef';
    for (const char of letters) {
      idsToProcess.push({ id: 'y9-8a-' + i + char, qNum: String(i) });
    }
  }

  let updateCount = 0;
  for (const item of idsToProcess) {
    const docRef = db.collection('questions').doc(item.id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      const generator = generators[item.qNum];
      if (generator) {
        const result = generator(data.question);
        if (result) {
          const shuffledOpts = shuffle([...result.opts]);
          let answerIdx = 0;
          const mappedOpts = shuffledOpts.map((o, idx) => {
            if (o.isCorrect) answerIdx = idx;
            return { text: o.text, imageUrl: '' };
          });

          await docRef.update({
            type: 'multiple_choice',
            options: mappedOpts,
            answer: String(answerIdx),
            solutionSteps: result.steps,
            requiresManualGrading: FieldValue.delete(),
            updatedAt: FieldValue.serverTimestamp()
          });
          updateCount++;
        }
      }
    }
  }

  // Update parents
  for (let i = 1; i <= 5; i++) {
    const pRef = db.collection('questions').doc('y9-8a-' + i);
    const pSnap = await pRef.get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = pSnap.data().subQuestions.map(sq => {
        // since we updated directly, we need to sync to parent
        // it's easier to just do it via fetching from DB again, but we can't easily here without async in map
        return sq; // We will do a full sync pass below
      });
    }
  }
  
  for (let i = 1; i <= 5; i++) {
    const pRef = db.collection('questions').doc('y9-8a-' + i);
    const pSnap = await pRef.get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        if (cSnap.exists) {
          return {
            ...sq,
            type: cSnap.data().type,
            options: cSnap.data().options || sq.options,
            answer: cSnap.data().answer || sq.answer,
            solutionSteps: cSnap.data().solutionSteps || sq.solutionSteps
          };
        }
        return sq;
      }));
      await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('Updated', updateCount, 'subquestions for q1 to q5');
  process.exit(0);
}

run().catch(console.error);
