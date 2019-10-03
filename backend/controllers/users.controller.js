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

  exports.userLogin = (req, res, next) => {
  let fetchedUser;
  UserModel.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer_containigmanysymbolsand12437284845numbers!#$@$%^%&*&(()",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });

}