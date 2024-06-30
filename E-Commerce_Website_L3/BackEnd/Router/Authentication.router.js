const express = require("express");
const router = express.Router();
const { getUserToken } = require("../Service/authentication.js");

router.get("/auth", (req, res) => {
  const Token = req.cookies.token;
  console.log(Token)
  if (Token) {
    const userPayload = getUserToken(Token);
    console.log("userPayload")
    userPayload ? res.json({ success: true }) : res.json({ success: false });
  } else {
    res.json({ success: false });
  }
});
module.exports = router;
