import { importYear10Ch1Part2 } from './importYear10Ch1_Part2.js';

importYear10Ch1Part2()
  .then((count) => {
    console.log(`Done! Imported ${count} questions.`);
    process.exit(0);
  })
  .catch((err) => {
    console.error('Import failed:', err);
    process.exit(1);
  });
