import admin from 'firebase-admin';

try {
  admin.initializeApp();
  const db = admin.firestore();
  console.log("Admin initialized successfully with ADC");
  const snap = await db.collection('questions').limit(1).get();
  console.log("Read success:", snap.size);
  process.exit(0);
} catch (err) {
  console.error("Admin init failed:", err.message);
  process.exit(1);
}
