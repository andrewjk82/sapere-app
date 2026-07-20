import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const ref = db.collection('questions').doc('tHz4KzxbS3Bv9wvq9mQT');
    
    // Force delete the graphData field using FieldValue.delete()
    await ref.update({
      graphData: FieldValue.delete()
    });
    
    console.log('Successfully and completely deleted graphData field from Firestore document.');
    
    // Read back to confirm it is 100% gone
    const snap = await ref.get();
    console.log('Current document fields:', Object.keys(snap.data()));
    console.log('Does graphData exist in document keys?', 'graphData' in snap.data());
    
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
