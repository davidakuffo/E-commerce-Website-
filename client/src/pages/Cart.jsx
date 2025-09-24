import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const Cart = () => {
  return (
    <div>
      <Header />
      <div className='min-h-screen'>
        <h2 className='text-2xl font-semibold'>Shopping Cart</h2>
        <Footer />
      </div>
     
    </div>
  )
}

export default Cart