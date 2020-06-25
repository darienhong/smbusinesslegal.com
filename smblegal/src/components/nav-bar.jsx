import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Questions from '../Questions.jsx';
import Questions from '../internship-files/Questions.jsx'
import Homepage from '../Homepage.jsx';
import AboutUs from '../aboutus.jsx';
import SubMenu from './sub-menu.jsx';
import Solutions from '../Solutions.jsx';
import Pricing from '../Pricing.jsx';
import SignUp from '../SignUp.jsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import { Grommet, Menu } from 'grommet';

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
              <li><Link to="/Questions"> <SubMenu />  </Link> </li>
              <li><Link to="/Pricing"> Pricing </Link></li>
              <li><Link to="/SignUp"> Sign Up </Link></li>
              <li><Link to="/"> Sign In </Link></li>
            </ul>
          </nav>


          <Switch>
            <Route path="/Solutions">
              <Solutions />
            </Route>
            <Route path="/Questions">
              <Questions />
            </Route>
            <Route path="/Pricing">
              <Pricing />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/SignUp">
              <SignUp />
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



