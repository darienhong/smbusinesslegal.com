import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SubMenu from './sub-menu.jsx';
import SubMenu2 from './sub_menu2.jsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconLogo from '../assets/icon-logo.png';
import Logo from '../assets/logo.png';
import Image from '../assets/top-logo.png';

// import { Grommet, Menu } from 'grommet';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
     
        <div class="container">
          <Link to="/"><img src={Image} alt="icon logo" className="logo" /></Link> 
          <nav>
            <ul>
              <li><Link to="/" className="nav-bar">Home</Link></li>
              <li className="nav-bar"> <SubMenu2 /></li>
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



