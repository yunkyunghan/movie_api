**네이버 API**를 이용하여 원하는 영화의 정보를 검색하는 홈페이지입니다. 🎬 🕵🏻 <br>
https://developers.naver.com/products/intro/plan/ 를 참고해 주세요. <br>

___
![ezgif com-gif-maker](https://user-images.githubusercontent.com/75987810/108026716-3d2bed80-706c-11eb-83ce-282cec6f1fd1.gif)
___
## Install
```
npm install express --save
npm install axios
npm install bootstrap
npm install vue bootstrap-vue bootstrap
```

## Script
`frontend와 backend`를 `동시에 실행`시켜야 작동이 됩니다. <br>
또한 `backend port 변경`으로 인하여 크롬에서 `CORS`를 실행시켜줘야 합니다. <br>
(참고: https://developer.mozilla.org/ko/docs/Web/HTTP/CORS )<br>

`fontend:`
* npm run serve <br>

`backend:` 
* node app.js

## Function
* Axios를 이용한 Naver search API 사용
* Axios를 통하여 전송받은 JSON 파일을 배우, 감독, 평점 등으로 분할 후 시각화
* 디자인적 요소를 위한 BootstrapVue의 Carousel 기능 사용
* 검색 화면을 구성하기 위하여 BootstrapVue의 Modal 기능 사용
