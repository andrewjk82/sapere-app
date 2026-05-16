import { importYear7Ch2A } from './importYear7Ch2A.js';

const run = async () => {
  try {
    const added = await importYear7Ch2A(true);
    console.log(`Successfully added ${added} questions for Year 7 Ch 2A.`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
