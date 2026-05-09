const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs, query, orderBy, limit } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyA0wipuWHllQjqiGdCttJ0U6N4mHZysZPk",
  authDomain: "sapere-fe23e.firebaseapp.com",
  projectId: "sapere-fe23e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function check() {
  const usersRef = collection(db, 'users');
  const usersSnap = await getDocs(usersRef);
  
  for (const user of usersSnap.docs) {
    const dailyRef = collection(db, 'users', user.id, 'daily_stats');
    const q = query(dailyRef, orderBy('id', 'desc'), limit(1));
    const statsSnap = await getDocs(q);
    
    if (!statsSnap.empty) {
      const doc = statsSnap.docs[0];
      const data = doc.data();
      console.log(`User: ${user.id}, Date: ${doc.id}`);
      if (data.questions && data.questions.length > 0) {
        console.log("First question in history:");
        console.log(JSON.stringify(data.questions[0], null, 2));
      } else {
        console.log("No questions array or empty.");
      }
      break;
    }
  }
  process.exit(0);
}
check();
