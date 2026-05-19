import { importYear7Ch1B } from './importYear7Ch1B.js';

const run = async () => {
  try {
    const added = await importYear7Ch1B(true);
    console.log(`Successfully added ${added} questions for Year 7 Ch 1B.`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
