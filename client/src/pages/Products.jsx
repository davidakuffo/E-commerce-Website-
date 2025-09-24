import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
const Products = () => {
  return (
    <div>
      <Header />
      <div className=' flex-1 p-8 min-h-screen'>
        <Sidebar />
      </div>
      <Footer />
    </div>
  )
}

export default Products