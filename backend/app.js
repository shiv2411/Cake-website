var express                   = require("express"),
    mongoose                  = require("mongoose"),
    User                      = require("./models/user"),
    bodyParser                = require("body-parser");
mongoose.connect("mongodb://localhost:27017/SCWS")

var passwordHash = require('password-hash');

var app = express();
app.set("view engine", 'ejs');

app.get("/",function(req , res){
    res.render("login");
});

app.use(bodyParser.urlencoded({extended : true}));


// Auth Routes

app.get("/signup", function(req, response){
    response.render("signup");
});

 app.post("/signup", function(req, response){
     User.find({email : req.body.eMail} , function(err , result)
     {
         if(result){
             response.send("User already exists");
         }
         else{
            User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            eMail : req.body.eMail,
            password : passwordHash.generate(req.body.password)
            })
            response.render("signup");
         }
     })

});

app.get("/login", function(req , response){
    response.render("login");
})
app.post("/login",function(req , response){
    User.findOne({eMail : req.body.eMail} , function(err , res){
        if(!res){
            response.send("User doesn't exists");
        }
        else{
            User.findById(res._id , function(err , result){
            if(!result){
                response.send("User doesn't exists");

        }
            if(passwordHash.verify(req.body.password, result.password)){
                response.send("LOG IN SUCCESSFUL");
            }
            else{
                response.send("Wrong password");
            }
        })
        }
    })
})


app.listen(3000 , function(req , res){
    console.log("Server started");
});
