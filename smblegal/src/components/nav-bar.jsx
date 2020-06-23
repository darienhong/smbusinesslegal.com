import React, { Component } from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";
import Questions from '../Questions.jsx';
import Homepage from '../Homepage.jsx';
import AboutUs from '../aboutus.jsx';
import SubMenu from './sub-menu.jsx';

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
                    <li><Link to="/AboutUs"> Why </Link></li>
                    <li className="nav_menu-item"><Link to="/Questions"> Solutions </Link> <SubMenu /></li>
                    <li><Link to="/"> Pricing </Link></li>
                    <li><Link to="/"> Sign Up </Link></li>
                    <li><Link to="/"> Sign In </Link></li>
                </ul>
            </nav>
          
      
        <Switch>
          <Route path="/Questions">
            <Questions />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
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



