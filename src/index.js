import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // starting point of App.js where we will create our frontend

const root = ReactDOM.createRoot(document.getElementById('root')); // renders our app, loading app in that root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

