import axios from "axios";
import React, { useEffect, useState } from "react";

function MyOrder() {
  const [order, setorder] = useState([]);

  useEffect(() => {
    const fatchAllOrder = async () => {
      const response = await axios.get("http://localhost:4000/order/myOrder", {
        withCredentials: true,
      });
      const res = response.data;
      setorder(res.allOrders);
    };
    fatchAllOrder();
  }, []);
  return (
    <div className="bg-gray-200 rounded-lg flex flex-col">
      <h1 className="text-3xl font-bold font-serif mt-2">Your Order</h1>
      {order.map((item) => (
        <div key={item._id} className="grid grid-cols-3 w-auto bg-gray-300 items-center my-6 mx-12">
          <div className="flex justify-center items-center">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.wMftsrP6USIHg4aMEpwnPQHaHa&pid=Api&rs=1&c=1&qlt=95&w=119&h=119"
              alt=""
              className="h-auto my-4"
            />
          </div>
          <div className="col-span-2 flex flex-col items-start">
            <h1>Name:      {item.productName}</h1>
            <h1>Date:      Order Date</h1>
            <h1>Price:     {item.price}</h1>
            <h1>Address: {item.address}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyOrder;
