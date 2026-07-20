import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Standard questions to update directly
const targets = {
  "4uVhKtVz1aX0GaZ3lWKP": {
    opts: ["\\(\\dfrac{1}{2}\\)", "\\(-2\\)", "\\(2\\)", "\\(3\\)"],
    a: 2
  },
  "P77Io4HuFCespqUjOJSj": {
    opts: ["\\(0.5\\)", "\\(-2\\)", "\\(2\\)", "\\(-0.5\\)"],
    a: 3
  },
  "Q0PtYieRt8KDwinU7HQi": {
    opts: ["\\(3\\)", "\\(-3\\)", "\\(-\\dfrac{1}{3}\\)", "\\(\\dfrac{1}{3}\\)"],
    a: 1
  },
  "RFAD62SNPkds18V2yUOv": {
    opts: ["\\(-0.5\\)", "\\(0.5\\)", "\\(-2\\)", "\\(2\\)"],
    a: 0
  },
  "Y709epB9L7BVLeyIw4DK": {
    opts: ["\\(2.5\\)", "\\(-5\\)", "\\(-2.5\\)", "\\(5\\)"],
    a: 2
  },
  "YMJJAIr2s3EnT4fLDqoV": {
    opts: ["\\(2\\)", "\\(\\dfrac{1}{2}\\)", "\\(-2\\)", "\\(3\\)"],
    a: 0
  },
  "cmVepyAqurGhBGGrtjTH": {
    opts: ["\\(2\\)", "\\(0\\)", "\\(\\text{Undefined}\\)", "\\(-2\\)"],
    a: 3
  },
  "k8ssSgmjzElvtd9BfYDC": {
    opts: ["\\(-2\\)", "\\(2\\)", "\\(0\\)", "\\(\\text{Undefined}\\)"],
    a: 0
  },
  "pYKkC6zTdHrWOq0wEU2g": {
    opts: ["\\(\\dfrac{3}{2}\\)", "\\(-\\dfrac{3}{2}\\)", "\\(-\\dfrac{2}{3}\\)", "\\(\\dfrac{2}{3}\\)"],
    a: 1
  },
  "rQiowezFppVzeeGc97Kp": {
    opts: ["\\(2.5\\)", "\\(-5\\)", "\\(5\\)", "\\(-2.5\\)"],
    a: 3
  },
  "xf34iFkj4HMvxlKlBDcs": {
    opts: ["\\(-\\dfrac{3}{2}\\)", "\\(\\dfrac{3}{2}\\)", "\\(-\\dfrac{2}{3}\\)", "\\(\\dfrac{2}{3}\\)"],
    a: 0
  }
};

(async () => {
  try {
    console.log('[Shuffle 4B] Dispersing correct answers for Year 10 Chapter 4B...');
    let count = 0;

    // 1. Process standard targets
    for (const [docId, update] of Object.entries(targets)) {
      const ref = db.collection('questions').doc(docId);
      const doc = await ref.get();
      if (doc.exists) {
        await ref.update({
          opts: update.opts,
          options: update.opts,
          a: update.a,
          answer: update.a
        });
        console.log(`  [SHUFFLED] Standard Doc: ${docId} -> Index: ${update.a}`);
        count++;
      }
    }

    // 2. Process subQuestion doc L78zWhgSGVV9J9H7fdnn
    const refL78 = db.collection('questions').doc('L78zWhgSGVV9J9H7fdnn');
    const docL78 = await refL78.get();
    if (docL78.exists) {
      const data = docL78.data();
      if (data.subQuestions && data.subQuestions.length === 2) {
        // subQuestion 0 (collinear)
        data.subQuestions[0].opts = ["3", "4.5", "4", "-4"];
        data.subQuestions[0].options = ["3", "4.5", "4", "-4"];
        data.subQuestions[0].a = 2;
        data.subQuestions[0].answer = 2;

        // subQuestion 1 (perpendicular)
        data.subQuestions[1].opts = ["-15", "-13", "-11", "13"];
        data.subQuestions[1].options = ["-15", "-13", "-11", "13"];
        data.subQuestions[1].a = 1;
        data.subQuestions[1].answer = 1;

        await refL78.update({ subQuestions: data.subQuestions });
        console.log('  [SHUFFLED] SubQuestion Doc: L78zWhgSGVV9J9H7fdnn');
        count++;
      }
    }

    // 3. Process subQuestion doc n7QcD5uQCCk8TN856vh7
    const refN7Q = db.collection('questions').doc('n7QcD5uQCCk8TN856vh7');
    const docN7Q = await refN7Q.get();
    if (docN7Q.exists) {
      const data = docN7Q.data();
      if (data.subQuestions && data.subQuestions.length === 2) {
        // subQuestion 0 (collinear)
        data.subQuestions[0].opts = ["3", "3.5", "4.5", "2.5"];
        data.subQuestions[0].options = ["3", "3.5", "4.5", "2.5"];
        data.subQuestions[0].a = 1;
        data.subQuestions[0].answer = 1;

        // subQuestion 1 (perpendicular)
        data.subQuestions[1].opts = ["-24", "-20", "22", "-22"];
        data.subQuestions[1].options = ["-24", "-20", "22", "-22"];
        data.subQuestions[1].a = 3;
        data.subQuestions[1].answer = 3;

        await refN7Q.update({ subQuestions: data.subQuestions });
        console.log('  [SHUFFLED] SubQuestion Doc: n7QcD5uQCCk8TN856vh7');
        count++;
      }
    }

    console.log(`\nSuccessfully shuffled and dispersed all ${count} questions in Year 10 Chapter 4B.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during 4B shuffle:', err);
    process.exit(1);
  }
})();
