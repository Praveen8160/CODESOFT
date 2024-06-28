const express = require("express");
const { getAllProductCategory } = require("../Controllers/Product.controller");
const Router = express.Router();

Router.get("/getAllProductCategories", getAllProductCategory);
module.exports = Router;
