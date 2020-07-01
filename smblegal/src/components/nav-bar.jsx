import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SubMenu from './sub-menu.jsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconLogo from '../assets/icon-logo.png';

// import { Grommet, Menu } from 'grommet';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
     
        <div class="container">
          <Link to="/"><img src={IconLogo} alt="icon logo" className="logo" /></Link> 
          <nav>
            <ul>
              <li><Link to="/" className="nav-bar">Home</Link></li>
              <li><Link to="/AboutUs" className="nav-bar"> Why? </Link></li>
              <li ><Link to="/Tools" className="nav-bar-1"> <SubMenu />  </Link> </li>
              <li><Link to="/Pricing" className="nav-bar"> Pricing </Link></li>
              <li><Link to="/CreateAccount" className="nav-bar"> Sign Up </Link></li>
              <li><Link to="/SignIn" className="nav-bar"> Sign In </Link></li>
            </ul>
          </nav>
        </div>
   

    );
  }

}



