import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const snap = await db.collection('questions').where('topicId', '==', 'y10-4g').get();
    console.log(`Processing ${snap.size} questions for physical opt fixes...`);

    for (const doc of snap.docs) {
      const data = doc.data();
      let changed = false;

      if (data.opts && Array.isArray(data.opts)) {
        const cleanedOpts = data.opts.map(opt => {
          if (typeof opt === 'string') {
            // Check for patterns like ",; " or ",;" or ", ;" or ", \\; " or ", \\; "
            // We want to replace all of them with a clean, standard comma + space: ", "
            let newOpt = opt.replace(/,\s*\\*;\s*/g, ', ');
            newOpt = newOpt.replace(/,\s*,\s*/g, ', '); // Also catch double commas
            if (newOpt !== opt) {
              changed = true;
              return newOpt;
            }
          }
          return opt;
        });

        if (changed) {
          await db.collection('questions').doc(doc.id).update({
            opts: cleanedOpts,
            options: cleanedOpts,
            updatedAt: new Date()
          });
          console.log(`  [REPAIRED OPTS] ID: ${doc.id}`);
          console.log(`    Before: ${JSON.stringify(data.opts)}`);
          console.log(`    After : ${JSON.stringify(cleanedOpts)}`);
        }
      }
    }

    console.log('Database repair completed.');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
