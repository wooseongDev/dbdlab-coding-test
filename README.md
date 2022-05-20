# 디비디랩 사전과제

> 디비디랩 사전과제 수행 repository 입니다.

코로나의 일자별, 연령별, 성별 확진자의 차트를 보여주는 과제입니다.

## Project Stack

- Next js
- Typescript

## Demo

> Vercel 을 통해 자동배포 되고있습니다

https://dbdlab-coding-test.vercel.app

## 로컬 환경에서 실행하기

### 1. 깃 저장소 클론
```shell
git clone https://github.com/wooseongDev/dbdlab-coding-test.git
cd dbdlab-coding-test
```

### 2. 의존성 패키지 설치
```shell
yarn install
```

### 3. 실행
```shell
# development 환경으로 실행
yarn dev

# 또는 로컬 빌드 후 production 환경 실행
yarn build
yarn start
```
- 브라우저를 열고 http://localhost:3000 접속

## Todo list
- [x] README 업데이트
- [ ] 코드 스타일 설정
- [ ] 글로벌 스타일 작성 및 적용
- [ ] layout component 작성
- [ ] sidebar component 작성
  - [ ] sidebar 메뉴에 맞는 page 작성
- [ ] json 파일 api 작성
- [ ] 코로나 확진자 수 차트 작성
  - [ ] 일자별
  - [ ] 연령별 
  - [ ] 성별
