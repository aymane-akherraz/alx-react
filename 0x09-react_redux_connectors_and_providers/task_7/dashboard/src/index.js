import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk)
  )
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
