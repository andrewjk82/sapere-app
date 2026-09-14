# 백업 기록 (Backup Log)

> 복원이 필요하면 이 파일부터 보세요. 최신 항목이 맨 위입니다.

---

## 2026-09-14 — Firestore `questions` 스냅샷 + 정규 콘텐츠(P0/P1) — 콘텐츠 이관 착수 전

**왜:** 문제 콘텐츠를 Firestore → git `content/`로 옮기는 작업(P0~P5)의 롤백 지점. P3 전까지 Firestore는 읽기만 하지만, 오늘 시점의 Firestore 상태를 원본 그대로 보관해야 어느 단계에서든 되돌릴 수 있음.

### 1. 하드 백업 (라즈베리 파이) ← 주 복원본

| | |
|---|---|
| 위치 | `raspberrypi.local:~/backups/sapere1/sapere1-firestore-questions-20260914.tar.gz` |
| 크기 | 12 MB (1,580 파일) |
| SHA-256 | `60a7d45f977618bd91ef0b0992ebd38d2b91e11db66617a968753c794eee4b4d` |
| 검증 | 로컬 ↔ Pi 체크섬 일치, 추출 테스트 후 파일 목록 diff 일치 |
| 포함 | `content/_export/raw/` — **Firestore `questions` 원본 24,296건**(question_index 경유, Timestamp→ISO, 328 챕터 파일) · `content/_export/raw-meta/` — `question_index`(329) `question_topic_index`(528) `question_type_index`(21) `sync_meta`(2,145) `curriculum`(18) 원본 · `content/chapters/` 정규 콘텐츠 228파일 · `content/figures/` 996 SVG · `content/schema.js` `known-defects.json` · P0/P1 리포트, 리뷰 큐 · `tools/content/` 스크립트 |
| **미포함** | `questions` 중 어떤 인덱스도 가리키지 않는 **1,213건**(총 25,509 − 24,296). 학생 로더가 인덱스를 쓰므로 현재 학생에게 보이지 않는 문서들. ID 목록 조회에 ~25.5k read가 필요해 Spark 일일 한도 때문에 **2026-09-15 이후 별도 실행 예정** |

로컬 사본: `~/Desktop/sapere1-firestore-questions-20260914.tar.gz` (동일 파일)

**Firestore 복원 방법** (P3 이후 문제가 생겨 Firestore `questions`를 오늘 상태로 되돌려야 할 때):
```bash
tar -xzf sapere1-firestore-questions-20260914.tar.gz -C /tmp/restore
# /tmp/restore/content/_export/raw/<chapterId>.json 의 각 문서를 questions/{id}에 setDoc (ISO 문자열 → Timestamp 변환)
# /tmp/restore/content/_export/raw-meta/question_index.json → question_index/{id}
# 복원 스크립트는 필요 시 tools/content/restore.mjs 로 작성 (아직 없음 — 25k write, 야간 실행)
```
> ⚠️ P3(학생 로더 전환) 전까지는 Firestore를 쓰지 않으므로 이 복원은 필요 없음. 롤백 = `VITE_CONTENT_SOURCE=firestore`.

### 2. Git 복원점

| | |
|---|---|
| 태그 | `content-migration/p1` (로컬) |
| 커밋 | `4daf901e` — *content: P0/P1 — canonical question bank in content/* |
| 포함 | `content/` 정규 콘텐츠 + `tools/content/` + 스키마·검증 게이트 (raw Firestore 스냅샷은 제외 — tarball에만) |

```bash
git checkout content-migration/p1      # content/ 를 P1 직후 상태로
```
코드 자체의 복원점은 아래 `known-good/20260904` 그대로 유효.

---

## 2026-09-04 — 아키텍처 리팩터 착수 전 전체 스냅샷

**왜:** 시드 축출 / 데이터 계층 / 라우터 도입 작업 전, 정상 동작하는 상태를 고정.

### 1. 하드 백업 (라즈베리 파이) ← 주 복원본

| | |
|---|---|
| 위치 | `raspberrypi.local:~/backups/sapere1/sapere1-backup-20260904.tar.gz` |
| 크기 | 237 MB (14,364 파일) |
| SHA-256 | `ddc0fc3db82d48c8cdb10dd252bde4e7c2437586c62f749f067e7c18ae490dea` |
| 검증 | 로컬 ↔ Pi 체크섬 일치 확인 완료 |
| 포함 | 전체 워킹트리 + `.git`(히스토리 전체) + 커밋 안 된 수정 50개 + 미추적 912개 |
| 제외 | `node_modules/`, `dist/` (재생성 가능) |

로컬 사본도 있음: `~/Desktop/sapere1-backup-20260904.tar.gz` (동일 파일)

**복원 방법:**
```bash
scp andrewkim@raspberrypi.local:~/backups/sapere1/sapere1-backup-20260904.tar.gz ~/Desktop/
cd ~/Desktop && shasum -a 256 sapere1-backup-20260904.tar.gz   # 위 SHA-256과 대조
tar -xzf sapere1-backup-20260904.tar.gz          # → ./sapere1/ 로 풀림
cd sapere1 && npm install                         # node_modules 재생성
npm run build                                     # dist 재생성
```

### 2. Git 복원점

| | |
|---|---|
| 태그 | `known-good/20260904` |
| 커밋 | `019f5598` — *chore: add warmPracticePools.mjs* |
| 시각 | 2026-09-03 19:34 +1000 |
| 상태 | `origin/main`과 동기화됨 → GitHub에도 존재 |
| 배포 | 이 커밋이 https://sapere-app.vercel.app/ 라이브 상태 |

```bash
git checkout known-good/20260904     # 코드만 그 시점으로
```

> ⚠️ 태그는 **로컬에만** 있습니다. 원격에도 두려면: `git push origin known-good/20260904`
>
> ⚠️ 이 태그는 **커밋된 코드만** 되돌립니다. 커밋 안 된 작업물 962개는 위 tarball에만 있습니다.

### 3. Firestore 데이터 — ❌ 아직 백업 안 됨

코드는 백업됐지만 **콘텐츠와 학생 데이터는 백업되지 않았습니다.**
데이터 경로를 건드리는 작업 전에 반드시 처리할 것.

실측 문서 수 (2026-09-04, count 집계):

| 컬렉션 | 문서 수 | |
|---|---:|---|
| `questions` | 25,409 | ⭐ 복구 불가 — 최우선 |
| `sessions` | 2,146 | ⭐ 학생 학습 이력 |
| `sync_meta` | 2,033 | ⭐ |
| `mode_review` | 507 | ⭐ |
| `question_*_index*` | 1,113 | 재생성 가능하나 느림 |
| 기타 30개 컬렉션 | ~600 | ⭐ users, curriculum, question_dna 등 |
| `traffic_logs` | 35,819 | ❌ 텔레메트리 — 백업 불필요 |
| `system_logs` | 5,314 | ❌ 로그 — 백업 불필요 |
| **전체** | **75,680** | |

**읽기 비용** (export는 문서당 읽기 1회, Spark 무료 티어 = 일 50,000):

- 전체 덤프 → **~75,700 읽기 = 일일 할당량 초과**, 하루에 불가
- 로그 2개 제외 → **~34,500 읽기 = 할당량의 69%**, 하루에 가능 ✅ ← 권장
- `questions`만 → **25,409 읽기 = 51%** ✅

> ⚠️ 실 사용자와 할당량을 공유합니다. **반드시 학생이 안 쓰는 밤에 실행**할 것.
> 낮에 돌리면 학생들이 RESOURCE_EXHAUSTED를 맞습니다.
> `users/{uid}/` 서브컬렉션은 위 집계에 미포함 — 실제 읽기는 다소 더 늘어납니다.

### ⚠️ 보안 주의

tarball에 `.secrets/sapere-fe23e-firebase-adminsdk-*.json` (Firebase 관리자
서비스 계정 키)가 **포함**되어 있습니다. 즉 이 키가 지금 라즈베리 파이에도
있습니다. Pi는 개인 장비라 괜찮지만:

- 이 tarball을 클라우드/외부에 올리지 말 것
- Pi를 처분하거나 넘길 때 `~/backups/sapere1/` 삭제할 것
- 키가 노출되면 Firebase 콘솔에서 즉시 회전(rotate)

---
