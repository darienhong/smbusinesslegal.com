import React, { Component } from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from './assets/animation.json';
import FileImage from './assets/organize-files.png';
import CustomerServiceImage from './assets/customer-service.png';
import AnalyzeImage from './assets/analyze.png';
import { Icon } from 'semantic-ui-react';



export default class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
    
        return (
          <div class="about-page">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 style={{color: "rgb(57, 60, 126)"}}> About Us </h1>
              <br></br>

            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
        
            <div class="about-description"> 
                <h2> WELCOME </h2>
                <p> We are the first and only self-help tool for small businesses to empower themselves with artificial intelligence 
                    and machine learning to increase operational efficiency and avoid potential legal pitfalls.</p>
                <p> In the rush to provide legal tech solutions to corporate law firms and deep pocketed corporations in-house legal departments, 
                    small businesses have been left behind. Conceived of amidst the chaos of a pandemic, 
                    we came to the realization that, in an ever more complex world, running a business was never going to get any simpler. </p>
                <br></br>

                    <div class="mission-statement">
                        <p> Our <span style={{ fontWeight: "bold"}}> mission </span> is to democratize the law by powering up small businesses with 
                            some of the same tech tools that the most sophisticated law firms and 
                            corporations use today to run their legal functions and contracts.
                        </p>
                    </div>
                    <br></br>
            
                    <div class="illustrations" style={{textAlign:"center"}}> 
                        <img src={FileImage} alt="files" style={{width: "300px"}}/>
                        <img src={AnalyzeImage} alt="analyze" style={{width: "300px"}}/>
                        <img src={CustomerServiceImage} alt="cs" style={{width: "300px"}}/>
                    </div>
                <br></br>
                <br></br>

                <p> Our platform provides a seamless cloud based ecosystem for all of a small businesses legal documents and 
                        contracts.  All stakeholders - owners, employees, lawyers, customers, 
                        suppliers - can tap into our resources, making all aspects of business easier.  
                        Business owners can leverage our artificial intelligence 
                        and machine learning tools to systematize their contracts and workflows, 
                        increasing business efficiency and avoiding conflicting contractual obligations.</p>

                    <p> Additionally, our business governance automation, licensing and permitting suite, ownership task 
                        manager and investor CRM provide a comprehensive solution for tracking and 
                        effectively tending to those tasks which are the internal plumbing of the modern business. </p>


                    <p> We know that running a business is hard.  Legalese and inefficient document workflows can make it infinitely harder.  
                        Let us help you help yourself with self-help tools that do a lot of the heavy lifting.</p>

                    <p> Thanks for coming and we’re glad to have you along for the journey. </p>

                    <h3 style={{fontFamily: "WorkSans", fontSize: "16px"}}> The SMB Legal Team </h3>
                <div class="about-us-features"> 
                <br></br>
                <br></br>
                <Icon name="chevron circle right" size="big"/>
                <p>  </p>
                <br></br>
                <br></br>
                </div>
            </div>
            



          </div>

    
        );
      }

}