import { lazy } from 'react'

const Login = lazy(() => import('@/containers/login/index'))
const Home = lazy(() => import('@/containers/home/index'))
const Detail = lazy(() => import('@/containers/details/details'))


const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail',
    component: Detail
  }
]

export default routes
