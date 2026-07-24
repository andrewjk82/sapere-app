/**
 * Seed Girraween 2020 questions to Firestore
 *
 * POST /api/seed-girraween-2020
 *
 * Admin token required (via Authorization header)
 */

import admin from 'firebase-admin';
import { GIRRAWEEN_2020_ALL_QUESTIONS } from '../tools/seeds/girraween/index.js';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'andrewjk82@gmail.com';

function getAdminApp() {
  if (admin.apps.length > 0) return admin.apps[0];

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Missing Firebase credentials');
  }

  return admin.initializeApp({
    credential: admin.credential.cert({ projectId, clientEmail, privateKey })
  });
}

async function verifyAdmin(req) {
  const token = (req.headers.authorization || '').replace('Bearer ', '').trim();
  if (!token) return null;

  try {
    const app = getAdminApp();
    const decoded = await admin.auth(app).verifyIdToken(token);
    return decoded.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase() ? decoded : null;
  } catch (err) {
    console.error('[seed-girraween] Auth error:', err.message);
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const user = await verifyAdmin(req);
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized - admin token required' });
  }

  try {
    const app = getAdminApp();
    const db = admin.firestore(app);

    console.log('[seed-girraween] Starting seeding...');
    console.log(`[seed-girraween] Total questions: ${GIRRAWEEN_2020_ALL_QUESTIONS.length}`);

    const batch = db.batch();
    let count = 0;
    let skipped = 0;

    for (const question of GIRRAWEEN_2020_ALL_QUESTIONS) {
      const docRef = db.collection('questions').doc(question.id);

      // Check if question already exists and is teacher-edited
      try {
        const existing = await docRef.get();
        if (existing.exists && existing.data()?.origin === 'teacher') {
          console.log(`[seed-girraween] Skipping ${question.id} (teacher-edited)`);
          skipped++;
          continue;
        }
      } catch (err) {
        // Document doesn't exist, continue
      }

      // Add seed metadata
      const seedQuestion = {
        ...question,
        origin: 'seed',
        seedFile: 'girraween-2020',
        _seedTimestamp: admin.firestore.FieldValue.serverTimestamp(),
      };

      batch.set(docRef, seedQuestion, { merge: false });
      count++;
    }

    console.log(`[seed-girraween] Committing ${count} questions to Firestore...`);
    await batch.commit();

    console.log(`[seed-girraween] ✅ Success! Seeded ${count} questions (skipped ${skipped})`);

    return res.status(200).json({
      success: true,
      message: `Seeded ${count} Girraween 2020 questions to Firestore`,
      stats: {
        total: GIRRAWEEN_2020_ALL_QUESTIONS.length,
        seeded: count,
        skipped: skipped,
        chapter: 'exam:girr-2020',
        school: 'Girraween High School',
        year: 2020,
        subject: 'Year 12 Mathematics Advanced (2U)',
        marks: 100,
      }
    });

  } catch (err) {
    console.error('[seed-girraween] Error:', err.message);
    console.error(err);
    return res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
