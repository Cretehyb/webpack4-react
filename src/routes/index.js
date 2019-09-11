import { lazy } from 'react'

const Login = lazy(() => import('@/containers/login/index.js'))
const Home = lazy(() => import('@/containers/home/index.js'))

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

export default routes
