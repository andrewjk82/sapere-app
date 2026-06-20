import admin from 'firebase-admin';

function getAdminApp() {
  if (admin.apps.length > 0) return admin.apps[0];
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  return admin.initializeApp({ credential: admin.credential.cert({ projectId, clientEmail, privateKey }) });
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'Missing id' });

  const app = getAdminApp();
  const db = admin.firestore(app);
  const snap = await db.collection('grading_queue').doc(id).get();
  if (!snap.exists) return res.status(404).json({ error: 'Not found' });

  const d = snap.data();
  return res.json({
    hasDrawing: d.hasDrawing,
    answerImageLength: d.answerImage?.length || 0,
    answerImagesCount: (d.answerImages || []).length,
    answerImagesLengths: (d.answerImages || []).map(u => u?.length || 0),
    answerText: d.answerText,
    questionText: d.questionText?.slice(0, 80),
    aiAssessment: d.aiAssessment || null,
  });
}
