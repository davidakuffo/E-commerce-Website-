import React from 'react'
import { motion } from 'framer-motion'
import Photo2 from '../../assets/photo2.jpg'
import Photo5 from '../../assets/photo5.jpg'
import Photo4 from '../../assets/photo4.jpg'
import Photo6 from '../../assets/photo6.jpg'
import Photo7 from '../../assets/photo7.jpg'
import Photo8 from '../../assets/photo8.jpg'



const products = [
  {
    id: 1,
    name: 'MacBook Pro',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    category: 'laptops'
  },
  {
    id: 2,
    name: 'iPhone 14 Pro',
    price: 999.99,
    image: Photo2,
    category: 'smartphones'
  },
  {
    id: 3,
    name: 'Apple Watch Series 8',
    price: 399.99,
    image: Photo5,
    category: 'accessories',
  },
  {
    id: 4,
    name: 'Gaming Mouse',
    price: 49.99,
    image: Photo4,
    category: 'gaming',
  },
  {
    id: 5,
    name: 'Bluetooth Headphones',
    price: 79.99,
    image: Photo6,
    category: 'accessories',
  },
  {
    id: 6,
    name: 'Samsung',
    price: 1499.99,
    image: Photo7,
    category: 'laptops',
  },
 {
  id: 7,
  name: 'Razer Headphones',
  price: 129.99,
  image: Photo8,
  category: 'accessories'
 }
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