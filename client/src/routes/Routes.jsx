import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Error from '../components/common/Error'
import CheckoutForm from '../components/checkout/CheckoutForm'
import Profile from '../pages/Profile'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: 'checkout',
    element: <CheckoutForm />
  },
  {
    path: '/products',
    element: <Products />,
    errorElement: <Error />
  },
  {
    path: '/cart',
    element: <Cart />,
    errorElement: <Error />
  },
  {
    path: 'profile',
    element: <Profile />
  }
])

export default router