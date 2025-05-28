import React,{ StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
