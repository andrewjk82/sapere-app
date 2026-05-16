import { importYear8Ch1B } from './importYear8Ch1B.js';

const run = async () => {
  try {
    const added = await importYear8Ch1B(true);
    console.log(`Successfully added ${added} questions for Year 8 Ch 1B.`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
