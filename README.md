# 리액트 모던 웹 개발 with 타입스크립트 예제

---
### 명령어 정리
1. 프로젝트 생성
   ```
   npx create-react-app ch04_2 --template typescript
   ```
2. 패키지 추가
   ```
   npm i chance luxon @fontsource/material-icons redux @reduxjs/toolkit react-redux
   npm i redux-logger redux-thunk react-dnd react-dnd-html5-backend react-router-dom
   npm i --legacy-peer-deps react-beautiful-dnd
   npm i -D @types/chance @types/luxon
   npm i -D @types/redux-logger @types/redux-thunk @types/react-dnd @types/react-beautiful-dnd
   npm i -D postcss autoprefixer tailwindcss @tailwindcss/line-clamp daisyui
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
### 백앤드 프로젝트 명령어
1. 프로젝트 생성
   ```
   npm init --y
   ```
2. 패키지 추가
   ```
   npm i mongodb
   npm i express cors
   npm i -D typescript ts-node @types/node
   npm i -D @types/mongodb
   npm i -D @types/express @types/cors nodemon
   ```
3. tsconfig.json 파일 생성
   ```
   tsc --init
   ```
4. index.ts 파일 생성
   ```
   mkdir src
   touch src/index.ts
   ```

---
### SCOOP 설치
1. 환경설정
   ```
   $env:SCOOP='C:\Scoop'
   [Environment]::SetEnvironmentVariable('Scoop', $env:SCOOP, 'User')
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -scope CurrentUser
   ```
2. scoop 설치
   ```
   iwr -useb get.scoop.sh | iex
   ```
3. 유틸 설치
   ```
   scoop install aria2
   scoop install touch
   ```
4. scoop 으로 설치할 수 있는 기타 유틸리티
   1. git
   2. nodejs-lts
   3. vscode
   4. googlechrome
