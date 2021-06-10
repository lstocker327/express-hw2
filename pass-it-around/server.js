const express = require("express");
const app = express();
const PORT = 3000;
let numBottles = 99;

app.get('/', function(req,res){
  res.send("99 bottles of beer on the wall <br> <a href=/98>take one down pass it around</a>")
})

app.get("/:number_of_bottles", function(req,res){
  numBottles -= 1;
  if (numBottles === 0){
    res.send(`${numBottles} bottles of beer on the wall <br> <a href=/>start over</a>`)
    numBottles=99;
  }else{
  res.send(`${numBottles} bottles of beer on the wall <br> <a href=/${numBottles}>take one down pass it around</a>`)
  }
})


app.listen(PORT, function(){
  console.log('listening on port' + PORT);
});
