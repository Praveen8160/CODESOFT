import React, { useEffect, useState } from "react";
import Categoriescard from "../components/Categoriescard";
import axios from "axios";
function Home() {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchcategory = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/product/getAllProductCategories"
        );
        const response = res.data;
        setCategories(response);
      } catch (error) {}
    };
    fetchcategory();
  }, []);
  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/800x200"
          alt="Carousel"
          className="w-full"
        />
      </div>

      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">Products Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories
          .filter((filteritem) =>
            filteritem.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((category) => (
            <Categoriescard key={category._id} product={category} />
          ))}
      </div>
    </div>
  );
}

export default Home;
