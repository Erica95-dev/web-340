var express = require("express");

var http = require("http");

var app = express();

app.get("/not-found", function(request, response) {

    response.status(404);

    response.json({

        error: "this page doesn't exist."

    })

});

app.get("/ok", function(request, response) {

    response.status(200);

    response.json({

        message: "loading completed successfully."

    })

});

app.get("/not-implemented", function(request, response) {

    response.status(501);

    response.json({

        error: "page loading error."

    })

});

http.createServer(app).listen(8080, function() {

   console.log("Application started on port 8080!");

});
