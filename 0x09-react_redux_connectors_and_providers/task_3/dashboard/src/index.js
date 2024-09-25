import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: uiReducer, 
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      serializableCheck: false,
    })
  )
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
