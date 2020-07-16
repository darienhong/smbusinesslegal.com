import React, { Component } from 'react';
import '../App.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom";
import DescriptionIcon from '@material-ui/icons/Description';
import Questions from '../internship-files/Questions.jsx';
import EmploymentQuestions from '../employment-files/EmploymentQuestions.jsx';
import ConsultingQuestions from '../consulting-files/ConsultingQuestions.jsx';
import DisciplinaryQuestions from '../disciplinary-files/DisciplinaryQuestions.jsx';
import TerminationQuestions from '../termination-files/TerminationQuestions.jsx';


import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import Footer from '../components/footer.jsx';

export default class EmploymentLogin extends Component {

    constructor(){
        super();
        var today = new Date(),
            dateToday = today.getDate();
    

    this.state = {
        docs_used: 7,
        limited_docs: false,
        email: localStorage.getItem('email'),
        date: dateToday,
    }
}

    componentDidMount(){
        console.log(this.state.email);
        fetch(`/api/getNumDocs?email=${this.state.email}`, {
            method: 'GET',
          })
          
        .then(response => response.json()
        .then(data => this.setState({
              docs_used: data[0].no_docs_used,
          }))
        )
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

        if (this.state.date === 1){
            this.setState({ 
                docs_used: 0,
            }) 

            const data = {
                docs_used: this.state.docs_used,
                email: this.state.email,
              }
              
              fetch('/api/resetDocs', {
                method: 'POST',
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: { 'Content-Type': 'application/json' }
              })
          
                .then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => console.log('Success:', response));


        }

       
    }

    saveData = () => {
        localStorage.setItem('docs_used', this.state.docs_used);
    }

    render() {
        const {
            docs_used, 
            email,
            limited_docs
        } = this.state

        return (
            <div class="full-page">
                  <Navbar2 />
                <div class="employment-doc-page">
                    
                    {this.saveData()}
               
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="back-button" style={{ paddingLeft: "20px", paddingTop: "5px" }}>
                        <Link to="/Dashboard" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
                    </div>
                    <br></br>
                    <br></br>
                    <h1 style={{ color: "#245CA6" }}> Employment </h1>
                    <br></br>
                    <div style={{ textAlign: "center" }}>
                        <svg height={50} width={400}>
                            <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1} />
                        </svg>
                    </div>
                    {/* {docs_used} */}
                    <p class="pick-document"> Choose a document to draft </p>
                    <br></br>
                    <br></br>
                    <div class="formation-documents">

                        <div class="document-icon"> <Link to="/Questions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Internship Agreement </p>
                        </Link>
                        </div>

                        <div class="document-icon"> <Link to="/EmploymentQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Employment Agreement </p>
                        </Link>
                        </div>
                    </div>
                    <div class="formation-documents">

                        <div class="document-icon"> <Link to="/ConsultingQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Consulting Agreement </p>
                        </Link>
                        </div>

                        <div class="document-icon"> <Link to="/DisciplinaryQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Disciplinary Warning </p>
                        </Link>
                        </div>
                    </div>
                    <div class="formation-documents">

                        <div class="document-icon"> <Link to="/TerminationQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Employment Termination </p>
                        </Link>
                        </div>

                        <div class="document-icon"> <Link to="/MutualNDAQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Mutual Non-Disclosure Agreement </p>
                        </Link>
                        </div>
                    </div>
                    <div class="formation-documents">

                        <div class="document-icon"><Link to="/RecipientNDAQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Unilateral Non-Disclosure Agreement <br></br> (Pro-Recipient) </p>
                        </Link>
                        </div>

                        <div class="document-icon"><Link to="/DisclosureNDAQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Unilateral Non-Disclosure Agreement <br></br> (Pro-Discloser) </p>
                        </Link>
                        </div>
                    </div>

                    <br></br>
                    < br />
                    <br />
                </div>
                <Footer />

            </div>




        );
    }
}