/**
 * uiFeedback.js
 *
 * 버튼/탭에 "눌리는 느낌"을 준다 — 짧은 클릭음(Web Audio 합성) + 햅틱(진동).
 *
 * 클릭음은 버튼 pointerdown(=사용자 제스처) 안에서 재생되므로 iOS Safari에서도
 * 정상 작동한다. 햅틱(navigator.vibrate)은 Android만 지원하고 iOS 웹은 무시된다.
 */

let ctx = null;

const getCtx = () => {
  if (ctx) return ctx;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  try {
    ctx = new AC();
  } catch {
    ctx = null;
  }
  return ctx;
};

/** 짧은 "톡" 클릭음 + 가벼운 진동. */
export const tick = () => {
  // 햅틱 (Android 등 지원 기기만)
  try { navigator.vibrate && navigator.vibrate(8); } catch { /* noop */ }

  const c = getCtx();
  if (!c) return;
  if (c.state === 'suspended') c.resume().catch(() => {});

  const now = c.currentTime;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = 'triangle';
  // 짧게 떨어지는 피치 → 부드러운 "톡"
  osc.frequency.setValueAtTime(440, now);
  osc.frequency.exponentialRampToValueAtTime(190, now + 0.04);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.1, now + 0.005); // 작은 볼륨
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
  osc.connect(gain).connect(c.destination);
  osc.start(now);
  osc.stop(now + 0.07);
};

const INTERACTIVE = 'button, a[href], [role="button"], .app-button, [data-press]';

/**
 * 앱 전역에 버튼 피드백을 1회 설치한다.
 * pointerdown(터치 다운 즉시)에 반응해 더 즉각적인 촉감을 준다.
 * 비활성/제외(.no-press) 요소는 건너뛴다.
 */
export const installButtonFeedback = () => {
  if (typeof document === 'undefined' || window.__uiFeedbackInstalled) return;
  window.__uiFeedbackInstalled = true;

  document.addEventListener(
    'pointerdown',
    (e) => {
      const el = e.target && e.target.closest && e.target.closest(INTERACTIVE);
      if (!el) return;
      if (el.disabled || el.getAttribute('aria-disabled') === 'true') return;
      if (el.closest('.no-press')) return;
      tick();
    },
    { capture: true, passive: true },
  );
};
