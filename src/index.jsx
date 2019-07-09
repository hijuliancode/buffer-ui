import React from 'react';
import ReactDOM from 'react-dom';
import "@reach/tooltip/styles.css";
import './index.css';
import '../node_modules/highlight.js/styles/ocean.css';
import { HashRouter as Router } from 'react-router-dom';
import App from './documentation/App';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}><App /></Router>, document.getElementById('root'));
