const express = require("express");
const https = require("https");
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

var apiKey = "ae4c8ef06c22da42215a131792cfd101";

app.listen(3000, function() {
  console.log("Server has started at port 3000");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname +"/index.html");
});

app.post("/", function(req, res) {

  var city = req.body.cityName;
  var units = "metric";
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units="+units+"";

  console.log(url);

  https.get(url, function(respond) {
    console.log(respond.statusCode);

    respond.on("data", (d) => {
      var weatherDataObject = JSON.parse(d);
      var icon = weatherDataObject.weather[0].icon;
      var weatherImgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write("<p>The weather now has somewhat " + weatherDataObject.weather[0].main + "<p>");
      res.write("<h1>Weather in "+city+" looks like " + weatherDataObject.weather[0].description + "</h1>");
      res.write("<img src=" + weatherImgUrl + ">");
      res.send();
    });
  });
});

app.get('*', function(req, res) {
  res.status(404).send('<h1>Error 404 Page not found lol</h1>');
});
