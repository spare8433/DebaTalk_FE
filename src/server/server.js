const express = require('express');
const app = express();
const port = pro


app.get('/test',function(req,res){
  res.send('테스트');  
});

app.listen(8080,function(){
  console.log('listen on 8080')
});

