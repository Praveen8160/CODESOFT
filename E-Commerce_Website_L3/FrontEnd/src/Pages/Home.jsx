import React from 'react'
import Product from '../components/Product'
import { Link } from 'react-router-dom';
function Home() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 29.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      price: 39.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Nulla faucibus nulla eu justo tristique congue.',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Aliquam efficitur sit amet lacus id hendrerit.',
      price: 59.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Aliquam efficitur sit amet lacus id hendrerit.',
      price: 59.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Aliquam efficitur sit amet lacus id hendrerit.',
      price: 59.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Aliquam efficitur sit amet lacus id hendrerit.',
      price: 59.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Aliquam efficitur sit amet lacus id hendrerit.',
      price: 59.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Aliquam efficitur sit amet lacus id hendrerit.',
      price: 59.99,
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];
  return (
    <div className="container mx-auto px-4">
    <div className="mb-4">
      <img src="https://via.placeholder.com/800x200" alt="Carousel" className="w-full" />
    </div>

    {/* Search Box */}
    <div className="mb-4">
      <input type="text" placeholder="Search products..." className="w-full px-4 py-2 border border-gray-300 rounded-md" />
    </div>

    {/* Heading */}
    <h2 className="text-2xl font-bold mb-4">Featured Products</h2>

    {/* Product Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </div>
     
  )
}

export default Home
