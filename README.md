# 디비디랩 사전과제

> 디비디랩 사전과제 수행 repository 입니다.

코로나의 일자별, 연령별, 성별 확진자의 차트를 보여주는 과제입니다.

## Project Stack

- Next js
- Typescript
- axios
- Chart.js, react-chartjs-2

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
- [x] code-style 설정
- [x] 절대 경로 설정
- [x] 글로벌 스타일 작성 및 적용
    - emotion 설치
    - next config 의 emotion 설정
- [x] layout component 작성
    - [x] sidebar component 작성
    - [x] menu component 작성
    - [x] sidebar 메뉴에 맞는 page 작성
- [x] layout component 수정
    - sidebar component 의 position 을 fixed 로 적용
- [x] json 파일 `GET` api 작성
    - axios 설치
    - notion 에 있는 json 파일 사용
- [x] 코로나 확진자 수 차트 작성
    - 차트 라이브러리 설치
    - [x] 일자별
    - [x] 연령별
    - [x] 성별
- [x] Next api routing 으로 api 수정
- [ ] 리팩터링
    - [x] hooks 폴더 절대경로 설정
    - [x] server side props 에서 data 날짜별 sorting 하기
    - [ ] css 수정
    - [ ] 차트 데이터 hooks 로 분리
    - [ ] dashboard 차트 그룹 컴포넌트 작성
