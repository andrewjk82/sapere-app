import { importMediumQuestions } from './importYear11AdvCh4_Medium.js';

async function run() {
    try {
        await importMediumQuestions();
        console.log('Import process finished successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Import process failed:', error);
        process.exit(1);
    }
}

run();
