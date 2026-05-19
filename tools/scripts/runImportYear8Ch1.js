import { importYear8Ch1 } from './importYear8Ch1.js';

const run = async () => {
  try {
    const added = await importYear8Ch1();
    console.log(`Finished. Added ${added} questions.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
