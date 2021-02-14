# Corona Viewer

[사용 API](https://api.corona-19.kr/)

## 사용 기술 스택

![image](https://img.shields.io/badge/-React-blue)
![image](https://img.shields.io/badge/-Sass-red)
![image](https://img.shields.io/badge/-recoil-brightgreen)
![image](https://img.shields.io/badge/-axios-lightgrey)
![image](https://img.shields.io/badge/-typescript-blue)

## 완성본 캡쳐

![image](https://user-images.githubusercontent.com/48292190/107874416-f8357900-6efc-11eb-8c5a-8b0adeb3ae19.png)

![image](https://user-images.githubusercontent.com/48292190/107874438-2024dc80-6efd-11eb-8dd4-dbe62c8c0e47.png)

## 느낀 점

간단하게 typescript랑 recoil의 조합을 사용해보고 싶어서 시작한 프로젝트인데, 하다보니 큰 문제에 직면했다. CORS인데, 이 문제는 프론트 단에서는 해결할 수 없는 문제임을 깨닫고 다른 방법을 찾아보다가 결국 포기하고 크롬 플러그인인 Moesif CORS를 사용해서 우회를 하였다.

만약 서버를 했더라면 이를 cors미들웨어를 사용해서 해결했을 것이다.
아무튼 typescipt랑 recoil그리고 axios를 사용해본 결과,
typescipt가 정말 큰 장점으로 다가왔다.

type을 지정해서 에디터가 자동완성을 해주는 퍼포먼스는 정말 맘에들었다.
다음에는 서버에서 데이터를 가공한 다음에 프론트랑 연결해서 프로젝트를 진행해 봐야겠다.
