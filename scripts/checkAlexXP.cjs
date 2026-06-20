const admin = require('firebase-admin');

admin.initializeApp({ projectId: 'sapere-fe23e' });
const db = admin.firestore();

const today = new Date().toLocaleDateString('en-CA');
const yesterday = new Date(Date.now() - 86400000).toLocaleDateString('en-CA');
console.log(`Dates: ${yesterday} (yesterday)  ${today} (today)\n`);

async function main() {
  const [usersSnap, studentsSnap] = await Promise.all([
    db.collection('users').get(),
    db.collection('students').get(),
  ]);

  const allDocs = [...usersSnap.docs, ...studentsSnap.docs];
  const alexDocs = allDocs.filter(d => {
    const data = d.data();
    const name = [data.name, data.displayName, data.firstName, data.lastName]
      .filter(Boolean).join(' ').toLowerCase();
    return name.includes('alex');
  });

  if (alexDocs.length === 0) {
    console.log('No Alex found.');
    return;
  }

  for (const alexDoc of alexDocs) {
    const data = alexDoc.data();
    const col = alexDoc.ref.parent.id;
    console.log(`=== ${col}/${alexDoc.id} ===`);
    console.log(`  Name      : ${data.name || data.displayName || [data.firstName, data.lastName].filter(Boolean).join(' ')}`);
    console.log(`  totalXP   : ${data.totalXP ?? 'MISSING'}`);
    console.log(`  challenges: ${data.challengesCompleted ?? 'N/A'}`);

    for (const date of [yesterday, today]) {
      for (const colName of ['daily_stats', 'calc_stats']) {
        const statSnap = await alexDoc.ref.collection(colName).doc(date).get();
        if (statSnap.exists) {
          const s = statSnap.data();
          console.log(`\n  [${colName} / ${date}]`);
          console.log(`    score            : ${s.score} / ${s.total}`);
          console.log(`    xpEarned         : ${s.xpEarned ?? 'MISSING'}`);
          console.log(`    maxXp            : ${s.maxXp ?? 'N/A'}`);
          console.log(`    completed        : ${s.completed}`);
          console.log(`    progressSyncFailed: ${s.progressSyncFailed ?? false}`);
          console.log(`    progressSyncError : ${s.progressSyncError ?? 'none'}`);
          console.log(`    timestamp        : ${s.timestamp}`);
        }
      }
    }
    console.log('');
  }
}

main().then(() => process.exit(0)).catch(e => { console.error(e); process.exit(1); });
