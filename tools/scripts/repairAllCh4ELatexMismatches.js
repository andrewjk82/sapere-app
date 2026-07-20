import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const fixes = {
  "5cfEjrZwaBTZV1L8I6Qz": [
    { stepIdx: 2, workingOut: "\\(\\text{5th Term} = \\dfrac{16}{7} + \\dfrac{4}{7} = \\dfrac{20}{7} = 2\\dfrac{6}{7},\\; \\text{6th Term} = \\dfrac{20}{7} + \\dfrac{4}{7} = \\dfrac{24}{7} = 3\\dfrac{3}{7}\\)" },
    { stepIdx: 3, workingOut: "\\(\\text{7th Term} = \\dfrac{24}{7} + \\dfrac{4}{7} = \\dfrac{28}{7} = 4,\\; \\text{8th Term} = 4 + \\dfrac{4}{7} = 4\\dfrac{4}{7}\\)" }
  ],
  "7F5xuhRm5MJqtY0KzQrM": [
    { stepIdx: 1, workingOut: "\\(\\dfrac{7 \\times 3}{8 \\times 3} = \\dfrac{21}{24},\\; \\dfrac{2 \\times 8}{3 \\times 8} = \\dfrac{16}{24}\\)" }
  ],
  "BmEqdg4bQAdhhKCBbgDI": [
    { stepIdx: 1, workingOut: "\\(\\dfrac{4 \\times 3}{5 \\times 3} = \\dfrac{12}{15},\\; \\dfrac{1 \\times 5}{3 \\times 5} = \\dfrac{5}{15}\\)" }
  ],
  "Rjzg82G5aOIqxsyZS0Nc": [
    { stepIdx: 1, workingOut: "\\(\\dfrac{5 \\times 5}{6 \\times 5} = \\dfrac{25}{30},\\; \\dfrac{2 \\times 6}{5 \\times 6} = \\dfrac{12}{30}\\)" }
  ],
  "cG6laz4JS32Bdr28akxU": [
    { stepIdx: 1, workingOut: "\\(\\dfrac{1}{4} = \\dfrac{2}{8},\\; \\dfrac{1}{2} = \\dfrac{4}{8}\\)" }
  ],
  "ftWwrYjArCw6fClaS2V8": [
    { stepIdx: 1, workingOut: "\\(\\dfrac{2 \\times 3}{5 \\times 3} = \\dfrac{6}{15},\\; \\dfrac{1 \\times 5}{3 \\times 5} = \\dfrac{5}{15}\\)" }
  ],
  "gRve4iYJbdYrMPMTm9Wl": [
    { stepIdx: 1, workingOut: "\\(\\dfrac{3 \\times 5}{4 \\times 5} = \\dfrac{15}{20},\\; \\dfrac{2 \\times 4}{5 \\times 4} = \\dfrac{8}{20}\\)" }
  ],
  "mYqba6kHwhUgKn3ElPjP": [
    { stepIdx: 1, workingOut: "\\(\\dfrac{4 \\times 6}{5 \\times 6} = \\dfrac{24}{30},\\; \\dfrac{1 \\times 5}{6 \\times 5} = \\dfrac{5}{30}\\)" }
  ],
  "piIE2QiVsfv8XqM5KVou": [
    { stepIdx: 1, workingOut: "\\(\\dfrac{2 \\times 5}{7 \\times 5} = \\dfrac{10}{35},\\; \\dfrac{4 \\times 7}{5 \\times 7} = \\dfrac{28}{35}\\)" }
  ],
  "vKPCijs4Am7LsMmHcgG3": [
    { stepIdx: 1, workingOut: "\\(\\dfrac{3 \\times 7}{4 \\times 7} = \\dfrac{21}{28},\\; \\dfrac{2 \\times 4}{7 \\times 4} = \\dfrac{8}{28}\\)" }
  ]
};

(async () => {
  try {
    console.log('[Repair LaTeX] Correcting 11 mismatched LaTeX workingOut strings in topic y7-4e...');

    for (const [docId, stepFixes] of Object.entries(fixes)) {
      const ref = db.collection('questions').doc(docId);
      const doc = await ref.get();
      if (doc.exists) {
        const data = doc.data();
        if (data.solutionSteps) {
          stepFixes.forEach(fix => {
            if (data.solutionSteps[fix.stepIdx]) {
              data.solutionSteps[fix.stepIdx].workingOut = fix.workingOut;
            }
          });
          await ref.update({
            solutionSteps: data.solutionSteps
          });
          console.log(`  [FIXED LaTeX] Doc ID: ${docId}`);
        }
      }
    }

    console.log('\nAll 11 LaTeX repair procedures for 4E completed.');
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during LaTeX repair:', err);
    process.exit(1);
  }
})();
//
