# Question Bank Expansion Checklist

**트리거:** "y7-4 문제 더 만들어줘" / "이 토픽에 문제 추가해줘"처럼 **특정
chapterId 또는 topicId**를 지정해서 요청할 때 이 프로세스를 따른다.

이건 `PAST_PAPER_CHECKLIST.md`(특정 시험지를 통째로 변환하는 작업)와는 다른
작업이다 — 여기서는 **PDF 원본이 없다.** 기준은 **Firestore에 이미 시딩되어
있는 해당 토픽의 기존 문제들**이다. 이미 플랫폼이 소유/제작한 콘텐츠를
참고하는 것이므로 `PAST_PAPER_CHECKLIST.md`에서 다뤘던 제3자 저작권 문제는
해당하지 않는다 (단, 그 기존 문제 자체가 특정 교과서/기출을 변형한 것이라면
그 원본이 뭔지 먼저 확인할 것 — 애매하면 사용자에게 물어볼 것).

---

## 1. 먼저 기존 문제들을 읽어서 스타일을 파악할 것

**전체 컬렉션을 스캔하지 말 것** — CLAUDE.md 규칙대로 `chapterId`/`topicId`로
좁힌 쿼리만 사용:

```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.config/firebase/andrewjk82_gmail_com_application_default_credentials.json \
  node -e "
const admin = require('firebase-admin');
admin.initializeApp({ projectId: 'sapere-fe23e' });
const db = admin.firestore();
(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y7-4b').get();
  console.log('기존 문제 수:', snap.size);
  snap.docs.slice(0, 5).forEach(d => console.log(d.id, '|', d.data().difficulty, '|', d.data().question));
  process.exit(0);
})();
"
```

확인할 것:
- 난이도 분포 (easy/medium/hard 비율)
- 문제 스타일 (계산형인지, 문장제인지, 도형/그래프가 있는지)
- 기존 `id` 네이밍 패턴 (새 id가 겹치지 않게)
- `origin` 필드 — `origin: 'teacher'`인 문서는 절대 참고용으로도 건드리지 말 것

---

## 2. 새 문제는 "비슷한 스타일"이지 "복사"가 아님

기존 문제의 **특정 숫자·시나리오·워딩을 그대로 베끼지 말 것.** 같은 스킬/난이도
분포를 유지하되 완전히 새로운 시나리오와 숫자로 쓴다. 사용자가 요청한 개수를
난이도별로 고르게 분배 (예: 20개 요청 시 easy 6, medium 10, hard 4 정도).

---

## 2.5. 모든 문제는 반드시 객관식(multiple_choice)만 — 예외 없음 (2026-07-30)

**코퍼스에서 생성하는 문제는 예외 없이 전부 `type: 'multiple_choice'`.**
`short_answer`/`teacher_review`/`fill_blank` 등 다른 타입은 절대 만들지 않는다
— 매번 사용자가 말할 필요 없이 항상 적용되는 규칙.

실무적으로 이건 **"show that", "prove", "draw", "construct", "justify",
"explain why"** 류의 서술형/증명/작도 스킬은 **코퍼스 생성 대상에서 아예
제외**한다는 뜻이다. 그런 스킬은 객관식으로 억지로 우겨넣지 말고, 해당
문제/스킬 자체를 스킵할 것 (예: "요청한 토픽에 증명형 문항이 섞여 있으면
그 부분만 빼고 나머지를 객관식으로 채운다" 또는 사용자에게 확인).

기존에 만든 문제 중 이 규칙 이전에 생성된 short_answer 문제가 있다면(예:
2026-07-30 y11s-2 10문제 중 5개), 그건 그대로 두고 사용자가 명시적으로
바꿔달라고 할 때만 손댈 것 — 규칙은 **앞으로 생성하는 문제부터** 적용.

---

## 3. 문제 스키마 (일반 챕터 문제 — exam paper 아님)

```js
{
  id: 'y7-4b-gen-1',           // 기존 id와 안 겹치는 새 접미사 (예: -gen-N)
  chapterId: 'y7-4',
  topicId: 'y7-4b',
  topicCode: '4B',
  type: 'multiple_choice',      // 반드시 이 값 — 'mc' 아님 (PAST_PAPER_CHECKLIST 4번 참고)
  difficulty: 'medium',
  timeLimit: 120,
  t: '토픽 제목',
  question: '...',
  options: ['...', '...', '...', '...'],  // 중복 절대 금지
  answer: '0',                  // 옵션 인덱스(문자열) — 항상 index 0에 정답 둬도 무방 (표시 시 자동 셔플)
  requiresManualGrading: false,
  solutionSteps: [ { explanation: '...', workingOut: '...' } ]
}
```

**exam paper 전용 필드(`examPaper`)는 여기선 필요 없음** — 이건 시험지가 아니라
그 토픽의 일반 연습 문제 풀에 그냥 추가되는 것.

서브 문제가 필요하면 `PAST_PAPER_CHECKLIST.md` 2번의 `subQuestions` 스키마를
동일하게 적용.

---

## 4. 업로드 전 검증

```bash
node -e "
const { NEW_QUESTIONS } = require('./경로/파일.js');
let bad = 0;
const seen = new Set();
NEW_QUESTIONS.forEach(q => {
  if (seen.has(q.id)) { console.log('DUP ID:', q.id); bad++; }
  seen.add(q.id);
  const optSeen = new Set();
  (q.options||[]).forEach(o => {
    const k = String(o).trim();
    if (optSeen.has(k)) { console.log('DUP OPT:', q.id, k); bad++; }
    optSeen.add(k);
  });
});
console.log('Total:', NEW_QUESTIONS.length, '| issues:', bad);
"
```

기존 문제들과도 id가 안 겹치는지 위 1번에서 가져온 목록과 대조.

---

## 5. Firestore 업로드 + 인덱스 재구축

`PAST_PAPER_CHECKLIST.md` 8·9번과 동일한 패턴:
```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.config/firebase/andrewjk82_gmail_com_application_default_credentials.json \
  node -e "... db.collection('questions').doc(q.id).set({...}, { merge: true }) ..."
```
새 문제 **추가**이므로 반드시 full rebuild (`touchChapterIndex`로는 부족):
```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.config/firebase/andrewjk82_gmail_com_application_default_credentials.json \
  node tools/scripts/rebuildQuestionIndexes.js y7-4
```

---

## 6. 배포 전 체크

`PAST_PAPER_CHECKLIST.md` 10번과 동일: 로컬 `npm run build` 통과 →
Firestore에서 `chapterId`/`topicId` 쿼리로 새 문제 수 확인 → git commit & push.

---

## 요약 (복붙용)

- [ ] 대상 chapterId/topicId의 기존 문제들 조회 (scoped query, full scan 금지)
- [ ] 난이도 분포·스타일 파악, `origin: 'teacher'` 문서는 참고만 하고 건드리지 않음
- [ ] 요청한 개수를 난이도별로 분배해서 **완전히 새로운 시나리오**로 작성 (복사 금지)
- [ ] **전부 `type: 'multiple_choice'`만** — show that/prove/draw/construct류는 스킵
- [ ] 옵션 중복 없음, 기존 id와 안 겹치는 새 id
- [ ] `$` 등은 `\( \)` 안에
- [ ] Firestore 업로드 → 해당 챕터 `rebuildQuestionIndexes.js` full rebuild
- [ ] `npm run build` 통과 → git commit & push
