import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import * as Comp from '@/asyncComponent/index.js' // 按需加载组件
import MyLoadingComponent from '@/components/loading/index.js'; // loading应用层

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={<MyLoadingComponent />}>
          <Switch>
            <Route path="/login" component={Comp.Login} />
            <Route path="/home" component={Comp.Home} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
