/* 
Title: Perry-exercise 5.2.js
Author: Erica Perry
Date:9/04/2020
Description: if-else-render
*/


/*var header = require('../Erica-header.js');
console.log(header.display("Erica", "Perry", "exercise 5.2.js"));
console.log("\n") */

var express = require("express");

var http = require("http");

var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

var n = [

  "Quanny",

  "Richard",

  "Britto",

  "Sherry"

];


app.get("/", function(request, response) {

    response.render("index", {

        names: n

    })

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

