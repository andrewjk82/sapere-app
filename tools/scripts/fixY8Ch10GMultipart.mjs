import fs from 'fs';
import path from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';

const customSteps = {
  'y8-10g-q8a': [
    { explanation: "Identify the total pay and total hours.", workingOut: "\\text{Pay} = \\$192, \\quad \\text{Hours} = 8" },
    { explanation: "Divide the total pay by the number of hours.", workingOut: "\\frac{\\$192}{8}" },
    { explanation: "Perform the division.", workingOut: "24" },
    { explanation: "State the hourly rate.", workingOut: "\\text{The hourly rate is } \\$24." }
  ],
  'y8-10g-q8b': [
    { explanation: "Identify the hourly rate from the previous part.", workingOut: "\\text{Hourly rate} = \\$24\\text{/hour}" },
    { explanation: "Multiply the hourly rate by the new number of hours (12).", workingOut: "\\$24 \\times 12" },
    { explanation: "Perform the multiplication.", workingOut: "288" },
    { explanation: "State the final pay.", workingOut: "\\text{The pay for 12 hours is } \\$288." }
  ],
  'y8-10g-q10a': [
    { explanation: "Identify the unit cost.", workingOut: "\\text{Cost per kg} = \\$9.50" },
    { explanation: "Multiply the unit cost by the quantity (3.6 kg).", workingOut: "9.50 \\times 3.6" },
    { explanation: "Perform the multiplication.", workingOut: "34.20" },
    { explanation: "State the total cost.", workingOut: "\\text{The cost is } \\$34.20." }
  ],
  'y8-10g-q10b': [
    { explanation: "Identify the unit cost and total money available.", workingOut: "\\text{Unit cost} = \\$9.50, \\quad \\text{Total money} = \\$57" },
    { explanation: "Divide the total money by the unit cost.", workingOut: "\\frac{57}{9.50}" },
    { explanation: "Perform the division.", workingOut: "6" },
    { explanation: "State the quantity in kg.", workingOut: "\\text{You can buy } 6\\text{ kg}." }
  ],
  'y8-10g-q11a': [
    { explanation: "Write the quantities as a ratio, ensuring units match.", workingOut: "60\\text{ g} : 240\\text{ g}" },
    { explanation: "Find the HCF of 60 and 240, which is 60.", workingOut: "\\text{HCF} = 60" },
    { explanation: "Divide both sides by 60.", workingOut: "\\frac{60}{60} : \\frac{240}{60}" },
    { explanation: "State the simplified ratio.", workingOut: "1:4" }
  ],
  'y8-10g-q11b': [
    { explanation: "Write the quantities as a ratio. Convert kg to g so units match.", workingOut: "2\\text{ kg} = 2000\\text{ g}" },
    { explanation: "Set up the ratio.", workingOut: "800 : 2000" },
    { explanation: "Divide both sides by the HCF (400).", workingOut: "\\frac{800}{400} : \\frac{2000}{400}" },
    { explanation: "State the simplified ratio.", workingOut: "2:5" }
  ],
  'y8-10g-q16a': [
    { explanation: "Identify the scale.", workingOut: "\\text{Scale} = 1:200" },
    { explanation: "Identify the map length from the diagram (12 cm).", workingOut: "\\text{Map length} = 12\\text{ cm}" },
    { explanation: "Multiply by the scale factor and convert to metres.", workingOut: "12 \\times 200 = 2400\\text{ cm} = 24\\text{ m}" },
    { explanation: "State the real length.", workingOut: "24\\text{ m}" }
  ],
  'y8-10g-q16b': [
    { explanation: "Identify the scale.", workingOut: "\\text{Scale} = 1:200" },
    { explanation: "Identify the map width from the diagram (6 cm).", workingOut: "\\text{Map width} = 6\\text{ cm}" },
    { explanation: "Multiply by the scale factor and convert to metres.", workingOut: "6 \\times 200 = 1200\\text{ cm} = 12\\text{ m}" },
    { explanation: "State the real width.", workingOut: "12\\text{ m}" }
  ],
  'y8-10g-q16c': [
    { explanation: "Identify the scale.", workingOut: "\\text{Scale} = 1:200" },
    { explanation: "Identify the map distance from the diagram (3.2 cm).", workingOut: "\\text{Map distance} = 3.2\\text{ cm}" },
    { explanation: "Multiply by the scale factor and convert to metres.", workingOut: "3.2 \\times 200 = 640\\text{ cm} = 6.4\\text{ m}" },
    { explanation: "State the real distance.", workingOut: "6.4\\text{ m}" }
  ],
  'y8-10g-q16d': [
    { explanation: "Identify the real length and width calculated previously.", workingOut: "\\text{Length} = 24\\text{ m}, \\quad \\text{Width} = 12\\text{ m}" },
    { explanation: "Use the area formula for a rectangle: Area = Length × Width.", workingOut: "\\text{Area} = 24 \\times 12" },
    { explanation: "Perform the multiplication.", workingOut: "288" },
    { explanation: "State the real area.", workingOut: "288\\text{ m}^2" }
  ],
  'y8-10g-q16e': [
    { explanation: "Identify the scale.", workingOut: "\\text{Scale} = 1:200" },
    { explanation: "Identify the map distance from the diagram (0.5 cm).", workingOut: "\\text{Map distance} = 0.5\\text{ cm}" },
    { explanation: "Multiply by the scale factor and convert to metres.", workingOut: "0.5 \\times 200 = 100\\text{ cm} = 1\\text{ m}" },
    { explanation: "State the real distance.", workingOut: "1\\text{ m}" }
  ],
  'y8-10g-q17a': [
    { explanation: "Write the scale with matching units.", workingOut: "4\\text{ cm} : 96\\text{ cm}" },
    { explanation: "Remove the units to form a ratio.", workingOut: "4 : 96" },
    { explanation: "Divide both sides by the HCF (4).", workingOut: "\\frac{4}{4} : \\frac{96}{4}" },
    { explanation: "State the simplified ratio.", workingOut: "1:24" }
  ],
  'y8-10g-q17b': [
    { explanation: "Convert 0.2 m to cm to match units.", workingOut: "0.2\\text{ m} = 20\\text{ cm}" },
    { explanation: "Write the scale ratio.", workingOut: "5\\text{ cm} : 20\\text{ cm} \\rightarrow 5 : 20" },
    { explanation: "Divide both sides by the HCF (5).", workingOut: "\\frac{5}{5} : \\frac{20}{5}" },
    { explanation: "State the simplified ratio.", workingOut: "1:4" }
  ],
  'y8-10g-q17c': [
    { explanation: "Convert 8 cm to mm to match units.", workingOut: "8\\text{ cm} = 80\\text{ mm}" },
    { explanation: "Write the scale ratio.", workingOut: "80\\text{ mm} : 20\\text{ mm} \\rightarrow 80 : 20" },
    { explanation: "Divide both sides by the HCF (20).", workingOut: "\\frac{80}{20} : \\frac{20}{20}" },
    { explanation: "State the simplified ratio.", workingOut: "4:1" }
  ],
  'y8-10g-q17d': [
    { explanation: "Convert 5 km to cm to match units.", workingOut: "5\\text{ km} = 5000\\text{ m} = 500,000\\text{ cm}" },
    { explanation: "Write the scale ratio.", workingOut: "25\\text{ cm} : 500,000\\text{ cm} \\rightarrow 25 : 500,000" },
    { explanation: "Divide both sides by the HCF (25).", workingOut: "\\frac{25}{25} : \\frac{500,000}{25}" },
    { explanation: "State the simplified ratio.", workingOut: "1:20000" }
  ],
  'y8-10g-q18a': [
    { explanation: "Identify the scale ratio.", workingOut: "5 : 8" },
    { explanation: "This means 5 cm on the map represents 8 cm in reality.", workingOut: "5\\text{ cm} : 8\\text{ cm}" },
    { explanation: "Divide by 5 to find what 1 cm represents.", workingOut: "1\\text{ cm} : \\frac{8}{5}\\text{ cm}" },
    { explanation: "Calculate the result.", workingOut: "1\\text{ cm} : 1.6\\text{ cm}" }
  ],
  'y8-10g-q18b': [
    { explanation: "Identify the scale from the previous part.", workingOut: "1\\text{ cm} : 1.6\\text{ cm}" },
    { explanation: "Convert 1.6 cm to mm.", workingOut: "1.6 \\times 10 = 16\\text{ mm}" },
    { explanation: "Write the new ratio.", workingOut: "1\\text{ cm} : 16\\text{ mm}" },
    { explanation: "State the final missing value.", workingOut: "16" }
  ],
  'y8-10g-q18c': [
    { explanation: "Identify the scale from part a.", workingOut: "1\\text{ cm} : 1.6\\text{ cm}" },
    { explanation: "Convert 1.6 cm to metres.", workingOut: "1.6 \\div 100 = 0.016\\text{ m}" },
    { explanation: "Write the new ratio.", workingOut: "1\\text{ cm} : 0.016\\text{ m}" },
    { explanation: "State the final missing value.", workingOut: "0.016" }
  ],
  'y8-10g-q22a': [
    { explanation: "Calculate Ava's walking speed.", workingOut: "\\text{Speed} = \\frac{18\\text{ km}}{4\\text{ h}} = 4.5\\text{ km/h}" },
    { explanation: "Use the formula Distance = Speed × Time.", workingOut: "\\text{Distance} = 4.5 \\times 1" },
    { explanation: "Calculate the distance.", workingOut: "4.5" },
    { explanation: "State the final answer.", workingOut: "\\text{She will walk } 4.5\\text{ km}." }
  ],
  'y8-10g-q22b': [
    { explanation: "Identify Ava's speed from part a.", workingOut: "\\text{Speed} = 4.5\\text{ km/h}" },
    { explanation: "Use the formula Distance = Speed × Time.", workingOut: "\\text{Distance} = 4.5 \\times 3" },
    { explanation: "Calculate the distance.", workingOut: "13.5" },
    { explanation: "State the final answer.", workingOut: "\\text{She will walk } 13.5\\text{ km}." }
  ],
  'y8-10g-q22c': [
    { explanation: "Identify Ava's speed from part a.", workingOut: "\\text{Speed} = 4.5\\text{ km/h}" },
    { explanation: "Use the formula Distance = Speed × Time.", workingOut: "\\text{Distance} = 4.5 \\times 5" },
    { explanation: "Calculate the distance.", workingOut: "22.5" },
    { explanation: "State the final answer.", workingOut: "\\text{She will walk } 22.5\\text{ km}." }
  ],
  'y8-10g-q25a': [
    { explanation: "Convert the train time to minutes.", workingOut: "\\frac{3}{4}\\text{ hour} = \\frac{3}{4} \\times 60 = 45\\text{ minutes}" },
    { explanation: "Identify the cycling time.", workingOut: "\\text{Cycle time} = 45\\text{ minutes}" },
    { explanation: "Add the times together.", workingOut: "45 + 45 = 90" },
    { explanation: "State the total time.", workingOut: "90\\text{ minutes}" }
  ],
  'y8-10g-q25b': [
    { explanation: "Identify the train distance and time in hours.", workingOut: "\\text{Distance} = 45\\text{ km}, \\quad \\text{Time} = \\frac{3}{4}\\text{ h} = 0.75\\text{ h}" },
    { explanation: "Use the speed formula: Speed = Distance / Time.", workingOut: "\\text{Speed} = \\frac{45}{0.75}" },
    { explanation: "Calculate the speed.", workingOut: "60" },
    { explanation: "State the average speed.", workingOut: "60\\text{ km/h}" }
  ],
  'y8-10g-q25c': [
    { explanation: "Identify the bike distance and time in hours.", workingOut: "\\text{Distance} = 15\\text{ km}, \\quad \\text{Time} = 45\\text{ mins} = 0.75\\text{ h}" },
    { explanation: "Use the speed formula: Speed = Distance / Time.", workingOut: "\\text{Speed} = \\frac{15}{0.75}" },
    { explanation: "Calculate the speed.", workingOut: "20" },
    { explanation: "State the average speed.", workingOut: "20\\text{ km/h}" }
  ],
  'y8-10g-q25d': [
    { explanation: "Find the total distance and total time.", workingOut: "\\text{Total Dist} = 45 + 15 = 60\\text{ km}, \\quad \\text{Total Time} = 0.75 + 0.75 = 1.5\\text{ h}" },
    { explanation: "Use the average speed formula: Total Distance / Total Time.", workingOut: "\\text{Average Speed} = \\frac{60}{1.5}" },
    { explanation: "Calculate the average speed.", workingOut: "40" },
    { explanation: "State the average speed.", workingOut: "40\\text{ km/h}" }
  ]
};

async function run() {
  const filepath = path.resolve('src/constants/seedYear8Ch10GQuestions.js');
  const { Y8_CH10G_QUESTIONS } = await import('../../src/constants/seedYear8Ch10GQuestions.js');
  
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  let parentUpdates = {};

  for (let q of Y8_CH10G_QUESTIONS) {
    if (customSteps[q.id]) {
      // Clean up the question text
      q.question = q.question.replace(/[\s\S]*?[a-z]\)\s*/, ''); // removes parent text + "a) "
      q.question = q.question.replace(/\s*\(Enter the number.*?\)/, ''); // removes UI hint

      // Overwrite steps
      q.solutionSteps = customSteps[q.id];

      // Prepare parent document grouping
      const parentId = q.id.replace(/[a-z]$/, '');
      if (!parentUpdates[parentId]) parentUpdates[parentId] = [];
      parentUpdates[parentId].push(q);
    }
  }

  // Write local file
  const fileContent = "export const Y8_CH10G_QUESTIONS = " + JSON.stringify(Y8_CH10G_QUESTIONS, null, 2) + ";\n";
  fs.writeFileSync(filepath, fileContent, 'utf8');

  // Push updates to Firestore
  for (const [parentId, subQuestions] of Object.entries(parentUpdates)) {
    // 1. Update each sub-question individually in Firestore (if they exist as standalone docs)
    for (let sq of subQuestions) {
      const updateData = {
        question: sq.question,
        solutionSteps: sq.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      };
      await db.collection('questions').doc(sq.id).update(updateData).catch(e => console.log(`Doc ${sq.id} not found standalone, skipping.`));
    }

    // 2. Update the parent document
    try {
      const parentRef = db.collection('questions').doc(parentId);
      const parentSnap = await parentRef.get();
      if (parentSnap.exists) {
        let parentData = parentSnap.data();
        let currentSubQs = parentData.subQuestions || [];
        
        // Merge the clean sub-questions into the parent's array
        let newSubQs = currentSubQs.map(oldSq => {
          const newSq = subQuestions.find(s => s.id === oldSq.id);
          if (newSq) {
            const updatedSq = {
              ...oldSq,
              question: newSq.question,
              solutionSteps: newSq.solutionSteps,
              options: newSq.options || oldSq.options, // keep existing good options
              isManual: false,
              type: 'multiple_choice'
            };
            delete updatedSq.opts;
            return updatedSq;
          }
          return oldSq;
        });

        // Strip UI hints from parent question just in case
        let cleanParentQ = parentData.question || "";
        cleanParentQ = cleanParentQ.replace(/\s*Answer the following sub-questions\./, '');
        cleanParentQ = cleanParentQ.replace(/\s*Answer the sub-questions below\./, '');
        cleanParentQ = cleanParentQ.replace(/\s*Refer to the given plan measurements on the diagram and answer the sub-questions below\./, '');

        await parentRef.update({
          question: cleanParentQ,
          subQuestions: newSubQs,
          isManual: false,
          solutionSteps: [], // Clear parent solution steps
          updatedAt: FieldValue.serverTimestamp()
        });
        console.log(`Updated parent document ${parentId} successfully.`);
      }
    } catch (e) {
      console.error(`Failed to update parent ${parentId}:`, e);
    }
  }

  console.log(`Successfully completed Multipart UI fix for 25 questions.`);
}
run().catch(console.error);
