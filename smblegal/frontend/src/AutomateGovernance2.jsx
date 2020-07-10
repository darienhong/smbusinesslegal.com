import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { DropzoneDialog, DropzoneArea } from 'material-ui-dropzone';
import ModalTest from './components/modal.jsx';
import Button from '@material-ui/core/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



/* FOR CORPORATION QUESTIONS */

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
}));

const newMember = () => {
    return (
        <div class="new-member">
            <div class="name-input-llc" style={{ textAlign: "center" }}>
                <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: "500px" }} />
            </div>
            <br></br>
            <div class="email-input-llc" style={{ textAlign: "center" }}>
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: "500px" }} />
            </div>
            <br></br>
            <div class="percent-ownership" style={{ textAlign: "center" }}>
                <TextField
                    id="outlined-number"
                    label="Percentage of ownership"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    style={{ width: "500px" }}
                />
            </div>
            <br></br>
            <div class="percent-profits-received" style={{ textAlign: "center" }}>
                <TextField
                    id="outlined-number"
                    label="Percent of profits received"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    style={{ width: "500px" }}
                />
            </div>
        </div>
    );
}



export default function AutomateGov2() {
    const classes = useStyles();
    const [company, setCompany] = React.useState();
    const [USstate, setState] = React.useState();
    const [boolean, setBoolean] = React.useState();
    const [automate, setAutomation] = React.useState();
    const [membersList, setMembersList] = React.useState([{ name: "", email: "", percentShares: "", percentProfit: "" }]);
    const [open, setOpen] = React.useState(false);
    const [files, setFiles] = React.useState([]);
    const [boardMembersList, setBoardMembersList] = React.useState([{ name: "", email: "", sharesOwned: "" }]);
    const [shareholdersList, setShareholdersList] = React.useState([{ name: "", email: "", sharesOwned: "" }]);
    const [state, setStates] = React.useState({
        boardDate: new Date(),
        shareholderDate: new Date(),
        quorum_share: 0,
        vote_share: 0,
        quorum_board: 0,
        vote_board: 0,
        members: 0,
        shareholders: 0,
        authorized: 0,
        issued: 0,
        email: localStorage.getItem('email'),
        plan: localStorage.getItem('plan')
    })

    const handleStateChange = e => {
        const { name, value } = e.target
        setStates(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleClick = (event) => {
        event.preventDefault();

        const data = {
            boardDate: state.boardDate,
            shareholderDate: state.shareholderDate,
            quorum_share: state.quorum_share,
            vote_share: state.vote_share,
            quorum_board: state.quorum_board,
            vote_board: state.vote_board,
            members: state.members,
            shareholders: state.shareholders,
            authorized: state.authorized,
            issued: state.issued,
            boardMembersList: boardMembersList,
            shareholdersList: shareholdersList,
            email: state.email
        }
        fetch('/addCorporationGovernance', {
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


    const handleClose = (event) => {
        setOpen(false);

    }

    function handleChange(files) {
        setFiles(files);
    }

    const handleFileChange = (event) => {
        console.log('went in here');
        setFiles(event.target.files[0])
    }

    const onDrop = (acceptedFiles) => {
        console.log(acceptedFiles);
        const data = {
            type: 'formation',
            file: acceptedFiles,
            email: state.email
        }
        fetch('/addDoc', {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: { 'Content-Type': 'application/json' }
        })

            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            // .then(response => console.log('Success:', response.code));
            .then(response => console.log(response));
    }


    const handleOpen = (event) => {
        setOpen(true);
    }

    const handleChangeAutomation = (event) => {
        setAutomation(event.target.value);
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
        setMembersList([...membersList, { name: "", email: "", percentShares: "", percentProfit: "" }]);
    }

    const handleBMChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...boardMembersList]
        list[index][name] = value;
        setBoardMembersList(list)
    }

    const handleAddBM = () => {
        setBoardMembersList([...boardMembersList, { name: "", email: "", sharesOwned: "" }]);
    }

    const handleSHChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...shareholdersList]
        list[index][name] = value;
        setShareholdersList(list)
    }

    const handleAddSH = () => {
        setShareholdersList([...shareholdersList, { name: "", email: "", sharesOwned: "" }]);
    }





    return (

        <div class="full-page">
            <div class="company-id-page">
                <Navbar />

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




                        <div class="automate-choice">
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
                        </div>


                        {automate === 'AI' && (
                            <form>
                                <br />

                                <div class="upload-formation">
                                    <p style={{ textAlign: "center" }}> Please upload formation documents </p>

                                    <DropzoneArea
                                        // onChange={handleChange.bind(this)}
                                        onDrop={onDrop}
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
                        <br />


                        {automate === 'Manual' && (


                            <form>
                                < br />
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

                                <div class="corporation-questions">
                                    <div class="board-meeting" style={{ textAlign: "center" }}>
                                        <TextField
                                            id="date"
                                            label="When was your last board meeting?"
                                            name="boardDate" onChange={handleStateChange}
                                            type="date"
                                            variant="outlined"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            style={{ width: "500px" }}
                                        />

                                    </div>
                                    <br></br>
                                    <div class="shareholders-meeting" style={{ textAlign: "center" }}>
                                        <TextField
                                            id="date"
                                            label="When was your last Shareholder meeting?"
                                            name="shareholderDate" onChange={handleStateChange}
                                            type="date"
                                            variant="outlined"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            style={{ width: "500px" }}
                                        />
                                    </div>
                                    <br></br>
                                    <div class="shareholders-quorum" style={{ textAlign: "center" }}>
                                        <TextField
                                            id="outlined-number"
                                            label="What is a quorum of Shareholders of your business?"
                                            name="quorum_share" onChange={handleStateChange}
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            style={{ width: "500px" }}
                                        />
                                    </div>
                                    <br></br>
                                    <div class="shareholders-quorum-vote" style={{ textAlign: "center" }}>
                                        <TextField
                                            id="outlined-number"
                                            label="What is a sufficient vote of Shareholders to pass something in your business?"
                                            name="vote_share" onChange={handleStateChange}
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            style={{ width: "500px" }}
                                        />
                                    </div>
                                    <br></br>
                                    <div class="board-quorum" style={{ textAlign: "center" }}>
                                        <TextField
                                            id="outlined-number"
                                            label="What is a quorum of Board in your business?"
                                            name="quorum_board" onChange={handleStateChange}
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            style={{ width: "500px" }}
                                        />
                                    </div>
                                    <br></br>
                                    <div class="board-quorum-vote" style={{ textAlign: "center" }}>
                                        <TextField
                                            id="outlined-number"
                                            label="What is a sufficient vote of the Board to pass something in your business?"
                                            name="vote_board" onChange={handleStateChange}
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            style={{ width: "500px" }}
                                        />
                                    </div>
                                    <br></br>
                                    <div class="num-board-members" style={{ textAlign: "center" }}>
                                        <TextField
                                            id="outlined-number"
                                            label="How many board members does your business have?"
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
                                    <div class="num-shareholders" style={{ textAlign: "center" }}>
                                        <TextField
                                            id="outlined-number"
                                            label="How many Shareholders does your business have?" name="boardDate" onChange={handleStateChange}
                                            name="shareholders" onChange={handleStateChange}
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            style={{ width: "500px" }}
                                        />
                                    </div>
                                    <br></br>
                                    <div class="num-authorized-shares" style={{ textAlign: "center" }}>
                                        <TextField
                                            id="outlined-number"
                                            label="What is the total number of authorized shares of your company?"
                                            name="authorized" onChange={handleStateChange}
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            style={{ width: "500px" }}
                                        />
                                    </div>
                                    <br />
                                    <div class="num-issues" style={{ textAlign: "center" }}>
                                        <TextField
                                            id="outlined-number"
                                            label="What is the total number of issued shares of your company?"
                                            name="issued" onChange={handleStateChange}
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                            style={{ width: "500px" }}
                                        />
                                    </div>
                                    < br />
                                    <br />

                                    <div>
                                        <p style={{ textAlign: "center" }}> Please upload the names and email address of all Board Members that your business has </p>



                                        <div class="members-form">

                                            <div class="button-add">

                                                <Button onClick={handleAddBM}> Add Member</Button>
                                            </div>
                                            < br />
                                            < br />
                                            {boardMembersList.map((x, i) => {
                                                return (
                                                    <div class="members-form-box">

                                                        <div class="name-input-c" style={{ textAlign: "center" }}>

                                                            <TextField
                                                                name="name"
                                                                label="Name"
                                                                value={x.name}
                                                                variant="outlined"
                                                                style={{ width: "300px" }}
                                                                onChange={e => handleBMChange(e, i)}
                                                            />

                                                        </div>
                                                        < br />
                                                        <div class="email-input-c" style={{ textAlign: "center" }}>
                                                            <TextField
                                                                name="email"
                                                                label="Email"
                                                                value={x.email}
                                                                variant="outlined"
                                                                onChange={e => handleBMChange(e, i)}
                                                                style={{ width: "300px" }}
                                                            />
                                                        </div>
                                                        <br />
                                                        <div class="num-shares" style={{ textAlign: "center" }}>
                                                            <TextField
                                                                name="sharesOwned"
                                                                id="outlined-number"
                                                                label="Number of Shares owned"
                                                                type="number"
                                                                value={x.sharesOwned}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                                variant="outlined"
                                                                onChange={e => handleBMChange(e, i)}
                                                                style={{ width: "300px" }}
                                                            />
                                                        </div>

                                                    </div>

                                                );
                                            })}

                                        </div>
                                    </div>


                                    <br />

                                    <div>
                                        <p style={{ textAlign: "center" }}> Please upload the names and email address of all Shareholders that your business has </p>
                                        <div class="members-form">

                                            <div class="button-add">

                                                <Button onClick={handleAddSH}> Add Member</Button>
                                            </div>
                                            < br />
                                            <br />
                                            {shareholdersList.map((x, i) => {
                                                return (
                                                    <div class="members-form-box">

                                                        <div class="name-input-c" style={{ textAlign: "center" }}>

                                                            <TextField
                                                                name="name"
                                                                label="Name"
                                                                value={x.name}
                                                                variant="outlined"
                                                                style={{ width: "300px" }}
                                                                onChange={e => handleSHChange(e, i)}
                                                            />

                                                        </div>
                                                        < br />
                                                        <div class="email-input-c" style={{ textAlign: "center" }}>
                                                            <TextField
                                                                name="email"
                                                                label="Email"
                                                                value={x.email}
                                                                variant="outlined"
                                                                onChange={e => handleSHChange(e, i)}
                                                                style={{ width: "300px" }}
                                                            />
                                                        </div>
                                                        <br />
                                                        <div class="num-shares" style={{ textAlign: "center" }}>
                                                            <TextField
                                                                name="sharesOwned"
                                                                id="outlined-number"
                                                                label="Number of Shares owned"
                                                                type="number"
                                                                value={x.sharesOwned}
                                                                InputLabelProps={{
                                                                    shrink: true,
                                                                }}
                                                                onChange={e => handleSHChange(e, i)}
                                                                variant="outlined"
                                                                style={{ width: "300px" }}
                                                            />
                                                        </div>

                                                    </div>

                                                );
                                            })}






                                        </div>


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

                        )}

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


