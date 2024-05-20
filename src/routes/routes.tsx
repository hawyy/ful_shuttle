import {createBrowserRouter, Link} from 'react-router-dom'
import RegisterPassanger from '../pages/register/RegisterPassanger'
import RegisterDriver from '../pages/register/RegisterDriver'
import LandingPage from '../pages/landingpage/LandingPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: 'register-client',
    element: <RegisterPassanger />
  },
  {
    path: 'register-driver',
    element: <RegisterDriver />
  }
])
export default router
