import React, { PureComponent, Suspense } from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import MyLoadingComponent from '@/components/loading/index.js'
import routes from '../routes/index.js'

class App extends PureComponent {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={<MyLoadingComponent />}>
          <Switch>
            {routes.map(v => (
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
