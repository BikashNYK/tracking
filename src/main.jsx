import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { projectReducer } from './components/reducer/reducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  projectReducer : projectReducer
})

const store = configureStore ({
  reducer : rootReducer
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
