import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const filepath = path.resolve('src/constants/seedYear10Ch11AQuestions.js');
  const content = fs.readFileSync(filepath, 'utf8');
  let match = content.match(/export const Y10_CH11A_QUESTIONS = (\[[\s\S]*\]);\n$/);
  let questions = eval(match[1]);
  
  let parentUpdates = {};
  let updateCount = 0;

  for (let q of questions) {
    if (q.id === 'y10-11a-q11a') {
      q.solutionSteps = [
        {
          explanation: "Use the distance formula between the two points.",
          workingOut: "\\(d = \\sqrt{(9 - 3)^2 + (8 - 8)^2}\\)",
          graphData: null
        },
        {
          explanation: "Calculate the differences inside the square root.",
          workingOut: "\\(d = \\sqrt{6^2 + 0^2}\\)",
          graphData: null
        },
        {
          explanation: "Evaluate the final square root.",
          workingOut: "\\(d = 6\\)",
          graphData: null
        }
      ];
      
      const parentId = q.id.replace(/[a-z]$/, '');
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
      updateCount++;
    } else if (q.id === 'y10-11a-q11b') {
      q.solutionSteps = [
        {
          explanation: "Use the midpoint formula for the two points.",
          workingOut: "\\(M = \\left( \\frac{3 + 9}{2}, \\frac{8 + 8}{2} \\right)\\)",
          graphData: null
        },
        {
          explanation: "Calculate the sums inside the coordinates.",
          workingOut: "\\(M = \\left( \\frac{12}{2}, \\frac{16}{2} \\right)\\)",
          graphData: null
        },
        {
          explanation: "Simplify the fractions to get the final coordinate.",
          workingOut: "\\(M = (6, 8)\\)",
          graphData: null
        }
      ];
      
      const parentId = q.id.replace(/[a-z]$/, '');
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
      updateCount++;
    } else if (q.id === 'y10-11a-q11c') {
      q.solutionSteps = [
        {
          explanation: "Identify the centre of the circle from the midpoint found previously.",
          workingOut: "\\(\\text{Centre} = (6, 8)\\)",
          graphData: null
        },
        {
          explanation: "Identify the radius. The radius is half the diameter.",
          workingOut: "\\(r = \\frac{6}{2} = 3\\)",
          graphData: null
        },
        {
          explanation: "Substitute the centre and radius into the standard circle equation \\((x-h)^2 + (y-k)^2 = r^2\\).",
          workingOut: "\\((x - 6)^2 + (y - 8)^2 = 3^2\\)",
          graphData: null
        },
        {
          explanation: "Evaluate the radius squared.",
          workingOut: "\\((x - 6)^2 + (y - 8)^2 = 9\\)",
          graphData: null
        }
      ];
      
      const parentId = q.id.replace(/[a-z]$/, '');
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
      updateCount++;
    } else if (q.id === 'y10-11a-q12a') {
      q.solutionSteps = [
        {
          explanation: "Use the distance formula between the two points.",
          workingOut: "\\(d = \\sqrt{(7 - 1)^2 + (-3 - 5)^2}\\)",
          graphData: null
        },
        {
          explanation: "Calculate the differences inside the square root.",
          workingOut: "\\(d = \\sqrt{6^2 + (-8)^2}\\)",
          graphData: null
        },
        {
          explanation: "Square the differences and add them together.",
          workingOut: "\\(d = \\sqrt{36 + 64} = \\sqrt{100}\\)",
          graphData: null
        },
        {
          explanation: "Evaluate the final square root.",
          workingOut: "\\(d = 10\\)",
          graphData: null
        }
      ];
      
      const parentId = q.id.replace(/[a-z]$/, '');
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
      updateCount++;
    } else if (q.id === 'y10-11a-q12b') {
      q.solutionSteps = [
        {
          explanation: "Use the midpoint formula for the two points.",
          workingOut: "\\(M = \\left( \\frac{1 + 7}{2}, \\frac{5 + (-3)}{2} \\right)\\)",
          graphData: null
        },
        {
          explanation: "Calculate the sums inside the coordinates.",
          workingOut: "\\(M = \\left( \\frac{8}{2}, \\frac{2}{2} \\right)\\)",
          graphData: null
        },
        {
          explanation: "Simplify the fractions to get the final coordinate.",
          workingOut: "\\(M = (4, 1)\\)",
          graphData: null
        }
      ];
      
      const parentId = q.id.replace(/[a-z]$/, '');
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
      updateCount++;
    } else if (q.id === 'y10-11a-q12c') {
      q.solutionSteps = [
        {
          explanation: "Identify the centre of the circle from the midpoint found previously.",
          workingOut: "\\(\\text{Centre} = (4, 1)\\)",
          graphData: null
        },
        {
          explanation: "Identify the radius. The radius is half the diameter.",
          workingOut: "\\(r = \\frac{10}{2} = 5\\)",
          graphData: null
        },
        {
          explanation: "Substitute the centre and radius into the standard circle equation \\((x-h)^2 + (y-k)^2 = r^2\\).",
          workingOut: "\\((x - 4)^2 + (y - 1)^2 = 5^2\\)",
          graphData: null
        },
        {
          explanation: "Evaluate the radius squared.",
          workingOut: "\\((x - 4)^2 + (y - 1)^2 = 25\\)",
          graphData: null
        }
      ];
      
      const parentId = q.id.replace(/[a-z]$/, '');
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
      updateCount++;
    }
  }

  if (updateCount > 0) {
    const newFileContent = `export const Y10_CH11A_QUESTIONS = ` + JSON.stringify(questions, null, 2) + ";\n";
    fs.writeFileSync(filepath, newFileContent, 'utf8');
    console.log(`Updated ${updateCount} solutionSteps in JS file.`);
  }

  // Update parent docs in Firestore
  for (const [parentId, subQs] of Object.entries(parentUpdates)) {
    try {
      const parentRef = db.collection('questions').doc(parentId);
      const parentSnap = await parentRef.get();
      if (parentSnap.exists) {
        let parentData = parentSnap.data();
        let currentSubQs = parentData.subQuestions || [];
        for (let i = 0; i < currentSubQs.length; i++) {
          const newSq = subQs.find(s => s.id === currentSubQs[i].id);
          if (newSq) {
            currentSubQs[i].solutionSteps = newSq.solutionSteps;
          }
        }
        await parentRef.update({
          subQuestions: currentSubQs,
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log(`Successfully updated parent ${parentId} with subQuestions`);
      }
    } catch(e) {
      console.error(`Failed to update parent ${parentId}:`, e);
    }
  }
}

run().catch(console.error);
