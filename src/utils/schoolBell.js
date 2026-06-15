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

// iOS Safari 오디오 잠금 해제 — 제스처 안에서 무음 버퍼를 1회 재생해야
// 이후 AudioContext가 소리를 낸다.
const unlock = (ctx) => {
  try {
    const buffer = ctx.createBuffer(1, 1, 22050);
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.connect(ctx.destination);
    src.start(0);
  } catch {
    /* noop */
  }
};

/**
 * 학교 종소리를 1회 재생한다. 모듈 played 플래그로 중복 방지.
 *
 * iPad/iOS Safari는 사용자 제스처 밖에서 오디오를 절대 시작하지 못한다.
 * 따라서 AudioContext를 제스처가 일어날 때 생성/resume 하고, 무음 버퍼로
 * 잠금을 푼 뒤 종소리를 스케줄한다. 데스크톱처럼 이미 허용된 환경에서는
 * 즉시 재생을 시도한다.
 */
export const playSchoolBell = () => {
  if (played) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;

  // iOS에서 가장 안정적인 unlock 이벤트는 touchend/click. (touchstart는 불안정)
  const EVENTS = ['touchend', 'click', 'pointerup', 'mousedown', 'keydown'];
  let listening = false;

  const ring = (fromGesture) => {
    if (played) return;
    let ctx;
    try {
      ctx = new AC();
    } catch {
      return;
    }
    const go = () => {
      if (played) return;
      played = true;
      if (fromGesture) unlock(ctx);
      scheduleBell(ctx);
      removeListeners();
    };
    if (ctx.state === 'suspended') {
      // 제스처 안에서만 resume()이 허용됨
      ctx.resume().then(go).catch(() => {
        try { ctx.close(); } catch { /* noop */ }
      });
    } else {
      go();
    }
  };

  const onGesture = () => ring(true);
  function removeListeners() {
    if (!listening) return;
    listening = false;
    EVENTS.forEach((e) => window.removeEventListener(e, onGesture, true));
  }

  // 1) 즉시 시도 — 데스크톱/이미 활성화된 페이지면 바로 울림
  try {
    const probe = new AC();
    if (probe.state === 'running') {
      played = true;
      scheduleBell(probe);
      return;
    }
    probe.close().catch(() => {});
  } catch {
    /* noop */
  }

  // 2) 막혀 있으면 첫 제스처에 재생 (iOS 포함)
  listening = true;
  EVENTS.forEach((e) =>
    window.addEventListener(e, onGesture, { capture: true, passive: true }),
  );
};
