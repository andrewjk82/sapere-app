/**
 * schoolBell.js
 *
 * 한국 학교 종소리(차임벨 = 웨스트민스터 "딩–동–댕–동")를 Web Audio API로
 * 합성해 재생한다. 오디오 파일 의존성이 없어 번들/로딩/저작권 부담이 없다.
 *
 * 브라우저 자동재생 정책: 사용자 제스처 없이 시작하면 AudioContext가
 * 'suspended' 상태일 수 있다. 이 경우 첫 클릭/키 입력 시 1회 재생되도록
 * 폴백 리스너를 건다.
 */

// 종소리 멜로디 — 웨스트민스터 4음 (E5 · C5 · D5 · G4), 종 특유의 배음 + 감쇠.
const NOTES = [
  { freq: 659.25, at: 0.0 },  // E5  딩
  { freq: 523.25, at: 0.62 }, // C5  동
  { freq: 587.33, at: 1.24 }, // D5  댕
  { freq: 392.0, at: 1.9 },   // G4  동─
];

const scheduleBell = (ctx) => {
  const now = ctx.currentTime + 0.05;
  const master = ctx.createGain();
  master.gain.value = 0.5;
  master.connect(ctx.destination);

  NOTES.forEach(({ freq, at }, idx) => {
    const start = now + at;
    // 마지막 음은 길게 울리도록 감쇠 시간을 늘림
    const decay = idx === NOTES.length - 1 ? 2.6 : 1.7;
    // 배음 3개로 종(bell) 음색 근사
    [1, 2, 3].forEach((harmonic, h) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq * harmonic;
      const amp = 0.42 / (h + 1);
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(amp, start + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + decay);
      osc.connect(gain).connect(master);
      osc.start(start);
      osc.stop(start + decay + 0.1);
    });
  });

  // 멜로디가 끝나면 컨텍스트 정리
  setTimeout(() => ctx.close().catch(() => {}), 6000);
};

let played = false;

/**
 * 학교 종소리를 1회 재생한다. 세션당 1회만 울리도록 호출 측에서 가드해도 되고,
 * 이 함수 자체도 played 플래그로 중복 방지한다.
 */
export const playSchoolBell = () => {
  if (played) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;

  let ctx;
  try {
    ctx = new AC();
  } catch {
    return;
  }

  let fired = false;
  const fire = () => {
    if (fired) return;
    fired = true;
    played = true;
    scheduleBell(ctx);
  };

  if (ctx.state === 'suspended') {
    // 자동재생 차단 — 첫 제스처에 재생
    const onGesture = () => {
      ctx.resume().then(fire).catch(() => {});
      window.removeEventListener('pointerdown', onGesture);
      window.removeEventListener('keydown', onGesture);
      window.removeEventListener('touchstart', onGesture);
    };
    window.addEventListener('pointerdown', onGesture, { once: true });
    window.addEventListener('keydown', onGesture, { once: true });
    window.addEventListener('touchstart', onGesture, { once: true });
    // 혹시 허용되는 환경이면 즉시 시도
    ctx.resume().then(fire).catch(() => {});
  } else {
    fire();
  }
};
