import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'

const MyLoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  } else {
    return null
  }
}

const Login = lazy(() => import('./login/index.js'))
const Home = lazy(() => import('./home/index.js'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<MyLoadingComponent />}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
