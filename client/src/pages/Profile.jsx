import { motion } from 'framer-motion'
import { FaUser, FaShoppingBag, FaHeart, FaCog } from 'react-icons/fa'

const Profile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const userData = {
    name: "John Doe",
    email: "john@example.com",
    joinDate: "January 2024",
    orders: 12,
    wishlist: 5
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 mb-6"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-4">
            <motion.div
              className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <FaUser className="w-10 h-10 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
              <p className="text-gray-600">{userData.email}</p>
              <p className="text-sm text-gray-500">Member since {userData.joinDate}</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
          variants={itemVariants}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ y: -5 }}
          >
            <FaShoppingBag className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="text-lg font-semibold">Orders</h3>
            <p className="text-2xl font-bold text-indigo-600">{userData.orders}</p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ y: -5 }}
          >
            <FaHeart className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="text-lg font-semibold">Wishlist</h3>
            <p className="text-2xl font-bold text-indigo-600">{userData.wishlist}</p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ y: -5 }}
          >
            <FaCog className="w-8 h-8 text-indigo-600 mb-3" />
            <h3 className="text-lg font-semibold">Settings</h3>
            <p className="text-sm text-gray-600">Manage your account</p>
          </motion.div>
        </motion.div>

        {/* Recent Orders */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6"
          variants={itemVariants}
        >
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((order) => (
              <motion.div
                key={order}
                className="border-b pb-4 last:border-0 last:pb-0"
                whileHover={{ x: 5 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Order #{order}23456</p>
                    <p className="text-sm text-gray-600">Placed on March 15, 2024</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Delivered
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Profile