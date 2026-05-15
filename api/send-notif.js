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
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="color-scheme" content="light only">
      <meta name="supported-color-schemes" content="light">
      <title>${escapeHtml(title)}</title>
    </head>
    <body bgcolor="#f7f4ff" style="margin:0; padding:0; background:#f7f4ff; font-family:Arial, Helvetica, sans-serif; color:#1e1b4b;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#f7f4ff" style="background:#f7f4ff;">
        <tr>
          <td align="center" style="padding:28px 14px 32px;">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="max-width:720px; background:#ffffff; border-radius:26px; overflow:hidden; border:1px solid #e8e2ff; box-shadow:0 18px 45px rgba(99,102,241,0.12);">
              <tr>
                <td align="center" bgcolor="#ede9fe" style="background:#ede9fe; padding:34px 28px; border-bottom:1px solid #ddd6fe;">
                  <div style="font-size:30px; line-height:1.15; font-weight:900; color:#312e81; letter-spacing:0;">Sapereaude Academia</div>
                </td>
              </tr>
              <tr>
                <td bgcolor="#ffffff" style="background:#ffffff; padding:46px 44px 42px;">
                  <h1 style="margin:0 0 24px; font-size:28px; line-height:1.28; font-weight:900; color:#1e1b4b;">${escapeHtml(title)}</h1>
                  <div style="font-size:19px; line-height:1.68; color:#475569;">
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:20px; padding:26px 28px;">
                      ${body}
                    </div>
                  </div>
                  <div style="margin-top:36px; padding-top:26px; border-top:1px solid #eef2ff; text-align:center;">
                    <a href="https://sapere-app.vercel.app" style="display:inline-block; min-width:150px; background:#6366f1; color:#ffffff; padding:15px 32px; border-radius:999px; text-decoration:none; font-size:16px; font-weight:900; box-shadow:0 10px 22px rgba(99,102,241,0.24);">${ctaLabel}</a>
                  </div>
                </td>
              </tr>
            </table>
            <p style="margin:24px 0 0; color:#64748b; font-size:14px; line-height:1.5; font-weight:600;">© 2026 Sapereaude Academia. All rights reserved.</p>
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
        connectionTimeout: 8000,
        greetingTimeout: 5000,
        socketTimeout: 10000,
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
