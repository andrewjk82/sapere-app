import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Define correct answers in mathematical values for exact string comparison in opts
const correctMappings = {
  "0TELHarsFFU13m2DNF6Y": "\\(\\dfrac{7}{25}\\)",
  "38PInmr3psGdNl8YI52m": "\\(\\dfrac{1}{2}\\)",
  "51Nkihc8gW3a2RYyKjBQ": "\\(\\dfrac{5}{12}\\)",
  "5KwFGsMPBc7Oo88pQ0Ll": "\\(\\dfrac{37}{60}\\)",
  // HTML diagram
  "6GflvMkAMvovOZ4n7nM4": "display: flex; flex-direction: column", // unique subsegment of the correct HTML option
  "7J7OgW8VaiFJNEL3Qgn2": "\\(\\dfrac{1}{6}\\)",
  "FOkES2VjwC2ntqqGNa0x": "\\(\\dfrac{1}{4}\\)",
  "Gf9CKGC6heJZadwnswAO": "\\(\\dfrac{4}{11}\\)",
  "IT97K2p7zjP7f86oGoI6": "\\(\\dfrac{3}{4}\\)",
  "MTEjIJUs7ZhlB852KfpH": "\\(\\dfrac{1}{10}\\)",
  "MrB0aAU2IadXYB8myw3w": "\\(\\dfrac{4}{3}\\)",
  "YQgbl5UGoCn6ClF6y8yu": "\\(\\dfrac{5}{7}\\)",
  // HTML diagram (2x2 grid with 1 shaded)
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
    console.log('[Repair] Fetching y7-4a questions from Firestore...');
    const snap = await db.collection('questions').where('topicId', '==', 'y7-4a').get();
    
    let updatedCount = 0;

    for (const doc of snap.docs) {
      const docId = doc.id;
      const data = doc.data();
      const correctAnswerPattern = correctMappings[docId];

      if (correctAnswerPattern) {
        const opts = data.opts || [];
        let foundIndex = -1;

        // Search the opts array for the correct choice
        for (let i = 0; i < opts.length; i++) {
          if (opts[i].includes(correctAnswerPattern)) {
            foundIndex = i;
            break;
          }
        }

        if (foundIndex !== -1) {
          // If the stored indices 'a' or 'answer' do not match the mathematically correct index, fix them
          if (data.a !== foundIndex || data.answer !== foundIndex) {
            await doc.ref.update({
              a: foundIndex,
              answer: foundIndex
            });
            console.log(`  [FIXED] Doc ID: ${docId}`);
            console.log(`    Question: "${data.question.substring(0, 50)}..."`);
            console.log(`    Opts: ${JSON.stringify(opts)}`);
            console.log(`    Correct Answer Index identified: ${foundIndex} (Stored was: a=${data.a}, answer=${data.answer})`);
            console.log(`    Verification check: opts[${foundIndex}] = "${opts[foundIndex]}"`);
            updatedCount++;
          }
        } else {
          console.log(`  [ERROR] Correct answer pattern "${correctAnswerPattern}" not found in opts for Doc ID: ${docId}`);
        }
      }
    }

    console.log(`\nSuccessfully corrected and verified ${updatedCount} mismatch questions.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during repair:', err);
    process.exit(1);
  }
})();
//
