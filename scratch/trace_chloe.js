import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0wipuWHllQjqiGdCttJ0U6N4mHZysZPk",
  authDomain: "sapere-fe23e.firebaseapp.com",
  projectId: "sapere-fe23e",
  storageBucket: "sapere-fe23e.firebasestorage.app",
  messagingSenderId: "183895600316",
  appId: "1:183895600316:web:4a4c185768fac7873eb4b9",
  measurementId: "G-Z4WEX8H1K6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function run() {
  console.log("Searching for Chloe sia Kim...");
  const usersSnap = await getDocs(collection(db, 'users'));
  let chloeUid = null;
  usersSnap.forEach(doc => {
    const data = doc.data();
    const name = data.displayName || data.firstName + " " + data.lastName;
    if (name && name.toLowerCase().includes('chloe') && name.toLowerCase().includes('sia')) {
      console.log(`Found user: ${name} (UID: ${doc.id})`);
      chloeUid = doc.id;
    }
  });

  if (!chloeUid) {
    console.log("Could not find user.");
    process.exit(0);
  }

  const today = new Date().toLocaleDateString('en-CA');
  console.log(`Checking calc_stats for ${today}...`);
  
  const calcStatsSnap = await getDocs(collection(db, `users/${chloeUid}/calc_stats`));
  console.log(`Total calc_stats docs: ${calcStatsSnap.size}`);
  
  const todayDocRef = doc(db, `users/${chloeUid}/calc_stats`, today);
  const todayDocSnap = await getDoc(todayDocRef);
  
  if (todayDocSnap.exists()) {
    console.log("✅ Today's calc_stats record exists:");
    console.log(JSON.stringify(todayDocSnap.data(), null, 2));
  } else {
    console.log("❌ Today's calc_stats record DOES NOT EXIST in Firestore.");
    
    // Let's check what the latest docs are
    let latestDocs = [];
    calcStatsSnap.forEach(d => {
      latestDocs.push({ id: d.id, date: d.data().date, timestamp: d.data().timestamp, abandoned: d.data().abandoned });
    });
    latestDocs.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp));
    console.log("Latest records:");
    console.log(latestDocs.slice(0, 5));
  }
  
  console.log(`Checking sync_meta/boot_${chloeUid}_${today}...`);
  const bootSnap = await getDoc(doc(db, 'sync_meta', `boot_${chloeUid}_${today}`));
  if (bootSnap.exists()) {
    console.log("Boot record:", bootSnap.data());
  } else {
    console.log("No boot record found.");
  }
  
  process.exit(0);
}

run().catch(console.error);
