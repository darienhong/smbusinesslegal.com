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
import SubMenu2Login from './sub_menu2Login';
import SubMenuLogin from './sub_menulogin.jsx';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconLogo from '../assets/icon-logo.png';
import Avatar from '@material-ui/core/Avatar';
import AvatarImage from '../assets/default-avatar.png';
import Logo from '../assets/logo.png';

// import { Grommet, Menu } from 'grommet';

export default class Navbar2 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
     
        <div class="container" style={{width: "100%"}}>
          <Link to="/Dashboard"><img src={Logo} alt="icon logo" className="logo" /></Link> 
          <nav>
            <ul>
              <li><Link to="/Dashboard" className="nav-bar">Home</Link></li>
              <li className="nav-bar"> <SubMenu2Login /></li>
              <li ><Link to="/ToolsLogin" className="nav-bar-1"> <SubMenuLogin />  </Link> </li>
              <li> <Link to="/Dashboard"> <img src={AvatarImage} class="avatar-image" /> </Link> </li>
            </ul>
          </nav>
        </div>
   

    );
  }

}



