import React, { Component } from 'react';
import './App.css';
import { TextField } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import Lottie from 'react-lottie';
import animationData from './assets/animation.json';
import ModalTest from './components/modal.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  once: false, // whether animation should happen only once - while scrolling down
  
});


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
          <div class="homepage-text">
          <div data-aos="slide-up"  data-aos-easing="ease-in-out"  data-aos-duration="2000">
           <h1 class="title"> SMB Legal </h1>
           <h2 style={{ textAlign: "center"}}> Small Business Lifecycle Management </h2>
           <br></br>
           <p style={{ textAlign: "center", fontWeight: 500}}> You have come to the right place to bring your 
           small business into the digital world and avoid legal headaches. </p>
           <br></br>
           </div>
         <div class='signup'>  
         
     {/*   <TextField style={{ left: 350, width: 330}}
                 id="outlined-primary"
                 label="Email"
                 variant="outlined"
                 color="black"
                 />
        */}
        
        <svg height={50} width={700}>
        <line class="svg-line" x1={400} x2={3000} y1={1} y2={1} stroke="black" style={{left: 5000}}/>
        </svg>
        
        <div data-aos="slide-up" data-aos-easing="ease-in-out" data-aos-duration="2000">
             <a href="https://forms.gle/iNUd4My5DKTGHuAz8" target="_blank"> <center> <Button variant="outline-dark" style={{fontFamily: 'WorkSans', fontWeight: 550,
              borderRadius: 0, padding: 10, width: 200}}> JOIN NOW </Button>{' '} </center> </a>
            </div>
            </div>
           </div>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
            <footer class="footer">
           <p> COPYRIGHT &copy; 2020 SMBUSINESSLEGAL.COM - ALL RIGHTS RESERVED </p>
       </footer>
  
       </div>

        );
      
      }

}

