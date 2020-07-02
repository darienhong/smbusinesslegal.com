import React, { Component } from 'react';
import './App.css';
import Logo from './assets/logo.png';
import Button from 'react-bootstrap/Button';
import Lottie from 'react-lottie';
import animationData from './assets/animation.json';
import ModalTest from './components/modal.jsx';
import Navbar from './components/nav-bar.jsx';
import AOS from 'aos';
import Footer from './components/footer.jsx';
import Navbar2 from './components/nav-bar2.jsx';

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
           {/*  <ModalTest /> */}
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
                      <Link to="/SignUp"><center> <Button variant="outline-dark" 
                      className="button" style={{fontFamily: 'WorkSans', fontWeight: 550,
                      borderRadius: 0, padding: 10, width: 200}}> JOIN NOW </Button>{' '} </center> </Link>
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
           <Link to="/Formation" style={{textDecoration: "none"}}><p style={{fontWeight: "600"}}>Formation</p> </Link>
             </div>
             <div class="governance">
             <Link to="/Governance" style={{textDecoration: "none"}}><p style={{fontWeight: "600"}}>  Governance </p></Link>
             </div>
             <div class="employment">
             <Link to="/Employment" style={{textDecoration: "none"}}><p style={{fontWeight: "600"}}> Employment</p></Link>
             </div>
             <div class="covid-19">
             <Link to="/Covid_19" style={{textDecoration: "none"}}><p style={{fontWeight: "600"}}> Covid-19  </p></Link>
            </div>
            </div>
  
          <br></br>
          <br></br>
          <br></br>
          <center>
          <div class="governance-automation-block">
            <div>
            <p style={{fontWeight: "500", padding: "10px"}}> GOVERNANCE AUTOMATION  </p>
            <p style={{fontSize: "14px", padding: "10px"}}> Automate and organize all aspects of our company's 
            governance with the click of a button. </p>
            </div>
            </div>
          <br></br>
          <br></br>
            <div class="features-section">
            <div class="features-block">
            <p style={{fontWeight: "550", padding: "15px"}}> INCREASE OPERATIONAL EFFICIENCY  </p>
            <p style={{fontSize: "14px", fontWeight: "400", padding: "10px"}}> Interrelated documents eliminate the need for 
            time consuming search and duplication of efforts. Artificial intelligence and machine learning 
            powered document management removes unnecessary tasks from the hands of owners and employees. 
            Seamless integrations put documents directly and immediately into the necessary hands. </p>
            </div>
            <div class="features-block">
              <br></br>
            <p style={{fontWeight: "550", padding: "15px"}}> AVOID LEGAL PITFALLS  </p>
            <p style={{fontSize: "14px", padding: "10px"}}> Keep track of all contractual and legal obligations in one easy to use platform. 
            Keep up with federal, state and local regulations to remain compliant. Execute documents properly 
            to avoid conflict. </p>
            </div>
            <div class="features-block">
            <p style={{fontWeight: "550", padding: "15px"}}> SAVE MONEY AND DRIVE REVENUE GROWTH  </p>
            <p style={{fontSize: "14px", padding: "10px"}}> Unbeatable price that will save you money now and in the long run. Increased
            efficiency means owners and employees can spend more time driving customer growth. Seamless integration 
            creates a delightful customer experience. </p>
            </div>
            </div>
            </center>
          <br></br>
          <br></br>
          
        <Footer />

     
       </div>
        );
      
      }

}