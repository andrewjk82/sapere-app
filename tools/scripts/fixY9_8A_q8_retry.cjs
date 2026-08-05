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

  function getQ8(text) {
    const match = text.match(/\\frac\{(.*?)\}\{(.*?)\}/);
    if (!match) return null;
    
    // A much safer way to extract 20a^7b^7
    // Just find numbers at the start, and then find each variable with its power
    const extractTerm = (str) => {
       const clean = str.replace(/[{}]/g, ''); // 20a^7b^7
       let c = 1;
       const cMatch = clean.match(/^(\d+)/);
       if (cMatch) c = parseInt(cMatch[1]);
       
       const vars = [];
       const regex = /([a-zA-Z])(?:\^(\d+))?/g;
       let m;
       while ((m = regex.exec(clean)) !== null) {
          vars.push({ v: m[1], p: parseInt(m[2] || 1) });
       }
       return { c, vars };
    };

    const num = extractTerm(match[1]);
    const den = extractTerm(match[2]);

    const coeff = num.c / den.c;
    
    // we assume num.vars[0] and den.vars[0] correspond, same for [1]
    const v1 = num.vars[0].v;
    const p1 = num.vars[0].p - den.vars[0].p;
    
    const v2 = num.vars[1].v;
    const p2 = num.vars[1].p - den.vars[1].p;
    
    const correct = `\\(${coeff === 1 ? '' : coeff}${v1}^{${p1}}${v2}^{${p2}}\\)`;

    let rawOpts = [
      { text: correct, isCorrect: true },
      { text: `\\(${coeff === 1 ? '' : coeff}${v1}^{${num.vars[0].p + den.vars[0].p}}${v2}^{${num.vars[1].p + den.vars[1].p}}\\)`, isCorrect: false },
      { text: `\\(${num.c - den.c === 1 ? '' : num.c - den.c}${v1}^{${p1}}${v2}^{${p2}}\\)`, isCorrect: false },
      { text: `\\(${coeff === 1 ? '' : coeff}${v1}^{${p1}}${v2}^{${num.vars[1].p + den.vars[1].p}}\\)`, isCorrect: false }
    ];
    
    const seen = new Set(); let opts = [];
    for (let o of rawOpts) { if (!seen.has(o.text) && opts.length < 4) { seen.add(o.text); opts.push(o); } }
    while(opts.length < 4) opts.push({ text: `\\(2${v1}^{10}${v2}^{10}\\)`, isCorrect: false });

    return {
      opts,
      steps: [
        { explanation: 'For a fraction with variables, divide the numbers first, then apply the division index law (subtract the powers) for each matching variable.', workingOut: '', graphData: null },
        { explanation: `Divide the numbers: ${num.c} ÷ ${den.c}. Subtract the powers for ${v1} and ${v2}.`, workingOut: `\\( ${num.c} / ${den.c} = ${coeff} \\)\n\\( ${num.vars[0].p} - ${den.vars[0].p} = ${p1} \\)\n\\( ${num.vars[1].p} - ${den.vars[1].p} = ${p2} \\)`, graphData: null },
        { explanation: 'Write out the final term.', workingOut: correct, graphData: null }
      ]
    };
  }


  const idsToProcess = [];
  for (const char of 'abcdefgh') {
      idsToProcess.push({ id: 'y9-8a-8' + char, qNum: '8' });
  }

  let updateCount = 0;
  for (const item of idsToProcess) {
    const docRef = db.collection('questions').doc(item.id);
    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      try {
        const result = getQ8(data.question);
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
      } catch(e) {
         console.log(item.id, e.message);
      }
    }
  }
  
  const pRef = db.collection('questions').doc('y9-8a-8');
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

  console.log('Updated', updateCount, 'subquestions for q8');
  process.exit(0);
}

run().catch(console.error);
