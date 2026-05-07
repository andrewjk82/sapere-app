import { importYear10Ch3 } from './importYear10Ch3.js';

importYear10Ch3()
  .then(count => {
    console.log(`Import completed. Total new questions: ${count}`);
    process.exit(0);
  })
  .catch(err => {
    console.error('Import failed:', err);
    process.exit(1);
  });
