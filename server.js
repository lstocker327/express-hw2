const express = require('express');
const app = express();
const PORT = 3000

app.get("/greeting/:name", function(req,res){
  res.send("hello " + req.params.name);
});

app.get("/tip/:total/:tipPercentage", function(req,res){
  let tip = parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100);
  res.send("your tip is " + tip)
})


app.listen(PORT, function(){
  console.log('listening on port' + PORT);
});
