import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page2 from './page2';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
            <Route exact path="/" ><App /></Route>
            <Route path="/page2"><Page2 /></Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
