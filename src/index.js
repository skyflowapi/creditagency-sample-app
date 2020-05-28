import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home/index';
import { Router, HashRouter, BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <HashRouter>
        <App />
     </HashRouter>
    , document.getElementById('app'));
