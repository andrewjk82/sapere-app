/* ==========================================================================
   Email sender — Resend
   --------------------------------------------------------------------------
   Shared by all API routes (send-report, send-notif, cron-unified). Replaces
   the old personal-Gmail / nodemailer setup, which throttled and spam-filtered
   bulk mail.

   Required Vercel environment variables:
     RESEND_API_KEY  — your Resend API key
     RESEND_FROM     — sender, e.g. "Sapere Aude Academia <noreply@yourdomain>"
                       (falls back to Resend's test address; that test address
                       can only deliver to the Resend account owner, so set a
                       verified-domain RESEND_FROM for real student delivery)

   Files under api/_lib are ignored by Vercel's function router.
   ========================================================================== */

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

/**
 * Send an email via Resend.
 * @returns {Promise<{sent: boolean, id?: string, error?: string}>}
 */
export async function sendEmail({ to, subject, html, text }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { sent: false, error: 'RESEND_API_KEY is not configured on the server.' };
  }
  if (!to) {
    return { sent: false, error: 'No recipient email address.' };
  }

  const from = process.env.RESEND_FROM || 'Sapere Aude Academia <onboarding@resend.dev>';

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: Array.isArray(to) ? to : [to],
        subject,
        ...(html ? { html } : {}),
        ...(text ? { text } : {}),
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      return { sent: false, error: `Resend ${res.status}: ${detail.slice(0, 300)}` };
    }
    const data = await res.json().catch(() => ({}));
    return { sent: true, id: data?.id || null };
  } catch (e) {
    return { sent: false, error: e?.message || 'Email request failed.' };
  }
}
