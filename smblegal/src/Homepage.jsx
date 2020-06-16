import React, { Component } from 'react';
import './App.css';
import { Button, TextField } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from './assets/animation.json';


export default class Homepage extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

        return (
          <div class="homepage">
        <Lottie 
	          options={defaultOptions}
            height={800}
            width={800}
          />   
           <h1 style={{ fontWeight: 800, fontSize: 80}}> SMB Legal </h1>
           <h2 style={{ textAlign: "center"}}> Small Business Lifecycle Management </h2>
           <br></br>
           <p style={{ textAlign: "center"}}> Sign up for the beta here!</p>
           <br></br>
          <div class='signup'>  <TextField style={{ left: 350, width: 330}}
                 id="outlined-primary"
                 label="Email"
                 variant="outlined"
                 color="black"
                 /> 
           <Button style={{ left: 400, marginTop: 10}}> Sign Up </Button>
           </div>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
          </div>

    
        );
      }

}