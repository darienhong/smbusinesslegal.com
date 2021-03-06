import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ModalTest from './components/modal.jsx';
import { DropzoneDialog, DropzoneArea } from 'material-ui-dropzone';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


/* FOR LLC QUESTIONS */

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

const automation = [
    {
        value: 'AI',
        label: 'AI Automation',
    },
    {
        value: 'Manual',
        label: 'Manually Input',
    }
]

const managers = [
    {
        value: 'Member',
        label: 'Member',
    },
    {
        value: 'Manager',
        label: 'Manager',
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


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))



export default function AutomateGov3() {
    const classes = useStyles();
    const [company, setCompany] = React.useState();
    const [USstate, setState] = React.useState();
    const [boolean, setBoolean] = React.useState();
    const [automate, setAutomation] = React.useState();
    const [membersList, setMembersList] = React.useState([{ name: "", email: "", percentShares: "", percentProfit: "", percentLosses: "", title: "" }]);
    const [manager, setManager] = React.useState();
    const [open, setOpen] = React.useState(false);
    const [files, setFiles] = React.useState([]);
    const [state, setStates] = React.useState({
        managed: "",
        annual: true,
        quorum: 0,
        quorum_vote: 0,
        managers: 0,
        members: 0,
        email: localStorage.getItem('email'),
        plan: localStorage.getItem('plan')
    })


    const handleClose = (event) => {
        setOpen(false);

    }

    const handleStateChange = e => {
        const { name, value } = e.target
        setStates(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleChange(files) {
        setFiles(files);
    }

    const handleOpen = (event) => {
        setOpen(true);
    }


    const handleChangeAutomation = (event) => {
        setAutomation(event.target.value);
    }

    const handleChangeManager = (event) => {
        setManager(event.target.value);
    }

    const handleChangeBoolean = (event) => {
        setBoolean(event.target.value);
    }

    const handleChangeCompany = (event) => {
        setCompany(event.target.value);
    };

    const handleChangeState = (event) => {
        setState(event.target.value);
    };

    const handleMembersChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...membersList]
        list[index][name] = value;
        setMembersList(list)
    }

    const handleAddMembers = () => {
        setMembersList([...membersList, { name: "", email: "", percentShares: "", percentProfit: "", percentLosses: "", title: "" }]);
    }

    /*  const  addMembers = (e) => {
              e.preventDefault();
              membersList.push({
                  name: "",
                  email: "",
                  percentShares: "",
                  percentProfit: ""
              });
              setMembersList({ 
                  membersList: membersList,
              });
  
            /*  setMembersList((prevState) => ({
                membersList: [...prevState.membersList, { name: "", email: "", percentShares: "", percentProfit: "" }],
              }));
              */


    const handleClick = (event) => {
        event.preventDefault();

        const data = {
            manager: manager,
            boolean: boolean,
            quorum: state.quorum,
            quorum_vote: state.quorum_vote,
            managers: state.managers,
            members: state.members,
            membersList: membersList,
            email: state.email

        }
        fetch('/api/addLLCGovernance', {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: { 'Content-Type': 'application/json' }
        })

            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

        if (state.plan === 'Premium') {
            document.location = "/DashboardPremium"
        }
        else {
            document.location = "/Dashboard"
        }



    }

    return (
        <div class="full-page">
              <Navbar />
            <div class="company-id-page">
           

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{ color: "#245CA6" }}> Automate Governance </h1>
                <br></br>
                <div style={{ textAlign: "center" }}>
                    <svg height={50} width={500}>
                        <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1} />
                    </svg>
                </div>
                <p style={{ textAlign: "center" }}> Welcome! </p>
                <br></br>
                <form className={classes.root} noValidate autoComplete="off">
                    <div class="login-form" style={{ textAlign: "center" }}>
                        <br></br>


                        {/* <div class="automate-choice">
                            <TextField
                                id="outlined-select-consent"
                                select label="How would you like to Automate your Governance?"
                                value={automate}
                                onChange={handleChangeAutomation}
                                variant="outlined"
                                style={{ width: "500px" }}
                            >
                                {automation.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            < br />
                        </div> */}



                        {/* {automate === 'AI' && (
                            <form>
                                <br />


                                <div class="upload-formation">
                                    <p style={{ textAlign: "center" }}> Please upload formation documents </p>

                                    <DropzoneArea
                                        onChange={handleChange.bind(this)}
                                        filesLimit={10}
                                    />

                                </div>

                                <br />
                                <br />

                                <div class="upload-governance">
                                    <p style={{ textAlign: "center" }}> Please upload governance documents </p>

                                    <DropzoneArea
                                        onChange={handleChange.bind(this)}
                                        filesLimit={10}
                                    />

                                </div>
                                <br />
                                <br />


                                <div class="upload-company-minutes">
                                    <p style={{ textAlign: "center" }}> Please upload company's form of resolutions and meeting minutes (if any) </p>

                                    <DropzoneArea
                                        onChange={handleChange.bind(this)}
                                        filesLimit={10}
                                    />

                                </div>
                                <br />
                                <br />
                                {state.plan === 'Premium' && (

                                    <center>
                                        <Link to="/DashboardPremium">
                                            <div class="gov-button-1" >
                                                <p style={{ textAlign: "center" }}> Finish Initializing Your Company </p>
                                            </div>
                                        </Link>
                                    </center>
                                )}

                                {state.plan != 'Premium' && (

                                    <center>
                                        <Link to="/Dashboard">
                                            <div class="gov-button-1" >
                                                <p style={{ textAlign: "center" }}> Finish Initializing Your Company </p>
                                            </div>
                                        </Link>
                                    </center>
                                )}
                            </form>

                        )}
                        <br />
                        <br /> */}

                        {/* {automate === 'Manual' && ( */}

                        <form>
                            < br />



                            {/* <div class="upload-formation">
                                    <p style={{ textAlign: "center" }}> Please upload formation documents </p>

                                    <DropzoneArea
                                        onChange={handleChange.bind(this)}
                                        filesLimit={10}
                                    />

                                </div>

                                <br />
                                <br />

                                <div class="upload-governance">
                                    <p style={{ textAlign: "center" }}> Please upload governance documents </p>

                                    <DropzoneArea
                                        onChange={handleChange.bind(this)}
                                        filesLimit={10}
                                    />
                                </div>
                                <br />
                                <br />

                                <div class="upload-company-minutes">
                                    <p style={{ textAlign: "center" }}> Please upload company's form of resolutions and meeting minutes (if any) </p>

                                    <DropzoneArea
                                        onChange={handleChange.bind(this)}
                                        filesLimit={10}
                                    />

                                </div>
                                <br />
                                < br /> */}

                            <div class="LLC-questions">
                                <div class="manager-choice">
                                    <TextField
                                        id="outlined-select-meeting"
                                        select label="Is your Business Member managed or Manager managed?"
                                        value={manager}
                                        onChange={handleChangeManager}
                                        variant="outlined"
                                        style={{ width: "500px" }}
                                    >
                                        {managers.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <br />
                                <div class="annual-meeting-choice">
                                    <TextField
                                        id="outlined-select-meeting"
                                        select label="Are you required to have an annual meeting?"
                                        value={boolean}
                                        onChange={handleChangeBoolean}
                                        variant="outlined"
                                        style={{ width: "500px" }}
                                    >
                                        {booleans.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <br></br>
                                <div class="llc-quorum" style={{ textAlign: "center" }}>
                                    <TextField
                                        id="outlined-number"
                                        label="What is a sufficient number of members to call a meeting to order for your business?"
                                        name="quorum" onChange={handleStateChange}
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        style={{ width: "500px" }}
                                    />
                                </div>
                                <br></br>
                                <div class="llc-quorum-vote" style={{ textAlign: "center" }}>
                                    <TextField
                                        id="outlined-number"
                                        label="What vote of members is needed to take action?"
                                        name="quorum_vote" onChange={handleStateChange}
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        style={{ width: "500px" }}
                                    />
                                </div>
                                <br></br>
                                <div class="num-members-llc" style={{ textAlign: "center" }}>
                                    <TextField
                                        id="outlined-number"

                                        label="How many members does your business have?"
                                        name="members" onChange={handleStateChange}
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        style={{ width: "500px" }}
                                    />
                                </div>
                                <br></br>
                                <div class="num-members-llc" style={{ textAlign: "center" }}>
                                    <TextField
                                        id="outlined-number"
                                        label="How many managers does your business have?"
                                        name="managers" onChange={handleStateChange}
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                        style={{ width: "500px" }}
                                    />
                                </div>
                                <br />
                                <p style={{ textAlign: "center" }}> Please enter the following information for all Members and/or Managers </p>
                                <br></br>

                                <div class="members-form">

                                    <div class="button-add">

                                        <Button onClick={handleAddMembers}> Add Member</Button>
                                    </div>
                                    < br />
                                    <br />
                                    {membersList.map((x, i) => {
                                        return (
                                            <div class="members-form-box">

                                                <div class="name-input-llc" style={{ textAlign: "center" }}>

                                                    <TextField
                                                        name="name"
                                                        label="Name"
                                                        value={x.name}
                                                        variant="outlined"
                                                        style={{ width: "200px" }}
                                                        onChange={e => handleMembersChange(e, i)}
                                                    />

                                                </div>
                                                < br />
                                                <div class="email-input-llc" style={{ textAlign: "center" }}>
                                                    <TextField
                                                        name="email"
                                                        label="Email"
                                                        value={x.email}
                                                        variant="outlined"
                                                        onChange={e => handleMembersChange(e, i)}
                                                        style={{ width: "200px" }}
                                                    />
                                                </div>
                                                <br />
                                                <div class="percent-ownership" style={{ textAlign: "center" }}>
                                                    <TextField
                                                        name="percentShares"
                                                        label="Percentage of ownership"
                                                        type="number"
                                                        value={x.percentShares}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                        onChange={e => handleMembersChange(e, i)}
                                                        style={{ width: "200px" }}
                                                    />
                                                </div>
                                                <br />
                                                <div class="percent-profits-received" style={{ textAlign: "center" }}>
                                                    <TextField
                                                        name="percentProfit"
                                                        label="Percent of profits received"
                                                        type="number"
                                                        value={x.percentProfit}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        onChange={e => handleMembersChange(e, i)}

                                                        variant="outlined"
                                                        style={{ width: "200px" }}
                                                    />
                                                </div>
                                                <br />
                                                <div class="percent-losses-received" style={{ textAlign: "center" }}>
                                                    <TextField
                                                        name="percentLosses"
                                                        label="Percent of losses received"
                                                        type="number"
                                                        value={x.percentLosses}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        onChange={e => handleMembersChange(e, i)}

                                                        variant="outlined"
                                                        style={{ width: "200px" }}
                                                    />
                                                </div>
                                                <br />
                                                 <div class="title-input-llc" style={{ textAlign: "center" }}>

                                                    <TextField
                                                        name="title"
                                                        label="Title"
                                                        value={x.title}
                                                        variant="outlined"
                                                        style={{ width: "200px" }}
                                                        onChange={e => handleMembersChange(e, i)}
                                                    />

                                                </div>

                                            </div>

                                        );
                                    })}
                                </div>

                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <center>
                                {/* <Link to="/Dashboard"> */}
                                <div class="gov-button-1" onClick={handleClick}>
                                    <p style={{ textAlign: "center" }}> Finish Initializing Your Company </p>
                                </div>
                                {/* </Link> */}
                            </center>

                        </form>
                        {/* )} */}
                    </div>
                </form>


                <br></br>
                <br></br>
                <br></br>

            </div>

            <Footer />

        </div>
    );
}


