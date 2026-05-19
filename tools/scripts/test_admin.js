import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Desktop/sapere1/service-account.json', 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}
const db = admin.firestore();

async function main() {
  try {
    const queueSnap = await db.collection('grading_queue').where('status', '==', 'pending').limit(1).get();
    if (queueSnap.empty) {
      console.log("No pending items");
      return;
    }
    const item = { id: queueSnap.docs[0].id, ...queueSnap.docs[0].data() };
    console.log("Found item:", item);
    
    // Simulate transaction
    await db.runTransaction(async (transaction) => {
      const queueRef = db.collection('grading_queue').doc(item.id);
      const userRef = db.collection('users').doc(item.userId);
      
      const userSnap = await transaction.get(userRef);
      console.log("User exists:", userSnap.exists);
      
      let statsRef = null;
      let statsSnap = null;
      
      if (item.submittedAt) {
        let date;
        try {
          date = item.submittedAt.toDate ? item.submittedAt.toDate().toISOString().split('T')[0] : 
                 (item.submittedAt instanceof Date ? item.submittedAt.toISOString().split('T')[0] : 
                 new Date().toISOString().split('T')[0]);
        } catch (e) {
          date = new Date().toISOString().split('T')[0];
        }
        console.log("Date is", date);
        
        statsRef = item.challengeType === 'calc'
          ? db.collection('users').doc(item.userId).collection('calc_stats').doc(date)
          : db.collection('users').doc(item.userId).collection('daily_stats').doc(date);
        
        statsSnap = await transaction.get(statsRef);
        console.log("Stats exists:", statsSnap.exists);
      }
      
      transaction.update(queueRef, { 
        status: 'approved',
        gradedAt: new Date(),
        scoreAwarded: 1
      });
      console.log("Updated queue");
      
      if (userSnap.exists) {
        const userData = userSnap.data();
        transaction.update(userRef, {
          points: (userData.points || 0) + 10,
          totalXp: (userData.totalXp || 0) + 50
        });
        console.log("Updated user");
      }
      
      if (statsSnap && statsSnap.exists) {
        const statsData = statsSnap.data();
        const updatedResults = [...(statsData.answerResults || [])];
        
        const qIndex = updatedResults.findIndex(r => r.questionId === item.questionId);
        console.log("qIndex:", qIndex);
        if (qIndex !== -1) {
          updatedResults[qIndex].correct = true;
          updatedResults[qIndex].isPending = false;
          updatedResults[qIndex].selectedAnswer = 'Approved';
          
          transaction.update(statsRef, {
            score: (statsData.score || 0) + 1,
            xpEarned: (statsData.xpEarned || 0) + 50,
            answerResults: updatedResults
          });
          console.log("Updated stats");
        }
      }
    });
    console.log("Transaction success");
  } catch (err) {
    console.error("Transaction Error:", err);
  }
}
main();
