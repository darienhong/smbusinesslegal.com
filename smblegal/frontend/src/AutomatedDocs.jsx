import React, { Component } from 'react';
import './App.css';
import Navbar from './components/nav-bar.jsx';
import Footer from './components/footer.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default class AutomatedDocs extends Component {

    render() {
        return (
            <div class="full-page">
                <Navbar />
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

                    <center><div class="doc-block"> <Link to="/Formation" style={{ textDecoration: "none", color: "#245CA6" }}>
                        Formation </Link>
                    </div>
                    </center>

                    <center><div class="doc-block"> <Link to="/Governance" style={{ textDecoration: "none", color: "#245CA6" }}>
                        Governance </Link>
                    </div>
                    </center>

                    <center><div class="doc-block"> <Link to="/Employment" style={{ textDecoration: "none", color: "#245CA6" }}>
                        Employment </Link>
                    </div>
                    </center>

                    <center><div class="doc-block"> <Link to="/Covid_19" style={{ textDecoration: "none", color: "#245CA6" }}>
                        Covid-19 </Link>
                    </div>
                    </center>

                    <center><div class="doc-block"> <Link to="/Operational" style={{ textDecoration: "none", color: "#245CA6" }}>
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