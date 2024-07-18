const express = require("express");
const {
  handelUserSignup,
  handleUserSignin,
} = require("../Controllers/User.controller");
const Router = express.Router();

Router.post("/Signup", handelUserSignup);
Router.post("/Signin", handleUserSignin);
module.exports = Router;
