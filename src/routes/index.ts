import { lazy } from 'react'

const Login = lazy(() =>
  import(/* webpackChunkName: "login" */ '@/containers/login/index')
)
const Home = lazy(() =>
  import(/* webpackChunkName: "home" */ '@/containers/home/index')
)
const Detail = lazy(() =>
  import(/* webpackChunkName: "detail" */ '@/containers/details/index')
)

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
