const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Initialize Firebase
const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const SEED_FILE = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch16GQuestions.js';

// Helper to format solutions
function formatConversionSteps(question, targetValue, conversionRule, conversionCalculation, finalAnswer, pitfall) {
  return [
    {
      explanation: `Identify the units: We need to convert from ${question}.`,
      workingOut: `\\\\( ${conversionRule} \\\\)`,
      graphData: null
    },
    {
      explanation: `Conversion factor: Apply the conversion rule. ${pitfall}`,
      workingOut: `\\\\( ${conversionCalculation} \\\\)`,
      graphData: null
    },
    {
      explanation: `Calculate the final value carefully.`,
      workingOut: `\\\\( = ${targetValue} \\\\)`,
      graphData: null
    },
    {
      explanation: `Final Answer: State the final converted measurement with units.`,
      workingOut: `\\\\( ${finalAnswer} \\\\)`,
      graphData: null
    }
  ];
}

async function run() {
  let content = fs.readFileSync(SEED_FILE, 'utf8');
  
  // A mapping of specific updates for the 24 questions
  const updates = {
    'y9-16g-q1a': formatConversionSteps(
      'centimetres (cm) to metres (m)',
      '0.012',
      '1 \\\\text{ m} = 100 \\\\text{ cm}',
      '1.2 \\\\div 100',
      '0.012\\\\text{ m}',
      'When converting to a larger unit, you divide by the conversion factor.'
    ),
    'y9-16g-q1b': formatConversionSteps(
      'square metres (m\\\\(^2\\\\)) to square centimetres (cm\\\\(^2\\\\))',
      '2300',
      '1 \\\\text{ m}^2 = 100^2 \\\\text{ cm}^2 = 10\\\\,000 \\\\text{ cm}^2',
      '0.23 \\\\times 10\\\\,000',
      '2300\\\\text{ cm}^2',
      '**Pitfall:** 단위를 변환할 때 넓이는 길이 비율의 제곱(100²)을 곱해야 합니다! 100을 곱하는 실수를 주의하세요.'
    ),
    'y9-16g-q1c': formatConversionSteps(
      'square kilometres (km\\\\(^2\\\\)) to hectares (ha)',
      '55',
      '1 \\\\text{ km}^2 = 100 \\\\text{ ha}',
      '0.55 \\\\times 100',
      '55\\\\text{ ha}',
      '**Pitfall:** 1 hectare is 10,000 m². 1 km² contains exactly 100 hectares.'
    ),
    'y9-16g-q1d': formatConversionSteps(
      'cubic centimetres (cm\\\\(^3\\\\)) to cubic millimetres (mm\\\\(^3\\\\))',
      '350',
      '1 \\\\text{ cm}^3 = 10^3 \\\\text{ mm}^3 = 1000 \\\\text{ mm}^3',
      '0.35 \\\\times 1000',
      '350\\\\text{ mm}^3',
      '**Pitfall:** 부피 단위를 변환할 때는 길이 비율의 세제곱(10³)을 곱해야 합니다!'
    ),
    'y9-16g-q1e': formatConversionSteps(
      'cubic centimetres (cm\\\\(^3\\\\)) to litres (L)',
      '0.84',
      '1 \\\\text{ L} = 1000 \\\\text{ cm}^3',
      '840 \\\\div 1000',
      '0.84\\\\text{ L}',
      '**Pitfall:** 1 Litre is exactly equivalent to 1000 cubic centimetres.'
    ),
    // For the rest of q3 series, we'll apply a similar generator pattern in a moment.
  };

  // Add the q3 series
  const q3data = {
    'y9-16g-q3a': ['20 cm to mm', '200', '1 \\\\text{ cm} = 10 \\\\text{ mm}', '20 \\\\times 10', '200\\\\text{ mm}', 'Multiply by 10 to convert cm to mm.'],
    'y9-16g-q3b': ['1.2 km to m', '1200', '1 \\\\text{ km} = 1000 \\\\text{ m}', '1.2 \\\\times 1000', '1200\\\\text{ m}', 'Multiply by 1000 to convert km to m.'],
    'y9-16g-q3c': ['3200 mm to m', '3.2', '1 \\\\text{ m} = 1000 \\\\text{ mm}', '3200 \\\\div 1000', '3.2\\\\text{ m}', 'Divide by 1000 when going from mm to m.'],
    'y9-16g-q3d': ['5 ha to m\\\\(^2\\\\)', '50\\\\,000', '1 \\\\text{ ha} = 10\\\\,000 \\\\text{ m}^2', '5 \\\\times 10\\\\,000', '50\\\\,000\\\\text{ m}^2', '**Pitfall:** Hectares is an area unit! 1 ha = 10,000 m².'],
    'y9-16g-q3e': ['2000 cm\\\\(^2\\\\) to m\\\\(^2\\\\)', '0.2', '1 \\\\text{ m}^2 = 10\\\\,000 \\\\text{ cm}^2', '2000 \\\\div 10\\\\,000', '0.2\\\\text{ m}^2', '**Pitfall:** 넓이 변환 시 100이 아닌 100² (10,000)으로 나눠야 합니다.'],
    'y9-16g-q3f': ['3 cm\\\\(^2\\\\) to mm\\\\(^2\\\\)', '300', '1 \\\\text{ cm}^2 = 100 \\\\text{ mm}^2', '3 \\\\times 100', '300\\\\text{ mm}^2', '**Pitfall:** 넓이 변환 시 10이 아닌 10² (100)을 곱해야 합니다.'],
    'y9-16g-q3g': ['3.2 L to cm\\\\(^3\\\\)', '3200', '1 \\\\text{ L} = 1000 \\\\text{ cm}^3', '3.2 \\\\times 1000', '3200\\\\text{ cm}^3', '1 L is exactly 1000 cubic centimetres.'],
    'y9-16g-q3h': ['0.5 m\\\\(^3\\\\) to cm\\\\(^3\\\\)', '500\\\\,000', '1 \\\\text{ m}^3 = (100)^3 \\\\text{ cm}^3 = 1\\\\,000\\\\,000 \\\\text{ cm}^3', '0.5 \\\\times 1\\\\,000\\\\,000', '500\\\\,000\\\\text{ cm}^3', '**Pitfall:** 부피 변환 시 100이 아닌 100³ (1,000,000)을 곱해야 합니다.'],
    'y9-16g-q3i': ['2 m\\\\(^3\\\\) to L', '2000', '1 \\\\text{ m}^3 = 1000 \\\\text{ L}', '2 \\\\times 1000', '2000\\\\text{ L}', '**Pitfall:** 1 m³는 1 L가 아니라 1000 L (1 kL)입니다!'],
    'y9-16g-q3j': ['25,000 m\\\\(^2\\\\) to ha', '2.5', '10\\\\,000 \\\\text{ m}^2 = 1 \\\\text{ ha}', '25\\\\,000 \\\\div 10\\\\,000', '2.5\\\\text{ ha}', '**Pitfall:** 1 ha = 10,000 m² 이므로 10,000으로 나눠줍니다.']
  };

  for (let [k, v] of Object.entries(q3data)) {
    updates[k] = formatConversionSteps(...v);
  }

  // Complex geometry questions
  updates['y9-16g-q7a'] = [
    { explanation: "Identify the shapes: The grass forms a border around the netball court.", workingOut: "\\\\( \\\\text{Outer rectangle and inner rectangle} \\\\)", graphData: null },
    { explanation: "Calculate the outer dimensions by adding the 4 m border to both sides of the width and length. Then find its area.", workingOut: "\\\\( \\\\text{Outer Area} = (12 + 8) \\\\times (24 + 8) = 20 \\\\times 32 = 640 \\\\text{ m}^2 \\\\)", graphData: null },
    { explanation: "Find the inner area (court) and subtract it from the outer area to get the grass area.", workingOut: "\\\\( \\\\text{Inner Area} = 12 \\\\times 24 = 288 \\\\text{ m}^2 \\\\)", graphData: null },
    { explanation: "Final Answer: Subtract the inner area from the outer area. **Pitfall:** 테두리(border)의 넓이를 구할 때는 양쪽에 테두리가 추가된다는 점을 잊지 마세요 (+4가 아니라 +8).", workingOut: "\\\\( 640 - 288 = 352\\\\text{ m}^2 \\\\)", graphData: null }
  ];
  updates['y9-16g-q7b'] = [
    { explanation: "Identify the knowns: Grass Area = 352 m², Cost = $6.40 per m².", workingOut: "\\\\( \\\\text{Area} = 352 \\\\text{ m}^2 \\\\)", graphData: null },
    { explanation: "Set up the cost calculation. Multiply the total area by the cost per square metre.", workingOut: "\\\\( \\\\text{Cost} = 352 \\\\times 6.40 \\\\)", graphData: null },
    { explanation: "Calculate the total cost.", workingOut: "\\\\( = 2252.8 \\\\)", graphData: null },
    { explanation: "Final Answer: Format as currency.", workingOut: "\\\\( \\\\$2252.80 \\\\)", graphData: null }
  ];
  updates['y9-16g-q9b'] = [
    { explanation: "Identify the shapes: A rectangular path with depth. First find the path's area, then multiply by depth for volume.", workingOut: "\\\\( V = A \\\\times h \\\\)", graphData: null },
    { explanation: "Find the outer area (garden + path). Path is 1.2 m wide, so add 2.4 m to length and width. Find outer area and subtract inner area.", workingOut: "\\\\( A = (8+2.4)(3+2.4) - (8 \\\\times 3) = 10.4 \\\\times 5.4 - 24 = 32.16 \\\\text{ m}^2 \\\\)", graphData: null },
    { explanation: "Calculate the volume. Ensure depth is in metres (8 cm = 0.08 m).", workingOut: "\\\\( V = 32.16 \\\\times 0.08 \\\\)", graphData: null },
    { explanation: "Final Answer: State the final volume. **Pitfall:** 깊이 8 cm를 미터(m) 단위인 0.08 m로 반드시 변환한 후 부피를 구해야 합니다!", workingOut: "\\\\( 2.5728\\\\text{ m}^3 \\\\)", graphData: null }
  ];
  updates['y9-16g-q9c'] = [
    { explanation: "Identify knowns: Volume = 2.5728 m³, Cost = $75 per m³.", workingOut: "\\\\( \\\\text{Volume} = 2.5728 \\\\text{ m}^3 \\\\)", graphData: null },
    { explanation: "Set up the total cost calculation.", workingOut: "\\\\( \\\\text{Cost} = 2.5728 \\\\times 75 \\\\)", graphData: null },
    { explanation: "Perform the arithmetic.", workingOut: "\\\\( = 192.96 \\\\)", graphData: null },
    { explanation: "Final Answer: Format as currency.", workingOut: "\\\\( \\\\$192.96 \\\\)", graphData: null }
  ];
  updates['y9-16g-q10'] = [
    { explanation: "Identify shape and formula: Total surface area of a solid cylinder.", workingOut: "\\\\( S = 2\\\\pi r h + 2\\\\pi r^2 \\\\)", graphData: null },
    { explanation: "Substitute the given values (r = 5, h = 10).", workingOut: "\\\\( S = 2\\\\pi(5)(10) + 2\\\\pi(5)^2 \\\\)", graphData: null },
    { explanation: "Calculate the curved surface and the circular bases.", workingOut: "\\\\( S = 100\\\\pi + 50\\\\pi = 150\\\\pi \\\\)", graphData: null },
    { explanation: "Final Answer: Keep in terms of pi unless specified. **Pitfall:** 'Solid cylinder' means it is closed at both ends, so we MUST add 2πr² (both bases).", workingOut: "\\\\( 150\\\\pi\\\\text{ cm}^2 \\\\)", graphData: null }
  ];
  
  // Volume questions
  updates['y9-16g-q11a'] = [
    { explanation: "Identify the shape and formula: Prism volume = Area of base × height.", workingOut: "\\\\( V = A \\\\times h \\\\)", graphData: null },
    { explanation: "The front face (rectangular cross-section) is given. Identify the length of the prism (depth).", workingOut: "\\\\( A = 3 \\\\times 1.5 = 4.5 \\\\text{ m}^2, h = 5 \\\\text{ m} \\\\)", graphData: null },
    { explanation: "Calculate the volume.", workingOut: "\\\\( V = 4.5 \\\\times 5 \\\\)", graphData: null },
    { explanation: "Final Answer: State the final volume with units.", workingOut: "\\\\( 22.5\\\\text{ m}^3 \\\\)", graphData: null }
  ];
  updates['y9-16g-q11b'] = [
    { explanation: "Identify the shape: Prism with constant cross-sectional area.", workingOut: "\\\\( V = A \\\\times h \\\\)", graphData: null },
    { explanation: "Substitute the given base area (A) and the length (h).", workingOut: "\\\\( V = 30 \\\\times 2.6 \\\\)", graphData: null },
    { explanation: "Calculate the volume.", workingOut: "\\\\( V = 78 \\\\)", graphData: null },
    { explanation: "Final Answer: State the final volume with units. **Pitfall:** 기둥의 밑면은 꼭 바닥에 있는 면이 아닙니다. 단면의 넓이가 A입니다.", workingOut: "\\\\( 78\\\\text{ cm}^3 \\\\)", graphData: null }
  ];
  updates['y9-16g-q11c'] = [
    { explanation: "Identify the shape: Cylinder volume = Area of circular base × length.", workingOut: "\\\\( V = \\\\pi r^2 h \\\\)", graphData: null },
    { explanation: "Substitute the radius (2.6 cm) and length (11.2 cm).", workingOut: "\\\\( V = \\\\pi(2.6)^2 \\\\times 11.2 \\\\)", graphData: null },
    { explanation: "Calculate the numerical part.", workingOut: "\\\\( V = \\\\pi(6.76) \\\\times 11.2 = 75.712\\\\pi \\\\)", graphData: null },
    { explanation: "Final Answer: Provide the exact answer in terms of pi.", workingOut: "\\\\( 75.712\\\\pi\\\\text{ cm}^3 \\\\)", graphData: null }
  ];
  updates['y9-16g-q11d'] = [
    { explanation: "Identify the shape: Triangular prism.", workingOut: "\\\\( V = \\\\text{Area of triangle} \\\\times \\\\text{length} \\\\)", graphData: null },
    { explanation: "Calculate the area of the triangular cross-section (base).", workingOut: "\\\\( A = \\\\frac{1}{2}bh = \\\\frac{1}{2}(7)(6) = 21 \\\\text{ cm}^2 \\\\)", graphData: null },
    { explanation: "Multiply the triangular area by the length of the prism (25 cm).", workingOut: "\\\\( V = 21 \\\\times 25 \\\\)", graphData: null },
    { explanation: "Final Answer: State the volume. **Pitfall:** 기둥의 부피를 구할 때 곱하는 높이는 삼각형의 높이(6)가 아니라 기둥의 길이(25)입니다.", workingOut: "\\\\( 525\\\\text{ cm}^3 \\\\)", graphData: null }
  ];

  let totalUpdated = 0;

  // Process seed file using regex to replace the solutionSteps for each ID safely
  for (let [qid, steps] of Object.entries(updates)) {
    // We want to find the exact question object and replace its solutionSteps.
    // Since JSON parsing whole file and re-stringifying might lose exact formatting, 
    // we use a precise regex replacement or eval. Let's parse the file, update, and stringify cleanly.
    // Wait, the file is `export const Y9_CH16G_QUESTIONS = [...]`.
    // It's safer to just do string replacements for the specific steps if we can,
    // OR parse, update, and write back. Let's parse it!
  }
  
  // Better approach: Since seed files are JS, we can extract the array, modify it, and write it back.
  let jsonString = content.replace('export const Y9_CH16G_QUESTIONS = ', '').replace(/;\\s*$/, '');
  let questions;
  try {
    questions = new Function('return ' + jsonString)();
  } catch(e) {
    console.error("Failed to parse seed file", e);
    return;
  }

  // Update in memory
  for (let q of questions) {
    if (updates[q.id]) {
      q.solutionSteps = updates[q.id];
      totalUpdated++;
    }
  }

  // Write back to seed file
  const newFileContent = `export const Y9_CH16G_QUESTIONS = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(SEED_FILE, newFileContent, 'utf8');
  console.log(`Updated ${totalUpdated} questions in seed file.`);

  // Now safely update Firestore. 
  // We ONLY fetch the questions matching this topic. No full collection scan.
  const snapshot = await db.collection('questions').where('topicId', '==', 'y9-16g').get();
  console.log(`Fetched ${snapshot.docs.length} questions from Firestore for topic y9-16g.`);
  
  let dbUpdates = 0;
  for (let doc of snapshot.docs) {
    if (updates[doc.id]) {
      await db.collection('questions').doc(doc.id).update({ solutionSteps: updates[doc.id] });
      dbUpdates++;
    }
  }
  console.log(`Updated ${dbUpdates} questions in Firestore.`);

  process.exit(0);
}

run().catch(console.error);
