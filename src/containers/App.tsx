import React, { PureComponent, Suspense } from 'react'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import MyLoadingComponent from '@/components/loading'
import routes from '@/routes/index'


const App: React.FC<{}> = () => {
  return (
    <HashRouter>
      <Suspense fallback={<MyLoadingComponent {...{isLoading: true}} />}>
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

export default App
