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

export default class SubMenu2 extends Component {
  render() {
    return (
      <Dropdown style={{ fontFamily: 'WorkSans' }}>
        <Dropdown.Toggle style={{
          borderColor: "white", backgroundColor: "white",
          color: "rgb(201, 201, 201)", fontSize: "15px", fontWeight: "600", letterSpacing: 0, padding: "4px"
        }}>
          WHY?
            </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item><Link to="/AboutUs" className="dropdown-items">  About Us </Link> </Dropdown.Item>
          <Dropdown.Item><Link to="/ProductOverview" className="dropdown-items"> Product Overview </Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    );
  }

}
