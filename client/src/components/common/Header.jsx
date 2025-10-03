import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          className="relative flex items-center justify-between h-20
            rounded-2xl mt-4 shadow-xl
            bg-gradient-to-r from-blue-400 via-teal-300 to-white/70
            bg-opacity-60 backdrop-blur-lg
            border border-white/30
            overflow-hidden"
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
            borderTop: '1px solid rgba(255,255,255,0.3)',
            borderLeft: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          {/* Glossy highlight */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-white/60 via-white/10 to-transparent rounded-t-2xl pointer-events-none" />

          {/* Subtle reflection */}
          <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-white/20 via-transparent to-white/10 rounded-b-2xl pointer-events-none" />

          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <Link
              to="/"
              className="text-2xl font-extrabold text-white drop-shadow-lg tracking-wide px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md"
              style={{
                textShadow: '0 2px 8px rgba(0, 255, 255, 0.3)',
              }}
            >
              TechMart
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-white bg-white/20 shadow-lg hover:bg-white/30 transition"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 z-10">
            {['Home', 'Products', 'About'].map((item, idx) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative text-lg font-medium text-white px-4 py-2 rounded-xl shadow-md
                  transition-all
                  hover:bg-white/20
                  hover:shadow-[0_0_8px_2px_rgba(0,255,255,0.3)]
                  hover:text-teal-200
                  focus:outline-none"
                style={{
                  boxShadow: '0 2px 8px rgba(0, 255, 255, 0.08)',
                }}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-300 via-teal-200 to-white/40 opacity-0 group-hover:opacity-100 transition rounded-b-xl" />
              </Link>
            ))}
          </nav>

          {/* Desktop Search and Actions */}
          <div className="hidden md:flex items-center space-x-4 z-10">
            <SearchBar />
            <Link to="/cart" className="relative text-white hover:text-teal-200 transition drop-shadow-lg">
              <FaShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-teal-400 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center shadow-md border border-white/30">
                0
              </span>
            </Link>
            <Link to="/profile" className="text-white hover:text-teal-200 transition drop-shadow-lg">
              <FaUser className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 rounded-b-2xl bg-gradient-to-r from-blue-400 via-teal-300 to-white/70 bg-opacity-80 backdrop-blur-lg shadow-xl border border-white/30 mt-1">
          {['Home', 'Products', 'About'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="block px-3 py-2 text-base font-medium text-white rounded-xl shadow-md hover:bg-white/20 hover:text-teal-200 transition"
            >
              {item}
            </Link>
          ))}
          <div className="px-3 py-2">
            <SearchBar />
          </div>
          <div className="flex items-center space-x-4 px-3 py-2">
            <Link to="/cart" className="relative text-white hover:text-teal-200 transition drop-shadow-lg">
              <FaShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-teal-400 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center shadow-md border border-white/30">
                0
              </span>
            </Link>
            <Link to="/profile" className="text-white hover:text-teal-200 transition drop-shadow-lg">
              <FaUser className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header