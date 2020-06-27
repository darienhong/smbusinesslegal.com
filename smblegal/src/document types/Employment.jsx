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

export default class Employment extends Component {

    render() {
        return (
            <div class="employment-doc-page">
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <div class="back-button" style={{ paddingLeft: "20px", marginLeft: "20px" }}>
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

                    <div class="document-icon">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Unilateral Non-Disclosure Agreement <br></br> (Pro-Discloser) </p>
                    </div>
                </div>

                <br></br>
                <footer class="footer">
                    <p> COPYRIGHT &copy; 2020 SMBUSINESSLEGAL.COM - ALL RIGHTS RESERVED </p>
                    <p style={{ opacity: 0.4 }}> SMB Legal (Eatery Legal Corporation) is NOT a law firm,
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