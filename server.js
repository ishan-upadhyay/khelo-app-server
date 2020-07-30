const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(express.static('public'));

app.get("/",function(request, response){
    response.sendFile(__dirname  + "/login.html");

});

app.listen(3000,function(){
      console.log("Server started at 3000");
});