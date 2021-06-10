const express = require('express');
const app = express();
const PORT = 3000

app.get("/greeting/:name", function(req,res){
  res.send("hello" + req.params.name);
});



app.listen(PORT, function(){
  console.log('listening on port' + PORT);
});
