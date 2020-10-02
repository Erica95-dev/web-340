


var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var helmet = require("helmet");

var cookieParser = require('cookie-parser')

var csrf = require('csurf')

var bodyParser = require('body-parser')

var mongoose= require("mongoose")

var Employee= require("./models/employee")

//const client = new MongoClient("mongodb+srv://Perry:Edpmemphis18.@buwebdev-cluster-1.jcpvy.mongodb.net/Perry?retryWrites=true&w=majority");

var csrfProtection = csrf({ cookie: true })

var parseForm = bodyParser.urlencoded({ extended: false })
 
mongoose.connect("mongodb+srv://Perry:Edpmemphis18.@buwebdev-cluster-1.jcpvy.mongodb.net/Perry?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.use(helmet.xssFilter());

app.use(cookieParser())

app.get("/", async (request, response)=>{
  //  await client.connect();
    response.render("index", {

        title: "Home page"

    });

});
app.get("/new",csrfProtection, async (request, response)=>{
  //  await client.connect();
    response.render("new", {

        message: "Home page",
       csrfToken: request.csrfToken()

    });

});

app.post("/process", parseForm, csrfProtection, async function(request, response) {
    console.log(request.body.txtName);

  
const employee = new Employee({ firstName: request.body.txtName.split(" ")[0], lastName: request.body.txtName.split(" ")[1] })
employee.save()



    
    response.redirect("/");
})
app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;
       response.render("list", {
           title: "Employee List",
           employees: employees
       });
    });
});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});