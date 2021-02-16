**네이버 API**를 이용하여 원하는 영화의 정보를 검색하는 홈페이지입니다. 🎬 🕵🏻 <br>
https://developers.naver.com/products/intro/plan/ 를 참고해 주세요. <br>
또한 보안상의 이유로 app.js의 client_id ,client_secret는 삭제하였습니다.
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

## script
`frontend와 backend`를 `동시에 실행`시켜야 작동이 됩니다. <br>
또한 `backend port 변경`으로 인하여 크롬에서 `CORS`를 실행시켜줘야 합니다. <br>
(참고: https://developer.mozilla.org/ko/docs/Web/HTTP/CORS )<br>

`fontend:`
* npm run serve <br>

`backend:` 
* node app.js