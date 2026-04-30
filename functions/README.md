# Sapere Aude Academia - Notifications Setup

이 프로젝트의 자동 알림 기능을 활성화하려면 아래 설정을 완료해야 합니다.

## 1. 이메일 계정 설정 (Gmail 권장)

서버에서 메일을 보낼 수 있도록 선생님의 계정 정보를 등록합니다.

### 1-1. 앱 비밀번호 발급
1. Google 계정 설정 > 보안 > 2단계 인증 활성화
2. '앱 비밀번호' 검색 후 생성 (이름: Sapere)
3. 16자리 코드 복사

### 1-2. 터미널에서 명령어 입력
프로젝트 루트에서 아래 명령어를 순서대로 입력하세요:

```bash
# 이메일 주소 등록
firebase functions:config:set email.user="선생님계정@gmail.com"

# 16자리 앱 비밀번호 등록
firebase functions:config:set email.pass="복사한 16자리 코드"
```

## 2. 배포하기

설정이 끝났다면 아래 명령어로 서버에 코드를 올립니다:

```bash
cd functions
npm install
firebase deploy --only functions
```

## 3. 작동 시점
* **전날 알림**: 매일 저녁 8시 (시드니 시간 기준)
* **당일 알림**: 수업 2시간 전 (추후 확장 가능)
