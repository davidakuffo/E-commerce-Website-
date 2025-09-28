import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  }

  const childVariants = {
    hidden: { 
      y: 50,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { scale: 0.95 }
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
              variants={childVariants}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Welcome to TechMart
              </motion.span>
              <motion.span 
                className="block text-indigo-400"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Your One-Stop Tech Shop
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
              variants={childVariants}
            >
              Discover the latest in technology with our wide selection of products at competitive prices.
            </motion.p>
            
            <motion.div 
              className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
              variants={childVariants}
            >
              <motion.div
                className="rounded-md shadow-lg"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Shop Now
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero