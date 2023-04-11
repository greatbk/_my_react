# 리액트 모던 웹 개발 with 타입스크립트 예제

---
### 프로젝트 설정
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
### 백앤드 프로젝트 설정
1. 프로젝트 생성
   ```
   npm init --y
   ```
2. 패키지 추가
   ```
   npm i mongodb express cors jsonwebtoken bcrypt
   npm i -D typescript ts-node @types/node @types/bcrypt
   npm i -D @types/mongodb @types/jsonwebtoken
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

---
### 웹스톰 설정
1. 전역으로 Prettier 설치
   ```
   npm i -g prettier
   ```

---
### 개발 참고 사이트
1. React Router
   1. https://reactrouter.com/en/main

---
### 디자인 참고 사이트
1. Tailwind CSS
   1. https://umeshmk.github.io/Tailwindcss-cheatsheet/
   2. https://nerdcave.com/tailwind-cheat-sheet
2. Design Samples
   1. https://www.tailwind-kit.com/components
3. Daisy UI
   1. https://daisyui.com/
4. Google Material Icon
   1. https://fonts.google.com/icons
5. Material Tailwind
   1. https://www.material-tailwind.com/docs/react/installation

---
### 라이브러리 일괄 다운로드
   ```
   cd ch01/ch01_5
   npm install
   cd ../../ch02/ch02_1
   npm install
   cd ../ch02_2
   npm install
   cd ../ch02_3
   npm install
   cd ../ch02_4
   npm install
   cd ../ch02_5
   npm install
   cd ../../ch03/ch03_1
   npm install
   cd ../ch03_2
   npm install
   cd ../ch03_3
   npm install
   cd ../ch03_4
   npm install
   cd ../ch03_5
   npm install
   cd ../../ch04/ch04_1
   npm install
   cd ../ch04_2
   npm install
   cd ../ch04_3
   npm install
   cd ../ch04_4
   npm install
   cd ../ch04_5
   npm install
   cd ../ch04_6
   npm install
   cd ../../ch05/ch05_1
   npm install
   cd ../ch05_2
   npm install
   cd ../ch05_3
   npm install
   cd ../ch05_4
   npm install
   cd ../../ch06/ch06_1
   npm install
   cd ../ch06_2
   npm install
   cd ../ch06_3
   npm install
   cd ../../ch07/ch07_2_server
   npm install
   cd ../ch07_3_client
   npm install
   cd ../ch07_3_server
   npm install
   cd ../ch07_4_client
   npm install
   cd ../ch07_4_server
   npm install
   ```

---
### CopyMe
