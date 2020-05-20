import React, { Suspense } from 'react'
import { Route, Switch, Redirect, HashRouter, BrowserRouter } from 'react-router-dom'
import MyLoadingComponent from '@/components/loading'
import routes from '@/routes/index'


const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<MyLoadingComponent {...{ isLoading: true }} />}>
        <Switch>
          {routes.map(v => (
            <Route key={v.path} path={v.path} exact={v.path === '/home'}  component={v.component}></Route>
          ))}
          <Redirect from="/" to="/home" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
