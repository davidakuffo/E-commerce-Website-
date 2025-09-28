import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-white">
              TechMart
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white">
              Home
            </Link>
            <Link to="/products" className="text-gray-300 hover:text-white">
              Products
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
          </nav>

          {/* Desktop Search and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <Link to="/cart" className="text-gray-300 hover:text-white relative">
              <FaShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/profile" className="text-gray-300 hover:text-white">
              <FaUser className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800">
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
          >
            About
          </Link>
          <div className="px-3 py-2">
            <SearchBar />
          </div>
          <div className="flex items-center space-x-4 px-3 py-2">
            <Link to="/cart" className="text-gray-300 hover:text-white relative">
              <FaShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/account" className="text-gray-300 hover:text-white">
              <FaUser className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header