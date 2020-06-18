import React, { Component } from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from './assets/animation.json';


export default class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
    
        return (
          <div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 style={{color: "rgb(57, 60, 126)"}}> About Us </h1>
              <svg height={50} width={700}>
        <line class="svg-line-1" x1={400} x2={3000} y1={1} y2={1} stroke="black" style={{left: 5000}}/>
        </svg>
          </div>

    
        );
      }

}