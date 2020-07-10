import React, { Component } from 'react';
import '../App.css';
import Logo from '../assets/logo.png';
import Button from 'react-bootstrap/Button';
import Lottie from 'react-lottie';
import animationData from '../assets/animation.json';
import ModalTest from '../components/modal.jsx';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import AOS from 'aos';
import Footer from '../components/footer.jsx';

import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Link
  } from "react-router-dom";
  import ReactGA from 'react-ga';


export default class GovernanceDashboard extends Component { 


  state = {
    companyName: "[COMPANY NAME]",
    companyType: "[COMPANY TYPE]",
    companyID: "[COMPANY ID]",
    USstate: "[STATE]", 
    email: localStorage.getItem('email'),
    //partnership questions
    partnershipUnanimousConsent: "No", 
    partnershipSufficientVote: "[VOTE]", 
    numPartners: "[NUM PARTNERS]", 
    partnershipMembers: [],

    //corporation questions
    lastBoardMeeting: "[LAST BOARD MEETING]", 
    lastShareholdersMeeting: "[LAST SHAREHOLDERS MEETING]", 
    shareholdersQuorum: "[SHAREHOLDERS QUORUM]", 
    shareholdersVote: "[SHAREHOLDERS VOTE]", 
    boardQuorum: "[BOARD QUORUM]",
    boardVote: "[BOARD VOTE]",
    numBoardMembers: "[NUM BOARD MEMBERS]", 
    numShareholders: "[NUM SHAREHOLDERS]", 
    totalAuthorizedShares: "[TOTAL AUTHORIZED SHARES]", 
    totalIssuedShares: "[TOTAL ISSUED SHARES]",
    boardMeetings: [], 
    shareholdersMeetings: [],

    //LLC questions
    manager: "[MEMBER OR MANAGER MANAGED]", 
    annualMeeting: false,
    tempAnnualMeeting: "No",
    sufficientMembers: "[SUFFICIENT NUM OF MEMBERS]", 
    membersVote: "[VOTE OF MEMBERS]", 
    numManagers: 0, 
    numMembers: 0, 

    LLCMembers: [],
    boardMembers: [],
    shareholders: [],
    


  }

  componentDidMount() {

    const data = {
      email: this.state.email,
    }
    console.log(this.state.email);
      var that = this;
        fetch(`/getCompanyInfo?email=${this.state.email}`, {
          method: 'GET',
        })
          .then(function(response){
            response.json()
              .then(function(data) {
                console.log(data);
                that.setState({
                  company: data,
                  companyID: data[0].company_id,
                  companyName: data[0].company_name,
                  companyType: data[0].company_type,
                  USState: data[0].state,

                  //partnership variables
                  partnershipSufficientVote: data[0].partner_action_vote, 
                  numPartners: data[0].no_partners, 

                  //corporation variables
                  shareholdersQuorum: data[0].quorum_shareholders, 
                  shareholdersVote: data[0].quorum_vote_shareholders, 
                  boardQuorum: data[0].quorum_board, 
                  boardVote: data[0].quorum_vote_board, 
                  boardMeetings: data[0].board_meetings, 
                  shareholdersMeetings: data[0].shareholder_meetings, 
                  numBoardMembers: data[0].no_board_members, 
                  numShareholders: data[0].no_shareholders, 
                  totalAuthorizedShares: data[0].no_auth_shares, 
                  totalIssuedShares: data[0].no_issued_shares, 

                  //LLC variables 
                  numManagers: data[0].no_managers, 
                  numMembers: data[0].no_members,
                  sufficientMembers: data[0].quorum_members, 
                  membersVote: data[0].quorum_vote_members, 
                  manager: data[0].managed_by, 
                  annualMeeting: data[0].annual_meetings,

  
                })
              })
          })
          .then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    
      }


    render() {
      const { 
        companyName, 
        users, 
        companyID, 
        lastMeeting, 
        nextMeeting,
        companyType, 
        USstate, 
        partnershipUnanimousConsent, 
        partnershipSufficientVote, 
        numPartners, 
        lastBoardMeeting, 
        lastShareholdersMeeting, 
        shareholdersQuorum, 
        boardVote, 
        boardQuorum,
        shareholdersVote, 
        numBoardMembers, 
        numShareholders, 
        totalAuthorizedShares, 
        totalIssuedShares, 
        manager, 
        boardMeetings, 
        shareholdersMeetings,
        annualMeeting, 
        sufficientMembers, 
        membersVote, 
        numMembers, 
        numManagers, 
        partnershipMembers,
        boardMembers, 
        shareholders,
        LLCMembers,
        tempAnnualMeeting,
       

      } = this.state


        return (
          <div class="full-page">
            <div class="homepage-login"> 
            <Navbar2 />
            <br /> 
            <br /> 
            <br /> 


            {annualMeeting === false && (
                this.state.tempAnnualMeeting = 'No'
            )}

            {annualMeeting === true && (
                this.state.tempAnnualMeeting = 'Yes'
            )}

            <br />
            <br></br>
              <h1 style={{color: "#245CA6"}}> Governance Dashboard </h1>
              <br></br>

            <div style={{textAlign:"center"}}>
                <svg height={50} width={500}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <br />

            <center>
          <div class="all-company-info"> 
         <span style={{fontWeight: "600"}}> {companyName} </span> 
          <br /> 
          < br/>
          <span style={{fontWeight: "600"}}> ID:  {companyID} </span> 
          <br /> 
          <br />
          <span style={{fontWeight: "600"}}> {companyType} </span> 
          < br/> 
          <br />
          <span style={{fontWeight: "600"}}> {USstate} </span> 
          <br />
          <br />
          </div>
          </center>

          <br />
          <br />




          { companyType === 'Partnership' && (
              <center>
            <div class="all-company-info"> 
            <span style={{fontWeight: "bold"}}> Does your partnership require unanimous consent: </span> {partnershipUnanimousConsent} 
          <br /> 
          < br/>
          { partnershipUnanimousConsent === "No" && ( 
              <div> 
                <span style={{fontWeight: "bold"}}> Sufficient vote to take partnership action: </span> {partnershipSufficientVote}
                <br />
                <br />
                  </div> 
          )}
          <span style={{fontWeight: "bold"}}> Number of partners: </span> {numPartners}
          <br /> 
          <br />
          <div class="list"> 
          <span style={{fontWeight: "bold"}}>List of Members and Managers: </span>
          <br />
          <br />

          {partnershipMembers}
          </div>




         </div> 
         </center>
          )}

          { companyType === 'Corporation' && (
              <center>
              <div class="all-company-info"> 
              <span style={{fontWeight: "bold"}}>Last board meeting: </span> {lastBoardMeeting}
            < br/>
            <br />
            <span style={{fontWeight: "bold"}}> Last Shareholders meeting: </span> {lastShareholdersMeeting}
            <br />
            <br />
            <span style={{fontWeight: "bold"}}> Shareholders Quorum: </span> {shareholdersQuorum}
            <br />
            <br />
            <span style={{fontWeight: "bold"}}> Sufficient Shareholders vote:</span> {shareholdersVote}
            <br />
            <br />
            <span style={{fontWeight: "bold"}}> Board quorum: </span>{boardQuorum}
            <br />
            <br />
            <span style={{fontWeight: "bold"}}>Sufficient Board vote: </span>{boardVote}
            <br /> 
            <br />
            <span style={{fontWeight: "bold"}}> Number of board members: </span> {numBoardMembers}
            < br/>
            <br />
            <span style={{fontWeight: "bold"}}> Number of Shareholders: </span> {numShareholders}
            <br />
            <br />
            <span style={{fontWeight: "bold"}}>Total Authorized Shares: </span> {totalAuthorizedShares}
            <br />
            <br />
            <span style={{fontWeight: "bold"}}> Total Issued Shares: </span> {totalIssuedShares}
            < br/>
            <br />
            <br />

      
            <center>
            <div style={{width: "80%", height: "400px"}}>
            <div class="list" style={{float: "left"}}> 
            <span style={{fontWeight: "bold"}}> List of Board Members: </span>
          <br />
          <br />

          {boardMembers}
          </div>
          <div class="list" style={{float: "right"}}> 
          <span style={{fontWeight: "bold"}}> List of Shareholders: </span>
          <br />
          <br />

          {shareholders}
          </div>
          </div>
          </center>
         
         



             </div>
             </center>
          )}

          { companyType === 'LLC' && (
              <center>
              <div class="all-company-info"> 
            <span style={{fontWeight: "bold"}}> Is your business Member managed or Manager managed: </span> {manager}
            <br />
            <br />
            <span style={{fontWeight: "bold"}}> Are you required to have an annual meeting?: </span>{tempAnnualMeeting}
            <br />
            <br />
            <span style={{fontWeight: "bold"}}>Sufficient number of members to call a meeting to order: </span> {sufficientMembers}
            < br/> 
            <br />
            <span style={{fontWeight: "bold"}}> Vote of members needed to take action:  </span>{membersVote}
            < br/>
            <br />
            <span style={{fontWeight: "bold"}}> Number of managers: </span> {numManagers}
            <br/>
            <br />
            <span style={{fontWeight: "bold"}}>Number of members: </span> {numMembers}
            < br/>
            <br />
            <div class="list"> 
            <span style={{fontWeight: "bold"}}> List of Members and Managers: </span> 
          <br />
          <br />

          {LLCMembers}
          </div>
            </div>
            </center>
          )}



            <br />
            <br />



          <p class="homepage-text" style={{left: "20px"}}> Automated Documents </p>
          < br/>
          <div class="features">
           <div class="formation">
           <Link to="/FormationLogin" style={{textDecoration: "none"}}><p style={{fontWeight: "600", textAlign: "center"}}>Formation</p> </Link>
             </div>
             < br/>
           
             <div class="governance">
             <Link to="/GovernanceLogin" style={{textDecoration: "none"}}><p style={{fontWeight: "600", textAlign: "center"}}>  Governance </p></Link>
             </div>
             <br />
            
             <div class="employment">
             <Link to="/EmploymentLogin" style={{textDecoration: "none"}}><p style={{fontWeight: "600", textAlign: "center"}}> Employment</p></Link>
             </div>
            < br/> 
          
             <div class="covid-19">
             <Link to="/Covid_19Login" style={{textDecoration: "none"}}><p style={{fontWeight: "600", textAlign: "center"}}> Covid-19  </p></Link>
            </div>

 
          </div>
 
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          </div> 
          <Footer />
            </div> 



        );
    }

}