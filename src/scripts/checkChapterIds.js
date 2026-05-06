import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// The firebase config from src/firebase/config.js
const firebaseConfig = {
  apiKey: "dummy",
  authDomain: "dummy",
  projectId: "sapere-30d89",
  storageBucket: "dummy",
  messagingSenderId: "dummy",
  appId: "dummy"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function run() {
  const q = collection(db, 'questions');
  const snap = await getDocs(q);
  const chapterIds = new Set();
  snap.docs.forEach(doc => {
    chapterIds.add(doc.data().chapterId);
  });
  console.log(Array.from(chapterIds));
  process.exit(0);
}

run();
