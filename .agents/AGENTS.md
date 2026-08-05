# Custom behavior rules for Antigravity Coding Assistant

## [규칙 C] 중첩 LaTeX 구분자 사용 절대 금지 (No Nested LaTeX Delimiters)
* **내용**: `workingOut`, `question`, `options` 등의 수식 데이터 생성 시, 외부 LaTeX 구분자 `\\( ... \\)` 또는 `\\[ ... \\]` 안에 동일한 수식 구분자 `\\( ... \\)` 또는 `\\( ... \\)`가 겹치거나 중첩해서 들어가지 않도록 하십시오.
* **오류 사례**: 
  * `\\(\\text{Final Expression} = \\(m + 3\\)\\)` ❌ (KaTeX 파싱 오류로 붉은색 텍스트가 깨져서 출력됨)
* **올바른 사례**:
  * `\\(\\text{Final Expression} = m + 3\\)` ✅ (단 하나의 수식 래퍼만 사용)
* **원인 및 방지책**: 문자열 조립 시 다른 변수(`ansClean`, `correctText` 등)에 이미 수식 구분자가 포함되어 있는지 반드시 체크하고, 문자열 삽입 전에 이를 완전히 벗겨낸 뒤(Strip) 최종 조립된 형태에서만 바깥쪽에 단 한번만 수식 기호가 적용되도록 가공해야 합니다.

## [규칙 D] questions 문서 수정 시 Sync 메타데이터 갱신 규칙
* **내용**: `questions` 문서를 수정한 후에는 `sync_meta/questions`를 직접 수정하지 마십시오.
* **조치 방법**: 대신 수정한 챕터(예: `y10-8`)마다 한 번씩 `tools/scripts/_lib/touchChapterIndex.js`에 정의된 `touchChapterIndex(db, chapterId)`를 호출하여 갱신하십시오.
* **주의 사항**: 문제를 실제로 추가, 삭제, 또는 활성화 상태(isActive)를 변경한 것이 아니라면 `membershipVersion`은 **절대** 건드리지 마십시오.

## [규칙 E] 쓰레기 데이터(opt1, opt2 등) Placeholder 철저한 차단 및 제거
* **내용**: 문제 보기를 생성하거나 파싱할 때 `opt1`, `opt2`, `-opt1` 등의 문자열이 남아있는지 반드시 확인하고 제거해야 합니다.
* **조치 방법**: 자동 변환 스크립트 작성 시 임시 변수(Placeholder)가 최종 데이터에 삽입되지 않도록 `options` 배열을 철저히 검사하여 실제 수학적인 오답(Distractors)으로 채워 넣으십시오.
* **주의 사항**: 감사(Audit) 스크립트를 작성할 때, 정답 부호만 바뀐 오답(Lazy Distractor)뿐만 아니라, 이런 리터럴 텍스트(Literal placeholder)의 존재 유무도 스캔 대상에 포함해야 합니다.

## [규칙 F] 해설(Step-by-step solutions) 작성 시 챕터 교재 프로필 반드시 참조
* **내용**: `solutionSteps`를 생성하거나 개선할 때, 단순히 "식을 대입하라", "계산하라" 등의 의미 없는 반복(Filler) 텍스트를 사용해서는 안 됩니다.
* **조치 방법**: 반드시 해당 챕터의 교육학적 목표(Pedagogical Goals)가 담긴 Textbook Profile (예: `Y7_Ch7_AlgebraWithFractions_Profile.md`)을 읽고, 그 챕터에서 요구하는 특정 개념(예: 분수선이 괄호 역할을 한다는 점, 공통분모 찾기, 약분 등)을 명시적으로 풀이 과정에 반영하여 3~5단계의 양질의 해설을 생성하십시오.

## [규칙 G] Firestore 업로드 전 기존 데이터 반드시 백업 (Backup Before Delete)
* **내용**: Firestore 컬렉션에서 기존 문서를 삭제하고 새로 업로드하는 스크립트를 작성할 때, **삭제 전에 반드시 기존 데이터를 로컬 JSON 파일로 백업**해야 합니다.
* **조치 방법**: 업로드 스크립트에 아래 패턴을 반드시 포함하십시오:
  ```javascript
  // 1. 백업
  const existing = await db.collection('questions').where('chapterId', '==', chapterId).get();
  const backup = existing.docs.map(d => ({ id: d.id, ...d.data() }));
  fs.writeFileSync(`tools/audit-state/backup_${chapterId}_${Date.now()}.json`, JSON.stringify(backup, null, 2));
  console.log(`Backed up ${backup.length} docs to backup_${chapterId}_.json`);
  // 2. 그 이후에만 삭제 및 재업로드 진행
  ```
* **주의 사항**: `where` 쿼리 범위를 최대한 좁게 설정하십시오. `chapterId`가 아닌 `topicId` 기준으로 삭제하는 것이 더 안전합니다.

## [규칙 H] Firestore 업로드 후 Question Index 반드시 재빌드 (Rebuild Indexes After Upload)
* **내용**: 문제를 Firestore에 추가, 수정, 또는 삭제한 후에는 **반드시 Question Index를 재빌드**해야 합니다. 그렇지 않으면 앱에서 표시되는 문제 수(`question_counts`)와 실제 Firestore 데이터가 불일치하게 됩니다.
* **조치 방법**: 업로드 스크립트 실행 후 아래 명령어를 즉시 실행하십시오:
  ```bash
  node tools/scripts/rebuildQuestionIndexes.js <chapterId>
  # 예시: node tools/scripts/rebuildQuestionIndexes.js y7-7
  ```
* **주의 사항**: 여러 챕터를 동시에 수정한 경우 공백으로 구분하여 한번에 재빌드하십시오:
  ```bash
  node tools/scripts/rebuildQuestionIndexes.js y7-6 y7-7 y7-8
  ```

## [규칙 I] 데이터베이스 전체 스캔(Full Scan) 절대 금지 (Never Full Scan DB)
* **내용**: Firestore 데이터베이스에 쿼리할 때는 `where`, `limit`, `startAt` 등의 인덱싱된 필터를 반드시 사용하여 조회 범위를 최소화해야 합니다.
* **조치 방법**: `.get()` 메서드를 컬렉션 전체(예: `db.collection('questions').get()`)에 호출하는 무지성 스캔은 절대 작성하거나 실행하지 마십시오. 스크립트 작성 시 반드시 필터(예: `where('chapterId', '==', ...)` 또는 특정 `topicId`)를 추가하여 프로덕션 DB 부하 및 막대한 과금(Read Operations)을 방지하십시오.
* **주의 사항**: 필요한 경우 개별 문서를 직접 조회(`doc(id).get()`)하거나, 철저하게 제한된 조건 안에서만 쿼리를 실행하십시오.
