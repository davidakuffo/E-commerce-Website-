import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const params = new URLSearchParams(searchParams)
      params.set('search', searchQuery)
      navigate(`/products?${params.toString()}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex-1 max-w-lg mx-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-full focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 hover:text-indigo-600"
        >
          <FaSearch className="w-5 h-5" />
        </button>
      </div>
    </form>
  )
}

export default SearchBar