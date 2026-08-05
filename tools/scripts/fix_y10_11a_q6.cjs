const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const ids = ['y10-11a-q6a', 'y10-11a-q6b', 'y10-11a-q6c', 'y10-11a-q6d', 'y10-11a-q6e', 'y10-11a-q6f'];
  
  const stepExplanations = [
    "Group the x and y terms and move the constant to the other side.",
    "Complete the square for both x and y by adding the square of half the coefficient to both sides.",
    "Rewrite as perfect squares and simplify the right-hand side.",
    "Identify the centre (h, k) and radius r from the standard circle equation \\\\((x-h)^2 + (y-k)^2 = r^2\\\\)."
  ];

  for (const id of ids) {
    const docRef = db.collection('questions').doc(id);
    const doc = await docRef.get();
    
    if (!doc.exists) continue;
    
    const data = doc.data();
    
    // 1. Clean solution steps
    const newSteps = data.solutionSteps.map((step, idx) => {
      return {
        ...step,
        explanation: stepExplanations[idx] || "Continue simplifying the expression."
      };
    });
    
    // 2. Generate good distractors
    // The correct answer is always at data.options[0].text
    const correctAns = data.options[0].text; // e.g. "Centre: (-3, -4), Radius: 4"
    
    const match = correctAns.match(/Centre: \(([-0-9.]+),\s*([-0-9.]+)\), Radius: ([-0-9.]+)/);
    let options = [];
    if (match) {
      const h = parseInt(match[1], 10);
      const k = parseInt(match[2], 10);
      const r = parseInt(match[3], 10);
      
      const o1 = correctAns;
      const o2 = 'Centre: (' + (-h) + ', ' + (-k) + '), Radius: ' + r;
      const o3 = 'Centre: (' + h + ', ' + k + '), Radius: ' + (r * r);
      const o4 = 'Centre: (' + (-h) + ', ' + (-k) + '), Radius: ' + (r * r);
      
      options = [o1, o2, o3, o4].map(text => ({ text, graphData: null }));
    } else {
      console.log('Regex match failed for', correctAns);
      continue;
    }
    
    await docRef.update({
      solutionSteps: newSteps,
      options: options,
      opts: options.map(o => o.text),
      answer: 0
    });
    console.log('Fixed', id);
  }
  process.exit(0);
}
run();
