import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// We will update the options for y8-5a questions that ask for "reasons"
// to pair the value with both correct and incorrect geometric reasons.
const updates = {
  // 1. y8-5a-q1a (x = 180 - 35 = 145)
  // Reason: Angles on a straight line add to 180
  'y8-5a-q1a': {
    opts: [
      '\\(35^\\circ\\) (Vertically opposite angles are equal)',
      '\\(55^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(145^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(145^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 2
  },

  // 2. y8-5a-q1b (x = 90 - 30 = 60)
  // Reason: Complementary angles add to 90 / Perpendicular lines
  'y8-5a-q1b': {
    opts: [
      '\\(30^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(60^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(60^\\circ\\) (Vertically opposite angles are equal)',
      '\\(90^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1
  },

  // 3. y8-5a-q1c (x = 90 + 52 = 142)
  // Reason: Adjacent angles sum
  'y8-5a-q1c': {
    opts: [
      '\\(52^\\circ\\) (Vertically opposite angles are equal)',
      '\\(138^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(142^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(142^\\circ\\) (Adjacent angles add up to form the larger angle)'
    ],
    a: 3
  },

  // 4. y8-5a-q1d (x = 180 - 145 = 35)
  // Reason: Angles on a straight line add to 180
  'y8-5a-q1d': {
    opts: [
      '\\(35^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(35^\\circ\\) (Vertically opposite angles are equal)',
      '\\(45^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(145^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 0
  },

  // 5. y8-5a-q1e (x = 180)
  // Reason: Straight angle definition
  'y8-5a-q1e': {
    opts: [
      '\\(90^\\circ\\) (Perpendicular lines form right angles)',
      '\\(120^\\circ\\) (Angles around a point add to \\(360^\\circ\\))',
      '\\(180^\\circ\\) (A straight line forms a straight angle of \\(180^\\circ\\))',
      '\\(180^\\circ\\) (Complementary angles add to \\(90^\\circ\\))'
    ],
    a: 2
  },

  // 6. y8-5a-q1f (x = 135)
  // Reason: Adjacent angles sum
  'y8-5a-q1f': {
    opts: [
      '\\(85^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(135^\\circ\\) (Adjacent angles add up to form the larger angle)',
      '\\(135^\\circ\\) (Vertically opposite angles are equal)',
      '\\(145^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1
  },

  // 7. y8-5a-q1g (x = 360 - 120 = 240)
  // Reason: Angles around a point add to 360 (Reflex angle)
  'y8-5a-q1g': {
    opts: [
      '\\(120^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(220^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(240^\\circ\\) (Vertically opposite angles are equal)',
      '\\(240^\\circ\\) (Angles around a point add to \\(360^\\circ\\) to form a reflex angle)'
    ],
    a: 3
  },

  // 8. y8-5a-q1h (x = 360 - 220 = 140)
  // Reason: Angles around a point add to 360
  'y8-5a-q1h': {
    opts: [
      '\\(140^\\circ\\) (Angles around a point add to \\(360^\\circ\\))',
      '\\(140^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(150^\\circ\\) (Vertically opposite angles are equal)',
      '\\(220^\\circ\\) (Complementary angles add to \\(90^\\circ\\))'
    ],
    a: 0
  },

  // 9. y8-5a-q3a (alpha = 180 - 62 = 118)
  // Reason: Angles on a straight line add to 180
  'y8-5a-q3a': {
    opts: [
      '\\(62^\\circ\\) (Vertically opposite angles are equal)',
      '\\(108^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(118^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(118^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 2
  },

  // 10. y8-5a-q3b-beta (beta = 90)
  // Reason: Perpendicular lines form a 90 angle
  'y8-5a-q3b-beta': {
    opts: [
      '\\(45^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(90^\\circ\\) (Perpendicular lines form a right angle of \\(90^\\circ\\))',
      '\\(90^\\circ\\) (Vertically opposite angles are equal)',
      '\\(135^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1
  },

  // 11. y8-5a-q3b-theta (theta = 90)
  // Reason: Perpendicular lines form a 90 angle
  'y8-5a-q3b-theta': {
    opts: [
      '\\(45^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(90^\\circ\\) (Perpendicular lines form a right angle of \\(90^\\circ\\))',
      '\\(90^\\circ\\) (Vertically opposite angles are equal)',
      '\\(135^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1
  },

  // 12. y8-5a-q3c-alpha (alpha = 52)
  // Reason: Vertically opposite angles are equal
  'y8-5a-q3c-alpha': {
    opts: [
      '\\(48^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(52^\\circ\\) (Vertically opposite angles are equal)',
      '\\(52^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(128^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1
  },

  // 13. y8-5a-q3c-beta (beta = 180 - 52 = 128)
  // Reason: Angles on a straight line add to 180
  'y8-5a-q3c-beta': {
    opts: [
      '\\(52^\\circ\\) (Vertically opposite angles are equal)',
      '\\(62^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(128^\\circ\\) (Vertically opposite angles are equal)',
      '\\(128^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))'
    ],
    a: 3
  },

  // 14. y8-5a-q4a (theta = 42)
  // Reason: Vertically opposite angles are equal
  'y8-5a-q4a': {
    opts: [
      '\\(38^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(42^\\circ\\) (Vertically opposite angles are equal)',
      '\\(42^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(138^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1
  },

  // 15. y8-5a-q4b (beta = 30)
  // Reason: Angles on a straight line add to 180
  'y8-5a-q4b': {
    opts: [
      '\\(20^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(30^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(30^\\circ\\) (Vertically opposite angles are equal)',
      '\\(60^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1
  },

  // 16. y8-5a-q4c (alpha = 45)
  // Reason: Angles on a straight line add to 180
  'y8-5a-q4c': {
    opts: [
      '\\(30^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(45^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(45^\\circ\\) (Vertically opposite angles are equal)',
      '\\(60^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1
  },

  // 17. y8-5a-q4d (alpha = 60)
  // Reason: Angles around a point add to 360
  'y8-5a-q4d': {
    opts: [
      '\\(45^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(60^\\circ\\) (Angles around a point add to \\(360^\\circ\\))',
      '\\(60^\\circ\\) (Vertically opposite angles are equal)',
      '\\(90^\\circ\\) (Perpendicular lines form right angles)'
    ],
    a: 1
  },

  // 18. y8-5a-q4e (beta = 130)
  // Reason: Angles around a point add to 360
  'y8-5a-q4e': {
    opts: [
      '\\(100^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(110^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(130^\\circ\\) (Vertically opposite angles are equal)',
      '\\(130^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 3
  },

  // 19. y8-5a-q4f-gamma (gamma = 30)
  // Reason: Vertically opposite angles are equal
  'y8-5a-q4f-gamma': {
    opts: [
      '\\(15^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(30^\\circ\\) (Vertically opposite angles are equal)',
      '\\(30^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(45^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1
  },

  // 20. y8-5a-q4f-theta (theta = 120)
  // Reason: Angles on a straight line add to 180
  'y8-5a-q4f-theta': {
    opts: [
      '\\(60^\\circ\\) (Vertically opposite angles are equal)',
      '\\(110^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(120^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(120^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 2
  },

  // 21. y8-5a-q4g (alpha = 80)
  // Reason: Angles on a straight line add to 180
  'y8-5a-q4g': {
    opts: [
      '\\(60^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(70^\\circ\\) (Vertically opposite angles are equal)',
      '\\(80^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(80^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 2
  },

  // 22. y8-5a-q4h (alpha = 18)
  // Reason: Complementary angles add to 90
  'y8-5a-q4h': {
    opts: [
      '\\(15^\\circ\\) (Angles on a straight line add to \\(180^\\circ\\))',
      '\\(18^\\circ\\) (Complementary angles add to \\(90^\\circ\\))',
      '\\(18^\\circ\\) (Vertically opposite angles are equal)',
      '\\(20^\\circ\\) (Angles around a point add to \\(360^\\circ\\))'
    ],
    a: 1
  }
};

async function run() {
  const batch = db.batch();

  for (const [id, fields] of Object.entries(updates)) {
    console.log(`Setting reason-matching options for: ${id}`);
    const docRef = db.collection('questions').doc(id);
    batch.update(docRef, {
      opts: fields.opts,
      options: fields.opts, // Keep synchronized
      a: fields.a,
      answer: fields.a
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
  console.log('Successfully paired geometric reasons next to all MCQ options!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
