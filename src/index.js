import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MetaTags from 'react-meta-tags';

ReactDOM.render(
  <React.StrictMode>
    <MetaTags>
      <title>Page 1</title>
      <meta name="theme-color" content="#222222" />
    </MetaTags>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();