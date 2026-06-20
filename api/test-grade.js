import admin from 'firebase-admin';

function getAdminApp() {
  if (admin.apps.length > 0) return admin.apps[0];
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (!projectId || !clientEmail || !privateKey) throw new Error('Missing Firebase admin credentials');
  return admin.initializeApp({ credential: admin.credential.cert({ projectId, clientEmail, privateKey }) });
}

export default async function handler(req, res) {
  // Safety: only allow GET, no side effects from external callers
  if (req.method !== 'GET') return res.status(405).end();

  try {
    const app = getAdminApp();
    const db = admin.firestore(app);

    // Create a test document
    const testDoc = {
      userId: 'test',
      userName: 'Test Student',
      questionText: 'Sketch the graph of y = 1/(x-2), showing asymptotes and intercepts.',
      correctAnswer: 'Asymptotes: x=2, y=0. y-intercept: (0, -1/2). No x-intercept.',
      solution: 'Vertical asymptote x=2, horizontal asymptote y=0. y-intercept at x=0: y=1/(0-2)=-1/2.',
      answerText: 'I drew the hyperbola with vertical asymptote at x=2 and horizontal at y=0, with y-intercept at (0, -0.5)',
      answerImage: null,
      answerImages: [],
      hasDrawing: false,
      status: 'pending',
    };

    const ref = await db.collection('grading_queue').add(testDoc);

    // Call auto-grade
    const gradeRes = await fetch(`${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}/api/auto-grade`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ gradingItemId: ref.id }),
    });
    const gradeBody = await gradeRes.json();

    // Read back
    const updated = await db.collection('grading_queue').doc(ref.id).get();
    const aiAssessment = updated.data()?.aiAssessment || null;

    // Cleanup
    await db.collection('grading_queue').doc(ref.id).delete();

    return res.status(200).json({
      docId: ref.id,
      apiResponse: gradeBody,
      aiAssessment,
    });
  } catch (err) {
    return res.status(500).json({ error: err?.message || String(err) });
  }
}
