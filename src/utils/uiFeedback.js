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

/**
 * 작고 고급스러운 "펠트 두드림(Felt tap)" 클릭음 + 가벼운 진동.
 * 로우패스로 거른 짧은 노이즈 버스트 — 톤이 거의 없는 부드러운 탭.
 */
export const tick = () => {
  // 햅틱 (Android 등 지원 기기만)
  try { navigator.vibrate && navigator.vibrate(6); } catch { /* noop */ }

  const c = getCtx();
  if (!c) return;
  if (c.state === 'suspended') c.resume().catch(() => {});

  const now = c.currentTime;
  const dur = 0.03;

  // 짧은 감쇠 노이즈 버퍼
  const len = Math.max(1, Math.floor(c.sampleRate * dur));
  const buf = c.createBuffer(1, len, c.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / len);
  }
  const src = c.createBufferSource();
  src.buffer = buf;

  // 로우패스로 부드럽게(700Hz) + 작은 볼륨
  const lp = c.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 700;

  const g = c.createGain();
  g.gain.setValueAtTime(0.04, now);
  g.gain.exponentialRampToValueAtTime(0.0001, now + dur);

  src.connect(lp).connect(g).connect(c.destination);
  src.start(now);
  src.stop(now + dur + 0.02);
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
