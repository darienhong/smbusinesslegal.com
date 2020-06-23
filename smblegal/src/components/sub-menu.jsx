import React, { Component } from 'react';
import '../App.css';

export default class SubMenu extends Component { 
    render() {
        return (
            <ul className="nav_submenu">
                <li className="nav_submenu-item"> 
                <a> Automated Documents  </a></li>
                <li className="nav_submenu-item">
                    <a> Governance Automation </a>
                </li>
            </ul>
        );
    }

}
