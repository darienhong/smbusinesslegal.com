import React, { Component } from 'react';
import '../App.css';
import { Button, TextField } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from '../assets/animation.json';
import FileImage from '../assets/organize-files.png';
import CustomerServiceImage from '../assets/customer-service.png';
import AnalyzeImage from '../assets/analyze.png';
import Navbar from '../components/nav-bar.jsx';
import Footer from '../components/footer.jsx';
import Navbar2Premium from '../components/nav-bar2premium.jsx';
import ContentMarketing from '../CorporateGovernance.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";
import Navbar2 from '../components/nav-bar2.jsx';



export default class AboutUsPremium extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
    
        return (
        <div class="full-page">
              <Navbar2Premium />
          <div class="about-page">
          
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 style={{color: "#245CA6"}}> About Us </h1>
              <br></br>

            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
        
            <div class="about-description"> 
                <h2> WELCOME </h2>
                <br />
                <div class="mission-statement">
                        <p> At SMB Legal our  <span style={{fontWeight: "bold"}}> mission </span> is to simplify the legal process for small business owners by providing 
                            access to contract management and legal tools that today 
                            are only available to sophisticated, large law firms and corporations.
                        </p>
                    </div>
                    <br />
                <p> We provide the first and only self-help tools that leverage the power of the cloud, artificial intelligence and machine learning 
                    to streamline small business contracts and legal processes.  By using SMB Legal’s tools small business owners and employees can spend more 
                    time on customer acquisition and activation driving substantial growth and revenue.</p>
                <p> SMB Legal’s automated tools ensure that small businesses will increase operational efficiency and avoid legal pitfalls.</p>
                <br></br>
                    <br></br>
            
                    <div class="illustrations" style={{textAlign:"center"}}> 
                        <img src={FileImage} alt="files" style={{width: "300px"}}/>
                        <img src={AnalyzeImage} alt="analyze" style={{width: "300px"}}/>
                        <img src={CustomerServiceImage} alt="cs" style={{width: "300px"}}/>
                    </div>
                <br></br>
                <br></br>

                <p> Most contract management and legal tools have been designed to meet the needs of the deep pockets of large law firms 
                    and corporations and not to solve the unique problems of small businesses.  Amidst a global 
                    pandemic, our Founder, recognized that as our world is quickly becoming more complex, 
                    running a small business will become increasingly challenging.  Trying to navigate increased risk, 
                    employee safety concerns, payroll challenges and more complex contracts is burdensome.  
                    That is why we founded SMB Legal, a small business partner you can trust.</p>

                    <p> Our team is made up of seasoned legal professionals, startup gurus and small business experts 
                        who are all united in the goal of making small business entrepreneurship easier.  
                        <Link to="/ProductOverview" style={{textDecoration: "none", color: "#245CA6"}}> Learn more about our product and 
                        how we can help you get your contract and legal house in order. </Link> </p>


                    <p> We know that running a business is hard.  Legalese and inefficient document workflows can make it 
                        infinitely harder. Let us help your business with self-help tools that do a lot of the heavy lifting. </p>

                    <p> Thanks for coming and we’re glad to have you along for the journey. </p>

                    <h3 style={{fontFamily: "WorkSans", fontSize: "16px", fontWeight: "600"}}> The SMB Legal Team </h3>
                <div class="about-us-features"> 
                <br></br>
                <br/>
                <br />
                <br />
                <div class="content-marketing-section">
               <Link to="/CorporateGovernanceLogin" style={{textDecoration: "none"}}>    <div class="cm-1">
                        <br />
                        <br />
                        <br />
                        <br />
                     <h4>  Corporate Governance </h4>
                     <h4>  </h4>
                    </div>
                    </Link>
                    <Link to="/StartABusinessLogin" style={{textDecoration: "none"}}>    <div class="cm-1">
                        <br />
                        <br />
                        <br />
                        <br />
                     <h4>  How to Start a Business </h4>
                     <h4>  </h4>
                    </div>
                    </Link>
              


                </div>











 
           {/*    <ContentMarketing />  */}
                <br></br>
                </div>
            </div>
            </div>
            
            <Footer />




          </div>

    
        );
      }

}