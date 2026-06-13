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

// The class-reminder pipeline (/api/cron-unified) relies on an EXTERNAL
// hourly pinger (cron-job.org) — Vercel itself only fires it once a day.
// That pinger has silently auto-disabled itself before (June 2026, after a
// quota outage caused consecutive 500s), killing 2-hour class reminders and
// weekly reports with no visible symptom. This heartbeat check runs inside
// the Vercel-owned daily cron, so it survives the pinger dying: if the last
// 6 hours show fewer than 3 hourly cron_execution_start logs, alert the
// admin to re-enable the pinger.
const HEARTBEAT_WINDOW_MS = 6 * 60 * 60 * 1000;
const HEARTBEAT_MIN_RUNS = 3;

async function checkHourlyCronHeartbeat(db, sydneyNow, todayStr) {
  const since = new Date(Date.now() - HEARTBEAT_WINDOW_MS);
  // Single-field orderBy avoids needing a composite index; type is filtered
  // in memory (the window only ever holds a few dozen docs).
  const snap = await db.collection('system_logs')
    .where('timestamp', '>', since)
    .orderBy('timestamp', 'desc')
    .limit(100)
    .get();
  const runs = snap.docs.filter((d) => d.data().type === 'cron_execution_start').length;

  if (runs >= HEARTBEAT_MIN_RUNS) {
    console.log(`[quota-check] hourly cron heartbeat healthy (${runs} runs in last 6h)`);
    return { ok: true, runs };
  }

  console.error(`[quota-check] hourly cron pinger looks DOWN — ${runs} run(s) in last 6h`);

  // Once-per-day dedup, same write-only pattern as the quota alert.
  const alertRef = db.doc(`system_logs/cron_pinger_alert_${todayStr}`);
  try {
    await alertRef.create({
      type: 'cron_pinger_alert',
      date: todayStr,
      detectedAt: new Date().toISOString(),
      runsInWindow: runs,
      emailSent: false,
      recipient: ALERT_EMAIL,
    });
  } catch (createErr) {
    if (createErr?.code === 6 /* ALREADY_EXISTS */) {
      return { ok: false, runs, alreadyAlerted: true };
    }
    console.warn('[quota-check] pinger alert dedup doc create failed:', createErr.message);
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
      title: '매시간 크론 핑거가 멈춘 것 같습니다',
      body: [
        `<p><strong>${sydneyNow} (시드니)</strong> 기준, 최근 6시간 동안 /api/cron-unified 실행 기록이 <strong>${runs}건</strong>뿐입니다 (정상이면 6건).</p>`,
        '<p>외부 크론잡(cron-job.org)이 비활성화되었을 가능성이 큽니다. 이 상태에서는:</p>',
        '<ul>',
        '<li>수업 2시간 전 알람이 오후 7:30–8:30 수업을 제외하고 발송되지 않습니다</li>',
        '<li>일요일 주간 리포트가 발송되지 않습니다</li>',
        '<li>저녁 wrap-up 알람은 하루 1회분(15명)만 발송됩니다</li>',
        '</ul>',
        '<p>cron-job.org 대시보드에서 해당 작업을 다시 활성화해 주세요.</p>',
      ].join(''),
      ctaLabel: 'cron-job.org 열기',
      ctaHref: 'https://console.cron-job.org/jobs',
    });
    await transporter.sendMail({
      from: `"Sapere Aude" <${GMAIL_USER}>`,
      to: ALERT_EMAIL,
      subject: `⚠️ 수업 알람 크론 핑거 중단 감지 — ${todayStr}`,
      html,
    });
    emailSent = true;
    console.log(`[quota-check] pinger alert email sent to ${ALERT_EMAIL}`);
  } else {
    console.warn('[quota-check] GMAIL credentials missing — pinger alert email skipped');
  }

  await alertRef.set({ emailSent }, { merge: true })
    .catch((e) => console.warn('[quota-check] pinger alert doc update failed:', e.message));

  return { ok: false, runs, emailSent };
}

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
      const heartbeat = await checkHourlyCronHeartbeat(db, sydneyNow, todayStr)
        .catch((e) => ({ ok: false, error: e.message }));
      return res.status(200).json({ ok: true, quota: 'healthy', checkedAt: sydneyNow, heartbeat });
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
