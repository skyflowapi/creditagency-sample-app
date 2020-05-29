import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './components/Home/index';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>
    , document.getElementById('app'));
