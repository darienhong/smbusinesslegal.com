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
import Footer from '../components/footer.jsx';


export default class Operational extends Component {

  render() {
    return (
      <div class="full-page">
           <Navbar />
        <div class="covid-19-doc-page">
       
          <br></br>
          <br></br>
          <br></br>
          <div class="back-button" style={{ paddingLeft: "20px", paddingTop: "5px" }}>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}> <ArrowBackIosIcon className="back-button" /></Link>
          </div>
          <br></br>
          <br></br>
          <h1 style={{ color: "#245CA6" }}> OPERATIONAL CONTRACTS </h1>
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
              <p> Short Form Sale of Goods Contract </p>
            </Link>
            </div>

          </div>
          < br />
          <br />
          <br />
        </div>
        <Footer />







      </div>



    );
  }
}