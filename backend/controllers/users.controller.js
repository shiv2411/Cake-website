const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const UserModel = require("../model/users.model");
// const UserModel = mongoose.model("User");

exports.createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(hash =>{
        console.log(req.body);
        var newuser = new UserModel({
        firstName:req.body.fname,
        lastName: req.body.lname,
        email: req.body.email,
        password: hash
    });
    newuser.save()
    .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Invalid authentication credentials!"
        });
      });
    });

}