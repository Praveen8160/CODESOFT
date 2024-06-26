import React from 'react'
import { Link } from 'react-router-dom';
export default function Product({ product }){
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md">
      <Link to={`/products/${product.id}`}>
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-700 mb-2">{product.description}</p>
          <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};
