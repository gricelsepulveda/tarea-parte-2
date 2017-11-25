import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import * as reducers from './reducers'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

let store = createStore(combineReducers({
  ...reducers,
  form: formReducer,
}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
