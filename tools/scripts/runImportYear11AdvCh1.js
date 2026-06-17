import { importYear11AdvCh1 } from './importYear11AdvCh1.js';

const run = async () => {
  try {
    const added = await importYear11AdvCh1(true);
    console.log(`Successfully added ${added} questions for Year 11 Adv Ch 1.`);
    process.exit(0);
  } catch (err) {
    console.error('Error running import:', err);
    process.exit(1);
  }
};

run();
