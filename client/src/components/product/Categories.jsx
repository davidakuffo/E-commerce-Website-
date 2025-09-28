import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const categories = [
  {
    id: 1,
    name: 'Laptops',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    count: 24
  },
  {
    id: 2,
    name: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    count: 18
  },
  {
    id: 3,
    name: 'Gaming',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e',
    count: 12
  },
  {
    id: 4,
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1616353071496-b976be5ea6ef',
    count: 32
  }
]

const Categories = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <Link 
              to={`/products?category=${category.name.toLowerCase()}`}
              className="block relative rounded-lg overflow-hidden shadow-md group"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <span className="text-gray-200">{category.count} Products</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Categories