import { importYear7Ch8A } from './importYear7Ch8A.js';

const run = async () => {
  try {
    const added = await importYear7Ch8A(true);
    console.log(`Finished. Added ${added} questions.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
