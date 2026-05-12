import { importYear11Ch14A } from './importYear11Ch14A.js';

importYear11Ch14A()
  .then(count => {
    console.log(`Import completed. Total new questions: ${count}`);
    process.exit(0);
  })
  .catch(err => {
    console.error('Import failed:', err);
    process.exit(1);
  });
