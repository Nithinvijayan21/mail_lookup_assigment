import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as HashRouter} from "react-router-dom";
ReactDOM.render(
    <HashRouter>
   
            <App/>
            
    </HashRouter>
    
    ,document.getElementById('root'));
