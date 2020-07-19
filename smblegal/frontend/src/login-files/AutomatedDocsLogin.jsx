import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/nav-bar.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navbar2 from '../components/nav-bar2.jsx';
import Footer from '../components/footer.jsx';


export default class AutomatedDocsLogin extends Component {

    render() {
        return (
            <div class="full-page">
                <Navbar2 />
                <div class="automated-docs-page">

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 style={{ color: "#245CA6" }}> Automated Documents </h1>
                    <br></br>
                    <div style={{ textAlign: "center" }}>
                        <svg height={50} width={500}>
                            <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1} />
                        </svg>
                    </div>

                    <center><div class="doc-block"> <Link to="/FormationLogin" style={{ textDecoration: "none", color: "black" }}>
                        Formation </Link>
                    </div>
                    </center>

                    <center><div class="doc-block"> <Link to="/GovernanceLogin" style={{ textDecoration: "none", color: "black" }}>
                        Governance </Link>
                    </div>
                    </center>

                    <center><div class="doc-block"> <Link to="/EmploymentLogin" style={{ textDecoration: "none", color: "black" }}>
                        Employment </Link>
                    </div>
                    </center>

                    <center><div class="doc-block"> <Link to="/Covid_19Login" style={{ textDecoration: "none", color: "black" }}>
                        Covid-19 </Link>
                    </div>
                    </center>

                    <center><div class="doc-block"> <Link to="/OperationalLogin" style={{ textDecoration: "none", color: "black" }}>
                        Operational </Link>
                    </div>
                    </center>
                    <br></br>
                    <br></br>

                </div>
                <Footer />


            </div>
        );
    }
}