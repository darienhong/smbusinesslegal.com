import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Formation from './document types/Formation.jsx';
import Governance from './document types/Governance.jsx';
import Employment from './document types/Employment.jsx';
import Covid_19 from './document types/COVID-19.jsx';
import Questions from './internship-files/Questions.jsx';
import Homepage from './Homepage.jsx';





export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Formation">
            <Formation />
          </Route>
          <Route path="/Governance">
            <Governance />
          </Route>
          <Route path="/Employment">
            <Employment />
          </Route>
          <Route path="/Covid_19">
            <Covid_19 />
          </Route>
          <Route path="/">
            <Navbar />
          </Route>
          <Route path="/Questions">
            <Questions />
          </Route>
        </Switch>






      </Router>
    );
  }
}

