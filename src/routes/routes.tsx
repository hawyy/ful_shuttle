import { createHashRouter } from 'react-router-dom'
import LandingPage from '../modules/home/LandingPage'
import RegisterPassanger from '../modules/auth/views/RegisterPassanger'
import RegisterDriver from '../modules/auth/views/RegisterDriver'

const router = createHashRouter([
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
