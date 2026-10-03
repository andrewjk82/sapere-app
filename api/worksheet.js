import admin from 'firebase-admin';
import { createWorksheetHandler, createAllowlistLoader } from './_lib/worksheetProxy.js';
import { extractDriveFileId } from '../src/utils/homework.js';

// GET /api/worksheet?id=<driveFileId> — see api/_lib/worksheetProxy.js.

function getAdminDb() {
  if (!admin.apps.length) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY;
    if (!projectId || !clientEmail || !privateKey) throw new Error('missing Firebase admin credentials');
    admin.initializeApp({
      projectId,
      credential: admin.credential.cert({ projectId, clientEmail, privateKey: privateKey.replace(/\\n/g, '\n') }),
    });
  }
  return admin.firestore();
}

// `curriculum` holds one small doc per year/course (not a growing collection).
const getAllowedIds = createAllowlistLoader({
  readCurriculumDocs: async () => (await getAdminDb().collection('curriculum').get()).docs.map((d) => d.data()),
  extractId: extractDriveFileId,
});

export default createWorksheetHandler({ getAllowedIds });
