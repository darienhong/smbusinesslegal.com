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
    value: 'Premium',
    label: 'Premium',
  },
  {
    value: 'Formation Documents',
    label: 'Formation Documents',
  },
  {
    value: 'Existing Plan',
    label: 'Existing Plan',
  }
]

const booleans = [
  {
    value: 'Yes',
    label: 'Yes',
  },
  {
    value: 'No',
    label: 'No',
  }
]

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


export default function CreateAccount() {

  const classes = useStyles();
  const [company, setCompany] = React.useState();
  const [USstate, setState] = React.useState();
  const [plan, setPlan] = React.useState();

  const [state, setStates] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    zipcode: "",
    companyName: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setStates(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleChangePlan = (event) => {
    setPlan(event.target.value);
  }

  const handleClick = (event) => {
    event.preventDefault();
    console.log('went in to the button press!');

    const data = {
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
      plan: plan,
      companyName: state.companyName,
      zipCode: state.zipcode,
      company: company,
      USstate: USstate
    }
    fetch('/createAccount', {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { 'Content-Type': 'application/json' }
    })

      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

    document.location = "/Dashboard"


  }


  const handleChangeCompany = (event) => {
    setCompany(event.target.value);
  };

  const handleChangeState = (event) => {
    setState(event.target.value);
  };


  return (
    <div class="full-page">
      <div class="create-acc-page">
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{ color: "#245CA6" }}> Create an Account </h1>
        <br></br>
        <div style={{ textAlign: "center" }}>
          <svg height={50} width={400}>
            <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1} />
          </svg>
        </div>

        <div class="create-acc-form">

          <p style={{ textAlign: "center" }}> Welcome to SMB Legal! Thanks for coming and we're glad to have you along for the journey. </p>
          <br></br>
          {/* <div class="email-input" style={{ textAlign: "center" }}>
            <TextField value={state.email} name="email" onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" style={{ width: "500px" }} />

          </div>
          <br></br> */}
          {/* <div class="first-name-input" style={{ textAlign: "center" }}>
            <TextField value={state.firstName} name="firstName" onChange={handleChange} id="outlined-basic" label="First Name" variant="outlined" style={{ width: "500px" }} />
          </div>
          <br></br> */}
          <div class="email-input" style={{ textAlign: "center" }}>
            {/* <TextField value={state.lastName} name="lastName" onChange={handleChange} id="outlined-basic" label="Last Name" variant="outlined" style={{ width: "500px" }} /> */}

            <TextField value={state.email} name="email" onChange={handleChange} required id="outlined-required" label="Email" variant="outlined" style={{ width: "500px" }} />
          </div>
          <br></br>
          <div class="first-name-input" style={{ textAlign: "center" }}>
            <TextField value={state.firstName} name="firstName" onChange={handleChange} required id="outlined-required" label="First Name" variant="outlined" style={{ width: "500px" }} />
          </div>
          <br></br>
          <div class="last-name-input" style={{ textAlign: "center" }}>
            <TextField value={state.lastName} name="lastName" onChange={handleChange} required id="outlined-required" label="Last Name" variant="outlined" style={{ width: "500px" }} />
          </div>
          <br></br>
          <div class="password-input" style={{ textAlign: "center" }}>
            <TextField
              // id="outlined-password-input"
              value={state.password}
              name="password"
              onChange={handleChange}
              required id="outlined-required"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              color="#245CA6"
              style={{ width: "500px" }}
            />
          </div>
          <br></br>

          <div class="select-plan" style={{ textAlign: "center" }}>
            <TextField
              required id="outlined-required"
              select label="Select your plan"
              value={plan}
              onChange={handleChangePlan}
              variant="outlined"
              style={{ width: "500px" }}
            >

              {plans.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}

            </TextField>
          </div>
          <br />


          {plan === 'Existing Plan' && (

            <form>
              <div class="companyid-input" style={{ textAlign: "center" }}>
                <TextField required id="outlined-required" label="Company ID" variant="outlined" style={{ width: "500px" }} />
              </div>
              <br />
              <br />
              <center>
                <Link to="/Dashboard">
                  <div class="create-acc-button" >
                    <p style={{ textAlign: "center" }}> Create your Account </p>
                  </div> </Link>
              </center>
            </form>
          )}

          {(plan === 'Freemium' || plan === 'Premium' || plan === 'Formation Documents') && (

            <form>
              <div class="login-form" style={{ textAlign: "center" }}>

                <div class="company-name" style={{ textAlign: "center" }}>
                  <TextField
                    required id="outlined-required"
                    value={state.companyName}
                    name="companyName"
                    onChange={handleChange}
                    label="Company Name"
                    variant="outlined"
                    style={{ width: "500px" }} />
                </div>
                <br></br>
                <div class="state-choice">
                  <TextField
                    required id="outlined-required"
                    select label="What state is your business formed in?"
                    value={USstate}
                    onChange={handleChangeState}
                    variant="outlined"
                    style={{ width: "500px" }}
                  >

                    {states.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <br></br>


                <div class="zipcode-input" style={{ textAlign: "center" }}>
                  <TextField
                    required id="outlined-required"
                    value={state.zipcode}
                    name="zipcode"
                    onChange={handleChange}
                    label="Zipcode"
                    variant="outlined"
                    style={{ width: "500px" }} />
                </div>
                <br />
                <div class="company-choice">
                  <TextField
                    required id="outlined-required"
                    select label="You are a"
                    value={company}
                    onChange={handleChangeCompany}
                    variant="outlined"
                    style={{ width: "500px" }}
                  >
                    {/* {companies.map((option) => ( */}
                    <MenuItem key="Corporation" value="Corporation">
                      Corporation
                      </MenuItem>
                    <MenuItem key="Partnership" value="Partnership">
                      Partnership
                      </MenuItem>
                    <MenuItem key="LLC" value="LLC">
                      LLC
                      </MenuItem>



                  </TextField>
                </div>
                <br></br>
                <br />


                {company === 'Partnership' && (
                  <div>
                    <center>
                      <Link to="/InitializePartnership" style={{ textDecoration: "none" }}> <div class="gov-button" >
                        <p style={{ textAlign: "center" }}> Automate Your Governance </p>
                      </div> </Link>
                    </center>
                    <br />
                    <br />
                    <center>
                      <Link to="/Dashboard">
                        <div class="create-acc-button" >
                          <p style={{ textAlign: "center" }}> Create your Account </p>
                        </div> </Link>
                    </center>
                  </div>

                )}




                {company === 'Corporation' && (
                  <div>
                    <center>
                      <Link to="/InitializeCorporation" style={{ textDecoration: "none" }}> <div class="gov-button" >
                        <p style={{ textAlign: "center" }}> Automate Your Governance </p>
                      </div> </Link>
                    </center>
                    <br />
                    {/* <Link to="/CompanyID" style={{ textDecoration: "none" }}> <div class="create-acc-button" onClick={handleClick}>
                      <p style={{ textAlign: "center" }} > Create my Account </p>
                    </div>
                    </Link> */}
                    <br />
                    <center>
                      {/* <Link to="/Dashboard"> */}
                      <div class="create-acc-button" onClick={handleClick}>
                        <p style={{ textAlign: "center" }} > Create your Account </p>
                      </div>
                      {/* </Link> */}
                    </center>
                  </div>

                )}

                {company === 'LLC' && (
                  <div>
                    <center>
                      <Link to="/InitializeLLC" style={{ textDecoration: "none" }}> <div class="gov-button" >
                        <p style={{ textAlign: "center" }}> Automate Your Governance </p>
                      </div> </Link>
                    </center>
                    <br />
                    <br />
                    <center>
                      <Link to="/Dashboard">
                        <div class="create-acc-button" >
                          <p style={{ textAlign: "center" }}> Create your Account </p>
                        </div> </Link>
                    </center>
                  </div>

                )}



              </div>

            </form>

          )}




          <br />
          <br />
          <br />

        </div>
      </div >


      <Footer />


    </div >

  );
}
