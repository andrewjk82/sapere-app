import { importYear8Ch1V2 } from './importYear8Ch1_v2.js';

console.log('--- Starting Year 8 Ch1 v2 Import ---');

importYear8Ch1V2(true)
  .then(count => {
    console.log(`Successfully imported ${count} new questions.`);
    process.exit(0);
  })
  .catch(err => {
    console.error('Import failed:', err);
    process.exit(1);
  });
