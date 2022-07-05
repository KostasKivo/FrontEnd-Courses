const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
  if(Number(req.body.weight) === 0 || Number(req.body.height) === 0) {
    res.send("Please enter both values and try again");
  } else {
    var bmi = Number(req.body.weight)/(Number(req.body.height)*Number(req.body.height)) * 10000;
    res.send("Your BMI is " + bmi);
  }

});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
