import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    try {
      // TODO: Implement newsletter subscription API call
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }

    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <section className="bg-indigo-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-indigo-200 mb-8">
            Get the latest updates on new products and upcoming sales.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors"
              >
                Subscribe
              </button>
            </div>

            {status === 'success' && (
              <p className="text-green-400 mt-2">
                Thanks for subscribing!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter