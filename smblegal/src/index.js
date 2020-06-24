import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/WorkSans-Regular.ttf';
import './fonts/Spartan-Regular.ttf';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/OpenSans-Regular.ttf';
/* import 'semantic-ui-css/semantic.min.css'; */


ReactDOM.render(
  <React.StrictMode>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
