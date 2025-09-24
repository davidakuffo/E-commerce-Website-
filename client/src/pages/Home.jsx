import React from 'react'
import Header from '../components/common/Header'
import Hero from '../components/home/Hero'
import Categories from '../components/home/Categories'
import Footer from '../components/common/Footer'
import Newsletter from '../components/home/Newsletter'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home