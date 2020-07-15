import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/nav-bar.jsx';
import Footer from '../components/footer.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";
import Navbar2 from '../components/nav-bar2.jsx';
import Navbar2Premium from '../components/nav-bar2premium.jsx';


export default class ToolsPremium extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div class="full-page">
            <div class="tools-page">
                <Navbar2Premium />
                <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 style={{color: "#245CA6"}}> Tools </h1>
              <br></br>

            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>

            <p style={{textAlign: "center"}}> At SMB Legal, we offer automated documents and governance automation. </p>
            <br></br>

            <div class="tools-section">
              <Link to="/AutomatedDocsLogin" style={{textDecoration: "none"}}>
                   <div class="tools-block">
                    <p style={{fontWeight: "600", textAlign: "center"}}> AUTOMATED DOCUMENTS </p>
                    <p style={{textAlign: "center"}}> We have a wide selection of automated 
                        documents to choose from under Formation, 
                        Governance, Employment and Covid-19. The documents have been
                        prepared for you already, and all you need to do is fill out some
                        information and a pdf will be generated for you. 
                    </p>
                </div>
                </Link>
                <Link to="/GovernanceDashboard" style={{textDecoration: "none"}}>
                <div class="tools-block">
                    <p style={{fontWeight: "600", textAlign: "center"}}> GOVERNANCE AUTOMATION </p>
                    <p style={{textAlign: "center"}}> We ensure that business users have a methogolody to understand value and risk, so they can
                    take advantage of the right tools for the right problems. Automate and organize all aspects of 
                    your company’s governance with the click of a button. Login to view your governance
                    dashboard. 
                    </p>
                </div>
                </Link>
            </div>
            <br></br>
            <br></br>
            </div> 
            <Footer />

            </div>
        );
    }
}