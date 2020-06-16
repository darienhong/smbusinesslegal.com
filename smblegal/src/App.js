import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import Questions from './Questions.jsx';
import Homepage from './Homepage.jsx';
import Navbar from './nav-bar.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (

      <div class="header">
        <Navbar />
      </div>
/*<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Questions">Questions</Link>
            </li>
          </ul>
        </nav>

      
        <Switch>
          <Route path="/Questions">
            <Questions />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
    */

    );
  }
}

