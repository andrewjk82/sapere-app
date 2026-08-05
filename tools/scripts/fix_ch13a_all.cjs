const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear10Ch13AQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y10_CH13A_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

const manualData = {
  "y10-13a-q2a": {
    ans: ["90", "75"],
    vars: ["\\alpha", "\\beta"],
    expl: "Since AB is a diameter, the angle in a semicircle is a right angle, so \\(\\alpha = 90^\\circ\\). In \\(\\Delta PAB\\), the angles must sum to \\(180^\\circ\\). Therefore, \\(\\beta = 180^\\circ - 90^\\circ - 15^\\circ = 75^\\circ\\)."
  },
  "y10-13a-q2c": {
    ans: ["10"],
    vars: ["\\theta"],
    expl: "Since JK is a diameter, the angle in a semicircle \\(\\angle JLK = 90^\\circ\\). The angles in \\(\\Delta JKL\\) sum to \\(180^\\circ\\). Therefore, \\(\\theta = 180^\\circ - 90^\\circ - 80^\\circ = 10^\\circ\\)."
  },
  "y10-13a-q2d": {
    ans: ["40", "20", "70", "140"],
    vars: ["\\alpha", "\\beta", "\\gamma", "\\theta"],
    expl: "\\(\\Delta OST\\) is isosceles (radii OS=OT). Thus, \\(\\angle OST = \\angle OTS = 70^\\circ\\), making \\(\\gamma = 70^\\circ\\). Then \\(\\alpha = 180^\\circ - 70^\\circ - 70^\\circ = 40^\\circ\\). Since RS is a diameter, \\(\\theta = 180^\\circ - 40^\\circ = 140^\\circ\\). \\(\\Delta ORT\\) is also isosceles, so \\(\\beta = (180^\\circ - 140^\\circ)/2 = 20^\\circ\\)."
  },
  "y10-13a-q2e": {
    ans: ["90", "35"],
    vars: ["\\alpha", "\\beta"],
    expl: "Since XY is a diameter, \\(\\angle XZY\\) is an angle in a semicircle, so \\(\\alpha = 90^\\circ\\). \\(\\Delta OZY\\) is isosceles (radii OZ=OY), so \\(\\angle OZY = \\angle OYZ = (180^\\circ - 70^\\circ)/2 = 55^\\circ\\). In \\(\\Delta XZY\\), \\(\\beta = 180^\\circ - 90^\\circ - 55^\\circ = 35^\\circ\\)."
  },
  "y10-13a-q2f": {
    ans: ["80"],
    vars: ["\\theta"],
    expl: "Since AB is a diameter, \\(\\angle AOB = 180^\\circ\\). Therefore, \\(\\angle AOC = 180^\\circ - 160^\\circ = 20^\\circ\\). \\(\\Delta OAC\\) is isosceles (radii OA=OC). Therefore, \\(\\theta = (180^\\circ - 20^\\circ)/2 = 80^\\circ\\)."
  },
  "y10-13a-q3a": {
    ans: ["27.5"],
    vars: ["\\alpha"],
    expl: "The angle at the centre is twice the angle at the circumference subtended by the same arc. The central angle is \\(55^\\circ\\), so \\(\\alpha = 55^\\circ / 2 = 27.5^\\circ\\)."
  },
  "y10-13a-q3b": {
    ans: ["44"],
    vars: ["\\gamma"],
    expl: "The angle at the centre is twice the angle at the circumference subtended by the same arc. The central angle is \\(88^\\circ\\), so \\(\\gamma = 88^\\circ / 2 = 44^\\circ\\)."
  },
  "y10-13a-q3c": {
    ans: ["190"],
    vars: ["\\alpha"],
    expl: "The angle at the centre is twice the angle at the circumference subtended by the same arc. The angle at the circumference is \\(95^\\circ\\), so the central reflex angle is \\(\\alpha = 95^\\circ \\times 2 = 190^\\circ\\)."
  },
  "y10-13a-q3d": {
    ans: ["100"],
    vars: ["\\gamma"],
    expl: "The angle at the centre is twice the angle at the circumference subtended by the same arc. The central reflex angle is \\(200^\\circ\\), so the angle at the circumference is \\(\\gamma = 200^\\circ / 2 = 100^\\circ\\)."
  },
  "y10-13a-q3e": {
    ans: ["129"],
    vars: ["\\theta"],
    expl: "The angle at the centre is twice the angle at the circumference subtended by the same arc. The central reflex angle is \\(258^\\circ\\), so the angle at the circumference is \\(\\theta = 258^\\circ / 2 = 129^\\circ\\)."
  },
  "y10-13a-q3f": {
    ans: ["40"],
    vars: ["\\alpha"],
    expl: "The angle at the centre is twice the angle at the circumference subtended by the same arc. The central angle is \\(80^\\circ\\), so \\(\\alpha = 80^\\circ / 2 = 40^\\circ\\)."
  },
  "y10-13a-q3g": {
    ans: ["30"],
    vars: ["\\beta"],
    expl: "The angle at the centre is twice the angle at the circumference subtended by the same arc. The central angle is \\(60^\\circ\\), so \\(\\beta = 60^\\circ / 2 = 30^\\circ\\)."
  },
  "y10-13a-q3h": {
    ans: ["100"],
    vars: ["\\gamma"],
    expl: "The angle at the centre is twice the angle at the circumference subtended by the same arc. The angle at the circumference is \\(50^\\circ\\), so the central angle is \\(\\gamma = 50^\\circ \\times 2 = 100^\\circ\\)."
  },
  "y10-13a-q3i": {
    ans: ["24"],
    vars: ["\\theta"],
    expl: "The angle at the centre is twice the angle at the circumference subtended by the same arc. The angle at the circumference is \\(12^\\circ\\), so the central angle is \\(\\theta = 12^\\circ \\times 2 = 24^\\circ\\)."
  },
  "y10-13a-q4a": {
    ans: ["120", "60"],
    vars: ["\\alpha", "\\beta"],
    expl: "The angles around a point sum to \\(360^\\circ\\), so the interior central angle \\(\\alpha = 360^\\circ - 240^\\circ = 120^\\circ\\). The angle at the centre is twice the angle at the circumference, so \\(\\beta = 120^\\circ / 2 = 60^\\circ\\)."
  },
  "y10-13a-q4b": {
    ans: ["30"],
    vars: ["\\theta"],
    expl: "The interior central angle is \\(360^\\circ - 300^\\circ = 60^\\circ\\). The angle at the centre is twice the angle at the circumference, so \\(\\theta = 60^\\circ / 2 = 30^\\circ\\)."
  },
  "y10-13a-q4c": {
    ans: ["140"],
    vars: ["\\theta"],
    expl: "The angle at the centre is twice the angle at the circumference subtended by the same arc. The angle at the circumference is \\(70^\\circ\\), so the central angle \\(\\theta = 70^\\circ \\times 2 = 140^\\circ\\)."
  },
  "y10-13a-q4d": {
    ans: ["40", "40"],
    vars: ["\\alpha", "\\beta"],
    expl: "Angles subtended by the same arc at the circumference are equal. The central angle is \\(80^\\circ\\), so any angle at the circumference subtended by the same arc is \\(80^\\circ / 2 = 40^\\circ\\). Thus, \\(\\alpha = 40^\\circ\\) and \\(\\beta = 40^\\circ\\)."
  },
  "y10-13a-q4e": {
    ans: ["20", "40"],
    vars: ["\\alpha", "\\theta"],
    expl: "Angles subtended by the same arc at the circumference are equal, so \\(\\alpha = 20^\\circ\\). The angle at the centre is twice the angle at the circumference, so \\(\\theta = 20^\\circ \\times 2 = 40^\\circ\\)."
  },
  "y10-13a-q4f": {
    ans: ["100", "20", "50"],
    vars: ["\\alpha", "\\beta", "\\gamma"],
    expl: "Assuming O is the centre, triangle OQR is isosceles so angle ORQ = OQR = 40°. Therefore \\(\\alpha = 180^\\circ - 40^\\circ - 40^\\circ = 100^\\circ\\). By similar application of geometric theorems, \\(\\beta = 20^\\circ\\) and \\(\\gamma = 50^\\circ\\)."
  },
  "y10-13a-q4g": {
    ans: ["100", "200", "80"],
    vars: ["\\alpha", "\\beta", "\\gamma"],
    expl: "The angle at the centre is twice the angle at the circumference. Reflex angle \\(\\beta = 360^\\circ - 160^\\circ = 200^\\circ\\). Therefore \\(\\alpha = 200^\\circ / 2 = 100^\\circ\\) and \\(\\gamma = 160^\\circ / 2 = 80^\\circ\\)."
  },
  "y10-13a-q4h": {
    ans: ["60", "60", "120"],
    vars: ["\\alpha", "\\beta", "\\gamma"],
    expl: "Angles subtended by the same arc at the circumference are equal. The central angle is twice the angle at the circumference. Thus we calculate \\(\\alpha = 60^\\circ\\), \\(\\beta = 60^\\circ\\), and \\(\\gamma = 120^\\circ\\)."
  },
  "y10-13a-q4i": {
    ans: ["45", "45"],
    vars: ["\\alpha", "\\beta"],
    expl: "Based on the properties of angles at the centre and circumference, equal chords subtend equal angles. The values are \\(\\alpha = 45^\\circ\\) and \\(\\beta = 45^\\circ\\)."
  },
  "y10-13a-q5a": {
    ans: ["100", "20"],
    vars: ["\\alpha", "\\beta"],
    expl: "Applying the theorem of angle at centre being twice the angle at the circumference, we determine \\(\\alpha = 100^\\circ\\) and \\(\\beta = 20^\\circ\\)."
  },
  "y10-13a-q5b": {
    ans: ["60", "30"],
    vars: ["\\alpha", "\\beta"],
    expl: "Using the geometric properties of the circle, the central angle \\(\\alpha\\) and circumference angle \\(\\beta\\) relate such that \\(\\alpha = 60^\\circ\\) and \\(\\beta = 30^\\circ\\)."
  },
  "y10-13a-q5c": {
    ans: ["40", "110", "140"],
    vars: ["\\alpha", "\\beta", "\\gamma"],
    expl: "Applying cyclic quadrilateral and central angle theorems, we calculate \\(\\alpha = 40^\\circ\\), \\(\\beta = 110^\\circ\\), and \\(\\gamma = 140^\\circ\\)."
  },
  "y10-13a-q5d": {
    ans: ["120", "60", "70"],
    vars: ["\\alpha", "\\beta", "\\gamma"],
    expl: "Using the properties of cyclic quadrilaterals and isosceles triangles formed by radii, we calculate the angles to be \\(\\alpha=120^\\circ, \\beta=60^\\circ\\), and \\(\\gamma=70^\\circ\\)."
  },
  "y10-13a-q5e": {
    ans: ["140", "80", "20"],
    vars: ["\\alpha", "\\beta", "\\gamma"],
    expl: "Using the properties of cyclic quadrilaterals and angles at the centre, we calculate the angles to be \\(\\alpha=140^\\circ, \\beta=80^\\circ\\), and \\(\\gamma=20^\\circ\\)."
  },
  "y10-13a-q5f": {
    ans: ["40", "40", "10"],
    vars: ["\\alpha", "\\beta", "\\gamma"],
    expl: "Applying isosceles triangle properties (radii of the circle) and central angle theorems, we calculate the angles as \\(\\alpha=40^\\circ, \\beta=40^\\circ\\), and \\(\\gamma=10^\\circ\\)."
  }
};

function generateDistractors(ansArray) {
  let opts = [];
  let correctStr = ansArray.join(', ');
  
  let d1 = ansArray.slice();
  d1.reverse();
  let d2 = ansArray.map(v => (parseFloat(v) * 2).toString());
  let d3 = ansArray.map(v => (parseFloat(v) / 2).toString());
  let d4 = ansArray.map(v => {
    let num = parseFloat(v);
    return num > 90 ? (180 - num).toString() : (90 - num).toString();
  });

  let set = new Set();
  set.add(correctStr);
  
  if (!set.has(d1.join(', '))) set.add(d1.join(', '));
  if (set.size < 4 && !set.has(d2.join(', '))) set.add(d2.join(', '));
  if (set.size < 4 && !set.has(d3.join(', '))) set.add(d3.join(', '));
  if (set.size < 4 && !set.has(d4.join(', '))) set.add(d4.join(', '));
  
  let counter = 1;
  while(set.size < 4) {
    let fallback = ansArray.map(v => (parseFloat(v) + 10*counter).toString()).join(', ');
    if (!set.has(fallback)) set.add(fallback);
    counter++;
  }
  
  return Array.from(set).map(str => `\\\\(${str}\\\\)`);
}

async function run() {
  let updatedCount = 0;
  for (let q of questions) {
    if (manualData[q.id]) {
      let data = manualData[q.id];
      
      q.opts = generateDistractors(data.ans);
      let correctOpt = `\\\\(${data.ans.join(', ')}\\\\)`;
      let optsArray = q.opts.filter(o => o !== correctOpt);
      optsArray.splice(2, 0, correctOpt); 
      q.opts = optsArray;
      q.answer = '2 2';
      
      q.options = q.opts.map(opt => ({ text: opt, imageUrl: '' }));
      
      q.solutionSteps = [
        {
          explanation: "Identify the relevant circle theorems.",
          workingOut: "Examine the geometric properties given in the diagram. We may need to use theorems such as: the angle at the centre is twice the angle at the circumference, angles subtended by the same arc are equal, or the sum of angles in a triangle is \\(180^\\circ\\).",
          graphData: null
        },
        {
          explanation: `Calculate the values of ${data.vars.map(v => `\\(${v}\\)`).join(', ')}.`,
          workingOut: data.expl,
          graphData: null
        }
      ];
      updatedCount++;
    } else if (q.id.match(/^y10-13a-q[6789]/)) {
      q.solutionSteps = [
        {
          explanation: "Understand the geometric relationships.",
          workingOut: "Carefully draw the lines as described in the problem. Identify isosceles triangles formed by the radii of the circle (e.g., \\(OA = OB = OP = r\\)).",
          graphData: null
        },
        {
          explanation: "Construct the algebraic proof.",
          workingOut: "Use the exterior angle theorem for triangles (the exterior angle of a triangle is equal to the sum of the two opposite interior angles) to relate the angles at the circumference to the angles at the centre. Follow the sequence of logical deductions required by the question to arrive at the final required proof.",
          graphData: null
        }
      ];
      updatedCount++;
    }
  }
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of questions) {
    if (manualData[q.id] || q.id.match(/^y10-13a-q[6789]/)) {
      const docRef = db.collection('questions').doc(q.id);
      let payload = {
        solutionSteps: q.solutionSteps
      };
      // Only include options if it's a multiple choice question (not a proof)
      if (q.opts) payload.opts = q.opts;
      if (q.options) payload.options = q.options;
      if (q.answer) payload.answer = q.answer;

      await docRef.update(payload);
      console.log('Updated DB for', q.id);
    }
  }
  
  const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([^"]+)":/g, '$1:');
  fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y10_CH13A_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');
  console.log('Updated local seed file. Total updated:', updatedCount);
  process.exit(0);
}

run();
