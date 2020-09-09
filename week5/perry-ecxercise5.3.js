/* 
Title: Perry-exercise 5.3.js
Author: Erica Perry
Date:9/06/2020
Description:PPug-template
*/


/*var header = require('../Erica-header.js');
console.log(header.display("Erica", "Perry", "exercise 5.3.js"));
console.log("\n") */

var express = require("express");

var http = require("http");

var pug = require("pug");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(request, response) {

    response.render("index", {

        message: "Erica working with a pug-template!"

    });

});


http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});

