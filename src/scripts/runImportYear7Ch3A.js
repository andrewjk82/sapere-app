import { importYear7Ch3A } from './importYear7Ch3A.js';

const run = async () => {
  try {
    const added = await importYear7Ch3A(true);
    console.log(`Successfully added ${added} questions for Year 7 Ch 3A.`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
