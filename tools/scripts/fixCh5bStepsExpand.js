import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  const updates = {
    // ==========================================
    // 1-step equations (y9-5b-q1a to q1r)
    // ==========================================
    'y9-5b-q1a': [
      { explanation: "Identify the operation on the variable \\(a\\). Since \\(3\\) is added to \\(a\\), subtract \\(3\\) from both sides to perform the inverse operation.", workingOut: "\\(a + 3 - 3 = 8 - 3\\)" },
      { explanation: "Simplify both sides to find the final value of \\(a\\).", workingOut: "\\(a = 5\\)" }
    ],
    'y9-5b-q1b': [
      { explanation: "Identify the operation on the variable \\(b\\). Since \\(5\\) is added to \\(b\\), subtract \\(5\\) from both sides to perform the inverse operation.", workingOut: "\\(b + 5 - 5 = 11 - 5\\)" },
      { explanation: "Simplify both sides to find the final value of \\(b\\).", workingOut: "\\(b = 6\\)" }
    ],
    'y9-5b-q1c': [
      { explanation: "Identify the operation on the variable \\(c\\). Since \\(4\\) is subtracted from \\(c\\), add \\(4\\) to both sides to perform the inverse operation.", workingOut: "\\(c - 4 + 4 = 12 + 4\\)" },
      { explanation: "Simplify both sides to find the final value of \\(c\\).", workingOut: "\\(c = 16\\)" }
    ],
    'y9-5b-q1d': [
      { explanation: "Identify the operation on the variable \\(d\\). Since \\(12\\) is subtracted from \\(d\\), add \\(12\\) to both sides to perform the inverse operation.", workingOut: "\\(d - 12 + 12 = 7 + 12\\)" },
      { explanation: "Simplify both sides to find the final value of \\(d\\).", workingOut: "\\(d = 19\\)" }
    ],
    'y9-5b-q1e': [
      { explanation: "Identify the operation on the variable \\(a\\). Since \\(a\\) is multiplied by \\(3\\), divide both sides by \\(3\\) to perform the inverse operation.", workingOut: "\\(\\frac{3a}{3} = \\frac{15}{3}\\)" },
      { explanation: "Simplify both sides to find the final value of \\(a\\).", workingOut: "\\(a = 5\\)" }
    ],
    'y9-5b-q1f': [
      { explanation: "Identify the operation on the variable \\(b\\). Since \\(b\\) is multiplied by \\(4\\), divide both sides by \\(4\\) to perform the inverse operation.", workingOut: "\\(\\frac{4b}{4} = \\frac{16}{4}\\)" },
      { explanation: "Simplify both sides to find the final value of \\(b\\).", workingOut: "\\(b = 4\\)" }
    ],
    'y9-5b-q1g': [
      { explanation: "Identify the operation on the variable \\(c\\). Since \\(c\\) is multiplied by \\(6\\), divide both sides by \\(6\\) to perform the inverse operation.", workingOut: "\\(\\frac{6c}{6} = \\frac{48}{6}\\)" },
      { explanation: "Simplify both sides to find the final value of \\(c\\).", workingOut: "\\(c = 8\\)" }
    ],
    'y9-5b-q1h': [
      { explanation: "Identify the operation on the variable \\(d\\). Since \\(d\\) is multiplied by \\(7\\), divide both sides by \\(7\\) to perform the inverse operation.", workingOut: "\\(\\frac{7d}{7} = \\frac{35}{7}\\)" },
      { explanation: "Simplify both sides to find the final value of \\(d\\).", workingOut: "\\(d = 5\\)" }
    ],
    'y9-5b-q1i': [
      { explanation: "Identify the operation on the variable \\(m\\). Since \\(m\\) is multiplied by \\(-4\\), divide both sides by \\(-4\\) to perform the inverse operation.", workingOut: "\\(\\frac{-4m}{-4} = \\frac{12}{-4}\\)" },
      { explanation: "Simplify both sides to find the final value of \\(m\\), noting that a positive number divided by a negative number yields a negative result.", workingOut: "\\(m = -3\\)" }
    ],
    'y9-5b-q1j': [
      { explanation: "Identify the operation on the variable \\(n\\). Since \\(n\\) is multiplied by \\(-3\\), divide both sides by \\(-3\\) to perform the inverse operation.", workingOut: "\\(\\frac{-3n}{-3} = \\frac{15}{-3}\\)" },
      { explanation: "Simplify both sides to find the final value of \\(n\\), noting that a positive number divided by a negative number yields a negative result.", workingOut: "\\(n = -5\\)" }
    ],
    'y9-5b-q1k': [
      { explanation: "Identify the operation on the variable \\(p\\). Since \\(p\\) is multiplied by \\(6\\), divide both sides by \\(6\\) to perform the inverse operation.", workingOut: "\\(\\frac{6p}{6} = \\frac{-18}{6}\\)" },
      { explanation: "Simplify both sides to find the final value of \\(p\\), noting that a negative number divided by a positive number yields a negative result.", workingOut: "\\(p = -3\\)" }
    ],
    'y9-5b-q1l': [
      { explanation: "Identify the operation on the variable \\(q\\). Since \\(q\\) is multiplied by \\(8\\), divide both sides by \\(8\\) to perform the inverse operation.", workingOut: "\\(\\frac{8q}{8} = \\frac{-32}{8}\\)" },
      { explanation: "Simplify both sides to find the final value of \\(q\\), noting that a negative number divided by a positive number yields a negative result.", workingOut: "\\(q = -4\\)" }
    ],
    'y9-5b-q1m': [
      { explanation: "Identify the operation on the variable \\(b\\). Since \\(6\\) is added to \\(b\\), subtract \\(6\\) from both sides to perform the inverse operation.", workingOut: "\\(b + 6 - 6 = 25.5 - 6\\)" },
      { explanation: "Simplify both sides to find the final decimal value of \\(b\\).", workingOut: "\\(b = 19.5\\)" }
    ],
    'y9-5b-q1n': [
      { explanation: "Identify the operation on the variable \\(a\\). Since \\(4\\) is added to \\(a\\), subtract \\(4\\) from both sides to perform the inverse operation.", workingOut: "\\(a + 4 - 4 = 12.25 - 4\\)" },
      { explanation: "Simplify both sides to find the final decimal value of \\(a\\).", workingOut: "\\(a = 8.25\\)" }
    ],
    'y9-5b-q1o': [
      { explanation: "Identify the operation on the variable \\(a\\). Since \\(a\\) is multiplied by \\(4\\), divide both sides by \\(4\\) (which is equivalent to multiplying the denominator by \\(4\\)).", workingOut: "\\(a = \\frac{2}{5 \\times 4}\\)" },
      { explanation: "Simplify the fraction by reducing it to its simplest form.", workingOut: "\\(a = \\frac{2}{20} = \\frac{1}{10}\\)" }
    ],
    'y9-5b-q1p': [
      { explanation: "Identify the operation on the variable \\(x\\). Since \\(5\\) is subtracted from \\(x\\), add \\(5\\) to both sides to perform the inverse operation.", workingOut: "\\(x - 5 + 5 = 6\\frac{1}{3} + 5\\)" },
      { explanation: "Simplify both sides to find the final mixed fraction value of \\(x\\).", workingOut: "\\(x = 11\\frac{1}{3}\\)" }
    ],
    'y9-5b-q1q': [
      { explanation: "Identify the operation on the variable \\(y\\). Since \\(y\\) is multiplied by \\(-3\\), divide both sides by \\(-3\\) (which is equivalent to multiplying the denominator by \\(-3\\)).", workingOut: "\\(y = \frac{6}{7 \\times (-3)}\\)" },
      { explanation: "Simplify the fraction and move the negative sign to the front.", workingOut: "\\(y = \\frac{6}{-21} = -\\frac{2}{7}\\)" }
    ],
    'y9-5b-q1r': [
      { explanation: "Identify the operation on the variable \\(x\\). Since \\(x\\) is multiplied by \\(3\\), divide both sides by \\(3\\) (which is equivalent to multiplying the denominator by \\(3\\)).", workingOut: "\\(x = -\\frac{4}{5 \\times 3}\\)" },
      { explanation: "Simplify the fraction to get the final result.", workingOut: "\\(x = -\\frac{4}{15}\\)" }
    ],

    // ==========================================
    // 2-step equations (y9-5b-q2a to q2l)
    // ==========================================
    'y9-5b-q2a': [
      { explanation: "First, isolate the variable term \\(3a\\) by performing the inverse operation on the constant term. Subtract \\(4\\) from both sides.", workingOut: "\\(3a + 4 - 4 = 10 - 4 \\implies 3a = 6\\)" },
      { explanation: "Next, isolate the variable \\(a\\) by dividing both sides by the coefficient \\(3\\).", workingOut: "\\(a = \\frac{6}{3} \\implies a = 2\\)" }
    ],
    'y9-5b-q2b': [
      { explanation: "First, isolate the variable term \\(2b\\) by performing the inverse operation on the constant term. Subtract \\(5\\) from both sides.", workingOut: "\\(2b + 5 - 5 = 17 - 5 \\implies 2b = 12\\)" },
      { explanation: "Next, isolate the variable \\(b\\) by dividing both sides by the coefficient \\(2\\).", workingOut: "\\(b = \\frac{12}{2} \\implies b = 6\\)" }
    ],
    'y9-5b-q2c': [
      { explanation: "First, isolate the variable term \\(4c\\) by performing the inverse operation on the constant term. Add \\(3\\) to both sides.", workingOut: "\\(4c - 3 + 3 = 17 + 3 \\implies 4c = 20\\)" },
      { explanation: "Next, isolate the variable \\(c\\) by dividing both sides by the coefficient \\(4\\).", workingOut: "\\(c = \\frac{20}{4} \\implies c = 5\\)" }
    ],
    'y9-5b-q2d': [
      { explanation: "First, isolate the variable term \\(6d\\) by performing the inverse operation on the constant term. Add \\(5\\) to both sides.", workingOut: "\\(6d - 5 + 5 = 25 + 5 \\implies 6d = 30\\)" },
      { explanation: "Next, isolate the variable \\(d\\) by dividing both sides by the coefficient \\(6\\).", workingOut: "\\(d = \\frac{30}{6} \\implies d = 5\\)" }
    ],
    'y9-5b-q2e': [
      { explanation: "First, isolate the variable term \\(4e\\) by performing the inverse operation on the constant term. Add \\(1\\) to both sides.", workingOut: "\\(4e - 1 + 1 = 19 + 1 \\implies 4e = 20\\)" },
      { explanation: "Next, isolate the variable \\(e\\) by dividing both sides by the coefficient \\(4\\).", workingOut: "\\(e = \\frac{20}{4} \\implies e = 5\\)" }
    ],
    'y9-5b-q2f': [
      { explanation: "First, isolate the variable term \\(5f\\) by performing the inverse operation on the constant term. Add \\(2\\) to both sides.", workingOut: "\\(5f - 2 + 2 = 18 + 2 \\implies 5f = 20\\)" },
      { explanation: "Next, isolate the variable \\(f\\) by dividing both sides by the coefficient \\(5\\).", workingOut: "\\(f = \\frac{20}{5} \\implies f = 4\\)" }
    ],
    'y9-5b-q2g': [
      { explanation: "First, isolate the variable term \\(2g\\) by performing the inverse operation on the constant term. Subtract \\(15\\) from both sides.", workingOut: "\\(2g + 15 - 15 = 7 - 15 \\implies 2g = -8\\)" },
      { explanation: "Next, isolate the variable \\(g\\) by dividing both sides by the coefficient \\(2\\).", workingOut: "\\(g = \\frac{-8}{2} \\implies g = -4\\)" }
    ],
    'y9-5b-q2h': [
      { explanation: "First, isolate the variable term \\(4h\\) by performing the inverse operation on the constant term. Subtract \\(23\\) from both sides.", workingOut: "\\(4h + 23 - 23 = 11 - 23 \\implies 4h = -12\\)" },
      { explanation: "Next, isolate the variable \\(h\\) by dividing both sides by the coefficient \\(4\\).", workingOut: "\\(h = \\frac{-12}{4} \\implies h = -3\\)" }
    ],
    'y9-5b-q2i': [
      { explanation: "First, isolate the variable term \\(5a\\) by performing the inverse operation on the constant term. Subtract \\(19\\) from both sides.", workingOut: "\\(5a + 19 - 19 = -1 - 19 \\implies 5a = -20\\)" },
      { explanation: "Next, isolate the variable \\(a\\) by dividing both sides by the coefficient \\(5\\).", workingOut: "\\(a = \\frac{-20}{5} \\implies a = -4\\)" }
    ],
    'y9-5b-q2j': [
      { explanation: "First, isolate the variable term \\(3a\\) by performing the inverse operation on the constant term. Subtract \\(25\\) from both sides.", workingOut: "\\(3a + 25 - 25 = -8 - 25 \\implies 3a = -33\\)" },
      { explanation: "Next, isolate the variable \\(a\\) by dividing both sides by the coefficient \\(3\\).", workingOut: "\\(a = \\frac{-33}{3} \\implies a = -11\\)" }
    ],
    'y9-5b-q2k': [
      { explanation: "First, isolate the variable term \\(4a\\) by performing the inverse operation on the constant term. Add \\(11\\) to both sides.", workingOut: "\\(4a - 11 + 11 = -27 + 11 \\implies 4a = -16\\)" },
      { explanation: "Next, isolate the variable \\(a\\) by dividing both sides by the coefficient \\(4\\).", workingOut: "\\(a = \\frac{-16}{4} \\implies a = -4\\)" }
    ],
    'y9-5b-q2l': [
      { explanation: "First, isolate the variable term \\(6b\\) by performing the inverse operation on the constant term. Add \\(13\\) to both sides.", workingOut: "\\(6b - 13 + 13 = -55 + 13 \\implies 6b = -42\\)" },
      { explanation: "Next, isolate the variable \\(b\\) by dividing both sides by the coefficient \\(6\\).", workingOut: "\\(b = \\frac{-42}{6} \\implies b = -7\\)" }
    ]
  };

  for (const [id, steps] of Object.entries(updates)) {
    console.log(`Expanding and wrapping solution steps in LaTeX for ${id}...`);
    const docRef = questionsCol.doc(id);
    batch.update(docRef, {
      solutionSteps: steps
    });
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed detailed step expansion and LaTeX wraps for all converted Year 9 Chapter 5b questions!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
