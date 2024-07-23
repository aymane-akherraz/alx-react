import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GetNotifs from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="root-notifications">
      <GetNotifs />
    </div>
    <App />
  </React.StrictMode>
);
