import React, { useEffect, useState } from "react";
import Productcard from "../components/Productcard";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
function Product() {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [category,setcategory]=useState("ALL PRODUCTS")
  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        "http://localhost:4000/product/getAllProduct"
      );
      const response = res.data;
      setproduct(response);
    };
    const getSingleCategoryProduct = async () => {
      const res = await axios.get(
        `http://localhost:4000/product/getSingleCategoryProduct/${id}`
      );
      setproduct(res.data.product);
      setcategory(res.data.category)
    };
    if (id) {
      getSingleCategoryProduct();
    } else {
      getProduct();
    }
  }, []);
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center h-48 mt-5 bg-gray-200 rounded-3xl">
        <h1 className="font-bold text-3xl">{id ? category.toUpperCase()+" SHOP":"ALL PRODUCTS"}</h1>
        <span className="font-bold">
          <Link to="/" className="underline">
            Home
          </Link>
          /{category}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {product.map((item) => (
          <Productcard key={item._id} product={item}></Productcard>
        ))}
      </div>
    </div>
  );
}

export default Product;
