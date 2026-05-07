
import { db } from '../src/firebase/config.js';
import { importYear10Ch3 } from '../src/scripts/importYear10Ch3.js';

async function runForceSync() {
  console.log('Starting force sync for Year 10 Chapter 3...');
  try {
    const added = await importYear10Ch3();
    console.log(`Force sync complete. Added ${added} questions.`);
    process.exit(0);
  } catch (err) {
    console.error('Force sync failed:', err);
    process.exit(1);
  }
}

runForceSync();
