import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";



export default class Tools extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div class="full-page"> 
              <Navbar />
            <div class="tools-page">
                
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
              <Link to="/AutomatedDocs" style={{textDecoration: "none"}}>
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
                <Link to="/SignIn" style={{textDecoration: "none"}}>
                <div class="tools-block">
                    <p style={{fontWeight: "600", textAlign: "center"}}> GOVERNANCE AUTOMATION </p>
                    <p style={{textAlign: "center"}}> We ensure that business users have a methodology to understand value and risk, so they can
                    take advantage of the right tools for the right problems. Automate and organize all aspects of 
                    your company’s governance with the click of a button. Login to view your governance
                    dashboard. 
                    </p>
                </div>
                </Link>
                </div>
                <div class="tools-section">
                <div class="tools-block">
                    <p style={{fontWeight: "600", textAlign: "center"}}> DOCUMENT MANAGEMENT SYSTEM <br/> (Coming August) </p>
                    < br/>
                    <br />
                    <br />
                    <p style={{textAlign: "center"}}> We provide an industry leading legal document and contract management system.  
                    Upload your documents to our platform and allow all stake holders to have easy access.
                    </p>
                </div>
                <div class="tools-block">
                    <p style={{fontWeight: "600", textAlign: "center"}}> CONTRACT TEMPLATE CREATOR <br /> (Coming August) </p>
                    < br/>
                    <p style={{textAlign: "center"}}> We provide companies the opportunity to extinguish document duplication, loss and recreation.  
                    Upload your documents to our platform and create an interactive template.  With the click of a button execute documents 
                    from the template and easily augment them by 
                    adding clauses, deleting clauses or anything in between all at the click of a button. 
                    </p>
                </div>
                <div class="tools-block">
                    <p style={{fontWeight: "600", textAlign: "center"}}> INTERACTIVE, INTEGRATED, AND ITERATIVE DOCUMENTS <br /> (Coming August) </p>
                    <p style={{textAlign: "center"}}> We provide a first of its kind software enabling businesses to quickly amend, terminate or 
                    duplicate their documents.  With the click of 
                    a button any document – either a SMB Legal automated document or one uploaded by the business – can be changed 
                    with the click of a button.  Seamless integrations allow for those documents to be signed immediately, 
                    cutting down on time wasted waiting for documents to be signed.
                    </p>
                </div>
            </div>
            <br></br>
            <br></br>

            </div>
            
            <Footer />

            </div>
        );
    }
}