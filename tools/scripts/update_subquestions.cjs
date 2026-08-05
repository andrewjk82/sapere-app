const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Q6A
  const q6a_text = "Thales' theorem states that: *An angle in a semicircle is a right angle*. This question develops Euclid's proof. Let \\(A\\), \\(O\\), \\(B\\) form the diameter of a circle, and \\(P\\) be a point on the circumference. Join \\(PO\\), and produce \\(AP\\) to \\(X\\).\nLet \\(\\angle PAB = \\alpha\\) and \\(\\angle PBA = \\beta\\).";
  const q6a_parts = [
    "Prove that \\(\\angle APB = \\alpha + \\beta\\), and that \\(\\angle XPB = \\alpha + \\beta\\).",
    "Hence, prove that \\(\\alpha + \\beta = 90^\\circ\\)."
  ];

  // Q6B
  const q6b_text = "Thales' theorem states that: *An angle in a semicircle is a right angle*. This question develops an alternate proof.\nJoin \\(PO\\) and produce it to a point \\(M\\).\nLet \\(\\angle PAB = \\alpha\\) and \\(\\angle PBA = \\beta\\).";
  const q6b_parts = [
    "Prove that \\(\\angle AOM = 2\\alpha\\) and \\(\\angle BOM = 2\\beta\\).",
    "Hence, prove that \\(2\\alpha + 2\\beta = 180^\\circ\\).",
    "Deduce that \\(\\alpha + \\beta = 90^\\circ\\) (and therefore \\(\\angle APB = 90^\\circ\\))."
  ];

  // Q7A
  const q7a_text = "Prove that: *An angle at the centre subtended by an arc is twice an angle at the circumference subtended by the same arc*.\nUsing the provided diagram where the centre \\(O\\) lies inside the angle \\(\\angle APB\\), and the line \\(PO\\) is produced to a point \\(X\\) on the circle.\nLet \\(\\angle OPA = \\alpha\\) and \\(\\angle OPB = \\beta\\).";
  const q7a_parts = [
    "Prove that \\(\\angle APB = \\alpha + \\beta\\).",
    "Prove that \\(\\angle AOB = 2\\alpha + 2\\beta = 2\\angle APB\\)."
  ];

  await db.collection('questions').doc('y10-13a-q6a').update({
    question: q6a_text,
    questionParts: q6a_parts,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated Q6A with questionParts');

  await db.collection('questions').doc('y10-13a-q6b').update({
    question: q6b_text,
    questionParts: q6b_parts,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated Q6B with questionParts');

  await db.collection('questions').doc('y10-13a-q7a').update({
    question: q7a_text,
    questionParts: q7a_parts,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated Q7A with questionParts');
  
  console.log('Syncing chapter index for y10-13a...');
  await touchChapterIndex(db, 'y10-13a'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
