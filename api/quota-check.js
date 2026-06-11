import admin from 'firebase-admin';
import nodemailer from 'nodemailer';
import { genericEmail } from './_lib/emailTemplates.js';

// Daily Firestore free-tier read-quota probe (Vercel cron, see vercel.json).
// The Spark plan read quota resets at midnight US Pacific (≈5 PM Sydney) and
// has a history of burning out within hours, which silently breaks every
// read-dependent feature (teacher resets, assignment sync) for the rest of
// the evening. This probe runs in that window and emails the admin when the
// quota is already gone. Firestore WRITES are a separate quota bucket, so
// logging to system_logs still works during a read outage.

const ALERT_EMAIL = process.env.ALERT_EMAIL || 'andrewjk82@gmail.com';
const PROBE_TIMEOUT_MS = 25_000;

const isQuotaExhausted = (err) =>
  err?.code === 8 ||
  /RESOURCE_EXHAUSTED|Quota exceeded/i.test(String(err?.details || err?.message || ''));

export default async function handler(req, res) {
  try {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
      });
    }
    const db = admin.firestore();

    const sydneyNow = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' });
    const todayStr = new Date().toLocaleDateString('en-CA', { timeZone: 'Australia/Sydney' });

    let probeError = null;
    try {
      await Promise.race([
        db.doc('sync_meta/questions').get(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('probe timed out')), PROBE_TIMEOUT_MS)),
      ]);
    } catch (err) {
      probeError = err;
    }

    if (!probeError) {
      console.log(`[quota-check] ${sydneyNow} — read quota healthy`);
      return res.status(200).json({ ok: true, quota: 'healthy', checkedAt: sydneyNow });
    }

    if (!isQuotaExhausted(probeError)) {
      // Transient/network failure — don't alert on ambiguous signals.
      console.warn(`[quota-check] probe failed (not quota): ${probeError.message}`);
      return res.status(200).json({ ok: true, quota: 'unknown', error: probeError.message });
    }

    console.error(`[quota-check] ${sydneyNow} — READ QUOTA EXHAUSTED`);

    // Once-per-day alert dedup that works during a read outage: document
    // create() is a WRITE (separate quota bucket) and fails with
    // ALREADY_EXISTS if today's alert doc is present — no read needed.
    const alertRef = db.doc(`system_logs/quota_alert_${todayStr}`);
    try {
      await alertRef.create({
        type: 'quota_alert',
        date: todayStr,
        detectedAt: new Date().toISOString(),
        emailSent: false,
        recipient: ALERT_EMAIL,
      });
    } catch (createErr) {
      if (createErr?.code === 6 /* ALREADY_EXISTS */) {
        console.log('[quota-check] alert already sent today — skipping email');
        return res.status(200).json({ ok: true, quota: 'exhausted', alreadyAlerted: true });
      }
      console.warn('[quota-check] dedup doc create failed:', createErr.message);
    }

    let emailSent = false;
    const GMAIL_USER = process.env.GMAIL_USER;
    const GMAIL_PASS = process.env.GMAIL_PASS;
    if (GMAIL_USER && GMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: { user: GMAIL_USER, pass: GMAIL_PASS },
      });
      const html = genericEmail({
        title: 'Firestore 무료 읽기 쿼터 고갈',
        body: [
          `<p><strong>${sydneyNow} (시드니)</strong> 기준 Firestore 일일 읽기 쿼터(Spark 무료 플랜, 50,000건)가 모두 소진되었습니다.</p>`,
          '<p>쿼터가 리셋되는 <strong>다음 오후 5시(시드니)</strong>까지 앱의 모든 Firestore 읽기가 실패합니다:</p>',
          '<ul>',
          '<li>학생 앱이 선생님의 Daily Sprint 리셋을 받지 못합니다</li>',
          '<li>오늘의 문제(assignment) 로딩·재생성이 실패합니다</li>',
          '<li>대시보드/리더보드 데이터가 캐시된 옛 상태로 보입니다</li>',
          '</ul>',
          '<p>리셋 등 읽기가 필요한 작업은 오후 5시 이후로 미루거나, Blaze 플랜 전환을 고려하세요.</p>',
        ].join(''),
        ctaLabel: 'Firebase 사용량 확인',
        ctaHref: 'https://console.firebase.google.com/project/sapere-fe23e/usage',
      });
      await transporter.sendMail({
        from: `"Sapere Aude" <${GMAIL_USER}>`,
        to: ALERT_EMAIL,
        subject: `⚠️ Firestore 읽기 쿼터 고갈 — ${todayStr}`,
        html,
      });
      emailSent = true;
      console.log(`[quota-check] alert email sent to ${ALERT_EMAIL}`);
    } else {
      console.warn('[quota-check] GMAIL credentials missing — alert email skipped');
    }

    await alertRef.set({ emailSent }, { merge: true })
      .catch((e) => console.warn('[quota-check] alert doc update failed:', e.message));

    return res.status(200).json({ ok: true, quota: 'exhausted', emailSent });
  } catch (err) {
    console.error('[quota-check] fatal:', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
