const express = require('express');
const app = express();
const app2 = express();
// https 로 변경할 예정
// const https = require("https");
const vhost = require("vhost");

const httpDomain = "test17song.co.kr";

app2.get('/', function(req,res){
  // console.log("req.ip => " + req.ip);
  // console.log("req.hostname => " + req.hostname);
  res.header("Access-Control-Allow-Origin","http://localhost:3000");
  // res.send("호스트 : "+req.hostname + "ip : " + req.ip);
  res.send("테스트");
});



// const httpServer = http.createServer(app);

app.use(vhost(httpDomain,app2))

app.listen(80,function(){
  console.log('listen on 80')
});

