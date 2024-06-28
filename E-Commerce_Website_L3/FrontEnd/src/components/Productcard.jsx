import React from "react";
import { Link } from "react-router-dom";
export default function Productcard({ product }) {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md">
      <Link to={`/products/${product._id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        </div>
      </Link>
    </div>
  );
}
