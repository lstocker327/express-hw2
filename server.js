const express = require('express');
const app = express();
const PORT = 3000;

let magic8quotes = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

app.get("/greeting/:name", function(req,res){
  res.send("hello " + req.params.name);
});

app.get("/tip/:total/:tipPercentage", function(req,res){
  let tip = parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100);
  res.send("your tip is " + tip)
})

app.get("/magic/:question", function(req,res){
  res.send(req.params.question + "<br>" + "<h1>" + magic8quotes[Math.floor(Math.random() * 19)] + "</h1>");
})

app.listen(PORT, function(){
  console.log('listening on port' + PORT);
});
