import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { Map } from 'immutable'

const root = ReactDOM.createRoot(document.getElementById('root'));
const preloadedState = {
  courses: Map(),
  notifications: Map({
    notifications: [],
    filter: 'DEFAULT'
  }),
  ui: Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  })
}
const store = configureStore({
  reducer: rootReducer, 
  preloadedState,
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
