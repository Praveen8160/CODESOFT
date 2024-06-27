const User = require("../models/User.model.js");
const userRegisterhandler = async (req, res) => {
  try {
    const { fullname, email, password, address, mobile } = req.body;
    const registerUser = User.create({
      fullname,
      email,
      password,
      address,
      mobile,
    });
    if (registerUser) {
      return res.json({ succes: true });
    } else {
      console.log("user not register");
    }
  } catch (error) {}
};

module.exports = {
  userRegisterhandler,
};
