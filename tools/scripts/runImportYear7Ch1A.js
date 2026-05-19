import { importYear7Ch1A } from './importYear7Ch1A.js';

const run = async () => {
  try {
    const added = await importYear7Ch1A(true); // forceReset = true to overwrite existing ones for this specific topic
    console.log(`Successfully added ${added} questions for Year 7 Ch 1A.`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
