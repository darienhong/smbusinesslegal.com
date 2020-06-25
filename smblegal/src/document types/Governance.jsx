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

export default class Governance extends Component { 

    render() { 
        return (
            <div class="governance-doc-page">
                <br></br>
                <br></br>
                <div class="back-button" style={{paddingLeft: "20px", marginLeft: "20px"}}>
                <Link to="/" style={{color: "black", textDecoration: "none"}}> <ArrowBackIosIcon className="back-button" /></Link>
                </div>
                <br></br>
             
                <h1 style={{color: "rgb(57, 60, 126)"}}> Governance </h1>
                <br></br>
                <div style={{textAlign:"center"}}>
                <svg height={50} width={400}>
                    <line class="svg-line-1" x1={1} x2={500} y1={1} y2={1}/>
                </svg>
            </div>
            <p class="pick-document"> Choose a document to draft </p>
            <br></br>
            <br></br>
            
            <div class="formation-documents"> 
            
            <div class="document-icon">
            <DescriptionIcon style={{fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px"}} />
            <p> Board of Director Meeting Minutes </p>
            </div>
            
            <div class="document-icon">
            <DescriptionIcon style={{fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px"}} />
            <p> Board Resolution </p>
            </div>
             </div>

             <div class="formation-documents"> 
            
            <div class="document-icon">
            <DescriptionIcon style={{fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px"}} />
            <p> Waiver of Notice of the Meeting of the Board of Directors </p>
            </div>
            
            <div class="document-icon">
            <DescriptionIcon style={{fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px"}} />
            <p> Waiver of Notice of the Meeting of the Shareholders </p>
            </div>
             </div>

             <div class="formation-documents"> 
            
            <div class="document-icon">
            <DescriptionIcon style={{fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px"}} />
            <p> Shareholders Meeting Minutes </p>
            </div>
            
            <div class="document-icon">
            <DescriptionIcon style={{fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px"}} />
            <p> Shareholders Resolution </p>
            </div>
             </div>
             <div class="formation-documents"> 
            
            <div class="document-icon">
            <DescriptionIcon style={{fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px"}} />
            <p> Member Resolution (LLC) </p>
            </div>
            
            <div class="document-icon">
            <DescriptionIcon style={{fontSize: 120, color: "rgb(201, 201, 201)", padding: "10px"}} />
            <p> N/A </p>
            </div>
             </div>








            </div>
        );
    }
}