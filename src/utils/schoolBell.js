/**
 * schoolBell.js
 *
 * 첫 진입 시 오징어게임 "핑크 솔져" 원곡 음원을 1회 재생한다.
 *
 * ▶ 음원 파일: public/sounds/pink-soldiers.mp3 (직접 넣어야 함)
 *   - 파일이 없으면 조용히 아무 것도 하지 않는다(에러 없음).
 *   - 비상업·교실 내부 사용 전제. 외부 배포/판매 시 저작권 확인 필요.
 *
 * 브라우저 자동재생 정책: 사용자 제스처 없이 .play()가 거부될 수 있다.
 * 즉시 재생을 시도하고, 막히면 첫 클릭/터치/키 입력 때 1회 재생한다.
 *
 * (함수명 playSchoolBell / 파일명은 호출부 호환을 위해 그대로 둔다.)
 */

const SOUND_SRC = '/sounds/pink-soldiers.mp3';
const VOLUME = 0.6;

let played = false;

export const playSchoolBell = () => {
  if (played) return;
  if (typeof Audio === 'undefined') return;

  const EVENTS = ['touchend', 'click', 'pointerup', 'mousedown', 'keydown'];
  let listening = false;

  function removeListeners() {
    if (!listening) return;
    listening = false;
    EVENTS.forEach((e) => window.removeEventListener(e, onGesture, true));
  }

  const ring = (fromGesture) => {
    if (played) return;
    // 동기 잠금 — 한 제스처에서 여러 이벤트가 동시에 들어와도 중복 재생 방지.
    played = true;
    removeListeners();

    const audio = new Audio(SOUND_SRC);
    audio.volume = VOLUME;
    audio.play().catch(() => {
      if (fromGesture) return; // 제스처에서도 실패 → 파일 없음 등, 포기
      // 자동재생 차단 — 첫 제스처에 재생하도록 대기.
      played = false;
      if (!listening) {
        listening = true;
        EVENTS.forEach((e) =>
          window.addEventListener(e, onGesture, { capture: true, passive: true }),
        );
      }
    });
  };

  function onGesture() {
    ring(true);
  }

  // 1) 즉시 재생 시도 (데스크톱/이미 허용된 페이지)
  ring(false);
};
