import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import Categories from '../components/home/Categories'
import Sidebar from '../components/common/Sidebar'
import ProductGrid from '../components/product/ProductGrid'

const Products = () => {
  const [searchParams] = useSearchParams()
  const selectedCategory = searchParams.get('category')

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 flex-grow">
        {!selectedCategory && <Categories />}
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="md:w-64">
            <Sidebar />
          </aside>
          <main className="flex-1">
            {selectedCategory && (
              <h1 className="text-3xl font-bold mb-6 capitalize">
                {selectedCategory}
              </h1>
            )}
            <ProductGrid category={selectedCategory} />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products