const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccountPath = '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';

// Ensure the service account exists
if (!fs.existsSync(serviceAccountPath)) {
    console.error(`Service account not found at ${serviceAccountPath}`);
    process.exit(1);
}

const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function run() {
    try {
        const chapterId = 'y11-3'; // Assuming this is the correct chapter prefix based on 'y11a-3b'
        console.log(`Starting backup for chapter ${chapterId}...`);
        
        // 1. Backup existing data
        const existing = await db.collection('questions').where('id', '>=', 'y11a-3').where('id', '<', 'y11a-4').get(); // y11a-3b prefix
        const backup = existing.docs.map(d => ({ id: d.id, ...d.data() }));
        
        fs.mkdirSync(__dirname + '/../audit-state', { recursive: true });
        const backupPath = __dirname + `/../audit-state/backup_${chapterId}_${Date.now()}.json`;
        fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2));
        console.log(`Backed up ${backup.length} docs to ${backupPath}.`);

        // 2. Read new seed data
        const seedModule = await import('../../src/constants/seedYear11Ch3BQuestions.js');
        const questions = seedModule.Y11_CH3B_QUESTIONS || seedModule.Y11A_CH3B_QUESTIONS; // Handle both just in case

        console.log(`Uploading ${questions.length} questions...`);

        // 3. Update Firestore
        for (const q of questions) {
            // Delete legacy 'opts' completely, and force 'answer' to sync with 'a' so it doesn't read stale incorrect answers
            const updateData = { 
                ...q, 
                opts: admin.firestore.FieldValue.delete(),
                answer: q.a !== undefined ? q.a : admin.firestore.FieldValue.delete(),
                solution: q.a !== undefined ? q.a : admin.firestore.FieldValue.delete(),
                solutionSteps: q.solutionSteps !== undefined ? q.solutionSteps : admin.firestore.FieldValue.delete(),
                options: q.options !== undefined ? q.options : admin.firestore.FieldValue.delete(),
                graphData: q.graphData !== undefined ? q.graphData : admin.firestore.FieldValue.delete()
            };
            
            await db.collection('questions').doc(q.id).set(updateData, { merge: true });
            process.stdout.write('.');
        }
        console.log(`\nUpload complete.`);

        // 4. Touch index to invalidate cache
        console.log(`Touching chapter index for ${chapterId}...`);
        const { touchChapterIndex } = await import('./_lib/touchChapterIndex.js');
        const touched = await touchChapterIndex(db, chapterId);
        console.log(`Chapter index touched: ${touched}`);

    } catch (e) {
        console.error('Error during upload:', e);
    } finally {
        process.exit(0);
    }
}

run();
