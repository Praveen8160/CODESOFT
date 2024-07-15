const order = require("../models/Order.model.js");
const placeOrderhandler = async (req, res) => {
  const orderdata = req.body.orderData;
  const orderDate = req.body.orderDate;
  console.log(orderDate);
  try {
    await order.create({
      productName: orderdata[0].pname,
      productId: orderdata[0].id,
      CustomerId: req.users.id,
      price: parseFloat(orderdata[0].price),
      description: orderdata[0].description,
      address: req.users.address,
    });
    return res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

const handleMyOrder = async (req, res) => {
  try {
    const allOrders = await order.find({ CustomerId: req.users.id });
    return res.status(201).json({ success: true, allOrders });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
module.exports = { placeOrderhandler, handleMyOrder };
