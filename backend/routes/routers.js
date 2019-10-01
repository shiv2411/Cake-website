const express = require('express');
const router = express.Router();

const UserController = require("../controllers/users.controller");


//routes
// router.get('/', getAll);

router.post("/register", UserController.createUser);

// router.post("/login", UserController.userLogin);

module.exports = router;