import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
        <p className="text-xl text-gray-600 mb-4">
          {error.status === 404 
            ? "Sorry, we couldn't find the page you're looking for."
            : "Sorry, something went wrong."}
        </p>
        <p className="text-gray-500 mb-8">{error.statusText || error.message}</p>
        <Link
          to="/"
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default Error