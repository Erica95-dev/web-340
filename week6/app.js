

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

const {MongoClient} = require('mongodb');

const client = new MongoClient("mongodb+srv://Perry:Edpmemphis18.@buwebdev-cluster-1.jcpvy.mongodb.net/Perry?retryWrites=true&w=majority");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", async (request, response)=>{
    await client.connect();
    response.render("index", {

        title: "Home page"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});