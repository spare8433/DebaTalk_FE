const express = require('express');
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');
require('dotenv').config({path:'variables.env'})

const app = express();
const app2 = express();

const TestModel = require('./models/TestModel')
// mongoose

mongoose.connect(process.env.MDB_URL, {useNewUrlParser: true}, (err)=>{
  if(err){
    console.log(err);    
  }else{
    console.log("success");
  }
});

// mongodb MongoClient

// const client = new MongoClient(process.env.MDB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("success");
//   // perform actions on the collection object
//   client.close();
// });


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

app2.get('/test', function(req,res){  
  res.header("Access-Control-Allow-Origin","http://localhost:3000");
  const testModel = new TestModel();
  testModel.name = "update"
  // testModel.save()
  console.log(testModel)
  res.send(testModel);
});

// const httpServer = http.createServer(app);

app.use(vhost(httpDomain,app2))

app.listen(80,function(){
  console.log('listen on 80')
});

