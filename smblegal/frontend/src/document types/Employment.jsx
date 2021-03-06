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
import Footer from '../components/footer.jsx';

export default class Employment extends Component {

    render() {
        return (
            <div class="full-page">
                  <Navbar />
            <div class="employment-doc-page">
              
                <br></br>
                <br></br>
                <br></br>
                <div class="back-button" style={{ paddingLeft: "20px", paddingTop: "5px"}}>
                    <Link to="/" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
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
                <p class="pick-document"> Choose a document to draft </p>
                <br></br>
                <br></br>
                <div class="formation-documents">

                    <div class="document-icon"> <Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Internship Agreement </p>
                    </Link>
                    </div>

                    <div class="document-icon"> <Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Employment Agreement </p>
                    </Link>
                    </div>
                </div>
                <div class="formation-documents">

                    <div class="document-icon"> <Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Consulting Agreement </p>
                    </Link>
                    </div>

                    <div class="document-icon"> <Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Disciplinary Warning </p>
                    </Link>
                    </div>
                </div>
                <div class="formation-documents">

                    <div class="document-icon"> <Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Employment Termination </p>
                    </Link>
                    </div>

                    <div class="document-icon"> <Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Mutual Non-Disclosure Agreement </p>
                    </Link>
                    </div>
                </div>
                <div class="formation-documents">

                    <div class="document-icon"><Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Unilateral Non-Disclosure Agreement <br></br> (Pro-Recipient) </p>
                    </Link>
                    </div>

                    <div class="document-icon"><Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Unilateral Non-Disclosure Agreement <br></br> (Pro-Discloser) </p>
                    </Link>
                    </div>
                </div>

                <br></br>
                <br />
                < br/>
                </div>
                <Footer />
               

            </div>




        );
    }
}