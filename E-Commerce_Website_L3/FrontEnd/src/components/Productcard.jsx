import React from "react";
import { Link } from "react-router-dom";
function Productcard({product}) {
  return (
    <div className="bg-white hover:scale-110 transition duration-700 rounded-lg mt-24 overflow-hidden shadow-xl">
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-fill"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
          <h3 className="text-xl font-semibold mb-2"><span>$</span>{product.price}</h3>
          <button className="text-white bg-yellow-900 hover:bg-yellow-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">ADD TO CART</button>
        </div>
      </Link>
    </div>
  );
}

export default Productcard;
