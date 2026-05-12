# Sapere Aude — 앱 전체 계획서 (v1.x Legacy)

> **작성일:** 2026-05-11  
> **기준 코드베이스:** `/Users/andrewkim/Desktop/sapere1`  
> **기술 스택:** React 19 + Vite + Firebase (Firestore / Auth / FCM) + Framer Motion

---

## 1. 앱 개요

**Sapere Aude**는 수학 튜터링 플랫폼으로, 튜터(관리자)와 학생 두 가지 역할로 구성됩니다.

- **튜터(Admin):** 학생 관리, 수업 일정 등록, 성적 채점, 커리큘럼 동기화
- **학생(Student):** 일일 문제풀이 챌린지, XP 적립, 리더보드 확인, 학습 기록 조회

앱은 **PWA(Progressive Web App)** 형태로 배포되어 iOS 홈 화면 추가를 지원하며, 실시간 버전 업데이트 감지 기능을 내장합니다.

---

## 2. 기술 스택

| 항목 | 기술 |
|---|---|
| 프론트엔드 | React 19, Vite 8 |
| 애니메이션 | Framer Motion 12 |
| UI 아이콘 | Lucide React |
| 백엔드 | Firebase (Firestore, Auth, FCM, Functions) |
| 호스팅 | Vercel |
| 드로잉 캔버스 | perfect-freehand, react-sketch-canvas |
| 수식 렌더링 | 커스텀 MathView 컴포넌트 |
| 이메일 | Nodemailer (API 라우트) |

---

## 3. 인증 시스템

### 3.1 인증 흐름
```
미인증 → Login / Signup → 이메일 인증 → 프로필 완성 → 메인 앱
```

### 3.2 역할 구분
- **Admin:** 이메일(`andrewjk82@gmail.com`)로 하드코딩 판별
- **Student/Parent:** `users/{uid}.role` 필드로 구분

### 3.3 인증 컴포넌트
| 파일 | 역할 |
|---|---|
| `pages/Login.jsx` | 이메일/비밀번호 로그인 |
| `pages/Signup.jsx` | 회원가입 (역할, 이름, 학년, 꿈의 직업 입력) |
| `pages/AuthLayout.jsx` | 인증 페이지 공통 레이아웃 (좌측 패널 + 우측 폼) |
| `context/AuthContext.jsx` | Auth 상태 전역 관리 |

### 3.4 보안 기능
- 학생은 앱이 백그라운드로 이동 시 화면 블러 처리
- 우클릭 및 복사 비활성화 (학생 계정)
- 챌린지 진행 중 탭 전환 감지 → 경고 토스트

---

## 4. Firestore 데이터 구조

```
/students/{studentId}           — 수동 등록 학생 (튜터가 직접 추가)
/users/{uid}                    — 자체 가입 사용자 프로필
  /daily_stats/{date}           — 일일 챌린지 결과
    /working_out/{idx}          — 캔버스 필기 이미지 (1MB 제한 우회)
  /calc_stats/{date}            — 계산 챌린지 결과
    /working_out/{idx}
  /chapterProgress/{id}         — 챕터별 학습 진행도
  /notifications/{notifId}      — 사용자 알림

/sessions/{sessionId}           — 수업 세션 (일정)
/questions/{questionId}         — 문제 은행
/leaderboard/{entryId}          — XP 기반 랭킹
/grading_queue/{queueId}        — 튜터 채점 대기열 (수기 문제)
/reports/{reportId}             — 학생이 신고한 문제
/materials/{materialId}         — 학습 자료
/curriculum/{docId}             — 커리큘럼 메타데이터
/system_config/app              — 앱 버전 정보
/system_logs/{logId}            — 크론 실행 로그
```

---

## 5. Firestore 보안 규칙 요약

| 컬렉션 | 읽기 | 쓰기 |
|---|---|---|
| `students` | Admin 또는 본인 튜터 | 본인 tutorId |
| `sessions` | Admin / 튜터 / 해당 학생 | 인증된 사용자 |
| `questions` | 인증된 모든 사용자 | Admin 전용 |
| `users/{uid}` | 인증된 모든 사용자 | Admin 또는 본인 |
| `leaderboard` | 인증된 모든 사용자 | Admin / 본인 / manual 학생 |
| `grading_queue` | Admin / 본인 | 인증된 모든 사용자 |
| `system_config` | 인증된 모든 사용자 | Admin 전용 |

> **⚠️ 보안 취약점:** `isAdmin()` 함수가 이메일 하드코딩으로 구현됨. Auth Custom Claims 방식으로 이전 필요.

---

## 6. 주요 화면 및 컴포넌트

### 6.1 앱 셸 (`App.jsx`)
- 로그인 상태에 따라 Auth 화면 ↔ 메인 앱 전환
- 사이드바 + 컨텐츠 영역 레이아웃
- 모바일(≤1024px): 하단 캡슐형 내비게이션
- 앱 시작 시 타이핑 인트로 애니메이션 (시간대 인사 + 랜덤 수학 개념)
- 버전 업데이트 배너 (Firestore `system_config/app` 실시간 감지)

### 6.2 사이드바 (`Sidebar.jsx`)
탭 목록:
- Dashboard
- Students (Admin 전용)
- Schedule
- Challenge
- Curriculum
- Library
- Reports (Admin 전용)
- Settings

### 6.3 대시보드 (`Dashboard.jsx`)

**학생 뷰:**
- 드림 이미지 비전 카드 (배경 이미지 + 이름 + 꿈의 직업)
- Total XP 카드, 다음 수업 카드, 마지막 수업 카드
- 학습 인사이트 (틀린 문제 유형 분석, 오류율 >30%)

**Admin 뷰:**
- 학생 통계 (총 학생 수, 활성 학생, 총 수업 시간)
- 최근 학생 목록 (상위 5명)
- 채점 대기열 (그림 답안 / 텍스트 답안)
- 퀵 액션: 학생 동기화, 수업 일정 추가, 리더보드 동기화
- 커리큘럼 자동 동기화 (6시간 TTL 캐시)
- 마지막 크론 실행 시각 표시

### 6.4 일일 챌린지 (`DailyChallenge.jsx`)

**챌린지 종류:**
| 유형 | 설명 | 최대 XP |
|---|---|---|
| Daily Challenge | 학년/챕터별 수학 문제 | 50 또는 100 XP |
| Basic Calculation | 사칙연산 속도 훈련 | 50 XP |

**핵심 기능:**
- 학생 프로필에서 `assignedYear`, `assignedChapters`, `assignedTopics` 읽어 문제 출제
- 적응형 난이도 조절 (easy/medium/hard 비율 자동 조정)
- 분할 화면 모드: 왼쪽 문제 + 오른쪽 필기 캔버스 (Year 10 이상 / 데스크탑)
- 수기 답안 → `grading_queue`에 제출 → 튜터 채점
- 오늘 완료 여부 체크 (하루 1회 제한)
- 탭 전환 감지 (부정행위 방지)
- 챌린지 완료 후 XP 적립 + 리더보드 업데이트
- 학습 기록 최대 7개 보관 (자동 정리)
- 문제 신고 기능 (`reports` 컬렉션)

### 6.5 학생 상세 (`StudentDetail.jsx`)
- 학생 프로필, 수업 기록, 챌린지 성적 열람
- XP 직접 수정, 학생 정보 수정
- 챕터 진행도, 챌린지 히스토리 조회

### 6.6 수업 일정 (`Schedule.jsx`)
- 수업 세션 생성/수정/삭제
- 반복 수업 (52주 자동 생성)
- 수업 등록 시 학생에게 알림 발송

### 6.7 커리큘럼 (`Curriculum.jsx`)
- 학년/과목별 챕터 구성 열람
- Admin: DB 동기화 버튼 (AutoSyncService)

### 6.8 리더보드 (`LeaderboardModal.jsx`)
- 모달 열릴 때만 실시간 리스너 활성화
- 상위 50명 XP 순위 표시

### 6.9 설정 (`Settings.jsx`)
- 아바타 변경, 꿈의 직업 설정
- 알림 설정, 비밀번호 변경

---

## 7. 서비스 레이어

### 7.1 `studentService.js`
| 메서드 | 기능 |
|---|---|
| `addStudent` | 수동 학생 추가 + 리더보드 등록 |
| `getStudents` | 수동 + 가입 학생 통합 조회 (1회성) |
| `subscribeToStudents` | 실시간 구독 (30분 폴링 혼용) |
| `updateStudent` | 학생 정보 수정 |
| `deleteStudentRecord` | 학생 삭제 + 리더보드 제거 |

### 7.2 `leaderboardService.js`
| 함수 | 기능 |
|---|---|
| `upsertRegisteredUserLeaderboard` | 가입 학생 리더보드 upsert |
| `upsertManualStudentLeaderboard` | 수동 학생 리더보드 upsert |
| `updateLeaderboardXP` | XP 업데이트 |
| `fetchTopLeaderboard` | 상위 N명 조회 |
| `seedLeaderboardFromExistingData` | 전체 재동기화 |

### 7.3 `AutoSyncService.js`
커리큘럼 문제 DB 자동 동기화 (로컬 ↔ Firestore)
- Year 10 Ch1 (Consumer Arithmetic)
- Year 10 Ch2 (Surds)
- Year 10 Ch3 (Algebra)
- Year 7 Ch1 (Whole Numbers)
- Year 7 Ch2 (Factors and Multiples)

### 7.4 `questionGenerator.js` (95KB)
- 학년/챕터/난이도별 문제 동적 생성
- Firestore 문제 은행 + 로컬 생성 혼합

### 7.5 `calculationGenerator.js`
- 사칙연산 계산 문제 세트 생성

---

## 8. 컨텍스트 프로바이더

| 컨텍스트 | 역할 |
|---|---|
| `AuthContext` | 로그인 상태, 역할, 인증 메서드 |
| `ToastContext` | 전역 토스트 알림 |
| `AdminFeedContext` | 채점 대기열 실시간 공유 리스너 |

---

## 9. 커리큘럼 데이터 구조

`constants/curriculumData.js` 기준:

```
Year 7, 8, 9, 10, 11, 12
  └─ Advanced / Standard / Extension
      └─ Chapter { id, title, topics[] }
```

---

## 10. 알림 시스템

- **FCM(Firebase Cloud Messaging):** 포그라운드 알림 수신
- **이메일:** Nodemailer API 라우트 (`/api/send-notif`)
- **크론:** `/api/cron-unified` — 수업 전날 자동 리마인더

---

## 11. 알려진 기술 부채 및 개선 필요 사항

### 보안
- [ ] Admin 판별을 이메일 하드코딩 → Auth Custom Claims로 전환
- [ ] `leaderboard` 쓰기 규칙의 `manual-` prefix 검사 취약

### 성능 / 비용
- [ ] `students` 실시간 리스너 → 수동 Refresh 방식 (이미 부분 완료)
- [ ] `grading_queue` 실시간 리스너를 `AdminFeedContext` 단일 공유로 전환 (완료)
- [ ] 커리큘럼 AutoSync TTL 캐시 적용 (완료)

### 아키텍처
- [ ] 단일 `App.jsx` (1003줄) → 라우터 기반 분리 필요
- [ ] 컴포넌트별 인라인 스타일 → CSS Module / 디자인 토큰 통일
- [ ] `DailyChallenge.jsx` (2756줄) → 하위 컴포넌트 분리

### 기능 추가 예정
- [ ] 학부모 포털 (수업 요약 열람)
- [ ] 학생 자동 학년 진급 (매년 1월 1일)
- [ ] 더 많은 학년 커리큘럼 (Year 8, 9, 11, 12)
- [ ] 학습 경로(Learning Path) 고도화
- [ ] 문제 은행 편집 UI (Admin)

---

## 12. 배포 구조

```
로컬 개발:     vite dev
프로덕션 빌드: vite build → /dist
호스팅:        Vercel (자동 배포 — GitHub 연동)
Firebase:      Firestore, Auth, FCM, Functions
버전 관리:     system_config/app.version → 클라이언트 실시간 감지
```

---

## 13. 마이그레이션 방향 (→ `newsapere`)

현재 `sapere1` (Vite + React SPA)에서 `newsapere` (Next.js App Router)로 전환 중.

| 항목 | sapere1 | newsapere (목표) |
|---|---|---|
| 라우팅 | 탭 기반 SPA | App Router (역할별 그룹) |
| 데이터 페칭 | 클라이언트 onSnapshot | Server Actions + 캐시 |
| 인증 | AuthContext | NextAuth / Server Cookie |
| Admin 판별 | 이메일 하드코딩 | Custom Claims |
| 스타일 | CSS + 인라인 | CSS Modules |

---

*이 문서는 `sapere1` 코드베이스 분석을 바탕으로 자동 생성되었습니다.*
