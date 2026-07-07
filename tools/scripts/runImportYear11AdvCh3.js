import { importYear11AdvCh3 } from './importYear11AdvCh3.js';

importYear11AdvCh3()
  .then(count => {
    console.log(`Import completed. Total new questions: ${count}`);
    process.exit(0);
  })
  .catch(err => {
    console.error('Import failed:', err);
    process.exit(1);
  });
