var express = require('express');
var app = express();
var client_id = 'client_id';
var client_secret = 'client_secret';

app.get('/search/blog', function (req, res) {
   var api_url = 'https://openapi.naver.com/v1/search/movie?query=' + encodeURI(req.query.query); // json 결과
//   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // xml 결과
   var request = require('request');
   var options = {
       url: api_url,
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
    //    res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
    //    res.end(body);
        res.json(body).end();
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });
 app.use(express.static('../frontend'));
 app.listen(8081, function () {
   console.log('http://127.0.0.1:8081/search/blog?query=검색어 app listening on port 8081!');
 });