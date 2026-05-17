import { importYear7Ch4A } from './importYear7Ch4A.js';

const run = async () => {
  try {
    const added = await importYear7Ch4A(true);
    console.log(`Successfully added ${added} questions for Year 7 Ch 4A.`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
