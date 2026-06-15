import { importYear7Ch2 } from './importYear7Ch2.js';

const run = async () => {
  try {
    const added = await importYear7Ch2(true); // forceReset = true to overwrite existing ones for this specific topic
    console.log(`Successfully added ${added} questions for Year 7 Ch 2.`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
