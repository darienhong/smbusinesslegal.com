import React, { Component } from 'react';
import './App.css';
import { Button, TextField, Icon } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from './assets/animation.json';
import FileImage from './assets/organize-files.png';
import CustomerServiceImage from './assets/customer-service.png';
import AnalyzeImage from './assets/analyze.png';



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
                <h2> Welcome to SMB Legal!</h2>
                <p> Running a business is hard. The path towards long-term success is littered with mundane clerical and legal complexities that detract 
                from what truly matters - 
                growing your passion project into a fully-fledged enterprise. As a consequence, we’ve made it our mission to 
                empower small businesses with the horsepower of an in-house legal department, digitizing and automating the legal, 
                clerical and mundane back office tasks that businesses like yours spend significant amounts of time and money on.</p>
                <p> By leveraging the Cloud, artificial intelligence and machine learning, the SMB Legal Platform allows businesses to: </p>
                <br></br>
                <br></br>
                    <div class="illustrations" style={{textAlign:"center"}}> 
                        <img src={FileImage} alt="files" style={{width: "300px"}}/>
                        <img src={AnalyzeImage} alt="analyze" style={{width: "300px"}}/>
                        <img src={CustomerServiceImage} alt="cs" style={{width: "300px"}}/>
                    </div>
                <br></br>
                <br></br>
            </div>




          </div>

    
        );
      }

}