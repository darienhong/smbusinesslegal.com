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
                  <p style={{ textAlign: "center", fontWeight: 500}}> Join the thousands of small business owners 
                  who are using SMB Legal’s self-help tools to automate and power their business to run efficiently 
                  and avoid potential legal pitfalls. </p>
                  <br></br>
              </div>
               <div class='signup'>      
                  <div data-aos="slide-up" data-aos-easing="ease-in-out" data-aos-duration="2000">
                      <a href="https://forms.gle/iNUd4My5DKTGHuAz8" target="_blank"> <center> <Button variant="outline-dark" 
                      className="button" style={{fontFamily: 'WorkSans', fontWeight: 550,
                      borderRadius: 0, padding: 10, width: 200}}> JOIN NOW </Button>{' '} </center> </a>
                  </div>

                <br></br>
                <br></br>
               

               <div style={{textAlign: "center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line" x1={1} x2={700} y1={1} y2={1} stroke="black" />
                </svg>
              </div>
              </div>
           </div>
           <br></br>
           <br></br>
           <br></br>
          
          <p style={{textAlign: "center", textTransform: "uppercase"}}> Services we will offer include </p>
          <br></br>
          
          
            <div class="features">
             <p> <span class="formation"> Formation </span></p>
             <p> <span class="governance">  Governance  </span></p>
             <p> <span class="employment">  Employment  </span></p>
             <p><span class="covid-19">  Covid-19  </span></p>
            </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

            <footer class="footer">
                <p> COPYRIGHT &copy; 2020 SMBUSINESSLEGAL.COM - ALL RIGHTS RESERVED </p>
                <p style={{opacity: 0.4}}> SMB Legal (Eatery Legal Corporation) is NOT a law firm, 
             is not a substitute for an attorney or law firm and cannot provide 
             legal advice.  SMB Legal provides access to self-help services 
             at your specific direction.  We cannot provide any kind of advice, 
             explanation, opinion, or recommendation about possible legal rights, 
             remedies, defenses, options, selection of forms or strategies. 
             Communication between you and SMB Legal is protected by our Privacy Policy 
             and not by attorney-client privilege and it does not constitute 
             the provision of legal advice or other professional advice by SMB Legal.  
             By relying on these documents, you assume all risk and liability that may result.  
             Review all documents carefully for accuracy before using them.  
             Your use of this site is subject to our Terms of Service. </p>
            </footer>
  
       </div>

        );
      
      }

}