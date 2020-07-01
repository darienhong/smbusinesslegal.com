import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";

export default class CreateAccount extends Component { 
    render() {
        return(

            <div class="create-acc-page">
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{color: "#245CA6"}}> Create an Account </h1>
          <br></br>
        <div style={{textAlign:"center"}}>
            <svg height={50} width={400}>
                <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
            </svg>
        </div> 

        <div class="create-acc-form">

            <p style={{textAlign: "center"}}> Welcome to SMB Legal! Thanks for coming and we're glad to have you along for the journey. </p>
            <br></br>
           <div class="email-input" style={{textAlign: "center"}}>
          <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: "500px"}} /> 
            </div> 
            <br></br>
            <div class="first-name-input" style={{textAlign: "center"}}>
          <TextField id="outlined-basic" label="First Name" variant="outlined" style={{width: "500px"}} /> 
            </div> 
            <br></br>
            <div class="last-name-input" style={{textAlign: "center"}}>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{width: "500px"}} /> 
            </div> 
            <br></br>
            <div class="password-input" style={{textAlign: "center"}}>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                color="#245CA6"
                style={{width: "500px"}}
                />
            </div>
            <br></br>
                <div class="companyid-input" style={{textAlign: "center"}}>
          <TextField id="outlined-basic" label="Company ID" variant="outlined" style={{width: "500px"}} /> 
            </div> 
            </div>
            <br></br>
            <br></br>
            <p style={{textAlign: "center"}}> <Link to="/CompanyID" style={{color: "#245CA6"}}> Create your Company ID </Link></p>
            <br></br>
            <br></br>

            <center>
            <div class="create-acc-button" >
          <p style={{textAlign: "center"}}> Create my Account </p>
          </div>
          </center>
            <br></br>
            <br></br>

          <Footer />

        </div>

        );
    }
}