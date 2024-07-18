const express = require("express");
const { handleAddProject } = require("../Controllers/Project.controller");
const checkAUthenticationCookie = require("../Middleware/Authentication middleware");
const Router = express.Router();
Router.post(
  "/addProject",
  checkAUthenticationCookie("usertoken"),
  handleAddProject
);
module.exports = Router;
