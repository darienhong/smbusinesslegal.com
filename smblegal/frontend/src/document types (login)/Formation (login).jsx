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

export default class FormationLogin extends Component {

    render() {

        return (
            <div class="full-page">
            <div class="formation-doc-page">
                <Navbar2 />
                <br></br>
                <br></br>
                <br></br>
                <div class="back-button" style={{ paddingLeft: "20px", paddingTop: "5px"}}>
                    <Link to="/HomepageLogin" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
                </div>
                <br></br>
                <br></br>
                <h1 style={{ color: "#245CA6" }}> Formation </h1>
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

                    <div class="document-icon"><Link to="/FormationQuestions">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Certificate of Formation <br></br> (DE - LLC) </p>
                    </Link>
                    </div>

                    <div class="document-icon"><Link to="/IncorporationQuestions">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Certificate of Incorporation (DE - Corp) </p>
                    </Link>
                    </div>
                </div>

                <div class="formation-documents">

                    <div class="document-icon"><Link to="/StatementQuestions">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Statement of the Incorporator </p>
                    </Link>
                    </div>

                    <div class="document-icon"><Link to="/DirectorsQuestions">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Initial Action by the Board of Directors </p>
                    </Link>
                    </div>
                </div>

                <div class="formation-documents">

                    <div class="document-icon"><Link to="/SecretaryQuestions">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> Certificate of the Secretary (Adoption of Bylaws) </p>
                    </Link>
                    </div>

                    <div class="document-icon">
                        <DescriptionIcon style={{ fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px" }} />
                        <p> N/A </p>
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