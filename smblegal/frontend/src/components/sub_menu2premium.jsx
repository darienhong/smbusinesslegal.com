import React, { Component, Button } from 'react';
import '../App.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Questions from '../internship-files/Questions.jsx'
import Homepage from '../Homepage.jsx';

export default class SubMenu2Premium extends Component {
  render() {
    return (
      <Dropdown style={{ fontFamily: 'WorkSans' }}>
        <Dropdown.Toggle style={{backgroundColor: "white", borderColor: "white", color: "#245CA6",
      fontWeight: "600", fontSize: "15px", fontFamily: "DM Sans"}} >
          Why?
            </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item><Link to="/AboutUsPremium" className="dropdown-items">  About Us </Link> </Dropdown.Item>
          <Dropdown.Item><Link to="/ProductOverviewPremium" className="dropdown-items"> Product Overview </Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    );
  }

}