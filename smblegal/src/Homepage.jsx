import React, { Component } from 'react';
import './App.css';
import { TextField } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import Lottie from 'react-lottie';
import animationData from './assets/animation.json';
import ModalTest from './components/modal.jsx';


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
           <p style={{ textAlign: "center", fontWeight: 500}}> You have come to the right place to bring your 
           small business into the digital world and avoid legal headaches. </p>
           <br></br>
           
         <div class='signup'>  
         
     {/*   <TextField style={{ left: 350, width: 330}}
                 id="outlined-primary"
                 label="Email"
                 variant="outlined"
                 color="black"
                 />
        */}
        
             <a href="https://forms.gle/iNUd4My5DKTGHuAz8" target="_blank"> <center> <Button variant="outline-dark" style={{fontFamily: 'WorkSans', fontWeight: 550,
              borderRadius: 0, padding: 10, width: 200}}> JOIN NOW </Button>{' '} </center> </a>
          
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

