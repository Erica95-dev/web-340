/* 
Title: Perry-exercise 4.4.js
Author: Erica Perry
Date:8/30/2020
Description: Curl
*/


/*var header = require('../Erica-header.js');
console.log(header.display("Erica", "Perry", "assignment 4.4.js"));
console.log("\n") */


var express =require("express")

var app =express();

app.get("/",function(req,res){
    res.send("you just sent a GET request, friend");
});

app.post("/", function(req,res){
    res.send("a POST request? nice");
});
app.put("/", function(req,res){
    res.send("i don't see a lot of PUT request anymore");
});
app.delete("/", function(req,res){
    res.send("oh my, a DELETE?");
});
app.listen(3000, function(){
    console.log("App is listening on port 3000");
});

