import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Page5 from './page5';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
            <Route exact path="/" ><App /></Route>
            <Route path="/page2"><Page2 /></Route>
            <Route path="/page3"><Page3 /></Route>
            <Route path="/page4"><Page4 /></Route>
            <Route path="/page5"><Page5 /></Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
