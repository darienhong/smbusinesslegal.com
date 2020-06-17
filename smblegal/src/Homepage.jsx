import React, { Component } from 'react';
import './App.css';
import { TextField } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import Lottie from 'react-lottie';
import animationData from './assets/animation.json';

import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalTest from './modal.jsx';


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
            <ModalTest />
        <Lottie 
	          options={defaultOptions}
            height={800}
            width={800}
          />   
           <h1 style={{ fontWeight: 800, fontSize: 80}}> SMB Legal </h1>
           <h2 style={{ textAlign: "center"}}> Small Business Lifecycle Management </h2>
           <br></br>
           <p style={{ textAlign: "center"}}> You have come to the right place to bring your 
           small business into the digital world and avoid legal headaches </p>
           <br></br>
           
         <div class='signup'>  
         
     {/*   <TextField style={{ left: 350, width: 330}}
                 id="outlined-primary"
                 label="Email"
                 variant="outlined"
                 color="black"
                 />
        */}
        
             <center> <Button variant="outline-dark" style={{fontFamily: 'WorkSans', fontWeight: 500, borderRadius: 0}}> JOIN NOW </Button>{' '} </center>
          
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

