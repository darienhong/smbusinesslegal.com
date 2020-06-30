import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import TextField from '@material-ui/core/TextField';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";

export default class CompanyID extends Component { 

    render(){
        return (
            <div class="company-id-page">
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{color: "#245CA6"}}> Initialize Your Company </h1>
              <br></br>
            <div style={{textAlign:"center"}}>
                <svg height={50} width={500}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
                </div>
            <p style={{textAlign: "center"}}> Welcome! </p>
            <br></br>
            <div class="login-form">
                    <div class="email-input" style={{textAlign: "center"}}>
              <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: "500px"}} /> 
                </div> 
                <br></br>
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
                </div>
                <br></br>
                <br></br>
                <br></br>

                <Footer />

            </div>
        );
    }
}