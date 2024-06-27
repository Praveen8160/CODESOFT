const express = require("express");
const { userRegisterhandler } = require("../Controllers/User.controller");
const Router = express.Router();
Router.post("/SignUp",userRegisterhandler);
module.exports = Router;
