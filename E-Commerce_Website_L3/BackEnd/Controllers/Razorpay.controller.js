const instance = require("../Utils/Razorpay.js");
const crypto = require("crypto");
const paymenthandler = async (req, res) => {
  console.log(req.body.amount);
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
    };
    const order = await instance.orders.create(options);

    console.log(order);

    res.json({ success: true, order });
  } catch (error) {
    console.log("error", error);
  }
};
const paymentverifyhandler = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.Razorpay_KEY_SECRET)
      .update(body.toString())
      .digest("hex");
    const isAuthentic = razorpay_signature === expectedSignature;

    if (isAuthentic) {
      return res.json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  } catch (error) {
    console.log("error", error);
  }
};
const rozarpayKeyhandler = () => {
  res.json({ key: process.env.Razorpay_KEY_ID });
};
module.exports = {
  paymenthandler,
  paymentverifyhandler,
  rozarpayKeyhandler,
};
