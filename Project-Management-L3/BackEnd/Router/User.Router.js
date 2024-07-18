const express = require("express");
const { handelUserSignup } = require("../Controllers/User.controller");
const Router = express.Router();

Router.post("/Signup", handelUserSignup);
module.exports = Router;
