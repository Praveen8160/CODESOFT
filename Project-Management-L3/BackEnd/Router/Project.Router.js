const express = require("express");
const {
  handleAddProject,
  handleAllProjects,
  handleSinglePoject,
} = require("../Controllers/Project.controller");
const checkAUthenticationCookie = require("../Middleware/Authentication middleware");
const Router = express.Router();
Router.post(
  "/addProject",
  checkAUthenticationCookie("usertoken"),
  handleAddProject
);
Router.get(
  "/allProject",
  checkAUthenticationCookie("usertoken"),
  handleAllProjects
);
Router.get("/getSingleProject/:id", handleSinglePoject);
module.exports = Router;
