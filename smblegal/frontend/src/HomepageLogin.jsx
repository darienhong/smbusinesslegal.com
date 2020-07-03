import React, { Component } from 'react';
import './App.css';
import Logo from './assets/logo.png';
import Button from 'react-bootstrap/Button';
import Lottie from 'react-lottie';
import animationData from './assets/animation.json';
import ModalTest from './components/modal.jsx';
import Navbar from './components/nav-bar.jsx';
import Navbar2 from './components/nav-bar2.jsx';
import AOS from 'aos';
import Footer from './components/footer.jsx';

import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";
  import ReactGA from 'react-ga';


export default class HomepageLogin extends Component { 
    render() {

        return (
            <div class="homepage-login"> 
            <Navbar2 />
            <br /> 
            <br /> 
            <br /> 
            <br />
            <br></br>
              <h1 style={{color: "#245CA6"}}> Governance Dashboard </h1>
              <br></br>

            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <br />

            <p style={{textAlign: "center", textTransform: "uppercase"}}> Automated Documents </p>
          <br></br>
          
         
         <div class="features">
           <div class="formation">
           <Link to="/FormationLogin" style={{textDecoration: "none"}}><p style={{fontWeight: "600"}}>Formation</p> </Link>
             </div>
             <div class="governance">
             <Link to="/GovernanceLogin" style={{textDecoration: "none"}}><p style={{fontWeight: "600"}}>  Governance </p></Link>
             </div>
             <div class="employment">
             <Link to="/EmploymentLogin" style={{textDecoration: "none"}}><p style={{fontWeight: "600"}}> Employment</p></Link>
             </div>
             <div class="covid-19">
             <Link to="/Covid_19Login" style={{textDecoration: "none"}}><p style={{fontWeight: "600"}}> Covid-19  </p></Link>
            </div>
            </div>
  
          <br></br>
          <br></br>
          <br />
          <br />
          <br />
          <br />


          <Footer />
            </div> 



        );
    }

}