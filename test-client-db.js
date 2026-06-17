import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

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
  const qId = "Bu00AtsrDreEYtLzIgdX";
  const snap = await getDoc(doc(db, "questions", qId));
  if (!snap.exists()) {
    console.log("Question not found!");
  } else {
    console.log(JSON.stringify(snap.data(), null, 2));
  }
}

run().catch(console.error).then(() => process.exit(0));
