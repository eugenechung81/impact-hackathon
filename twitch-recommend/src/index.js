import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

window.moment = require('moment');
// window.numeral = require('numeral');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
