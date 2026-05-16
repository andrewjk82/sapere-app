import admin from 'firebase-admin';
import nodemailer from 'nodemailer';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function buildEmailTemplate(title, body, ctaLabel = 'Go to Academy') {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="color-scheme" content="light only">
      <title>${escapeHtml(title)}</title>
      <style>
        body, table, td, a { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
      </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f3f4f6; -webkit-font-smoothing: antialiased;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#f3f4f6" style="background-color: #f3f4f6; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);">
              <!-- Header -->
              <tr>
                <td align="center" bgcolor="#bba8ff" style="background-color: #bba8ff; padding: 40px 30px;">
                  <h1 style="margin: 0; font-size: 28px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">Sapere Aude</h1>
                  <p style="margin: 8px 0 0; font-size: 14px; color: #ffffff; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Academia</p>
                </td>
              </tr>
              <!-- Content -->
              <tr>
                <td style="padding: 40px 40px 30px;">
                  <h2 style="margin: 0 0 24px 0; font-size: 24px; font-weight: 800; color: #1e1b4b; line-height: 1.3;">${escapeHtml(title)}</h2>
                  <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 24px; font-size: 16px; line-height: 1.6; color: #334155; margin-bottom: 32px;">
                    ${body}
                  </div>
                  <!-- CTA -->
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #f1f5f9; padding-top: 30px;">
                    <tr>
                      <td align="center">
                        <a href="https://sapere-app.vercel.app" style="display: inline-block; background-color: #4f46e5; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 700; padding: 16px 36px; border-radius: 100px; box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);">${ctaLabel}</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <!-- Footer -->
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
              <tr>
                <td align="center" style="padding: 30px 20px; font-size: 13px; color: #94a3b8; font-weight: 500; line-height: 1.5;">
                  <p style="margin: 0;">© 2026 Sapere Aude Academia.<br>Empowering your mathematical journey.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
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

  const { studentId, email, subject, text, html, metadata } = req.body;
  console.log(`[send-notif] Request: studentId=${studentId} email=${email} subject="${subject}"`);

  const db = getAdminDb();
  console.log(`[send-notif] Firebase Admin: ${db ? 'OK' : 'NOT CONFIGURED (db is null)'}`);

  // Run email and Firebase in parallel — cuts total time roughly in half
  const emailTask = (async () => {
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
      await transporter.sendMail({
        from: `"Sapere Aude Academia" <${GMAIL_USER}>`,
        to: email,
        subject: subject,
        html: buildEmailTemplate(subject, html || `<p style="margin:0; white-space:pre-wrap;">${escapeHtml(text || '')}</p>`)
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
