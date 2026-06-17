import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";

const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", "utf8"));

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function run() {
  const qId = "Bu00AtsrDreEYtLzIgdX";
  const doc = await db.collection("questions").doc(qId).get();
  if (!doc.exists) {
    console.log("Question not found!");
  } else {
    console.log(JSON.stringify(doc.data(), null, 2));
  }
}

run().catch(console.error);
