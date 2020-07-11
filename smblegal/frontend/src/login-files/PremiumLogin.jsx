import React, { Component } from 'react';
import '../App.css';
import Logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';
import Lottie from 'react-lottie';
import animationData from '../assets/animation.json';
import ModalTest from '../components/modal.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import AOS from 'aos';
import Footer from '../components/footer.jsx';

import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";
  import ReactGA from 'react-ga';


export default class PremiumLogin extends Component { 


  state = {
    companyName: "[COMPANY NAME PLACEHOLDER]",
    users: "[USERS PLACEHOLDER]", 
    lastMeeting: "[LAST MEETING PLACEHOLDER]", 
    nextMeeting: "[NEXT MEETING PLACEHOLDER]",
    companyType: "[COMPANY TYPE]",
    USState: "[STATE PLACEHOLDER]",
    users: [],
    email: localStorage.getItem('email'),

  }

  componentDidMount() {

    console.log(this.state.email);
      var that = this;
      Promise.all([
        fetch(`/getCompanyInfo?email=${this.state.email}`, {
          method: 'GET',
        }), 
        fetch(`/getUserList?email=${this.state.email}`, {
          method: 'GET',
        }) ])
  
  
        .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
     //   .then(data1 => console.log(data1[0]))
        .then((data1, data2) => this.setState ({
          company: data1[0][0].company_name, 
          USState: data1[0][0].state, 
          companyName: data1[0][0].company_name, 
          companyType: data1[0][0].company_type,
          users: data1[1],
     //     users: [data1[1][0].first_name, data1[1][0].last_name]
  
  
  
  
          
         // companyName: data1[0][0].company_name, 
       //   companyType: data1[0][0],
       //   USState: data1[0][0].state
       //   USState: data1[0].state, 
        //   users: data1[1]
        }))
  
      //  .then(data2 => console.log(data2))
     /*   .then(([data1, data2]) => 
        this.setState ({
          company: data1,
          companyName: data1[0].company_name,
          companyType: data1[0].company_type,
          USState: data1[0].state,
          users: data2
  
        }))
        */
  
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response))
  
      }
   


    render() {


      const { 
        companyName, 
        users, 
        lastMeeting, 
        nextMeeting, 
        companyType,
        USState
      } = this.state

        return (
          <div class="full-page">
            <div class="homepage-login"> 
            <Navbar2 />
            <br /> 
            <br /> 
            <br /> 
            <br />
            <br></br>
              <h1 style={{color: "#245CA6"}}> Welcome </h1>
              <br></br>

            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <br />
          <br /> 
          <br />
          <center> 
    <div style={{width: "80%", height: "400px", justifyContent: "center"}}> 
          <div class="company-info" style={{width: "400px", float: "left", textAlign: "left"}}> 
              <div class="name"> 
                  {companyName}
              </div>
              <br />
              <div class="type">
                {companyType}
              </div>
              < br/>
              <div class="US State"> 
              {USState}
              </div>
              < br/>
              <div class="users"> 
              Users:
              {users.map(user => <li>  {user.first_name} {user.last_name} </li>)}
              </div>
              < br/>
           {/*    <div class="lastmeeting"> 
                  {lastMeeting}
              </div>
              <br />
              <div class="nextmeeting">
                  {nextMeeting}
              </div>
        */}
          </div>
          <div class="automated-docs" style={{width: "300px", float: "right"}} >
          <div class="features-1">
          <p class="homepage-text" style={{left: "20px"}}> Automated Documents </p>
          <br></br>
           <center>
           <div class="formation1">
           <Link to="/FormationLogin" style={{textDecoration: "none"}}><p style={{fontWeight: "600", textAlign: "center"}}>Formation</p> </Link>
             </div>
             < br/>
           
             <div class="governance1">
             <Link to="/GovernanceLogin" style={{textDecoration: "none"}}><p style={{fontWeight: "600", textAlign: "center"}}>  Governance </p></Link>
             </div>
             <br />
            
             <div class="employment1">
             <Link to="/EmploymentLogin" style={{textDecoration: "none"}}><p style={{fontWeight: "600", textAlign: "center"}}> Employment</p></Link>
             </div>
            < br/> 
          
             <div class="covid-191">
             <Link to="/Covid_19Login" style={{textDecoration: "none"}}><p style={{fontWeight: "600", textAlign: "center"}}> Covid-19  </p></Link>
            </div>
          </center>
            </div>
     </div>

          </div> 
          </center>
          <br />
          < br/>


          <center> <Link to="/GovernanceDashboard"> <button class="dashboard-button"> GOVERNANCE DASHBOARD </button> </Link> </center>

          <br />
          <br />

          <br />
          <br />
          <br />
          <br />

          </div> 
          <Footer />
            </div> 



        );
    }

}