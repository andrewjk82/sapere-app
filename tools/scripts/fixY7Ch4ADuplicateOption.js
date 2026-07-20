import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const ref = db.doc('questions/38PInmr3psGdNl8YI52m');
  const snap = await ref.get();
  if (!snap.exists) {
    console.error('doc not found');
    process.exit(1);
  }
  const data = snap.data();
  console.log('before:', data.options);
  if (data.origin === 'teacher') {
    console.error('BLOCKED: origin is teacher, refusing to overwrite');
    process.exit(1);
  }
  const newOptions = [...data.options];
  // index 0 and 1 were both "$\frac{1}{2}$" — replace the duplicate (index 1)
  // with the unsimplified pre-reduction form (2/4), a standard distractor for
  // "write in simplest form" questions that tests whether the student reduced.
  newOptions[1] = '$\\frac{2}{4}$';
  await ref.update({ options: newOptions });
  console.log('after:', newOptions);
  process.exit(0);
})();
