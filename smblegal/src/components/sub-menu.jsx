import React, { Component, Button } from 'react';
import '../App.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";
import Questions from '../Questions.jsx';
import Homepage from '../Homepage.jsx';

export default class SubMenu extends Component { 
    render() {
        return (
            <Dropdown style={{fontFamily: 'WorkSans'}}>
            <Dropdown.Toggle style={{borderColor: "white", backgroundColor: "white", 
            color: "rgb(169, 172, 201)", fontSize: "16px", fontWeight: "550", letterSpacing: 0, padding: "2px"}}>
              SOLUTIONS
            </Dropdown.Toggle>
          
            <Dropdown.Menu>
              <Dropdown.Item><Link to="/Questions">  Automated Documents </Link> </Dropdown.Item>
              <Dropdown.Item><Link to="/Questions"> Governance Automation </Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
        );
    }

}