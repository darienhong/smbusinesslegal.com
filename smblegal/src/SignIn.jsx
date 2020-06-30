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

export default class SignIn extends Component { 

    render(){
        return (
            <div class="login-page">
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{color: "#245CA6"}}> Login </h1>
              <br></br>
            <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
                </div>
            <p style={{textAlign: "center"}}> Welcome back! </p>
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
                <p style={{textAlign: "center"}}> Don't have an account? <Link to="/CreateAccount" style={{color: "#245CA6"}}> Create Account </Link></p>

                <br></br>
                <br></br>

                <Footer />

            </div>
        );
    }
}