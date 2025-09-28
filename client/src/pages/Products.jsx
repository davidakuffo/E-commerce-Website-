import React from 'react'
import Sidebar from '../components/common/Sidebar'
import ProductGrid from '../components/product/ProductGrid'

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-64">
          <Sidebar />
        </aside>
        <main className="flex-1">
          <ProductGrid />
        </main>
      </div>
    </div>
  )
}

export default Products