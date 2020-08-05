const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(express.static('public'));


app.get("/index.html",function(request, response){
    response.sendFile(__dirname  + "/index.html");

});
app.get("/",function(request, response){
    response.sendFile(__dirname  + "/login.html");
});
app.get("/login.html",function(request, response){
    response.sendFile(__dirname  + "/login.html");

});
app.get("/charts.html",function(request, response){
    response.sendFile(__dirname  + "/charts.html");

});
app.get("/forgot-password.html",function(request, response){
    response.sendFile(__dirname  + "/forgot-password.html");

});
app.listen(3000,function(){
      console.log("Server started at 3000");
});
