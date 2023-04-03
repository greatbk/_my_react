# 리액트 모던 웹 개발 with 타입스크립트 예제

---
### 명령어 정리
1. 프로젝트 생성
   ```
   npx create-react-app ch04_2 --template typescript
   ```
2. 패키지 추가
   ```
   npm i chance luxon @fontsource/material-icons
   npm i -D @types/chance @types/luxon
   npm i -D postcss autoprefixer tailwindcss @tailwindcss/line-clamp daisyui
   npm i redux @reduxjs/toolkit react-redux
   ```
3. 파일 복사
   1. 같은 장에서 복사
      ```
      cp -r ../ch04_1/src/* ./src
      cp -r ../ch04_1/*.js .
      rm src/pages/*
      ```
   2. 이전 장에서 복사
      ```
      cp -r ../../ch04/ch04_6/src/* ./src
      cp -r ../../ch04/ch04_6/*.js .
      rm src/pages/*
      ```
4. 스토어 파일 생성
   ```
   rm -r -force src/store/*
   cp -r src/copy/store/* src/store
   ```


---
### SCOOP 설치
1. 설치 명령어
   ```
   ```
