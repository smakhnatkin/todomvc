import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import configureStore from './store';


import'./index.css';
import'./common.css';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={configureStore()}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
