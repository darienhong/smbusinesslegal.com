import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import {DropzoneDialog, DropzoneArea} from 'material-ui-dropzone';
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
        <div class="name-input-llc" style={{textAlign: "center"}}>
            <TextField id="outlined-basic" label="Name" variant="outlined" style={{width: "500px"}} /> 
        </div> 
        <br></br>
        <div class="email-input-llc" style={{textAlign: "center"}}>
            <TextField id="outlined-basic" label="Email" variant="outlined" style={{width: "500px"}} /> 
        </div> 
        <br></br>
        <div class="percent-ownership" style={{textAlign: "center"}}>
           <TextField
               id="outlined-number"
               label="Percentage of ownership"
               type="number"
               InputLabelProps={{
                   shrink: true,
               }}
               variant="outlined"
               style={{width: "500px"}}
           />
       </div>
       <br></br>
       <div class="percent-profits-received" style={{textAlign: "center"}}>
           <TextField
               id="outlined-number"
               label="Percent of profits received"
               type="number"
               InputLabelProps={{
                   shrink: true,
               }}
               variant="outlined"
               style={{width: "500px"}}
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
    const [membersList, setMembersList] = React.useState([{name: "", email: "", percentShares: "", percentProfit: ""}]);
    const [open, setOpen] = React.useState(false); 
    const [files, setFiles] = React.useState([]); 




    const handleClose = (event) => {
        setOpen(false);

    }

    function handleChange(files) {
        setFiles(files); 
    }

    const handleOpen = (event) => { 
        setOpen(true);
    }

  /*  const [members, setMembers] = React.useState(0);

  {/*  const handleChangeMembers = (event) => {
        setMembers(members => [...members, <newMember />])
    }

    {/*
    
    const addMember = (event) => {
        this.setState({
            members: [...this.state.members, <newMember /> ]
        })
    }

*/
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

    const  handleMembersChange = (e) => {
            let membersList = [...membersList]
            membersList[e.target.dataset.id][e.target.className] = e.target.value
            setMembersList({ membersList }, () => console.log(membersList))
          }

    const  addMembers = (e) => {
            e.preventDefault();
            setMembersList((prevState) => ({
              membersList: [...prevState.membersList, { name: "", email: "", percentShares: "", percentProfit: "" }],
            }));
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
                <h1 style={{color: "#245CA6"}}> Automate Governance </h1>
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
             <br></br>




             <div class="automate-choice">
                        <TextField
                            id="outlined-select-consent"
                            select label="How would you like to Automate your Governance?"
                            value={automate}
                            onChange={handleChangeAutomation}
                            variant="outlined"
                            style={{width: "500px"}}
                         >
                        {automation.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                            ))}
                        </TextField>
                        < br/>
                </div>


                { automate === 'AI' && ( 
                    <form> 
            <br />

            <div class="upload-formation">
            <p style={{textAlign: "center"}}> Please upload formation documents </p>

             <DropzoneArea
                    onChange={handleChange.bind(this)}
                    filesLimit={10}
                    />

                    </div> 

                    <br />
                    <br />

            <div class="upload-governance">
            <p style={{textAlign: "center"}}> Please upload governance documents </p>

             <DropzoneArea
                    onChange={handleChange.bind(this)}
                    filesLimit={10}
                    />

                    </div> 
                    <br />
                    <br />


            <div class="upload-company-minutes">
            <p style={{textAlign: "center"}}> Please upload company's form of resolutions and meeting minutes </p>

             <DropzoneArea
                    onChange={handleChange.bind(this)}
                    filesLimit={10}
                    />

                    </div> 


             <br />
             <br />
             <center>
             <Link to="/HomepageLogin">
                     <div class="gov-button-1" >
                          <p style={{textAlign: "center"}}> Finish Initializing Your Company </p>
                      </div>
                      </Link>
            </center>


                    </form>


            )}



        
            <br />
            <br />


            { automate === 'Manual' && ( 


                <form> 
               < br/>
               <div class="upload-formation">
            <p style={{textAlign: "center"}}> Please upload formation documents </p>

             <DropzoneArea
                    onChange={handleChange.bind(this)}
                    filesLimit={10}
                    />

                    </div> 

                    <br />
                    <br />

            <div class="upload-governance">
            <p style={{textAlign: "center"}}> Please upload governance documents </p>

             <DropzoneArea
                    onChange={handleChange.bind(this)}
                    filesLimit={10}
                    />

                    </div> 
                    <br />
                    <br />


            <div class="upload-company-minutes">
            <p style={{textAlign: "center"}}> Please upload company's form of resolutions and meeting minutes </p>

             <DropzoneArea
                    onChange={handleChange.bind(this)}
                    filesLimit={10}
                    />

                    </div> 

                <br />
                <br />
            
             <div class="corporation-questions">
                 <div class="board-meeting" style={{textAlign: "center"}}>
                    <TextField
                        id="date"
                        label="When was your last board meeting?"
                        type="date"
                        variant="outlined"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                    }}
                        style={{width:"500px"}}
                    />

                 </div>
                 <br></br>
                 <div class="shareholders-meeting" style={{textAlign: "center"}}>
                    <TextField
                        id="date"
                        label="When was your last Shareholder meeting?"
                        type="date"
                        variant="outlined"
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                    }}
                        style={{width:"500px"}}
                    />
                 </div>
                 <br></br>
                 <div class="shareholders-quorum" style={{textAlign: "center"}}>
                        <TextField
                            id="outlined-number"
                            label="What is a quorum of Shareholders of your business?"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            style={{width: "500px"}}
                        />
                </div>
                <br></br>
                <div class="shareholders-quorum-vote" style={{textAlign: "center"}}>
                        <TextField
                            id="outlined-number"
                            label="What is a sufficient vote of Shareholders to pass something in your business?"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            style={{width: "500px"}}
                        />
                </div>
                <br></br>
                <div class="board-quorum" style={{textAlign: "center"}}>
                        <TextField
                            id="outlined-number"
                            label="What is a quorum of Board in your business?"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            style={{width: "500px"}}
                        />
                </div>
                <br></br>
                <div class="board-quorum-vote" style={{textAlign: "center"}}>
                        <TextField
                            id="outlined-number"
                            label="What is a sufficient vote of the Board to pass something in your business?"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            style={{width: "500px"}}
                        />
                </div>
                <br></br>
                <div class="num-board-members" style={{textAlign: "center"}}>
                        <TextField
                            id="outlined-number"
                            label="How many board members does your business have?"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            style={{width: "500px"}}
                        />
                </div>
                <br></br>
                <div class="num-shareholders" style={{textAlign: "center"}}>
                        <TextField
                            id="outlined-number"
                            label="How many Shareholders does your business have?"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            style={{width: "500px"}}
                        />
                </div>
                <br></br>
                
                <div> 
                <p style={{textAlign: "center"}}> Please upload the names and email address of all Board Members that your business has </p>
                <DropzoneArea
                    onChange={handleChange.bind(this)}
                    filesLimit={10}
                    />

                    </div> 
            
                
                <br /> 

                <div> 
                <p style={{textAlign: "center"}}> Please upload the names and email address of all Shareholders that your business has </p>
                <DropzoneArea
                    onChange={handleChange.bind(this)}
                    filesLimit={10}
                    /> 
                
                </div> 
             
             </div>


            <br />
            <br />

            
            <br />
            <br />
             <center>
             <Link to="/HomepageLogin">
                     <div class="gov-button-1" >
                          <p style={{textAlign: "center"}}> Finish Initializing Your Company </p>
                      </div>
                      </Link>
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


