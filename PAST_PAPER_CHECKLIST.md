# Past Paper Import Checklist

이 문서는 "이 past paper 문제들 추가해줘" + PDF/텍스트를 줄 때, Claude Code가
**반드시** 따라야 하는 절차입니다. 2026-07-29~30 Killara 1995 (Year 7) 작업에서
실제로 터진 버그들을 근거로 작성했습니다. HSC(11/12학년) 전용 세부 LaTeX/그래프
규칙은 `PAST_PAPER_PROMPT.md`를 같이 참고하세요 — 이 문서는 **모든 학년(1~12)에
공통으로 적용되는 프로세스 + 버그 방지 체크리스트**입니다.

---

## 0. 시작 전에 사용자에게 확인할 것

- PDF/텍스트의 **전체 문항 수**를 먼저 세어 사용자에게 보고할 것. "대표로 몇 개만"
  만들지 말고 **전체 문항을 100% 변환**하는 게 기본값. 일부만 만들 계획이면 먼저
  사용자에게 물어볼 것 (Killara 사고: 60문항 중 26개만 만들고 "완료"라고 보고함).
- 대상 학년이 Year 7~10(주니어)인지 Year 11~12(HSC)인지에 따라 topicId 포맷이
  다름 (아래 1번 참고). 헷갈리면 먼저 확인.

---

## 1. 원본 그대로 넣지 말 것 — 문제마다 "변형(variant)" 버전도 추가

PDF에 있는 문제를 **똑같이 베껴 넣지 말 것.** 원본 문항마다 숫자/이름/맥락을 바꾼
변형 버전을 하나 더 만들어서 같이 추가한다 (원본 학생과 다른 학생이 풀 때 문제
은행이 마르지 않도록).

**바꿔야 하는 것:**
- 숫자/값 (예: `85 × (102 + 8)` → `75 × (96 + 4)`처럼 다른 숫자)
- 사람 이름 (Tom → Mia, Jerry → Kaito 등)
- 맥락/소재 (피자 → 케이크, 펜 가격 → 공책 가격 등)

**바꾸면 안 되는 것:** 같은 스킬, 같은 문제 구조, 같은 난이도. 정답 위치를 일부러
섞을 필요는 없음 — 모든 화면이 표시 시점에 자동으로 셔플하므로
(`src/utils/mcOptionShuffle.js`), 시드 단계에서 정답을 항상 index 0에 둬도 무방
(CLAUDE.md 참고: "seed-time 셔플 금지").

**구현 방식 — 두 가지 컨벤션이 존재:**
- 이번 Killara 방식: 같은 파일의 두 번째 export, id에 `-var-qN` 접미사
  (`Y7_KILLARA_1995_SIMILAR`, id: `y7-1-killara-var-q1`)
- HSC(`PAST_PAPER_PROMPT.md`) 방식: 별도 파일 `seed[School][Year]SimilarQuestions.js`,
  export `[SCHOOLNAME]_[YEAR]_SIMILAR_QUESTIONS`, id에 `s-` 접미사

어느 쪽이든 상관없지만, **한 시험지 안에서는 하나의 컨벤션으로 통일**할 것.
변형 문제도 원본과 **동일한 `chapterId`/`topicId`/`topicCode`**를 가져야 함 (2번 참고).

---

## 2. topicId/chapterId는 반드시 "진짜" 커리큘럼 토픽으로 매핑

**절대 하나의 placeholder topicId(예: `y7-exam-killara`, `y12a-exam`)만 쓰고
끝내지 말 것.** 그렇게 하면 Past Paper 단독 화면에서만 보이고, 학생이 평소
"Chapter 1 → 1G Place value"를 연습할 때 이 문제들이 섞여 들어가지 않는다.

**진짜 topicId를 찾는 법:**
```bash
grep -n "'y7-4'" -A 15 src/constants/curriculumData.js | grep -E "id:|title:"
```
`src/constants/curriculumData.js`에서 대상 챕터의 `topics` 배열을 찾아
`id`(예: `y7-4h`), `code`(예: `4H`), `title`을 그대로 가져다 쓸 것 — 지어내지 말 것.

**문항마다 실제 스킬에 맞는 챕터/토픽을 배정** (예: "$2.35×6" 같은 돈 계산 문제는
챕터 ID를 그 문제가 원래 있던 챕터가 아니라 **decimals 곱셈 챕터**로 옮겨야 함).
대응하는 실제 토픽이 없는 내용(예: 로마 숫자)은 가장 가까운 revision/기타 토픽에
배정하고, 억지로 끼워 맞추지 말 것.

각 question 객체에 **개별로** 다음을 넣는다 (레지스트리의 챕터 기본값에 기대지 말 것):
```js
{
  id: 'y7-1-killara-q4',
  chapterId: 'y7-1',      // 실제 챕터
  topicId: 'y7-1g',       // 실제 토픽 (curriculumData.js에서 확인한 값)
  topicCode: '1G',
  t: 'Place value',       // topicTitle로 쓰임
  ...
}
```

Firestore에 쓸 때도 이 값을 그대로 `chapterId`/`topicId`/`topicCode`/`topicTitle`
필드에 반영. `examPaper` 필드는 별개로 계속 유지 (아래 3번).

---

## 3. `type` 필드는 반드시 `'multiple_choice'` — `'mc'` 아님

```js
type: 'multiple_choice',   // ✅
type: 'mc',                // ❌ 절대 금지
```

`src/services/chapterSeeder.js`의 `mapSeedQuestion()`은
`const isMC = raw.type === 'multiple_choice';` 로만 MC를 판별한다. `'mc'`를
쓰면 `isMC`가 false가 되어 **매 세션마다 자동 실행되는
`autoSyncSeedsIfChanged()`가 조용히 `options: []`로 덮어써버린다** — 화면에서
"답이 없다"는 증상으로 나타남. 이 버그는 재현이 쉽고 원인 파악이 어려우니 처음부터
`'multiple_choice'`로 쓸 것.

---

## 4. `examPaper` 필드 필수

레지스트리 엔트리(`curriculumSeeds.js`의 `CHAPTER_SEED_REGISTRY`)에
`examPaper: 'school-year'`를 설정하고, **각 question 문서에도 동일한 값**을
`examPaper` 필드로 넣을 것. `QuestionBankPage.jsx`의 exam-paper 뷰(Past Papers
"👁️ View" 버튼)는 `where('examPaper', '==', examPaperKey)`로 조회하므로, 이
필드가 없으면 문제를 다 올려도 "No questions yet"으로 보인다.

---

## 5. 옵션 중복 금지

같은 질문 안에서 **정답 텍스트가 오답으로도 등장하면 안 됨** (예:
`options: ['9350', '8870', '9350', '9175']` — 인덱스 0과 2가 동일). 이러면 MC
채점/셔플 로직이 깨진다. 업로드 전에 항상 검증:

```bash
node -e "
const { XXX_QUESTIONS, XXX_SIMILAR } = require('./src/constants/seedXXX.js');
const all = [...XXX_QUESTIONS, ...XXX_SIMILAR];
let bad = 0;
all.forEach(q => {
  const seen = new Set();
  (q.options||[]).forEach(o => {
    const k = String(o).trim();
    if (seen.has(k)) { console.log('DUP OPT:', q.id, k); bad++; }
    seen.add(k);
  });
});
const ids = new Set(); let dupIds=0;
all.forEach(q => { if (ids.has(q.id)) { console.log('DUP ID:', q.id); dupIds++; } ids.add(q.id); });
console.log('Total:', all.length, '| dup options:', bad, '| dup ids:', dupIds);
"
```

---

## 6. LaTeX: `$`(달러 기호)는 반드시 `\( ... \)` 안에서만

```js
question: 'A shop sells pens for \\( \\$2.35 \\) each.',   // ✅
question: 'A shop sells pens for \\$2.35 each.',           // ❌ 백슬래시가 그대로 화면에 찍힘
```

KaTeX는 `\$`를 **수식 모드(`\( ... \)`) 안에서만** 리터럴 달러 기호로 해석한다.
수식 구간 밖에 그냥 쓰면 `\$14.10`처럼 백슬래시가 그대로 렌더링된다. 돈 계산이
들어간 문제/옵션/풀이는 항상 통째로 `\( \)`로 감쌀 것. 이 규칙은 `\times`,
`\frac`, `\sqrt` 등 다른 LaTeX 명령어에도 동일하게 적용된다 — 수식 구간 밖에서
쓰면 깨진다.

---

## 7. Firestore 업로드 (Admin UI 시딩 대신 직접 업로드할 때)

Firebase 로그인은 이미 되어 있음 (`firebase login`) — Admin SDK가 기본
credential을 못 찾으면 CLI 로그인 캐시를 명시적으로 넘겨줄 것:

```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.config/firebase/andrewjk82_gmail_com_application_default_credentials.json \
  node -e "
const admin = require('firebase-admin');
admin.initializeApp({ projectId: 'sapere-fe23e' });
const db = admin.firestore();
// ... db.collection('questions').doc(q.id).set({...}, { merge: true }) 반복
"
```

문서 필드는 `chapterSeeder.js`의 `mapSeedQuestion()` 출력과 동일한 형태로 맞출 것
(특히 `options`는 문자열 배열이 아니라 `{text, imageUrl}` 객체 배열, `answer`는
옵션 인덱스를 가리키는 **문자열**). 이렇게 맞춰두면 다음 세션에 auto-sync가 돌아도
같은 데이터를 다시 써서 멱등(idempotent)하게 유지된다.

---

## 8. 인덱스 재구축 — add면 full rebuild, 내용 수정이면 touch만

**질문을 추가/삭제/rename** 했으면 (문서 개수·소속이 바뀜):
```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.config/firebase/andrewjk82_gmail_com_application_default_credentials.json \
  node tools/scripts/rebuildQuestionIndexes.js y7-1 y7-4 y7-7 ...   # 영향받은 챕터 전부
```

**기존 문서의 텍스트/옵션/풀이만 수정**했으면 (추가/삭제 없음) — 훨씬 저렴한 방법:
```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.config/firebase/andrewjk82_gmail_com_application_default_credentials.json \
  node -e "
const admin = require('firebase-admin');
admin.initializeApp({ projectId: 'sapere-fe23e' });
const { touchChapterIndex } = require('./tools/scripts/_lib/touchChapterIndex.js');
(async () => { await touchChapterIndex(admin.firestore(), 'y7-7'); process.exit(0); })();
"
```
topicId를 바꾸는 등 **소속이 바뀌는 수정**은 "내용 수정"이 아니라 "멤버십 변경"이므로
반드시 full rebuild를 쓸 것 (영향받는 이전 챕터 + 새 챕터 전부).

---

## 9. 배포 전 필수 체크

1. `npm run build` 로컬 빌드 통과 확인 (깜빡한 seed 파일 import 하나가 Vercel
   프로덕션 빌드 전체를 깨뜨린 사고가 있었음).
2. 위 5번 검증 스크립트로 중복 ID/옵션 없음 확인.
3. Firestore에서 `examPaper` 쿼리로 전체 문항 수가 예상과 일치하는지 확인.
4. `git add` → 의미 있는 커밋 메시지 → `git push origin main` (Vercel 자동 배포,
   `firebase deploy` 절대 금지).

---

## 10. Past Papers 관리자 화면에서 확인하는 법

Curriculum 페이지 → 우측 상단 레이어 아이콘(Admin tools) → "Questions Seeding"
탭 → "Past Papers" 서브탭 → 해당 학년 펼치기 → 카드의 **"👁️ View"** 버튼
(2026-07-30에 추가됨 — 카드에 없다면 `src/components/Curriculum.jsx`의
`pastPaperRegistry` 렌더링 부분에 다시 추가할 것).

Year 11/12 상단 네비게이션의 "Past Paper" 메가탭(Standard/Advanced/Ext1/Ext2
필터)은 **HSC 전용**이며 여기엔 절대 뜨지 않는다 — 다른 기능이니 혼동하지 말 것.

---

## 11. 요약 체크리스트 (복붙용)

- [ ] PDF 전체 문항 수 확인, 100% 변환 (일부만 하지 않기)
- [ ] 문제마다 숫자/이름/맥락 바꾼 변형(variant) 버전도 추가
- [ ] `type: 'multiple_choice'` (절대 `'mc'` 아님)
- [ ] 각 문제에 실제 `chapterId`/`topicId`/`topicCode` (curriculumData.js 기준, placeholder 금지)
- [ ] `examPaper` 필드 (레지스트리 + 각 문서)
- [ ] 옵션 중복 없음 (정답=오답 텍스트 금지)
- [ ] `$` 등 LaTeX 기호는 전부 `\( \)` 안에
- [ ] Firestore 직접 업로드 (`{text, imageUrl}` 옵션 포맷 준수)
- [ ] add면 `rebuildQuestionIndexes.js` full rebuild / 내용수정이면 `touchChapterIndex`
- [ ] `npm run build` 통과
- [ ] git commit & push
