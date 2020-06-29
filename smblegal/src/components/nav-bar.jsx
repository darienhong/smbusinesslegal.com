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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/AboutUs"> Why? </Link></li>
              <li><Link to="/Solutions"> <SubMenu />  </Link> </li>
              <li><Link to="/Pricing"> Pricing </Link></li>
              <li><Link to="/SignUp"> Sign Up </Link></li>
              <li><Link to="/"> Sign In </Link></li>
            </ul>
          </nav>
        </div>
   

    );
  }

}



