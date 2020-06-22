import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import App from './containers/App'
// import * as Sentry from '@sentry/browser';

// Sentry.init(
//   {
//     dsn: "https://ea81dd1846a442d8882ea9d5169fa63b@o409565.ingest.sentry.io/5282383",
//     release: process.env.RELEASE_VERSION
//   },
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)

if (module.hot) {
  module.hot.accept()
}
// 判断该浏览器支不支持 serviceWorker
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then(registration => {
//         console.log('service-worker registed')
//       })
//       .catch(error => {
//         console.log('service-worker registed error')
//       })
//   })
// }
