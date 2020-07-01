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

  const companies = [
    {
      value: 'Corporation',
      label: 'Corporation',
    },
    {
      value: 'LLC',
      label: 'LLC',
    },
    {
      value: 'Parternship',
      label: 'Partnership',
    },
  ];

  const states = [
      {
          value: 'Alabama',
          label: 'AL'
      }, 
      {
          value: 'Alaska',
          label: 'AK',
      }, 
      {
          value: 'Arizona',
          label: 'AZ',
      },
      {
          value: 'Arkansas',
          label: 'AR',
      },
      {
          value: 'California',
          label: 'CA',
      },
      {
          value: 'Colorado',
          label: 'CO',
      },
      {
          value: 'Connecticut',
          label: 'CT',
      },
      {
          value: 'Delaware',
          label: 'DE',
      },
      {
          value: 'Florida',
          label: 'FL',
      }, 
      {
        value: 'Georgia',
        label: 'GA',
      },
      {
        value: 'Hawaii',
        label: 'HI',
      },
      {
        value: 'Idaho',
        label: 'ID',
      },
      {
        value: 'Illinois',
        label: 'IL',
      },
      {
        value: 'Indiana',
        label: 'IN',
      },
      {
        value: 'Iowa',
        label: 'IA',
      },
      {
        value: 'Kansas',
        label: 'KS',
      },
      {
        value: 'Kentucky',
        label: 'KY',
      },
      {
        value: 'Louisiana',
        label: 'LA',
      },
      {
        value: 'Maine',
        label: 'ME',
      },
      {
        value: 'Maryland',
        label: 'MD',
      },
      {
        value: 'Massachusetts',
        label: 'MA',
      },
      {
        value: 'Michigan',
        label: 'MI',
      },
      {
        value: 'Minnesota',
        label: 'MN',
      },
      {
        value: 'Mississippi',
        label: 'MS',
      },
      {
        value: 'Missouri',
        label: 'MO',
      },
      {
        value: 'Montana',
        label: 'MT',
      },
      {
        value: 'Nebraska',
        label: 'NE',
      },
      {
        value: 'Nevada',
        label: 'NV',
      },
      {
        value: 'New Hampshire',
        label: 'NH',
      },
      {
        value: 'New Jersey',
        label: 'NJ',
      },
      {
        value: 'New Mexico',
        label: 'NM',
      },
      {
        value: 'New York',
        label: 'NY',
      },
      {
        value: 'North Carolina',
        label: 'NC',
      },
      {
        value: 'North Dakota',
        label: 'ND',
      },
      {
        value: 'Ohio',
        label: 'OH',
      },
      {
        value: 'Oklahoma',
        label: 'OK',
      },
      {
        value: 'Oregon',
        label: 'OR',
      },
      {
        value: 'Pennsylvania',
        label: 'PA',
      },
      {
        value: 'Rhode Island',
        label: 'RI',
      },
      {
        value: 'South Carolina',
        label: 'SC',
      },
      {
        value: 'South Dakota',
        label: 'SD',
      },
      {
        value: 'Tennessee',
        label: 'TN',
      },
      {
        value: 'Texas',
        label: 'TX',
      },
      {
        value: 'Utah',
        label: 'UT',
      },
      {
        value: 'Vermont',
        label: 'VT',
      },
      {
        value: 'Virginia',
        label: 'VA',
      },
      {
        value: 'Washington',
        label: 'WA',
      },
      {
        value: 'West Virginia',
        label: 'WV',
      },
      {
        value: 'Wisconsin',
        label: 'WI',
      },
      {
        value: 'Wyoming',
        label: 'WY',
      },    
  ]

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

 

export default function CompanyID() { 
    const classes = useStyles();
    const [company, setCompany] = React.useState('Corporation');
    const [state, setState] = React.useState('AL');


    const handleChangeCompany = (event) => {
            setCompany(event.target.value);
          };

    const handleChangeState = (event) => {
            setState(event.target.value);
          };

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
            <form className={classes.root} noValidate autoComplete="off">
            <div class="login-form" style={{textAlign: "center"}}>
                <div class="company-choice">
                        <TextField
                            id="outlined-select-company"
                            select label="You are a"
                            value={company}
                            onChange={handleChangeCompany}
                            helperText=" "
                            variant="outlined"
                            style={{width: "500px"}}
                         >
                        {companies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                            ))}
                        </TextField>
                </div>
                <br></br>
             <div class="state-choice">
                         <TextField
                            id="outlined-select-state"
                            select label="What state is your business formed in?"
                            value={state}
                            onChange={handleChangeState}
                            helperText=" "
                            variant="outlined"
                            style={{width: "500px"}}
                            >

                         {states.map((option) => (
                         <MenuItem key={option.value} value={option.value}>
                             {option.label}
                         </MenuItem>
                                 ))}
                         </TextField>
             </div>
             <br></br>

             <div class="partnership-questions">
                    <div class="quorum" style={{textAlign: "center"}}>
                    <TextField
                        id="outlined-number"
                        label="What is quorum in your business?"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                            }}
                        variant="outlined"
                        style={{width: "500px"}}
                    />
                    </div>
                    <br></br>
                    <div class="quorum-vote" style={{textAlign: "center"}}>
                    <TextField
                        id="outlined-number"
                        label="What vote of a quorum is sufficient to pass something?"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                            }}
                        variant="outlined"
                        style={{width: "500px"}}
                    />
                    </div>
                    <br></br>
                    <div class="num-partners" style={{textAlign: "center"}}>
                    <TextField
                        id="outlined-number"
                        label="How many partners does your business have?"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                            }}
                        variant="outlined"
                        style={{width: "500px"}}
                    />
                    </div>
                    <br></br>
                














             </div>
             
                <br></br>
                <br></br>





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
                </form>
                <br></br>
                <br></br>
                <br></br>

                <Footer />

            </div>
        );
    }
