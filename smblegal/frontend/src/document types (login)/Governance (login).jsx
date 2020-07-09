import React, { Component } from 'react';
import '../App.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DescriptionIcon from '@material-ui/icons/Description';
import Navbar from '../components/nav-bar.jsx';
import Navbar2 from '../components/nav-bar2.jsx';
import Footer from '../components/footer.jsx';

export default class GovernanceLogin extends Component {

    render() {
        return (
            <div class="full-page">
                <div class="governance-doc-page">
                    <Navbar2 />
                    <br></br>
                    <br></br>
                    <br></br>
                    <div class="back-button" style={{ paddingLeft: "20px", paddingTop: "5px" }}>
                        <Link to="/Dashboard" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
                    </div>
                    <br></br>
                    <br></br>
                    <h1 style={{ color: "#245CA6" }}> Governance </h1>
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

                        <div class="document-icon"><Link to="/BoardMinutesQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Board of Director Meeting Minutes </p>
                        </Link>
                        </div>

                        <div class="document-icon"><Link to="/BoardResolutionQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Board Resolution </p>
                        </Link>
                        </div>
                    </div>

                    <div class="formation-documents">

                        <div class="document-icon"><Link to="/WaiverDirectorsQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Waiver of Notice of the Meeting of the Board of Directors </p>
                        </Link>
                        </div>

                        <div class="document-icon"><Link to="/WaiverShareholdersQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Waiver of Notice of the Meeting of the Shareholders </p>
                        </Link>
                        </div>
                    </div>

                    <div class="formation-documents">

                        <div class="document-icon"><Link to="/ShareholderMinutesQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Shareholders Meeting Minutes </p>
                        </Link>
                        </div>

                        <div class="document-icon"><Link to="/ShareholderResolutionQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Shareholders Resolution </p>
                        </Link>
                        </div>
                    </div>
                    <div class="formation-documents">

                        <div class="document-icon"><Link to="/LLCResolutionQuestions">
                            <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                            <p> Member Resolution (LLC) </p>
                        </Link>
                        </div>


                    </div>
                    <br></br>
                    <br />
                    <br />
                </div>
                <Footer />







            </div>
        );
    }
}