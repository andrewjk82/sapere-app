/**
 * schoolBell.js
 *
 * 첫 진입 시 "오징어게임" 핑크 솔져(Pink Soldiers) 테마를 떠올리게 하는
 * 행진곡 모티프를 Web Audio API로 합성해 재생한다. 오디오 파일 의존성이
 * 없어 번들/로딩/저작권 부담이 없다. (오케스트라 원곡의 완벽한 재현이
 * 아니라 신스로 분위기를 살린 버전이다.)
 *
 * 브라우저 자동재생 정책: 사용자 제스처 없이 시작하면 AudioContext가
 * 'suspended' 상태일 수 있다. 이 경우 첫 클릭/키 입력 시 1회 재생되도록
 * 폴백 리스너를 건다.
 *
 * (함수명 playSchoolBell / 파일명은 호출부 호환을 위해 그대로 둔다.)
 */

// 음 주파수 (concert pitch)
const F = {
  G4: 392.0, A4: 440.0, B4: 493.88, C5: 523.25,
  D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99,
};

// 핑크 솔져 행진 모티프 — 스타카토 반복음("di-di-di-di") + 작은 회전 음형.
// { freq, at(초), dur(초) }
const MELODY = [
  // A구 — 낮은 반복 + 상행
  { f: F.A4, at: 0.00, d: 0.14 },
  { f: F.A4, at: 0.16, d: 0.14 },
  { f: F.A4, at: 0.32, d: 0.14 },
  { f: F.C5, at: 0.48, d: 0.14 },
  { f: F.A4, at: 0.64, d: 0.14 },
  { f: F.B4, at: 0.80, d: 0.14 },
  { f: F.C5, at: 0.96, d: 0.32 },
  // A구 반복 + 하행 마무리
  { f: F.A4, at: 1.36, d: 0.14 },
  { f: F.A4, at: 1.52, d: 0.14 },
  { f: F.A4, at: 1.68, d: 0.14 },
  { f: F.C5, at: 1.84, d: 0.14 },
  { f: F.A4, at: 2.00, d: 0.14 },
  { f: F.G4, at: 2.16, d: 0.14 },
  { f: F.A4, at: 2.32, d: 0.40 },
  // B구 — 높은 응답 프레이즈
  { f: F.E5, at: 2.84, d: 0.14 },
  { f: F.E5, at: 3.00, d: 0.14 },
  { f: F.E5, at: 3.16, d: 0.14 },
  { f: F.D5, at: 3.32, d: 0.14 },
  { f: F.C5, at: 3.48, d: 0.14 },
  { f: F.D5, at: 3.64, d: 0.14 },
  { f: F.E5, at: 3.80, d: 0.32 },
  { f: F.C5, at: 4.20, d: 0.14 },
  { f: F.B4, at: 4.36, d: 0.14 },
  { f: F.A4, at: 4.52, d: 0.50 },
];

// 행진 느낌을 위한 낮은 스타카토 비트(베이스 펄스).
const BASS = [
  0.0, 0.48, 0.96, 1.36, 1.84, 2.32, 2.84, 3.32, 3.80, 4.52,
].map((at) => ({ f: F.A4 / 2, at, d: 0.12 }));

// 브라스풍 스타카토 1음 — 톱니파 + 한 옥타브 아래 보강.
const playBrassNote = (ctx, master, { f, at, d }, { amp = 0.22, body = true } = {}) => {
  const start = at;
  const voices = body ? [{ mul: 1, g: amp }, { mul: 0.5, g: amp * 0.5 }] : [{ mul: 1, g: amp }];
  voices.forEach(({ mul, g }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.value = f * mul;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(g, start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + d);
    osc.connect(gain).connect(master);
    osc.start(start);
    osc.stop(start + d + 0.05);
  });
};

const scheduleBell = (ctx) => {
  const now = ctx.currentTime + 0.08;
  const master = ctx.createGain();
  master.gain.value = 0.45;
  master.connect(ctx.destination);

  MELODY.forEach((n) => playBrassNote(ctx, master, { ...n, at: now + n.at }, { amp: 0.24 }));
  BASS.forEach((n) => playBrassNote(ctx, master, { ...n, at: now + n.at }, { amp: 0.18, body: false }));

  // 멜로디가 끝나면 컨텍스트 정리
  setTimeout(() => ctx.close().catch(() => {}), 7000);
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
