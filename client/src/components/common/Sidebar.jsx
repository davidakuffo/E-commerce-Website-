import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [priceRange, setPriceRange] = useState(1000)

  const categories = [
    { id: 1, name: 'All Products', value: '' },
    { id: 2, name: 'Laptops', value: 'laptops' },
    { id: 3, name: 'Smartphones', value: 'smartphones' },
    { id: 4, name: 'Accessories', value: 'accessories' },
    { id: 5, name: 'Gaming', value: 'gaming' }
  ]

  const brands = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Samsung' },
    { id: 3, name: 'Dell' },
    { id: 4, name: 'HP' },
    { id: 5, name: 'Lenovo' }
  ]

  const handleCategoryChange = (categoryValue) => {
    if (categoryValue) {
      searchParams.set('category', categoryValue)
    } else {
      searchParams.delete('category')
    }
    setSearchParams(searchParams)
  }

  const handleBrandFilter = (brandName) => {
    searchParams.set('brand', brandName)
    setSearchParams(searchParams)
  }

  const handlePriceChange = (value) => {
    setPriceRange(value)
    searchParams.set('maxPrice', value)
    setSearchParams(searchParams)
  }

  return (
    <div className="w-64 bg-white p-4 shadow-md">
      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => handleCategoryChange(category.value)}
                className={`w-full text-left px-2 py-1 rounded ${
                  searchParams.get('category') === category.value
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange}
            onChange={(e) => handlePriceChange(e.target.value)}
            className="w-full"
          />
          <div className="flex justify-between mt-2">
            <span>$0</span>
            <span>${priceRange}</span>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Brands</h3>
        <ul className="space-y-2">
          {brands.map((brand) => (
            <li key={brand.id}>
              <button
                onClick={() => handleBrandFilter(brand.name.toLowerCase())}
                className={`w-full text-left px-2 py-1 rounded ${
                  searchParams.get('brand') === brand.name.toLowerCase()
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'hover:bg-gray-100'
                }`}
              >
                {brand.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar