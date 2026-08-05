const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = {
    'y10-13a-q6a': "The diagram shows a circle with centre \\(O\\). The line segment \\(AB\\) is a chord and \\(M\\) is its midpoint. Prove that the line segment \\(OM\\) is perpendicular to the chord \\(AB\\).\n\n**a)** What can be said about the lengths of \\(OA\\) and \\(OB\\)?\n**b)** What can be said about the length of \\(AM\\) and \\(MB\\)?\n**c)** Using the results above, which triangle congruence test can be used to prove that \\(\\triangle OAM \\cong \\triangle OBM\\)?\n**d)** Hence, why must \\(\\angle OMA = \\angle OMB = 90^\\circ\\)?",
    
    'y10-13a-q6b': "The diagram shows a circle with centre \\(O\\). The line segment \\(AB\\) is a chord and the line segment \\(OM\\) is perpendicular to \\(AB\\). Prove that \\(M\\) is the midpoint of the chord \\(AB\\).\n\n**a)** What can be said about the lengths of \\(OA\\) and \\(OB\\)?\n**b)** Which triangle congruence test can be used to prove that \\(\\triangle OAM \\cong \\triangle OBM\\)?\n**c)** Hence, why must \\(AM = MB\\)?",

    'y10-13a-q7a': "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre \\(O\\) lies inside the angle \\(\\angle APB\\), and the line \\(PO\\) is produced to a point \\(X\\) on the circle.\nLet \\(\\angle OPB = \\beta\\) and \\(\\angle OPA = \\alpha\\).\n\n**a)** Prove that \\(\\angle APB = \\alpha + \\beta\\).\n**b)** Prove that \\(\\angle AOB = 2(\\alpha + \\beta) = 2\\angle APB\\).",

    'y10-13a-q7b': "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre \\(O\\) lies outside the angle \\(\\angle APB\\), and the line \\(PO\\) is produced to a point \\(X\\) on the circle.\nLet \\(\\angle OPA = \\alpha\\) and \\(\\angle OPB = \\beta\\).\n\n**a)** Prove that \\(\\angle APB = \\beta - \\alpha\\).\n**b)** Prove that \\(\\angle AOB = 2(\\beta - \\alpha) = 2\\angle APB\\).",

    'y10-13a-q8': "The converse of Thales' theorem is established by proving the following result: *The midpoint of the hypotenuse of a right-angled triangle is equidistant from the three vertices of the triangle*.\n\nLet \\(\\triangle ABP\\) be right-angled at \\(P\\), and let \\(O\\) be the midpoint of the hypotenuse \\(AB\\). Draw \\(PO\\) and produce it to \\(Q\\) so that \\(PO = OQ\\). Draw \\(AQ\\) and \\(BQ\\).\n\n**a)** Explain why \\(APBQ\\) is a parallelogram.\n**b)** Hence, explain why \\(APBQ\\) is a rectangle.\n**c)** Hence, explain why \\(AO = BO = PO\\) and why the circle with diameter \\(AB\\) passes through \\(P\\)."
  };

  const batch = db.batch();
  for (const [id, qText] of Object.entries(updates)) {
    const ref = db.collection('questions').doc(id);
    batch.update(ref, {
      question: qText,
      questionParts: FieldValue.delete(), // Remove the fake field
      updatedAt: FieldValue.serverTimestamp()
    });
  }

  await batch.commit();
  console.log('Restored all sub-questions into the question text!');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
