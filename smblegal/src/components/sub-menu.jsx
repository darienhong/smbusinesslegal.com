import React, { Component, Button } from 'react';
import '../App.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';

export default class SubMenu extends Component { 
    render() {
        return (
            <Dropdown style={{fontFamily: 'WorkSans'}}>
            <Dropdown.Toggle style={{borderColor: "white", backgroundColor: "white", 
            color: "rgb(169, 172, 201)", fontSize: "16px", fontWeight: "550", letterSpacing: 0, padding: "2px"}}>
              SOLUTIONS
            </Dropdown.Toggle>
          
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"> Automated Documents </Dropdown.Item>
              <Dropdown.Item href="#/action-2"> Governance Automation</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
    /*       <ul className="nav_submenu">
                <li className="nav_submenu-item"> 
                <a> Automated Documents  </a></li>
                <li className="nav_submenu-item">
                    <a> Governance Automation </a>
                </li>
            </ul>

            */
        );
    }

}
