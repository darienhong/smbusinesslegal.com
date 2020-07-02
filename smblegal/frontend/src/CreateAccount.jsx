import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";
import { ExpansionPanelActions } from '@material-ui/core';



const plans = [
    {
        value: 'Freemium',
        label: 'Freemium',
    }, 
    {
        value: 'Automated Governance',
        label: 'Automated Governance',
    }, 
    {
        value: 'Subscription',
        label: 'Subscription',
    }, 
    {
        value: 'Formation',
        label: 'Formation',
    },
    {
        value: 'Existing Plan',
        label: 'Existing Plan',
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function CreateAccount() { 

    const classes = useStyles(); 
    const [plan, setPlan] = React.useState(); 

      const handleChangePlan = (event) => {
            setPlan(event.target.value);
    }
    

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

            <div class="select-plan" style={{textAlign: "center"}}>
            <TextField
                id="outlined-select-plan"
                select label="Select your plan"
                value={plan}
                onChange={handleChangePlan}
                variant="outlined"
                style={{width: "500px"}}   
                >

                {plans.map((option) => (
                         <MenuItem key={option.value} value={option.value}>
                             {option.label}
                         </MenuItem>
                                 ))}

       {/*}     <MenuItem key="Freemium" value="Freemium">
              Freemium
            </MenuItem>
            <MenuItem key="Automated Governance" value="Automated Governance">
              Automated Governance
            </MenuItem>
            <MenuItem key="Subscription" value="Subscription">
              Subscription
            </MenuItem>
            <MenuItem key="Formation" value="Formation">
              Formation
            </MenuItem>
            <MenuItem key="Existing Plan" value="Existing Plan">
              Existing Plan
            </MenuItem>

                */}

        </TextField>
        </div>
        <br />
    

        { plan === 'Existing Plan' && ( 

            <form> 
                        <div class="companyid-input" style={{textAlign: "center"}}>
          <TextField id="outlined-basic" label="Company ID" variant="outlined" style={{width: "500px"}} /> 
            </div> 
            <br />
            <br />
            <center>
            <div class="create-acc-button" >
          <p style={{textAlign: "center"}}> Create my Account </p>
          </div>
          </center>
            </form>
        )}

        { (plan === 'Freemium' || plan === 'Subscription' || plan === 'Automated Governance' || plan === 'Formation') && ( 
            
            <center>
                <br />
            <br />
           <Link to="/CompanyID" style={{textDecoration: "none"}}> <div class="create-acc-button" >
          <p style={{textAlign: "center"}}> Create my Account </p>
          </div>
          </Link>
          <br />
          </center>
        
        )}


          <Footer />

        </div>
        </div>

        );
    }
