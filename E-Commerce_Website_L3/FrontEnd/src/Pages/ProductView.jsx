import React, { Children, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function ProductView() {
  const { id } = useParams();
  const [product,setproduct]=useState([])
  useEffect(() => {
    const getSingleProduct = async () => {
      const res = await axios.get(
        `http://localhost:4000/product/getSingleProduct/${id}`
      );
      setproduct(res.data.product)
      console.log(res.data)
    };
    getSingleProduct();
  }, []);
  return (
    <div className="container shadow-xl">
      <div className="flex flex-col justify-center items-center">
        <img
          src={product.image}
          alt=""
          className="object-fill mt-7 max-h-96 rounded-2xl"
        />
        <h1 className="font-bold text-3xl my-5">{product.title}</h1>
      </div>
      <p className="text-lg font-medium mx-20">
       {product.description}
      </p>
      <h2 className="font-bold text-2xl my-5">${product.price}</h2>
      <button className="text-white bg-yellow-900 hover:bg-yellow-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 mb-6 lg:py-2.5 mr-2 focus:outline-none">
        ADD TO CART
      </button>
    </div>
  );
}

export default ProductView;
