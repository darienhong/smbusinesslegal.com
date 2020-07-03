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

export default class Governance extends Component {

    render() {
        return (
            <div class="governance-doc-page">
                <Navbar />
                <br></br>
                <br></br>
                <br></br>
                <div class="back-button" style={{ paddingLeft: "20px", paddingTop: "5px" }}>
                    <Link to="/" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
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

                    <div class="document-icon"><Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Board of Director Meeting Minutes </p>
                    </Link>
                    </div>

                    <div class="document-icon"><Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Board Resolution </p>
                    </Link>
                    </div>
                </div>

                <div class="formation-documents">

                    <div class="document-icon"><Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Waiver of Notice of the Meeting of the Board of Directors </p>
                    </Link>
                    </div>

                    <div class="document-icon"><Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Waiver of Notice of the Meeting of the Shareholders </p>
                    </Link>
                    </div>
                </div>

                <div class="formation-documents">

                    <div class="document-icon"><Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Shareholders Meeting Minutes </p>
                    </Link>
                    </div>

                    <div class="document-icon"><Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Shareholders Resolution </p>
                    </Link>
                    </div>
                </div>
                <div class="formation-documents">

                    <div class="document-icon"><Link to="/SignIn">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Member Resolution (LLC) </p>
                    </Link>
                    </div>

                    <div class="document-icon">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> N/A </p>
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