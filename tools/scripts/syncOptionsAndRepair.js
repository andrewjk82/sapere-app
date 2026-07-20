import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const correctMappings = {
  "0TELHarsFFU13m2DNF6Y": "\\(\\dfrac{7}{25}\\)",
  "38PInmr3psGdNl8YI52m": "\\(\\dfrac{1}{2}\\)",
  "51Nkihc8gW3a2RYyKjBQ": "\\(\\dfrac{5}{12}\\)",
  "5KwFGsMPBc7Oo88pQ0Ll": "\\(\\dfrac{37}{60}\\)",
  "6GflvMkAMvovOZ4n7nM4": "display: flex; flex-direction: column",
  "7J7OgW8VaiFJNEL3Qgn2": "\\(\\dfrac{1}{6}\\)",
  "FOkES2VjwC2ntqqGNa0x": "\\(\\dfrac{1}{4}\\)",
  "Gf9CKGC6heJZadwnswAO": "\\(\\dfrac{4}{11}\\)",
  "IT97K2p7zjP7f86oGoI6": "\\(\\dfrac{3}{4}\\)",
  "MTEjIJUs7ZhlB852KfpH": "\\(\\dfrac{1}{10}\\)",
  "MrB0aAU2IadXYB8myw3w": "\\(\\dfrac{4}{3}\\)",
  "YQgbl5UGoCn6ClF6y8yu": "\\(\\dfrac{5}{7}\\)",
  "ZzJKPsaxCQgEq7ByecGZ": "display: inline-grid; grid-template-columns: repeat(2, 14px)",
  "b88zApuCGfA8kPbosBzC": "\\(1\\)",
  "b8UlJSCUUJSxKNR5H5OL": "\\(\\dfrac{1}{4}\\)",
  "bArwNDmBod7ycDN4rNXk": "\\(\\dfrac{2}{5}\\)",
  "f5nbRDFPcKFMvhvDTSYZ": "\\(\\dfrac{2}{3}\\)",
  "lTA9xFFreaduZeiQseUA": "\\(\\dfrac{1}{2}\\)",
  "mmpLmudIE2YNEDqeD4dM": "\\(\\dfrac{5}{8}\\)",
  "nDNNDWnEFDG6V7PcUrQ5": "\\(\\dfrac{3}{4}\\)",
  "p6XjSnXfXf1HCnyr65YN": "\\(\\dfrac{9}{29}\\)",
  "vd0J3WTvJZUO9E1fno0J": "\\(\\dfrac{5}{8}\\)"
};

(async () => {
  try {
    console.log('[Sync & Repair] Fetching all questions from Firestore y7-4a...');
    const snap = await db.collection('questions').where('topicId', '==', 'y7-4a').get();
    console.log(`Found ${snap.size} questions.`);

    let fixedCount = 0;

    for (const doc of snap.docs) {
      const data = doc.data();
      const docId = doc.id;
      
      // 1. Sync options field with opts if opts exists (to replace old dollar signs)
      if (data.opts && Array.isArray(data.opts)) {
        let needsUpdate = false;
        const updatePayload = {};

        // Always ensure 'options' is identical to 'opts' for correct frontend rendering
        if (JSON.stringify(data.options) !== JSON.stringify(data.opts)) {
          updatePayload.options = data.opts;
          needsUpdate = true;
        }

        // 2. Identify the mathematical correct answer index
        const pattern = correctMappings[docId];
        if (pattern) {
          let correctIndex = -1;
          for (let i = 0; i < data.opts.length; i++) {
            if (data.opts[i].includes(pattern)) {
              correctIndex = i;
              break;
            }
          }

          if (correctIndex !== -1) {
            if (data.a !== correctIndex || data.answer !== correctIndex) {
              updatePayload.a = correctIndex;
              updatePayload.answer = correctIndex;
              needsUpdate = true;
            }
          } else {
            console.log(`[WARN] Pattern "${pattern}" not found in opts for ${docId}`);
          }
        }

        if (needsUpdate) {
          await doc.ref.update(updatePayload);
          console.log(`[SYNCED & FIXED] Doc ID: ${docId} -> options synced, answer/a set to ${updatePayload.answer ?? data.a}`);
          fixedCount++;
        }
      }
    }

    console.log(`\nSuccessfully fixed/synced ${fixedCount} documents.`);
    process.exit(0);
  } catch (err) {
    console.error('Error during Sync & Repair:', err);
    process.exit(1);
  }
})();
