import { importYear7Ch7A } from './importYear7Ch7A.js';

const run = async () => {
  try {
    const added = await importYear7Ch7A(true); // force reset so we get a clean slate first
    console.log(`Finished. Added ${added} questions.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
