import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: 'MacBook Pro',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    category: 'laptops'
  },
  // Add more products...
]

const ProductGrid = ({ category }) => {
  const filteredProducts = category
    ? products.filter(p => p.category === category)
    : products

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button className="mt-2 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
              Add to Cart
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProductGrid