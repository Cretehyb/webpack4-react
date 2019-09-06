import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './views/App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
// 判断该浏览器支不支持 serviceWorker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('service-worker registed')
      })
      .catch(error => {
        console.log('service-worker registed error')
      })
  })
}
