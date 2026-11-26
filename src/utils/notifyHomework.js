// Sends the homework notice to each student and says what actually arrived, for the teacher's toast.
const describe = async ({ name, payload }) => {
  try {
    const res = await fetch('/api/send-notif', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`send-notif ${res.status}`);
    const r = await res.json();
    const pushed = r.pushSuccessCount > 0;
    const sent = [r.emailSent && 'email', r.notificationHistorySaved && 'in-app', pushed && 'push'].filter(Boolean);
    const missed = [];
    if (!r.emailSent) missed.push(payload.email ? 'email failed' : 'no email');
    if (!r.notificationHistorySaved) missed.push('no app account');
    else if (!pushed) missed.push(r.tokensFound ? 'push failed' : 'push is off on their device');
    return {
      ok: sent.length > 0,
      text: `${name}: ${sent.length ? `sent (${sent.join(', ')})` : 'NOT sent'}${missed.length ? ` — ${missed.join(', ')}` : ''}`,
    };
  } catch (err) {
    console.warn('Homework notification failed:', err);
    return { ok: false, text: `${name}: NOT sent — couldn’t reach the server` };
  }
};

// items: [{ name, payload }] where payload is the /api/send-notif body.
export const notifyHomework = async (items, showToast) => {
  const results = await Promise.all(items.map(describe));
  const ok = results.every((r) => r.ok);
  showToast(`Notification — ${results.map((r) => r.text).join(' · ')}`, ok ? 'success' : 'warning', ok ? 6000 : 10000);
};
