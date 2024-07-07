const express = require("express");
const Router = express.Router();
const {
  paymenthandler,
  paymentverifyhandler,
  rozarpayKeyhandler,
} = require("../Controllers/Razorpay.controller.js");
Router.post("/payment", paymenthandler);
Router.post("/paymentverify", paymentverifyhandler);
Router.get("/rozarpayKey", rozarpayKeyhandler);
module.exports = Router;
