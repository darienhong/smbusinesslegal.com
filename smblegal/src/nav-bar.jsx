import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";
import Questions from './Questions.jsx';
import Homepage from './Homepage.jsx';
export default class Navbar extends Component {
constructor(props) {
    super(props)
}
render() {
    return (
        <Router>
            <div class="container">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Questions">Questions</Link></li>
                    <li><Link to="/Questions">Questions</Link></li>
                    <li><Link to="/Questions">Questions</Link></li>
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

    );
}

}



