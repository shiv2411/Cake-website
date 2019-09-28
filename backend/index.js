const connection = require("./model");
var session = require('express-session');
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const UserModel = mongoose.model("User");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen("3000", () => {
    console.log("Server started");
}
);


app.use(session({
    secret: 'k344kk44k4k4h44',
    resave: true,
    saveUninitialized: true
}));

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})
app.get("/regist", (req, res) => {
    res.sendFile('register.html', { root: __dirname })
})
app.get("/login", (req, res) => {
    res.sendFile('login.html', { root: __dirname })
})


app.post("/register", (req, res) => {
    console.log(req.body);
    var newuser = new UserModel();
    newuser.email = req.body.email;
    newuser.hash = req.body.password;
    newuser.firstName = req.body.fname;
    newuser.lastName = req.body.lname;

    newuser.save();
    res.send("User Registered Successfully");

})
app.post('/auth', function (req, res) {
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;
    if (email && password) {
        UserModel.findOne({ email: email, hash: password }, function (err, user) {

            if (err) {
                console.log(err)
                res.status(500).send()
            }
            if (!user) {
                res.send("Either Username or Password is Incorrect")
            }
            else {

                req.session.loggedin = true;
                req.session.email = email;
                res.redirect('/');
            }
        }
        )
    }
});