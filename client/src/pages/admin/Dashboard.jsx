import React from 'react'
import { FaUsers, FaShoppingCart, FaDollarSign, FaBoxOpen } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Dashboard = () => {
  const stats = [
    {
      id: 1,
      title: 'Total Sales',
      value: '$15,350',
      icon: <FaDollarSign className="w-6 h-6" />,
      color: 'bg-green-500'
    },
    {
      id: 2,
      title: 'Total Orders',
      value: '125',
      icon: <FaShoppingCart className="w-6 h-6" />,
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Total Users',
      value: '1,240',
      icon: <FaUsers className="w-6 h-6" />,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Products',
      value: '84',
      icon: <FaBoxOpen className="w-6 h-6" />,
      color: 'bg-orange-500'
    }
  ]

  const recentOrders = [
    {
      id: 1,
      customer: 'John Doe',
      product: 'MacBook Pro',
      amount: '$1,299',
      status: 'Delivered'
    },
    // Add more orders...
  ]

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
              </div>
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.product}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {order.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard