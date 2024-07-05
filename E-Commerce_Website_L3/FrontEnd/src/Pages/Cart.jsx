import React, { useEffect, useState } from "react";

function Cart() {
  const [cart, setcart] = useState([]);
  useEffect(() => {
    const value = JSON.parse(localStorage.getItem("Products"));
    // console.log(value);
    value && setcart(value);
  }, []);
  const deletefromcart=(index)=>{
    const newcart=[...cart]
    newcart.splice(index,1)
    localStorage.setItem("Products",JSON.stringify(newcart))
    setcart(newcart)
  }
  const totalprice = cart.reduce((total, product) => total + product.price, 0);
  return (
    <div className="bg-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 sm:p-11">
        <div className="flex flex-col lg:col-span-2 rounded-lg">
          {cart
            ? cart.map((item,index) => (
                <>
                  <div className="flex flex-col lg:flex-row items-center bg-gray-400 p-4 rounded-md" key={index}>
                    <div className="m-4">
                      <img
                        src={item.img}
                        className="rounded-md h-20 w-32"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col flex-grow ml-4 space-y-2">
                      <h1 className="text-lg font-semibold">{item.pname}</h1>
                      <p className="text-sm text-black">{item.description}</p>
                      <h3 className="text-lg font-semibold">
                        Price: <span>${item.price}</span>
                      </h3>
                    </div>
                    <button className="mt-4 lg:mt-0 lg:ml-auto px-4 py-2 bg-red-500 text-white rounded-md" onClick={()=>deletefromcart(index)}>
                      Delete
                    </button>
                  </div>
                  <hr />
                </>
              ))
            : null}

          <div className="mt-4">
            <button className="px-4 py-2 bg-blue-500 text-black rounded-md">
              Place Order
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start h-52 p-4 bg-gray-400 text-black rounded-md">
          <h1 className="text-lg font-bold mb-2">Price Details</h1>
          <hr className="w-full border-t-2 border-gray-300 my-2" />
          <div className="w-full">
            <h1 className="text-xl font-semibold flex justify-between w-full">
              <span>Total Price:</span>
              <span>${totalprice}</span>
            </h1>
            <h1 className="text-xl font-semibold flex justify-between w-full mt-2">
              <span>Delivery:</span>
              <span>$50</span>
            </h1>
          </div>
          <hr className="w-full border-t-2 border-gray-300 my-2" />
          <h1 className="text-xl font-semibold flex justify-between w-full">
            <span>Total Amount:</span>
            <span>${(totalprice + 50).toFixed(2)}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
