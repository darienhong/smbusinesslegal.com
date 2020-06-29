import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
                <div class="business-input" style={{textAlign: "center"}}>
          <TextField id="outlined-basic" label="Business Name" variant="outlined" style={{width: "500px"}} /> 
            </div> 
            <br></br>
           <div class="email-input" style={{textAlign: "center"}}>
          <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: "500px"}} /> 
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
            </div>
            <br></br>
            <br></br>

            <center>
            <div class="create-acc-button" >
          <p style={{textAlign: "center"}}> Create my Account </p>
          </div>
          </center>
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