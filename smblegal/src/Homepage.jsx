import React, { Component } from 'react';
import './App.css';
import Logo from './assets/logo.png';
import Button from 'react-bootstrap/Button';
import Lottie from 'react-lottie';
import animationData from './assets/animation.json';
import ModalTest from './components/modal.jsx';
import Navbar from './components/nav-bar.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";
import ReactGA from 'react-ga';


ReactGA.initialize("UA-170842746-1");
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
          <Navbar />
              <ModalTest />
              <Lottie 
	              options={defaultOptions}
                height={800}
                width={800}
              />  
              <div class="homepage-text">
                  <div data-aos="slide-up"  data-aos-easing="ease-in-out"  data-aos-duration="2000">
                {/* <div class="logo-section" style={{textAlign: "center"}}>
               <img src={Logo} alt="website logo" class="logo" />
              </div>

        */}
                <h1 class="title"> SMB Legal </h1>
                  <h2 style={{ textAlign: "center"}}> Small Business Lifecycle Management </h2>
                  <br></br>

      
                  <p style={{ textAlign: "center", fontWeight: 500}}> Join the thousands of small business owners using SMB to grow their business and avoid legal pitfalls. </p>
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

          
          <p style={{textAlign: "center", textTransform: "uppercase"}}> Documents </p>
          <br></br>
          
         
         <div class="features">
           <div class="formation">
           <Link to="/Formation" style={{textDecoration: "none", color: "black"}}><p style={{fontWeight: "600"}}>Formation</p> </Link>
             </div>
             <div class="governance">
             <Link to="/Governance" style={{textDecoration: "none", color: "black"}}><p style={{fontWeight: "600"}}>  Governance </p></Link>
             </div>
             <div class="employment">
             <Link to="/Employment" style={{textDecoration: "none", color: "black"}}><p style={{fontWeight: "600"}}> Employment</p></Link>
             </div>
             <div class="covid-19">
             <Link to="/Covid_19" style={{textDecoration: "none", color: "black"}}><p style={{fontWeight: "600"}}> Covid-19  </p></Link>
            </div>
            </div>
  
          <br></br>
          <br></br>
          <br></br>
          <center>
          <div class="governance-automation-block">
            <div>
            <p style={{fontWeight: "550", padding: "10px"}}> Governance Automation  </p>
            <p style={{fontSize: "14px"}}> Some information on governance automation </p>
            </div>
            </div>
          <br></br>
          <br></br>
            <div class="features-section">
            <div class="features-block">
            <p style={{fontWeight: "550", padding: "10px"}}> Increase Operational Efficiency  </p>
            <p style={{fontSize: "14px", fontWeight: "400"}}> Some information on operational efficiency </p>
            </div>
            <div class="features-block">
            <p style={{fontWeight: "550", padding: "10px"}}> Avoid Legal Pitfalls  </p>
            <p style={{fontSize: "14px"}}> Some information on legal pitfalls </p>
            </div>
            <div class="features-block">
            <p style={{fontWeight: "550", padding: "10px"}}> Save Money  </p>
            <p style={{fontSize: "14px"}}> Some information on money saving </p>
            </div>
            </div>
            </center>
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