import admin from 'firebase-admin';
import nodemailer from 'nodemailer';
import { genericEmail, challengeCompleteEmail, pendingReviewEmail } from './_lib/emailTemplates.js';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildEmailTemplate(title, body, ctaLabel = 'Go to Academy') {
  return genericEmail({ title, body, ctaLabel });
}

const invalidTokenCodes = new Set([
  'messaging/invalid-registration-token',
  'messaging/registration-token-not-registered',
  'messaging/invalid-argument'
]);

async function sendPushToUser(adminInstance, userRef, userData, title, body) {
  const tokens = [...new Set([
    ...(userData.fcmTokens || []),
    ...(userData.fcmToken ? [userData.fcmToken] : [])
  ])].filter(Boolean);

  if (tokens.length === 0) {
    return { tokensFound: 0, successCount: 0, failureCount: 0, removedCount: 0 };
  }

  const response = await adminInstance.messaging().sendEachForMulticast({
    notification: { title, body },
    webpush: {
      notification: {
        icon: '/logo.png',
        badge: '/logo.png'
      },
      fcmOptions: {
        link: 'https://sapere-app.vercel.app'
      }
    },
    tokens
  });

  const invalidTokens = [];
  response.responses.forEach((result, index) => {
    if (!result.success) {
      console.error(`[send-notif] Token ${index} failed: ${result.error?.code} — ${result.error?.message}`);
      if (invalidTokenCodes.has(result.error?.code)) {
        invalidTokens.push(tokens[index]);
      }
    }
  });

  if (invalidTokens.length > 0) {
    const updatePayload = {
      fcmTokens: adminInstance.firestore.FieldValue.arrayRemove(...invalidTokens)
    };
    if (invalidTokens.includes(userData.fcmToken)) {
      updatePayload.fcmToken = adminInstance.firestore.FieldValue.delete();
    }
    await userRef.set(updatePayload, { merge: true });
  }

  return {
    tokensFound: tokens.length,
    successCount: response.successCount,
    failureCount: response.failureCount,
    removedCount: invalidTokens.length
  };
}

// Priority: always try users collection first (they have FCM tokens), then students (email only).
// A student added manually who later registered via app will have both a students/{manualId}
// doc and a users/{firebaseUID} doc. We must find the users doc to reach their FCM tokens,
// even when the caller passes the manual studentId.
async function findNotificationUser(db, studentId, email) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const emailCandidates = normalizedEmail && normalizedEmail !== email
    ? [email, normalizedEmail].filter(Boolean)
    : normalizedEmail ? [normalizedEmail] : [];

  // 1. users by direct ID (registered student, studentId === Firebase Auth UID)
  if (studentId) {
    const usersRef = db.collection('users').doc(studentId);
    const usersDoc = await usersRef.get();
    if (usersDoc.exists) {
      return { userRef: usersRef, userDoc: usersDoc, matchedBy: 'studentId', collection: 'users' };
    }
  }

  // 2. users by email — catches manual students who later registered via the app
  for (const candidate of emailCandidates) {
    const snap = await db.collection('users').where('email', '==', candidate).limit(1).get();
    if (!snap.empty) {
      const d = snap.docs[0];
      return { userRef: d.ref, userDoc: d, matchedBy: 'email', collection: 'users' };
    }
  }

  // 3. students by direct ID (manual/unregistered — email only)
  if (studentId) {
    const studentsRef = db.collection('students').doc(studentId);
    const studentsDoc = await studentsRef.get();
    if (studentsDoc.exists) {
      return { userRef: studentsRef, userDoc: studentsDoc, matchedBy: 'studentId', collection: 'students' };
    }
  }

  // 4. students by email
  for (const candidate of emailCandidates) {
    const snap = await db.collection('students').where('email', '==', candidate).limit(1).get();
    if (!snap.empty) {
      const d = snap.docs[0];
      return { userRef: d.ref, userDoc: d, matchedBy: 'email', collection: 'students' };
    }
  }

  return { userRef: null, userDoc: null, matchedBy: 'none', collection: null };
}

// Initialize Firebase Admin once per process. Non-fatal if credentials are missing —
// the function will still attempt to send email.
function getAdminDb() {
  try {
    if (!admin.apps.length) {
      const projectId = process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
      const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
      const privateKey = process.env.FIREBASE_PRIVATE_KEY;
      if (!projectId || !clientEmail || !privateKey) {
        console.warn('[send-notif] Missing Firebase credentials (ID, Email, or Key)');
        return null;
      }
      admin.initializeApp({
        projectId,
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey: privateKey.replace(/\\n/g, '\n'),
        }),
      });
      console.log(`[send-notif] Firebase Admin initialized for project: ${projectId}`);
    }
    return admin.firestore();
  } catch (err) {
    console.error('[send-notif] Firebase Admin init failed:', err.message);
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { studentId, email, subject, text, html, metadata, skipEmail } = req.body;
  console.log(`[send-notif] Request: studentId=${studentId} email=${email} subject="${subject}"`);

  const db = getAdminDb();
  console.log(`[send-notif] Firebase Admin: ${db ? 'OK' : 'NOT CONFIGURED (db is null)'}`);

  // Run email and Firebase in parallel — cuts total time roughly in half
  const emailTask = (async () => {
    if (skipEmail) return false;
    try {
      const GMAIL_USER = process.env.GMAIL_USER;
      const GMAIL_PASS = process.env.GMAIL_PASS;
      if (!GMAIL_USER || !GMAIL_PASS || !email) {
        if (!GMAIL_USER || !GMAIL_PASS) console.warn('[send-notif] GMAIL credentials missing — email skipped');
        if (!email) console.warn('[send-notif] Recipient email is missing — email skipped');
        return false;
      }
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: { user: GMAIL_USER, pass: GMAIL_PASS },
      });
      // Challenge-completed notifications get a dedicated visual template.
      let emailSubject = subject;
      let emailHtml;
      if (metadata?.type === 'challenge_completed') {
        const built = challengeCompleteEmail({
          studentName: metadata.studentName || 'A student',
          label: metadata.challengeType === 'calc' ? 'Basic Calculation' : 'Daily Challenge',
          score: Number(metadata.score) || 0,
          total: Number(metadata.total) || 0,
          xpEarned: Number(metadata.xpEarned) || 0,
          reviewCount: Number(metadata.reviewCount) || 0,
          reportCount: Number(metadata.reportCount) || 0,
        });
        emailSubject = built.subject;
        emailHtml = built.html;
      } else if (metadata?.type === 'pending_review') {
        const built = pendingReviewEmail({
          studentName: metadata.studentName || 'A student',
          source: metadata.challengeType === 'curriculum' ? 'Curriculum'
                : metadata.challengeType === 'exam_prep'  ? 'Exam Prep'
                : metadata.challengeType === 'calc'       ? 'Basic Calculation'
                :                                           'Daily Challenge',
          topicTitle: metadata.topicTitle || '',
          chapterTitle: metadata.chapterTitle || '',
          questionPreview: metadata.questionPreview || '',
        });
        emailSubject = built.subject;
        emailHtml = built.html;
      } else {
        emailHtml = buildEmailTemplate(subject, html || `<p style="margin:0; white-space:pre-wrap;">${escapeHtml(text || '')}</p>`);
      }
      await transporter.sendMail({
        from: `"Sapere Aude Academia" <${GMAIL_USER}>`,
        to: email,
        subject: emailSubject,
        html: emailHtml,
      });
      console.log(`[send-notif] Email sent to ${email}`);
      return true;
    } catch (err) {
      console.error('[send-notif] Email error:', err.message);
      return false;
    }
  })();

  const firebaseTask = (async () => {
    const result = {
      pushResult: { tokensFound: 0, successCount: 0, failureCount: 0, removedCount: 0 },
      notificationHistorySaved: false,
      matchedBy: 'none',
      lookupError: null
    };
    if (!db) {
      console.error('[send-notif] Firebase Admin not configured — push and history skipped');
      return result;
    }
    if (!studentId && !email) {
      console.error('[send-notif] Both studentId and email are missing — skipping Firebase');
      return result;
    }

    let lookup;
    try {
      lookup = await findNotificationUser(db, studentId, email);
    } catch (err) {
      console.error('[send-notif] User lookup error:', err.message);
      result.lookupError = err.message;
      return result;
    }

    result.matchedBy = lookup.matchedBy;
    const { userRef, userDoc, collection: userCollection } = lookup;
    console.log(`[send-notif] Lookup: studentId=${studentId} email=${email} → matchedBy=${lookup.matchedBy} collection=${userCollection} exists=${userDoc?.exists}`);

    if (!userRef || !userDoc?.exists) {
      console.warn(`[send-notif] No user found for studentId=${studentId}, email=${email}`);
      return result;
    }

    if (userCollection !== 'users') {
      console.log(`[send-notif] Student in '${userCollection}' collection — email only, no push`);
      return result;
    }

    // Save in-app notification — independent try-catch so push failure can't mask it
    try {
      await userRef.collection('notifications').add({
        title: subject,
        body: text || 'New notification',
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        read: false,
        type: metadata?.type || 'message',
        ...(metadata && typeof metadata === 'object' ? { metadata } : {})
      });
      result.notificationHistorySaved = true;
      console.log(`[send-notif] Notification saved for ${lookup.matchedBy}=${studentId || email}`);
    } catch (err) {
      console.error('[send-notif] Notification save error:', err.message);
    }

    // Send push — separate try-catch so it doesn't affect notification save result
    try {
      const userData = userDoc.data();
      console.log(`[send-notif] FCM tokens in doc: fcmTokens=${JSON.stringify(userData.fcmTokens)} fcmToken=${userData.fcmToken ? 'present' : 'missing'}`);
      result.pushResult = await sendPushToUser(admin, userRef, userData, subject, text || 'New notification');
      console.log(`[send-notif] Push result (${lookup.matchedBy}=${studentId || email}):`, result.pushResult);
    } catch (err) {
      console.error('[send-notif] Push send error:', err.message);
    }

    return result;
  })();

  const [emailSent, { pushResult, notificationHistorySaved, matchedBy, lookupError }] = await Promise.all([emailTask, firebaseTask]);

  return res.status(200).json({
    success: true,
    emailSent,
    tokensFound: pushResult.tokensFound,
    matchedBy,
    adminConfigured: !!db,
    notificationHistorySaved,
    pushSuccessCount: pushResult.successCount,
    pushFailureCount: pushResult.failureCount,
    invalidTokensRemoved: pushResult.removedCount,
    _debug: {
      receivedStudentId: studentId ?? null,
      receivedEmail: email ?? null,
      adminProjectId: admin.apps.length > 0 ? (admin.apps[0].options.projectId || 'inferred-from-credential') : 'no-app',
      lookupError: lookupError ?? null
    }
  });
}
